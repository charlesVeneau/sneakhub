<template>
  <div>
    <product-card
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      data-index="index"
    />
    <!-- <product-card :items="items" /> -->
  </div>
</template>

<script>
import { fireDb } from '~/plugins/firebase.js'
import ProductCard from '~/components/ProductCard.vue'
export default {
  components: {
    ProductCard,
  },
  async asyncData({ app, params, error }) {
    const itemsList = []
    const ref = fireDb.collection('sneakers')
    await ref
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          itemsList.push(doc.data())
        })
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
    return {
      items: itemsList,
    }
  },
  data() {
    return {
      //   readSuccessful: false,
    }
  },
}
</script>
