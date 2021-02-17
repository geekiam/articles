<template>
  <div class="hidden lg:ml-6 lg:flex lg:space-x-8">
    <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
    <a
      href="https://geekiam.io/articles"
      class="border-green-500 text-gray-900 dark:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
    >
      Articles
    </a>
    <a
      href="https://geekiam.io/tutorials"
      class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
    >
      Tutorials
    </a>
    <a
      href="https://geekiam.io/reviews"
      class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
    >
      Reviews
    </a>
    <a
      href="https://geekiam.careers"
      class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
    >
      Career
    </a>
  </div>
</template>

<script>
export default {
  name: 'TopNavigation',
}
</script>
