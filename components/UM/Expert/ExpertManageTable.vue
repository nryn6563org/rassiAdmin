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
            <span>*씽크풀계정</span>
          </th>
          <td>
            <SearchInput :searchLabel="'씽크풀 계정을 입력해 주세요.'" :items="fruitList" v-model="selectedFruit" />
          </td>
        </tr>
        <!-- 계정 -->
        <tr>
          <th>
            <span>소속</span>
          </th>
          <td>
            <div class="Affiliation">
              <DropDown ref="Affiliation" :items="AffiliationLabels" :initial-label="selectedAffiliationLabel" @change="handleAffiliationChange" @opened="closeOtherDropdowns('Affiliation')" />
              <NuxtLink to="/UM/GroupManage">소속추가</NuxtLink>
            </div>
          </td>
        </tr>
        <!-- 소속 -->
        <tr>
          <th>
            <span>*권한</span>
          </th>
          <td>
            <div class="Authority">
              <DropDown ref="Authority" :items="AuthorityLabels" :initial-label="selectedAuthorityLabel" @change="handleAuthorityChange" @opened="closeOtherDropdowns('Authority')" />
            </div>
          </td>
        </tr>
        <!-- 권한 -->
        <tr>
          <th>
            <span>*회원명</span>
          </th>
          <td>
            <div class="userName">
              <input type="text" name="" id="" class="custom-text-input" placeholder="회원명을 입력해 주세요." style="width: 375px" />
            </div>
          </td>
        </tr>
        <!-- 회원명 -->
        <tr>
          <th>
            <span>*전화번호</span>
          </th>
          <td>
            <div class="phonNumber">
              <input type="text" name="" id="" class="custom-text-input" style="width: 375px" placeholder="숫자만 11자 입력해 주세요." />
            </div>
          </td>
        </tr>
        <tr>
          <th>
            <span>프로필 이미지</span>
          </th>
          <td>
            <div class="profileImage">
              <FileInputImage @change-file="uploadToServer" />
            </div>
          </td>
        </tr>
        <tr>
          <th>
            <span>프로필 내용</span>
          </th>
          <td>
            <div class="profileContent">
              <textarea name="" id="" placeholder="프로필 내용을 입력해 주세요."></textarea>
            </div>
          </td>
        </tr>
        <tr>
          <th>
            <span>*메뉴 접근 권한</span>
          </th>
          <td>
            <div class="access">
              <div>
                <strong>대시보드</strong>
                <div class="check">
                  <label for="dbAccess" class="custom-checkbox-label">
                    <input type="checkbox" id="dbAccess" class="custom-checkbox-input" />
                    <span class="custom-checkbox-box"></span>
                    <span class="custom-checkbox-txt">대시보드</span>
                  </label>
                </div>
              </div>
              <div>
                <strong>종목추천</strong>
                <div class="check">
                  <label for="IRAccess001" class="custom-checkbox-label">
                    <input type="checkbox" id="IRAccess001" class="custom-checkbox-input" />
                    <span class="custom-checkbox-box"></span>
                    <span class="custom-checkbox-txt">스탠다드 종목추천</span>
                  </label>
                  <label for="IRAccess002" class="custom-checkbox-label">
                    <input type="checkbox" id="IRAccess002" class="custom-checkbox-input" />
                    <span class="custom-checkbox-box"></span>
                    <span class="custom-checkbox-txt">AI매매신호 종목추천</span>
                  </label>
                </div>
              </div>
              <div>
                <strong>게시물 관리</strong>
                <div class="check">
                  <label for="PMAccess001" class="custom-checkbox-label">
                    <input type="checkbox" id="PMAccess001" class="custom-checkbox-input" />
                    <span class="custom-checkbox-box"></span>
                    <span class="custom-checkbox-txt">투타전략</span>
                  </label>
                  <label for="PMAccess002" class="custom-checkbox-label">
                    <input type="checkbox" id="PMAccess002" class="custom-checkbox-input" />
                    <span class="custom-checkbox-box"></span>
                    <span class="custom-checkbox-txt">종목분석</span>
                  </label>
                  <label for="PMAccess003" class="custom-checkbox-label">
                    <input type="checkbox" id="PMAccess003" class="custom-checkbox-input" />
                    <span class="custom-checkbox-box"></span>
                    <span class="custom-checkbox-txt">종목상담</span>
                  </label>
                </div>
              </div>
              <div>
                <strong>회원 등록 관리</strong>
                <div class="check">
                  <label for="UMAccess001" class="custom-checkbox-label">
                    <input type="checkbox" id="UMAccess001" class="custom-checkbox-input" />
                    <span class="custom-checkbox-box"></span>
                    <span class="custom-checkbox-txt">전문가·관리자 회원 관리</span>
                  </label>
                  <label for="UMAccess002" class="custom-checkbox-label">
                    <input type="checkbox" id="UMAccess002" class="custom-checkbox-input" />
                    <span class="custom-checkbox-box"></span>
                    <span class="custom-checkbox-txt">소속 등록 관리</span>
                  </label>
                </div>
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
import FileInputImage from '@/components/InputGroup/FileInputImage.vue'
import SearchInput from '@/components/InputGroup/SearchInput.vue'
import DropDown from '@/components/InputGroup/DropDown.vue'

