<template>
  <div class="table_w">
    <table>
      <colgroup>
        <col width="60" />
        <col width="90" />
        <col width="245" />
        <col width="210" />
        <col width="*" />
        <col width="240" />
        <col width="180" />
        <col width="160" />
      </colgroup>
      <BasicThead :theadList="headerData" />
      <StandardTbody />
    </table>

    <BasicPaging />
  </div>
</template>

<script>
import BasicThead from '~/components/TableElement/BasicThead.vue'
import StandardTbody from '~/components/IR/StandardTbody.vue'
import BasicPaging from '~/components/TableElement/BasicPaging.vue'

export default {
  components: {
    BasicThead,
    StandardTbody,
    BasicPaging
  },
  data() {
    return {
      headerData: ['', 'No.', '종목명', '현재가(등락률)', '나의 매수 금액 / 매도 금액 (수익률)', '목표가 / 손절가', '종목추천발생', '등록일시']
    }
  }
}
</script>
