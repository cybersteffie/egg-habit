<template>
  <div>
    <habit-item
      v-for="(habit, index) in habits"
      :key="habit.id"
      class="habit-row"
      :index="index"
      :is-habit-deletion-pending="isHabitDeletionPending(habit.id)"
      :disable-actions="!networkOnLine"
      :data="habit"
      @deleteHabit="deleteUserHabit"
    ></habit-item>
  </div>
</template>

<script>
import HabitItem from '@/components/HabitItem'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: { HabitItem },
  computed: {
    ...mapGetters('habits', ['isHabitDeletionPending']),
    ...mapState('habits', ['habits']),
    ...mapState('app', ['networkOnLine'])
  },
  methods: mapActions('habits', ['deleteUserHabit'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.infos-label {
  text-align: center;
}

.habit-row {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 10px auto;
  justify-content: space-between;
}
</style>
