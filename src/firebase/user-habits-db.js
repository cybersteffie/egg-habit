import GenericDB from './generic-db'

export default class UserHabitsDB extends GenericDB {
  constructor(userId) {
    super(`users/${userId}/habits`)
  }

  // Here you can extend UserHabitsDB with custom methods
}