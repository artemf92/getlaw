<template>
  <div class="cart-add-wrapper">
    <div class="cart-add__buttons">
      <condition class="greeny"/> <variable class="greeny"/> <addBlock class="greeny"/>
    </div>
    <div class="cart-add__body">
      <h3>Условия</h3>
      <p>Условия позволят делать вилки, которые в формировании документа позволят показывать или скрывать блоки</p>
      <a href="#">посмотреть ролик</a>
    </div>
    <a href="#" class="link__btn">Все понятно</a>
    <arrow class="arrow arrow-green" />
    <arrow class="arrow-right arrow-green" />
  </div>
</template>

<script>
import condition from '../icons/editor/condition'
import variable from '../icons/editor/variable'
import addBlock from '../icons/editor/addBlock'
import arrow from '@/components/icons/arrow';

export default {
  name: 'TplConditions',
  components: {
    addBlock, variable, condition, arrow
  },
  data() {
    return {

    }
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.cart-add__body {
  a {
    color: #42CAB1;
  }
}
</style>
