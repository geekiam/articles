<template>
  <div>
    <post-title :post="article" />
    <div class="prose">
      <nuxt-content class="text-justify" :document="article" />
    </div>
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
