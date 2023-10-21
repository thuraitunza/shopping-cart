<template>
    <h1>Shopping Cart</h1>
 
    <table class="table">
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>รวม</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(cart, index) in carts" :key="index">
                <td>
                    <img :src="cart.product.image" alt="" class="img-thumbnail" width="100">
                    {{ cart.product.title }}
                </td>
                <td>$ {{ cart.product.price }}</td>
                <td>
                    <button class="btn btn-sm btn-secondary">-</button>
                    <span class="mx-2">{{ cart.quantity }}</span>
                    <button class="btn btn-sm btn-secondary">+</button>
                </td>
                <td>{{ cart.total_price }}</td>
                <td>
                    <button class="btn btn-danger">ลบ</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
 
<script setup>
import { computed } from 'vue';

// useCartStore
import { useCartStore } from '../store/cart';
const cart_store = useCartStore();

const carts = computed(() => cart_store.cart_previews)
console.log(carts)
 
</script>
 
<style lang="scss" scoped>
 
</style>