<template>
  <div class="flex-shrink-0 flex items-center">
    <a href="https://geekiam.io" target="_self" title="Geek.I.Am">
      <div class="block lg:hidden h-50 w-50">
        <cld-image
          public-id="Brand/icon.png"
          height="50"
          width="50"
          crop="scale"
          fetch-format="auto"
          quality="auto"
          alt="Geek.I.Am"
          title="Geek.I.Am software developer community"
        />
      </div>
      <div class="hidden lg:block h-45 w-200">
        <cld-image
          public-id="Brand/logo_full.svg"
          height="45"
          width="200"
          alt="Geek.I.Am"
          title="Geek.I.Am software developer community"
        />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SiteLogo',
}
</script>
