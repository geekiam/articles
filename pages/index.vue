<template>
  <div class="container">
    <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
      <!-- Left sidebar & main wrapper -->
      <div class="flex-1 min-w-0 xl:flex">
        <div
          class="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64"
        >
          <div class="h-full pl-2 pr-2 py-2 sm:pl-6 lg:pl-1 xl:pl-0">
            <!-- Start left column area -->
            <div class="h-full relative" style="min-height: 12rem">
              <div class="absolute inset-0"></div>
            </div>
            <!-- End left column area -->
          </div>
        </div>

        <div class="bg-white lg:min-w-0 lg:flex-1">
          <div class="h-full py-2 px-2 sm:px-2 lg:px-2">
            <!-- Start main area-->
            <div class="relative" style="min-height: 36rem">
              <div class="inset-0 mt-5">
                <list :posts="posts" />
              </div>
            </div>
            <!-- End main area -->
          </div>
        </div>
      </div>

      <div
        class="pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-gray-200 xl:pr-0"
      >
        <div class="h-full pl-6 py-6 lg:w-80">
          <!-- Start right column area -->
          <div class="h-full relative" style="min-height: 16rem">
            <div class="absolute inset-0"></div>
          </div>
          <!-- End right column area -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from '../components/feed/list'
export default {
  components: { List },
  async asyncData({ $content, params }) {
    const posts = await $content('articles', params.slug)
      .only(['info', 'tags', 'slug'])
      .sortBy('info.publishDate', 'desc')
      .fetch()

    return {
      posts,
    }
  },
}
</script>
