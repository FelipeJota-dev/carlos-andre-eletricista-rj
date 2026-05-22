import { Helmet } from 'react-helmet-async';
import { BUSINESS_INFO, FAQS, SERVICES, REVIEWS } from '../data';

export const SEOHead = () => {
  const currentUrl = 'https://www.carlosandreeletrica.com.br'; // Using placeholder for custom domain

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": BUSINESS_INFO.name,
    "image": "https://i.imgur.com/kwNSUez.png",
    "@id": `${currentUrl}/#electrician`,
    "url": currentUrl,
    "telephone": BUSINESS_INFO.displayPhone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.addressLines.street,
      "addressLocality": BUSINESS_INFO.addressLines.city,
      "addressRegion": BUSINESS_INFO.addressLines.state,
      "postalCode": BUSINESS_INFO.addressLines.zip,
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -22.8879, // Approx for Cachambi, RJ
      "longitude": -43.2750
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      `https://wa.me/${BUSINESS_INFO.phone}`
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": BUSINESS_INFO.rating.toString(),
      "reviewCount": BUSINESS_INFO.reviewsCount.toString()
    },
    "review": REVIEWS.map(r => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating.toString()
      },
      "author": {
        "@type": "Person",
        "name": r.name
      },
      "reviewBody": r.text
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": currentUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Serviços",
        "item": `${currentUrl}/#servicos`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Projetos",
        "item": `${currentUrl}/#projetos`
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Instalações e Reformas Elétricas",
    "provider": {
      "@type": "LocalBusiness",
      "name": BUSINESS_INFO.name,
      "@id": `${currentUrl}/#electrician`
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Rio de Janeiro"
      },
      {
        "@type": "City",
        "name": "Rio de Janeiro"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Elétricos",
      "itemListElement": SERVICES.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        },
        "position": index + 1
      }))
    }
  };

  return (
    <Helmet>
      <title>{`${BUSINESS_INFO.name} | Eletricista no Rio de Janeiro e Grande Rio`}</title>
      <meta name="description" content="Eletricista residencial e comercial no Cachambi, Rio de Janeiro e Grande Rio. Instalações, reformas elétricas, aumento de carga e projetos com segurança e 20 anos de experiência." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={currentUrl} />

      <meta property="og:title" content={`${BUSINESS_INFO.name} | Eletricista no Rio de Janeiro e Grande Rio`} />
      <meta property="og:description" content="Eletricista residencial e comercial no Rio de Janeiro e Grande Rio. Instalações, reformas elétricas, aumento de carga e projetos com segurança e 20 anos de experiência." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content="https://i.imgur.com/FE1xHtA.jpeg" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${BUSINESS_INFO.name} | Eletricista no Rio de Janeiro e Grande Rio`} />
      <meta name="twitter:description" content="Eletricista residencial e comercial no Rio de Janeiro e Grande Rio. Instalações, reformas elétricas, aumento de carga e projetos com segurança e 20 anos de experiência." />
      <meta name="twitter:image" content="https://i.imgur.com/FE1xHtA.jpeg" />

      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};
