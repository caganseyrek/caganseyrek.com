import { Helmet } from "react-helmet-async";

import { GITHUB_LINK, LINKEDIN_LINK, NPMJS_LINK, SITE_LINK } from "@/constants/texts";

const CustomSEO = ({
  title,
  description,
  url,
  imagePath = "/images/general_cat.png",
}: CustomSEOProps) => {
  const FORMATTED_URL = `${SITE_LINK}${url}`;
  const NAME = "Çağan Seyrek's Portfolio";

  const JSONLD = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: NAME,
    url: "https://caganseyrek.com/",
    description: description,
    inLanguage: "en",
    image: imagePath,
    sameAs: [GITHUB_LINK, NPMJS_LINK, LINKEDIN_LINK],
  };

  return (
    <Helmet>
      <title>{title}</title>

      <link rel="canonical" href={FORMATTED_URL} />
      <meta name="description" content={description} />
      <meta http-equiv="Content-Language" content="en" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">{JSON.stringify(JSONLD)}</script>

      <meta property="og:site_name" content={NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imagePath} />
      <meta property="og:url" content={FORMATTED_URL} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default CustomSEO;
