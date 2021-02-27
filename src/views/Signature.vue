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
import SignInProgress from '../components/SignInProgress';
import Signed from '../components/Signed';

export default {
  name: 'block',
  components: {
    SignInProgress,Signed
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
          status: 'На подписании',
          pending: true,
        },
      ]
    }
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style lang="scss">

</style>
