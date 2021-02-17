<template>
  <div
    class="min-w-screen min-h-screen flex items-center p-5 lg:p-20 overflow-hidden relative"
  >
    <div
      class="min-h-full min-w-full rounded-3xl shadow-xl p-10 lg:p-20 text-gray-800 relative items-center text-center md:text-left border-2"
    >
      <div class="mx-w-full items-center text-center mb-4">
        <span class="text-4xl text-green-800"
          >Well this is rather embarrassing!
        </span>
      </div>

      <div class="flex-1 md:flex sm:flex-col">
        <div class="lg:flex lg:flex-row sm:flex-col">
          <div class="md:w-1/2 sm:w-full">
            <cld-image
              public-id="error pages/error-page.svg"
              rounded
              height="461"
              width="563"
              alt="Geek.I.Am"
              title="Geek.I.Am software developer community"
            />
          </div>
          <div class="md:w-1/2 sm:w-full">
            <div
              v-if="error.statusCode === 404"
              class="mb-10 md:mb-20 text-gray-600 font-light px-10 py-2 prose prose-sm"
            >
              <p class="mb-4">
                This is either embarrassing for you or for us. We're going to
                take the responsibility and ownership either way!
              </p>
              <p class="mb-4">
                <strong>The page you requested cannot be found!</strong>
              </p>
              <p class="mb-4">
                What this means is that we have either deleted the page or moved
                it somewhere else! Perhaps there is the the slightest
                possibility that you have mis-typed or entered an incorrect Url
              </p>
              <p class="mb-4">
                Click the button below and we'll pretend this never happened.
              </p>
            </div>
            <div
              v-else
              class="mb-10 md:mb-20 text-gray-600 font-light prose prose-sm"
            >
              <p><strong>It's not you, it's us!</strong></p>
              <p>
                Unfortunately all we can say at this point is a blank vanilla
                statement that
              </p>
              <p class="text-bold text-xl">
                <strong>An error occurred</strong>
              </p>

              <p>
                Rest assured we have dispatched our hardest working code monkey
                to fix it.
              </p>
            </div>
            <div class="mb-20 md:mb-0">
              <a
                href="https://geekiam.io"
                class="text-md font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-green-500 hover:text-green-600"
              >
                Go Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
