<template>
  <ul class="relative z-0 divide-y divide-gray-200 border-b border-gray-200">
    <li
      v-for="post of posts"
      :key="post.slug"
      class="relative pl-2 pr-2 py-1 hover:bg-gray-50"
    >
      <FeedPostCard :post="post" />
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
