<template>
  <div class="md:grid md:grid-cols-2 md:gap-8">
    <div>
      <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
        Interests
      </h3>
      <ul class="mt-4 space-y-4">
        <li>
          <a
            href="http://articles.geekiam.io"
            class="text-base text-gray-500 hover:text-gray-900"
          >
            Articles
          </a>
        </li>

        <li>
          <a
            href="https://geekiam.training"
            class="text-base text-gray-500 hover:text-gray-900"
          >
            Tutorials
          </a>
        </li>

        <li class="hidden">
          <a
            href="https://geekiam.courses"
            class="text-base text-gray-500 hover:text-gray-900"
          >
            Courses
          </a>
        </li>

        <li>
          <a
            href="https://geekiam.reviews"
            class="text-base text-gray-500 hover:text-gray-900"
          >
            Reviews
          </a>
        </li>
        <li class="hidden">
          <a
            href="https://geekiam.news"
            class="text-base text-gray-500 hover:text-gray-900"
          >
            News
          </a>
        </li>
      </ul>
    </div>
    <div class="mt-12 md:mt-0">
      <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
        Support
      </h3>
      <ul class="mt-4 space-y-4">
        <li class="hidden">
          <a href="#" class="text-base text-gray-500 hover:text-gray-900">
            Pricing
          </a>
        </li>

        <li class="hidden">
          <a href="#" class="text-base text-gray-500 hover:text-gray-900">
            Documentation
          </a>
        </li>

        <li class="hidden">
          <a href="#" class="text-base text-gray-500 hover:text-gray-900">
            Guides
          </a>
        </li>

        <li class="hidden">
          <a href="#" class="text-base text-gray-500 hover:text-gray-900">
            API Status
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LearnSection',
}
</script>
