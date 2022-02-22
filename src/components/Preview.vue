<template>
  <div class="main">
    <p>Персональные данные</p>
    <div class="parent-data">
      <span>{{name}}</span>
      <span>{{age}}</span>
    </div>
    <p>Дети</p>
    <div class="children-preview">
      <span
          class="children-data"
          v-for="child in this.$store.getters.children"
          :key="child.id"
      >
        <span>{{child.name}},</span>
        <span>{{getHandleAge(child.age)}}</span>
      </span>
    </div>
  </div>
</template>

<script>
import LayoutDefault from "@/layouts/LayoutDefault";
import {markRaw} from "vue";
import '../styles/preview/preview.css';
export default {
  name: "Preview",
  data: () => ({
    age: null,
    name: null,
  }),
  created() {
    this.$emit('update:layout', this.__layoutDefault)
  },
  mounted() {
    this.handleParentData()
  },
  methods: {
    handleParentData() {
      let age = this.$store.getters.parent.age
      age ? this.age = this.getHandleAge(age) : ''
      this.name = this.$store.getters.parent.name;
    },
    getHandleAge(age) {
      if(age > 20 && age%10 < 5){
        return` ${age} года`
      }else {
        return ` ${age} лет`
      }
    },
  },
  computed: {
    __layoutDefault() {
      return markRaw(LayoutDefault);
    }
  }
}
</script>

<style scoped>

</style>