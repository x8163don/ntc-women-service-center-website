<template>
  <div id="app">
    <div class="w-80 mv4 center">
      <Header></Header>
      <router-view class="bg-white" />
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "../src/modules/common/components/Header";
import Footer from "../src/modules/common/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
* {
  font-family: "Noto Sans TC", "Roboto";
}

body {
  background-image: url("https://lh3.googleusercontent.com/6Dm4WuHcsZA_Wq4pkBVbm92NsGYVN_ipuFPC4prI8NC3DTjEkRI0qmVEyVwSMc43DTA8xiGP6iiWl1TeQSO9sK-wFs0Pknfcktv5IxDwpiMZJyuD_CQhEehgJf6tGH_PRLUqDPVqdzGr5CZqoNAiJAT2PFD0tLrTV3VtxUjdqO1AoZVnx61Pk53SCGj-Ua49toIURmwDdDXPeXp3uibMSm4oqqnhqOVPmaa3z8Xq0Ef9FSrzJsJTXcG47Kn4D8AjvnDGHy3Pd77ud8OxMyX724QzyyKJukAVjab1h7h1r9vPZO3q5K3_-X1_KxOfsbFbKima7-TMjwJdg6rqJGboDxNKBUPkRIW7WEiXOUTxE0dAOmtTyFA8LCZcSkr3MIlS_0lwZY4BnvcrFQIITxPP6vEeQ-6BM9pxYHnC4SFvINDCyzUeMLzqRrb_mX7cp18QbwkH4g1ZkiGrJqeds7CdFDr0_4N57zDorYQuykMz2IH3tEckXKMHkkcwqFnKH1OpLtNFOaflWgQEP7ZoFNviiOQk8vYSkn9AEjPZuU2Omo7-7UDm2_KUAU3L3RXNxfFvYMl35AdANzr0MtctbTcqIrbkrDYgl0cIVY1Sr_OS2HuYjsERSjUQFY-3Nans6bqdUNrX14VMSyUajl2yRVgWLzny7V2jVMJbWL5XbrUxLQgvzyfJ759GxiXJtOF23rK3v7R3bMnZtLqxjE0z4nJIBrrQ668mAr_gVg2sUvSWr7-0ioFH=w1280-h720-no");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}

.bg-blue {
  background: #333366;
}
</style>
