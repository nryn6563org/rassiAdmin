<template>
  <aside id="lnb">
    <UserInfo />
    <PopupAlarm />
    <GlobalMenu />
  </aside>
</template>

<script>
import PopupAlarm from './LNB/PopupAlarm.vue'
import UserInfo from './LNB/UserInfo.vue'
import GlobalMenu from './LNB/GlobalMenu.vue'

export default {
  components: {
    PopupAlarm,
    UserInfo,
    GlobalMenu
  }
}

</script>
<style scoped>
#lnb{
  @apply w-[262px] h-full border-r-[1px] border-[#eaeaea] px-5 pt-4
}
</style>