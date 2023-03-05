import { computed } from 'vue'
import { useStore } from 'vuex'

export const useCommonCartEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, num })
  }
  const productList = computed(() => {
    const tmpProductList = cartList[shopId]?.productList || []
    return tmpProductList
  })
  const shopName = computed(() => {
    return cartList[shopId]?.shopName || ''
  })
  return { cartList, productList, shopName, changeCartItemInfo }
}
