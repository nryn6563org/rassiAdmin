<template>
  <div class="tableInfo">
    <div class="lft">
      <div class="totalScore">
        <span
          >총&nbsp;<em>{{ total }}</em
          >&nbsp;건</span
        >
      </div>
      <span></span>
      <!--  -->
      <div class="btn-group">
        <button class="round btn006 btn-mid btnDlt" @click="handleModalClick($event)">
          <span>삭제하기</span>
        </button>
      </div>
    </div>
    <!-- ltf -->

    <div class="rit">
      <button class="btn-mid btn007 round" @click="gotoWritePage">
        <span>글쓰기</span>
      </button>
    </div>
    <!-- rit -->
  </div>
</template>
<script>
import ManageModal from '@/components/Modal/ManageModal.vue'

export default {
  data() {
    return {
      total: '100',
      updateDate: '2025.11.06 15:20',
      viewArray: ['20개씩 보기', '30개씩 보기', '40개씩 보기', '50개씩 보기', '100개씩 보기'],
      selectedViewArray: '20개씩 보기' // 초기 선택 값 없음
    }
  },
  methods: {
    handleChange(label) {
      this.selectedViewArray = label
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
      if (button.classList.contains('btnDlt')) {
        component = ManageModal
        mode = 'delete'
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
    },
    gotoWritePage() {
      this.$router.push('/PM/StrategyWrite')
    }
  }
}
</script>

<style scoped>
.tableInfo {
  @apply flex w-full justify-between items-center;
}
.tableInfo .lft {
  @apply flex items-center gap-4;
}
.tableInfo .lft .totalScore {
  @apply text-[20px] text-[#141414];
}
.tableInfo .lft .totalScore span em {
  @apply text-[#0263E8] font-bold;
}
.tableInfo .lft > span {
  @apply w-[1px] h-4 bg-[#484F55];
}
.tableInfo .lft .btn-group {
  @apply flex items-center gap-2.5;
}
.tableInfo .lft .btn-group button{
  @apply w-[103px]
}

.tableInfo .rit {
  @apply flex items-center gap-2.5;
}
.tableInfo .rit button{
  @apply w-[103px]
}
</style>
