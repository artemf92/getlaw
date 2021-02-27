<template>
  <div class="main-wrapper">
    <SignInProgress v-if="this.$store.getters.getTab"
      :documents="documents"
    />
    <Signed v-else
      :documents="documents"
    />
  </div>
</template>

<script>
import SignInProgress from '../components/AgrInProgress';
import Signed from '../components/Signed';

export default {
  name: 'block',
  components: {
    SignInProgress, Signed,
  },
  data() {
    return {
      documents: [
        {
          id: 1,
          icon: 'doc',
          name: 'Название документа',
          participants: [
              { userphoto: '1', pending: false },
              { userphoto: '2', pending: false },
              { userphoto: '3', pending: true },
              { userphoto: '4', pending: true },
              { userphoto: '5', pending: false },
            ],
          status: 'На согласовании у контрагента',
          pending: true,
        },
        {
          id: 2,
          icon: 'doc',
          name: 'Название документа',
          participants: [
              { userphoto: '2', pending: false },
              { userphoto: '1', pending: false },
              { userphoto: '3', pending: true, flag: true },
              { userphoto: '4', pending: true },
            ],
          status: 'На согласовании',
          pending: true,
        },
        {
          id: 3,
          icon: 'doc',
          name: 'Название документа',
          participants: [
              { userphoto: '1', pending: false, flag: true },
              { userphoto: '2', pending: false },
              { userphoto: '3', pending: true },
              { userphoto: '4', pending: true },
            ],
          status: 'Cоздано',
          pending: true,
        },
        {
          id: 4,
          icon: 'doc',
          name: 'Название документа',
          participants: [
              { userphoto: '1', pending: false },
              { userphoto: '2', pending: false },
              { userphoto: '3', pending: true },
              { userphoto: '4', pending: true },
            ],
          status: 'Ожидает отправки контрагенту',
          pending: true,
        },
      ]
    }
  },
  mounted() {
    this.$store.commit('SET_SEARCH', true);
    this.$store.commit('SET_FILTER', true);
  },
  methods: {
  },
  beforeDestroy() {
    this.$store.commit('SET_SEARCH', false);
    this.$store.commit('SET_FILTER', false);
  }
};
</script>

<style lang="scss">
</style>
