<template>
  <div  id="skills" class="pt-16">
    <v-row class="pb-0 mt-4" justify="center">
        <p class="titl grey--text text--darken-2">SKILLS</p>
    </v-row>
    <v-row class="mt-n3" justify="center">
       <svg height="8" width="60">
  <line x1="0" y1="0" x2="200" y2="0" style="stroke:#125566;stroke-width:10" />
</svg>
    </v-row>
    <div class="mt-14 ml-2">
  <v-layout v-for="(skill,i) in ordskills" :key="i"  row wrap justify-center>
   <v-flex xs4 sm4 md3 lg3 xl4>
      <div class="sk">{{skill.name}}</div>
    </v-flex>
    <v-flex xs6 sm6 md4 lg3 xl1 class="">

        <v-progress-linear color="#125588" class=" d-flex justify-end" height="20" :value="skill.percent">
          <span class="">{{skill.percent}}%</span>
        </v-progress-linear>
    </v-flex>

  </v-layout>
  </div>
  </div>
</template>

<script>
export default {
data(){
  return{
    skills:[
      {name:'Vue.js',percent:96},
      {name:'Python',percent:94},
      {name:'JavaScript',percent:86},
      {name:'HTML',percent:92},
      {name:'CSS',percent:83},
      {name:'Deep Learning',percent:80},
      {name:'Firestore',percent:75},
      {name:'Data Structures',percent:90},
      {name:'Flutter',percent:85}
      ]
  }
},
computed:{
  ordskills(){
          var c=this.skills
          c.sort((a,b)=>(a.percent<b.percent)?1:-1)
          return c
  }
}
}
</script>

<style>
.titl{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 40px;
}
.me{
  border-radius: 50%;
}
.sk{
   font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 30px;
}
</style>
