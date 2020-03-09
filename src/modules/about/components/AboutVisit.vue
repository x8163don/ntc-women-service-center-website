<template>
  <div>
    <img class="w-80 " :src="introduceImgUrl" />
    <div class="ml4 mt4">
      <a :href="bookingFileUrl">
        預約表單下載
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      introduceImgUrl:
        "https://lh3.googleusercontent.com/UqESfC1kVM3rvpK55YRseWH0yFmGQhRVcUeWmJOkqzape4c1w5ncMrtnqXjinWtUTddRNG6BUJkmZeIXjA2wC9F3_tht7NkxssAQ1q3NV3Z3NB3DeBFQ7kAN24rQfb6DLcP-n8LqdKIT0DSMIfBcqsoum9nCwHiqejkM_7tMnVr8Udj8cxQ7SNC-Q1M2FvG_OMcBTVt__UHMQHmVlh9kTD9Al3lrytVhQRs7nLiiIG5SN1Jpgp_-_kEPV4WhmgvhR-Ah9Mn_58xZu8infq34aifsHrBUzb_gPyZHfWkn2TRb_IB4L1P67AX2c5bVqv2pFpsloJBm09jSb7pwS9qRvlAZcvXxGElcluYCL_qGqXzHhNEq1PUxgRgwJ8Lpim4yqEU1CcQTVPSdKvUgz2Z2KzIW8Pm5LNy23_cpTLZT3GXWGGiDlXjfV3U3dyAD4ZX20Np_805VUX4CwgrA9l0H7cuVOuL0E1atvq5oOkxFDO-mBTy6NYlxWCCIET-XlNqJSmP--tDsqS5Y3DgkEv8c5hN5pXeAFC3zHE_GtCFPtGuYhCAInBl4hFmTEWA8Q3kXK9qzNt-WaDS4Ekyd_PR2pQsmjjkT2KQUg5VLFjyC59A3jpoZgcEy13umomlYDdINq43Hock4Eqe0ZptH3Rv5OgO9_lYXnoL2c7iXLJxKbba4zsm3YAurghsaxvq6rPBUCH0hkGTi21F2HYdydxZm5mozuo3-piF-fAXi1ju2_IyeBRs=w1561-h878-no",
      bookingFileUrl:
        "https://drive.google.com/uc?export=download&id=11n4nVga169oOk9GZRNQ5A8uYeIpNDTMc"
    };
  }
};
</script>

<style></style>
