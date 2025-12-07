<template>
  <div id="AlarmSubmit">
    <div class="suggestion">
      <section>
        <strong>종목 선택</strong>
        <div class="itemSearch">
          <label for="itemSearchInput">
            <input type="text" placeholder="종목명을 검색해 주세요." id="itemSearchInput" class="custom-text-input" v-model="searchQuery" @keyup.enter="searchItem" />
            <button type="button" @click="searchItem">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="26" height="26" transform="matrix(-1 0 0 1 26 0)" fill="url(#pattern0_779_12320)" />
                <defs>
                  <pattern id="pattern0_779_12320" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_779_12320" transform="scale(0.03125)" />
                  </pattern>
                  <image
                    id="image0_779_12320"
                    width="32"
                    height="32"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABy0lEQVR4nO1WS0oDQRAdlLjxs1U8gnoH9QL+MOoJRqz3eqKGrHsn4jH8nscPGn+QA7iRZKEbIxUrMGYRnR41CHnQhGH61Xupqq7pKOrjv8J7PyQiawBOAVQBNGxVSZ7oO93zK+IkV0g+kmx2WwAeACz/mLD3fgDAQUrknGTinJsql8vDukRkGkCJ5EVq375ycxuAiQN4IbnZLai+E5Et29sy8RNpb2pA59xsBtNzKRNLQeLe+6FUzTez8kmKce/jOC5kNiAia+2ah9SyWCwOArjUGM651cwGSJ5Z+l0UCADbFuM4xMCtuZ8KNaCnwwxUQwzUlSwiI6EGKpXKqJWxnpkMoJHXgHNuzDLwnJlMOwF5SpAkyUxwCQCcGrkUagDArpXgMIS8YeSL0GNI8ir4GMZxXCBZsz7YysrnBzSDd0GDSCEii+1RrOM1+iacc/MAXkm+AViIQiEiEySfUh8j0dR+kXaauJZvL5c4gBsL1DJhRi51wumQ0SOqy7p9p11z/ecqHvw5lpS4/uqzlaP2jQvJXe60o0O8ozHX9fplN5+GTcxrAEfa7cENp0iSZLydRrvzTUZ/haQvzh6Id0ysTw33pwCAnon3EfUA70nzm/MsCZH5AAAAAElFTkSuQmCC"
                  />
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
        <strong>목표가 / 손절가 설정 <span>(선택사항)</span></strong>

        <div class="cho_pp">
          <div class="check">
            <label for="checkTargetPrice" class="custom-checkbox-label">
              <input type="checkbox" id="checkTargetPrice" class="custom-checkbox-input" v-model="isTargetPriceMode" />
              <span class="custom-checkbox-box"></span>
              <span class="custom-checkbox-txt">목표가 :</span>
            </label>
          </div>

          <div class="cho_radio">
            <span>입력 기준 :</span>
            <label for="rdoTargetPrice01" class="custom-radio-label">
              <input type="radio" name="targetStandard" id="rdoTargetPrice01" class="custom-radio-input" value="price" v-model="targetStandard" :disabled="!isTargetPriceMode" />
              <span class="custom-radio-txt">금액</span>
            </label>

            <label for="rdoTargetPrice02" class="custom-radio-label">
              <input type="radio" name="targetStandard" id="rdoTargetPrice02" class="custom-radio-input" value="percent" v-model="targetStandard" :disabled="!isTargetPriceMode" />
              <span class="custom-radio-txt">수익률</span>
            </label>
          </div>

          <div class="cho_input">
            <div>
              <input type="text" placeholder="목표가 입력" class="custom-text-input" style="width: 233px" v-model="targetPrice" :disabled="!isTargetPriceMode || targetStandard === 'percent'" />
              <label>원</label>

              <input type="number" step="0.01" placeholder="00.00" class="custom-text-input" style="width: 90px" v-model="targetRate" :disabled="!isTargetPriceMode || targetStandard === 'price'" />
              <label>%</label>

              <p class="caution">*현재가보다 낮거나 동일하게 설정할 수 없습니다.</p>
            </div>
          </div>
        </div>

        <div class="cho_pp">
          <div class="check">
            <label for="checkStopLossPrice" class="custom-checkbox-label">
              <input type="checkbox" id="checkStopLossPrice" class="custom-checkbox-input" v-model="isStopLossMode" />
              <span class="custom-checkbox-box"></span>
              <span class="custom-checkbox-txt">손절가 :</span>
            </label>
          </div>

          <div class="cho_radio">
            <span>입력 기준 :</span>
            <label for="rdoStopLossPrice01" class="custom-radio-label">
              <input type="radio" name="stopLossStandard" id="rdoStopLossPrice01" class="custom-radio-input" value="price" v-model="stopLossStandard" :disabled="!isStopLossMode" />
              <span class="custom-radio-txt">금액</span>
            </label>

            <label for="rdoStopLossPrice02" class="custom-radio-label">
              <input type="radio" name="stopLossStandard" id="rdoStopLossPrice02" class="custom-radio-input" value="percent" v-model="stopLossStandard" :disabled="!isStopLossMode" />
              <span class="custom-radio-txt">수익률</span>
            </label>
          </div>

          <div class="cho_input">
            <div>
              <input type="text" placeholder="손절가 입력" class="custom-text-input" style="width: 233px" v-model="stopLossPrice" :disabled="!isStopLossMode || stopLossStandard === 'percent'" />
              <label>원</label>

              <input type="number" step="0.01" placeholder="00.00" class="custom-text-input" style="width: 90px" v-model="stopLossRate" :disabled="!isStopLossMode || stopLossStandard === 'price'" />
              <label>%</label>

              <p class="caution">*현재가보다 높거나 동일하게 설정할 수 없습니다.</p>
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
              <input type="text" class="custom-text-input" placeholder="매수 알림과 제시될 한 줄 코멘트를 작성해 주세요." style="width: 708px" v-model="buyCommentText" :disabled="!useBuyComment" />
              <p class="caution">*최소 5자, 최대 50자 범위로 입력해 주세요.</p>
            </div>
          </div>

          <div>
            <div class="check">
              <label for="checkTargetComment" class="custom-checkbox-label">
                <input type="checkbox" id="checkTargetComment" class="custom-checkbox-input" v-model="useTargetComment" :disabled="!isTargetPriceMode" />
                <span class="custom-checkbox-box"></span>
                <span class="custom-checkbox-txt">목표가 매도 코멘트 :</span>
              </label>
            </div>
            <div class="comment">
              <input type="text" class="custom-text-input" placeholder="목표가 매도 알림과 제시될 한 줄 코멘트를 작성해 주세요." style="width: 708px" v-model="targetCommentText" :disabled="!useTargetComment || !isTargetPriceMode" />
              <p class="caution" v-if="!isTargetPriceMode">*목표가 설정 체크박스 선택 및 금액 입력이 선행되어야 합니다.</p>
              <p class="caution" v-else>*최소 5자, 최대 50자 범위로 입력해 주세요.</p>
            </div>
          </div>

          <div>
            <div class="check">
              <label for="checkStopComment" class="custom-checkbox-label">
                <input type="checkbox" id="checkStopComment" class="custom-checkbox-input" v-model="useStopComment" :disabled="!isStopLossMode" />
                <span class="custom-checkbox-box"></span>
                <span class="custom-checkbox-txt">손절가 매도 코멘트 :</span>
              </label>
            </div>
            <div class="comment">
              <input type="text" class="custom-text-input" placeholder="손절가 매도 알림과 제시될 한 줄 코멘트를 작성해 주세요." style="width: 708px" v-model="stopCommentText" :disabled="!useStopComment || !isStopLossMode" />
              <p class="caution" v-if="!isStopLossMode">*손절가 설정 체크박스 선택 및 금액 입력이 선행되어야 합니다.</p>
              <p class="caution" v-else>*최소 5자, 최대 50자 범위로 입력해 주세요.</p>
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

        <button class="btn-large btn001" @click="handleConfirm">
          <span>실시간 매수 추천</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 1. 종목 검색 관련
      searchQuery: '', // [추가] 검색어 바인딩
      selectedItem: null, // 선택된 종목 (null이면 선택 안됨)
      currentTime: new Date().toLocaleString(), // [추가] 현재 시간 표시용

      // 2. 목표가 설정 관련
      isTargetPriceMode: false,
      targetStandard: 'price',
      targetPrice: '', // [추가] 목표 금액 값
      targetRate: '', // [추가] 목표 수익률 값

      // 3. 손절가 설정 관련
      isStopLossMode: false,
      stopLossStandard: 'price',
      stopLossPrice: '', // [추가] 손절 금액 값
      stopLossRate: '', // [추가] 손절 수익률 값

      // 4. 코멘트 관련 체크 여부
      useBuyComment: true,
      useTargetComment: true,
      useStopComment: false,

      // 5. 코멘트 내용 관련 [추가]
      buyCommentText: '',
      targetCommentText: '',
      stopCommentText: ''
    }
  },
  watch: {
    // 목표가 모드가 해제되면 관련 코멘트 체크도 해제하고 싶을 때 (선택사항)
    isTargetPriceMode(val) {
      if (!val) {
        this.useTargetComment = false
        this.targetPrice = ''
        this.targetRate = ''
      }
    },
    isStopLossMode(val) {
      if (!val) {
        this.useStopComment = false
        this.stopLossPrice = ''
        this.stopLossRate = ''
      }
    }
  },
  methods: {
    // 종목 검색 로직
    searchItem() {
      if (!this.searchQuery) {
        alert('종목명을 입력해 주세요.')
        return
      }
      // TODO: 실제 API 호출 로직으로 대체
      console.log('검색어:', this.searchQuery)

      // 테스트용 더미 데이터 세팅
      this.selectedItem = {
        code: '005930',
        name: '삼성전자',
        price: 72000,
        rate: 1.5
      }
    },

    handleClose() {
      this.$nuxt.$emit('close-global-modal')
    },

    handleConfirm() {
      // 1. 유효성 검사
      if (!this.selectedItem) {
        alert('종목을 먼저 선택해 주세요.')
        return
      }

      // 목표가 설정 시 값 체크
      if (this.isTargetPriceMode) {
        if (this.targetStandard === 'price' && !this.targetPrice) {
          alert('목표 금액을 입력해 주세요.')
          return
        }
        if (this.targetStandard === 'percent' && !this.targetRate) {
          alert('목표 수익률을 입력해 주세요.')
          return
        }
      }

      // 2. 데이터 페이로드 구성
      const payload = {
        item: this.selectedItem,
        target: {
          active: this.isTargetPriceMode,
          type: this.targetStandard,
          price: this.targetPrice,
          rate: this.targetRate,
          comment: this.useTargetComment ? this.targetCommentText : ''
        },
        stopLoss: {
          active: this.isStopLossMode,
          type: this.stopLossStandard,
          price: this.stopLossPrice,
          rate: this.stopLossRate,
          comment: this.useStopComment ? this.stopCommentText : ''
        },
        buyComment: this.useBuyComment ? this.buyCommentText : ''
      }

      console.log('전송할 데이터:', payload)
      // this.$axios.post('/api/recommend', payload)...

      this.handleClose()
    }
  }
}
</script>
