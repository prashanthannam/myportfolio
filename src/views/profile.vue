<template>
  <v-app>

<div class="bg">
   <v-app-bar  :absolute="!open" color="#0c1a27" :fixed='open'  dark>
      <v-row name="btns" class="" v-if="$vuetify.breakpoint.name!='xs'" >
        <v-btn text  large="" v-for="item in items" :key='item.title' class="mx-1 " depressed small @click=" $vuetify.goTo(item.route,{duration:900, offset: 0,easing: 'easeInOutCubic',})">
                <v-icon left small class="">{{item.icon}}</v-icon>
                {{item.title}}
        </v-btn>
      </v-row>
      <!-- <v-spacer></v-spacer> -->
          <v-menu  v-if="$vuetify.breakpoint.name=='xs'" offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon
                color=""
                dark
                v-bind="attrs"
                v-on="on"
              >
               <v-icon color="">mdi-menu</v-icon>

              </v-btn>
            </template>
            <v-list>
              <v-list-item class="pt-0"
                v-for="(item, index) in items"
                :key="index"
              >
                <v-list-item-title class="" >
                 <a class="grey--text text--darken-2" @click=" $vuetify.goTo(item.route,{duration:900, offset: 0,easing: 'easeInOutCubic',})">
                    <v-icon color="">{{item.icon}}</v-icon>
                    {{ item.title }}</a>
                  </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

      </v-app-bar>
<v-main>
  <About class=""/>
  <div class="item">
  <Education class=""/>
  <Experience class=""/>
  </div>
  <Projects class=""/>
  <Skills class="item"/>
  <Contact class="item"/>
</v-main>
</div>
<v-footer dark=""  class="pa-0">
  <v-card style="width:100%" color="#0c1a27" class="ma-0" >
  <v-row justify="center">
        <v-btn  dark="" small="" height="50"  elevation="" class="pink darken-2 mt-n5" color="">
                 <v-icon large="" @click="$vuetify.goTo('#main',{duration:900, offset: 0,easing: 'easeInOutCubic',})" color="">mdi-chevron-double-up</v-icon>

        </v-btn>

  </v-row>
<v-card-title class="d-flex justify-center">


  <div class="">
 <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
<a class="mr-10" v-on="on" v-bind="attrs" href="https://www.linkedin.com/in/prashanthannam/" target="_blank"><v-icon class="belowIc" large color="">mdi-linkedin</v-icon></a>
      </template>
      <span>LinkedIn</span>
 </v-tooltip>
 <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
<a class="mr-10" v-on="on" v-bind="attrs" href="https://github.com/prashanthannam" target="_blank"> <v-icon class="belowIc" large color="">mdi-github</v-icon>
</a></template>
<span>GitHub</span>
 </v-tooltip>
 <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
<a class="mr-10" v-on="on" v-bind="attrs" href="" @click="$router.push('/resume')"> <v-icon class="belowIc" large color="">mdi-file</v-icon></a>
      </template>
      <span>My Resume</span>
 </v-tooltip>
 <v-tooltip top="">
  <template v-slot:activator="{ on, attrs }">

  <a class="" v-on="on" v-bind="attrs" href="https://mail.google.com/mail/?view=cm&fs=1&to=prashanth31399@gmail.com" target="_blank"><v-icon class="belowIc" large color="">mdi-email</v-icon></a>
  </template>
  <span >Mail me</span>
  </v-tooltip>
  <!-- </v-btn> -->
</div>
</v-card-title>
<v-card-text class=" pt-2 pb-2" >
  <v-layout row wrap justify-center>

    <v-flex xs4 sm4 md4 lg4 xl4 class=" text-center">
    <p class="mt-1 mb-1">Prashanth <v-icon small="">mdi-copyright</v-icon> 2020
</p>
    </v-flex>
  </v-layout>
</v-card-text>
  </v-card>
</v-footer>
  </v-app>

</template>
<script>
import About from './about.vue';
import Projects from './projects.vue'
import Education from './education';
import Skills from './skills';
import Experience from './experience';
import Contact from './contact';
export default {
  components:{
    About,Projects,Education,Skills,Experience,Contact
  },
  props:{
    open:Boolean,
  },
data(){
  return{
    nav:false,
    items:[

                {icon:'mdi-home',title:'Home',route:'#main'},
                {icon:'mdi-account',title:'About',route:'#about'},
                {icon:'mdi-briefcase',title:'Portfolio',route:'#projects'},
                {icon:'mdi-phone',title:'Contact',route:'#contact'},

]
  }
}
}
</script>
<style scoped>
a{
  text-decoration: none;
}
.item{
  min-height: 100vh;
}
.belowIc:hover{
  color: #125566;
}
</style>
