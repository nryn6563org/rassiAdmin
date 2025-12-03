<template>
  <div id="RsvRegistration">
    <div class="suggestion">
      <section>
        <strong>종목 선택</strong>
        <div class="itemSearch">
          <label for="itemSearchInput">
            <input
              type="text"
              placeholder="종목명을 검색해 주세요."
              id="itemSearchInput"
              class="custom-text-input"
              v-model="searchQuery"
              @keyup.enter="searchItem"
            />
            <button type="button" @click="searchItem">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="26" height="26" transform="matrix(-1 0 0 1 26 0)" fill="url(#pattern0_779_12320)" />
                <defs>
                  <pattern id="pattern0_779_12320" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_779_12320" transform="scale(0.03125)" />
                  </pattern>
                  <image id="image0_779_12320" width="32" height="32" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABy0lEQVR4nO1WS0oDQRAdlLjxs1U8gnoH9QL+MOoJRqz3eqKGrHsn4jH8nscPGn+QA7iRZKEbIxUrMGYRnR41CHnQhGH61Xupqq7pKOrjv8J7PyQiawBOAVQBNGxVSZ7oO93zK+IkV0g+kmx2WwAeACz/mLD3fgDAQUrknGTinJsql8vDukRkGkCJ5EVq375ycxuAiQN4IbnZLai+E5Et29sy8RNpb2pA59xsBtNzKRNLQeLe+6FUzTez8kmKce/jOC5kNiAia+2ah9SyWCwOArjUGM651cwGSJ5Z+l0UCADbFuM4xMCtuZ8KNaCnwwxUQwzUlSwiI6EGKpXKqJWxnpkMoJHXgHNuzDLwnJlMOwF5SpAkyUxwCQCcGrkUagDArpXgMIS8YeSL0GNI8ir4GMZxXCBZsz7YysrnBzSDd0GDSCEii+1RrOM1+iacc/MAXkm+AViIQiEiEySfUh8j0dR+kXaauJZvL5c4gBsL1DJhRi51wumQ0SOqy7p9p11z/ecqHvw5lpS4/uqzlaP2jQvJXe60o0O8ozHX9fplN5+GTcxrAEfa7cENp0iSZLydRrvzTUZ/haQvzh6Id0ysTw33pwCAnon3EfUA70nzm/MsCZH5AAAAAElFTkSuQmCC" />
                </defs>
              </svg>
            </button>
          </label>
        </div>

        <div class="txt">
          <div>
            <span>현재가 (등락률) :</span>
            <span class="empty" v-if="!selectedItem">상단 검색창에서 종목을 선택해 주세요.</span>

            <div class="itemPrice" v-else>
              <span class="prc">{{ Number(selectedItem.price).toLocaleString() }}</span>
              <span class="per" :class="{ dn: selectedItem.rate < 0 }">({{ selectedItem.rate }}%)</span>
              <span class="date"> {{ currentTime }} </span>
              <button class="reset" @click="selectedItem = null">
                <span>초기화</span>
              </button>
            </div>
          </div>
          <span>※ 등록 시 현재가는 자동 업데이트 됩니다.</span>
        </div>
      </section>

      <section>
        <strong><em>*</em>추천 매수가 예약 설정</strong>

        <div class="cho_pp">
          <div class="check">
            <label for="checkBuyRsv" class="custom-checkbox-label">
              <input type="checkbox" id="checkBuyRsv" class="custom-checkbox-input" v-model="isBuyRsvMode" />
              <span class="custom-checkbox-box"></span>
              <span class="custom-checkbox-txt">상승 구간에 구매하기</span>
            </label>
          </div>

          <div class="cho_radio">
            <span>입력 기준 :</span>
            <label for="rdoBuy01" class="custom-radio-label">
              <input type="radio" name="buyStandard" id="rdoBuy01" class="custom-radio-input" value="price" v-model="buyStandard" :disabled="!isBuyRsvMode" />
              <span class="custom-radio-txt">금액</span>
            </label>

            <label for="rdoBuy02" class="custom-radio-label">
              <input type="radio" name="buyStandard" id="rdoBuy02" class="custom-radio-input" value="percent" v-model="buyStandard" :disabled="!isBuyRsvMode" />
              <span class="custom-radio-txt">수익률</span>
            </label>
          </div>

          <div class="cho_input">
            <div>
              <input
                type="text"
                placeholder="매수 희망가 입력"
                class="custom-text-input"
                style="width: 233px"
                v-model="rsvPrice"
                :disabled="!isBuyRsvMode || buyStandard === 'percent'"
              />
              <label>원</label>

              <input
                type="text"
                placeholder="+ 00.00"
                class="custom-text-input"
                style="width: 90px"
                v-model="rsvRate"
                :disabled="!isBuyRsvMode || buyStandard === 'price'"
              />
              <label>%</label>
            </div>
          </div>

          <div class="txt">
            <span>※ 등록 시 현재가가 추천 매수가보다 낮을 경우 더 낮은 금액인 현재가로 추천이 됩니다.</span>
            <span>※ 상승 구간에 구매하기 체크 시 현재가보다 더 높은 가격에 등록이 가능합니다.</span>
          </div>
        </div>
      </section>

      <section>
        <strong><em>*</em>매수 예약 유효기간 설정</strong>
        <div class="dateSetting">
          <DateInput v-model="startDate" />
          <span>~</span>
          <DateInput v-model="endDate" />
          <span class="resultDate">
            <em>{{ calculatedDays }}</em
            >일 (이후 자동 만료)
          </span>
        </div>
      </section>

      <section>
        <strong>목표가 / 손절가 설정 <span>(선택사항)</span></strong>

        <div class="cho_pp">
          <div class="check">
            <label for="checkTargetStop" class="custom-checkbox-label">
              <input type="checkbox" id="checkTargetStop" class="custom-checkbox-input" v-model="isTargetStopMode" />
              <span class="custom-checkbox-box"></span>
              <span class="custom-checkbox-txt">자동 매도 알림 설정</span>
            </label>
          </div>

          <div class="cho_radio">
            <span>입력 기준 :</span>
            <label for="rdoTarget01" class="custom-radio-label">
              <input type="radio" name="targetStandard" id="rdoTarget01" class="custom-radio-input" value="price" v-model="targetStandard" :disabled="!isTargetStopMode" />
              <span class="custom-radio-txt">금액</span>
            </label>

            <label for="rdoTarget02" class="custom-radio-label">
              <input type="radio" name="targetStandard" id="rdoTarget02" class="custom-radio-input" value="percent" v-model="targetStandard" :disabled="!isTargetStopMode" />
              <span class="custom-radio-txt">수익률</span>
            </label>
          </div>

          <div class="cho_input">
            <div>
              <input
                type="text"
                placeholder="목표가 입력"
                class="custom-text-input"
                style="width: 233px"
                v-model="targetPrice"
                :disabled="!isTargetStopMode || targetStandard === 'percent'"
              />
              <label>원</label>

              <input
                type="text"
                placeholder="+ 00.00"
                class="custom-text-input"
                style="width: 90px"
                v-model="targetRate"
                :disabled="!isTargetStopMode || targetStandard === 'price'"
              />
              <label>%</label>

              <p class="caution">*현재가보다 낮거나 동일하게 설정할 수 없습니다.</p>
            </div>

            <div>
              <input
                type="text"
                placeholder="손절가 입력"
                class="custom-text-input"
                style="width: 233px"
                v-model="stopLossPrice"
                :disabled="!isTargetStopMode || targetStandard === 'percent'"
              />
              <label>원</label>

              <input
                type="text"
                placeholder="- 00.00"
                class="custom-text-input"
                style="width: 90px"
                v-model="stopLossRate"
                :disabled="!isTargetStopMode || targetStandard === 'price'"
              />
              <label>%</label>

              <p class="caution">*현재가보다 낮거나 동일하게 설정할 수 없습니다.</p>
            </div>
          </div>

          <div class="txt">
            <span>※ 시세가 급변하여 설정하신 목표가 / 손절가의 금액이 현재가와 중복된다면 입력 수정이 필요합니다.</span>
          </div>
        </div>
      </section>

      <section>
        <strong>한 줄 추천 사유 <span>(선택사항)</span></strong>

        <div class="check_comment">
          <div>
            <div class="check">
              <label for="checkBuyComment" class="custom-checkbox-label">
                <input type="checkbox" id="checkBuyComment" class="custom-checkbox-input" v-model="useBuyComment" />
                <span class="custom-checkbox-box"></span>
                <span class="custom-checkbox-txt">매수 코멘트 :</span>
              </label>
            </div>
            <div class="comment">
              <input
                type="text"
                class="custom-text-input"
                placeholder="매수 알림과 제시될 한 줄 코멘트를 작성해 주세요."
                style="width: 708px"
                v-model="buyCommentText"
                :disabled="!useBuyComment"
              />
              <p class="caution">*최소 5자, 최대 50자 범위로 입력해 주세요.</p>
            </div>
          </div>

          <div>
            <div class="check">
              <label for="checkTargetComment" class="custom-checkbox-label">
                <input
                  type="checkbox"
                  id="checkTargetComment"
                  class="custom-checkbox-input"
                  v-model="useTargetComment"
                  :disabled="!isTargetStopMode"
                />
                <span class="custom-checkbox-box"></span>
                <span class="custom-checkbox-txt">목표가 매도 코멘트 :</span>
              </label>
            </div>
            <div class="comment">
              <input
                type="text"
                class="custom-text-input"
                placeholder="목표가 매도 알림과 제시될 한 줄 코멘트를 작성해 주세요."
                style="width: 708px"
                v-model="targetCommentText"
                :disabled="!useTargetComment || !isTargetStopMode"
              />
              <p class="caution" v-if="!isTargetStopMode">*목표가 / 손절가 설정 체크박스 선택 후 금액을 먼저 입력해 주세요.</p>
              <p class="caution" v-else>*최소 5자, 최대 50자 범위로 입력해 주세요.</p>
            </div>
          </div>

          <div>
            <div class="check">
              <label for="checkStopComment" class="custom-checkbox-label">
                <input
                  type="checkbox"
                  id="checkStopComment"
                  class="custom-checkbox-input"
                  v-model="useStopComment"
                  :disabled="!isTargetStopMode"
                />
                <span class="custom-checkbox-box"></span>
                <span class="custom-checkbox-txt">손절가 매도 코멘트 :</span>
              </label>
            </div>
            <div class="comment">
              <input
                type="text"
                class="custom-text-input"
                placeholder="손절가 매도 알림과 제시될 한 줄 코멘트를 작성해 주세요."
                style="width: 708px"
                v-model="stopCommentText"
                :disabled="!useStopComment || !isTargetStopMode"
              />
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="modal-footer">
      <div class="button-group">
        <button class="btn-large btn009" @click="handleClose">
          <span>닫기</span>
        </button>

        <button class="btn-large btn005" @click="handleConfirm">
          <span>매수 추천 예약</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DateInput from '@/components/InputGroup/DateInput.vue'

