<template>
  <div class="document-wrapper">
    <Editor />
    <aside :class="flag ? 'align-self-flex-end': ''">
      <AddDocAgr v-if="flag"/>
      <Events v-else/>
    </aside>
    <InstrumentsEditor />
  </div>
</template>

<script>
import Editor from '../components/Editor';
import InstrumentsEditor from '../components/InstrumentsEditor';
import AddDocAgr from '../components/aside/AddDocAgr';
import Events from '../components/aside/Events';

export default {
  name: 'AgrDocumentView',
  components: {
    Editor, AddDocAgr,
    InstrumentsEditor, Events,
  },
  data() {
    return {
      flag: false,
    }
  },
  methods: {
  },
};
</script>

<style lang="scss">
aside.align-self-flex-end {
  align-self: flex-end ;
}
.document-wrapper {
  display: flex;
}
</style>
