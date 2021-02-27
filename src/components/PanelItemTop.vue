<template>
  <section class="panel-item">
    <div class="header">
      <slot />
      <add />
    </div>
    <div class="body-inner">
      <ul>
        <li v-for="v in values" :key="v.name">
          <img src="../../public/images/icons/doc.png" alt="" v-if="v.file"/><span>{{
            v.name
          }}</span>
          <span>{{ v.date }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import add from "./../components/icons/panel-add";

export default {
  name: "PanelItemTop",
  components: {
    add,
  },
  props: {
    values: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
section {
  width: calc(50% - 8px);
  height: calc(50vh - 24px);
  filter: drop-shadow(0px 0px 32px rgba(41, 48, 58, 0.16));
  border-radius: 4px;
  background: #ffffff;
  border-radius: 4px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 0px 32px rgba(41, 48, 58, 0.12);

  &__title {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;

    figure {
      margin-right: 8px;
      svg {
        width: 32px;
        height: 32px;
      }
    }
  }
}
.main--wrapper {
  display: flex;
}
.panel--wrapper {
  overflow-y: hidden;
  box-shadow: 0px 0px 32px rgba(41, 48, 58, 0.12);
}
.body-inner {
  padding: 8px 16px;
  height: 86%;
  overflow-y: scroll;
  ul {
    margin: 0;
    li {
      border-bottom: 1px solid #efefef;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      // height: 32px;
      span:first-of-type {
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
      }
      span:last-child {
        margin-left: auto;
      }
      p {
        margin: 0;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: #2b2d42;
        white-space: nowrap;
      }
    }
  }
}
span.status {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #808080;
}
</style>
