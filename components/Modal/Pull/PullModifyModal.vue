<template>
  <div id="PullAdd">
    <div class="suggestion">
      <section>
        <strong>신규 종목추천 풀의 정보를 입력해 주세요.</strong>

        <div class="pullModify">
          <p>풀 종목 수 : <span>100</span>종목</p>
          <input type="text" placeholder="종목추천 풀 이름을 입력해 주세요." class="custom-text-input" style="width: 708px">
        </div>
      </section>
    </div>

    <div class="modal-footer">
      <div class="button-group">
        <button class="btn-large btn009" @click="handleClose">
          <span>닫기</span>
        </button>

        <button class="btn-large btn007" @click="handleConfirm">
          <span>저장하기</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.pullModify{
  @apply w-full mt-2 flex flex-col gap-2.5
}
.pullModify p{
  @apply text-[18px] text-[#5E6367]
}
.pullModify p span{
  @apply text-[#0263E8]
}
</style>
