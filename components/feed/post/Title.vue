<template>
  <div class="mt-4 mb-4 text-green-700">
    <div
      class="text-bold text-3xl sm:text-3xl leading-tight mb-1 sm:mb-2n font-sans"
    >
      <h1 class="capitalize" v-html="post.info.title"></h1>
    </div>
    <div class="flex flex-row mb-3 mt-3 text-sm">
      <FeedPostMicrobesPublishDate :publish-date="post.info.publishDate" />
      <FeedPostMicrobesAuthor :author="post.info.author" />
      <FeedPostMicrobesReadTime :time-to-read="post.readTime.text" />
    </div>
    <FeedPostMicrobesTags :tags="post.tags" />
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
