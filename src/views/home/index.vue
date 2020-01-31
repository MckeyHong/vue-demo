<template>
  <div>
    <h1 class="title is-4">本周熱門課程</h1>
    <div
      class="card is-pulled-left"
      v-for="(course, key) in lists"
      :key="key"
      style="width:30%;margin:1rem 0.5rem;"
    >
      <a :href="`https://hiskio.com/courses/${course.id}`" target="_blank">
        <div class="card-image">
          <figure class="image is-3by2">
            <img :src="course.image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">{{ course.title }}</div>

          <div class="content has-text-right has-text-danger">{{ course.price }}</div>
        </div>
      </a>
    </div>
    <div class="is-clearfix"></div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('course');

export default {
  name: 'homeIndex',
  computed: {
    ...mapState(['lists'])
  },
  methods: {
    ...mapActions(['getLists']),
    async fetchLists () {
      await this.getLists();
    }
  },
  created () {
    this.getLists();
  }
}
</script>

<style>
.title {
  margin-top: 20px;
  text-align: center;
}

.media {
  font-size: 14px;
}
</style>
