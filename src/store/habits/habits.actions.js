import UserHabitsDB from '@/firebase/user-habits-db'

export default {
  /**
   * Fetch habits of current loggedin user
   */
  getUserHabits: async ({ rootState, commit }) => {
    const userHabitDb = new UserHabitsDB(rootState.authentication.user.id)

    const habits = await userHabitDb.readAll()
    commit('setHabits', habits)
  },

  /**
   * Create a habit for current loggedin user
   */
  createUserHabit: async ({ commit, rootState }, habit) => {
    const userHabitDb = new UserHabitsDB(rootState.authentication.user.id)

    commit('setHabitCreationPending', true)
    const createdHabit = await userHabitDb.create(habit)
    commit('addHabit', createdHabit)
    commit('setHabitCreationPending', false)
  },

  /**
   * Create a new habit for current loggedin user and reset habit name input
   */
  triggerAddHabitAction: ({ dispatch, state, commit }) => {
    if (state.habitNameToCreate === '') return

    const habit = {
      name: state.habitNameToCreate
    }
    commit('setHabitNameToCreate', '')
    dispatch('createUserHabit', habit)
  },

  /**
   * Delete a user habit from its id
   */
  deleteUserHabit: async ({ rootState, commit, getters }, habitId) => {
    if (getters.isHabitDeletionPending(habitId)) return

    const userHabitsDb = new UserHabitsDB(rootState.authentication.user.id)

    commit('addHabitDeletionPending', habitId)
    await userHabitsDb.delete(habitId)
    commit('removeHabitById', habitId)
    commit('removeHabitDeletionPending', habitId)
  }
}
