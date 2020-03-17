<template>
  <div>
    <h2>閱覽室</h2>
    <p>
      最具書香氣息的閱覽室，來場舒適的閱讀午後時光，還有性別專業研究書籍與影音可供探索。
    </p>
    <div class="flex">
      <div
        class="w-third h6 mr3 ba grow pointer"
        v-for="url in readingRoomUrl"
        :key="url"
        @click="openImagePreview(url)"
      >
        <img class="w-100 h-100" :src="url" />
      </div>
    </div>

    <h2>展覽館</h2>
    <p>
      每年都有規劃不同的藝文展覽，盡情享受展覽的視覺饗宴，和豐富有趣
      的各式新知，帶給你充實的一天。
    </p>
    <div class="flex">
      <div
        class="w-third h6 mr3 ba grow pointer"
        v-for="url in exhibitionRoomUrl"
        :key="url"
        @click="openImagePreview(url)"
      >
        <img class="w-100 h-100" :src="url" />
      </div>
    </div>

    <h2>親子小屋</h2>
    <p>
      有軟墊鋪設的草皮活動空間是最受大小朋友歡迎的親子小屋，裡面有各式玩具與繪本故事書等你一同來玩耍。
    </p>
    <div
      class="w-third h6 mr3 ba grow pointer"
      v-for="url in parentChildUrl"
      :key="url"
      @click="openImagePreview(url)"
    >
      <img class="w-100 h-100" :src="url" />
    </div>

    <h2>漂書區</h2>
    <p>
      燈光明亮氣氛佳是放漂人想與大家分享的漂書區，漂書區裡喜歡的書籍可以直接帶回家收藏，
      一起享受閱讀的樂趣。
    </p>
    <div
      class="w-third h6 mr3 ba grow pointer"
      v-for="url in bookUrl"
      :key="url"
      @click="openImagePreview(url)"
    >
      <img class="w-100 h-100" :src="url" />
    </div>

    <h2>會議室/視聽教室</h2>
    <p>
      各公益團體或相關非營利組織開會或是辦理婦女福利研習、團體活動或視聽影音
      賞析最佳場所，只要是針對「對婦女福利等公益活動皆可申請使用」。
    </p>
    <div
      class="w-third h6 mr3 ba grow pointer"
      v-for="url in videoRoomUrl"
      :key="url"
      @click="openImagePreview(url)"
    >
      <img class="w-100 h-100" :src="url" />
    </div>

    <h2>女力加油站</h2>
    <p>
      提供雙北地區各式婦女團體之簡介文宣、活動及研習訊息供民眾索
      取，亦是婦女團體資訊交流的彙集園地。
    </p>
    <div class="flex">
      <div
        class="w-third h6 mr3 ba grow pointer"
        v-for="url in powerUrl"
        :key="url"
        @click="openImagePreview(url)"
      >
        <img class="w-100 h-100" :src="url" />
      </div>
    </div>

    <Modal :show="isModalShow" @close="isModalShow = false">
      <div class="pa3" v-if="selectImg">
        <img class="w-100 h-100" :src="selectImg" />
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "../../common/components/Modal.vue";

