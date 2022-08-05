<template>
  <div id="projects" class="pt-16">
    <v-dialog v-model="dialog" max-width="750" transition="dialog-transition">
      <v-card dark width="750">
        <v-row justify="end" class="mr-3 mb-n2">
          <v-icon @click="dialog = !dialog" class="mt-2" color=""
            >mdi-close</v-icon
          >
        </v-row>
        <v-carousel
          :height="$vuetify.breakpoint.name == 'xs' ? 220 : 360"
          color="#125588"
          class="pt-2 pb-2 dia"
          hide-delimiter-background
          show-arrows=""
          hide-delimiters=""
        >
          <v-carousel-item v-for="img in number.images" :key="img">
            <v-img
              class=""
              style=""
              :height="$vuetify.breakpoint.name == 'xs' ? 200 : 340"
              contain
              :src="img"
            ></v-img>
          </v-carousel-item>
        </v-carousel>
        <v-divider class=""></v-divider>
        <v-layout justify-space-between class="mr-6">
          <span>
            <v-card-title>
              {{ number.title }}
            </v-card-title>
          </span>
          <span>
            <v-card-subtitle class="mt-1">
              {{ number.date }}
            </v-card-subtitle>
          </span>
        </v-layout>
        <v-card-subtitle class="mt-n4">
          {{ number.sub }}
        </v-card-subtitle>
        <v-card-subtitle class="mt-n4">
          {{ number.tech }}
        </v-card-subtitle>

        <v-card-text>
          {{ number.desc }}
        </v-card-text>
        <v-card-actions class="mt-n4 d-flex justify-space-around">
          <v-btn
            v-if="number.link != null"
            dark=""
            :href="number.link"
            target="_blank"
            color="#125588"
          >
            <v-icon left color="">mdi-open-in-new</v-icon>

            View site</v-btn
          >
          <v-btn dark="" :href="number.proLink" target="_blank" color="#125588">
            <v-icon left color="">mdi-github</v-icon>

            View Project</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row class="pb-0 mt-16" justify="center">
      <p class="titl grey--text text--darken-2">PROJECTS</p>
    </v-row>
    <v-row class="mt-n3" justify="center">
      <svg height="8" width="60">
        <line
          x1="0"
          y1="0"
          x2="200"
          y2="0"
          style="stroke: #125566; stroke-width: 10"
        />
      </svg>
    </v-row>
    <v-row class="mt-10" justify="center">
      <v-card class="projdisp d-flex justify-center">
        <v-carousel
          :cycle="!dialog && open == false"
          v-observe-visibility="appvisib"
          continuous=""
          interval="3000"
          :height="$vuetify.breakpoint.name == 'xs' ? 320 : 400"
          class=""
          hide-delimiter-background=""
          :show-arrows="false"
        >
          <v-carousel-item v-for="(project, i) in projects" :key="i" class="">
            <v-sheet light="" color="#010B14" height="100%">
              <v-col class="fill-height" align="center" justify="center">
                <v-hover v-slot:default="{ hover }">
                  <v-sheet
                    light=""
                    dark=""
                    color="#010B14"
                    height="100%"
                    width="100%"
                  >
                    <v-img
                      contain=""
                      height="90%"
                      class=""
                      :src="project.img"
                      alt=""
                    >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="
                            transition-ease-in-out
                            white
                            darken-2
                            v-card--reveal
                            display-3
                            py-10
                            grey--text
                          "
                          style="height: 100%; opacity: 0.8"
                        >
                          <div class="py-16">
                            <p class="titl">{{ project.title }}</p>

                            <v-btn
                              @click="(number = project), (dialog = true)"
                              style="border: 2px solid #118899"
                              large
                              text
                              outlined=""
                              elevation=""
                              color="#118899"
                              >Details</v-btn
                            >
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
  data() {
    return {
      dialog: false,
      number: {},
      open: false,
      projects: [
        {
          title: "NeoBook ",
          date: "Fall 2020",
          sub: "Self Project",
          tech: "Technologies Used : Vue.js, Vuetify, Firebase, Heroku",
          desc: "Designed, developed, and deployed a scalable social media web application to learn and demonstrate system design. Added features like email authentication, post and share content, chat with others, comment & like posts",
          img: "/neobook.png",
          images: [
            "neobook.png",
            "neobook1.png",
            "neobook2.png",
            "neobook3.png",
            "neobook4.png",
            "neobook5.png",
          ],
          link: "https://neobook.herokuapp.com/",
          proLink: "https://github.com/prashanthannam/NeoBook",
        },
        {
          title: "NeoChat",
          date: "Summer 2020",
          sub: "Self Project",
          tech: "Technologies Used : Flutter, Firebase, Xcode, Android Studio",
          desc: "Developed an end-to-end mobile chat application, where users can make real-time chatting. Integrated with real-time updates, read receipts and push notifications",
          img: "/neochat.png",
          images: [
            "neochat.png",
            "neochat1.png",
            "neochat2.png",
            "neochat3.png",
            "neochat4.png",
          ],
          link: null,
          proLink: "https://github.com/prashanthannam/NeoChat",
        },
        {
          title: "Detecting Helmet Violators in Traffic",
          date: "Fall 2019",
          sub: "Academic Project",
          tech: "Technologies Used : YOLO, OCR, TensorFlow, Django",
          desc: "Developed a web application that detects riders without a helmet from traffic footage and extracts their license plate number. Generated a dataset of Indian traffic consisting of 1500 images, trained a CNN model using YOLO, and achieved 85% accuracy. Developed an Optical Character recognition module that takes the bike image and scans the number plate to convert it into text format",
          img: "/helmet.png",
          images: ["helmet.png", "helmet1.png", "helmet2.png"],
          link: "http://ec2-18-191-242-212.us-east-2.compute.amazonaws.com/detect/helmetview/",
          proLink: "https://github.com/prashanthannam/HelmetDetectionYOLOV3",
        },
        {
          title: "Sign Language Translator",
          date: "Fall 2018",
          sub: "Academic Project",
          tech: "Technologies Used : HTML, Bootstrap, Keras, TensorFlow.js ",
          desc: "Built a web application to recognize and display American Sign Language Gestures through live camera input. Trained a model using Keras to recognize gestures and integrated it into a web application",
          img: "/slt.png",
          images: ["slt.png", "slt1.png"],
          link: null,
          proLink: "https://github.com/prashanthannam/Sign-Language-Translator",
        },
      ],
    };
  },
  methods: {
    appvisib(isVisible, entry) {
      entry;
      if (isVisible == false) {
        this.open = true;
      }
      if (isVisible == true) {
        this.open = false;
      }
    },
  },
};
</script>

<style>
.titl {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 40px;
}
.me {
  border-radius: 50%;
}
.titl {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 40px;
  color: #118899;
}
@media only screen and (max-width: 1119px) {
  .projdisp {
    width: 90%;
  }
}
@media only screen and (min-width: 1120px) {
  .projdisp {
    width: 56%;
  }
}
#projects {
  background-color: rgb(247, 247, 247);
}
</style>
