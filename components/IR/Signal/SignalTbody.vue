<template>
  <tbody>
    <tr v-for="(tbodyList, tbodyListIndex) in tbodyLists" :key="tbodyListIndex">
      <!-- check -->
      <td>
        <label :for="`check_${tbodyListIndex}`" class="custom-checkbox-label">
          <input type="checkbox" v-model="tbodyList.checked" :id="`check_${tbodyListIndex}`" class="custom-checkbox-input" />
          <span class="custom-checkbox-box"></span>
        </label>
      </td>
      <!-- no -->
      <td>
        <div class="listNumber">
          <span>{{ tbodyList.ListNumber }}</span>
        </div>
      </td>
      <!-- 종목명 -->
      <td>
        <div class="itemName" :title="tbodyList.ItmeName">
          <span class="name">
            {{ tbodyList.ItmeName }}
          </span>
          <span class="number"> ({{ tbodyList.ItemNumber }}) </span>
        </div>
      </td>
      <!-- 신호상태 -->
      <td>
        <div class="myInfo">
          <div class="signal" v-html="tbodyList.Signal"></div>
          <div class="priceInfo">
            <div class="volatility">
              <span class="price"> {{ tbodyList.MyPrice }}원 </span>
              <span :class="['per', getSignalClass(tbodyList.Signal)]">&nbsp;({{ tbodyList.MyPer }}) </span>
            </div>
            <div class="date">
              <span>
                {{ tbodyList.MyDate }}
              </span>
            </div>
          </div>
        </div>
      </td>
      <!-- 활성/비활성 일시 -->
      <td>
        <div class="ad_date">
          <span>{{ tbodyList.AdDate }}</span>
        </div>
      </td>
      <!-- 종목추천발생 -->
      <td>
        <div class="recommendation">
          <span>{{ tbodyList.Recommendation }}</span>
          <a href="#">조회</a>
        </div>
      </td>
      <!-- 등록일시 -->
      <td>
        <div>
          <span>{{ tbodyList.Registration }}</span>
        </div>
      </td>
      <!-- 추천활성 -->
      <td>
        <div class="checkingActive">
          <label :for="`active_${tbodyListIndex}`">
            <input type="checkbox" name="" :id="`active_${tbodyListIndex}`" class="activeChecking" @change="handleModalClick($event)" />
            <span class="custom-checkingActive"></span>
          </label>
        </div>
      </td>
      <!-- 코맨트 -->
      <td>
        <div class="manage">
          <button @click="handleModalClick($event)" class="btn012 btn-mid btnMng3">
            <span>관리</span>
          </button>
        </div>
      </td>
      <!-- 삭제 -->
      <td>
        <div class="delete">
          <button @click="handleModalClick($event)" class="btn006 btn-mid btnDlt">
            <span>삭제</span>
          </button>
        </div>
      </td>
    </tr>
    <tr v-if="tbodyLists.length === 0">
      <td colspan="11" class="empty">
        <span>등록된 종목이 없습니다.</span>
      </td>
    </tr>
  </tbody>
</template>

<script>
import ManageModal from '@/components/Modal/ManageModal.vue'

export default {
  props: {
    tbodyLists: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getSignalClass(signalHtml) {
      if (!signalHtml) {
        return ''
      }
      const match = signalHtml.match(/sgl(\d{3})/)
      return match && match[1] ? `tc${match[1]}` : ''
    },

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
        if (button.classList.contains('btnMng3')) {
          // 관리 버튼은 ManageModal 연결
          component = ManageModal
          mode = 'manage3'
        } else if (button.classList.contains('btnCancel')) {
          component = ManageModal // 혹은 취소 전용 모달
          mode = 'cancel'
        } else if (button.classList.contains('btnDlt')) {
          // 삭제
          component = ManageModal // 혹은 삭제 전용 모달
          mode = 'delete'
        }
      } else if (activeCheckbox) {
        component = ManageModal

        // 2. 체크 상태에 따른 모드 설정
        if (activeCheckbox.checked) {
          // 체크됨 (활성화 시도)
          mode = 'activeOn'
        } else {
          // 체크 해제됨 (비활성화 시도)
          mode = 'activeOff'
        }
        // (선택 사항) 모달에서 최종 확정하기 전까지 UI가 바뀌면 안 되는 경우:
        // activeCheckbox.checked = !activeCheckbox.checked
        // 위 코드를 넣으면 클릭 시 체크박스 UI가 즉시 변하지 않고, 모달 결과에 따라 제어할 수 있습니다.
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
td{
  @apply !h-[74px]
}
.listNumber {
  @apply text-[16px] text-[#5E6367] tracking-[130%] w-full text-center;
}
.itemName {
  @apply flex items-center pl-4 text-[16px] text-[#141414] tracking-[130%] font-medium;
}
.itemName .name {
  @apply max-w-[calc(100%-86px)] line-clamp-1;
}
.itemName .number{
  @apply text-[#5E6367]
}
td > .price {
  @apply pl-4;
}
.volatility {
  @apply flex items-center pl-4;
}
.volatility .price {
  @apply text-[#141414] pr-[3px];
}
.volatility .per {
  @apply text-[16px];
}
.myInfo {
  @apply flex items-center gap-2.5 pl-6;
}
.myInfo .volatility {
  @apply pl-0;
}
.priceInfo {
  @apply flex flex-col w-[calc(100%-58px)] gap-[3px];
}
.priceInfo .date {
  @apply text-[#5E6367];
}
.targetStop {
  @apply flex w-full justify-center text-[#5E6367];
}
.recommendation {
  @apply flex w-full justify-center items-center gap-[6px] text-[#5E6367];
}
a {
  @apply underline;
}
.manage, .delete {
  @apply flex w-full justify-center;
}
.manage button span, .delete button span {
  @apply w-[56px];
}
.registration {
  @apply flex w-full justify-center text-[#5E6367];
}
.trading {
  @apply flex w-full justify-center;
}
.cancel {
  @apply flex w-full justify-center items-center;
}
.cancel::v-deep button {
  @apply w-fit;
}
.cancel::v-deep button span {
  @apply w-[56px];
}

.hiddenTr {
  @apply absolute top-0 left-[-9999em];
}
</style>
