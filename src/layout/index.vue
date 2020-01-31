<template>
  <div>
    <LayoutHeader />
    <div class="container">
      <router-view />
    </div>
    <LayoutFooter />
  </div>
</template>

<script>
import LayoutHeader from './header.vue';
import LayoutFooter from './footer.vue';

export default {
  name: 'LayoutIndex',
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>
