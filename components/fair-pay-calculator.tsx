"use client";

import { useState } from "react";

type EmploymentMode = "w2" | "contractor";
type ClinicianType = "fullyLicensed" | "associate";
type PayType = "flat" | "percent";

const texasInsuranceRates: Record<string, number[]> = {
  "90832": [45.41, 47.49, 40.65, 42.0, 42.0, 51.53, 48.0, 50.94, 54.0, 54.0, 54.22, 54.0],
  "90834": [103.0, 62.67, 53.66, 56.0, 61.28, 67.97, 77.0, 74.0, 75.0, 75.0, 85.85, 75.0],
  "90837": [129.74, 92.83, 79.44, 84.0, 92.04, 102.0, 95.0, 115.0, 112.0, 112.0, 125.8, 112.0],
  "90839": [104.07, 89.29, 76.22, 87.0, 87.0, 96.47, 99.0, 106.58, 113.0, 113.0, 101.62, 113.0],
  "90846": [82.99, 59.47, 51.01, 67.0, 67.0, 64.24, 73.0, 82.24, 75.99, 75.99, 74.79, 75.99],
  "90847": [101.77, 62.01, 53.2, 69.0, 69.0, 67.31, 76.0, 85.57, 78.67, 78.67, 77.73, 78.67]
};

const texasCptDescriptions: Record<string, string> = {
  "90832": "Psychotherapy, 30 minutes",
  "90834": "Psychotherapy, 45 minutes",
  "90837": "Psychotherapy, 60 minutes",
  "90839": "Crisis psychotherapy, first 60 minutes",
  "90846": "Family psychotherapy without patient",
  "90847": "Family psychotherapy with patient"
};

const texasCptOrder = ["90832", "90834", "90837", "90839", "90846", "90847"];
const associateTargetMultiplier = 0.8;

const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

function currency(value: number) {
  return currencyFormat.format(value);
}

function percent(value: number) {
  return `${value.toFixed(1)}%`;
}

