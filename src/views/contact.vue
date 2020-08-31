<template>
  <div  id="contact" class="pt-16">
    <v-row class="pb-0 mt-4" justify="center">
        <p class="titl grey--text text--darken-2">Contact</p>
    </v-row>
    <v-row class="mt-n3" justify="center">
       <svg height="8" width="60">
  <line x1="0" y1="0" x2="200" y2="0" style="stroke:#125566;stroke-width:10" />
</svg>
    </v-row>
  <v-layout class="mt-14" row wrap justify-center="">
    <v-flex xs8 sm8 md lg6 xl6>
        <form class="contact-form" @submit.prevent="sendEmail">
    <v-text-field type="text" id="name"  placeholder="Your Name" append-icon="mdi-person" v-model="un" outlined color></v-text-field>
        <v-text-field type="text" id="email" placeholder="Your Email ID" append-icon="mdi-person" v-model="user_email" outlined color></v-text-field>
      <v-textarea outlined color="" id="mess" placeholder="Type message" error-count="" v-model="message"></v-textarea>
     <v-btn small elevation="" type="submit" value="send" color="">Send</v-btn>

    <!-- <input type="submit" value="Send"> -->
  </form>
  <div></div>
    </v-flex>

  </v-layout>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data(){
  return{
    un:'',
    user_email:'',
    message:'',
  }
  },
methods:{
   sendEmail: (e) => {
     console.log(e)
     const signupForm = document.getElementsByClassName('contact-form');
     console.log(signupForm)
const nameInput  = document.getElementById('name').value;
const emailInput = document.getElementById('email').value;
const messInput = document.getElementById("mess").value;
console.log(nameInput,emailInput,messInput)
emailjs.sendForm('gmail', 'template_NSmgEQBS', e.target, 'user_jpASUWm71qo6hv8JBcBLA',{
name: nameInput,
myname: "Prashanth",
message: messInput
})
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
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
</style>
