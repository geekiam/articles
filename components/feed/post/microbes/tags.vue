<template>
  <div class="mt-4 mb-4 px-2">
    <ul class="grid grid-cols-3 gap-1">
      <li v-for="tag in tags" :key="tag.id" class="col-span-1 text-sm">
        <nuxt-link
          :to="{ name: 'tags-slug', params: { slug: tag } }"
          class="lowercase"
          v-html="`#${tag}`"
        >
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped></style>
