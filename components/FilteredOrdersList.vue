<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-1 d-flex align-items-center">
                <p class="mb-0">Filters</p>
            </div>
            <div class="col-md-3 mb-2">
                <form>
                    <select class="form-select border-dark fs-10">
                        <option value="undefined" selected>All</option>
                        <option value="normal">Normal</option>
                        <option value="donation">Donation</option>
                    </select>
                </form>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="order col-4 border pt-4">
            <p class="mb-0">sku:  </p>
            <p class="mb-0">type: </p>
            <p class="mb-0">quantity:  </p>
            <p class="mb-4">firstname:  </p>
            <button class="btn btn-primary my-3 d-block mx-auto">Donate</button>
        </div>
    </div>
</template>
  

  
<style lang="css" scoped>
.order {
    background-color: rgb(243, 234, 234);
}
</style>