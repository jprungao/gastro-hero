<script>
import Product from './productItem.vue'
export default {
    components: {
        Product
    },
    data() {
        return {
            products: []
        }
    },
    mounted() {
        this.products = this.$store.state.products
    }
}
</script>

<template>
    <div class="products">
        <Product v-for="product in products" :product="product" />
    </div>
</template>

<style scoped>
.products {
    display: flex;
    padding: 1rem;
}
</style>