<template>
  <header class="sticky">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex px-2 lg:px-0">
          <site-logo />
          <top-navigation />
        </div>
        <div
          class="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end"
        >
          <search-box />
        </div>
        <div class="flex items-center lg:hidden">
          <burger-menu />
        </div>
        <div class="hidden lg:ml-4 lg:flex lg:items-center">
          <notification-bell />

          <!-- Profile dropdown -->
          <div class="ml-4 relative flex-shrink-0">
            <div>
              <user-image />
            </div>
            <user-menu v-show="showUserMenu" />
          </div>
        </div>
      </div>
    </div>
    <drop-down-menu />
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      showUserMenu: false,
    }
  },
}
</script>
