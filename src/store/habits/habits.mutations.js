export default {
  /* Habit input name */
  setHabitNameToCreate: (state, habitNameToCreate) =>
    (state.habitNameToCreate = habitNameToCreate),

  /* Habits */
  setHabits: (state, habits) => (state.habits = habits),
  addHabit: (state, habit) => state.habits.push(habit),
  removeHabitById: (state, habitId) => {
    const index = state.habits.findIndex(habit => habit.id === habitId)
    state.habits.splice(index, 1)
  },

  /* Habits deletion */
  addHabitDeletionPending: (state, habitId) =>
    state.habitDeletionPending.push(habitId),
  removeHabitDeletionPending: (state, habitId) => {
    const index = state.habits.findIndex(habit => habit.id === habitId)
    state.habitDeletionPending.splice(index, 1)
  },

  /* Habit creation */
  setHabitCreationPending: (state, value) =>
    (state.habitCreationPending = value)
}
