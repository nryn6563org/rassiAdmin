<template>
  <header>
    <h1>
      <a href="/">
        <img src="~/assets/img/logo.png" alt="씽크풀로고" width="196" />
      </a>
    </h1>
    <div class="rbtn">
      <div class="checkingZoom">
        <span>축소보기</span>
        <label for="active_zoom">
          <input
            type="checkbox"
            id="active_zoom"
            class="activeZoom"
            v-model="isZoomActive"
            autocomplete="off"
          />
          <span class="custom-zoomActive"></span>
        </label>
      </div>
      <button type="button" @click="goToLogin">
        <span>로그아웃</span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      // 2. 초기 상태 설정
      isZoomActive: false
    }
  },
  watch: {
    // 3. 체크박스 상태 감시
    isZoomActive(val) {
      if (val) {
        // 80% 축소 적용
        document.body.style.zoom = '0.8'
      } else {
        // 원래 크기(100%) 복구
        document.body.style.zoom = '1'
      }
    }
  },
  methods: {
    goToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
header {
  @apply w-full p-[14px_33px] flex justify-between items-center border-b border-[#eaeaea];
}
.rbtn {
  @apply flex w-fit items-center gap-2.5 justify-end;
}
.rbtn .checkingZoom {
  @apply w-fit h-10 flex items-center;
}
.rbtn .checkingZoom span {
  @apply text-[#5E6367] text-[14px] mr-1;
}
.rbtn .checkingZoom label {
  @apply relative block w-10 h-6 overflow-hidden cursor-pointer;
}
.rbtn .checkingZoom label input {
  @apply absolute top-0 opacity-0 left-[-9999em];
}
.rbtn .checkingZoom label input + .custom-zoomActive {
  @apply block w-10 h-6 rounded-[12px] bg-[#C5C5C5] transition-all duration-300 ease-in-out relative;
}
.rbtn .checkingZoom label input + .custom-zoomActive::after {
  @apply content-[''] w-5 h-5 rounded-full bg-white absolute top-[2px] left-[2px];
}
.rbtn .checkingZoom label input:checked + .custom-zoomActive {
  @apply bg-[#5E6367];
}
.rbtn .checkingZoom label input:checked + .custom-zoomActive::after {
  @apply left-auto right-[2px];
}
button {
  @apply flex border rounded-[6px] w-[120px] h-[42px] justify-center items-center transition-colors duration-150 hover:bg-[#f3f3f3];
  border-color: #eaeaea;
}
button span {
  @apply ml-[7px] text-[16px] text-[#111111];
}
</style>
