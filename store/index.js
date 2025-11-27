// store/index.js 예시

export const state = () => ({
  pageTitle: '' // 초기 상태
})

export const mutations = {
  // 타이틀을 업데이트하는 뮤테이션
  setPageTitle(state, newTitle) {
    state.pageTitle = newTitle
  }
}

export const getters = {
  // 타이틀을 가져오는 게터
  getPageTitle(state) {
    return state.pageTitle
  }
}
