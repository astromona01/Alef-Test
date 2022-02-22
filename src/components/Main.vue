<template>
  <main class="main">
    <p>Персональные данные</p>
    <div class="personal-info">
      <div
          class="input-wrapper"
          :class="{'visible-error': parent.invalidName}"
      >
        <input type="text" class="name" v-model="parent.name">
      </div>
      <div
          class="input-wrapper"
          :class="{'visible-error': parent.invalidAge}"
      >
        <input type="text" class="age" v-model="parent.age">
      </div>
    </div>
    <Children
      @saveChildren="saveChildren"
      :parent="parent"
    />
  </main>
</template>

<script>
import '../styles/global/global.css';
import LayoutDefault from '../layouts/LayoutDefault';
import { markRaw } from "vue";
import Children from './Children';

export default {
  name: "Main",
  components: {
    Children,
  },
  data: () => ({
    parent: {
      name: '',
      age: '',
      invalidName: false,
      invalidAge: false,
    }
  }),
  created() {
    this.$emit('update:layout', this.__layoutDefault);
  },
  mounted() {
    const parent = this.$store.getters.parent;
    parent.name ? this.parent = parent : '';
  },
  methods: {
    saveChildren(children) {
      this.$store.commit('saveParent', this.parent);
      this.$store.commit('saveChildren', children);
    }
  },
  computed: {
    __layoutDefault() {
      return markRaw(LayoutDefault);
    }
  }
}
</script>