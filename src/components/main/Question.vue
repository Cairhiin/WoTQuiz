<template>
    <Card v-if="data" :header="data.title" :isSuccess="isSuccess">
        <div class="answers">
            <ul v-for="(answer, index) in data.answers" :key="index">
                <li :class="`answer ${selectedId !== answer.id ? '' : isSuccess ? 'right' : 'wrong'}`"
                    @click="selectAnswer(answer.id)">
                    {{ `${index + 1} ${answer.name}` }}
                </li>
            </ul>
        </div>
        <Button v-if="selectedId !== null" :onClick="handleNextQuestion" variant="primary" size="small">NEXT</Button>
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
        isSuccess: Boolean
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
.answers>ul {
    list-style: none;
}

.answers .answer:hover {
    color: var(--color-text-highlight-2);
    cursor: pointer;
}

.right {
    background: green;
}

.wrong {
    background-color: red;
}
</style>