<template>
  <div id="about" class="pt-16" >
    <v-row class="pb-0 mt-8" justify="center">
        <p class="titl grey--text text--darken-2">ABOUT</p>
    </v-row>
    <v-row class="mt-n3" justify="center">
       <svg height="8" width="60">
  <line x1="0" y1="0" x2="200" y2="0" style="stroke:#125566;stroke-width:10" />
</svg>
    </v-row>
  <v-layout class="mt-8" row wrap justify-center="" >
    <v-flex xs12 sm12 md6 lg5 xl6 class=" d-flex justify-center  pt-0">
      <div>
            <v-img class="me"  src="/profile.jpg"></v-img>
</div>
    </v-flex>
        <v-flex xs12 sm12 md6 lg6 xl6 class=" text-start pl-5 pr-2 pt-5">

      <!-- <h1 class=" head text-center mt-6 grey--text text--darken-3">Who am I?</h1> -->
      <ul class="content grey--text text-center mr-4 mt-4 text--darken-2">
        <!-- <div>Looking for .</div> -->
        <!-- <li >I'm a Software Engineer, looking for opportunities as a Full Stack developer.</li>
<li> Expertise in designing, building, testing and maintaining end-to-end web and mobile applications.</li>
<li>Proficient in developing REST APIs.</li>
<li>Have both Theoretical and hands-on knowledge of Computer Vision</li>  -->
<p class="mt-12">Passionate in Computer Science and pursuing Masters in Computer Science with 1+ years of full-time and internship experience . seeking Internship opportunities starting from May 2022. </p>
<!-- <p>Passionate, creative, and Dedicated Master's student in Computer Science with 1+ years of full-time and internship experience in Full-Stack development. seeking Co-Op opportunities starting from May 2022.</p> -->
        <!-- <div>born and raised in India.</div> -->
        <!-- <div class="mt-2 text-center">Areas of interest : </div> -->
        <div  class="text-center">
<ul >
<!-- <li class="int">Web Development</li>
<li class="int">Mobile Development</li>
<li class="int">Deep Learning</li> -->
<!-- <li class="int"></li> -->
</ul></div>
</ul>
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
@media only screen and (max-width: 520px){
.content{
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 18px;
}
}
@media only screen and (min-width: 520px){
.content{
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 25px;
}
}
@media only screen and (max-width: 920px){
.me{
  border-radius: 100%;
  justify-self: center;
  height: 50vw;
  width: 50vw;
}
}
@media only screen and (min-width: 920px){
.me{
  border-radius: 100%;
  justify-self: center;
  height: 28vw;
  width: 28vw;
}
}
ul{
  /* list-style-type: none; */
}
li.int{
    float: left;
    font-size: 20px;
    margin-right: 30px;
}
li{
    font-size:20px;
    color:#555555;
}

</style>
