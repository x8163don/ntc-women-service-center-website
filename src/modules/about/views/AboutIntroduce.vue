<template>
  <div class="pa3">
    <img class="w-80" :src="introduceImg" />

    <h2>關於新北市婦女服務中心</h2>

    <h3>設立宗旨</h3>
    <p>
      新北市婦女服務中心，為整合本市婦女福利資源及資訊，推廣性別教育宣導、協力婦女團體建構福利服務網絡的能力而設立。
    </p>
    <p>
      其提供社區婦女成長學習活動、女性議題倡議，以促進女性自我成長發展，培訓婦女團體專業人才，促進婦團橫向交流，提升民眾及婦團因應社會變遷一同關懷婦女新興議題。
    </p>

    <h3>服務目標</h3>
    <p>
      1. 婦女權益暨性別平權教育宣導方案。<br />
      2. 婦團組織幹部暨志工培訓方案。<br />
      3. 婦女福利資訊交流平台。<br />
      4. 新北市婦女服務中心經營管理。<br />
      5.本市各項婦女支持性服務方案。<br />
    </p>
    <h3>服務對象</h3>
    本市市民、投入婦女福利服務之非營利組織、機構與成員及關心婦女福利的民眾。
    <h3>服務時間</h3>
    <p>
      週一至週五08:30-17:30 (週六、週日暨國定假日休館)
    </p>

    <h3>
      聯絡方式(含活動訊息相關公告)
    </h3>
    <p>
      地址:新北市板橋區區運路111號3樓<br />
      電話:02-8951-9029<br />
      傳真:02-8951-9239<br />
      電子信箱:ntwsc9029@gmail.com<br />
    </p>
    <div class="flex">
      <div>
        <p>官方網站:</p>
        <img :src="websiteQRcode" />
      </div>
      <div>
        <p>官方FB:</p>
        <img :src="facebookQRcode" />
      </div>
    </div>
    <p>
      指導單位:新北市政府<br />
      主辦單位:新北市婦女服務中心(社團法人新北市志願服務協會承辦)
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      introduceImg:
        "https://lh3.googleusercontent.com/Mm3bA3gV4-td1gHKCttkKlEdmKu7KbquEXlTEa5lOaBvl2aXMVJ_2dlZOkjQxNB_UByjsNUhI_YfmLl8k3AE4GFCbpg6yRPUt_vMlCc9oE1H996PEyPbXfRdTXYOQ3Um5XKgJjsUJgDFC316b8iMTwxHa6cd6Izp1ZlEJBEDM--tlIqvndGkGb8VJSp2fxjQYw9jb2dQrOREpuehofzPkr9f3ik4Gt1NwNzdcGUdFvlECeyIAsPb0WB8C8ZGgGrWaF07YZ_ScF9UaEgCmUVWgys1vDVHzxX66ZqxcXvDIVyu9iv_uQSnK50NNOLYcye8Pvip1ddxQtNMEKtlLDu8fqjJgLKa4qId3XKA5gy77uaBzl4keLkrvVia3TckCwCSkMTzg5CwnmsAPr87ZZxP8d8zs5khd_h0TB2PSd1jPK6wyCtXqtgH7gcV3BxO7UpPKzIDx38idqpiOeVP4Y61fvHLaaQd3Nn0uKnSoyriXHJVneMPJZc8xH8RbuTyFvzhTRW-EVcjv-OxF53zYBLWjxguExuvY7XO93GYPu_n9ZFANgaWliHqoY4tP3x0HREihiy5Pgj8jIm8v4nP6sdS0twn5H_wH4LLweghVy2w8HhLHh7Gr6cQ-35-6kMaIyDfeyUJVukJj7imH66G0FcjTLLrhYD3b40WgSKzvR9yy-_SoDDlEVklZ0-IqRYf47TnfHHOIBSuy4Jh7nrzUjjt6S6PwuXNz0npbCJYfgxKhR6u91Lw=w1280-h720-no",
      websiteQRcode:
        "https://lh3.googleusercontent.com/-g_nqdqsDc2GTo-8U0E3vQRIBnJVMkOg9l-f9uMCS_2C_0Ldl3szB45_Y-HTApEoSQXse52c_zegDZPAkeKlg61dO3gHcarvqizCRfHIEyG-itN2yJUpG64sYXVNgFC5-zTc3EcG0Cd28B1n1wiXyYVuga_SOP9QfLflmNnphtMthvk5cbnOKZH_bN1zSORELmg_fjtpVtSkmKgiYb_e4fthzIVY4ngiemB1ZTPDNlfW_z-iPZYhaG-wVnu9drXr7tRmvvvvZBqYQ1M5Akjoc_SNqt4ffn2lezgdOdpuelgDqEAql8l4Umcz1sLyey-neEe93Egut0bgTxvOUC96nxJu6aGD3_0LNpbwT9RMcWPCGCn8MHN5zTvYqvyBDV_9lJ7TTEiAwy4TFfeIaNrl3r_-YRH5_YeexotSLt9PgvnNes_yeQ5L0VKKRVghLpaC5po_YE8X81iADCE9Fq2YoX_hyVkusOFRBlqMXVzbqruYde2u31xoW9EZX2xeuBsYZMzhto3O1IoO7K8cmzZP6d5bmMfqMXENDtwkQAPYzXAY5CFSqW0HMKbNz-7-abWe2ppwkEQQG5uC8gj2jg1CHxmtYxYLc11hbFTsQJpt7Rw6rhpggpO98SfRaAUgUcyOWfxnxXhFki7WHhgJlt62Gd6fgPUcXLXNoZ_c5R_y24jEsgdcHAO-PENtdYie4xGdOPQ0dnMEYXK5Z9ul7qXk3v0FlFRK17B_G-00pZxoJXOBdSk=w204-h187-no",
      facebookQRcode:
        "https://lh3.googleusercontent.com/YkmnzqvVnsB-fXrxiLkaAmzwMo48QRn9NLq13yrOhpN4CQaTyzGt7eZrO577QABfg0g7GI7qTlymUH__0a3TsUYb7w6Pgxum9qJJ2j4pqtbeULOkvZ2D1RhPBJmWZMX-VgEfSmtVc6sHu4A_Q62ZFLpYjctdlXFng6_38FSdu1p3jCpbPtOBT5omVJU0D73z8wuHx0YTj0HXiA1EAeMMbAxdkCKwZrhbAjR6jNy7xskOjLMLFGvOepHGY-EsAH0VvMTjB3VuV7VXfzLzzEnIrV0xIp8qdZp9NyPWE6zbdWdU5VgVmzLQObRGVJr9lrV8WpWzYj7jzCW3omKBd8h1rrdnbLQMPSBbO9qpD3vKKC4ZKj5lRzua6G1lUoRUyp5I1uyVKTJo7_Tlpve019vr4E0oSnmRapYKdArYNKCMc-0hdfZobpWlYMnPYU5F2NkE4slSB1WEvXKbTeLLqxnEW0prdrcTfiZ81B5_LaiZ0_MTctDvvN_E9GGrOQG_evgMGg5m3IpTcsUsxtLXdaeKUo4ZlBSxtaznlvbo4ISSE7lpvgV5erkfcI629CbOHSHLw9MsbvyFS8eVEwarW9SZlydVES44amU3sESwWUVGa0huj8nB_c2tcq_KCMU4zjcjlAK-fxh9BJ9JgrkV5jJjjCJ3tjl4NU4ziGcca06N12tyolH5HpyaS4jiPXeCHhtHldyBZpXmwBvm7sc_Yit9X7D0TUMcKmsVdKsIekiDt63SKDI=w187-h175-no"
    };
  }
};
</script>
