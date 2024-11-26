module.exports = {
  siteMetadata: {
    title: `The Wedding of Tiffany & Jared`,
    description: `Website untuk pernikahan Tiffany & Jared`,
    author: `@invitato`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wedding Website`,
        short_name: `Wedding`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`, // Pilih 'standalone' atau 'minimal-ui'
        icon: `src/images/favicon.png`, // Ganti dengan path ke favicon Anda
        // Anda bisa menambahkan konfigurasi lebih lanjut untuk PWA seperti splash screens, dll
      },
    },
    // Plugin lain...
  ],
};
