import theme from "@nuxt/content-theme-docs";

export default theme({
  target: "static",
  components: true,
  docs: {
    primaryColor: "#E24F55",
    liveEdit: false,
  },
  head: {
    script: [
      {
        src: "https://mozilla.github.io/pdf.js/build/pdf.js",
      },
    ],
  },
});
