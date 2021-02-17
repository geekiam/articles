<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <footer class="bg-white" aria-labelledby="footerHeading">
    <h2 id="footerHeading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <company-detail />
        <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <learn-section />
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3
                class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
              >
                Company
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <a
                    href="https://geekiam.io/about"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="https://geekiam.blog"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    Blog
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    Contribute
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3
                class="text-sm font-semibold text-gray-400 tracking-wider uppercase"
              >
                Legal
              </h3>
              <ul class="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    Claim
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    Privacy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="text-base text-gray-500 hover:text-gray-900"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 pt-8">
        <p class="text-base text-gray-400 xl:text-center">
          &copy; 2019 - {{ new Date().getFullYear() }} Geek.I.Am . All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
}
</script>
