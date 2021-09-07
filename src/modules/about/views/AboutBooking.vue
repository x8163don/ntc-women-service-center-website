<template>
  <div>
    <div class="pa4">
      <a :href="fileUrl">
        場地租借申請表
      </a>
    </div>
    <img v-for="url in imgUrls" :key="url" :src="url" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrls: [
        "https://lh3.googleusercontent.com/B2wbUduKe12jA-UiqZVuD7pmWMVt_09zjBIOlOEDR_4MhAe2wcQUexA9Uw-S4Jq3mcSJAeibP5bzpy-lFqQBgMwUN_abnsNPbv6iQJKwG5zAM429SJnjpHrDmCI0_LCfDx5gVZQkzuBz9UcNwjHVjZ9WAwJlKXJDM3bPRBczkXW4KfBxaUySBLU28ZbYbTftEry02GURkWJnBnLnLV7v2PD2O3yIfiNdgFKjLfFM70KH8Ohol99v-caTcMEwNd7qubg3TlisonHNeWCChkdjBjIu1mGytZ4xkF7lt8INwTkp-42pTEeIK0vCOr5tjvU03aCwPP7Clh2LE5qlxjh_seDSy0U5HbxMPaWgUGhdxYOxe9n0SaMpY9NjSL_k2oL8hkhbZ0dCCFYQxCAv5tGpVpJUX-gEGE2_4lUbsBayjQJFt_7dasEBgWt9rRTHNMxclaNiozRLr-zpxpXJy_rLUqmIIA8BcMd4KnI6KnOcOTNzz9U-tLBGmuFYxpkzkDUuBYoTXIV3O-iWPKuk4UDnEljk0uiNXkIbVLXm0wQNOp2LR4nmpNnbr1TOwjXHVL1VGajhJEFRR-5H0zNNquSEPVBINQOsu7c7ech8ut8h71aLJw1bij8NSAeehMzvWa0wSum_x27lFOTogojyZMg5Ww3K9KhuYwYf09vMpPK2YNscjaRZaWHSIqrbKIhFKRrSA4IcpOKI4eoQMIfTBsQZs0l8F6yGSX2KcXLDdW3tCmDTJa0W6fJk6C4=w1916-h1436-no",
        "https://lh3.googleusercontent.com/gWDkb61j5Gmgy2upMgqTLf5GZKX9sDgFTVhLVGBitkw9JA0S7UicxVnA3419EjRb_aWVuryyPNpP1BSIGYSAP3GwqK8HhQhq5uGfWQT66quWSVPVo08QrZZT5qjlSYzks_OzCabKGDtjJQ41XAmc-68O4tV5MCBd3QuYXOJ1lsSf7VAKbp0QDFZCal-s7U7x06HCvGuoRaIVYLGFSZOgS-9A4qbZm4QIo-HVzLNQhWUcXDlp-TIiK7k348_ti66bW6xNasoSRwEYA5Wyz42Dzj46aJt6kNXFXJh8x815amJIJbcxCRfv5lBWXTTZ690q0CfbqFLbcQIlkUkNzuugqDRBiwu5OLvd2uWBzaDd3AByhzKUWcqbIWkjYRdz8rcx9elSCpYWCuhcAzPCGjLkjrUJ_ZDcelmCToC94IiKyUo-UoHAMNHPmzrnl-4bCzclZcj4sqpxE1Nxb9HdJbmvWf9upbOkjqzQ4FkkHb0aRw_stZG2fOa0I8glmS2yD9XMNNI3acwdaoD9l0wiA8whHxd3nRFszDSAfyFUguUfNrbpvbZpt6vheQ_qIXbip3daRz6GwjYzAfUweK1UCm6M978HSotAav6nDxo5198CQbiERZjTxPUWMxK04vtO2zq0jy6qP1elE0YFWhf7tK-Q1jG9foS5yL8aT2hvG6Rn67rmSbO4IxvBVHdn4q4DarDb-p5gzE9owZNChbToF-TOmMI4NpyAC2vN_VUa5uclWU1FXtMt_Bd7WY4=w1916-h1436-no",
      ],
      fileUrl:
        "https://docs.google.com/document/d/1ay6ZZHGFUU-bGblMng2I6Z4ITrYghvld/edit?usp=sharing&ouid=115132396574802911669&rtpof=true&sd=true",
    }
  },
}
</script>
