// FILE: /pages/api/ai-profile.ts

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["House", "LodgingBusiness"],
    name: "StayNoosaHouse",
    alternateName: "Noosa House Holiday Rental",
    url: "https://staynoosahouse.com/",
    description:
      "StayNoosaHouse is a private holiday house in Noosa Heads with spacious living areas, outdoor space, and easy access to the beach and Hastings Street.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noosa Heads",
      addressRegion: "QLD",
      addressCountry: "AU",
    },
    image: ["https://staynoosahouse.com/noosa_main.jpg"],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Outdoor area", value: true },
    ],
    sameAs: [
      "https://staynoosahouse.com/",
    ],
  };

  res.setHeader("Content-Type", "application/ld+json; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
  res.status(200).json(jsonLd);
}
