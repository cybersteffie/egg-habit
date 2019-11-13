import { find } from 'lodash'

export default {
  /**
   * Check if a habit has deletion pending
   */
  isHabitDeletionPending: state => habitId =>
    state.habitDeletionPending.includes(habitId),

  /**
   * Get habit by id
   */
  getHabitById: state => habitId =>
    find(state.habits, habit => habit.id === habitId)
}
