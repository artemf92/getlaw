<template>
  <div class="modal-wrapper modal-cert" v-if="show">
    <div class="modal-top">
      <h3 style="text-align: center;">Сетификат онлайн-подписи</h3>
    </div>
    <div class="moda-body">
      <div class="modal__data">
        <div class="modal__data--title">
          <p>Что подписали</p>
        </div>
        <div class="modal__data--body">Legium cases.pdf</div>
      </div>
      <div class="modal__data">
        <div class="modal__data--title"><p>Контрольная сумма</p><p class="sum_type">(SHA-256)</p></div>
        <div class="modal__data--body fsum">8128198237917829q78d987wudiuqwkdhxzkshjd87162ey1dhaksjhd812698y1dhs</div>
      </div>
      <div class="modal__data">
        <div class="modal__data--title">
          <p>Где хранится</p>
        </div>
        <div class="modal__data--body">Далеко-далеко за словесными горами в стране гласных и согласных живут.</div>
      </div>
      <div class="modal__data">
        <div class="modal__data--title">
          <p>Кто подписал</p>
        </div>
        <div class="modal__data--body">
          <p> Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Грустный толку взобравшись вдали, она точках вопроса большой реторический грамматики. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Всемогущая встретил прямо заглавных о назад запятых по всей, рукописи жизни.</p>
          <p>Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты.</p>
        </div>
      </div>
    </div>

    <button class="btn__orange btn__print">Распечатать</button>
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
.btn__print {
  margin-top: 32px;
  margin: 0 auto;
  background-color: #007cfd;
}
p {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  padding: 0;
  margin: 0;
}
.modal {
  &-cert {
    width: 85%;
    max-width: 680px;
  }
  &__data {
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    
    @media (min-width: 768px) {
      flex-direction: row;
    }
    &--title {
      p {
        color: #808080;
      }
      padding-bottom: 10px;
      border-bottom: 1px solid #cdcdcd;
      width: 145px;
      @media (min-width: 768px) {
        padding-bottom: 0;
        padding-right: 20px;
        border-bottom: none;
        border-right: 1px solid #cdcdcd;
      }
    }
    &--body {
      
      width: 100%;
      color: #2b2d42;
      font-weight: 600;
      max-height: 115px;
      overflow: auto;
      padding-top: 10px;
      @media (min-width: 768px) {
         width: calc( 100% - 145px);
         padding-top: 0;
         padding-left: 20px;
      }
      p {
        color: #2b2d42;
        font-weight: 600;
      }
    }
  }
}
.fsum {
  word-break: break-all;
}
.sum_type {
  font-size: 10px;
  @media (min-width: 768px) {
    text-align: right;
  }
}
</style>
