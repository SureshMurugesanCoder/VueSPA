<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <header class="app-header navbar">
        <h2 class="nav-item px-4" data-toggle="tooltip" data-placement="centre" title="Post details for the User">Post Details</h2>
      </header>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/"> User List</a></li>
          <li class="breadcrumb-item"><a href="javascript:javascript:history.go(-1)"> Recent Posts</a></li>
          <li class="breadcrumb-item">Details of Post</li>
        </ol>
      </nav>
      <div class="container-fluid">
        <div class="col-lg-2">
          <div class="callout callout-info b-t-1 b-r-1 b-b-1">
            <strong class="h5">User ID : {{blog.userId}}</strong><br>
            <strong class="h5">Title ID : {{blog.id}}</strong>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="card">
              <div class="card-header">
                <i class="cui-envelope-open h5"></i>
                <span style="text-decoration:double">Post Title </span> : {{blog.title|to-uppercase}}
              </div>
              <div class="card-body">
                <span style="text-decoration:underline"> Content</span> : <br />
                {{blog.body}}
              </div>
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
