<template>
  <div class="page-wrapper">
    <input
      v-if="!showHabit"
      id="habit-input"
      type="text"
      name="input-habit"
      placeholder="this week I will..."
      @keyup.enter="addHabit"
    />
    <div v-if="showHabit" class="habit">
      <div id="habit-name">{{ habits[0].text }}</div>
      <!-- <button id="delete-habit" value="x" @click="removeHabit">x</button> -->
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

    <img alt="egg" class="egg" src="@/assets/img/happy-yolk.png" />
    <img id="egg-bubble" src="@/assets/img/speech-bubble.png" />
    <h1 class="egg-text">YOLK CAN DO IT!</h1>
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
    showHabit() {
      return this.habits[0].show
    },
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
        title: 'Are you sure you want to delete?',
        text: 'You will lose your goal data!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete'
      }).then(
        (this.habits[0] = {
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
        inner: 'home'
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

.egg {
  animation: MoveUpDown 2s linear infinite;
  position: absolute;
  width: 250px;
  left: auto;
  margin: 0px 0px 50px 0px;
}

.egg-text {
  text-align: center;
  font-size: 20pt;
  max-width: 150px;
  left: auto;
  margin: 0px 0px 363px 0px;
  position: absolute;
  animation: MoveUpDown 2s linear infinite;
}

#egg-bubble {
  text-align: center;
  left: auto;
  margin: 0px 0px 300px 0px;
  width: 200px;
  position: absolute;
  animation: MoveUpDown 2s linear infinite;
}

@keyframes MoveUpDown {
  0%,
  100% {
    bottom: 0;
  }
  50% {
    bottom: 30px;
  }
}

.habit {
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  padding: 0px;
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
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
  margin: 10px;
}

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin-bottom: 3rem;
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
