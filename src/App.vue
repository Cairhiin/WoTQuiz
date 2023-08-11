<template>
  <header>
    <Navbar />
  </header>

  <main class="main">
    <Question v-if="!isFinished" :isSuccess="isSuccess" :data="questions[questionId]" :index="questionId"
      @update-score="guessedRight => handleAnswer(guessedRight)" @next-question="() => handleNextQuestion()" />
    <Card v-if="isFinished" header="Wheel of Time Trivia score">You answered {{ score }} out of 10 correctly!</Card>
  </main>
</template>

<script>
import Navbar from './components/navigation/Navbar.vue';
import Card from './components/main/Card.vue';
import Question from './components/main/Question.vue';
import questions from './data/index';
import { shuffle } from './util/index';

export default {
  data() {
    return {
      isSuccess: null,
      score: 0,
      questionId: 0,
      questions: [],
      isFinished: false
    }
  },
  components: {
    Card,
    Navbar,
    Question
  },
  created() {
    this.questions = shuffle(questions).slice(0, 10);
  },
  methods: {
    handleAnswer(guessedRight) {
      if (guessedRight) {
        this.score += 1;
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
        this.isFinished = true;
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
  height: calc(100svh - 6rem);
}
</style>
