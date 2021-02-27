<template>
  <div class="main--wrapper">
    <div class="table__head"></div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AllDocuments",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.main--wrapper {
  background: #ffffff;
  box-shadow: 0px 0px 32px rgba(11, 47, 106, 0.08);
  border-radius: 4px;
  padding: 20px;
   ul {
     margin: 0;
     padding: 0;
     li {
       background: #F7F7F7;
border-radius: 4px;
height: 60px;
width: 100%;
margin-bottom: 4px;
     }
   }
}
.table__head {
  width: 100%;
  height: 40px;
  background: #efefef;
  border-radius: 4px;
  margin-bottom: 8px;
}
</style>
