"use client";

import { useState } from "react";

type LicenseStatus = "licensed" | "associate";
type PayType = "split" | "flat";

const WEEKS_PER_MONTH = 4.33;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const moneyExact = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
});

function pct(value: number) {
  return `${Math.round(value * 100)}%`;
}

type NumberFieldProps = {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  hint?: string;
  min?: number;
  max?: number;
  step?: number;
};

function NumberField({ id, label, value, onChange, hint, min = 0, max, step = 1 }: NumberFieldProps) {
  return (
    <>
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type="number"
        inputMode="decimal"
        value={Number.isFinite(value) ? value : 0}
        min={min}
        max={max}
        step={step}
        onChange={(event) => onChange(Number(event.target.value))}
        className="focus-ring field-input"
      />
      {hint ? <p className="form-panel__hint">{hint}</p> : null}
    </>
  );
}

export function FairPayCalculator() {
  const [licenseStatus, setLicenseStatus] = useState<LicenseStatus>("licensed");
  const [sessionRate, setSessionRate] = useState(150);
  const [collectionRate, setCollectionRate] = useState(95);
  const [noShowRate, setNoShowRate] = useState(8);
  const [sessionsPerWeek, setSessionsPerWeek] = useState(22);
  const [clinicianCount, setClinicianCount] = useState(4);
  const [sharedOverheadMonthly, setSharedOverheadMonthly] = useState(8000);
  const [perClinicianMonthly, setPerClinicianMonthly] = useState(600);
  const [perSessionFees, setPerSessionFees] = useState(6);
  const [payType, setPayType] = useState<PayType>("split");
  const [payValue, setPayValue] = useState(55);

  // Revenue and volume
  const completedPerMonth = sessionsPerWeek * WEEKS_PER_MONTH * clamp(1 - noShowRate / 100, 0, 1);
  const revenuePerSession = sessionRate * clamp(collectionRate / 100, 0, 1);

  // Overhead per completed session: shared costs split across clinicians,
  // per-clinician costs kept individual, plus per-session fees
  const monthlyFixedCosts = sharedOverheadMonthly / Math.max(1, clinicianCount) + perClinicianMonthly;
  const overheadPerSession = completedPerMonth > 0 ? monthlyFixedCosts / completedPerMonth + perSessionFees : 0;

  const marginPerSession = revenuePerSession - overheadPerSession;
  const payPerSession = payType === "split" ? revenuePerSession * (payValue / 100) : payValue;
  const practiceRetains = marginPerSession - payPerSession;
  const shareOfMargin = marginPerSession > 0 ? payPerSession / marginPerSession : Number.NaN;

  // Benchmark: fairness is judged on share of post-overhead margin. The
  // benchmark starts at a baseline and rises as the structure generates
  // healthier surplus. Associates start lower and converge toward the
  // fully licensed benchmark when surplus is stronger.
  const surplusRatio = revenuePerSession > 0 ? marginPerSession / revenuePerSession : 0;
  const surplusHealth = clamp((surplusRatio - 0.45) / 0.3, 0, 1);
  const benchmark =
    licenseStatus === "licensed" ? 0.5 + 0.15 * surplusHealth : 0.4 + 0.22 * surplusHealth;

  let verdict: string;
  let verdictTone: "good" | "caution" | "bad";
  if (marginPerSession <= 0) {
    verdict =
      "Overhead exceeds collected revenue at these numbers. The structure is losing money per session, and fairness math does not apply until that is fixed.";
    verdictTone = "bad";
  } else if (payPerSession >= marginPerSession) {
    verdict =
      "Your pay meets or exceeds the entire post-overhead margin. The practice is subsidizing these sessions — common during ramp-up, not sustainable indefinitely.";
    verdictTone = "caution";
  } else if (shareOfMargin >= benchmark) {
    verdict = "At or above benchmark for this structure. The split favors the clinician or sits in balanced territory.";
    verdictTone = "good";
  } else if (shareOfMargin >= benchmark - 0.1) {
    verdict =
      "Below benchmark, but close. Worth a transparency conversation about what the practice is paying for and why the split is what it is.";
    verdictTone = "caution";
  } else {
    verdict =
      "Well below benchmark. Unless the practice is carrying unusual costs on your behalf, this is drifting into owner-favoring territory.";
    verdictTone = "bad";
  }

  const monthlyPay = payPerSession * completedPerMonth;

  return (
    <div className="grid gap-5 md:grid-cols-2">
      <form className="form-panel" onSubmit={(event) => event.preventDefault()}>
        <p className="label">Your numbers</p>
        <div className="form-grid">
          <label className="field-label" htmlFor="fp-license">
            License status
          </label>
          <select
            id="fp-license"
            value={licenseStatus}
            onChange={(event) => setLicenseStatus(event.target.value as LicenseStatus)}
            className="focus-ring field-input"
          >
            <option value="licensed">Fully licensed</option>
            <option value="associate">Associate</option>
          </select>

          <NumberField
            id="fp-rate"
            label="Session rate ($)"
            value={sessionRate}
            onChange={setSessionRate}
            hint="Listed rate, or your blended average reimbursement if insurance-based."
            step={5}
          />
          <NumberField
            id="fp-collection"
            label="Collection rate (%)"
            value={collectionRate}
            onChange={setCollectionRate}
            max={100}
          />
          <NumberField
            id="fp-noshow"
            label="No-show / late-cancel rate (%)"
            value={noShowRate}
            onChange={setNoShowRate}
            max={100}
          />
          <NumberField
            id="fp-sessions"
            label="Scheduled sessions per week"
            value={sessionsPerWeek}
            onChange={setSessionsPerWeek}
          />
          <NumberField
            id="fp-clinicians"
            label="Clinicians sharing overhead"
            value={clinicianCount}
            onChange={setClinicianCount}
            min={1}
          />
          <NumberField
            id="fp-shared"
            label="Shared practice overhead per month ($)"
            value={sharedOverheadMonthly}
            onChange={setSharedOverheadMonthly}
            hint="Rent, admin staff, marketing, shared software — costs split across the whole practice."
            step={100}
          />
          <NumberField
            id="fp-perclinician"
            label="Per-clinician costs per month ($)"
            value={perClinicianMonthly}
            onChange={setPerClinicianMonthly}
            hint="EHR seat, supervision, benefits, payroll costs attributable to you alone."
            step={50}
          />
          <NumberField
            id="fp-persession"
            label="Per-session fees ($)"
            value={perSessionFees}
            onChange={setPerSessionFees}
            hint="Card processing, billing service, and other fees charged per session."
          />

          <label className="field-label" htmlFor="fp-paytype">
            How you are paid
          </label>
          <select
            id="fp-paytype"
            value={payType}
            onChange={(event) => setPayType(event.target.value as PayType)}
            className="focus-ring field-input"
          >
            <option value="split">Percentage of collected revenue</option>
            <option value="flat">Flat amount per session</option>
          </select>

          <NumberField
            id="fp-payvalue"
            label={payType === "split" ? "Your split (%)" : "Your pay per session ($)"}
            value={payValue}
            onChange={setPayValue}
            max={payType === "split" ? 100 : undefined}
          />
        </div>
      </form>

      <div className="space-y-5">
        <article className="card">
          <p className="label">Per completed session</p>
          <dl className="mt-4 space-y-2 body">
            <div className="flex justify-between gap-4">
              <dt>Collected revenue</dt>
              <dd className="font-semibold">{moneyExact.format(revenuePerSession)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Estimated overhead</dt>
              <dd className="font-semibold">{moneyExact.format(overheadPerSession)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Post-overhead margin</dt>
              <dd className="font-semibold">{moneyExact.format(marginPerSession)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Your pay</dt>
              <dd className="font-semibold">{moneyExact.format(payPerSession)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Practice retains</dt>
              <dd className="font-semibold">{moneyExact.format(practiceRetains)}</dd>
            </div>
          </dl>
        </article>

        <article className="card">
          <p className="label">Share of post-overhead margin</p>
          <p className="mt-3 body text-2xl font-semibold text-ink">
            {Number.isFinite(shareOfMargin) ? pct(shareOfMargin) : "—"}
            <span className="ml-2 text-base font-normal">vs. a {pct(benchmark)} benchmark</span>
          </p>
          <p
            className={`mt-3 body ${
              verdictTone === "good" ? "" : verdictTone === "caution" ? "text-ink/80" : "font-semibold"
            }`}
          >
            {verdict}
          </p>
        </article>

        <article className="card">
          <p className="label">Monthly view</p>
          <dl className="mt-4 space-y-2 body">
            <div className="flex justify-between gap-4">
              <dt>Completed sessions</dt>
              <dd className="font-semibold">{Math.round(completedPerMonth)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Your estimated pay</dt>
              <dd className="font-semibold">{money.format(monthlyPay)}</dd>
            </div>
          </dl>
        </article>
      </div>
    </div>
  );
}
