<template>
  <div class="habit">
    <input
      v-if="!showHabit"
      id="habit-input"
      type="text"
      :value="habitNameToCreate"
      placeholder="this week I will..."
      @input="setHabitNameToCreate($event.target.value)"
      @keyup.enter="addHabit"
    />

    <div v-if="showHabit">
      {{ habitsArr[0].text }}
      <div class="habit-tracker">
        <input
          v-for="day in days"
          id="habit-day"
          :key="day"
          type="checkbox"
          @click="toggleDay(day)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      days: [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
      ],
      habitsArr: [
        {
          text: '',
          show: false,
          days: {
            sunday: false,
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false
          }
        }
      ]
    }
  },
  computed: {
    ...mapGetters('habits', ['isHabitDeletionPending']),
    ...mapState('habits', [
      'habits',
      'habitNameToCreate',
      'habitCreationPending'
    ]),
    ...mapState('app', ['networkOnLine']),
    showHabit() {
      return this.habitsArr[0].show
    },
    allTasksButOneCompleted() {
      const arrayOfVal = Object.values(this.habitsArr[0].days)
      console.log(arrayOfVal)
      let count = 0

      for (let i = 0; i < arrayOfVal.length; i += 1) {
        if (arrayOfVal[i] === true) {
          count += 1
        }
        if (count >= 7) {
          count = 0
          return true
        }
      }
      count = 0
      return false
    }
  },
  methods: {
    ...mapMutations('habits', ['setHabitNameToCreate']),
    ...mapActions('habits', ['triggerAddHabitAction']),
    addHabit(event) {
      console.log('run')
      this.habitsArr[0].text = event.target.value
      this.habitsArr[0].show = true
    },
    toggleDay(dayToToggle) {
      this.habitsArr[0].days[dayToToggle] = true
      this.allComplete()
    },
    removeHabit() {
      Swal.fire({
        title: 'Are you sure you want to delete?',
        text: 'You will lose your goal data!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete'
      }).then(
        (this.habitsArr[0] = {
          text: '',
          show: false,
          days: {
            sunday: false,
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false
          }
        })
      )
    },
    allComplete() {
      if (this.allTasksButOneCompleted) {
        this.habitsArr[0].show = false
        this.triggerAddHabitAction(this.habitsArr[0])
        console.log('allCompleteFunc', this.habitsArr[0].days)
        Swal.fire({
          title: `You're freakin' awesome!`,
          text: 'One week down.',
          icon: 'success'
        }).then(
          (this.habitsArr[0].days = {
            sunday: false,
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false
          })
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.habit {
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  padding: 20px;
}

#habit-input {
  font-size: 20pt;
  text-align: center;
  padding: 10px;
  margin: 20px;
}

#habit-name {
  font-size: 20pt;
  text-align: center;
  margin: 20px;
}

.habit-tracker {
  display: flex;
  flex-direction: row;
  justify-items: center;
}

#delete-habit {
  width: 25px;
  text-align: center;
}

#habit-day {
  -ms-transform: scale(3); /* IE */
  -moz-transform: scale(3); /* FF */
  -webkit-transform: scale(3); /* Safari and Chrome */
  -o-transform: scale(3); /* Opera */
  transform: scale(3);
  margin: 20px;
}
</style>
