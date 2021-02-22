<template>
  <NuxtLink :to="post.slug">
    <div class="md:flex shadow-lg mx-6 md:mx-auto max-w-lg md:max-w-2xl h-64">
      <card-image :feature="post.info.feature" />
      <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
        <div class="flex items-center">
          <span
            class="text-sm text-green-800 font-medium mr-auto"
            v-html="post.info.title"
          ></span>
        </div>
        <p class="text-xs text-gray-700 mt-4" v-html="post.info.summary"></p>
        <div
          class="flex items-center justify-start mt-4 top-auto text-green-700"
        >
          <tags :tags="post.tags" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'Card',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
