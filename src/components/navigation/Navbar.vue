<template>
    <nav class="nav">
        <h1>Wheel of Time Quiz</h1>
        <div class="right-menu">
            <font-awesome-icon icon="fa-solid fa-sun" />
            <div class="theme-slider">
                <input type="checkbox" id="theme-select" v-model="theme" />
                <label for="theme-select"></label>
            </div>
            <font-awesome-icon icon="fa-solid fa-moon" />
        </div>
    </nav>
</template>

<script>
export default {
    name: "MainNav",
    data() {
        return { theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches }
    },
    watch: {
        theme(newTheme) {
            this.setTheme(newTheme);
        }
    },
    methods: {
        setTheme(theme) {
            if (theme === true) {
                document.documentElement.style.setProperty('--color-background', 'var(--color-dark-400)');
                document.documentElement.style.setProperty('--color-text', 'var(--color-light-400)');
                document.documentElement.style.setProperty('--color-border', 'var(--color-dark-500)');
                document.documentElement.style.setProperty('--color-background-highlight-1', 'var(--color-dark-300)');
                document.documentElement.style.setProperty('--color-background-highlight-2', 'var(--color-dark-200)');
                document.documentElement.style.setProperty('--color-text-highlight-1', 'var(--color-light-500)');
                document.documentElement.style.setProperty('--color-text-highlight-2', 'var(--color-light-600)');
            }

            if (theme === false) {
                document.documentElement.style.setProperty('--color-background', 'var(--color-light-400)');
                document.documentElement.style.setProperty('--color-text', 'var(--color-dark-400)');
                document.documentElement.style.setProperty('--color-border', 'var(--color-light-500)');
                document.documentElement.style.setProperty('--color-background-highlight-1', 'var(--color-light-500)');
                document.documentElement.style.setProperty('--color-background-highlight-2', 'var(--color-light-600)');
                document.documentElement.style.setProperty('--color-text-highlight-1', 'var(--color-dark-300)');
                document.documentElement.style.setProperty('--color-text-highlight-2', 'var(--color-dark-200)');
            }
        }
    }
}
</script>

<style scoped>
.nav {
    background-color: var(--color-background);
    padding-block: 0.25rem;
    padding-inline: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--color-border);
    font-size: var(--step-1);
    transition: background-color 200ms ease-in;
}

h1 {
    text-transform: uppercase;
    font-weight: 700;
    background: linear-gradient(90deg, aqua, lightblue, cornflowerblue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.theme-slider {
    --_sliderWidth: 40px;
    --_sliderHeight: 20px;
    --_toggleSize: 16px;
    position: relative;
    display: inline-block;
    width: var(--_sliderWidth);
    height: var(--_sliderHeight);
}

.theme-slider input[type="checkbox"] {
    opacity: 0;
    width: 0;
    height: 0;
}

.theme-slider label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ccc;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.theme-slider label::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: var(--_toggleSize);
    height: var(--_toggleSize);
    background-color: #fff;
    border-radius: 50%;
    transition: left 0.3s ease;
}

.theme-slider input:checked+label {
    background-color: black;
}

.theme-slider input:checked+label::after {
    left: calc(100% - 2px - var(--_toggleSize));
}

.right-menu {
    display: flex;
    gap: 0.5rem;
}
</style>