<template>
  <div id="Buy">
    <div class="suggestion">
      <section>
        <strong>실시간 매도하기</strong>

        <div class="itemList">
          <p>총 <em>10</em> 종목 선택됨</p>
          <button v-for="(item, itemIndex) in items" :key="itemIndex">
            <span>{{ item.name }} ({{ item.code }})</span>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 5.5L13.2782 13.5" stroke="black" />
              <path d="M13.5 5.5L5.72183 13.5" stroke="black" />
            </svg>
          </button>
        </div>

        <div class="txt">
          <span>※ 기 입력된 매도 코멘트가 있더라도 코멘트 없이 발송되며, 매도처리 됩니다.</span>
        </div>
      </section>
    </div>

    <div class="modal-footer">
      <div class="button-group">
        <button class="btn-large btn009" @click="handleClose">
          <span>닫기</span>
        </button>

        <button class="btn-large btn002" @click="handleConfirm">
          <span>실시간 매도 추천</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: '삼성전자', code: '005930' },
        { name: 'LG전자', code: '066570' },
        { name: 'SK하이닉스', code: '000660' },
        { name: '현대차', code: '005380' },
        { name: 'NAVER', code: '035420' },
        { name: '카카오', code: '035720' },
        { name: '삼성바이오로직스', code: '207940' },
        { name: '삼성SDI', code: '028260' },
        { name: 'LG화학', code: '051910' },
        { name: '셀트리온', code: '068270' }
      ]
    }
  },
  methods: {
    // 닫기 버튼 클릭 시 실행
    handleClose() {
      // layouts/default.vue에 정의된 리스너에게 '닫아달라'는 신호를 보냄
      this.$nuxt.$emit('close-global-modal')
    },

    // 실시간 매수 추천 버튼 클릭 시 실행
    handleConfirm() {
      // 1. 유효성 검사 또는 API 전송 로직 작성
      // if ( ... ) { alert('입력을 확인해주세요'); return; }
      console.log('실시간 매수 추천 전송 로직 수행')

      // 2. 로직 수행 후 모달 닫기
      this.handleClose()
    }
  }
}
</script>

<style scoped>
.suggestion {
  @apply mt-0;
}
section .itemList{
  @apply flex flex-wrap w-full gap-x-2 gap-y-1 mt-4
}
section .itemList p{
  @apply text-[20px] text-[#141414] h-8 leading-6 w-full pb-2
}
section .itemList p em{
  @apply text-[#0263E8] font-bold
}
section .itemList span{
  @apply text-[16px] text-[#5E6367]
}
section .itemList button{
  @apply h-10 rounded-[10px] border-[1px] border-[#BFBFBF] px-2.5 flex items-center gap-2.5
}
</style>
