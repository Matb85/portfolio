import theme from "@nuxt/content-theme-docs";

export default theme({
  target: "static",
  router: {
    base: "/portfolio/",
  },
  components: true,
  docs: {
    liveEdit: false,
  },
  head: {
    meta: [{ name: "robots", content: "none" }],
    script: [{ src: "https://mozilla.github.io/pdf.js/build/pdf.js" }],
  },
});
