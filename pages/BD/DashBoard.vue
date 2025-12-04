<template>
  <div id="content">
    <div class="category">
      <div class="category-group" v-for="(category, categoryIndex) in categories" :key="categoryIndex">
        <strong>나의 {{ category.title }}</strong>

        <div class="category-item">
          <NuxtLink to="#" class="item" v-for="(item, itemIndex) in category.items" :key="itemIndex">
            <div class="itemTitle">
              <span>{{ item.name }}</span>
            </div>
            <div class="itemContent">
              <span>
                <em>{{ item.QTY }}</em>{{ category.title === "회원관리" ? "명" : "건" }}
              </span>
            </div>
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 9C4.44772 9 4 9.44772 4 10C4 10.5523 4.44772 11 5 11V10V9ZM19.7071 10.7071C20.0976 10.3166 20.0976 9.68342 19.7071 9.29289L13.3431 2.92893C12.9526 2.53841 12.3195 2.53841 11.9289 2.92893C11.5384 3.31946 11.5384 3.95262 11.9289 4.34315L17.5858 10L11.9289 15.6569C11.5384 16.0474 11.5384 16.6805 11.9289 17.0711C12.3195 17.4616 12.9526 17.4616 13.3431 17.0711L19.7071 10.7071ZM5 10V11H19V10V9H5V10Z" fill="#5E6367" />
            </svg>
          </NuxtLink>
        </div>
        <!-- item -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 페이지에서 사용할 제목 문자열
      pageSpecificTitle: '대시보드',
      categories: [
        {
          title: '종목추천',
          items: [
            {
              name: '스탠다드 종목추천 (7일)',
              link: '/',
              QTY: '124'
            },
            {
              name: '예약 매매 체결 (7일)',
              link: '/',
              QTY: '111'
            },
            {
              name: '예약 만료',
              link: '/',
              QTY: '2'
            },
            {
              name: 'AI종목추천 (7일)',
              link: '/',
              QTY: '2'
            }
          ]
        },
        {
          title: '게시물',
          items: [
            {
              name: '나의 투자전략',
              link: '/',
              QTY: '124'
            },
            {
              name: '나의 종목분석',
              link: '/',
              QTY: '111'
            },
            {
              name: '답변하지 않은 종목상담',
              link: '/',
              QTY: '2'
            }
          ]
        },
        {
          title: '회원관리',
          items: [
            {
              name: '나의 회원 (종목추천)',
              link: '/',
              QTY: '999,999,999'
            },
            {
              name: '내 소속 회원 수',
              link: '/',
              QTY: '10'
            }
          ]
        }
      ]
    }
  },
  head() {
    // 브라우저 탭 타이틀 설정
    return {
      title: `${this.pageSpecificTitle}`
    }
  },
  mounted() {
    // 컴포넌트가 마운트된 후, Vuex 뮤테이션을 호출하여 타이틀 업데이트
    this.$store.commit('setPageTitle', this.pageSpecificTitle)
  }
}
</script>
<style scoped>
#content {
  @apply w-full pt-[30px];
}
.category {
  @apply flex flex-col w-full;
}
.category-group {
  @apply flex flex-wrap w-full mt-10 first:mt-0;
}
.category-group > strong{
  @apply block w-full h-[45px] leading-[25px] text-[21px] font-medium text-[#141414] p-2.5
}
.category-item {
  @apply flex w-full mt-3 gap-6
}
.item{
  @apply w-[375px] h-[180px] rounded-[20px] shadow-dashbox bg-[#F9FAFB] flex justify-center items-center flex-col
}
.itemTitle span{
  @apply h-6 leading-6 text-[20px] text-[#141414]
}
.itemContent{
  @apply my-2
}
.itemContent span{
  @apply h-[38px] text-[24px] text-[#141414] flex items-end
}
.itemContent span em{
  @apply text-[36px] font-semibold h-[38px] leading-[38px]
}
</style>