export default {
  components: {
    DateInput
  },
  data() {
    return {
      // 1. 종목 검색 관련
      searchQuery: '',
      selectedItem: null,
      currentTime: new Date().toLocaleString(),

      // 2. 추천 매수가 예약 설정
      isBuyRsvMode: false,
      buyStandard: 'price',
      rsvPrice: '', // 매수 예약 금액
      rsvRate: '', // 매수 예약 수익률

      // 3. 날짜 관련
      startDate: '', // 'YYYY-MM-DD' 형태 가정
      endDate: '',

      // 4. 목표가/손절가 설정 (통합 모드)
      isTargetStopMode: false,
      targetStandard: 'price',
      targetPrice: '', // 목표가 금액
      targetRate: '', // 목표 수익률
      stopLossPrice: '', // 손절가 금액
      stopLossRate: '', // 손절 수익률

      // 5. 코멘트 관련 체크박스
      useBuyComment: true,
      useTargetComment: true,
      useStopComment: false,

      // 6. 코멘트 내용
      buyCommentText: '',
      targetCommentText: '',
      stopCommentText: ''
    }
  },
  computed: {
    // 날짜 차이 자동 계산
    calculatedDays() {
      if (!this.startDate || !this.endDate) { return 0 }

      const start = new Date(this.startDate)
      const end = new Date(this.endDate)

      // 유효하지 않은 날짜일 경우 처리
      if (isNaN(start) || isNaN(end)) { return 0 }

      const diffTime = end.getTime() - start.getTime()
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

      return diffDays > 0 ? diffDays : 0
    }
  },
  watch: {
    // 매도 설정이 꺼지면 하위 체크박스도 로직상 초기화 가능 (선택사항)
    isTargetStopMode(val) {
      if (!val) {
        this.useTargetComment = false
        this.useStopComment = false
        // 값 초기화가 필요하다면 여기서 수행
        // this.targetPrice = ''; ...
      }
    }
  },
  methods: {
    // 종목 검색 (Mock)
    searchItem() {
      if (!this.searchQuery) {
        alert('종목명을 입력해 주세요.')
        return
      }
      console.log('Searching for:', this.searchQuery)
      // API 호출 대용 더미 데이터
      this.selectedItem = {
        code: '035420',
        name: 'NAVER',
        price: 215000,
        rate: -0.5
      }
    },

    handleClose() {
      this.$nuxt.$emit('close-global-modal')
    },

    handleConfirm() {
      // 1. 유효성 검사
      if (!this.selectedItem) {
        alert('종목을 선택해 주세요.')
        return
      }

      // 예약 매수 필수값 체크
      if (this.isBuyRsvMode) {
        if (this.buyStandard === 'price' && !this.rsvPrice) {
          alert('매수 예약 금액을 입력해 주세요.')
          return
        }
        if (this.buyStandard === 'percent' && !this.rsvRate) {
          alert('매수 예약 수익률을 입력해 주세요.')
          return
        }
      }

      // 날짜 체크
      if (this.calculatedDays <= 0) {
        alert('유효기간 설정을 확인해 주세요. (종료일이 시작일보다 뒤여야 합니다)')
        return
      }

      // 목표가/손절가 체크
      if (this.isTargetStopMode) {
        // 금액 기준일 때 둘 중 하나라도 비어있으면 경고 (기획에 따라 다를 수 있음)
        if (this.targetStandard === 'price' && (!this.targetPrice || !this.stopLossPrice)) {
          alert('목표가와 손절가 금액을 모두 입력해 주세요.')
          return
        }
      }

      // 2. 데이터 페이로드 구성
      const payload = {
        item: this.selectedItem,
        reservation: {
          active: this.isBuyRsvMode,
          type: this.buyStandard,
          price: this.rsvPrice,
          rate: this.rsvRate,
          period: {
            start: this.startDate,
            end: this.endDate,
            days: this.calculatedDays
          }
        },
        targetStop: {
          active: this.isTargetStopMode,
          type: this.targetStandard,
          targetPrice: this.targetPrice,
          targetRate: this.targetRate,
          stopPrice: this.stopLossPrice,
          stopRate: this.stopLossRate
        },
        comments: {
          buy: this.useBuyComment ? this.buyCommentText : '',
          target: this.useTargetComment ? this.targetCommentText : '',
          stop: this.useStopComment ? this.stopCommentText : ''
        }
      }

      console.log('예약 매수 신청 데이터:', payload)
      // this.$axios.post('/api/reserve', payload)...

      this.handleClose()
    }
  }
}
</script>