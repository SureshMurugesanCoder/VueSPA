<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <header class="app-header navbar">
        <h2 class="nav-item px-4">User Details</h2>
      </header>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">User List</a></li>
        </ol>
      </nav>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                <i class="cui-people h2"></i>List of Users
              </div>
              <div class="card-body">
                <table class="table table-responsive-sm">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Zipcode</th>
                      <th>Email</th>
                      <th>Company</th>
                      <th>Website</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="blog in paginate" v-bind:key="blog.id">
                      <td>{{ blog.id }}</td>
                      <td>
                        <router-link v-bind:to="'/user/' + blog.id"
                                     style="color:blue">{{ blog.name }}</router-link>
                      </td>
                      <td> {{blog.phone}} </td>
                      <td> {{blog.address.street}},{{blog.address.suite}},{{blog.address.city}} </td>
                      <td> {{blog.address.zipcode}} </td>
                      <td> {{blog.email}} </td>
                      <td> {{blog.company.name}} </td>
                      <td> {{blog.website}} </td>
                    </tr>
                  </tbody>
                </table>
                <ul class="pagination justify-content-center">
                  <li class="page-item">
                    <a class="page-link" href="#" @click="previous(pageNumber)">Previous</a>
                  </li>
                  <li class="page-item"
                      v-bind:class="{ active: pageNumber == currentPage }"
                      v-for="pageNumber in totalPages"
                      v-bind:key="pageNumber">
                    <a class="page-link"
                       v-bind:key="pageNumber"
                       href="#"
                       @click="setPage(pageNumber)">{{ pageNumber }}</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#" @click="next(pageNumber)">Next</a>
                  </li>
                </ul>
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
    name: "userList",
    data() {
      return {
        blogs: [],
        currentPage: 1,
        itemsPerPage: 5,
        resultCount: 0
      };
    },
    computed: {
      totalPages: function () {
        return Math.ceil(this.resultCount / this.itemsPerPage);
      },
      paginate: function () {
        if (!this.blogs || this.blogs.length != this.blogs.length) {
          return;
        }
        this.resultCount = this.blogs.length;
        if (this.currentPage >= this.totalPages) {
          this.currentPage = this.totalPages;
        }
        var index = this.currentPage * this.itemsPerPage - this.itemsPerPage;
        return this.blogs.slice(index, index + this.itemsPerPage);
      }
    },
    methods: {
      setPage: function (pageNumber) {
        this.currentPage = pageNumber;
      },
      next: function () {
        if (this.currentPage < this.totalPages) {
          this.currentPage = this.currentPage + 1;
        }
      },
      previous: function () {
        if (this.currentPage > 1) {
          this.currentPage = this.currentPage - 1;
        }
      }
    },
    created() {
      this.$http
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (data) {
          console.log(data);
          this.blogs = data.body;
          this.currentPage = 1;
        });
    }
  };
</script>
