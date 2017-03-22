<template>
  <div class="ui text container">
    <div class="ui padded grid row">
      <div class="one wide column">
        <img src="http://hammerjs.github.io/assets/img/stackoverflow-icon.svg" alt="" style="width:200%;">
      </div>
      <div class="ten wide column">
        <p style="font-size:30px">stack<b>overflow</b> <span style="color:gray;font-size:70%;">Question and Answer</span></p >
      </div>
      <div class="five wide column">
        <div class="ui icon input">
          <input type="text" placeholder="Search...">
          <i class="search icon"></i>
        </div>
      </div>
    </div>

    <h3>All Question</h3>
    <div class="ui container">
      <QuestionItem v-for="question in questions" :question="question" ></QuestionItem>

    </div>

  </div>
</template>

<script>
// import axios from 'axios'
import QuestionItem from './QuestionItem'
export default {
  name: 'hello',
  components: {
    QuestionItem
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      questions: []
    }
  },
  methods: {
    getQuestions() {
      console.log('get questions');
      // let self = this;
      this.axios.get('http://localhost:3000/api/questions')
        .then((response)=>{
          console.log(response.data);
          this.questions = response.data
        })
        .catch((err) => {
          console.log(err);
        })
    }
  },
  mounted() {
    this.getQuestions()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-size: 18px;
}
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
