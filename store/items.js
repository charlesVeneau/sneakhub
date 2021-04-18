export const state = () => ({
  items: [],
  item: {},
})

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
  SET_ITEM(state, item) {
    state.item = item
  },
}

export const actions = {
  fetchItems({ commit }) {
    const db = this.$firebase.firestore()
    return db
      .collection('sneakers')
      .get()
      .then((items) => {
        commit('SET_ITEMS', items.data)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('Error getting document:' + error)
      })
  },
}
