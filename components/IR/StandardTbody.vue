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
          <span class="number"> ({{ tbodyList.ItemNumber }}) </span>
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
            >({{ tbodyList.CurrentPer }})</span
          >
        </div>
      </td>
      <td>
        <div class="myInfo">
          <div class="signal" v-html="tbodyList.Signal"></div>
          <div class="priceInfo">
            <div class="volatility">
              <span class="price">
                {{ tbodyList.MyPrice }}
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
          <a href="#">조회</a>
        </div>
      </td>
      <td>
        <div class="registration">
          <span>{{ tbodyList.Registration }}</span>
        </div>
      </td>
      <td>
        <div class="trading" v-html="tbodyList.StockTrading" @click="handleTradingClick($event)"></div>
      </td>
      <td>
        <div class="manage">
          <button @click="showModal('StandardModal011')" class="btn012 btn-mid">
            <span>관리</span>
          </button>
        </div>
      </td>
      <td>
        <div class="cancel" v-html="tbodyList.StockCancel"></div>
      </td>
    </tr>
    <tr>
      <td colspan="11" class="empty">
        <span>등록된 종목이 없습니다.</span>
      </td>
    </tr>
  </tbody>
</template>

<script>
import StandardModal011 from '~/components/Modal/StandardModal011.vue'

export default {
  props: {
    tbodyLists: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    /**
     * @description HTML 문자열에서 sgl00N 클래스를 추출하여 tc00N 클래스로 반환
     * @param {string} signalHtml v-html로 들어오는 Signal 문자열 (<span class="sgl00N">...</span>)
     * @returns {string} tc00N 클래스 (예: 'tc001', 'tc005')
     */
    getSignalClass(signalHtml) {
      if (!signalHtml) {
        return ''
      }
      // sgl 뒤에 숫자 3자리가 오는 패턴을 찾습니다. (예: sgl001 -> 001 캡처)
      const match = signalHtml.match(/sgl(\d{3})/)
      if (match && match[1]) {
        // 캡처된 숫자를 이용해 tc 클래스 조합 반환
        return `tc${match[1]}`
      }
      return ''
    },
    handleTradingClick(event) {
      const button = event.target.closest('button')
      if (!button) { return }
      this.showModal('StandardModal011')
    },
    showModal(type) {
      let component = null

      switch (type) {
        case 'StandardModal011':
          component = StandardModal011
          break
      }

      // [핵심] 레이아웃에 있는 전역 모달에게 '열어달라'고 요청
      if (component) {
        this.$nuxt.$emit('open-global-modal', {
          component
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
.itemName .name{
  @apply max-w-[calc(100%-86px)] line-clamp-1
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
