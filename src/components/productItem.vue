<script>
export default {
    props: {
        product: {}
    },
    methods: {
        goToProduct(sku) {
            this.$router.push({ path: `/product/${sku}` })
        }
    },
    computed: {
        calculatedTaxRate() {
            return 0
        }
    }
}
</script>

<template>
    <div class="product">
        <img src="../assets/logo.png" />
        <span class="name">
            {{ product.name }}
        </span>
        <div class="pricing">
            <div class="price">
                <span>Regular price:</span>
                <span>€{{ product.price }}</span>
            </div>
            <div class="tax">
                <div>
                    <span>VAT included:</span>
                    <span>{{ calculatedTaxRate }}</span>
                </div>
            </div>
        </div>
        <button type="button" @click="goToProduct(product.sku)">
            view
        </button>
    </div>
</template>

<style scoped>
img {
    display: block;
    width: 70px;
}

.pricing .price {
    display: flex;
    justify-content: space-between;
}

.pricing span {
    opacity: 0.7;
    font-size: 13px;
}

.pricing .tax {
    display: flex;
    width: 100%;
    justify-content: flex-end;
}

.name {
    font-size: 12px;
    font-weight: bold;
    display: block;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
}

.product {
    border: 1px solid #d9dee3;
    border-radius: 4px;
    box-sizing: border-box;
    height: 100%;
    max-width: 100%;
    padding: 15px;
    transition: .2s ease;
    width: 200px;
    height: 250px;
    margin-right: 1rem;
}

button {
    background: #fff;
    border: 2px solid #7a0;
    border-radius: 2px;
    color: #7a0;
    font-size: 16px;
    font-weight: 700;
    min-height: 42px;
    min-width: 42px;
    padding: 7px 15px;
    transition: .2s ease;
    font-size: 16px;
    min-height: 42px;
    min-width: 42px;
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;
}
</style>