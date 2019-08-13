<template>
  <div>
    <header class="app-header navbar">
      <h2 class="nav-item px-4">Blog Post Details</h2>
    </header>
    <br />
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header">
              <i class="cui-envelope-open h4"></i>Title : {{blog.title}}
            </div>
            <div class="card-body">
              User ID : {{blog.userId}} <br />
              Title ID : {{blog.id}} <br />
            </div>
            <div class="card-footer">
              Content : <br />
              {{blog.body}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        blog: {}
      }
    },
    created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).
        then(function (data) {
        console.log(data);
        this.blog = data.body;
      })
    }
  }
</script>

