<template>
  <div class="ui container">
    <div class="ui comments">
      <h3 class="ui dividing header" style="font-size: 30px;">Question : {{ question.description }}</h3>
      <i @click="upVote" class="thumbs outline up icon">{{ question.votes.length }}</i>
      <i class="thumbs outline down icon"></i>
      <div class="ui comments">
  <div class="comment">
    <div class="content">
        <div v-for="answer in question.answers">
          <p>Answer by : {{ answer.author }}</p>
          <p style="margin-left: 100px;">{{ answer.answer }}</p>

        </div>
    </div>
  </div>
</div>
      <form class="ui reply form">
        <div class="field">
          <textarea v-model="inputAnswer"></textarea>
        </div>
        <div @click="postAnswer" class="ui blue labeled submit icon button">
          <i class="icon edit"></i> Add Reply
        </div>
      </form>
    </div>

  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      inputAnswer: '',
      question: {},
    }
  },
  methods: {
    postAnswer(){
      this.axios.post('http://localhost:3000/api/answer/'+ this.$route.params.id, {
        answer: this.inputAnswer
      })
      .then(function (response) {
        console.log(response);
        window.location = 'http://localhost:8080/#/home'
      })
      .catch(function(err) {
        console.log(err);
      })
    },
    getQuestion() {
      console.log('get question');
      this.axios.get('http://localhost:3000/api/questions/'+ this.$route.params.id)
      .then( (response)=> {
        this.question = response.data
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    upVote(){
      console.log();
      this.axios.post('http://localhost:3000/api/vote/'+ this.$route.params.id)
      .then((response) => {
        console.log(response.data.votes);
        this.question.votes = response.data.votes
        window.location = 'http://localhost:8080/#/home'
      })
      .catch((err) => {
        console.log(err);
      })
    },
  },
  mounted() {
    this.getQuestion();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-size: 18px;
}
.content{
    float: left;
    margin-bottom: 38px;
    text-align: left;
}
.asnw{
  float: left;
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
