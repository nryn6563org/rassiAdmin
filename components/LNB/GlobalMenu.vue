<template>
  <menu id="globalMenu">
    <div
      v-for="(menu, menuIndex) in menus"
      :key="menuIndex"
      :class="{ 'active': menu.isOpen }"
    >
      <button @click="toggleMenu(menu)">
        <img :src="menu.ico" :alt="menu.title + '아이콘'" width="24" />
        <span>{{ menu.title }}</span>
        <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.370117 0.336426L5.37012 5.83643L10.3701 0.336426" stroke="#5E6367" />
        </svg>
      </button>

      <ul>
        <li v-for="(subMenu, subMenuIndex) in menu.subMenus" :key="subMenuIndex">
          <NuxtLink :to="subMenu.link">{{ subMenu.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </menu>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          title: '대시보드',
          ico: require('~/assets/img/lnb/menu01.png'),
          subMenus: [
            {
              title: '대시보드',
              link: '/BD/DashBoard'
            }
          ],
          // ⚠️ 상태 관리를 위해 isOpen 추가
          isOpen: true
        },
        {
          title: '종목추천',
          ico: require('~/assets/img/lnb/menu02.png'),
          subMenus: [
            {
              title: '스탠다드 종목추천',
              link: '/IR/Standard'
            },
            {
              title: 'AI매매신호 종목추천',
              link: '/IR/Signal'
            }
          ],
          isOpen: false
        },
        {
          title: '게시물 관리',
          ico: require('~/assets/img/lnb/menu03.png'),
          subMenus: [
            {
              title: '투자전략',
              link: '/PM/Strategy'
            },
            {
              title: '종목분석',
              link: '/PM/Analysis'
            },
            {
              title: '전문가상담',
              link: '/PM/Consulting'
            }
          ],
          isOpen: false
        },
        {
          title: '회원 등록 관리',
          ico: require('~/assets/img/lnb/menu04.png'),
          subMenus: [
            {
              title: '전문가·관리자 회원 관리',
              link: '/UM/Expert'
            },
            {
              title: '소속 등록 관리',
              link: '/UM/Group'
            }
          ],
          isOpen: false
        }
      ]
    }
  },
  // 🟢 라우트가 변경될 때마다 활성화 메뉴 체크
  watch: {
    '$route.path': {
      handler(newPath) {
        this.checkActiveMenu(newPath)
      }
    }
  },
  // 🟢 컴포넌트가 처음 로드될 때 현재 라우트 경로를 체크
  mounted() {
    this.checkActiveMenu(this.$route.path)
  },
  methods: {
    toggleMenu(selectedMenu) {
      // 1. 현재 클릭된 메뉴 외의 모든 메뉴 닫기 (아코디언 기능)
      this.menus.forEach((menu) => {
        if (menu !== selectedMenu) {
          menu.isOpen = false
        }
      })

      // 2. 클릭된 메뉴의 상태를 토글
      selectedMenu.isOpen = !selectedMenu.isOpen
    },
    // 🟢 라우트 경로에 따라 상위 메뉴를 활성화하는 핵심 로직
    checkActiveMenu(path) {
      // 모든 메뉴를 기본적으로 닫음 (아코디언 유지)
      this.menus.forEach((menu) => {
        menu.isOpen = false
      })

      // 현재 경로와 일치하는 서브메뉴가 있는지 확인하고 해당 상위 메뉴를 엽니다.
      this.menus.forEach((menu) => {
        const isActive = menu.subMenus.some((subMenu) => {
          // 정확히 일치하는 경로를 찾습니다.
          return subMenu.link === path
        })

        if (isActive) {
          menu.isOpen = true
          // 일치하는 메뉴를 찾으면 루프를 종료하거나 다음 메뉴로 넘어갑니다.
        }
      })
    }
  }
}
</script>

<style scoped>
#globalMenu {
  @apply mt-8 pt-8 border-t-[1px] border-[#eaeaea] flex flex-col gap-4;
}
#globalMenu > div{
  @apply w-full min-h-[44px] flex flex-col
}
#globalMenu > div button{
  /* 기본 버튼 스타일 */
  @apply p-2.5 w-full h-[44px] flex justify-between items-center gap-2.5 rounded-[3px]
  hover:bg-[#0263E8]
}
#globalMenu > div button span{
  @apply w-[calc(100%-54px)] text-[16px] font-semibold text-[#141414] text-left
}

/* hover 상태 */
#globalMenu > div button:hover img{
  @apply invert-[100]
}
#globalMenu > div button:hover span{
  @apply text-white
}
#globalMenu > div button:hover svg path{
  @apply stroke-white
}

/* active 상태 (클릭되어 열린 상태) */
#globalMenu > div.active button{
  @apply bg-[#0263E8] /* 활성화된 버튼의 배경색 */
}
#globalMenu > div.active button img{
  @apply invert-[100]
}
#globalMenu > div.active button span{
  @apply text-white
}
#globalMenu > div.active button svg{
  @apply rotate-180 /* 화살표 회전 */
}
#globalMenu > div.active button svg path{
  @apply stroke-white
}

/* 서브 메뉴 목록 (기본 숨김) */
#globalMenu > div ul{
  @apply h-0 overflow-hidden transition-all duration-300 ease-linear
}
/* active일 때 서브 메뉴 표시 */
#globalMenu > div.active ul{
  @apply flex flex-col w-full h-auto
}
#globalMenu > div ul li{
  @apply p-[13px_16px] h-[46px] flex items-center
}
#globalMenu > div ul li a{
  @apply relative w-full h-5 leading-5 text-[16px] text-[#141414] pl-[28px]
  /* 커스텀 불릿 포인트 스타일 */
  before:content-[''] before:w-2 before:h-2 before:rounded-full before:border-[1px] before:border-[#5E6367] before:absolute before:left-0 before:top-[6px]
  /* hover 상태 */
  hover:text-[#0263E8] hover:before:bg-[#0263E8] hover:before:border-[#0263E8] hover:font-medium
}
#globalMenu > div ul li a.nuxt-link-exact-active{
  @apply text-[#0263E8] before:bg-[#0263E8] font-medium
}
</style>