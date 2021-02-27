<template>
  <div class="modal-wrapper" v-if="show">
    <h3>На ваш номер выслан код подтверждения подписания</h3>
    <input type="text" v-model="code" placeholder="Введите код">
    <button class="btn__orange btn__send">Подписать</button>
    <button
      class="modal__close"
      @click="close"
    ><close /></button>
  </div>
</template>

<script>
import close from '../icons/close';

export default {
  name: 'codeSign',
  components: {
    close,
  },
  data() {
    return {
      show: true,
      code: '',
    }
  },
  methods: {
    close() {
      this.show = false;
    }
  },
};
</script>

<style lang="scss" scoped>
h3 {
  margin-bottom: 32px;
}
.btn__orange {
  margin-top: 32px;
}
input {
  border: 1px solid #EFEFEF !important;
  box-sizing: border-box;
  width: calc(100% - 12px) !important;
  padding: 0 0 0 12px !important;
  border-radius: 4px !important;
  margin: 0 !important;
}
input::placeholder {
  color: #808080;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
}
p {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  color: #808080;
  margin-bottom: 32px;
}
button.btn__send {
  width: 99px;
}
</style>
