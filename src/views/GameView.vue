<template>
  <GameMode :levelId="parseInt(levelId)" />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import GameMode from '@/components/GameMode.vue'

const route = useRoute()
const levelId = computed(() => route.params.levelId)
</script>
