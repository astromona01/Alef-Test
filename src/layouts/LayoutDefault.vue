<template>
  <Header />
  <slot></slot>
  <Footer />
</template>

<script>
import Header from '../components/Header';
import Footer from "@/components/Footer";
export default {
  name: "LayoutDefault",
  components: {
    Header,
    Footer
  }
}
</script>