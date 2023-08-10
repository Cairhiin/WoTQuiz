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
}

button:hover,
button:focus {
    background-position: 200% 100%;
    transition: background-position 300ms ease-in;
    cursor: pointer;
}

.primary {
    background: linear-gradient(90deg, skyblue, blueviolet);
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