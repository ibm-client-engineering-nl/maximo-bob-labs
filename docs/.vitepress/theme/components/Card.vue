<script setup>
import { computed } from "vue";

const props = defineProps({
    title: { type: String, required: true },
    description: String,
    href: String,
    icon: String,
});

const tag = computed(() => (props.href ? "a" : "div"));
const isExternal = computed(() => /^(https?:)?\/\//.test(props.href || ""));
</script>

<template>
    <component
        :is="tag"
        class="card"
        :class="{ 'is-link': href }"
        :href="href"
        :target="isExternal ? '_blank' : undefined"
        :rel="isExternal ? 'noreferrer' : undefined"
    >
        <span v-if="icon" class="card-icon">{{ icon }}</span>
        <div class="card-body">
            <p class="card-title">{{ title }}</p>
            <p v-if="description" class="card-desc">{{ description }}</p>
            <slot />
        </div>
    </component>
</template>

<style scoped>
.card {
    display: flex;
    gap: 12px;
    padding: 16px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    background: var(--vp-c-bg-soft);
    text-decoration: none;
    height: 100%;
}
.card.is-link {
    transition: border-color 0.25s;
}
.card.is-link:hover {
    border-color: var(--vp-c-brand-1);
}
.card-icon {
    font-size: 24px;
    line-height: 1;
}
.card-title {
    font-weight: 600;
    color: var(--vp-c-text-1);
    margin: 0;
}
.card-desc {
    font-size: 14px;
    color: var(--vp-c-text-2);
    margin: 4px 0 0;
}
</style>
