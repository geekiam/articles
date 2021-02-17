import { mount } from '@vue/test-utils'
import SiteLogo from '@/components/branding/header/microbes/SiteLogo.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SiteLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