export default {
  components: { Modal },
  data() {
    return {
      isModalShow: false,
      selectImg: "",
      exhibitionRoomUrl: [
        "https://lh3.googleusercontent.com/6F721p27pK-an8o_DgX-fDtz1DUb4AzrFipkWDTUg72Yj0xXMXFA-_RL265cXhabpTw9TljvsTePACEieB1sp01RoFK-WtOpcQrumfuEFmnGkkcjGZV4sJMEFiTlOqoS1A5pQAP6lYSBFHGRWThq0UrWtHucUjXnn4cfU9B2wl5ZksF-5rSxYzfLsx9F-KBft5jn2Chvz9qjqFTJ2-u9cjuwjyr3nFc1IulfePulqPoCcSyBtN5M9gJthEzqWZ_SrNHQuegd_dR4TFwBJQ0jV8OThbSnmTjLUusHNqxhMDPmMwHaq86Ox5pNUskVJ--zE1JjtAwlC-xGzUE_BbBTpuvZcNlQwoQnAnHF-H8JzdABMhXMOnz6FuZKB6H4YfcCR-PQBkQ4ZvyLKsHzY9huvBrSgke_3x-RSgCqeM3eIvR3jsLZ2s_kZEq988kGDWePIav2b83xwJXwvgqktaRaQjXFMDJckeXlkbPOGsbFfBxx2TEtWl7tNWfd4g293PChDDbZbys9CJ2OiJHOfbJsaTUxgMit2S7tTDq8gBXEGSPvggug5XxCnpbuTEqiD2sxFCza0q8imBGrRWea7hx-waTdbSCS6PdHXvXMEiMIjk_cioL9FqVhgIZ9KPiogJ7jf6ReKva5akGrsFOKqlb4usymfklC7o55kTP5pdiaF6QaSoGaCOwb2FkpSCgk7ONTYGvtFdi6Vk7jSGaArLnIEATZzkUaqf-SSse4nNZRnLPRtff7=w1280-h960-no",
        "https://lh3.googleusercontent.com/38J8NLptHsmrbWLf5ZbUii7_Ru0GcB3JI2WssCacQI41Tr6QNVhAVLaRjeDTr3yQhl6FlHresEH_4yj1GwMSEG-afIcpJPsGvh9snaaLU1bONgbYtOm-zHpu8p4Ixk9DQYFAVXy2S5mr8xcKtYV6xysJhOP7I1OJqLRkhISHx2jMw9zQ3Veb2qMwN4LyVx4xw_VkF5v6nRXqkY7LCKPKT4VvphEIlznbtBx_NUyxpGeldLPnv_EciN9bZmgMv1hOpOD6sLccc9DEp454x7JMzsIY5ICCzvChsEJCmJbaChCwYXgQyQDzW-iYuAFSklerwdqFmChLS84_wS7Wgp2_f4TAkto7EcIY85P1u_FMOOL8INxkkC_-K0so9s_VGHfKHUgjMcUPrgVCh0oLaU4w8hQgYG1jgTOJH3hkMTtmhS2ndrzM9pdCGzx1v06wBDNf0BzaRkvP8AD5v7vBck18Czi8Lx92juz3qF_H6DRATbliASZUZjsSY4ZDe6XpTTGbdKI8IpRsYJXKxQ6b-Gs-Md_mrXPA5yVMiTcCFgN8Z_gg2U00AXWHrBXwDSvq93dxfEmgro0W1SBQ-4Gv2yBghu2hIeLNFdt3uHCT1chG6JiHmmuI8d3eanOu2-CWiFfqVeCXZDsm6A8XTfGg1mKnYzgUAXdUxpWAIGxJauylPsrlwfJP-VQdL9dNcTmXOu8PIdfRc9yPwnjpbmIEYAEtR-B1xldKWQpQHL4Vp9lNSVYNBbwd=w1280-h960-no"
      ],
      readingRoomUrl: [
        "https://lh3.googleusercontent.com/fnNs7ToYcAJDtcS2QbiuQec0l6-k3UQDzIhbqDnHuFjBCgf0hxNVJO4yaGk5d8024GRabCI3XWXr5m5yEPdV0cM7SVWL5C1G6-2QG4Ajeq09D8RnOPlGwCMWFKP0QjIPAU6U7_pfCTPH7fZYtpXO7VFs7ytZW5059YtNfTIZcdXP9iA7sdwOu8ADpEg4BNvHsJMhIXPs5ZhvR9n34nCv2UgVwc1ckyvlDFlwxhISzVAAdCKfhSCOqk6kgb4W8WPWHhnk73UvgknGPkCkSIfcRPAnBbo2KohP_3AFEhUkABnhIkA9-olBNLrr83EBMLMzcaUV9949C7lYxEPYcQILzG7Ha92S4nwSL2zlplp_pM6trU-zDx9JnckFKa4z8DKHN91OHf8n-vo1Q65sTrJwMabkEjwDhSQlIzrZQyV1NiRMt1GzNVydkwsS9hJvKw7O_QQK42DcqbIBacqYHyCp7HXpheoSaE8fBB_4ucp6KFqX3MCuKjs8bDc5LdJJHVE9Yiym_dq4jRpAgso2L6qpv4TiC7CnJnEiNV1MHj3PZ9lyzSbUn6yZDvyBwhAV8yWd0Dq6KXmA3WHV6SatC6zilz4lySNQOrkR_9vTlpS3ft5xeU5_QbIQjMJspoOHy9x9clZAH4rSpwhpYsSZwspxT9Vk4NB2IVljKDNJ9GYqRd2wwTPgtimCqQizXZP2gHvIeNmRyyPstDHovXtZPwnPvk8pKsPdCGey0jTgsAyan5yohq0=w1280-h960-no"
      ],
      videoRoomUrl: [
        "https://lh3.googleusercontent.com/MK4MpmsSdLDBRJzLeqMOp-hi1x9ltz-sgFX3YUYkngwnbiUGnbrWM8TYMmr7ztF9UuYZkhna4GU9ZZNReTZBhv97cjWg7WpTaIXUmem-GHlF-a2u1iVgHEC8c2eOeRfuIj5EA46-FdATYY2gAq4kolvasKUyr0QRj5MYS32bEeCX-ySC_oRJNz-RqaUyZqtbiGwZgB9AY4uEiop267YLXsIZjXYywNYGrrstle5MGZDMXy_gM41mT3rgWBRQcq2yIfeGTsQA4thkIgXHh8H-tAfDMliah2UPtgc2VBC8_2gtUTWOUg2benaicqHd7k6bpdGiGaUh2uN6IupZzwf4Cbs5qNyyKAQV7WU3Yr-mquzxw1c7txloj781OCIdpYFFY0PamiYApjvMOIIkw8Z47mWSdN8B6d-XHgq29SPlE0hqUHjK2-NMEGvVZjlvH0eFZrLd22tSs0R0DFBVZk8boBTq89lBHHz1kVph3vFLolM0rvbjVLIrhQQrJk6vNp61n4tlTHyVCiBUK8hbTMeW3ODLsPuiyqXJKDOetyrPqECdlSxXsPJoAyArsAujnPnNnuuScx2LcjHl0Ot-nw7lvkufEpCqxp4ydRHnRMSAnuL5ldvI2VZv-XiNFt_YvFMRmhvS0ECDT37qpEFOzLF4EIHwyYjLOqD3Zj5BmB2m-zpEhvEYShvMrWLBhKS1qYFxQBuCh3ab9MMK5ChleUdUBrDBPV0ExcGEPCM6Af5O_PBxWlzg=w1478-h1108-no"
      ],
      parentChildUrl: [
        "https://lh3.googleusercontent.com/Qm0iIwhoJQWgqi7TohL9x1pnp6cfITLis15ZrN4LdcpIXp5_gBiPxGjQRYcrgIrpW45vrgiuFkAtuqwOkNFcntkdRXVVsGO6Pxp0DXltyN9n-_mBOm1t-K-lyOfJYmNT_ulTYmIrCRwMtoG34U_KTFyGRYHdY0HXPq6eI-nVeMu4x_T2ZfNKvr6AgL6VH-KP5-Q6qC_0ip6V9N3jZf5aSrFjOm9yqx-KF8BnwchYQhBTgMH3rVjpiiMGOUy0wiWtdiIIqTJNv8WGLk8Pkp3uTEKgoEOp3MRGluxjHVR7sUTwzpkgqFASCwFxlbARRB12kenD7sJPxEljlt4nN554RrBPPrDs7ChVEVz_FCeAeqGiVwElFj4ywY6q9li3baWQGh48HQsPtdLrsJ70ChJHSMhPJi1R5mzDFbO2bs8JE-0mhLVvl-CJPtC0PSSxN6xnfcdOyAgOP3D4bunI5Gbh37weyjuYSu2jwPDDBMsqWxYgS0MJ1G-rJsJ_RKUvzFIOtPy6U7_NYw3cNjoZrHeakeLqM7HAH6Bu04ikKY-fFe_VyvS_oGf5Z3opq8bVgvDZ7tmBDDvvTTKOHMD58YhDeOs_lhy4v_YIuJMBqTZPQFVYG8dvUza0R-Zcxau8jBTcitFz58zge7pdbTIKkU5Izr_JghFWT-0hvllEO_k_-dFFCUfft3wxjROg1biSw7T4e1rozsVTh4kdERYdfGZotxx73Rb-dxdlpitpXmJ3HewVVsh2=w1478-h1108-no"
      ],
      bookUrl: [
        "https://lh3.googleusercontent.com/wzE8BOShYjiVFDnKAcGApmBb8RZu3KixrtOX9t4ZBEOdNg8tFngdLwhU69THpOSyuu3whJX-me5amO0ehUU-zh5pPZTKBG6dol3LuT37wsgKq7GSqmkVIjUKZO8Ui3gdP64V1_yY_aPmMaYL3oJwHfIfpgZLW2yM_YC3svMweuOaNlhoscHYxX1WT8_LfTUi1mr1HGzDI3O0sG7LXzWTWOohGpzvP06lr9RR5EwUOPJKOGP3od1IRlpqsbEtewUMY9gxMYkvrZGz4z1OISHX1E3jL4bAwd_uMt7qiBoZe8OU5gh8wAf2BbgsEFd0GNjkBNAUCB9VQislnvo2-j0JcOAMWnVe6tjrClw8Y3MHeMnVu8abvYMZE7F5ejzr7makPsRyw-5sWUZEyvQj2Zretp87mSvZtMfx8zk4SJL163EkIucjwZCmk0gTzZAW4_NFbfaD_LfCyNNlFNU57OhiqGitcf4fF6loVGq77FKkddOtI3o6rYfe1kUdQPv8NxdbvUstT5sK8JV3uMhVd7UxImOsMGPk3DYuDkKHREv_o6EjaarJkkYZhRhKf94tllwUGDp6Mi63RUYs3F94OgVmMyUHuUVq0gvlqev33IRCYmgZ6Ty22ofYD1ZRNRiy5I4zeEZDcDifocfxf2pQGlRJlg93JoZDN1w6O4QQNIKy-JfRb8Sh_aMuSqzVrSsy3gEPGXxdKglO11S3a-J-UVXRTnCjPvvF3-S74_cTXZFPJCrLwtiU=w1280-h960-no"
      ],
      powerUrl: [
        "https://lh3.googleusercontent.com/uDZZsW7vMiBn8w_DwahE51FZsqoa4moFM92Pm5-W4JGmnGDRm3-uALxVi-34QWs1Vit8UT7jYYFkg_zb_e3Mnk4yt9l-a_ZQ5vNyQko1ymOGAfxNAHA5p7uN2rI7kSoWcSjAaWAQHVZscg_BW0GpSKhzC07pS6dGySjsFo4pXT-KJ43QNIiSmnyw45Z9UROhXPcdKVJ_666-EkrY7-geQ8ianYu2g5r3TJKj_Bsj38Zidh8-9mgrFBkWr4fNizabpv1MoeWxvx4yuBnI-cQ2DHjQCUydy_H5SFaffPDQVQfu6XToPcTjGZqCmRp1dhgx0VEbX6LvDJQY0RN5QZuPlkEtjv9AMM1skPt8QvOHQRxDREzVvL0UJR8MAc_pBWEIEwG6V8Erugl3aCnZ9-qzje_yQR0snv0OJNGZnoy3TmcV0FJg2oz9uhlDr0ZV2Yb-PZa-Fhjh0pwS1tojxi1nIxx6MJrbceCHV3rx47dQZcd47mPHRzYKzF47WoK0CW-kKz0vw0AZvfCoaczA2AzuSkNeEEcn1FvICSKSPwb6kP6fZ3xzofpXjPSmdCMtMhroUmLqUyUlRWOqQfh9PE7lbIYYtnKC2S3xP4GjRNd51wIlCgbtKKg66mt4QV0vP14eX6fBlYR68pyAq98vPPGV141f7kgOiUEPzrN9UpwBxSjOIbl7y6R8Kq374A0FmU2gP2TwXS9pnlBHr4w7mG-bPaYbnRFtYofk-hvzKC1U0yb-Wp1a=w1280-h960-no"
      ]
    };
  },
  methods: {
    openImagePreview(imgUrl) {
      this.selectImg = imgUrl;
      this.isModalShow = true;
    }
  }
};
</script>
