<template>
  <div class="item-card dots">
    <div class="product-icons">
      <div class="icon">
        <icon-base
          icon-name="email"
          icon-color="#000000"
          width="12"
          height="12"
        >
          <icon-zoom />
        </icon-base>
      </div>
      <div class="icon">
        <icon-base
          icon-name="email"
          icon-color="#000000"
          width="12"
          height="12"
        >
          <icon-cart />
        </icon-base>
      </div>
    </div>
    <img :src="item.imgs[0]" alt="" class="productCard-img" />
    <h4 class="productCard-title">{{ item.brand }} {{ item.name }}</h4>
    <p class="productCard-text">${{ item.price }}</p>
    <!-- <p>this is a card</p> -->
  </div>
</template>

<script>
import IconBase from '@/components/IconBase.vue'
import IconZoom from '@/components/icons/IconZoom.vue'
import IconCart from '@/components/icons/IconCart.vue'
export default {
  name: 'ProductCard',
  components: {
    IconBase,
    IconZoom,
    IconCart,
  },
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {}
  },
}
</script>
