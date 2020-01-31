<template>
  <div>
    <h1 class="title is-4">本周熱門課程</h1>
    <List />
  </div>
</template>

<script>
import List from './list';

export default {
  name: 'homeIndex',
  components: {
    List
  }
}
</script>
