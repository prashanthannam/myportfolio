<template>
<div >
  <router-view v-if="$route.name=='Resume' || $route.name=='Me' "></router-view>
<div v-if="$route.name!='Resume' && $route.name!='Me'  " style=" transition-duration: 3000ms;">

<div  id="main">
<div  id="app" v-observe-visibility="appvisibChange">
    <circles @open=" $vuetify.goTo('#profile',{duration:900, offset: 0,easing: 'easeInOutCubic',})" />

      <particles-bg type="cobweb" :num="nums" :canvas='{backgroundColor:"#1b1f2e"}' color="#ffffff" :bg="true"/>
</div>

</div>

<Profile  v-bind:open='open' id="profile"/>
<!-- <Resume id="res" /> -->
</div>
</div>
</template>

<script>
import db from '@/fb'
import Home from './views/Home';
import { ParticlesBg } from "particles-bg-vue";
import Profile from './views/profile';
import icon from "./assets/icon.js";
import Resume from './views/Resume';
import Circles from './views/Circles'
export default {
  name: 'App',
  components: {
    Home,ParticlesBg,Profile,Resume,Circles
  },
  data() {
    return {
      fixed:false,
      open:false,
      nums:100
    }
  },
  methods:{
    appvisibChange(isVisible, entry){
    this.open=false
    if(isVisible==false){
      this.open=true
    }
    if(isVisible==true){
      this.open=false
    }
    }
  },
computed:{
  whether(){
    if(this.$route.name=='Home')
    return true
    else
    return false
  },
  colourss(){
  return "#004466";
}

},
mounted(){
  db.collection('messages').doc('views').get().then((res)=>{
    var n=(res.data().views)+1
    db.collection('messages').doc('views').set({views:n})

  })
}
};
</script>
<style lang='scss' scoped>
#app {

  // height: 100vh;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
      // background-color: #010B14;

  // padding-top: 2%;
}
.main{
  background-color: #010B14;
}
.Profile{
  transition-duration: 1000ms;
}

.Circles{
  z-index: 0;
}
</style>
