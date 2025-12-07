// FILE: /pages/seo/staynoosahouse.tsx

import Head from "next/head";
import Link from "next/link";

const SITE_URL = "https://staynoosahouse.com";

export default function StayNoosaHouseSeoPage() {
  const title =
    "StayNoosaHouse – Private Holiday Home in Noosa Heads, Queensland";
  const description =
    "StayNoosaHouse is a comfortable, private holiday home in Noosa Heads with easy access to beaches, Hastings Street, and local attractions.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "House",
    name: "StayNoosaHouse",
    url: SITE_URL,
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noosa Heads",
      addressRegion: "QLD",
      addressCountry: "AU",
    },
    image: [`${SITE_URL}/noosa_main.jpg`],
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="StayNoosaHouse, Noosa holiday house, Noosa Heads accommodation, Noosa rental home"
        />
        <link rel="canonical" href={`${SITE_URL}/seo/staynoosahouse`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="StayNoosaHouse – Noosa Holiday Home" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${SITE_URL}/seo/staynoosahouse`} />
        <meta property="og:site_name" content="StayNoosaHouse" />
        <meta property="og:image" content={`${SITE_URL}/noosa_main.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="StayNoosaHouse – Noosa Holiday Home" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}/noosa_main.jpg`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="mx-auto max-w-3xl px-4 py-10 prose prose-slate">
        <h1>StayNoosaHouse – Noosa Heads Holiday Home</h1>

        <p>
          <strong>StayNoosaHouse</strong> is a private holiday house in Noosa
          Heads, ideal for families or small groups who want space, comfort, and
          easy access to Noosa’s beaches and cafes.
        </p>

        <h2>Highlights</h2>
        <ul>
          <li>Spacious living and dining areas.</li>
          <li>Comfortable bedrooms for families or groups.</li>
          <li>Outdoor area for relaxing and meals.</li>
          <li>Wi-Fi and parking.</li>
        </ul>

        <p>
          For photos, availability, and booking details, visit the{" "}
          <Link href="/">
            <a>StayNoosaHouse homepage</a>
          </Link>
          .
        </p>
      </main>
    </>
  );
}
