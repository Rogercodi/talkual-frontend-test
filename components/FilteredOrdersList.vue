<script setup lang="ts">
import { ref } from 'vue';

const donateStore = useDonateStore();
const overlayStore = useOverlayStore();
const orderStore = useOrdersStore();
//Initialize orders
await orderStore.getOrders();
const orders = computed(() => orderStore.orders);

const filter = ref('undefined');

//Render Filtered Orders
watch(filter, async (current) => {
    orderStore.setFilter(current);
    await orderStore.getOrders()
});

const showOverlay = (id: number) => {
    //Display donate form and set order id for Url params
    overlayStore.toogleDisplay(true);
    donateStore.setId(JSON.stringify(id))
};

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-1 d-flex align-items-center">
                <p class="mb-0">Filters</p>
            </div>
            <div class="col-md-3 mb-2">
                <form>
                    <select v-model="filter" class="form-select border-dark fs-10">
                        <option value="undefined" selected>All</option>
                        <option value="normal">Normal</option>
                        <option value="donation">Donation</option>
                    </select>
                </form>
            </div>
        </div>
    </div>
    <div v-for="order of orders" class="row">
        <div class="order col-4 border pt-4">
            <p class="mb-0">sku: {{ order.attributes.order_items.data[0].attributes.sku }} </p>
            <p class="mb-0">type: {{ order.attributes.type }} </p>
            <p class="mb-0">quantity: {{ order.attributes.order_items.data[0].attributes.quantity }} </p>
            <p class="mb-4">firstname: {{ order.attributes.order_meta.data.attributes.shipping_firstname }} </p>
            <button v-if="order.attributes.type !== 'donation'" @click="showOverlay(order.id)"
                class="btn btn-primary my-3 d-block mx-auto">Donate</button>
        </div>
    </div>
</template>
  

  
<style lang="css" scoped>
.order {
    background-color: rgb(243, 234, 234);
}
</style>