<template>
  <div class="flex-shrink-0 flex items-center">
    <div class="block lg:hidden h-300 w-300">
      <cld-image
        :public-id="feature"
        height="300"
        width="300"
        crop="scale"
        fetch-format="auto"
        quality="auto"
        alt="Geek.I.Am"
        title="Geek.I.Am software developer community"
      />
    </div>
    <div class="hidden lg:block h-210 w-210">
      <cld-image
        :public-id="feature"
        height="210"
        width="210"
        alt="Geek.I.Am"
        title="Geek.I.Am software developer community"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardImage',
  props: {
    feature: {
      type: String,
      required: true,
    },
  },
}
</script>
