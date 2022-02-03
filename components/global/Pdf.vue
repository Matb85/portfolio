<template>
  <article>
    <section v-for="page of length" :key="page">
      <canvas class="w-full" :id="'the-canvas-' + page"></canvas>
      <hr />
    </section>
  </article>
</template>
<script>
export default {
  name: "pdf",
  props: {
    url: String,
  },
  data() {
    return {
      length: 0,
    };
  },
  mounted() {
    // Loaded via <script> tag, create shortcut to access PDF.js exports.
    const pdfjsLib = window["pdfjs-dist/build/pdf"];
    // The workerSrc property shall be specified.
    pdfjsLib.GlobalWorkerOptions.workerSrc = "//mozilla.github.io/pdf.js/build/pdf.worker.js";

    // Asynchronous download of PDF
    const loadingTask = pdfjsLib.getDocument(this.url);
    loadingTask.promise.then(
      async pdf => {
        console.log("PDF loaded");
        this.length = await pdf.numPages;
        // Fetch the first page
        for (let i = 0; i < this.length - 1; i++)
          pdf.getPage(i).then(function (page) {
            console.log("Page loaded");

            var scale = 1;
            var viewport = page.getViewport({ scale: scale });

            // Prepare canvas using PDF page dimensions
            var canvas = document.getElementById("the-canvas-" + i);
            var context = canvas.getContext("2d");
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render PDF page into canvas context
            var renderContext = {
              canvasContext: context,
              viewport: viewport,
            };
            var renderTask = page.render(renderContext);
            renderTask.promise.then(function () {
              console.log("Page rendered");
            });
          });
      },
      function (reason) {
        // PDF loading error
        console.error(reason);
      }
    );
  },
};
</script>
