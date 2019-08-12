<template>
  <div id="hello">
    <h1> Title: <span style="font-size:25px; color:cadetblue">{{blog.title | to-uppercase}} </span></h1>
    <p> </p>
    <h2> User ID: {{blog.userId}} </h2> <h2>Title ID: {{blog.id}}</h2>
    <p> </p>
    <article class="blog"> {{blog.body}}</article>
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
      this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(function (data) {
        console.log(data);
        this.blog = data.body;
      })
    }
  }

</script>


<style>
  #hello {
    max-width: 800px;
    margin: 0 auto;
  }

  .blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    font-size:25px;
    font-style:italic;                                                                                                                                
  }

</style>
