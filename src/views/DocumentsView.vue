<template>
  <div class="document-wrapper">
    <DocumentsForm v-show="$store.getters.getTab === 1" />
    <div
      class="document__preview"
      :class="$store.getters.getTab === 2 ? 'full' : ''"
    >
      <div class="document__preview--body"></div>
    </div>
    <addCondition v-if="flag === 1"/>
    <addVariable v-else-if="flag === 2"/>
    <addBlock v-else/>
  </div>
</template>

<script>
import DocumentsForm from "../components/DocumentsForm";
import addCondition from "../components/modals/addCondition";
import addVariable from "../components/modals/addVariable";
import addBlock from "../components/modals/addBlock";

export default {
  name: "DocumentsView",
  components: {
    DocumentsForm,
    addCondition,
    addVariable,
    addBlock,
  },
  data() {
    return {
      flag: false,
      tab: "",
    };
  },
  watch: {},
  methods: {},
  mounted() {
    this.tab = this.$store.getters.getTab;
  },
};
</script>

<style lang="scss" scoped>
.document-wrapper {
  display: flex;
}

.document {
  &__preview {
    width: 100%;
    height: calc(100vh - 32px - 60px - 16px);
    margin-left: 20px;
    padding: 24px 19px 20px 26px;
    background: #ffffff;
    box-shadow: 0px 0px 32px rgba(11, 47, 106, 0.08);
    border-radius: 4px;
    &.full {
      width: 100%;
      margin: 0 auto;
      max-width: 888px;
      background: #ffffff;
      box-shadow: 0px 0px 60px rgba(41, 48, 58, 0.16);
      border-radius: 4px;
      position: relative;
      &:before {
        position: absolute;
        display: block;
        top: 80px;
        left: -80px;
        z-index: -1;
        content: "";
        width: 292px;
        height: 292px;
        background-image: url(../../public/images/doc-cover.png);
      }
    }
    &--body {
      height: 100%;
      background: #c4c4c4;
      opacity: 0.2;
    }
  }
}

</style>
