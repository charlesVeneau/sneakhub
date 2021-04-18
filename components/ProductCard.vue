<template>
  <div class="item-card dots">
    <img :src="item.imgs[0]" alt="" class="productCard-img" />
    <h4 class="productCard-title">{{ item.brand }} {{ item.name }}</h4>
    <p class="productCard-text">${{ item.price }}</p>
    <!-- <p>this is a card</p> -->
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
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