export default {
  components: {
    FileInputImage,
    SearchInput,
    DropDown
  },
  data() {
    return {
      AffiliationLabels: ['씽크풀', '씽크풀투자자문'],
      selectedAffiliationLabel: '씽크풀',
      AuthorityLabels: ['관리자', '전문가', '유사투자', '투자자문'],
      selectedAuthorityLabel: '관리자',
      selectedFruit: '',
      fruitList: [
        'Apple',
        'aanana',
        'aherry',
        'aate',
        'alderberry',
        'aig',
        'arape',
        'aoneydew'
      ]
    }
  },
  methods: {
    uploadToServer(file) {
      console.log('사용자가 선택한 파일:', file)
      // 여기서 서버로 전송하거나 data에 저장하는 로직 수행
    },
    closeOtherDropdowns(activeRef) {
      // 관리할 드롭다운의 ref 이름 목록
      const dropdownRefs = ['Affiliation', 'Authority', 'statusDrop']

      dropdownRefs.forEach((refName) => {
        // 현재 열린(activeRef) 드롭다운이 아니면 닫기 함수 실행
        if (refName !== activeRef && this.$refs[refName]) {
          // DropDown 컴포넌트 내부의 closeDropdown 메서드를 직접 호출
          this.$refs[refName].closeDropdown()
        }
      })
    },
    // 1. 날짜 기준 변경 핸들러
    handleAffiliationChange(label) {
      this.selectedAffiliationLabel = label
    },

    // 2. 검색 조건 변경 핸들러
    handleAuthorityChange(label) {
      this.selectedAuthorityLabel = label
    },

    // 3. 상태 조건 변경 핸들러
    handleStatusChange(label) {
      this.selectedStatusLabel = label
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
::v-deep .schInput button{
  @apply !h-[46px]
}
::v-deep .dropdown_w{
  @apply w-[375px] h-[46px] flex items-center px-[15px]
}
::v-deep .dropdown_w .menu-item{
  @apply px-2.5 h-10 leading-10
}
.Affiliation {
  @apply flex gap-4 items-center
}
.Affiliation a{
  @apply text-[16px] text-[#3d3d3d] underline
}
.profileContent textarea{
  @apply w-full h-[230px] rounded-[6px] border-[1px] border-[#e3e3e3] p-2.5 text-[18px] text-[#141414]
  placeholder:text-[18px] placeholder:text-[#9E9E9E]
}
.access{
  @apply flex flex-col w-full gap-5
}
.access > div{
  @apply flex flex-col gap-2.5
}
.access > div strong{
  @apply text-[18px] text-[#141414] font-normal
}
.access > div .check{
  @apply flex items-center gap-2.5
}
.custom-checkbox-label{
  @apply flex items-center h-5 gap-1 cursor-pointer
}
.custom-checkbox-txt{
  @apply text-[18px] text-[#5E6367]
}
</style>
