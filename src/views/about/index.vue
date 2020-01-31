<template>
  <div>
    <h1 class="title">About</h1>
    <div class="container is-fluid">
      <div class="notification">
        <p class="menu-title">網站採用相關技術如下：</p>
        <br />
        <aside class="menu">
          <p class="menu-label">框架</p>
          <ul class="menu-list">
            <li>vue-cli4 (Route、Vuex)</li>
          </ul>
          <hr />
          <p class="menu-label">套件</p>
          <ul class="menu-list">
            <li>axios (取得hiskio本周熱門課程)</li>
            <li>Bulma (網站樣式CSS)</li>
            <li>numeral (格式化課程價錢顯示)</li>
          </ul>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'aboutIndex'
}
</script>

<style>
.container {
  margin: 1.2rem;
}

.title {
  text-align: center;
}
</style>
