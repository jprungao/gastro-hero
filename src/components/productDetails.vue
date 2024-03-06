<script>
export default {
    methods: {
        addToCart(name) {
            alert(`${name} was added to cart`)
        },
        goBack() {
            this.$router.go(-1)
        }
    },
    computed: {
        product() {
            const sku = this.$route.params.sku
            return this.$store.getters.getSingleProduct(sku)
        }
    }
}
</script>

<template>
    <div class="product">
        <header>
            <img src="../assets/logo.png" />
            <h2>
                {{ product.name }}
            </h2>
        </header>
        <div class="buy-box">
            <div class="buy-box-main">
                <div class="pricing">
                    <span class="price">€{{ product.price }}</span>
                    <span>including VAT: €{{ calculatedVat }}</span>
                    <span>You save: €{{ product?.special_price }}</span>
                </div>
                <div class="actions">
                    <input type="number" value="0"/>
                    <button type="button" @click="addToCart(product.name)"> 
                        Add To Cart
                    </button>
                </div>
            </div>
            <div class="buy-box-footer">
                <span>Delivery by: April 2024</span>
            </div>
            
        <button class="back" @click="goBack()">
            < Go back
        </button>
        </div>
    </div>
</template>

<style scoped>
.back {
    font-size: 12px;
    background: #ff7b20;
}
.pricing {
    display: flex;
    align-items: end;
    flex-direction: column;
}
.pricing span {
    font-size: 12px;
}
.actions {
    display: flex;
    margin-top: 0.5rem;
}
.actions input {
    width: 100px;
    margin-right: 0.8rem;
    text-align: center;
}

.pricing span.price {
    color: #db1420;
    font-size: 16px;
    font-weight: bold;
}
header img {
    width: 80px;
    margin-bottom: 1rem;
}
span {
    display: block;
}
h2 {
    font-size: 30px;
    font-weight: 700;
    line-height: 34px;
    margin-bottom: 0.8rem;
}
button {
    background: #7a0;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 2px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    min-height: 42px;
    min-width: 42px;
    padding: 7px 15px;
    transition: .2s ease;
    width: 100%;
}
.buy-box {
    border: 1px solid #d9dee3;
    border-radius: 4px;
    width: 400px;
}

.buy-box-main {
    padding: 24px 16px 16px;
    background-color: #f5f6f7;
}
.buy-box-footer {
    padding: 24px 16px;
}

.buy-box-footer span{
    font-size: 12px;
}
.product {
    display: block;
    padding: 1rem;
}
</style>