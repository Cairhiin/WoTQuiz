<template>
    <Card v-if="data" :header="`Question ${index + 1} of 10: ${data.title}`" :isSuccess="isSuccess">
        <div class="answers">
            <ul v-for="(answer, index) in data.answers" :key="index">
                <li :class="`answer ${selectedId !== answer.id ? '' : isSuccess ? 'right' : 'wrong'}`"
                    @click="selectAnswer(answer.id)">
                    {{ `${index + 1} ${answer.name}` }}
                </li>
            </ul>
        </div>
        <div class="button-bar">
            <Button v-if="selectedId !== null" :onClick="handleNextQuestion" variant="primary" size="small">NEXT</Button>
        </div>

    </Card>
</template>

<script>
import Card from './Card.vue';
import Button from './Button.vue';

export default {
    name: "QuestionComponent",
    data() {
        return {
            selectedId: null
        }
    },
    components: {
        Card,
        Button
    },
    props: {
        data: Object,
        isSuccess: Boolean,
        index: Number
    },
    methods: {
        selectAnswer(id) {
            if (!this.selectedId) {
                this.selectedId = id;
                if (id === this.data.correctId) this.$emit('updateScore', true);
                else this.$emit('updateScore', false);
            }
        },
        handleNextQuestion() {
            this.$emit('nextQuestion');
            this.selectedId = null;
        }
    },
    emits: ['updateScore', 'nextQuestion']
}
</script>

<style scoped>
.button-bar {
    margin-block: 1rem;
}

.answers>ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.answers>ul>li {
    padding: 0.5rem;
    position: relative;
    border-radius: 4px;
}

.answers .answer:hover {
    color: var(--color-text-highlight-2);
    cursor: pointer;
}

.right {
    border: 2px solid green;
}

.right::after {
    content: 'Correct';
    position: absolute;
    right: 1rem;
    text-transform: uppercase;
    color: green;
}

.wrong {
    border: 2px solid red;
}

.wrong::after {
    content: 'Wrong';
    position: absolute;
    right: 1rem;
    text-transform: uppercase;
    color: red;
}
</style>