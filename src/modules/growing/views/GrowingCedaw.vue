<template>
  <div>
    <div v-for="file in files" :key="file.url" class="mb3">
      <a :href="file.url">
        <p>{{ file.name }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [
        {
          name: "2021年性別圖像",
          url:
            "https://drive.google.com/file/d/1HtDgZkzgSeTtYhBLbSMGPc_0CY4IL4m1/view",
        },
        {
          name: "2020年性別圖像",
          url:
            "https://drive.google.com/file/d/1TcikE1RRQWBlGTAhGQKC2DZm6wGLuvuG/view",
        },
        {
          name: "2019年性別圖像",
          url:
            "https://drive.google.com/file/d/1TW6W1MHmhp8mVmwICyi0iTi_L2DEBrge/view",
        },
        {
          name: "2018年性別圖像",
          url:
            "https://drive.google.com/file/d/1wZFm7ZqxWPwpWcvHhNGDdTp6ytMCYkxw/view",
        },
        {
          name: "2017年性別圖像",
          url:
            "https://drive.google.com/file/d/1IuhjIr2SG0Iwp0jzTEec0WAYNID7WgrS/view",
        },
        {
          name: "108年全國婦女生活狀況調查報告",
          url:
            "https://drive.google.com/file/d/1c5GWxDLkOnJkJL6PDquz5tDDaHIZzOUO/view"
        },
        {
          name: "104年全國婦女生活狀況調查報告",
          url:
            "https://drive.google.com/file/d/1IDT_v8GoNcbY0-dCw0wz4bypzSwzb0p-/view",
        },
        {
          name: "103年新北市婦女需求調查表",
          url:
            "https://drive.google.com/file/d/1GApwelRiEnBzQYDQTaIVtY9KBH6hxF4O/view",
        },
      ],
    }
  },
}
</script>
