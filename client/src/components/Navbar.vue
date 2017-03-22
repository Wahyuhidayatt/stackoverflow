<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <img src="http://hammerjs.github.io/assets/img/stackoverflow-icon.svg">
        <a class="navbar-brand" href="#">stackoverflow</a>
      </div>
      <ul class="nav navbar-nav">
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/questions">Question</router-link></li>
        <!-- <li><router-link to="/Answer">Answer</router-link></li> -->
        <li><router-link to="/login">Login</router-link></li>
      </ul>
      <form class="navbar-form navbar-left">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search">
          <div class="input-group-btn">
            <button class="btn btn-default" type="submit">
              <i class="glyphicon glyphicon-search"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar-header{
      margin-right: -345px;
}
form {
  margin-left: 400px;
}
img {
  width: 5%;
  float: left;
  margin-top: 5px;
  margin-right: 8px;
  }
/*h1, h2 {
  font-weight: normal;
}

navbar-form navbar-left {}
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}*/
</style>
