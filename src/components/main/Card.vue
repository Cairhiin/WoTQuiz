<template>
    <div class="card">
        <div class="card-header">
            <h3>{{ header }}</h3>
        </div>
        <div class="card-content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: "CardComponent",
    props: {
        header: String
    }
}
</script>

<style scoped>
.card {
    --_radius: 5px;
    width: 100%;
    background-color: var(--color-background-highlight-1);
    border-radius: var(--_radius);
    box-shadow: 2px 2px 4px black;
    opacity: 0.8;
}

.card-header {
    padding: 1rem 2rem;
    border-radius: var(--_radius) var(--_radius) 0 0;
    background-color: var(--color-background-highlight-2);
}

.card-content {
    padding: 1rem 2rem;
}
</style>