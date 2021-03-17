<template>
  <div class="space-y-8 xl:col-span-1">
    <div>
      <cld-image
        public-id="Brand/icon.png"
        height="80"
        width="80"
        crop="scale"
        fetch-format="auto"
        quality="auto"
        alt="Geek.I.Am"
        title="Geek.I.Am software developer community"
      />
    </div>
    <p class="text-gray-500 text-base">
      Ensuring education is open to everyone
    </p>
    <BrandingFooterMicrobesSocialMedia />
  </div>
</template>

<script>
export default {
  name: 'CompanyDetail',
}
</script>

<style scoped></style>
