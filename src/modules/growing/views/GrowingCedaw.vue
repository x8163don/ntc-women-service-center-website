<template>
  <div>
    <div v-for="file in files" :key="file.url" class="mb3">
      <a :href="file.url">
        <p>{{ file.name }}</p>
      </a>
    </div>
    
    <div class="mt4 mb3 f4 dark-blue">延伸閱讀</div>
    <div v-for="article in articles" :key="article.url" class="mb3">
      <a :href="article.url">
        <p>{{ article.name }}</p>
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
          name: "2020年性別圖像",
          url:
            "https://drive.google.com/file/d/1TcikE1RRQWBlGTAhGQKC2DZm6wGLuvuG/view"
        },
        {
          name: "2019年性別圖像",
          url:
            "https://drive.google.com/file/d/1TW6W1MHmhp8mVmwICyi0iTi_L2DEBrge/view"
        },
        {
          name: "2018年性別圖像",
          url:
            "https://drive.google.com/file/d/1wZFm7ZqxWPwpWcvHhNGDdTp6ytMCYkxw/view"
        },
        {
          name: "2017年性別圖像",
          url:
            "https://drive.google.com/file/d/1IuhjIr2SG0Iwp0jzTEec0WAYNID7WgrS/view"
        },
        {
          name: "104年全國婦女生活狀況調查報告",
          url:
            "https://drive.google.com/file/d/1IDT_v8GoNcbY0-dCw0wz4bypzSwzb0p-/view"
        },
        {
          name: "103年新北市婦女需求調查表",
          url:
            "https://drive.google.com/file/d/1GApwelRiEnBzQYDQTaIVtY9KBH6hxF4O/view"
        }
      ],
      articles:[
        {
          name: "侯市長阿伯的28個故事",
          url:
            "https://drive.google.com/file/d/1sh7hpk1pyeVRtAmDvqEtRn_rzkhZIbPP/view"
        }
      ]
    };
  }
};
</script>
