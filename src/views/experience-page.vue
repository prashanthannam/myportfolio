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
      <v-flex xs8 sm6 md4 lg3 xl2 class="">
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
          det: "Associate Application Developer",
          loc: "Alpharetta, Georgia, USA",
          date: "February 2023 - Present",
          gpa: [
            "Transforming design mockups and wireframes into efficient and interactive user interfaces, adhering to UI/UX design practices.",
            "Revamping the existing codebase by introducing micro front-end architecture, resulting in a 30% reduction in reported bugs.",
            "Developing RESTful APIs using Java and Spring Boot with object-oriented design and enforced design patterns such as MVC and Singleton for better integrity and scalability.",
            "Employed Hibernate ORM for seamless interaction with Oracle relational databases, optimizing data access and manipulation.",
            "Maintaining a test-driven development (TDD) approach using JUnit and Mockito, increasing the code coverage by 25%.",
            "Tech Stack: Angular.js, Stencil.js, Java, Spring Boot, Oracle, Jest, Fullstack, Bitbucket",
          ],
        },
        {
          name: "ADP",
          det: "Application Developer Intern",
          loc: "Alpharetta, Georgia, USA",
          date: "May 2022 - August 2022",
          gpa: [
            "Designed and engineered a python tool dedicated to generating visualization reports from JVM Garbage Collector logs.",
            "Established an efficient process for extracting GC log files, cutting the manual effort from an hour to five  minutes.",
            "Integrated the tool with AWS S3 and Concourse CI/CD pipeline for streamlined automation processes.",
            "Tech Stack: Python, HTML,CSS, AWS S3, Concourse",
          ],
        },

        {
          name: "Tilace Technologies",
          det: "Software Engineer",
          loc: "Chennai, Tamil Nadu, India",
          date: "September 2020 - July 2021",
          gpa: [
            "Designed and developed multiple modules in Customer Relationship Management and E-commerce  applications.",
            "Developed APIs to integrate various modules among the applications and incorporated Google Cloud Platform functionalities.",
            "Engaged in client meetings to analyze requirements comprehensively and provide delivery estimations.",
            "Tech Stack: Node.js, React.js, Golang, MYSQL, Flutter, Redis",
          ],
        },

        {
          name: "OpenText",
          det: "Software Engineering Intern",
          loc: "Banglore, Karnataka, India",
          date: "August 2019 - December 2019",
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