import { defineStore } from "pinia";

import { ref,computed } from "vue";

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

// useProductStore
import { useProductStore } from "./product";

export const useCartStore = defineStore('useCartStore', () => {

    const cart = ref([])

    const add_cart = (id, price, quantity = 1) => {

        const data = {
            id,
            price,
            quantity
        }

        const findId = cart.value.find(e => e.id ===  data.id)

        if(findId) {
            alert_add_cart_failed()
        } else { 
            cart.value.push(data)
            saveToLocalStorage()
            alert_add_cart()
        }

       
        console.log(cart.value)
    }
    
    const saveToLocalStorage = () => {
        localStorage.setItem('cart', JSON.stringify(cart.value))
    }

    const loadFromLocalStorage = () => {
        if(localStorage.getItem('cart')) {
            cart.value = JSON.parse(localStorage.getItem('cart'))
        }
    }

    const cart_previews = computed(() => {
        const product_store = useProductStore()

        return cart.value.map((prd, i) => {
            const findIndexProduct = product_store.products.findIndex(e => e.id == prd.id)

            return{
                product : product_store.products[findIndexProduct],
                quantity : cart.value[i].quantity, 
                total_price: cart.value[i].price * cart.value[i].quantity,
            }
        })
    })
    
    const alert_add_cart = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Adding a Cart',
            showConfirmButton: false,
            timer: 1500
          })
    }

    const alert_add_cart_failed = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Error message',
            showConfirmButton: false,
            timer: 1500
          })
    }

    return { add_cart, loadFromLocalStorage, cart_previews}
})