<script setup lang="ts">


</script>

<template >
  <div class="overlay">
    <div class="card col-6 overlay-content">
      <div class="card-header">
        Donate Form
      </div>
      <div class="card-body">
        <form class="row g-3">
          <div class="col-8">
            <label for="pc" class="form-label col-8">Postal code</label>
            <select  class="rounded p-2 col-12" id="pc" required>
              <option value="" selected disabled>Select Postal Code</option>
              <option value="28005">28005</option>
              <option value="08001">08001</option>
              <option value="25250">25250</option>
            </select>
          </div>
          <div class="col-8">
            <label for="firstname" class="form-label">Firstname</label>
            <input type="text" class="form-control border-dark" id="firstname" required>
          </div>
          <div class="card-footer d-flex justify-content-end align-items-center ">
            <button  class="btn btn-secondary mx-4">Close</button>
            <button type="submit" class="btn btn-primary">Save changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>



<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.overlay-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
}
</style>