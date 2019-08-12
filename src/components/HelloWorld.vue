<template>
  
  <div class="myhello">
    
    <header class="Heading">
      <h1>List of Users</h1>
    </header>

    <table>
      <tr></tr>
      <tr>
        <div v-for="blog in blogs" class="myblog">
          <router-link v-bind:to="'/title/' + blog.id" style="color:blue">
            <td> {{ blog.id }}</td>
            <td> {{ blog.name }}</td>
          </router-link>
        </div>
      </tr>
    </table>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'List of Users',
        blogs: []
      }
    },
    methods: {
      message: function () {
        this.age++;
      }
    },
    created() {
      this.$http.get('https://jsonplaceholder.typicode.com/users').then(function (data) {
        console.log(data);
        this.blogs = data.body;
      })
    }
  }
</script>

<style>
  .myhello {
    max-width: 800px;
    margin: 0 auto;
    color: black;
  }
  .myblog {
    font-family:Calibri;
    font-size:18px;
  }
  .Heading{
    color: black;
  }
  table {
    font-family: arial, sans-serif;
    font-size: 15px;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
</style>
