<template>
  <div class="searchTable">
    <table width="100%">
      <colgroup>
        <col width="107" />
        <col width="*" />
      </colgroup>
      <tbody>
        <tr>
          <th><span>검색기간</span></th>
          <td>
            <DropDown ref="dateDrop" :items="dateLabels" :initial-label="selectedDateLabel" :placeholder="'선택'" @change="handleDateChange" @opened="closeOtherDropdowns('dateDrop')" />
            <DateInput />
            <span>~</span>
            <DateInput />
            <ResetBtn />
          </td>
        </tr>

        <tr>
          <th><span>검색조건</span></th>
          <td>
            <DropDown ref="channelDrop" :items="channelLabels" :initial-label="selectedChannelLabel" :placeholder="'결제채널전체'" @change="handleChannelChange" @opened="closeOtherDropdowns('channelDrop')" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DateInput from '@/components/InputGroup/DateInput.vue'
import DropDown from '@/components/InputGroup/DropDown.vue'
import ResetBtn from '@/components/InputGroup/ResetBtn.vue'

export default {
  components: {
    DropDown,
    DateInput,
    ResetBtn
  },
  data() {
    return {
      dateLabels: ['결제일시'],
      selectedDateLabel: '결제일시',

      channelLabels: ['결제채널전체', 'AOS', 'iOS', '고객센터', 'TP-PG'],
      selectedChannelLabel: '결제채널전체'
    }
  },
  methods: {
    closeOtherDropdowns(activeRef) {
      const dropdownRefs = ['dateDrop', 'channelDrop']
      dropdownRefs.forEach((refName) => {
        if (refName !== activeRef && this.$refs[refName]) {
          this.$refs[refName].closeDropdown()
        }
      })
    },
    handleDateChange(label) {
      this.selectedDateLabel = label
    },
    handleChannelChange(label) {
      this.selectedChannelLabel = label
    }
  }
}
</script>

<style scoped>
.searchTable .dropdown_w {
  @apply min-w-[133px] h-10 p-2.5 mr-2.5;
}
.searchTable .dropdown_w::v-deep button {
  @apply h-5 leading-5 text-[16px] text-[#5E6367];
}
.searchTable .dropdown_w::v-deep ul {
  @apply min-w-[153px] w-auto whitespace-nowrap left-auto right-0;
}
.searchTable .dropdown_w::v-deep ul li {
  @apply h-8 leading-8 px-2.5 block;
}
.searchTable tbody td {
  @apply flex items-center;
}
.searchTable tbody td span {
  @apply mx-[6px];
}
.searchTable .dateArray {
  @apply mx-2.5;
}
.searchTable tbody td .date::v-deep .customDate {
  @apply !p-[6px_12px];
}
button.reset{
  @apply ml-2.5
}
</style>
