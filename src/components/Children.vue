<template>
  <div class="children-info">
    <div class="info-head">
      <span>Дети (макс. 5)</span>
      <button
          @click="addInput"
          :class="{'hide': hideSaveBtn}"
      >
        + Добавить ребенка
      </button>
    </div>
    <div class="info-body">
      <div class="children-item"
         v-for="child in children"
         :key="child.id"
      >
        <div
            class="input-wrapper children-name"
            :class="{'visible-error': child.invalidName}"
        >
          <input type="text" class="name" v-model="child.name">
        </div>
        <div
            class="input-wrapper"
            :class="{'visible-error': child.invalidAge}"
        >
          <input type="text" class="age" v-model="child.age">
        </div>
        <button @click="removeChildren(child.id)">Удалить</button>
      </div>
    </div>
    <button
        class="save-btn"
        @click="handleSaveData"
    >
      Сохранить
    </button>
  </div>
</template>

<script>
import '../styles/children/children.css';

export default {
  name: "children",
  props: {
    parent: { type: Object, required: true }
  },
  data: () => ({
    hideSaveBtn: false,
    children: {},
    validData: false,
  }),
  watch: {
    __childrenCount() {
      this.hideSaveBtn =
        Object.keys(this.children).length === 5;
    },
  },
  mounted(){
    this.children = Object.assign({}, this.handleStoreChildren(this.$store.getters.children));
  },
  methods: {
    handleStoreChildren(storeChildren) {
      let children = {};
      for (let key in storeChildren){
        children[key] = Object.assign({}, storeChildren[key])
      }
      return children;
    },
    addInput() {
      let lastKey = +Object.keys(this.children)[Object.keys(this.children).length-1]
      lastKey += 1;
      let id = lastKey
          ? lastKey
          : 0
      this.children[id] = {id, name: '', age: '', invalidName: false, invalidAge: false};
    },
    removeChildren(id) {
      delete this.children[id];
    },
    validName(child) {
      const validName = /[a-zA-Zа-яА-Я]{1,15}/ig.test(child.name)
      child.invalidName = !validName;
      return validName;
    },
    validAge(child) {
      const validAge = /[0-9]{1,3}/ig.test(child.age)
      child.invalidAge = !validAge;
      return validAge;
    },
    validForm(child) {
      const validName =  this.validName(child);
      const validAge = this.validAge(child);
      return validName && validAge;
    },
    handleSaveData() {
      this.validForm(this.parent) && this.handleSaveChildren();
    },
    handleSaveChildren() {
      let validData;
      const children = Object.keys(this.children);
      if (!children.length){
        validData = true;
      } else {
        validData = this.checkForm()
      }
      validData && this.saveChildren();
    },
    checkForm() {
      for (let key in this.children){
        if (!this.validForm(this.children[key])){
          return false;
        }
      }
      return true;
    },
    saveChildren() {
      this.$emit('saveChildren', this.children);
    }
  },
  computed: {
    __childrenCount() {
      return Object.keys(this.children).length
    },
  }
}
</script>

<style scoped>

</style>