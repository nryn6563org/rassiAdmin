<template>
  <div class="stockRD">
    <div class="ch-item">
      <PullDropDown :items="pullLabels" :initial-label="selectedPullLabel" placeholder="" @change="handlePullChange" @update-order="myItems = $event" />
      <div class="btngroup">
        <button class="btn-txt btnPullMdf" @click="handleModalClick($event)">수정</button>
        <button class="btn-txt btnPullDlt" @click="handleModalClick($event)">삭제</button>
      </div>
    </div>
    <button class="btn-mid round btn014 btnPullAdd" @click="handleModalClick($event)">종목추천 풀 생성</button>
  </div>
</template>
<script>
import PullDropDown from '@/components/InputGroup/PullDropDown.vue'
import PullModal from '@/components/Modal/PullModal.vue'

export default {
  components: {
    PullDropDown
  },
  data() {
    return {
      pullLabels: [
        '1. 기본 종목 풀 - 0종목',
        '2. 하이리스크·하이리턴 전문가형 - 100종목',
        '3. 프로 투자자식 장기 베팅 - 100종목',
        '4. 공격적 성장 추구형 매니저 - 100종목',
        '5. 고변동성 장기 수익 포커스 - 100종목',
        '6. 리스크 감내 기반 초장기 성장 전략형 - 100종목',
        '7. 올해 안에 수익 실현 가능한 연말 유망종목 모음 그룹형 - 100종목',
        '8. 전문적으로 투자하고 있는 리스크 장기 감수형 - 100종목',
        '9. 최소두자 - 100종목',
        '10. 전문적으로 투자하고 있는 리스크 장기 감수형의 텍스트가 최대로 길어질 경우 대비하는 - 100종목',
        '2. 하이리스크·하이리턴 전문가형 - 100종목',
        '3. 프로 투자자식 장기 베팅 - 100종목',
        '4. 공격적 성장 추구형 매니저 - 100종목',
        '5. 고변동성 장기 수익 포커스 - 100종목',
        '6. 리스크 감내 기반 초장기 성장 전략형 - 100종목',
        '7. 올해 안에 수익 실현 가능한 연말 유망종목 모음 그룹형 - 100종목',
        '8. 전문적으로 투자하고 있는 리스크 장기 감수형 - 100종목',
        '9. 최소두자 - 100종목',
        '10. 전문적으로 투자하고 있는 리스크 장기 감수형의 텍스트가 최대로 길어질 경우 대비하는 - 100종목'
      ],
      selectedPullLabel: '1. 기본 종목 풀 - 0종목'
    }
  },
  methods: {
    handlePullChange(label) {
      this.selectedPullLabel = label
    },
    handleModalClick(event) {
      // 1. 클릭된 요소 중 가장 가까운 버튼 찾기
      const button = event.target.closest('button')
      if (!button) {
        return
      }

      let component = null
      let mode = ''

      // 2. 버튼 클래스에 따라 컴포넌트 및 모드 설정
      if (button.classList.contains('btnPullAdd')) {
        component = PullModal
        mode = 'pullAdd'
      } else if (button.classList.contains('btnPullDlt')) {
        component = PullModal
        mode = 'pullDlt'
      } else if (button.classList.contains('btnPullMdf')) {
        // 관리 버튼은 ManageModal 연결
        component = PullModal
        mode = 'pullMdf'
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
.stockRD {
  @apply flex w-full justify-between items-center;
}
.ch-item {
  @apply flex w-[1084px] items-center gap-4;
}
.ch-item .dropdown_w {
  @apply w-[990px] p-[12px_10px_12px_20px];
}
.ch-item .dropdown_w button {
  @apply text-[19px] text-[#141414];
}
.ch-item .dropdown_w::v-deep ul li {
  @apply h-10 leading-10 px-2.5;
}
.ch-item .btngroup {
  @apply flex gap-4 items-center;
}
.ch-item .btngroup button {
  @apply text-[16px] w-fit;
}
</style>
