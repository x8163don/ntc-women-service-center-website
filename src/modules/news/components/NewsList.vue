<template>
  <div>
    <table class="f6 w-100 mw8 center" cellspacing="0">
      <thead>
        <tr>
          <th class="w-20 fw6 bb b--black-20 tl pb3 pr3 bg-white">發佈日期</th>
          <th class="w-80 fw6 bb b--black-20 tl pb3 pr3 bg-white">主題</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in news" :key="item.id">
          <td class="pv3 pr3 bb b--black-20">{{ item.startDate }}</td>
          <td class="pv3 pr3 bb b--black-20 printer">
            <a :href="item.url">{{ item.name }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style></style>
