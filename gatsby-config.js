module.exports = {
  siteMetadata: {
    title: `endulzamientos amor y amarres`,
    keywords: 'amor, rituales, amarres, sexo, endulzamientos, unión, retornos, encantos, limpias',
    description: 'todos nuestros trabajos son totalmente realizados por personas expertas en nigromancia y hechizos ancestrales que se nos han entregado para así poder seguir ayudadando a todas las personas que necesitan nuestra ayuda',
    siteUrl: `https://www.endulzamientosamoryamarres.com`,
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