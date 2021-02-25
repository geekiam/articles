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
    // eslint-disable-next-line no-console
    console.log(article)
    return { article }
  },
  head() {
    return {
      title: this.article.info.title,
      meta: [
        { key: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.info.title,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.article.info.description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.info.summary,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://articles.geekiam.io/${this.article.twitter.cardImage.image}`,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: `https://geekiam.io/${this.article.twitter.cardImage.image}`,
        },
        { hid: 'keywords', name: 'keywords', content: this.keywords },
        {
          hid: 'article:published_time',
          property: 'article:published_time',
          content: this.article.info.publishDate,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.info.title,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.info.summary,
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: `https://twitter.com/${this.article.twitter.site}`,
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: `https://twitter.com/${this.article.twitter.username}`,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `https://articles.geekiam.io/twitter/${this.article.twitter.cardImage.image}.png`,
        },
      ],
      script: [{ src: 'https://platform.twitter.com/widgets.js', async: true }],
      link: [
        {
          rel: 'canonical',
          href: `https://articles.geekiam.io/${this.article.slug}`,
        },
      ],
    }
  },
  computed: {
    keywords() {
      let keywords = ''
      for (const i in this.article.info.keywords) {
        keywords = keywords.concat(`${this.article.info.keywords[i]},`)
      }
      return keywords.replace(/(^\s*,)|(,\s*$)/g, '')
    },
  },
}
</script>
