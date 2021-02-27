<template>
  <div id="app">
    <component :is="layout"> </component>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";
import DocumentsMainLayout from "@/layouts/DocumentsMainLayout.vue";
import TemplatesMainLayout from "@/layouts/TemplatesMainLayout.vue";
import ViewDocLayout from "@/layouts/ViewDocLayout.vue";
import ViewDocTplLayout from "@/layouts/ViewDocTplLayout.vue";
import ViewDocumentsLayout from "@/layouts/ViewDocumentsLayout.vue";
import HomeLayout from "@/layouts/HomeLayout.vue";
import HomePanelLayout from "@/layouts/HomePanelLayout.vue";

export default {
  computed: {
    layout() {
      return this.$route.meta.layout + "Layout" || "MainLayout";
    },
  },
  components: {
    MainLayout,
    ViewDocLayout,
    HomeLayout,
    ViewDocTplLayout,
    ViewDocumentsLayout,
    HomePanelLayout,
    DocumentsMainLayout,
    TemplatesMainLayout,
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "../node_modules/materialize-css/dist/css/materialize.min.css";
@import "./assets/webfonts/fonts.css";
@import "../node_modules/normalize.css";
@import "./assets/css/style.scss";
</style>
