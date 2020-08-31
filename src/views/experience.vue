<template>
  <div  id="experience" class="">
    <v-row class="pb-0 mt-4" justify="center">
        <p class="titl grey--text text--darken-2">EXPERIENCE</p>
    </v-row>
    <v-row class="mt-n3" justify="center">
       <svg height="8" width="60">
  <line x1="0" y1="0" x2="200" y2="0" style="stroke:#125566;stroke-width:10" />
</svg>
    </v-row>
  <v-layout class="mt-4 ml-2" align-baseline="" v-for="(edu,i) in edus" :key="i" row wrap :justify-start="$vuetify.breakpoint.name=='xs' || $vuetify.breakpoint.name=='sm'"
   :justify-space-around="$vuetify.breakpoint.name=='md' || $vuetify.breakpoint.name=='lg' || $vuetify.breakpoint.name=='xl'">
    <v-flex xs11 sm11 md6 lg5 xl4>
      <div class="comname  ">{{edu.name}}</div>
      <div class="mt-1" style="font-size:22px;color:#555555">{{edu.det}}</div>
      <div class="" style="font-size:20px;color:#555555">{{edu.loc}}</div>
      <div class="mt-2" style="font-size:20px;color:#555555">{{edu.gpa}}</div>
    </v-flex>
    <v-flex xs8 sm6 md4 lg3 xl1 class="">
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
      {name:'OpenText',det:'Engineering Intern, ECD-D2',
      loc:'Banglore, Karnataka, India',date:'August 2019 - December 2019',gpa:'Worked on automating several test cases for cloud documentum and made some enhancements to an automation framework to improve testability'}
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
.comname{
  /* font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; */
  font-size: 30px;
  line-height: 40px;
  color: #125566;
  font-weight: bold;
}
.me{
  border-radius: 50%;
}
.v-layout{
  margin-left: 10px;
}
</style>
