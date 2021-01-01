module.exports = {
  siteMetadata: {
    title: "to do list",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "fm5J8d_XEh9cvruLq1UNdn3clRUcwgbVqlA9dy7ZEAs",
        spaceId: "cborvj230nnt",
      },
    },
    "gatsby-plugin-styled-components",
  ],
};
