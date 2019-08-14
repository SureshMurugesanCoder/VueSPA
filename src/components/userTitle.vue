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
                <div v-for="(blog, index) in blogs">
                  <b-button v-b-toggle.collapse-2 class="m-1"
                            v-bind:class="{ active : value == index }"
                            v-on:click="search(index)">
                    {{blog.title}}
                  </b-button>
                  <b-collapse v-if="index == value" id="collapse-2">
                    <b-card>
                      <span style="text-decoration:underline; font-weight:bold">Title ID</span>: {{blog.id}} <br />
                      <span style="text-decoration:underline; font-weight:bold">Content</span>: {{blog.body}}
                    </b-card>
                  </b-collapse>
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
        clicked: "",
        value: 0,
        blogs: [],
        filterdata: []
      };
    },
    methods: {
      search: function (e) {
        this.value = e;
      },
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
