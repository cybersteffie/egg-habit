<template>
  <div class="habit-detail">
    <h1>{{ habit.name }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    habit: Object
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.habit-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
