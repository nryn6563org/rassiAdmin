<template>
  <div id="signal">
    <div class="suggestion">
      <section>
        <strong>종목추천 발생 내역 (최근 10개)</strong>

        <div class="signalList">
          <div class="signalbox" v-for="(signal, signalIndex) in signals" :key="signalIndex">
            <div class="top">
              <div class="signal" v-html="signal.signal"></div>
              <div class="price">
                <span>{{ signal.buyPrice }}</span>
                <span>&nbsp;/ {{ signal.sellPrice }}</span>
                <span class="dn">&nbsp;({{ signal.rate }})</span>
              </div>
            </div>
            <div class="info">
              <dl>
                <dt>실시간 매수 :&nbsp;</dt>
                <dd>{{ signal.buyCont }}</dd>
              </dl>
            </div>
            <div class="date">
              <span>{{ signal.date }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="modal-footer">
      <button class="btn-large" @click="handleConfirm">
        <span>닫기</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signals: [
        {
          signal: '<span class="signalBullet sgl001">매수</span>',
          buyPrice: '527,500원',
          sellPrice: '2,627,334원',
          rate: '-114.33%',
          buyCont: '손절 범위는 이 정도 아래일 경우 종목 선별에 의문을 가지게 되지 않을까요.',
          date: '2026.11.27 15:21'
        },
        {
          signal: '<span class="signalBullet sgl002">매도</span>',
          buyPrice: '527,500원',
          sellPrice: '2,627,334원',
          rate: '-114.33%',
          buyCont: '손절 범위는 이 정도 아래일 경우 종목 선별에 의문을 가지게 되지 않을까요.',
          date: '2026.11.27 15:21'
        },
        {
          signal: '<span class="signalBullet sgl001">매수</span>',
          buyPrice: '527,500원',
          sellPrice: '2,627,334원',
          rate: '-114.33%',
          buyCont: '손절 범위는 이 정도 아래일 경우 종목 선별에 의문을 가지게 되지 않을까요.',
          date: '2026.11.27 15:21'
        },
        {
          signal: '<span class="signalBullet sgl002">매도</span>',
          buyPrice: '527,500원',
          sellPrice: '2,627,334원',
          rate: '-114.33%',
          buyCont: '손절 범위는 이 정도 아래일 경우 종목 선별에 의문을 가지게 되지 않을까요.',
          date: '2026.11.27 15:21'
        },
        {
          signal: '<span class="signalBullet sgl001">매수</span>',
          buyPrice: '527,500원',
          sellPrice: '2,627,334원',
          rate: '-114.33%',
          buyCont: '손절 범위는 이 정도 아래일 경우 종목 선별에 의문을 가지게 되지 않을까요.',
          date: '2026.11.27 15:21'
        },
        {
          signal: '<span class="signalBullet sgl002">매도</span>',
          buyPrice: '527,500원',
          sellPrice: '2,627,334원',
          rate: '-114.33%',
          buyCont: '손절 범위는 이 정도 아래일 경우 종목 선별에 의문을 가지게 되지 않을까요.',
          date: '2026.11.27 15:21'
        },
        {
          signal: '<span class="signalBullet sgl001">매수</span>',
          buyPrice: '527,500원',
          sellPrice: '2,627,334원',
          rate: '-114.33%',
          buyCont: '손절 범위는 이 정도 아래일 경우 종목 선별에 의문을 가지게 되지 않을까요.',
          date: '2026.11.27 15:21'
        },
        {
          signal: '<span class="signalBullet sgl002">매도</span>',
          buyPrice: '527,500원',
          sellPrice: '2,627,334원',
          rate: '-114.33%',
          buyCont: '손절 범위는 이 정도 아래일 경우 종목 선별에 의문을 가지게 되지 않을까요.',
          date: '2026.11.27 15:21'
        }
      ]
    }
  },
  methods: {
    handleClose() {
      this.$nuxt.$emit('close-global-modal')
    },
    handleConfirm() {
      console.log('예약 취소 로직 수행')
      this.handleClose()
    }
  }
}
</script>

<style scoped>
.suggestion {
  @apply mt-0;
}
.signalList {
  @apply flex flex-col w-full gap-4 mt-2;
}
.signalbox {
  @apply relative w-full p-2.5 bg-[#F9FAFB] rounded-[6px] flex flex-col gap-2.5;
}
.signalbox .top{
  @apply flex items-center w-full gap-2.5
}
.signalbox .top .signal{
  @apply w-fit
}
.signalbox .top .price{
  @apply flex items-center
}
.signalbox .top .price span{
  @apply text-[20px] text-[#111]
}
.signalbox .date{
  @apply absolute top-5 right-2.5 text-[16px] text-[#5E6367] h-4 leading-4
}
.signalbox .info dl{
  @apply flex flex-col w-full gap-[5px]
}
.signalbox .info dl dt{
  @apply text-[18px] text-[#141414]
}
.signalbox .info dl dd{
  @apply text-[18px] text-[#5E6367]
}
#signal .modal-footer button{
  @apply w-full bg-[#848A96] text-white
}
</style>
