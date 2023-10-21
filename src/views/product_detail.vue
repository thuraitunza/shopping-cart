<template>
    <div class="d-flex justify-content-center" v-if="!load_product">
        <h5>Loading.....</h5>
    </div>
    <div class="row mt-5" v-else>
        <div class="col-md-6">
            <img :src="product.image" alt="" class="img-fluid" width="400">
            
        </div>
        <div class="col-md-6">
                <h4>{{ product.title }} </h4>
                <p>
                    {{ product.description }}
                </p>
                <h5>$ {{ product.price }}</h5>
            
            <div class="d-flex mt-3">
                <div class="btn-group me-auto">
                    <button class="btn btn-outline-primary">decrease</button>
                    <button class="btn btn-outline-primary">0</button>
                    <button class="btn btn-outline-primary">increase</button>
                </div>
                <button class="btn btn-primary mt-3">Buy Now</button>  
            </div>
            
        </div>
    </div>
</template>

<script setup>

import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import axios from 'axios';

const product = ref({})

const route = useRoute()

// const url = 'https://fakestoreapi.com/products'
const load_product = ref(false)  

const product_detail = async () => {    
    await axios.get(`https://fakestoreapi.com/products/${route.params.id}`)
    .then((response) => {
        product.value = response.data 
        load_product.value = true 
    }).catch((err) => {
        console.log(err)
    })
}

onMounted(() => {
    product_detail()
})

console.log(route.params.id)

</script>

<style lang="scss" scoped>

</style>