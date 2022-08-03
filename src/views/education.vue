<template>
  <div  id="education" class="pt-16">
    <v-row class="pb-0 mt-4" justify="center">
        <p class="titl grey--text text--darken-2">EDUCATION</p>
    </v-row>
    <v-row class="mt-n3" justify="center">
       <svg height="8" width="60">
  <line x1="0" y1="0" x2="200" y2="0" style="stroke:#125566;stroke-width:10" />
</svg>
    </v-row>
 <v-layout class="mt-4 ml-2" align-baseline="" v-for="(edu,i) in edus" :key="i" row wrap :justify-start="$vuetify.breakpoint.name=='xs' || $vuetify.breakpoint.name=='sm'"
   :justify-space-around="$vuetify.breakpoint.name=='md' || $vuetify.breakpoint.name=='lg' || $vuetify.breakpoint.name=='xl'">
    <v-flex xs11 sm11 md6 lg6 xl4 class="mb-4">
      <div class="colname  ">{{edu.name}}</div>
      <div class="mt-1" style="font-size:22px;color:#555555">{{edu.det}}</div>
      <div class="mt-2" style="font-size:20px;color:#555555">{{edu.loc}}</div>
      <div v-if="edu.gpa!=''" class="" style="font-size:20px;color:#555555">GPA : {{edu.gpa}}</div>
    </v-flex>
    <v-flex xs8 sm6 md4 lg2 xl1>
      <div class="" style="font-size:22px;color:#555555">{{edu.date}}</div>
    </v-flex>

  </v-layout>
  </div>
</template>

<script>
export default {
data(){
  return{
    edus:[
      {name:'Georgia State University',det:'Masters of Science in Computer Science',
      loc:'Atlanta, Georgia, USA',date:'Aug 2021 - present',gpa:'4.05/4'},
      {name:'Gokaraju Rangaraju Institute of Engineering and Technology',det:'Bachelor of Technology in Computer Science and Engineering',
      loc:'Hyderabad, Telangana, India',date:'Aug 2016 - Sept 2020',gpa:'9.09/10.0'},
    ]
  }
}
}
</script>

<style>
div{
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}
.titl{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 40px;
}
.colname{
  /* font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; */
  font-size: 30px;
  line-height: 40px;
  color: #125566;
  font-weight: bold;
}
.me{
  border-radius: 50%;
}

</style>
