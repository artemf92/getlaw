<template>
  <div class="cart-add-wrapper">
    <div class="cart-add__buttons">
      <add /> <trash /> <edit2/>
    </div>
    <div class="cart-add__body">
      <h3>Добавление</h3>
      <p>Условия позволят делать вилки, которые в формировании документа позволят показывать или скрывать блоки</p>
      <a href="#">посмотреть ролик</a>
    </div>
    <a href="#" class="link__btn">Все понятно</a>
    <arrow class="arrow" />
    <arrow class="arrow-right" />
  </div>
</template>

<script>
import add from '@/components/icons/add';
import trash from '@/components/icons/trash';
import arrow from '@/components/icons/arrow';
import edit2 from '@/components/icons/edit2';

export default {
  name: 'AddDocAgr',
  components: {
    add, edit2, trash, arrow
  },
  data() {
    return {

    }
  },
  methods: {
  },
};
</script>

<style lang="scss">
.cart-add-wrapper {
  width: 270px;
  height: 334px;
  margin-left: 32px;
  margin-bottom: -16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 0px 32px rgba(11, 47, 106, 0.08);
  border-radius: 8px 8px 0px 0px;
  padding: 32px 16px;
  position: relative;
   h3 {
    text-align: center;
    color: #3A3F47;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    margin: 0;
    margin-bottom: 12px;
   }
   p {
     text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    margin: 0 auto;
    width: 160px;
   }
}
.cart-add {
  &__body {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
     a {
       color: #FB8127;
       text-decoration: underline;
     }
  }
  &__buttons {
    width: 50%;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }
}
.link__btn {
  border: 1px solid #808080;
  box-sizing: border-box;
  color: #808080;
  border-radius: 4px;
  padding: 8.5px 12px;
}
.arrow {
  position: absolute;
  top: 50%;
  left: 16px;
}
.arrow-right {
  position: absolute;
  top: 50%;
  right: 16px;
  transform: rotate(180deg);
}
</style>
