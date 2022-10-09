import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

let EMPTY_STR   = '',
    EMPTY_OBJ   = Object.freeze({});

export default function SEO (_props) {
    let props       = _props || EMPTY_OBJ,
        pathname    = props.pathname || EMPTY_STR,
        defaultMeta = useSiteMetadata() || EMPTY_OBJ,
        siteUrl     = defaultMeta.siteUrl,
        seo         = {
            title       : props.title || defaultMeta.title,
            description : props.description || defaultMeta.description,
            keywords    : props.keywords || defaultMeta.keywords,
            url         : `${siteUrl}${pathname}`
        };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://www.endulzamientosamoryamarres.com",
            "name": "Endulzamientos amor y amarres",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+13476921302",
              "hoursAvailable" : {
                "@type": "OpeningHoursSpecification",
                dayOfWeek : [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens" : "00:00",
                "closes" : "23:59",
              }
            }
          }
        `}
    </script>
      {props.children}
    </>
  )
}