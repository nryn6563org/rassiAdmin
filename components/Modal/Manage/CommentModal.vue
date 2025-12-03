<template>
  <div id="comment">
    <div class="suggestion">
      <section>
        <strong>선택한 종목 코멘트 모아보기</strong>

        <div class="commentList">
          <div class="comment" v-for="(comment, commentIndex) in comments" :key="commentIndex">
            <div class="itemName">
              <span class="num">{{ commentIndex + 1 }}.</span>
              <span class="name">{{ comment.name }}</span>
              <span class="code">({{ comment.code }})</span>
            </div>

            <div class="info">
              <dl>
                <dt>
                  <span>매수 :&nbsp;</span>
                </dt>
                <dd>
                  <span>{{ comment.buy }}</span>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span>목표 :&nbsp;</span>
                </dt>
                <dd>
                  <span>{{ comment.target }}</span>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span>손절 :&nbsp;</span>
                </dt>
                <dd>
                  <span>{{ comment.stop }}</span>
                </dd>
              </dl>
            </div>
            <button class="modify">
              <span>수정</span>
            </button>
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
      // 임시 데이터 10개 생성
      comments: [
        {
          name: '삼성전자',
          code: '005930',
          buy: '반도체 업황 개선 기대감 지속, 외국인 매수세 유입',
          target: '85,000원 돌파 시 비중 축소 고려',
          stop: '69,000원 이탈 시 손절 대응'
        },
        {
          name: 'SK하이닉스',
          code: '000660',
          buy: 'HBM 시장 점유율 1위, AI 반도체 수혜주',
          target: '150,000원',
          stop: '110,000원'
        },
        {
          name: 'NAVER',
          code: '035420',
          buy: '광고 매출 회복 및 AI 신사업 기대감',
          target: '240,000원',
          stop: '180,000원'
        },
        {
          name: 'LG에너지솔루션',
          code: '373220',
          buy: '북미 공장 가동률 상승 예상, 저점 매수 유효',
          target: '450,000원',
          stop: '360,000원'
        },
        {
          name: '현대차',
          code: '005380',
          buy: '역대 최대 실적 달성, 저PBR 밸류업 프로그램 수혜',
          target: '300,000원',
          stop: '220,000원'
        },
        {
          name: '카카오',
          code: '035720',
          buy: '낙폭 과대 인식에 따른 기술적 반등 기대',
          target: '65,000원',
          stop: '48,000원'
        },
        {
          name: 'POSCO홀딩스',
          code: '005490',
          buy: '철강 가격 인상 및 리튬 사업 가치 부각',
          target: '550,000원',
          stop: '400,000원'
        },
        {
          name: '셀트리온',
          code: '068270',
          buy: '합병 시너지 및 짐펜트라 미국 매출 본격화',
          target: '210,000원',
          stop: '160,000원'
        },
        {
          name: '에코프로',
          code: '086520',
          buy: '2차전지 소재 수요 둔화 우려 있으나 기술적 반등 구간',
          target: '120,000원',
          stop: '90,000원'
        },
        {
          name: '두산로보틱스',
          code: '454910',
          buy: '협동로봇 시장 성장성 유효, 연기금 매수세 지속',
          target: '95,000원',
          stop: '70,000원'
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
.commentList {
  @apply flex flex-col w-full gap-4 mt-2;
}
.comment {
  @apply relative w-full p-2.5 bg-[#F9FAFB] rounded-[6px] flex flex-col gap-2.5;
}
.comment .itemName {
  @apply flex items-center gap-1;
}
.comment .itemName span {
  @apply text-[20px] text-[#141414];
}
.comment .itemName .num {
  @apply text-[#447AEC] font-bold;
}
.comment .info {
  @apply flex flex-col w-full gap-y-[2px];
}
.comment .info dl {
  @apply flex flex-wrap w-full;
}
.comment .info dl dt {
  @apply w-fit text-[18px] text-[#141414] h-6 leading-6 shrink-0;
}
.comment .info dl dd {
  @apply grow basis-0;
}
.comment button {
  @apply absolute top-2.5 right-2.5 h-[25px] leading-[25px] cursor-pointer;
}
.comment button span {
  @apply text-[16px] text-[#5E6367] underline;
}
#comment .modal-footer button{
  @apply w-full bg-[#848A96] text-white
}
</style>
