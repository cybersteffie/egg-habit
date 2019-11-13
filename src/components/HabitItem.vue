<template>
  <div class="habit-item">
    <div class="habit-link" :to="{ name: 'habit', params: { id: data.id } }">
      <h1>{{ data.name }}</h1>
    </div>
    <div
      v-if="!disableActions"
      class="delete-btn"
      @click="$emit('deleteHabit', data.id)"
    >{{ isHabitDeletionPending ? 'x' : 'x' }}</div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    index: Number,
    isHabitDeletionPending: Boolean,
    disableActions: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.habit-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  width: 100%;

  .delete-btn {
    cursor: pointer;
    padding: 0px 5px;
    border: 1px solid;
    display: inline-block;
    border-radius: 3px;
    margin-left: 10px;
    color: grey;
    border-color: grey;
  }
}
</style>
