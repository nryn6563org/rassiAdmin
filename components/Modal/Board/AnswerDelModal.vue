<template>
  <div id="AnswerDelete">
    <div class="suggestion">
      <section>
        <strong>답변을 삭제 하시겠습니까?</strong>

        <div class="txt">
          <span>
            <em>기존에 입력하신 답변이 삭제됩니다.</em> <br />
            삭제 시 복구가 불가능하므로 신중하게 삭제해 주세요.
          </span>
        </div>
      </section>
    </div>

    <div class="modal-footer">
      <div class="button-group">
        <button class="btn-large btn009" @click="handleClose">
          <span>닫기</span>
        </button>

        <button class="btn-large btn0061" @click="handleConfirm">
          <span>삭제하기</span>
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
.txt span em{
  @apply text-[#FF6C6C]
}
</style>
