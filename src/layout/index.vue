<template>
  <section id="wrap" class="flex flex-col h-full text-gray-700">
    <h1 class="blind">웹사이트 제목</h1>
    <Header></Header>
    <section id="container">
      <router-view></router-view>
    </section>
    <Footer></Footer>
  </section>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
}
</script>