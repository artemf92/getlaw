<template>
  <div class="modal-wrapper" v-if="show">
    <h3>Отправка контрагенту</h3>
    <p>Перед отправкой документа удалите всех участников и пригласите контрагента</p>
    <form action="" class="email__invite">
      <input type="email" v-model.trim="email" placeholder="Эл. почта..">
      <button class="btn" id="invite">Пригласить</button>
    </form>
    
    <div class="docs-inner">
      <div
        class="docs__item"
        v-for="(value, index) in participants"
        :key="index"
      >
        <label>
          <input type="checkbox"/>
          <span>
            <img
              :src="`./images/photo${value.userphoto}.png`"
              alt=""
              class="user-photo"
            >
            {{value.email}}
            </span>
        </label>
        <span class="close"><close /></span>
      </div>
    </div>
    <button class="btn btn__send btn__orange"><send />Отправить контрагенту</button>
    <span class="block-hide"><hide /></span>
    <button
        class="modal__close"
        @click="close"
      ><close /></button>
  </div>
</template>

<script>
import close from '../icons/close';
import hide from '../icons/hide';
import send from '../icons/send';

export default {
  name: 'sendCounterAgr',
  components: {
    close, hide, send
  },
  data() {
    return {
      show: true,
      documents: [ 
        { id: 1, icon: 'doc', name: 'Название документа' },
        { id: 2, icon: 'doc', name: 'Название документа' },
        { id: 3, icon: 'doc', name: 'Название документа' },
        { id: 4, icon: 'doc', name: 'Название документа' }, 
      ],
      search: '',
      participants: [
        { userphoto: '1', pending: false, email: 'debra.holt@example.com' },
        { userphoto: '2', pending: false, email: 'debra.holt@example.com' },
        { userphoto: '3', pending: true, email: 'alma.lawson@example.com' },
        { userphoto: '4', pending: true, email: 'alma.lawson@example.com' }
      ],
      email: '',
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
  width: 100%;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  padding: 0;
  margin: 0;
  margin-bottom: 24px;
}
.btn__send {
  width: 100%;
  svg {
    margin-right: 8px;
  }
}
</style>
