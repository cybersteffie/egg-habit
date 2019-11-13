<template>
  <div class="page-wrapper">
    <HabitList class="habit-list"></HabitList>
  </div>
</template>

<script>
import HabitList from '@/components/HabitList'

export default {
  components: { HabitList }
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
