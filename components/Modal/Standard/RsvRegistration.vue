<template>
  <div id="RsvRegistration">
    <div class="suggestion">
      <section>
        <strong>종목 선택</strong>

        <div class="itemSearch">
          <label for="itemSearchInput">
            <input type="text" placeholder="종목명을 검색해 주세요." id="itemSearchInput" class="custom-text-input" />
            <button type="submit">
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
        <!-- 검색영역 -->

        <div class="txt">
          <p>
            <span>현재가 (등락률) :</span>
            상단 검색창에서 종목을 선택해 주세요.
          </p>
          <span>※ 등록 시 현재가는 자동 업데이트 됩니다.</span>
        </div>
      </section>
      <!-- 종목 선택 -->

      <section>
        <strong>목표가 / 손절가 설정 <span>(선택사항)</span></strong>

        <div class="cho_pp">
          <div class="cho_radio">
            <span>입력 기준 :</span>
            <label for="rdo001" class="custom-radio-label">
              <input type="radio" name="choStandard" id="rdo001" class="custom-radio-input" value="price" v-model="inputStandard" checked />
              <span class="custom-radio-txt">금액</span>
            </label>
            <!-- // -->
            <label for="rdo002" class="custom-radio-label">
              <input type="radio" name="choStandard" id="rdo002" class="custom-radio-input" value="percent" v-model="inputStandard" />
              <span class="custom-radio-txt">수익률</span>
            </label>
            <!-- // -->
          </div>
          <!-- cho_radio -->

          <div class="cho_input">
            <div>
              <input type="text" placeholder="목표가 입력" id="targetPrc" class="custom-text-input" style="width: 233px" :disabled="inputStandard === 'percent'" />
              <label for="targetPrc">원</label>
              <input type="text" value="+ 00.00" id="targetPer" class="custom-text-input" style="width: 90px" :disabled="inputStandard === 'price'" />
              <label for="targetPer">%</label>

              <p class="caution">*현재가보다 낮거나 동일하게 설정할 수 없습니다.</p>
            </div>

            <div>
              <input type="text" placeholder="손절가 입력" id="stopPrc" class="custom-text-input" style="width: 233px" :disabled="inputStandard === 'percent'" />
              <label for="stopPrc">원</label>
              <input type="text" value="+ 00.00" id="stopPer" class="custom-text-input" style="width: 90px" :disabled="inputStandard === 'price'" />
              <label for="stopPer">%</label>

              <p class="caution">*현재가보다 낮거나 동일하게 설정할 수 없습니다.</p>
            </div>
          </div>
          <!-- cho_input -->
          <div class="txt">
            <span>※ 시세가 급변하여 설정하신 목표가 / 손절가의 금액이 현재가와 중복된다면 입력 수정이 필요합니다.</span>
          </div>
          <!-- txt -->
        </div>
      </section>
      <!-- 목표가/ 손절가 설정 -->

      <section>
        <strong>한 줄 추천 사유 <span>(선택사항)</span></strong>

        <div class="check_comment">
          <div>
            <div class="check">
              <label for="check001" class="custom-checkbox-label">
                <input type="checkbox" id="check001" class="custom-checkbox-input" v-model="buyComment" />
                <span class="custom-checkbox-box"></span>
                <span class="custom-checkbox-txt">매수 코멘트 :</span>
              </label>
            </div>
            <div class="comment">
              <input type="text" name="" id="" class="custom-text-input" placeholder="매수 알림과 제시될 한 줄 코멘트를 작성해 주세요." style="width: 708px" :disabled="!buyComment" />
            </div>
            <div class="txt">
              <p class="caution">*최소 5자, 최대 50자 범위로 입력해 주세요.</p>
            </div>
          </div>
          <!-- 매수 코멘트 -->

          <div>
            <div class="check">
              <label for="check002" class="custom-checkbox-label">
                <input type="checkbox" id="check002" class="custom-checkbox-input" v-model="sellComment" />
                <span class="custom-checkbox-box"></span>
                <span class="custom-checkbox-txt">목표가 매도 코멘트 :</span>
              </label>
            </div>
            <div class="comment">
              <input type="text" name="" id="" class="custom-text-input" placeholder="목표가 매도 알림과 제시될 한 줄 코멘트를 작성해 주세요." style="width: 708px" :disabled="!sellComment" />
            </div>

            <div class="txt">
              <p class="caution">*목표가 / 손절가 설정 체크박스 선택 후 금액을 먼저 입력해 주세요.</p>
              <p class="caution">*최소 5자, 최대 50자 범위로 입력해 주세요.</p>
            </div>
          </div>
          <!-- 매도 코멘트 -->

          <div>
            <div class="check">
              <label for="check003" class="custom-checkbox-label">
                <input type="checkbox" id="check003" class="custom-checkbox-input" v-model="stopComment" />
                <span class="custom-checkbox-box"></span>
                <span class="custom-checkbox-txt">손절가 매도 코멘트 :</span>
              </label>
            </div>
            <div class="comment">
              <input type="text" name="" id="" class="custom-text-input" placeholder="손절가 매도 알림과 제시될 한 줄 코멘트를 작성해 주세요." style="width: 708px" :disabled="!stopComment" />
            </div>
          </div>
          <!-- 매도 코멘트 -->
        </div>
      </section>
      <!-- 한 줄 추천 사유 -->
    </div>

    <div class="modal-footer">
      <div class="button-group">
        <button class="btn-large btn009">
          <span>닫기</span>
        </button>
        <button class="btn-large btn005">
          <span>매수 추천 예약</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputStandard: 'price',
      buyComment: true,
      sellComment: true,
      stopComment: false
    }
  }
}
</script>
