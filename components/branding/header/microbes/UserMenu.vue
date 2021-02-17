<template>
  <!--
                             Profile dropdown panel, show/hide based on dropdown state.

                             Entering: "transition ease-out duration-100"
                               From: "transform opacity-0 scale-95"
                               To: "transform opacity-100 scale-100"
                             Leaving: "transition ease-in duration-75"
                               From: "transform opacity-100 scale-100"
                               To: "transform opacity-0 scale-95"
                           -->
  <div
    class="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="user-menu"
  >
    <a
      href="#"
      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      role="menuitem"
      >Your Profile</a
    >
    <a
      href="#"
      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      role="menuitem"
      >Settings</a
    >
    <a
      href="#"
      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      role="menuitem"
      >Sign out</a
    >
  </div>
</template>
