<template>
  <AboutNewsList :news="news"></AboutNewsList>
</template>

<script>
import AboutNewsList from "../components/AboutNewsList";
export default {
  components: {
    AboutNewsList
  },
  data() {
    return {
      news: [
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
