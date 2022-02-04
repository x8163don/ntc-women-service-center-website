<template>
  <div>
    <div class="social_container">
      <div class="news_container">
        <h1 class="news_title">新聞專區</h1>
        <ul class="news_inner">
          <li v-for="item in recentlyNews" :key="item.url">
            <a :href="item.url" target="_blank">
              <pre>{{ item.startDate }} {{ item.name }}</pre></a
            >
          </li>
        </ul>
      </div>
      <div class="fb_container">
        <img
          class="icon_walkwomen"
          src="../../../assets/home/icon_walkwomen.png"
        />
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNTWSC&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="500"
          height="500"
          style="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentlyNewspaper",
  computed: {
    recentlyNews() {
      return this.news.slice(0, 10);
    }
  },
  data() {
    return {
      news: [
        {
          startDate: "2020/09/15",
          name: "平溪推「女路導覽」 女礦工詮釋在地故事- Youtube",
          url: "https://www.youtube.com/watch?v=Mvppnah7c70&feature=youtu.be"
        },
        {
          startDate: "2020/08/08",
          name: "新北「性平特攻隊」換尿片5秒奪冠 溫柔動作獲「身負屎命」獎",
          url:
            "https://today.line.me/tw/v2/article/%E6%96%B0%E5%8C%97%E3%80%8C%E6%80%A7%E5%B9%B3%E7%89%B9%E6%94%BB%E9%9A%8A%E3%80%8D%E6%8F%9B%E5%B0%BF%E7%89%875%E7%A7%92%E5%A5%AA%E5%86%A0+%E6%BA%AB%E6%9F%94%E5%8B%95%E4%BD%9C%E7%8D%B2%E3%80%8C%E8%BA%AB%E8%B2%A0%E5%B1%8E%E5%91%BD%E3%80%8D%E7%8D%8E-V8jP7V"
        },
        {
          startDate: "2020/08/08",
          name: "新北市玩具銀行 性平特攻隊主題展開幕",
          url:
            "https://www.idn.com.tw/news/news_content.aspx?catid=4&catsid=2&catdid=0&artid=20200808hsieh009"
        },

        {
          startDate: "2020/08/08",
          name: "新北「性平特攻隊」換尿片5秒奪冠 溫柔動作獲「身負屎命」獎",
          url:
            "https://news.pchome.com.tw/public/mypeople/20200808/index-59687898416026219009.html"
        },
        {
          startDate: "2020/08/08",
          name: "新北市玩具銀行「性平特攻隊」主題展",
          url:
            "https://news.pchome.com.tw/society/twpowernews/20200808/index-15968829731908247002.html"
        },
        {
          startDate: "2020/08/08",
          name: "新北市玩具銀行「性平特攻隊」主題展",
          url:
            "http://twpowernews.com/home/news_pagein.php?iType=1010&n_id=185622"
        },
        {
          startDate: "2020/08/08",
          name: "新北市玩具銀行「性平特攻隊」主題展",
          url:
            "https://today.line.me/tw/v2/article/%E6%96%B0%E5%8C%97%E5%B8%82%E7%8E%A9%E5%85%B7%E9%8A%80%E8%A1%8C%E3%80%8C%E6%80%A7%E5%B9%B3%E7%89%B9%E6%94%BB%E9%9A%8A%E3%80%8D%E4%B8%BB%E9%A1%8C%E5%B1%95-k8JEQ1"
        },
        {
          startDate: "2020/08/08",
          name: "新北市玩具銀行 「性平特攻隊」主題展",
          url:
            "https://www.chinatimes.com/realtimenews/20200808003006-260421?chdtv"
        },
        {
          startDate: "2020/08/08",
          name: "媽媽陪伴小孩玩玩具是爸爸的2倍",
          url: "https://n.yam.com/Article/20200808766199"
        },
        {
          startDate: "2020/08/08",
          name:
            "媽媽陪伴小孩玩玩具是爸爸的2倍 默契考驗把拔是「父心漢」或「負心漢」",
          url:
            "https://www.ntpc.gov.tw/ch/home.jsp?id=e8ca970cde5c00e1&dataserno=0da21ca2c71076455a53b4023fe4671f"
        },
        {
          startDate: "2020/07/30",
          name: "性平報報第35期",
          url: "https://ge.sw.ntpc.gov.tw/ge/ge/family_detail/43772731"
        },
        {
          startDate: "2020/07/27",
          name: "女礦工轉型導覽員 述說菁桐祖輩辛酸",
          url: "https://www.merit-times.com.tw/NewsPage.aspx?unid=592571"
        },
        {
          startDate: "2020/07/22",
          name: "pchome新聞 - 用命換溫飽 不只男人行菁桐煤礦女人也挖煤",
          url:
            "https://news.pchome.com.tw/living/nownews/20200722/photo-59537960062967207009.html"
        },
        {
          startDate: "2020/07/22",
          name: "NOWnews 今日新聞 - 用命換溫飽 不只男人行菁桐煤礦女人也挖煤",
          url: "https://www.nownews.com/news/local/5035528"
        },
        {
          startDate: "2020/07/22",
          name: "新浪新聞 - 用命換溫飽 不只男人行菁桐煤礦女人也挖煤",
          url: "https://news.sina.com.tw/article/20200722/35829616.html"
        },
        {
          startDate: "2020/07/22",
          name: "MSN新聞 - 用命換溫飽 不只男人行菁桐煤礦女人也挖煤",
          url:
            "https://www.msn.com/zh-tw/news/national/%E7%94%A8%E5%91%BD%E6%8F%9B%E6%BA%AB%E9%A3%BD-%E4%B8%8D%E5%8F%AA%E7%94%B7%E4%BA%BA%E8%A1%8C%E8%8F%81%E6%A1%90%E7%85%A4%E7%A4%A6%E5%A5%B3%E4%BA%BA%E4%B9%9F%E6%8C%96%E7%85%A4/ar-BB171P5G"
        },
        {
          startDate: "2020/07/22",
          name: "HINET生活誌 - 用命換溫飽 不只男人行菁桐煤礦女人也挖煤",
          url: "https://times.hinet.net/news/22981379"
        },
        {
          startDate: "2020/07/22",
          name: "用命換溫飽 不只男人行菁桐煤礦女人也挖煤",
          url:
            "https://tw.news.yahoo.com/%E7%94%A8%E5%91%BD%E6%8F%9B%E6%BA%AB%E9%A3%BD-%E4%B8%8D%E5%8F%AA%E7%94%B7%E4%BA%BA%E8%A1%8C%E8%8F%81%E6%A1%90%E7%85%A4%E7%A4%A6%E5%A5%B3%E4%BA%BA%E4%B9%9F%E6%8C%96%E7%85%A4-010000246.html"
        },
        {
          startDate: "2020/07/21",
          name: "新北第一條女性故事旅遊路線「菁桐女路」 成果發表招攬遊客",
          url: "https://news.ltn.com.tw/news/life/breakingnews/3235102"
        },
        {
          startDate: "2020/06/04",
          name: "聯合新聞網 - 新北婦女做一張椅子 為自己找到人生的位置",
          url: "https://udn.com/news/story/7323/4612871"
        },
        {
          startDate: "2020/06/04",
          name: "PCHome - 新北婦女做一張椅子 為自己找到人生的位置",
          url:
            "https://news.pchome.com.tw/living/idn/20200604/index-59127261314244224009.html"
        },
        {
          startDate: "2020/06/04",
          name: "台灣英文新聞 - 新北婦女做一張椅子 為自己找到人生的位置",
          url: "https://www.taiwannews.com.tw/ch/news/3944837"
        },
        {
          startDate: "2020/06/04",
          name: "中國時報 - 新北婦女做一張椅子 為自己找到人生的位置",
          url:
            "https://www.chinatimes.com/realtimenews/20200604005305-260421?chdtv"
        },
        {
          startDate: "2020/06/04",
          name: "新北婦女做一張椅子 為自己找到人生的位置",
          url:
            "https://www.ntpc.gov.tw/ch/home.jsp?id=e8ca970cde5c00e1&dataserno=fde1c6735955d48d073ec046a9617317"
        },
        {
          startDate: "2020/04/06",
          name: "自立晚報 - 新北女聲結合復興電台 宣導性平和婦女福利",
          url:
            "https://www.idn.com.tw/news/news_content.aspx?catid=4&amp;catsid=2&amp;catdid=0&amp;artid=20200406hsieh010"
        },
        {
          startDate: "2020/04/06",
          name: "新北市政府 - 新北女聲結合復興電台 宣導性平和婦女福利",
          url:
            "https://www.idn.com.tw/news/news_content.aspx?catid=4&catsid=2&catdid=0&artid=20200406hsieh010"
        },
        {
          startDate: "2020/04/05",
          name: "新北女聲結合復興電台 宣導性平和婦女福利",
          url:
            "https://www.idn.com.tw/news/news_content.aspx?catid=4&catsid=2&catdid=0&artid=20200406hsieh010"
        },
        {
          startDate: "2019/12/13",
          name: "五股貿商社區 滿滿眷村味",
          url:
            "https://tw.news.yahoo.com/%E4%BA%94%E8%82%A1%E8%B2%BF%E5%95%86%E7%A4%BE%E5%8D%80-%E6%BB%BF%E6%BB%BF%E7%9C%B7%E6%9D%91%E5%91%B3-160000861.html"
        },
        {
          startDate: "2019/12/12",
          name: "婆媽當網紅！新北婦女學習自媒體",
          url: "https://www.cdns.com.tw/articles/76005"
        },

        {
          startDate: "2019/12/12",
          name:
            "「鏡頭給你、牙齒給我」奶奶用一支自拍棒說故事 新北市婦女學習自媒體分享社區在地好聲音",
          url:
            "https://www.ntpc.gov.tw/ch/home.jsp?id=e8ca970cde5c00e1&dataserno=a26d44731ecb2d05c2275e7ce1ef9032#page"
        },
        {
          startDate: "2019/12/12",
          name: "新北市婦女學習自媒體分享社區在地好聲",
          url:
            "https://tw.news.yahoo.com/%E6%96%B0%E5%8C%97%E5%B8%82%E5%A9%A6%E5%A5%B3%E5%AD%B8%E7%BF%92%E8%87%AA%E5%AA%92%E9%AB%94%E5%88%86%E4%BA%AB%E7%A4%BE%E5%8D%80%E5%9C%A8%E5%9C%B0%E5%A5%BD%E8%81%B2-030750617.html"
        },
        {
          startDate: "2019/12/12",
          name: "新北市婦女學習自媒體分享社區在地好聲",
          url:
            "https://www.idn.com.tw/news/news_content.aspx?catid=4&catsid=2&catdid=0&artid=20191212hsieh006"
        },
        {
          startDate: "2019/12/12",
          name: "新北市婦女學習自媒體分享社區在地好聲音",
          url: "http://www.secjie.com.tw/newsview_3623.html"
        },
        {
          startDate: "2019/12/11",
          name: "新北好日子愛心大平台",
          url: "https://www.facebook.com/goodday.ntpc/"
        },
        {
          startDate: "2019/06/05",
          name: "平溪端午有創意 嶺腳提倡性平齊包粽",
          url:
            "https://www.chinatimes.com/realtimenews/20190605003565-260405?chdtv"
        },
        {
          startDate: "2019/05/27",
          name:
            "響應528世界經期衛生日 重視女性健康 新北巿婦女服務中心舉辦翻轉月經不平等特展",
          url:
            "https://www.sw.ntpc.gov.tw/home.jsp?id=6918f79d690935a2&act=be4f48068b2b0031&dataserno=7c0a00d2ccf8a4085904675a0adedd7a&mserno=f2d603f5908a2f57a5d1cee327060ddc"
        },
        {
          startDate: "2019-05-25",
          name: "翻轉月經不平等 新北特展行動支持",
          url: "http://www.mypeople.tw/index.php?r=site/article&id=1614880"
        },
        {
          startDate: "2019/05/24",
          name: "新北巿婦女服務中心 翻轉月經不平等特展",
          url:
            "https://www.idn.com.tw/news/news_content.aspx?catid=5&catsid=7&catdid=0&artid=20190524joanne010"
        },
        {
          startDate: "2019/4/12",
          name: "新北市婦女中心各式講座 歡迎報名",
          url:
            "https://tw.news.yahoo.com/%E6%96%B0%E5%8C%97%E5%B8%82%E5%A9%A6%E5%A5%B3%E4%B8%AD%E5%BF%83%E5%90%84%E5%BC%8F%E8%AC%9B%E5%BA%A7-%E6%AD%A1%E8%BF%8E%E5%A0%B1%E5%90%8D-080806933.html"
        },
        {
          startDate: "2019/04/12",
          name:
            "用一盞茶時間開啟我們的性別日常 新北市婦女中心各式講座 歡迎報名",
          url:
            "https://www.ntpc.gov.tw/ch/home.jsp?id=28&dataserno=201904120009"
        }
      ]
    };
  }
};
</script>

<style scoped>
.social_container {
  display: flex;
  margin-top: 150px;
  margin-bottom: 100px;
  position: relative;
}

.news_title {
  font-size: 24px;
  position: relative;
  margin-bottom: 20px;
}
.news_title::before {
  content: "";
  width: 60px;
  height: 20px;
  background: #ffce5b;
  position: absolute;
  left: -20px;
  top: 4px;
  z-index: -1;
}
.news_title::after {
  content: "";
  width: 700px;
  height: 2px;
  background: #a7a7a7;
  position: absolute;
  bottom: -14px;
  left: 0;
}

.news_inner {
  list-style: none;
  font-size: 16px;
  line-height: 40px;
  text-decoration: none;
}

.news_inner > li > a {
  text-decoration: none;
  color: #2d2d2d;
}

.news_inner > li > a:hover {
  color: #ff4b2d;
}

.news_container {
  width: 700px;
}
/* FB粉專 */
.fb_container {
  width: 500px;
}

.icon_walkwomen {
  position: absolute;
  top: -55px;
  right: 0;
}
iframe {
  display: inline-block;
  margin-top: 65px;
}
</style>
