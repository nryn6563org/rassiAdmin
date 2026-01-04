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
          <input type="checkbox" id="active_zoom" class="activeZoom" v-model="isZoomActive" autocomplete="off" />
          <span class="custom-zoomActive"></span>
        </label>
      </div>
      <button type="button" @click="goToLogin">
        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 0.5H0.5V13.5H7.5" stroke="#111111" stroke-linecap="round" />
          <path d="M3.5 6.5C3.22386 6.5 3 6.72386 3 7C3 7.27614 3.22386 7.5 3.5 7.5V7V6.5ZM12.8536 7.35355C13.0488 7.15829 13.0488 6.84171 12.8536 6.64645L9.67157 3.46447C9.47631 3.2692 9.15973 3.2692 8.96447 3.46447C8.7692 3.65973 8.7692 3.97631 8.96447 4.17157L11.7929 7L8.96447 9.82843C8.7692 10.0237 8.7692 10.3403 8.96447 10.5355C9.15973 10.7308 9.47631 10.7308 9.67157 10.5355L12.8536 7.35355ZM3.5 7V7.5H12.5V7V6.5H3.5V7Z" fill="#111111" />
        </svg>

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
  @apply flex w-fit items-center gap-7 justify-end;
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
