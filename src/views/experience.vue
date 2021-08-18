<template>
  <div  id="experience" class=" pb-10">
    <v-row class="pb-0 pt-4" justify="center">
        <p class="titl grey--text text--darken-2">EXPERIENCE</p>
    </v-row>
    <v-row class="mt-n3" justify="center">
       <svg height="8" width="60">
  <line x1="0" y1="0" x2="200" y2="0" style="stroke:#125566;stroke-width:10" />
</svg>
    </v-row>
  <v-layout class="mt-4 ml-2" align-baseline="" v-for="(edu,i) in edus" :key="i" row wrap :justify-start="$vuetify.breakpoint.name=='xs' || $vuetify.breakpoint.name=='sm'"
   :justify-space-around="$vuetify.breakpoint.name=='md' || $vuetify.breakpoint.name=='lg' || $vuetify.breakpoint.name=='xl'">
    <v-flex xs11 sm11 md6 lg1 xl4></v-flex>
    <v-flex xs11 sm11 md6 lg8 xl4>
      <div class="comname  ">{{edu.name}}</div>
      <div class="mt-1" style="font-size:22px;color:#555555">{{edu.det}}</div>
      <div class="" style="font-size:20px;color:#555555">{{edu.loc}}</div>
      <ul class="mt-2"  style="font-size:18px;color:#555555">
         <li v-for="(work,i) in edu.gpa" :key="i"> {{work}}</li> 
          </ul>
    </v-flex>
    <v-flex xs8 sm6 md4 lg2 xl1 class="">
      <div class="" style="font-size:22px;color:#555555">{{edu.date}}</div>
    </v-flex>
     <v-flex xs11 sm11 md6 lg1 xl4></v-flex>

  </v-layout>
  </div>
</template>

<script>
export default {
data(){
  return{
    edus:[
      {name:'Tilace Technologies',det:'Software Engineer',
      loc:'Sivakasi, Tamil Nadu, India',date:'Oct 2020 - Jun 2021',
      gpa:["Designed and developed 60+ scalable and reusable Rest API services for CRM, CAM, CMS, ECommerce features", "Developed E-commerce, CAM, CMS web applications and added multiple critical features like authentication and billing","Designed UI/UX and built mobile applications for various services, which increased the user base up to 40%","Designed and developed a complex admin portal for dynamically configuring and managing applications","Worked with GCP and firebase to integrate crucial functionalities like Google Analytics, GoogleMaps, and Push Notifications"]}, 

       {name:'OpenText',det:'Software Engineering Intern',
      loc:'Banglore, Karnataka, India',date:'Aug 2019 - Dec 2019',
      gpa:["Worked on automating several test cases and created UI-tests for a content management system","Made some significant enhancements for the automation framework to improve testability by over 30%","Improved code quality by integrating single responsibility and separation of concern to the existing codebase"]}  
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
