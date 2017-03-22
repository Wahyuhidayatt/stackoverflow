<template lang="html">
  <div class="ui grid row piled segment">

    <div class="ui grid two wide column centered">
      <h3 style="color:gray;">{{ question.votes.length }}</h3>
      <p>votes</p>
      <h3 style="color:gray;">{{ question.answers.length }}</h3>
      <p>answers</p>
    </div>

    <div class="fourteen wide column">
      <p class="ui header" style="color:#0073e6;">{{ question.title }}</p>
      <p>{{ question.description }}</p>
      <h3>Answers</h3>
      <div v-for="answer in question.answers">
        <p class="ui header" style="color:#0073e6;">Answer by : {{ answer.author }}</p>
        <p>{{ answer.answer }}</p>
      </div>
      <button><router-link :to="{ path:'/answer/'+question._id }">Answer</router-link></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['question']
}
</script>

<style lang="css">

button{
  float: right;
}
</style>