function points(value: number) {
  const prefix = value > 0 ? "+" : "";
  return `${prefix}${value.toFixed(1)} pts`;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function average(values: number[]) {
  return values.length ? values.reduce((total, value) => total + value, 0) / values.length : 0;
}

function roundToNearestFive(value: number) {
  return Math.round(value / 5) * 5;
}

function getTexasCptAverage(code: string) {
  return roundToNearestFive(average(texasInsuranceRates[code] ?? []));
}

function getBenchmarkShare(employmentMode: EmploymentMode, clinicianType: ClinicianType) {
  const fullyLicensedTargetNetShare = employmentMode === "contractor" ? 60 : 50;
  return clinicianType === "associate"
    ? fullyLicensedTargetNetShare * associateTargetMultiplier
    : fullyLicensedTargetNetShare;
}

type BenchmarkProfile = {
  benchmarkNetShare: number;
  monthlyMargin: number;
  marginLabel: string;
  characteristics: string;
};

function getBenchmarkProfile(
  employmentMode: EmploymentMode,
  clinicianType: ClinicianType,
  marginPerCompletedSession: number,
  completedSessions: number,
  monthlyRevenue: number
): BenchmarkProfile {
  const fullyLicensedBaseTarget = getBenchmarkShare(employmentMode, "fullyLicensed");
  let baseTarget = getBenchmarkShare(employmentMode, clinicianType);
  const monthlyMargin = marginPerCompletedSession * completedSessions;
  let adjustment = 0;
  let marginLabel = "";
  let characteristics = "";
  let associateCatchUp = 0;

  if (marginPerCompletedSession <= 0 || monthlyRevenue <= 0) {
    return {
      benchmarkNetShare: baseTarget,
      monthlyMargin,
      marginLabel: "No positive margin",
      characteristics:
        "There is not positive post-overhead margin to split, so the calculator cannot apply a meaningful fairness benchmark."
    };
  }

  if (marginPerCompletedSession < 15 || monthlyMargin < 1000) {
    marginLabel = "Thin-margin structure";
    characteristics =
      "This looks like a low-price, low-volume, or high-overhead setup where there is not much true surplus left after costs. In that kind of structure, a lower benchmark can still read as balanced because the practice is not sitting on much extra margin.";
  } else if (marginPerCompletedSession < 35 || monthlyMargin < 3000) {
    adjustment = 5;
    associateCatchUp = clinicianType === "associate" ? 2 : 0;
    marginLabel = "Moderate-margin structure";
    characteristics =
      "There is some real surplus after overhead, but not an enormous amount. Once margin gets into this range, a clinician share above the bare minimum starts to feel more appropriate than a flat baseline split.";
  } else if (marginPerCompletedSession < 60 || monthlyMargin < 6000) {
    adjustment = 10;
    associateCatchUp = clinicianType === "associate" ? 4 : 0;
    marginLabel = "Healthy-margin structure";
    characteristics =
      "This arrangement is generating enough post-overhead surplus that the clinician benchmark should rise. A practice retaining half of the remaining profit starts to become harder to justify here.";
  } else {
    adjustment = 15;
    associateCatchUp = clinicianType === "associate" ? 6 : 0;
    marginLabel = "High-surplus structure";
    characteristics =
      "This looks like a high-fee, high-volume, or highly efficient structure with substantial post-overhead profit. In this range, a clinician share well above the baseline becomes easier to justify, and owner retention deserves more scrutiny.";
  }

  if (clinicianType === "associate") {
    baseTarget = Math.min(baseTarget + associateCatchUp, fullyLicensedBaseTarget);
  }

  return {
    benchmarkNetShare: baseTarget + adjustment,
    monthlyMargin,
    marginLabel,
    characteristics
  };
}

type Interpretation = {
  statusClass: "good" | "caution" | "warn";
  statusLabel: string;
  statusText: string;
};

function getInterpretation(
  employmentMode: EmploymentMode,
  clinicianType: ClinicianType,
  actualNetShare: number,
  benchmarkNetShare: number,
  marginPerCompletedSession: number,
  benchmarkProfile: BenchmarkProfile
): Interpretation {
  const benchmarkDifference = actualNetShare - benchmarkNetShare;

  if (marginPerCompletedSession <= 0) {
    return {
      statusClass: "warn",
      statusLabel: "No positive margin to split",
      statusText:
        "The calculator is not showing positive post-overhead margin per completed session, so there is no meaningful net-profit split to benchmark."
    };
  }

  if (clinicianType === "associate") {
    if (benchmarkDifference < -5) {
      return {
        statusClass: "warn",
        statusLabel: "Below associate benchmark",
        statusText: `${benchmarkProfile.characteristics} Based on that profile, the clinician share is landing meaningfully below the associate benchmark.`
      };
    }
    if (benchmarkDifference > 5) {
      return {
        statusClass: "good",
        statusLabel: "Stronger than typical associate benchmark",
        statusText: `${benchmarkProfile.characteristics} Based on that profile, the clinician share is running meaningfully above the associate benchmark.`
      };
    }
    return {
      statusClass: "caution",
      statusLabel: "Within expected associate range",
      statusText: `${benchmarkProfile.characteristics} Based on that profile, the clinician share is landing near the associate benchmark.`
    };
  }

  if (employmentMode === "contractor") {
    if (benchmarkDifference < -5) {
      return {
        statusClass: "warn",
        statusLabel: "Below 1099 benchmark",
        statusText: `${benchmarkProfile.characteristics} For a 1099 clinician, the share of post-overhead margin is landing meaningfully below the benchmark for this kind of structure.`
      };
    }
    if (benchmarkDifference < 0) {
      return {
        statusClass: "caution",
        statusLabel: "Slightly below 1099 benchmark",
        statusText: `${benchmarkProfile.characteristics} The clinician share is a little below the benchmark, which means the practice is still retaining a larger share than expected for this 1099 arrangement.`
      };
    }
    if (benchmarkDifference <= 5) {
      return {
        statusClass: "good",
        statusLabel: "Within balanced 1099 range",
        statusText: `${benchmarkProfile.characteristics} The clinician is receiving a contractor-typical share of post-overhead margin for this level of margin.`
      };
    }
    return {
      statusClass: "good",
      statusLabel: "Clinician-favoring relative to 1099 benchmark",
      statusText: `${benchmarkProfile.characteristics} The clinician is receiving more than the typical contractor benchmark for this level of post-overhead margin.`
    };
  }

  if (benchmarkDifference < -5) {
    return {
      statusClass: "warn",
      statusLabel: "Below fairness benchmark",
      statusText: `${benchmarkProfile.characteristics} Based on that margin profile, the clinician share is landing meaningfully below benchmark.`
    };
  }
  if (benchmarkDifference < 0) {
    return {
      statusClass: "caution",
      statusLabel: "Slightly below benchmark",
      statusText: `${benchmarkProfile.characteristics} The clinician share is a little below the benchmark for this level of post-overhead margin.`
    };
  }
  if (benchmarkDifference <= 5) {
    return {
      statusClass: "good",
      statusLabel: "Within balanced range",
      statusText: `${benchmarkProfile.characteristics} The clinician is receiving a roughly balanced share for this level of post-overhead margin.`
    };
  }
  return {
    statusClass: "good",
    statusLabel: "Clinician-favoring relative to benchmark",
    statusText: `${benchmarkProfile.characteristics} The clinician is receiving more than the benchmark for this level of post-overhead margin.`
  };
}

const defaults = {
  cashRate: 150,
  insuranceRate: 105,
  collectionRate: 95,
  noShowRate: 10,
  useTexasRate: false,
  cashMix: 20,
  insuranceMix: 80,
  sessionsPerWeek: 22,
  weeksPerMonth: 4.3,
  payType: "flat" as PayType,
  flatRate: 40,
  splitPercent: 50,
  clinicianType: "fullyLicensed" as ClinicianType,
  sharedClinicians: 1,
  rent: 700,
  ehr: 70,
  liability: 15,
  supervision: 400,
  bookkeeping: 1000,
  marketing: 40,
  other: 0,
  benefits: 0,
  ptoBenefit: 0,
  payroll: 25,
  cardFeeRate: 3,
  billerFeeRate: 5,
  benefitsDefault: 0,
  selectedCodes: ["90837"]
};

type NumberFieldProps = {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  hint?: string;
  affix?: string;
  min?: number;
  max?: number;
  step?: number;
  readOnly?: boolean;
};

function NumberField({ id, label, value, onChange, hint, affix, min = 0, max, step = 1, readOnly }: NumberFieldProps) {
  return (
    <div>
      <label className="field-label" htmlFor={id}>
        {label}
        {affix ? ` (${affix})` : ""}
      </label>
      <input
        id={id}
        type="number"
        inputMode="decimal"
        value={Number.isFinite(value) ? value : 0}
        min={min}
        max={max}
        step={step}
        readOnly={readOnly}
        aria-readonly={readOnly ? "true" : undefined}
        onChange={(event) => onChange(Number(event.target.value))}
        className="focus-ring field-input w-full"
      />
      {hint ? <p className="form-panel__hint">{hint}</p> : null}
    </div>
  );
}

export function FairPayCalculator() {
  const [mode, setMode] = useState<EmploymentMode>("w2");
  const [clinicianType, setClinicianType] = useState<ClinicianType>(defaults.clinicianType);
  const [cashRate, setCashRate] = useState(defaults.cashRate);
  const [insuranceRate, setInsuranceRate] = useState(defaults.insuranceRate);
  const [useTexasRate, setUseTexasRate] = useState(defaults.useTexasRate);
  const [selectedCodes, setSelectedCodes] = useState<string[]>(defaults.selectedCodes);
  const [showCptPicker, setShowCptPicker] = useState(false);
  const [collectionRate, setCollectionRate] = useState(defaults.collectionRate);
  const [noShowRate, setNoShowRate] = useState(defaults.noShowRate);
  const [cashMix, setCashMix] = useState(defaults.cashMix);
  const [insuranceMix, setInsuranceMix] = useState(defaults.insuranceMix);
  const [sessionsPerWeek, setSessionsPerWeek] = useState(defaults.sessionsPerWeek);
  const [weeksPerMonth, setWeeksPerMonth] = useState(defaults.weeksPerMonth);
  const [payType, setPayType] = useState<PayType>(defaults.payType);
  const [flatRate, setFlatRate] = useState(defaults.flatRate);
  const [splitPercent, setSplitPercent] = useState(defaults.splitPercent);
  const [sharedClinicians, setSharedClinicians] = useState(defaults.sharedClinicians);
  const [bookkeeping, setBookkeeping] = useState(defaults.bookkeeping);
  const [other, setOther] = useState(defaults.other);
  const [rent, setRent] = useState(defaults.rent);
  const [ehr, setEhr] = useState(defaults.ehr);
  const [marketing, setMarketing] = useState(defaults.marketing);
  const [liability, setLiability] = useState(defaults.liability);
  const [supervision, setSupervision] = useState(defaults.supervision);
  const [benefits, setBenefits] = useState(defaults.benefits);
  const [ptoBenefit, setPtoBenefit] = useState(defaults.ptoBenefit);
  const [payroll, setPayroll] = useState(defaults.payroll);
  const [cardFeeRate, setCardFeeRate] = useState(defaults.cardFeeRate);
  const [billerFeeRate, setBillerFeeRate] = useState(defaults.billerFeeRate);
  const [benefitsDefault, setBenefitsDefault] = useState(defaults.benefitsDefault);

  function resetDefaults() {
    setMode("w2");
    setClinicianType(defaults.clinicianType);
    setCashRate(defaults.cashRate);
    setInsuranceRate(defaults.insuranceRate);
    setUseTexasRate(defaults.useTexasRate);
    setSelectedCodes(defaults.selectedCodes);
    setShowCptPicker(false);
    setCollectionRate(defaults.collectionRate);
    setNoShowRate(defaults.noShowRate);
    setCashMix(defaults.cashMix);
    setInsuranceMix(defaults.insuranceMix);
    setSessionsPerWeek(defaults.sessionsPerWeek);
    setWeeksPerMonth(defaults.weeksPerMonth);
    setPayType(defaults.payType);
    setFlatRate(defaults.flatRate);
    setSplitPercent(defaults.splitPercent);
    setSharedClinicians(defaults.sharedClinicians);
    setBookkeeping(defaults.bookkeeping);
    setOther(defaults.other);
    setRent(defaults.rent);
    setEhr(defaults.ehr);
    setMarketing(defaults.marketing);
    setLiability(defaults.liability);
    setSupervision(defaults.supervision);
    setBenefits(defaults.benefits);
    setPtoBenefit(defaults.ptoBenefit);
    setPayroll(defaults.payroll);
    setCardFeeRate(defaults.cardFeeRate);
    setBillerFeeRate(defaults.billerFeeRate);
    setBenefitsDefault(defaults.benefitsDefault);
  }

  function toggleCode(code: string) {
    setSelectedCodes((current) => {
      if (current.includes(code)) {
        return current.filter((value) => value !== code);
      }
      if (current.length >= 3) {
        return current;
      }
      return [...current, code];
    });
  }

  const isContractor = mode === "contractor";
  const isAssociate = clinicianType === "associate";

  // Derived math — ported from the original calculator
  const texasRate = selectedCodes.length
    ? average(selectedCodes.map(getTexasCptAverage))
    : getTexasCptAverage("90837");
  const effectiveInsuranceRate = useTexasRate ? texasRate : insuranceRate;

  const totalMix = clamp(cashMix, 0, 100) + clamp(insuranceMix, 0, 100);
  const normalizedCashMix = totalMix > 0 ? clamp(cashMix, 0, 100) / totalMix : 0;
  const normalizedInsuranceMix = totalMix > 0 ? clamp(insuranceMix, 0, 100) / totalMix : 0;
  const effectiveListedRate = cashRate * normalizedCashMix + effectiveInsuranceRate * normalizedInsuranceMix;

  let benefitsValue = isContractor ? 0 : benefits;
  if (!isContractor && benefitsValue === 0 && benefitsDefault > 0) {
    benefitsValue = benefitsDefault;
  }
  const ptoValue = isContractor ? 0 : ptoBenefit;
  const payrollValue = isContractor ? 0 : payroll;

  const completedSessions = Math.max(sessionsPerWeek, 0) * Math.max(weeksPerMonth, 0) * (1 - clamp(noShowRate, 0, 100) / 100);
  const collectedRevenuePerCompletedSession = effectiveListedRate * (clamp(collectionRate, 0, 100) / 100);
  const monthlyRevenue = completedSessions * collectedRevenuePerCompletedSession;
  const monthlyBillerFees = monthlyRevenue * (clamp(billerFeeRate, 0, 100) / 100);
  const monthlyCashRevenue = completedSessions * cashRate * normalizedCashMix * (clamp(collectionRate, 0, 100) / 100);
  const monthlyCardFees = monthlyCashRevenue * (clamp(cardFeeRate, 0, 100) / 100);

  // Liability is treated as a shared cost for W-2 setups and an individual
  // cost for 1099 setups, matching the original tool
  let sharedOverheadTotal = bookkeeping + other;
  if (!isContractor) {
    sharedOverheadTotal += liability;
  }
  const sharedOverheadPerClinician = sharedOverheadTotal / Math.max(sharedClinicians, 1);
  const perClinicianOverhead =
    rent +
    ehr +
    marketing +
    (isContractor ? liability : 0) +
    (isAssociate ? supervision : 0) +
    benefitsValue +
    ptoValue +
    payrollValue +
    monthlyBillerFees +
    monthlyCardFees;

  const monthlyOverhead = sharedOverheadPerClinician + perClinicianOverhead;
  const overheadPerCompletedSession = completedSessions > 0 ? monthlyOverhead / completedSessions : 0;
  const marginPerCompletedSession = collectedRevenuePerCompletedSession - overheadPerCompletedSession;

  const clinicianPayPerSession =
    payType === "percent"
      ? collectedRevenuePerCompletedSession * (clamp(splitPercent, 0, 100) / 100)
      : flatRate;

  const clinicianMonthlyPay = clinicianPayPerSession * completedSessions;
  const practiceRetainedPerSession = collectedRevenuePerCompletedSession - clinicianPayPerSession;
  const clinicianShareGross =
    collectedRevenuePerCompletedSession > 0
      ? (clinicianPayPerSession / collectedRevenuePerCompletedSession) * 100
      : 0;
  const clinicianShareMargin =
    marginPerCompletedSession > 0 ? (clinicianPayPerSession / marginPerCompletedSession) * 100 : 0;

  const benchmarkProfile = getBenchmarkProfile(
    mode,
    clinicianType,
    marginPerCompletedSession,
    completedSessions,
    monthlyRevenue
  );
  const benchmarkTargetNetShare = benchmarkProfile.benchmarkNetShare;
  const differenceFromBenchmark = clinicianShareMargin - benchmarkTargetNetShare;
  const interpretation = getInterpretation(
    mode,
    clinicianType,
    clinicianShareMargin,
    benchmarkTargetNetShare,
    marginPerCompletedSession,
    benchmarkProfile
  );

  const hasMargin = marginPerCompletedSession > 0;
  const clinicianBar = hasMargin ? clamp(clinicianShareMargin, 0, 100) : 0;
  const ownerBar = hasMargin ? clamp(100 - clinicianShareMargin, 0, 100) : 0;

  const benchmarkContext = isAssociate
    ? `${benchmarkProfile.marginLabel}. Associate benchmark starts from ${percent(associateTargetMultiplier * 100)} of the fully licensed target for this mode, then moves closer to the fully licensed benchmark as surplus gets stronger.`
    : `${benchmarkProfile.marginLabel}. ${
        isContractor
          ? "1099 mode starts from a 60/40 post-overhead benchmark on the clinician side and scales up as margin gets stronger."
          : "W-2 mode starts from a 50/50 post-overhead benchmark and scales up as margin gets stronger."
      }`;
  const rateContext = useTexasRate
    ? `Insurance estimate is using ${selectedCodes.length} selected CPT code${selectedCodes.length === 1 ? "" : "s"} averaged to the nearest $5.`
    : "Insurance estimate is using your manual average reimbursement input.";

  const metrics: Array<{ label: string; value: string }> = [
    { label: "Blended listed session rate", value: currency(effectiveListedRate) },
    { label: "Collected revenue per completed session", value: currency(collectedRevenuePerCompletedSession) },
    { label: "Overhead per completed session", value: currency(overheadPerCompletedSession) },
    { label: "Available margin after overhead", value: currency(marginPerCompletedSession) },
    { label: "Your pay per completed session", value: currency(clinicianPayPerSession) },
    { label: "Your share of gross revenue", value: percent(clinicianShareGross) },
    { label: "Actual share of post-overhead margin", value: hasMargin ? percent(clinicianShareMargin) : "N/A" },
    { label: "Margin profile", value: benchmarkProfile.marginLabel },
    { label: "Benchmark target net share", value: hasMargin ? percent(benchmarkTargetNetShare) : "N/A" },
    { label: "Difference from benchmark", value: hasMargin ? points(differenceFromBenchmark) : "N/A" }
  ];

  const breakdownRows: Array<{ label: string; value: string }> = [
    { label: "Cash pay price", value: currency(cashRate) },
    { label: "Average insurance rate", value: currency(effectiveInsuranceRate) },
    { label: "Cash pay share of caseload", value: percent(normalizedCashMix * 100) },
    { label: "Insurance share of caseload", value: percent(normalizedInsuranceMix * 100) },
    { label: "Clinicians sharing overhead", value: Math.max(sharedClinicians, 1).toFixed(0) },
    { label: "Completed sessions per month", value: completedSessions.toFixed(1) },
    { label: "Estimated monthly revenue", value: currency(monthlyRevenue) },
    { label: "Total shared overhead entered", value: currency(sharedOverheadTotal) },
    { label: "Your share of shared overhead", value: currency(sharedOverheadPerClinician) },
    { label: "Estimated monthly overhead", value: currency(monthlyOverhead) },
    { label: "Benefits included monthly", value: currency(benefitsValue) },
    { label: "PTO included monthly", value: currency(ptoValue) },
    { label: "Payroll included monthly", value: currency(payrollValue) },
    { label: "Card fees included monthly", value: currency(monthlyCardFees) },
    { label: "Biller fees included monthly", value: currency(monthlyBillerFees) },
    { label: "Your monthly pay", value: currency(clinicianMonthlyPay) },
    { label: "Practice retained per completed session", value: currency(practiceRetainedPerSession) }
  ];

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <form className="form-panel" onSubmit={(event) => event.preventDefault()}>
        <p className="label">Run the numbers</p>

        <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Employment type">
          <button
            type="button"
            role="tab"
            aria-selected={!isContractor}
            onClick={() => setMode("w2")}
            className={`focus-ring button ${isContractor ? "button--secondary" : "button--primary"}`}
          >
            W-2 Clinician
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={isContractor}
            onClick={() => setMode("contractor")}
            className={`focus-ring button ${isContractor ? "button--primary" : "button--secondary"}`}
          >
            1099 Clinician
          </button>
        </div>
        <p className="form-panel__hint mt-3">
          {isContractor
            ? "1099 mode strips out W-2-only benefits and payroll assumptions, and uses a higher fairness benchmark because contractor arrangements usually do not include those supports."
            : "W-2 mode assumes the practice may be carrying benefits, payroll, and more support infrastructure, so the fairness benchmark starts from a lower tipping point."}
        </p>

        <div className="mt-6">
          <p className="label">Session economics</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <NumberField
              id="fpc-cash-rate"
              label="Cash pay session price"
              affix="$"
              value={cashRate}
              onChange={setCashRate}
              hint="What a self-pay client would pay for the session you are modeling."
            />
            <NumberField
              id="fpc-insurance-rate"
              label="Average insurance reimbursement"
              affix="$"
              value={useTexasRate ? Math.round(texasRate) : insuranceRate}
              onChange={(value) => {
                setUseTexasRate(false);
                setInsuranceRate(value);
              }}
              readOnly={useTexasRate}
              hint={
                useTexasRate
                  ? "Using the Texas CPT estimate. Open the estimator below to update the codes or switch back to a manual amount."
                  : "Enter your own average, or estimate it from common Texas CPT reimbursements below."
              }
            />
            <NumberField
              id="fpc-noshow"
              label="No-show or late cancel rate"
              affix="%"
              value={noShowRate}
              onChange={setNoShowRate}
              max={100}
              hint="Percent of scheduled sessions that do not complete."
            />
            <NumberField
              id="fpc-collection"
              label="Collection rate"
              affix="%"
              value={collectionRate}
              onChange={setCollectionRate}
              max={100}
              hint="Percent actually collected after clawbacks or write-offs."
            />
            <NumberField
              id="fpc-cash-mix"
              label="Cash pay clients"
              affix="%"
              value={cashMix}
              onChange={setCashMix}
              max={100}
              hint="Percent of your caseload that is self-pay."
            />
            <NumberField
              id="fpc-insurance-mix"
              label="Insurance clients"
              affix="%"
              value={insuranceMix}
              onChange={setInsuranceMix}
              max={100}
              hint="Percent of your caseload using insurance."
            />
          </div>

          <button
            type="button"
            onClick={() => setShowCptPicker((value) => !value)}
            className="focus-ring button button--secondary mt-4"
          >
            {showCptPicker ? "Hide Texas CPT estimator" : "Estimate from Texas CPT averages"}
          </button>

          {showCptPicker ? (
            <div className="card mt-4">
              <p className="label">Primary CPT codes</p>
              <p className="form-panel__hint mt-2">
                Select up to 3. {selectedCodes.length} selected. Current Texas average:{" "}
                {currency(texasRate)} from {selectedCodes.length ? selectedCodes.join(", ") : "90837"}. Codes are
                weighted evenly in this estimate, so leave out anything that is only a small slice of your
                practice.
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {texasCptOrder.map((code) => {
                  const checked = selectedCodes.includes(code);
                  return (
                    <label key={code} className="flex items-start gap-2 body">
                      <input
                        type="checkbox"
                        checked={checked}
                        disabled={!checked && selectedCodes.length >= 3}
                        onChange={() => toggleCode(code)}
                        className="mt-1"
                      />
                      <span>
                        <strong>{code}</strong>
                        <br />
                        <span className="text-sm text-ink/75">
                          {texasCptDescriptions[code]} • Approx {currency(getTexasCptAverage(code))}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setUseTexasRate(true);
                    setShowCptPicker(false);
                  }}
                  className="focus-ring button button--primary"
                >
                  Calculate average
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setUseTexasRate(false);
                    setShowCptPicker(false);
                  }}
                  className="focus-ring button button--secondary"
                >
                  Use manual amount
                </button>
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-6">
          <p className="label">Caseload and pay</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <NumberField
              id="fpc-sessions"
              label="Scheduled sessions per week"
              value={sessionsPerWeek}
              onChange={setSessionsPerWeek}
              step={0.5}
            />
            <NumberField
              id="fpc-weeks"
              label="Working weeks per month"
              value={weeksPerMonth}
              onChange={setWeeksPerMonth}
              step={0.1}
            />
            <div>
              <label className="field-label" htmlFor="fpc-paytype">
                How are you paid?
              </label>
              <select
                id="fpc-paytype"
                value={payType}
                onChange={(event) => setPayType(event.target.value as PayType)}
                className="focus-ring field-input w-full"
              >
                <option value="flat">Flat rate per completed session</option>
                <option value="percent">Percentage of collected revenue</option>
              </select>
            </div>
            {payType === "percent" ? (
              <NumberField
                id="fpc-split"
                label="Clinician percentage of collected revenue"
                affix="%"
                value={splitPercent}
                onChange={setSplitPercent}
                max={100}
                hint="Example: enter 60 for a 60/40 split on the clinician side."
              />
            ) : (
              <NumberField
                id="fpc-flat"
                label="Your pay per completed session"
                affix="$"
                value={flatRate}
                onChange={setFlatRate}
                hint="Flat rate paid when a session is completed and collected."
              />
            )}
          </div>
        </div>

        <div className="mt-6">
          <p className="label">Benchmark settings</p>
          <p className="form-panel__hint mt-2">
            {isContractor
              ? "For fully licensed clinicians, 1099 mode starts from a 60/40 post-overhead benchmark on the clinician side, then adjusts upward when the structure is generating stronger margin. For associates, it starts lower and moves closer to the fully licensed benchmark as surplus gets stronger."
              : "For fully licensed clinicians, W-2 mode starts from a 50/50 post-overhead benchmark, then adjusts upward when the structure is generating stronger margin. For associates, it starts lower and moves closer to the fully licensed benchmark as surplus gets stronger."}
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="field-label" htmlFor="fpc-clinician-type">
                Clinician type
              </label>
              <select
                id="fpc-clinician-type"
                value={clinicianType}
                onChange={(event) => setClinicianType(event.target.value as ClinicianType)}
                className="focus-ring field-input w-full"
              >
                <option value="fullyLicensed">Fully licensed</option>
                <option value="associate">Associate</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="label">Overhead assumptions</p>
          <p className="form-panel__hint mt-2">Blank overhead fields are treated as $0.</p>

          <p className="field-label mt-4">Shared practice costs</p>
          <p className="form-panel__hint">
            Enter the total monthly costs the practice owner is covering across the shared practice setup. The
            calculator will divide these costs across the number of clinicians sharing them.
          </p>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <NumberField
              id="fpc-shared-clinicians"
              label="Clinicians sharing these costs"
              value={sharedClinicians}
              onChange={setSharedClinicians}
              min={1}
              hint="Use the total number of clinicians sharing bookkeeping and other group practice overhead."
            />
            <NumberField
              id="fpc-bookkeeping"
              label="Bookkeeping or tax admin (shared total)"
              affix="$"
              value={bookkeeping}
              onChange={setBookkeeping}
            />
            <NumberField
              id="fpc-other"
              label="Other shared monthly practice costs"
              affix="$"
              value={other}
              onChange={setOther}
            />
          </div>

          <p className="field-label mt-6">Individual costs</p>
          <p className="form-panel__hint">
            Enter costs that can be reasonably known or closely estimated for one clinician, rather than the
            whole practice.
          </p>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <NumberField
              id="fpc-rent"
              label="Rent"
              affix="$"
              value={rent}
              onChange={setRent}
              hint="Use your own monthly room or office cost if the practice is sharing a suite."
            />
            <NumberField
              id="fpc-ehr"
              label="EHR"
              affix="$"
              value={ehr}
              onChange={setEhr}
              hint="Your monthly EHR cost. Leave as the per-clinician amount."
            />
            <NumberField
              id="fpc-marketing"
              label="Marketing or directory spend"
              affix="$"
              value={marketing}
              onChange={setMarketing}
              hint="Basic directory presence starts around this range, but paid growth can raise it quickly."
            />
            <NumberField
              id="fpc-liability"
              label="Liability insurance"
              affix="$"
              value={liability}
              onChange={setLiability}
              hint="Use your own monthly liability insurance cost."
            />
            {isAssociate ? (
              <NumberField
                id="fpc-supervision"
                label="Supervision"
                affix="$"
                value={supervision}
                onChange={setSupervision}
                hint="Your monthly supervision cost. Leave as the per-clinician amount."
              />
            ) : null}
            {!isContractor ? (
              <>
                <NumberField
                  id="fpc-benefits"
                  label="Monthly value of benefits"
                  affix="$"
                  value={benefits}
                  onChange={setBenefits}
                  hint="Optional. Use this for health insurance, employer tax burden, or other real W-2 benefits value."
                />
                <NumberField
                  id="fpc-pto"
                  label="Monthly PTO benefit value"
                  affix="$"
                  value={ptoBenefit}
                  onChange={setPtoBenefit}
                  hint="Optional. Use this if paid time off is part of the support package and you want it counted separately."
                />
                <NumberField
                  id="fpc-payroll"
                  label="Monthly payroll costs"
                  affix="$"
                  value={payroll}
                  onChange={setPayroll}
                  hint="Average payroll software and processing overhead. Set to zero if not used."
                />
              </>
            ) : null}
            <NumberField
              id="fpc-card-fee"
              label="Credit card processing rate"
              affix="%"
              value={cardFeeRate}
              onChange={setCardFeeRate}
              max={100}
              step={0.1}
              hint="Rough default for card processing on collected self-pay revenue."
            />
            <NumberField
              id="fpc-biller-rate"
              label="Biller fee rate"
              affix="%"
              value={billerFeeRate}
              onChange={setBillerFeeRate}
              max={100}
              step={0.5}
              hint="Optional. Percent of collected revenue paid to a biller. Set to zero if not used."
            />
            {!isContractor ? (
              <div>
                <label className="field-label" htmlFor="fpc-benefits-default">
                  Benefits assumption quickfill
                </label>
                <select
                  id="fpc-benefits-default"
                  value={String(benefitsDefault)}
                  onChange={(event) => {
                    const value = Number(event.target.value);
                    setBenefitsDefault(value);
                    if (benefits === 0 && value > 0) {
                      setBenefits(value);
                    }
                  }}
                  className="focus-ring field-input w-full"
                >
                  <option value="0">No default</option>
                  <option value="300">Lean benefits estimate</option>
                  <option value="600">Average benefits estimate</option>
                  <option value="900">Robust benefits estimate</option>
                </select>
                <p className="form-panel__hint">
                  Optional shortcut if you want to plug in a rough monthly benefits value fast.
                </p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-6">
          <button type="button" onClick={resetDefaults} className="focus-ring button button--secondary">
            Reset defaults
          </button>
        </div>
      </form>

      <div className="space-y-5">
        <article className="card">
          <p className="label">What the split actually looks like</p>
          <p className={`mt-3 h3 ${interpretation.statusClass === "warn" ? "text-accent" : ""}`}>
            {interpretation.statusLabel}
          </p>
          <p className="body mt-2">{interpretation.statusText}</p>
        </article>

        <article className="card">
          <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-1">
                <dt className="text-sm text-ink/70">{metric.label}</dt>
                <dd className="body font-semibold">{metric.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex h-3 w-full overflow-hidden rounded-full bg-ink/10" aria-hidden="true">
            <div className="h-full bg-accent" style={{ width: `${clinicianBar}%` }} />
            <div className="h-full bg-ink/30" style={{ width: `${ownerBar}%` }} />
          </div>
          <div className="mt-2 flex justify-between gap-4 text-sm text-ink/75">
            <span>
              {hasMargin
                ? `Clinician receives ${percent(clamp(clinicianShareMargin, 0, 100))} of net margin`
                : "Clinician net share unavailable"}
            </span>
            <span>
              {hasMargin
                ? `Practice retains ${percent(clamp(100 - clinicianShareMargin, 0, 100))} of net margin`
                : "Practice share unavailable"}
            </span>
          </div>
        </article>

        <article className="card">
          <p className="label">Monthly breakdown</p>
          <table className="mt-4 w-full text-left" aria-label="Monthly breakdown">
            <tbody>
              {breakdownRows.map((row) => (
                <tr key={row.label} className="border-t border-ink/10 first:border-t-0">
                  <td className="py-2 pr-4 body text-sm">{row.label}</td>
                  <td className="py-2 body text-sm font-semibold">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="form-panel__hint mt-4">
            {benchmarkContext} {benchmarkProfile.characteristics} {rateContext}
          </p>
        </article>
      </div>
    </div>
  );
}
