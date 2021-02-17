<template>
  <button
    id="user-menu"
    class="hidden bg-green-700 bg-white rounded-full text-white flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    aria-haspopup="true"
    @click="showUserMenu"
  >
    <span class="sr-only">Open user menu</span>
    <svg
      class="w-8 h-8 rounded-full"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'UserImage',
  methods: {
    showUserMenu() {
      this.$emit('showUserMenu')
    },
  },
}
</script>
