<template>
  <div class="template__instruments">
      <i class="instrument instr__condition"><condition/></i>
      <i class="instrument instr__variable"><variable/></i>
      <i class="instrument instr__addBlock"><addBlock/></i>
    </div>
</template>

<script>
import condition from './icons/editor/condition';
import variable from './icons/editor/variable';
import addBlock from './icons/editor/addBlock';

export default {
  name: 'InstrumentsTplEditor',
  components: {
    condition, variable, addBlock, 
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
.template__instruments {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: space-between;
  width: 135px;
}
.instrument {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.12;
  transition: .3s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
}
.instr__condition {
  background-color: #EA5C97;
}
.instr__variable {
background-color: #42CAB1;
}
.instr__addBlock {
  background-color: #857BF9;
}
</style>
