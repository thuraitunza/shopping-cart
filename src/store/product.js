import { defineStore } from "pinia";

import axios from "axios";

import { ref, computed } from 'vue'

export const useProductStore = defineStore('useProductStore', () => {
    const products = ref([])

    const list_products = computed(() => products.value)

    const load_products = computed(() => products.value.length > 0)

    const fetch_products = async () => {
        await axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            products.value = response.data
            console.log(products.value)
        }).catch((err) => {
            console.log(err)
        })
    } 

    return { products,fetch_products, list_products, load_products}        
})