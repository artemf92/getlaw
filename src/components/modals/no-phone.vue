<template>
  <div class="modal-wrapper" v-if="show">
    <h3>В профиле нет номера телефона</h3>
    <p>Для подписания документа необходимо подтверждать его по номеру телефона. Добавьте в личном кабинете номер телефона и повторите операцию.</p>
    <button class="btn__orange">Перейти в личный кабинет</button>
    <button
      class="modal__close"
      @click="close"
    ><close /></button>
  </div>
</template>

<script>
import close from '../icons/close';

export default {
  name: 'noPhoneModal',
  components: {
    close,
  },
  data() {
    return {
      show: true
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
p {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  color: #808080;
  margin-bottom: 32px;
}
</style>
