<template>
  <div class="tableInfo">
    <div class="lft">
      <div class="totalScore">
        <span>총&nbsp;<em>{{ total }}</em>&nbsp;건</span>
      </div>
      <span></span>
      <!--  -->
      <div class="btn-group">
        <button class="round btn002 btn-mid">
          <span>실시간 매도</span>
        </button>
        <button class="round btn001 btn-mid">
          <span>실시간 매수</span>
        </button>
        <button class="round btn0062 btn-mid">
          <span>코멘트 모아보기</span>
        </button>
      </div>
    </div>
    <!-- ltf -->

    <div class="rit">
      <button class="update">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="21" height="21" fill="url(#pattern0_966_17540)" />
          <defs>
            <pattern id="pattern0_966_17540" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_966_17540" transform="scale(0.02)" />
            </pattern>
            <image
              id="image0_966_17540"
              width="50"
              height="50"
              preserveAspectRatio="none"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADlElEQVR4nO2ZS2sUQRDHO769iUF8nlUEERUlUcHvIKwiy1TtVHXXhIQcPPm4LAjGqxqNX0ARET0oKHoQUVDPPk5KIBrB981HfFMzPXEUMbvuzOrg/mBOO9vV/+nqR/3bmA4dOnRokq6acxuAZB+ynAZ295HcMyD3Hkg+ILnXSHIPyJ0FdnvR2p56vT7NtANkuY3sbv7uHSJagiRDwPIEWb429ZA8BpKDVWuXFS3kqz6/+o2Z5wO5o8gykenYGJIMQxhBGEZrmHkhIs4RkZlBMNAdUN9asNFOZDmGJA8zoiaQZETfaasQCO12ZPdSfwNynzWVNFU0vZppPyDpBZYTSO5jEsu9DFh2mKKF6JeNv+b3L3kVRVa2GiewdjmQu5QZ2ZGt9foMU4QQTREgd96Pwnu0Is2OwJTxwoiB5I0Xc6FS2TU3VyH6dZDlYhLAPfNpVAho7fo4hheTy8ikQoDdEd/wi1pNVpuCCaxdPimG5VjLDWaXyng/4GhjLj1tdGTYvY1jh3Z7a41l13wrA7n1stH4ZF2SEfJcl/s/b6jxze1GrgoyIMtln9bDpmghQHLdFARR3wpk+RSnNkRLTZkBkpN+VIZMmak5t8nv/OOVSmW6KTFdSDKaTPz2rZyFAOyO+zm5x5QZJFv1J4szpszUarLO7yl3TJkJw3BBekxqqjIEklvmH2JwcHB2elRq+E9p1VepVGaZfwhkudHU5gskr1RIYaVnu0CSe7EQ6ltrygyQOxvno412mjIDiTeVT1HzN0Fre/xS9yDvuryt1Ov1acDuUTJPpNeUGSA56HfSE6bMVK1dljiA7qOaAUXuDY0WcOaPg5CM+N30Uq69b7eQIBjoTq1RNc9Mm0GSwVyEKOrF+rr8jVo0ufVyqrgkvT8Y5K0KyaaYmmZFzpcUdfLTYxKyHMpNSGyZklzIWKaFjQxytFl9LD83z2uNnpsQRQ3lSTHqAJJ1Jl+6AnL9mXQ6p0d3/SFXIYo3syevFYDcFfWdWm03DKNVyHLNt/sFSA5nzevchaSoF5sOf2KeyUm1bJo8znQFoWyJ7xSTy6I4bWss235+sTAhinqx8TWb3pV8v6AZjd0OslWtsXX51uJM71aqIovjqzeWMFk83HjWII8nNeK8X8UqVMgPl6HsDqRns6YekjEg2Y/YvyjXyrD1g2a0UX0ntWzU7fBL6ASwvAOSp8juLrCcApLdOmItBezQocP/yTepSM1wODprZwAAAABJRU5ErkJggg=="
            />
          </defs>
        </svg>
        <span>내역 업데이트</span>
      </button>
      <!-- 업데이트 -->

      <div class="date">
        <span>{{ updateDate }}</span>
      </div>
      <!-- date -->

      <div class="viewArray">
        <DropDown :items="viewArray" :initial-label="selectedViewArray" placeholder="지역을 고르세요" @change="handleChange" />
      </div>
      <!-- 보기 개수 정렬 -->

      <button class="btn-mid btn013 round">
        <span>종목 추천하기</span>
      </button>
    </div>
    <!-- rit -->
  </div>
</template>
<script>
import DropDown from '@/components/InputGroup/DropDown.vue'

export default {
  components: {
    DropDown
  },
  data() {
    return {
      total: '100',
      updateDate: '2025.11.06 15:20',
      viewArray: ['20개씩 보기', '30개씩 보기', '40개씩 보기', '50개씩 보기', '100개씩 보기'],
      selectedViewArray: '20개씩 보기' // 초기 선택 값 없음
    }
  },
  methods: {
    handleChange(label) {
      this.selectedAreaLabel = label
      // 지역 변경시 필요한 추가 행동이 있다면 여기에 추가
    }
  }
}
</script>

<style scoped>
.tableInfo {
  @apply flex w-full justify-between items-center;
}
.tableInfo .lft {
  @apply flex items-center gap-4;
}
.tableInfo .lft .totalScore{
  @apply text-[20px] text-[#141414]
}
.tableInfo .lft .totalScore span em{
  @apply text-[#0263E8] font-bold
}
.tableInfo .lft > span {
  @apply w-[1px] h-4 bg-[#484F55];
}
.tableInfo .lft .btn-group {
  @apply flex items-center gap-2.5;
}

.tableInfo .rit {
  @apply flex items-center gap-2.5;
}
.tableInfo .rit .update{
  @apply flex items-center gap-[2px] rounded-[6px] bg-[#F9FAFB] px-2 h-[42px]
}
.tableInfo .rit .update span{
  @apply text-[16px] text-[#5E6367]
}
.tableInfo .rit .date{
  @apply mr-2.5 text-[16px] text-[#5E6367]
}
.tableInfo .rit .viewArray .dropdown_w {
  @apply w-[133px] p-2.5 mr-2.5;
}
.tableInfo .rit .viewArray .dropdown_w::v-deep button {
  @apply text-[16px] text-[#5E6367];
}
.tableInfo .rit .viewArray .dropdown_w::v-deep ul {
  @apply w-[133px] left-auto right-0;
}
.tableInfo .rit .viewArray .dropdown_w::v-deep ul li {
  @apply h-8 leading-8 px-2.5;
}
</style>
