<template>
  <div id="AddItem">
    <div class="suggestion">
      <section>
        <strong>추천 종목 지정</strong>

        <div class="itemSearch">
          <label for="itemSearchInput">
            <input type="text" placeholder="종목명을 검색해 주세요." id="itemSearchInput" class="custom-text-input" />
            <button type="button">
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
        <!-- 종목검색 -->

        <div class="itemList">
          <p>총 <em>10</em> 종목 선택됨</p>
          <button v-for="(item, itemIndex) in items" :key="itemIndex">
            <span>{{ item.name }} ({{ item.code }})</span>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 5.5L13.2782 13.5" stroke="black" />
              <path d="M13.5 5.5L5.72183 13.5" stroke="black" />
            </svg>
          </button>
        </div>
      </section>
    </div>

    <div class="modal-footer">
      <div class="button-group">
        <button class="btn-large btn009" @click="handleClose">
          <span>닫기</span>
        </button>

        <button class="btn-large btn007" @click="handleConfirm">
          <span>등록하기</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: '삼성전자', code: '005930' },
        { name: 'LG전자', code: '066570' },
        { name: 'SK하이닉스', code: '000660' },
        { name: '현대차', code: '005380' },
        { name: 'NAVER', code: '035420' },
        { name: '카카오', code: '035720' },
        { name: '삼성바이오로직스', code: '207940' },
        { name: '삼성SDI', code: '028260' },
        { name: 'LG화학', code: '051910' },
        { name: '셀트리온', code: '068270' }
      ]
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
  @apply mt-0;
}
section .itemList{
  @apply flex flex-wrap w-full gap-x-2 gap-y-1 mt-4
}
section .itemList p{
  @apply text-[20px] text-[#141414] h-8 leading-6 w-full pb-2
}
section .itemList p em{
  @apply text-[#0263E8] font-bold
}
section .itemList span{
  @apply text-[16px] text-[#5E6367]
}
section .itemList button{
  @apply h-10 rounded-[10px] border-[1px] border-[#BFBFBF] px-2.5 flex items-center gap-2.5
}
</style>
