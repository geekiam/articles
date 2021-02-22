<template>
  <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
    <h1 v-html="article.info.title"></h1>

    <nuxt-content
      class="prose prose-md text-justify"
      :document="article"
    ></nuxt-content>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },
}
</script>
