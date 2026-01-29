<template>
  <div class="inquiry">
    <div class="top">
      <strong class="title">{{ inquiryTitle }}</strong>

      <div class="info">
        <span>작성자 : {{ inquiryAuthor }}</span>
        <span>{{ inquiryDate }}</span>
      </div>

      <div class="btn-group">
        <button class="btn-mid btn0062 round btnDlt" @click="handleModalClick($event)">
          <span>삭제하기</span>
        </button>
      </div>
    </div>
    <!-- top -->
    <div class="viewContent">
      <div>
        {{ inquiryViewContent }}
      </div>

      <div class="imgFile">
        <span>이미지첨부 :</span>
        <a href="#" target="_blank">absce.png</a>
      </div>
    </div>
  </div>
</template>

<script>
import BoardModal from '@/components/Modal/BoardModal.vue'
export default {
  data() {
    return {
      inquiryTitle: '포스코퓨처엠 주가가 요즘 약한 이유가 뭘까요?',
      inquiryAuthor: '홍길동',
      inquiryDate: '2026.01.02 12:43',
      inquiryViewContent:
        '요즘 포스코퓨처엠 주가를 보면 너무 답답합니다. 한때는 2차전지 대표 대장주라고 불릴 정도로 탄탄한 흐름을 보였는데, 올해 들어서는 반등이 와도 힘이 없고, 조금만 오르면 다시 밀리는 패턴이 반복되고 있습니다. 특히 최근에는 반도체나 AI 관련주로 수급이 몰리면서, 소재주들이 통째로 소외된 느낌이에요. 전기차 수요가 줄고 있다는 얘기도 많고, 배터리 산업이 예전만큼 빠르게 성장하지 않는다는 말도 들려서 걱정됩니다. 포스코퓨처엠은 포스코그룹 내에서 전략적으로 중요한 회사라 장기적으로는 괜찮을 것 같기도 하지만, 단기적으로는 계속 떨어지는 걸 보니 “이게 진짜 저점인지”, “아니면 구조적으로 성장 한계가 온 건지” 잘 모르겠습니다.'
    }
  },
  methods: {
    handleModalClick(event) {
      // 1. 클릭된 요소 중 가장 가까운 버튼 찾기
      const button = event.target.closest('button')
      const activeCheckbox = event.target.closest('.activeChecking')

      if (!button && !activeCheckbox) {
        return
      }

      let component = null
      let mode = ''

      // 2. 버튼 클래스에 따라 컴포넌트 및 모드 설정
      if (button) {
        if (button.classList.contains('btnDlt')) {
          // 삭제
          component = BoardModal // 혹은 삭제 전용 모달
          mode = 'delete'
        }
      }

      // 3. 모달 열기 이벤트 발송
      if (component) {
        this.$nuxt.$emit('open-global-modal', {
          component,
          props: {
            mode // TradingModal 등에서 사용할 모드값 전달
          }
        })
      }
    }
  }
}
</script>
<style scoped>
.inquiry {
  @apply w-full bg-[#F9FAFB] rounded-[10px] p-[30px_40px] flex flex-col gap-5 mt-[30px]
}

.top {
  @apply relative flex flex-col w-full gap-4
}

.top .title {
  @apply w-[calc(100%-95px)] min-h-[42px] leading-[42px] text-[24px] text-[#141414] font-normal
}

.top .info {
  @apply flex w-full justify-between items-center
}

.top .info span {
  @apply text-[18px] text-[#5E6367]
}

.top .btn-group {
  @apply absolute top-0 right-0
}

.viewContent {
  @apply text-[18px] leading-[130%] text-[#141414] min-h-[225px] pb-10 relative
}

.viewContent .imgFile {
  @apply absolute bottom-0 left-0 flex gap-1 items-center
}

.viewContent .imgFile span {
  @apply text-[#5E6367] text-[18px]
}

.viewContent .imgFile a {
  @apply text-[#333] underline text-[18px]
}
</style>