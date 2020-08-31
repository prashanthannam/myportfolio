<template>
  <div  id="projects" class="pt-16">
    <v-dialog
          v-model="dialog"

          max-width="700px"
          transition="dialog-transition"
        >
          <v-card>
           <v-carousel height="" color="#125588" class="pt-2 pb-2" hide-delimiter-background show-arrows="" hide-delimiters=""
             >
               <v-carousel-item v-for="img in number.images" :key="img" >
                 <v-img class="ma-1" style="" height="340" contain :src="img"></v-img>

               </v-carousel-item>
             </v-carousel>
          <v-divider
            class=""
          ></v-divider>
            <v-card-title>
              {{number.title}}
            </v-card-title>
            <v-card-subtitle class="mt-n2">
              {{number.date}}
            </v-card-subtitle>
            <v-card-text>
              {{number.desc}}
            </v-card-text>
            <v-card-actions class="mt-n4 d-flex justify-center">
                <v-btn v-if="number.link!=null" dark="" :href="number.link" color="#125588">
                   <v-icon left color="">mdi-open-in-new</v-icon>

                  View site</v-btn>

            </v-card-actions>
          </v-card>
        </v-dialog>
    <v-row class="pb-0 mt-4" justify="center">
        <p class="titl grey--text text--darken-2">PROJECTS</p>
    </v-row>
    <v-row class="mt-n3" justify="center">
       <svg height="8" width="60">
  <line x1="0" y1="0" x2="200" y2="0" style="stroke:#125566;stroke-width:10" />
</svg>
    </v-row>
    <v-row class="mt-10" justify="center">
  <v-card class="projdisp d-flex justify-center">

  <v-carousel
      height="400" class=""
      hide-delimiter-background=""
      :show-arrows="false"
    >
      <v-carousel-item v-for="(project, i) in projects"
      :key="i" class="">
        <v-sheet light="" color="#010B14"
          height="100%"
        >
          <v-col
            class="fill-height"
            align="center"
            justify="center"
          >
<v-hover v-slot:default="{ hover }">

          <v-sheet light="" color="#010B14" height="100%" width="100%">
              <v-img contain="" height="92%" class="" :src="project.img" alt="">
                <v-expand-transition>
          <div
            v-if="hover"
            class=" transition-ease-in-out white darken-2 v-card--reveal display-3 py-10  grey--text"
            style="height: 100%; opacity:0.8"
          >
          <div class="py-16">
         <p class="titl"> {{project.title}}</p>

              <v-btn @click="number=project,dialog=true" style="border:2px solid #118899" large text outlined="" elevation="" color="#118899">Details</v-btn>
          </div>
          </div>
        </v-expand-transition>
              </v-img>
          </v-sheet>
</v-hover>
          <!-- <v-sheet dark="" color="#010B14" height="20%">
              <div>{{project.title}}</div>
          </v-sheet> -->
          </v-col>
        </v-sheet>

      </v-carousel-item>
                  <!-- </v-hover> -->

    </v-carousel>
  </v-card>

    </v-row>
  </div>
</template>

<script>
export default {
data(){
  return{
    dialog:false,
    number:{},
    projects:[
      {title:'NeoBook',date:'July 2020',desc:'NeoBook is a social media WebApp built using Vue.js and Firebasefor database. Users can post content, share posts, chat, comment, like etc.',img:'/neobook.png',
      images:['neobook.png','neobook1.png','neobook2.png','neobook3.png','neobook4.png','neobook5.png'],link:'https://neobook.herokuapp.com/'},
      {title:'NeoChat',date:'June 2020',desc:'NeoChat chat app build using flutter and firestore, where users can add profile pictures, search for other users and can make real-time chatting.',img:'/neochat.png',
      images:['neochat.png','neochat1.png','neochat2.png','neochat3.png','neochat4.png',],link:null},
      {title:'Detecting Helmet Violators in Traffic',date:'Dec 2019',desc:'The system aims at detecting riders without helmet along with their number plates from traffic footage to extract Registration number.',img:'/helmet.png',
      images:['helmet.png','helmet1.png','helmet2.png',],link:'http://ec2-18-191-242-212.us-east-2.compute.amazonaws.com/detect/helmetview/'},
      {title:'Sign Language Translator',date:'Apr 2018',desc:'The project aims at recognizing sign Gesture images and display the respective alphabetic notation on a webpage using Convolutional Neural Network',img:'/slt.png',
      images:['slt.png','slt1.png'],link:null},

    ],
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
.titl{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 40px;
  color: #118899;
}
@media only screen and (max-width: 1119px){
  .projdisp{
    width: 90%;
  }
}
@media only screen and (min-width: 1120px){
  .projdisp{
    width: 56%;
  }
}
</style>
