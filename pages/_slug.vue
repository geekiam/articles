<template>
  <div>
    <h1 v-html="article.info.title"></h1>

    <nuxt-content :document="article"></nuxt-content>

    <!--    <nuxt-content-->
    <!--      v-for="(part, index) in article.content"-->
    <!--      :key="index"-->
    <!--      :document="part.body"-->
    <!--    ></nuxt-content>-->
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
