module.exports = {
  siteMetadata: {
    title: `endulzamientos amor y amarres`,
    keywords: 'amor, rituales, amarres, sexo, endulzamientos, unión, retornos, encantos, limpias',
    description: `Example project for the Gatsby Head API3`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};