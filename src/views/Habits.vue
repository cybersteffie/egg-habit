<template>
  <div class="page-wrapper">
    <AddHabit></AddHabit>
    <HabitList class="habit-list"></HabitList>
  </div>
</template>

<script>
import HabitList from '@/components/HabitList'
import AddHabit from '@/components/AddHabit'

export default {
  components: { HabitList, AddHabit }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.habits-page-title {
  text-align: center;
  margin-bottom: 60px;
}
</style>
