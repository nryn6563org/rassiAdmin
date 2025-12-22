<template>
  <div id="RsvRegistration">
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
          <!-- 현재가 (등락률) -->

          <div>
            <span>나의수익 :</span>
            <div class="itemPrice">
              <span class="prc">34,500</span>
              <span class="per up">(+3.33%)</span>
              <span class="date"> 2025.11.28 15:23 - 12일보유</span>
            </div>
          </div>
          <!-- 나의수익 -->
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
              <span class="custom-radio-txt">변동률</span>
            </label>
          </div>

          <div class="cho_input">
            <div>
              <input type="text" placeholder="목표가 입력" class="custom-text-input" style="width: 233px" v-model="buyPrice" :disabled="!isBuyRsvMode || buyStandard === 'percent'" />
              <label>원</label>

              <input type="number" step="0.01" placeholder="00.00" class="custom-text-input" style="width: 90px" v-model="buyRate" :disabled="!isBuyRsvMode || buyStandard === 'price'" />
              <label>%</label>
              <p class="caution">*상승 구간에 구매하기 선택 시 현재가보다 낮거나 동일하게 설정할 수 없습니다.</p>
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
              <input type="text" class="custom-text-input" placeholder="매수 알림과 제시될 한 줄 코멘트를 작성해 주세요." style="width: 708px" v-model="buyComment" :disabled="!useBuyComment" />
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
              <input type="text" class="custom-text-input" placeholder="목표가 매도 알림과 제시될 한 줄 코멘트를 작성해 주세요." style="width: 708px" v-model="targetComment" :disabled="!useTargetComment" />
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
              <input type="text" class="custom-text-input" placeholder="손절가 매도 알림과 제시될 한 줄 코멘트를 작성해 주세요." style="width: 708px" v-model="stopComment" :disabled="!useStopComment" />
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
      // 1. 추천 매수가 예약 설정 관련
      isBuyRsvMode: false, // 상승 구간 구매하기 체크 여부
      buyStandard: 'price', // 금액 vs 수익률 (매수)
      buyPrice: '', // 매수 목표가 (금액)
      buyRate: '', // 매수 목표가 (수익률)

      // 2. 날짜 관련
      startDate: '',
      endDate: '',

      // 3. 목표가/손절가 설정 관련
      isTargetPriceMode: false, // 목표가 설정 체크 여부
      targetStandard: 'price', // 금액 vs 수익률 (목표가)
      targetPrice: '', // 목표가 (금액)
      targetRate: '', // 목표가 (수익률)
      isStopLossMode: false, // 손절가 설정 체크 여부
      stopLossStandard: 'price', // 금액 vs 수익률 (손절가)
      stopLossPrice: '', // 손절가 (금액)
      stopLossRate: '', // 손절가 (수익률)

      // 4. 코멘트 관련
      useBuyComment: true,
      buyComment: '', // 매수 코멘트
      useTargetComment: true,
      targetComment: '', // 목표가 매도 코멘트
      useStopComment: false,
      stopComment: '' // 손절가 매도 코멘트
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
      // layouts/default.vue에 정의된 리스너에게 '닫아달라'는 신호를 보냄
      this.$nuxt.$emit('close-global-modal')
    },

    // 실시간 매수 추천 버튼 클릭 시 실행
    handleConfirm() {
      // 1. 유효성 검사 또는 API 전송 로직 작성
      // if ( ... ) { alert('입력을 확인해주세요'); return; }
      console.log('실시간 매수 추천 전송 로직 수행')

      // 2. 로직 수행 후 모달 닫기
      this.handleClose()
    }
  }
}
</script>

<style scoped>
.suggestion {
  @apply !mt-0;
}
</style>
