// FILE: /pages/app-store.tsx

import Head from "next/head";
import Link from "next/link";

const SITE_URL = "https://staynoosahouse.com";

// TODO: add real booking link
const BOOKING_URL = "https://staynoosahouse.com/book";

export default function StayNoosaHouseBookingPage() {
  const title = "Book StayNoosaHouse – Noosa Heads Holiday Home";
  const description =
    "Book StayNoosaHouse, a private holiday home in Noosa Heads. View photos, check availability, and contact the host.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "House",
    name: "StayNoosaHouse",
    url: `${SITE_URL}/app-store`,
    description,
    potentialAction: {
      "@type": "ReserveAction",
      target: BOOKING_URL,
    },
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${SITE_URL}/app-store`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${SITE_URL}/app-store`} />
        <meta property="og:image" content={`${SITE_URL}/noosa_main.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}/noosa_main.jpg`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="mx-auto flex max-w-xl flex-col items-center px-4 py-10 text-center">
        <h1 className="mb-4 text-3xl font-semibold">Book StayNoosaHouse</h1>
        <p className="mb-8 text-slate-700">
          Click below to see booking details and availability for
          StayNoosaHouse, your private Noosa Heads holiday home.
        </p>

        <a
          href={BOOKING_URL}
          className="rounded-md border px-6 py-3 text-sm font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to booking page
        </a>

        <p className="mt-8 text-sm text-slate-500">
          Or{" "}
          <Link href="/">
            <a>return to the StayNoosaHouse homepage</a>
          </Link>
          .
        </p>
      </main>
    </>
  );
}
