<template>
  <div id="skills" class="pt-16">
    <v-row class="pb-0 mt-16" justify="center">
      <p class="titl grey--text text--darken-2">SKILLS</p>
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
    <div class="mt-14 ml-2">
      <!-- <transition-group name="skills" appear="" tag="div"> -->
        <v-layout
         
          row
          wrap
          justify-center
        >
          <v-flex class="text-center" xs6 sm4 md3 lg6 xl4>
            <v-chip outlined large  v-for="(skill, i) in skills"
          :key="i" class="sk text-center mx-4 my-2"><div class="sk">{{ skill.name }} </div></v-chip>
          </v-flex>
           <!-- <v-flex xs6 sm4 md3 lg3 xl4>
            <v-chip outlined  v-for="(skill, i) in skills2"
          :key="i" class="sk text-center">{{ skill.name }}</v-chip>
          </v-flex> -->
          <!-- <v-flex xs4 sm6 md4 lg3 xl1 class="">
            <v-progress-linear
              color="#125588"
              class="mt-2"
              height="20"
              :value="skill.percent"
              
            >
              <span class="">{{ skill.percent }}%</span>
            </v-progress-linear>
          </v-flex> -->
        </v-layout>
      <!-- </transition-group> -->
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
       skills :[
        { name: "Flutter", percent: 98 },
        { name: "Vue.js", percent: 96 },
        { name: "Golang", percent: 94 },
        { name: "Python", percent: 90 },
        { name: "JavaScript", percent: 92 },
        { name: "HTML", percent: 92 },
        { name: "MYSQL", percent: 90 },
        { name: "Firebase", percent: 90 },
        { name: "CSS", percent: 70 },
        { name: "Java", percent: 80 },
        { name: "GCP", percent: 88 },
        { name: "AWS", percent: 88 },
        { name: "Typescript", percent: 86 },
        { name: "Django", percent: 82 },
        { name: "Node.js", percent: 76 },
        { name: "Gin", percent: 76 },
        { name: "Express.js", percent: 76 },
        { name: "C/C++", percent: 76 },
        { name: "SQLite", percent: 76 },
        { name: "Bootstrap", percent: 76 },
      ],
      clicked: true,
      
    };
  },
  mounted() {
    document.addEventListener('scroll', () => {
      const myElement = document.getElementById('skills');
      const bounding = myElement.getBoundingClientRect();
      if (bounding.top < window.innerHeight) {
         setTimeout(
            function () {
          this.myFunction()
        }.bind(this),
            600
            );
      }
    });
  },
  methods: {
    myFunction() {
      
    },
  },
  computed: {
    ordskills() {
      const c = this.skills;
      c.sort((a, b) => (a.percent < b.percent ? 1 : -1));
      return c;
    },
    ordskills2() {
      const c = this.skills2;
      c.sort((a, b) => (a.percent < b.percent ? 1 : -1));
      return c;
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
.sk {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 23px;
}
#skills {
  background-color: rgb(247, 247, 247);
}
.cl-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.cl-enter-active {
  transition: all 3s ease-in;
}
.cl-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.cl-leave-active {
  transition: all 3s ease-out;
}
</style>
