<template>
    <div class="d-flex justify-content-center mb-3" v-if="!product_store.load_products">
        <h2>product list ...</h2>
    </div>
    <div class="row" v-else >
        <div class="col-3 gap-2" v-for="(product, index) in list" :key="index">
            <div class="card mb-2" style="width: 19rem">
                <img :src="product.image" alt="" class="card-img-top mx-auto" style="width='12rem'; height='12rem'">
                <div class="card-body">
                    <h2 class="card-title">{{ product.title }}</h2>
                    <p class="card-text">{{ product.category }}</p>
                    <p class="card-text">{{ product.price }}</p>
                    <routerLink :to="`/product_detail/${product.id}`" class="btn btn-primary mx-2">Detail</routerLink>
                    <button class="btn btn-success" @click="cart_store.add_cart(product.id, product.price)">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { computed } from 'vue'
// useProductStore
import { useProductStore } from '../store/product';
import { useCartStore } from '../store/cart';


const product_store = useProductStore()

const cart_store = useCartStore()

const list = computed(() => product_store.list_products)

</script>

<style lang="scss" scoped>

</style>