<template>
  <div class="">
    <h3>享受．閱讀 / 典藏閱讀</h3>
    <div>
      <img v-for="url in imgUrls" :key="url" :src="url" />
    </div>
    <a
      class="ml4"
      href="https://drive.google.com/uc?id=1zuzmOXHByueviKMmgmsYUzQRs_bz7nLN&export=download"
    >
      圖書清單
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrls: [
        "https://lh3.googleusercontent.com/OubgjCRzlGQ0fYKBge9MMZ3VeM-xqOAFkUwRDyqlE9uWuAqy5vLf4prPr5UUHWigb0P2g5o5Lc2n4-OBix7yUW4vq3oDB2pKOqkjdujRDeJh63JMc_pkAJdvMpwlVyuQMBMq8R2Qu9CH7TMyo1BY5YjG_dPc_FXG5wAGMY6P7pDnwh2dCvM3GKGRUizhsp9KCLFWefL9Inw5uRlY-yvuSjYmXWRcQmTpDb4JHibGUSWpy7If_z4dPzTCr9ZKxPPiwbXjayTUIdvKSVgrHOCqJFJmGqzqxEonnCC_kRpYj_ucpzbpI_XedF93N3C6co3ExLInZA4HtsGu7ub1UukVGI9JjbylmNc4RTq6MttX0AdC5BulUFtKTn-RenqBO0ezBWnPv6xa7yv-1fhl8Xg7V82D4BD-HThJ9XpYAozpWo0ELcuBnU71Sl3EeF9KJBBcexvQHuB9yyPLAbE4KSZhY7ddM9iPcqn5xHiRjUZw4HsnePNXJL8b6UG8AkJqShbYabrRRXWwtiBQV05CSH6lZhONVtIcBKdZGZ-RUcGlqaN3097XrtJGQxcvPKCEKqg1yrGxZi-4lxVGPpNXymCPmLSM0850drR3jt4tCez8eAW1AtMvUijh4qufrQMJ5hE2kIxlkEIOTypbVQbubMnaT0iX01mPuYyROdvcfWTGi6ar7DRLU1bWgd-RKDEEXAgqtqzA6H9itR46ufb5kI-0ms8RoWRtjlGLJdIr9Ty8zaj6LUQjikZL0Q=w960-h1280-no",
        "https://lh3.googleusercontent.com/-CyTJSxVRJLob_uTU4eu2w6Lc_ZJ3J9hUh7_Rh0Fxc0OkX8yzaKM_6UVX46eUZd7viHY4iPhr4sY0tu5nzfP0Yhye2pvz3be5FE8lOyV2kVBSSnwgOGl8H0EtGNbDn8tvFoBXerVdkn7CC3QZ5u33-x_GHXXEucbe6oZ_WjlApG0wykYv1mN2ArYyphdHzXC6la7jh-Y-PTPj2VfZx4EuD8lgovLyug5yArYOJOKPOCUSfexQ3CTdRDZ1v5yxA9Y42IBFO0D0D_wLr1vI4BxlSTXbo-4YWZ5G4_Mc3JGFvD-TWvywJW6FLbEhJeHrt2uIeME-DfiqXHad-ZAG-6q9WBvkWjRhwf9983O-E0T0OloDk1gbW8Qfkav89tni_ltxK68GOt_7HgdCGdz5RL0wWYny2Uj6DgnW5clN4QPVtaa9fZDkjv5kpiAEad3BqW_nl_WQqwflXfwrwL7lW8KLT8FwXEE0CMSkLz3rpoOwkAyNSWbGkn_C9UmvRreBLdrTHrMYQpqAQr4ATW2Sa1FvlQyb9x8RgDDfRDZDGrXVZ-KSuAF3ou8ZkvvX86ctMV0k7SroM5JzTNeTRduuydzSPgGkpnyHMqJAi7OOSelMs0zv_2N-wIEPqxUnmnVojsf4u_Z38X16_yLEcUSL1quPcrarMDqmvnv8tMd3P6CCSO86EaSW8_OFUR41gXaDDNQBkJgr3SH3RYBRFqZo5DmK3vd3VjVvkHuYkwP7o7Z_70LAquoi7iP7Q=w1280-h960-no",
        "https://lh3.googleusercontent.com/12BdpSTBiK8yaxZKg-KqneDSzafFX5be5JqsRMTVia_Jd04QZSnH3DARAbltfRbdPMNDtyRnsVrShDNH-adqa8vNaAKi7g6N0e86qpzKg5SbIXTY5Ts1MOU-mhiJm4minc3dfi2-q5oH8Tx1bkvVuUSFT_-LWMEiNSChkOOx8auALviocNP8l9knbwqNBaKTcywf6j3ISxFCDhLLQwNN9sJ06IPi3lW6j619g6lNN65klwhkxzFAsg1TqC-tZWctiuA6YgreYQR3dOTAr_v0Z0FPExVJjsjhhHgP6gi6k1AZOjv8DaL6NfwADerblKdFeHviKQ8hOsursyyRn9t0Jecw54-zvTxn12Mz_FbsaFcRfGBid8ugSZ3th7n7hHYs2eNSf2WfRao6d6Rax_xSBx1ycPYBsI1HZNkDflU8WaeC1corc6Z12pWxxOfTW2O1G4P5NSlq2C9hcVN0aeEALeWMs3DgJFIr0T2KtTt5DAqHcAQGZdofBz6FSKKTkl3zUkKX2N_nx6Pa_EjbxGQbdIQbQkviKSRR3TDxpTr-syeRRO29PCUIew9utPhpNwBy6eM8a3sVeEcO99psnWlQ-01laWKJ2nQNO2tWvzvXpDYSLXCXgvwOanhBr_F4lW5YiTbEThNBM1UEFP-bvS0uk42kxeXNKNoFUgGR8DSdKoMVj-d5S8-VSJjq1pF5qDhS-fr-TZ2nyj9p4dYA4da3xct5uLZAU494KX1l_-T5jJBroQD-mGD6vw=w1280-h960-no"
      ]
    };
  }
};
</script>

<style></style>
