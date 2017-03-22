<template>
  <div class="ui text container">

    <h3>Submit Question</h3>
    <div class="ui container">
      <div class="ui padded segment">
        <div class="ui form">
          <div class="field">
            <label>Title</label>
            <input type="text" placeholder="What's your programming question? Be specific.">
          </div>
          <div class="field">
            <label>Question</label>
            <textarea v-model="inputQuestion"></textarea>
          </div>
          <div class="field">
            <button @click="postQuestion" class="ui primary button">
              Post Your Question
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    //state, state data yang mempengaruhi bagaimana sebuah website ditampikan
    return {
      msg: 'Welcome to Your Vue.js App',
      inputQuestion: ''
    }
  },
  methods: {
    postQuestion() {
      this.axios.post('http://localhost:3000/api/questions', {
        title: this.inputQuestion,
        description: this.inputQuestion
      })
      .then(function (response) {
        console.log(response);
        window.location = 'http://localhost:8080/#/home';
        // router.push({path: 'home'})
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style>

/*h1, h2 {
  font-weight: normal;
}

ul {
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
