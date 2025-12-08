<template>
  <tbody>
    <tr v-for="(tbodyList, tbodyListIndex) in tbodyLists" :key="tbodyListIndex">
      <td>
        <label :for="`check_${tbodyListIndex}`" class="custom-checkbox-label">
          <input type="checkbox" v-model="tbodyList.checked" :id="`check_${tbodyListIndex}`" class="custom-checkbox-input" />
          <span class="custom-checkbox-box"></span>
        </label>
      </td>
      <td>
        <div class="listNumber">
          <span>{{ tbodyList.ListNumber }}</span>
        </div>
      </td>
      <td>
        <div class="itemName" :title="tbodyList.ItmeName">
          <span class="name">
            {{ tbodyList.ItmeName }}
          </span>
          <span class="number">({{ tbodyList.ItemNumber }}) </span>
        </div>
      </td>
      <td>
        <div class="volatility">
          <span class="price"> {{ tbodyList.CurrentPrice }}원 </span>
          <span
            :class="[
              'per',
              {
                up: tbodyList.CurrentPer.includes('+'),
                dn: tbodyList.CurrentPer.includes('-')
              }
            ]"
            >&nbsp;({{ tbodyList.CurrentPer }})</span
          >
        </div>
      </td>
      <td>
        <div class="myInfo">
          <div class="signal" v-html="tbodyList.Signal"></div>
          <div class="priceInfo">
            <div class="volatility">
              <span class="price">
                {{ tbodyList.MyPrice }}원
              </span>
              <span :class="['per', getSignalClass(tbodyList.Signal)]"> ({{ tbodyList.MyPer }}) </span>
            </div>
            <div class="date">
              <span>
                {{ tbodyList.MyDate }}
              </span>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div class="targetStop">
          <span>{{ tbodyList.TargetPrice }}원</span>
          &nbsp;/&nbsp;
          <span>{{ tbodyList.StopPrice }}원</span>
        </div>
      </td>
      <td>
        <div class="recommendation">
          <span>{{ tbodyList.Recommendation }}</span>
          <button class="signal" @click="handleModalClick($event)">조회</button>
        </div>
      </td>
      <td>
        <div class="registration">
          <span>{{ tbodyList.Registration }}</span>
        </div>
      </td>
      <td>
        <div class="trading" v-html="tbodyList.StockTrading" @click="handleModalClick($event)"></div>
      </td>
      <td>
        <div class="manage">
          <button @click="handleModalClick($event)" class="btn012 btn-mid btnMng">
            <span>관리</span>
          </button>
        </div>
      </td>
      <td>
        <div class="cancel" v-html="tbodyList.StockCancel" @click="handleModalClick($event)"></div>
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
import TradingModal from '@/components/Modal/TradingModal.vue'
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
      if (!button) {
        return
      }

      let component = null
      let mode = ''

      // 2. 버튼 클래스에 따라 컴포넌트 및 모드 설정
      if (button.classList.contains('btnBuy')) {
        component = TradingModal
        mode = 'buy'
      } else if (button.classList.contains('btnSell')) {
        component = TradingModal
        mode = 'sell'
      } else if (button.classList.contains('btnMng')) {
        // 관리 버튼은 ManageModal 연결
        component = ManageModal
      } else if (button.classList.contains('btnCancel')) {
        component = ManageModal // 혹은 취소 전용 모달
        mode = 'cancel'
      } else if (button.classList.contains('btnDlt')) {
        // 삭제
        component = ManageModal // 혹은 삭제 전용 모달
        mode = 'delete'
      } else if (button.classList.contains('signal')) {
        component = ManageModal
        mode = 'signal'
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
.listNumber {
  @apply text-[16px] text-[#5E6367] tracking-[130%] w-full text-center;
}
.itemName {
  @apply flex items-center pl-4 text-[16px] text-[#141414] tracking-[130%] font-medium;
}
.itemName .name {
  @apply max-w-[calc(100%-86px)] line-clamp-1;
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
.recommendation button {
  @apply underline;
}
.manage {
  @apply flex w-full justify-center;
}
.manage button span {
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