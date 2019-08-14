<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <header class="app-header navbar">
        <h2 class="nav-item px-4">List of Titles</h2>
      </header>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/"> User List</a></li>
          <li class="breadcrumb-item"> Recent Posts </li>
        </ol>
      </nav>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                <i class="cui-envelope-closed h4"></i>
                Recent Post Titles for User ID : {{name}}
              </div>
              <div class="card-body">
                <div v-for="blog in blogs" id="myblog" v-bind:key="blog.id">
                  <router-link v-bind:to="'/user/blog/' + blog.id">
                    <ul class="group">
                      <li class="group-item list-group-item-action">{{ blog.title }} </li>
                    </ul>
                  </router-link>
                </div>
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
        name: "",
        blogs: [],
        filterdata: []
      };
    },
    created() {
      this.$http
        .get("https://jsonplaceholder.typicode.com/posts/")
        .then(function (data) {
          var id = this.id;
          this.filterdata = data.body.filter(function (d) {
            return d.userId == id;
          });
          this.blogs = this.filterdata.slice(0, 10);
          this.name = this.blogs[0].userId;
        });
    }
  };
</script>
