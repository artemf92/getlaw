<template>
  <div class="document-wrapper">
    <Editor />
    <aside>
      <TplButtons />
      <TplConditions />
    </aside>
    <InstrumentsTplEditor />
  </div>
</template>

<script>
import Editor from '../components/EditorTemplate';
import InstrumentsTplEditor from '../components/InstrumentsTplEditor';
import TplButtons from '../components/aside/TplButtons';
import TplConditions from '../components/aside/TplConditions';

export default {
  name: 'TemplateView',
  components: {
    Editor, TplConditions,
    TplButtons, InstrumentsTplEditor
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

<style lang="scss" scoped>
aside {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.document-wrapper {
  display: flex;
}

</style>
