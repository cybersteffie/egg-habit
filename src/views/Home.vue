<template>
  <div class="page-wrapper">
    <h1 class="home-page-title">YOU CAN DO IT</h1>
    <img alt="logo-bento" class="logo" src="@/assets/img/bento-starter.svg" />

    <input
      v-if="!habits[0].show"
      type="text"
      name="input-habit"
      placeholder="TYPE A HABIT"
      @keyup.enter="addHabit"
    />

    <div v-if="habits[0].show" class="habit">
      <div id="habit-name">{{ habits[0].text }}</div>
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

    <!-- <button class="swal2-confirm swal2-styled" @click="createGoal">
      CREATE A GOAL
    </button>-->
  </div>
</template>

<script>
import Swal from 'sweetalert2'

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
      habits: [
        {
          text: 'meow',
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
    allTasksButOneCompleted() {
      const arrayOfVal = Object.values(this.habits[0].days)
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
    addHabit(event) {
      this.habits[0].text = event.target.value
      this.habits[0].show = true
    },
    toggleDay(dayToToggle) {
      this.habits[0].days[dayToToggle] = true
      this.allComplete()
    },
    removeHabit() {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will lose your goal data!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout'
      })
    },
    allComplete() {
      if (this.allTasksButOneCompleted) {
        this.habits[0].show = false
        console.log('allCompleteFunc', this.habits[0].days)
        Swal.fire({
          title: `You're freakin' awesome!`,
          text: 'One week down.',
          icon: 'success'
        }).then(
          (this.habits[0].days = {
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
  },
  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `egg-habit`,
          id: 'desc'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '@/theme/variables.scss';

.habit {
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  padding: 0px;
}

.habit-tracker {
  display: flex;
  flex-direction: row;
}

#habit-day {
  width: 40px !important;
  height: 40px !important;
  margin: 0px;
  border: 2px black;
}

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin-bottom: 3rem;
  }

  .home-page-title {
    text-align: center;
  }

  .documentation-link {
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: #5d6788;
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    text-decoration: none;
    width: fit-content;
    font-weight: 500;
  }
}
</style>
