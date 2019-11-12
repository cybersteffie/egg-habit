import GenericDB from './generic-db'

export default class HabitsDB extends GenericDB {
  constructor(userId) {
    super(`users/${userId}/habits`)
  }

  // Here you can extend UserProductsDB with custom methods
}
