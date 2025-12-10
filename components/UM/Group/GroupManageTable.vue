<template>
  <div class="writeTable">
    <table width="100%">
      <colgroup>
        <col width="165" />
        <col width="*" />
      </colgroup>
      <tbody>
        <tr>
          <th>
            <span>소속명</span>
          </th>
          <td>
            <div class="AffiliationName">
              <input type="text" name="" id="" class="custom-text-input" placeholder="소속명을 입력해 주세요." style="width: 409px" />
            </div>
          </td>
        </tr>
        <tr>
          <th>
            <span>소속분류</span>
          </th>
          <td>
            <div class="AffiliationType">
              <label for="at001" class="custom-radio-label">
                <input type="radio" name="AffiliationType" id="at001" class="custom-radio-input" value="" checked />
                <span class="custom-radio-txt">투자자문사</span>
              </label>
              <label for="at002" class="custom-radio-label">
                <input type="radio" name="AffiliationType" id="at002" class="custom-radio-input" value="" />
                <span class="custom-radio-txt">유사투자자문업자</span>
              </label>
              <label for="at003" class="custom-radio-label">
                <input type="radio" name="AffiliationType" id="at003" class="custom-radio-input" value="" />
                <span class="custom-radio-txt">투자일임사</span>
              </label>
              <label for="at004" class="custom-radio-label">
                <input type="radio" name="AffiliationType" id="at004" class="custom-radio-input" value="" />
                <span class="custom-radio-txt">자산운용사</span>
              </label>
            </div>
          </td>
        </tr>
        <tr>
          <th>
            <span>회원목록</span>
          </th>
          <td>
            <div class="member">
              <div class="memberSch">
                <DropDown ref="member" :items="memberLabels" :initial-label="selectedMemberLabel" :placeholder="'선택'" @change="handleMemberChange" @opened="closeOtherDropdowns('member')" />
              </div>
              <div class="memberList">
                <strong>총 <em>12</em> 명</strong>
                <button v-for="(user, userIndex) in userList" :key="userIndex">
                  <span>
                    <em class="userName">{{ user.userName }}</em>
                    <em class="Authority">{{ user.authority }}</em>
                    <em class="userID">{{ user.userID }}</em>
                  </span>

                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5L13.2782 13.5" stroke="black" />
                    <path d="M13.5 5.5L5.72183 13.5" stroke="black" />
                  </svg>
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th>
            <span>등록일시</span>
          </th>
          <td>
            <div class="date">
              <span>2026.01.02 12:43</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import DropDown from '@/components/InputGroup/DropDownSvg.vue'
export default {
  components: {
    DropDown
  },
  data() {
    return {
      userList: [
        {
          userName: '홍길동1',
          authority: '투자자문사',
          userID: 'thinkpool123'
        },
        {
          userName: '홍길동2',
          authority: '유사투자자문업자',
          userID: 'thinkpool123'
        },
        {
          userName: '홍길동3',
          authority: '투자일임사',
          userID: 'thinkpool123'
        },
        {
          userName: '홍길동4',
          authority: '자산운용사',
          userID: 'thinkpool123'
        },
        {
          userName: '홍길동5',
          authority: '투자자문사',
          userID: 'thinkpool123'
        },
        {
          userName: '홍길동6',
          authority: '유사투자자문업자',
          userID: 'thinkpool123'
        },
        {
          userName: '홍길동7',
          authority: '자산운용사',
          userID: 'thinkpool123'
        },
        {
          userName: '홍길동8',
          authority: '자산운용사',
          userID: 'thinkpool123'
        },
        {
          userName: '홍길동9',
          authority: '투자자문사',
          userID: 'thinkpool123'
        },
        {
          userName: '홍길동10',
          authority: '투자일임사',
          userID: 'thinkpool123'
        }
      ],
      memberLabels: ['등록일시'],
      selectedMemberLabel: '등록일시'
    }
  },
  methods: {
    // [추가] 다른 드롭다운 닫기 로직
    closeOtherDropdowns(activeRef) {
      // 관리할 드롭다운의 ref 이름 목록
      const dropdownRefs = ['member']

      dropdownRefs.forEach((refName) => {
        // 현재 열린(activeRef) 드롭다운이 아니면 닫기 함수 실행
        if (refName !== activeRef && this.$refs[refName]) {
          // DropDown 컴포넌트 내부의 closeDropdown 메서드를 직접 호출
          this.$refs[refName].closeDropdown()
        }
      })
    },
    // 1. 날짜 기준 변경 핸들러
    handleMemberChange(label) {
      this.selectedMemberLabel = label
    }
  }
}
</script>
<style scoped>
* input[type="text"] {
  @apply !h-[46px];
}
::v-deep input[type="text"] {
  @apply !h-[46px];
}
::v-deep .schInput button {
  @apply !h-[46px];
}
::v-deep .dropdown_w {
  @apply w-[405px] h-[46px];
}
::v-deep .dropdown_w .menu-item {
  @apply px-2.5 h-10 leading-10;
}
.AffiliationType{
  @apply flex items-center gap-2.5
}
.memberList{
  @apply flex flex-wrap gap-x-2.5 gap-y-2 mt-4
}
.memberList strong{
  @apply w-full text-[20px] text-[#141414] font-normal mb-1
}
.memberList strong em{
  @apply text-[#3C68CD] font-bold
}
.memberList button{
  @apply h-10 border-[1px] border-[#bfbfbf] rounded-[10px] px-2.5 flex justify-between items-center
}
.memberList button span{
  @apply flex items-center gap-2.5
}
.memberList button span .userName{
  @apply text-[18px] text-[#5E6367] underline
}
.memberList button span .Authority{
  @apply text-[18px] text-[#5E6367]
}
.memberList button span .userID{
  @apply text-[18px] text-[#447AEC]
}
</style>
