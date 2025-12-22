<template>
  <div id="Buy">
    <div class="suggestion">
      <section>
        <strong>선택된 종목명</strong>
        <div class="itemSearch">
          <label for="itemSearchInput">
            <input type="text" placeholder="" value="씨제이바이오사이언스 (311690)" id="itemSearchInput" class="custom-text-input" readonly />
          </label>
        </div>

        <div class="txt">
          <div>
            <span>현재가 (등락률) :</span>
            <div class="itemPrice">
              <span class="prc">347,500</span>
              <span class="per dn">(-8.33%)</span>
              <span class="date"> 2025.11.28 15:23 </span>
              <button class="reset">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <rect width="21" height="21" fill="url(#pattern0_779_12642)" />
                  <defs>
                    <pattern id="pattern0_779_12642" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlink:href="#image0_779_12642" transform="scale(0.02)" />
                    </pattern>
                    <image
                      id="image0_779_12642"
                      width="50"
                      height="50"
                      preserveAspectRatio="none"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADlElEQVR4nO2ZS2sUQRDHO769iUF8nlUEERUlUcHvIKwiy1TtVHXXhIQcPPm4LAjGqxqNX0ARET0oKHoQUVDPPk5KIBrB981HfFMzPXEUMbvuzOrg/mBOO9vV/+nqR/3bmA4dOnRokq6acxuAZB+ynAZ295HcMyD3Hkg+ILnXSHIPyJ0FdnvR2p56vT7NtANkuY3sbv7uHSJagiRDwPIEWb429ZA8BpKDVWuXFS3kqz6/+o2Z5wO5o8gykenYGJIMQxhBGEZrmHkhIs4RkZlBMNAdUN9asNFOZDmGJA8zoiaQZETfaasQCO12ZPdSfwNynzWVNFU0vZppPyDpBZYTSO5jEsu9DFh2mKKF6JeNv+b3L3kVRVa2GiewdjmQu5QZ2ZGt9foMU4QQTREgd96Pwnu0Is2OwJTxwoiB5I0Xc6FS2TU3VyH6dZDlYhLAPfNpVAho7fo4hheTy8ikQoDdEd/wi1pNVpuCCaxdPimG5VjLDWaXyng/4GhjLj1tdGTYvY1jh3Z7a41l13wrA7n1stH4ZF2SEfJcl/s/b6jxze1GrgoyIMtln9bDpmghQHLdFARR3wpk+RSnNkRLTZkBkpN+VIZMmak5t8nv/OOVSmW6KTFdSDKaTPz2rZyFAOyO+zm5x5QZJFv1J4szpszUarLO7yl3TJkJw3BBekxqqjIEklvmH2JwcHB2elRq+E9p1VepVGaZfwhkudHU5gskr1RIYaVnu0CSe7EQ6ltrygyQOxvno412mjIDiTeVT1HzN0Fre/xS9yDvuryt1Ov1acDuUTJPpNeUGSA56HfSE6bMVK1dljiA7qOaAUXuDY0WcOaPg5CM+N30Uq69b7eQIBjoTq1RNc9Mm0GSwVyEKOrF+rr8jVo0ufVyqrgkvT8Y5K0KyaaYmmZFzpcUdfLTYxKyHMpNSGyZklzIWKaFjQxytFl9LD83z2uNnpsQRQ3lSTHqAJJ1Jl+6AnL9mXQ6p0d3/SFXIYo3syevFYDcFfWdWm03DKNVyHLNt/sFSA5nzevchaSoF5sOf2KeyUm1bJo8znQFoWyJ7xSTy6I4bWss235+sTAhinqx8TWb3pV8v6AZjd0OslWtsXX51uJM71aqIovjqzeWMFk83HjWII8nNeK8X8UqVMgPl6HsDqRns6YekjEg2Y/YvyjXyrD1g2a0UX0ntWzU7fBL6ASwvAOSp8juLrCcApLdOmItBezQocP/yTepSM1wODprZwAAAABJRU5ErkJggg=="
                    />
                  </defs>
                </svg>

                <span>실시간 현재가 조회</span>
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
              <span class="custom-radio-txt">변동률</span>
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
              <span class="custom-radio-txt">변동률</span>
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
              <input type="text" class="custom-text-input" placeholder="매수 알림과 제시될 한 줄 코멘트를 작성해 주세요." style="width: 708px" :disabled="!useBuyComment" />
              <p class="caution">*최소 5자, 최대 50자 범위로 입력해 주세요.</p>
            </div>
          </div>

          <div>
            <div class="check">
              <label for="checkTargetComment" class="custom-checkbox-label">
                <input type="checkbox" id="checkTargetComment" class="custom-checkbox-input" v-model="useTargetComment" />
                <span class="custom-checkbox-box"></span>
                <span class="custom-checkbox-txt">목표가 매도 코멘트 :</span>
              </label>
            </div>
            <div class="comment">
              <input type="text" class="custom-text-input" placeholder="목표가 매도 알림과 제시될 한 줄 코멘트를 작성해 주세요." style="width: 708px" :disabled="!useTargetComment" />
              <p class="caution">*목표가 / 손절가 설정 체크박스 선택 후 금액을 먼저 입력해 주세요.</p>
              <p class="caution">*최소 5자, 최대 50자 범위로 입력해 주세요.</p>
            </div>
          </div>

          <div>
            <div class="check">
              <label for="checkStopComment" class="custom-checkbox-label">
                <input type="checkbox" id="checkStopComment" class="custom-checkbox-input" v-model="useStopComment" />
                <span class="custom-checkbox-box"></span>
                <span class="custom-checkbox-txt">손절가 매도 코멘트 :</span>
              </label>
            </div>
            <div class="comment">
              <input type="text" class="custom-text-input" placeholder="손절가 매도 알림과 제시될 한 줄 코멘트를 작성해 주세요." style="width: 708px" :disabled="!useStopComment" />
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
      // 1. 추천 매수가 예약 설정 관련 (템플릿에는 없지만 로직상 유지)
      isBuyRsvMode: false,
      buyStandard: 'price',

      // 3. 목표가/손절가 설정 관련
      // [수정] 목표가 관련 변수 추가
      isTargetPriceMode: false,
      targetStandard: 'price', // 'price' or 'percent'
      targetPrice: '', // 목표가 (원) - 빈 문자열 또는 null로 초기화
      targetRate: '', // 목표 수익률 (%)

      // [수정] 손절가 관련 변수 추가
      isStopLossMode: false,
      stopLossStandard: 'price', // [중요] 손절가용 기준 변수 별도 선언 필요
      stopLossPrice: '', // 손절가 (원)
      stopLossRate: '', // 손절 수익률 (%)

      isTargetStopMode: false, // 자동 매도 알림 (필요 시 사용)

      // 4. 코멘트 관련
      useBuyComment: true,
      useTargetComment: true,
      useStopComment: false
    }
  },
  computed: {
    calculatedDays() {
      // startDate와 endDate를 계산해서 일수를 반환하는 로직 (예시)
      return 4
    }
  },
  methods: {
    // 닫기 버튼 클릭 시 실행
    handleClose() {
      // layouts/default.vue 혹은 상위 컴포넌트의 $on('close-global-modal') 과 매칭
      this.$nuxt.$emit('close-global-modal')
    },

    // 실시간 매수 추천 버튼 클릭 시 실행
    handleConfirm() {
      // 1. 유효성 검사 예시
      if (this.isTargetPriceMode && !this.targetPrice && !this.targetRate) {
        alert('목표가를 입력해주세요.')
        return
      }

      console.log('실시간 매수 추천 전송 로직 수행', {
        target: this.targetPrice,
        stopLoss: this.stopLossPrice
      })

      // 2. 로직 수행 후 모달 닫기
      this.handleClose()
    }
  }
}
</script>

<style scoped>
.suggestion {
  @apply mt-0;
}
</style>
