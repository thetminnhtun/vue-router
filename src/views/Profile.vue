<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body text-center">
            <img src="@/assets/logo.png" alt="Profile Image">
            <h1>Mg Mg</h1>
            <p>mgmg@shop.com</p>
            <p>123456678</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-outline-success btn-sm float-right">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log('Profile Page.');
  }
}
</script>