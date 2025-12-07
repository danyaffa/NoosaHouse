// FILE: /pages/seo/staynoosahouse.tsx

import Head from "next/head";
import Link from "next/link";
import config from "../../config/staynoosahouse.json";

export default function StayNoosaHouseSeoPage() {
  const title = `${config.name} – Private Holiday Home in Noosa Heads, Queensland`;
  const description = `${config.name} is a comfortable, private holiday home in Noosa Heads with easy access to beaches, Hastings Street, and local attractions.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "House",
    name: config.name,
    url: config.domain,
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noosa Heads",
      addressRegion: "QLD",
      addressCountry: "AU"
    },
    image: [`${config.domain}${config.logo}`]
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
        <link rel="canonical" href={`${config.domain}${config.seoPath}`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${config.domain}${config.seoPath}`} />
        <meta property="og:site_name" content={config.name} />
        <meta property="og:image" content={`${config.domain}${config.logo}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${config.domain}${config.logo}`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="mx-auto max-w-3xl px-4 py-10 prose prose-slate">
        <h1>{config.name} – Noosa Heads Holiday Home</h1>

        <p>
          <strong>{config.name}</strong> is a private holiday house in Noosa
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
            <a>{config.name} homepage</a>
          </Link>
          .
        </p>
      </main>
    </>
  );
}
