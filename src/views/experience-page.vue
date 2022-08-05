<template>
  <div id="experience" class="pb-10">
    <v-row class="pb-0 pt-4" justify="center">
      <p class="titl grey--text text--darken-2">EXPERIENCE</p>
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
    <v-layout
      class="mt-8 ml-2"
      align-baseline=""
      v-for="(edu, i) in edus"
      :key="i"
      row
      wrap
      :justify-start="
        $vuetify.breakpoint.name == 'xs' || $vuetify.breakpoint.name == 'sm'
      "
      :justify-space-around="
        $vuetify.breakpoint.name == 'md' ||
        $vuetify.breakpoint.name == 'lg' ||
        $vuetify.breakpoint.name == 'xl'
      "
    >
      <v-flex xs11 sm11 md10 lg1 xl4></v-flex>
      <v-flex xs11 sm11 md6 lg8 xl4>
        <div class="comname">{{ edu.name }}</div>
        <div class="mt-1" style="font-size: 22px; color: #555555">
          {{ edu.det }}
        </div>
        <div class="" style="font-size: 20px; color: #555555">
          {{ edu.loc }}
        </div>
        <ul class="mt-2" style="font-size: 18px; color: #555555">
          <li v-for="(work, i) in edu.gpa" :key="i">{{ work }}</li>
        </ul>
      </v-flex>
      <v-flex xs8 sm6 md4 lg2 xl1 class="">
        <div class="" style="font-size: 22px; color: #555555">
          {{ edu.date }}
        </div>
      </v-flex>
      <v-flex xs11 sm11 md6 lg1 xl4></v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edus: [
        {
          name: "ADP",
          det: "Application Developer Intern",
          loc: "Alpharetta, Georgia, USA",
          date: "May 2022 - Aug 2022",
          gpa: [
            "Designed and developed an extensible tool in Python for generating visualization reports on JVM Garbage Collector logs",
            "Built a process that extracts the GC log files from remote servers and uploads the generated reports to an S3 bucket",
            "Reduced 2 hours of the team’s manual effort to 2 minutes and integrated the tool with the Concourse CI/CD pipeline",
            "Tech Stack: Python, HTML,CSS, AWS S3, Concourse",
          ],
        },

        {
          name: "Tilace Technologies",
          det: "Software Engineer",
          loc: "Chennai, Tamil Nadu, India",
          date: "Sep 2020 - July 2021",
          gpa: [
            "Worked on designing and developing several modules in a Customer Relationship Management application",
            "Responsible for writing APIs that read from complex database schemas to integrate different modules in the application",
            "Worked with Google Cloud Platform to integrate functionalities like Google Analytics, GoogleMaps, and Geocoding",
            "Participate in weekly meetings with clients to analyze the requirements and delivery estimations",
            "Tech Stack: Node.js, React.js, Golang, SQL, Flutter,",
          ],
        },

        {
          name: "OpenText",
          det: "Software Engineering Intern",
          loc: "Banglore, Karnataka, India",
          date: "Aug 2019 - Dec 2019",
          gpa: [
            "Worked on automating various test cases and created UI tests for a content management system",
            "Made significant enhancements to the automation framework to improve testability by over 30%",
            "Participate and contribute to daily scrum meetings with developers and managers to discuss ideas, update and resolve issues",
          ],
        },
      ],
    };
  },
};
</script>

<style>
div {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.titl {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 40px;
}
.comname {
  /* font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; */
  font-size: 30px;
  line-height: 40px;
  color: #125566;
  font-weight: bold;
}
.me {
  border-radius: 50%;
}
.v-layout {
  margin-left: 10px;
}
</style>