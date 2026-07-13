import { frameworks } from "@/src/content/frameworks";
import { siteContent } from "@/src/content/site";

export const siteConfig = {
  brand: siteContent.brandName,
  legalEntityNote: siteContent.legalEntityNote,
  credentialsLine: siteContent.credentialsLine,
  siteUrl: siteContent.siteUrl,
  bookingUrl: siteContent.bookingUrl,
  contactEndpoint: siteContent.contactEndpoint,
  email: siteContent.email,
  phone: siteContent.phone,
  substackUrl: siteContent.substackUrl,
  sameAs: siteContent.sameAs,
  addressLine1: siteContent.location.addressLine1,
  cityStateZip: `${siteContent.location.city}, ${siteContent.location.state} ${siteContent.location.postalCode}`,
  mapUrl: siteContent.location.mapUrl,
  primaryLocation: siteContent.primaryLocation,
  secondaryLocation: siteContent.secondaryLocation,
  telehealthRegion: siteContent.telehealthRegion,
  locationSummaryLine: `${siteContent.primaryLocation} • ${siteContent.secondaryLocation} • ${siteContent.telehealthRegion}`,
  serviceAreas: [...siteContent.serviceAreas, "Texas"],
  credentials: siteContent.credentials
} as const;

export const pricing = {
  standardSession: {
    fee: siteContent.standardSessionFee,
    duration: siteContent.sessionLength
  },
  constructiveTrack: {
    arc6: {
      label: siteContent.constructive.packages.trackPackageA.name,
      fee: siteContent.constructive.packages.trackPackageA.price,
      details: `${siteContent.constructive.packages.trackPackageA.description} (materials included up to $${siteContent.constructive.packages.trackPackageA.materialsIncludedUpTo})`
    },
    arc10: {
      label: siteContent.constructive.packages.trackPackageB.name,
      fee: siteContent.constructive.packages.trackPackageB.price,
      details: `${siteContent.constructive.packages.trackPackageB.description} (materials included up to $${siteContent.constructive.packages.trackPackageB.materialsIncludedUpTo})`
    }
  }
} as const;

export const navItems = [
  { href: "/work-with-me", label: "Approach" },
  { href: "/supervision", label: "Supervision" },
  { href: "/consultation", label: "Consultation" },
  { href: "/ideas", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
] as const;

export const frameworkLinks = frameworks.map((framework) => ({
  label: framework.name,
  href: `/frameworks/${framework.slug}`
}));
