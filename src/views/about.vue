<template>
  <div id="about" class="pt-16" >
    <v-row class="pb-0 mt-4" justify="center">
        <p class="titl grey--text text--darken-2">ABOUT</p>
    </v-row>
    <v-row class="mt-n3" justify="center">
       <svg height="8" width="60">
  <line x1="0" y1="0" x2="200" y2="0" style="stroke:#125566;stroke-width:10" />
</svg>
    </v-row>
  <v-layout class="mt-8" row wrap >
    <v-flex xs12 sm12 md6 lg6 xl6 class=" text-center pt-5">
            <v-img class="me" contain="" height="350" src="/prof.jpg"></v-img>

    </v-flex>
        <v-flex xs12 sm12 md6 lg6 xl6 class=" text-center pt-10">

      <h2 class=" head mt-2 grey--text text--darken-3">Who am I?</h2>
      <div class="content grey--text text--darken-2">I'm a final year Undergrad student @GRIET
        <div>persuing B.Tech, Computer Science.</div>
        <div>born and raised in India.</div>
        <div>Passionate about : </div>
        <div class=" d-flex justify-center">
<ul class=" text-start">
<li>Software Development</li>
<li>Web Development</li>
<li>Deep Learning</li>
</ul></div>
</div>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.titl{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 40px;
}
.head{
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
@media only screen and (max-width: 410px){
.content{
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 17px;
}
}
@media only screen and (min-width: 410px){
.content{
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 20px;
}
}
.me{
  border-radius: 50%;
}
ul{
  /* list-style-type: none; */
}
</style>
