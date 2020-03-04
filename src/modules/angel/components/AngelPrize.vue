<template>
  <div>
    <img v-for="url in prizesUrl" :key="url" :src="url" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      prizesUrl: [
        "https://ucd5e8790059ddcfb021270b8115.previews.dropboxusercontent.com/p/thumb/AAuYAUFWdmRaDefrUcnsYCzvffmDKW8H1x0-ULxf4mxz_gemeUhoawWPmqkT59BrBCbEgyP_sJt9dya5loXPsyBCHnWmIH5gsa9TjBWRIfRhFho4UsECxafvdWB1iJVuksfdO9FdGYq7uCshDYawQcL_hHxY4XGS6NME-r2wWC3mopfndbFkv0ZMyWdogyeR-qaLZ2f6SMfc4r4pbiKGMrgA1AiL5dp41aYGSlakJN9kgnA92g2yCQYP4rpopg16xwTBqcOgiy9-3uMspuyODNl2baWPShodIHy6jv8UkEyJotAxUes0L4rZFz8zwRNdMK7SIXp6fp1TTLMoXWkvcGAJ2fBZkeSU6mRzagEPSH__mCByUXQONocZkToMdd4FZ2RMafmhHrVdefDfbmgjEefA/p.jpeg?fv_content=true&size_mode=5",
        "https://uc68f1d4c4876987a46030fc6deb.previews.dropboxusercontent.com/p/thumb/AAtsvSEFsKRfHSPUpzFKB8RnFrJ4qLbFzOnsiqBq1z4klncaDKcWlzZbDvnVeFodeWe65zpX7ppYmivzFJhDZA8zMSbU8GBDAoi7qRO4skaKBAhVyJCToi8e1jo7kgGcvcL-EDNJKV-XbqSw4_ZkwlB-kyZGVx0gplp3aLDwq66NjrKbOtLBHWEroKYd8goJ6off1lRsHXsg7QLrmX6pnLN6plO9zYcQDWXAXbDGOMuXmdBSIsi9baMo0_XR-7m1jIoY7fcTBDb1YQ1lsTSJCvy50a380h7E1HGzf_NLN-n9OCqsrALNeb9OhxBHCKY5D451pulo_0-OHpkVP4hSjJ9hmwEY9JFkQ1yjuDC3S2Pz6g/p.jpeg?size=2048x1536&size_mode=3",
        "https://uc33718c81eec2a0c580a212580a.previews.dropboxusercontent.com/p/thumb/AAvdP4CmNpmxINVdfztVT_zyHj-cps7sz_utfOO0WG3PBIXqlsxTE3fqL2jinKzgoBfQveqIrNrv7DBRI-ASaYRG3ZWtc_eywpcB1wtN5WvzGvSG8FTq-R1Ce2_MzTH7WBjexvtCVt313dvUBDz9MSSlLJDISw9psg-UtGLAf_VJNIQ4wsais7qhM5fkBkFiLJ7BMTwtJq0HBwdyo34unMC7WcytoJvUgx8i75lD1ZPcvIwbz_q_J5aaICr-D7akKDPJn772XFPk5EfNlU-NLd9MudcOJ8lSLILZjDcxUgdLSyylD4EswRHwwGeXx_qKQU3a8idxyI8mwRNR78_JyWIw35uBLLuQmY0ClLh6wRxYSw/p.jpeg?fv_content=true&size_mode=5"
      ]
    }
  }
}
</script>

<style></style>
