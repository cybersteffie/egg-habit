<template>
  <div class="page-wrapper">
    <habit-detail v-if="currentHabit" :habit="currentHabit"></habit-detail>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HabitDetail from '@/components/HabitDetail'

export default {
  components: { HabitDetail },
  props: {
    id: String
  },
  computed: {
    ...mapGetters('habits', ['getHabitById']),
    currentHabit() {
      return this.getHabitById(this.id)
    }
  }
}
</script>
