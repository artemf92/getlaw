<template>
  <aside>
    <img src="../../public/images/panel-cover.png" alt="" />
    <h2>Лента событий</h2>
    <button class="btn__yellow btn__lenta">Скоро буюдет работать</button>
    <ul class="l-wrapper">
      <li><img src="../../public/images/icons/list.png" alt="" /> Заголовок</li>
      <li><img src="../../public/images/icons/list.png" alt="" /> Заголовок</li>
      <li><img src="../../public/images/icons/list.png" alt="" /> Заголовок</li>
      <li><img src="../../public/images/icons/list.png" alt="" /> Заголовок</li>
      <li><img src="../../public/images/icons/list.png" alt="" /> Заголовок</li>
      <li><img src="../../public/images/icons/list.png" alt="" /> Заголовок</li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "PanelAside",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
aside {
    min-width: 320px;
    max-width: 320px;
    height: calc(100vh - 32px);
    margin-top: 16px;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border: 4px dashed #efefef;
    box-sizing: border-box;
    box-shadow: 0px 0px 32px rgba(41, 48, 58, 0.16);
    border-radius: 4px;
    padding: 32px;
    h2 {
      font-size: 21px;
      font-style: normal;
      font-weight: 600;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: center;
      color: #2B2D42;
      margin-top: 32px;
      margin-bottom: 16px;
    }
    .btn__lenta {
      background: #FEC052;
border-radius: 20px;
padding: 10px 16px;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: 15px;
letter-spacing: 0em;
text-align: center;
margin-bottom: 16px;
    }
    ul {
      width: 100%;
      li {
        width: 100%;
        margin-bottom: 4px;
        background: rgba(241, 175, 6, 0.08);
border-radius: 4px;
padding: 10px 8px;
display: flex;
justify-content: flex-start;
align-items: center;
      }
    }
  }
</style>
