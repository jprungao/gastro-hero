import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      products: [
        {
          "sku": "SH900",
          "price": 200,
          "special_price": null,
          "name": "Saladette Eco",
          "tax_rate": 19,
          "delivery_time": 4
        },
        {
          "sku": "SC-278",
          "price": 180,
          "special_price": 149,
          "name": "Getränkekühlschrank Profi",
          "tax_rate": 19,
          "delivery_time": 2
        }
      ]
    }
  },
  getters: {
    getSingleProduct: (state) => (sku) => {
        return state.products.find(product => product.sku === sku)
    }
  }
})