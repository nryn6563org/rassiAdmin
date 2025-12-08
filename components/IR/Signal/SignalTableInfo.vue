<template>
  <div class="tableInfo">
    <div class="lft">
      <div class="totalScore">
        <span>총&nbsp;<em>{{ total }}</em>&nbsp;건</span>
      </div>
      <span></span>
      <!--  -->
      <div class="btn-group">
        <button class="round btn003 btn-mid stockActiveOn" @click="handleModalClick($event)">
          <span>추천 활성화</span>
        </button>
        <button class="round btn003 btn-mid stockActiveOff" @click="handleModalClick($event)">
          <span>추천 비활성</span>
        </button>
        <button class="round btn006 btn-mid stockDlt" @click="handleModalClick($event)">
          <span>삭제하기</span>
        </button>
        <span></span>
        <button class="round btn003 btn-mid stockComment" @click="handleModalClick($event)">
          <span>코멘트 모아보기</span>
        </button>
      </div>
    </div>
    <!-- ltf -->

    <div class="rit">
      <div class="viewArray">
        <DropDown :items="viewArray" :initial-label="selectedViewArray" placeholder="" @change="handleChange" />
      </div>
      <!-- 보기 개수 정렬 -->

      <button class="btn-mid btn013 round stockAdd" @click="handleModalClick($event)">
        <span>종목 등록</span>
      </button>
    </div>
    <!-- rit -->
  </div>
</template>
<script>
import ManageModal from '@/components/Modal/ManageModal.vue'
import DropDown from '@/components/InputGroup/DropDown.vue'

export default {
  components: {
    DropDown
  },
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
      if (button.classList.contains('stockActiveOn')) {
        component = ManageModal
        mode = 'activeOn'
      } else if (button.classList.contains('stockActiveOff')) {
        component = ManageModal
        mode = 'activeOff'
      } else if (button.classList.contains('stockDlt')) {
        component = ManageModal
        mode = 'delete'
      } else if (button.classList.contains('stockComment')) {
        component = ManageModal
        mode = 'comment'
      } else if (button.classList.contains('stockAdd')) {
        component = ManageModal
        mode = 'addItem'
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
.tableInfo {
  @apply flex w-full justify-between items-center;
}
.tableInfo .lft {
  @apply flex items-center gap-4;
}
.tableInfo .lft .totalScore{
  @apply text-[20px] text-[#141414]
}
.tableInfo .lft .totalScore span em{
  @apply text-[#0263E8] font-bold
}
.tableInfo .lft > span {
  @apply w-[1px] h-4 bg-[#484F55];
}
.tableInfo .lft .btn-group {
  @apply flex items-center gap-2.5;
}
.tableInfo .lft .btn-group > span{
  @apply w-[1px] h-4 bg-[#484F55]
}

.tableInfo .rit {
  @apply flex items-center gap-2.5;
}
.tableInfo .rit .update{
  @apply flex items-center gap-[2px] rounded-[6px] bg-[#F9FAFB] px-2 h-[42px]
}
.tableInfo .rit .update span{
  @apply text-[16px] text-[#5E6367]
}
.tableInfo .rit .date{
  @apply mr-2.5 text-[16px] text-[#5E6367]
}
.tableInfo .rit .viewArray .dropdown_w {
  @apply w-[133px] p-2.5 mr-2.5;
}
.tableInfo .rit .viewArray .dropdown_w::v-deep button {
  @apply text-[16px] text-[#5E6367];
}
.tableInfo .rit .viewArray .dropdown_w::v-deep ul {
  @apply w-[133px] left-auto right-0;
}
.tableInfo .rit .viewArray .dropdown_w::v-deep ul li {
  @apply h-8 leading-8 px-2.5;
}
</style>
