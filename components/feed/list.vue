<template>
  <ul class="relative z-0 divide-y divide-gray-200 border-b border-gray-200">
    <li
      v-for="post of posts"
      :key="post.slug"
      class="relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
    >
      <card :post="post" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped></style>
