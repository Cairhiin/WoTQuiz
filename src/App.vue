<template>
  <header>
    <Navbar />
  </header>

  <main class="main">
    <Question :isSuccess="isSuccess" :data="questions[questionId]"
      @update-score="guessedRight => handleAnswer(guessedRight)" @next-question="() => handleNextQuestion()" />
    <div class="score">Your score: {{ score }}</div>
  </main>
</template>

<script>
import Navbar from './components/navigation/Navbar.vue'
import Question from './components/main/Question.vue';
import questions from './data/index';

export default {
  data() {
    return {
      isSuccess: null,
      score: 0,
      questionId: 0,
      questions: []
    }
  },
  components: {
    Navbar,
    Question
  },
  created() {
    this.questions = questions;
  },
  methods: {
    handleAnswer(guessedRight) {
      if (guessedRight) {
        this.score += 5;
        this.isSuccess = true;
      } else {
        this.isSuccess = false;
      }
    },
    handleNextQuestion() {
      if (this.questionId < this.questions.length - 1) {
        this.questionId++;
        this.isSuccess = null;
      } else {
        console.log("Final score: ", this.score);
      }
    }
  }
}
</script>

<style scoped>
.main {
  width: 75ch;
  margin: 0 auto;
  display: grid;
  place-items: center;
  padding: 5rem;
  height: calc(100svh - 5rem);
}
</style>
