<template>
  <div class="page-wrapper">
    <AddHabit />
    <img alt="egg" class="egg" src="@/assets/img/happy-yolk.png" @click="changeEgg" />
    <img id="egg-bubble" src="@/assets/img/speech-bubble.png" @click="changeSelectedQuote" />
    <h1 class="egg-text" @click="changeSelectedQuote">{{ showQuote }}</h1>
  
  </div>
</template>

<script>
import AddHabit from '@/components/AddHabit'
// import happy from './assets/img/happy-yolk.png'
// import cute from './assets/img/cute-yolk.png'
// import cry from './assets/img/cry-yolk.png'

export default {
  components: { AddHabit },
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
  },
  data() {
    return {
      // images: [happy, cute, cry],
      selectedQuote: 'YOLK CAN DO IT!',
      quotes: [
        'YOLK CAN DO IT!',
        'YOLK GOT THIS!',
        'YES, YOU CAN!',
        'EGG-CELLENT.'
      ]
    }
  },
  computed: {
    showQuote() {
      return this.selectedQuote
    }
  },
  methods: {
    changeSelectedQuote() {
      const index = this.quotes.indexOf(this.selectedQuote)

      if (index === this.quotes.length - 1) {
        const firstIndex = 0
        this.selectedQuote = this.quotes[firstIndex]
      } else {
        this.selectedQuote = this.quotes[index + 1]
      }
    },
    changeEgg() {}
  }
}
</script>

<style lang="scss" scoped>
// @import '@/theme/variables.scss';

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo {
  margin-bottom: 3rem;
}

.egg {
  animation: MoveUpDown 2s linear infinite;
  position: absolute;
  width: 250px;
  right: auto;
  margin: 0px 0px 50px 0px;
}

.egg:hover {
  animation: Tickle 0.3s linear infinite;
  position: absolute;
  width: 250px;
  right: auto;
  margin: 0px 0px 50px 0px;
}

.egg-text {
  cursor: pointer;
  text-align: center;
  font-size: 20pt;
  max-width: 150px;
  right: auto;
  margin: 0px 0px 363px 0px;
  position: absolute;
  animation: MoveUpDown 2s linear infinite;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

#egg-bubble {
  cursor: pointer;
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

@keyframes Tickle {
  0%,
  100% {
    bottom: 0;
  }
  90% {
    bottom: 20px;
  }
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
</style>
