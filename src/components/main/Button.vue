<template>
    <button @click="onClick" :class="`${variant} ${size} ${outline}`">
        <slot />
    </button>
</template>

<script>
export default {
    name: "ButtonComponent",
    data() {
        return {

        }
    },
    props: {
        onClick: { type: Function, required: true },
        variant: String,
        size: String,
        outline: String
    },
    emits: ['handleClick']
}
</script>

<style scoped>
button {
    border: none;
    padding: 1em 2em;
    border-radius: 2px;
    font-weight: 700;
    text-transform: capitalize;
    position: relative;
    isolation: isolate;
    cursor: pointer;
}

button::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    transition: opacity 0.5s ease-in;
    opacity: 0;
}

button:hover::before,
button:focus::before {
    opacity: 1;
}

button.primary::before {
    background-image: linear-gradient(90deg, blueviolet, skyblue);
}

.primary {
    background-image: linear-gradient(90deg, skyblue, blueviolet);
    color: white;
}

.secondary {
    background: linear-gradient(90deg, orange, red);
    color: white;
}

.normal {
    font-size: var(--step-0);
}

.small {
    font-size: var(--step--1);
}

.large {
    font-size: var(--step-1);
}

.outline {
    background-color: transparent;
    border: 1px solid blueviolet;
}
</style>