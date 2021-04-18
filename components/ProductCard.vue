<template>
  <div class="item-card">
    <h4>{{ item.brand }}</h4>
    <p>{{ item.name }}</p>
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
