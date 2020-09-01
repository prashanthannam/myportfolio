<template>
  <div  id="contact" class="pt-16">
    <v-snackbar
      v-model="value"
    >
        Message sent Successfully !!!
      <v-btn text color="primary" @click.native="value = false">Close</v-btn>
    </v-snackbar>
    <v-row class="pb-0 mt-4" justify="center">
        <p class="titl grey--text text--darken-2">Contact</p>
    </v-row>
    <v-row class="mt-n3" justify="center">
       <svg height="8" width="60">
  <line x1="0" y1="0" x2="200" y2="0" style="stroke:#125566;stroke-width:10" />
</svg>
    </v-row>
  <v-layout class="mt-8" row wrap justify-center="">
    <v-flex xs10 sm8 md6 lg5 xl5>
      <div> <v-icon color="">mdi-phone</v-icon>
 +91 8466851979</div>
<div> <v-icon color="">mdi-gmail</v-icon>
 prashanth31399@gmail.com</div>
 <div> <v-icon color="">mdi-home-map-marker</v-icon> Hyderabad,Telangana,India
</div>
        <div class="qu mt-6 text-center" s>Have a question ? Message me. </div>

        <form class="contact-form" >
    <v-text-field type="text" id="name"  name='fromName'  placeholder="Your Name" append-icon="mdi-person" v-model="un" outlined color></v-text-field>
        <v-text-field type="text" id="email" name='fromMail' placeholder="Your Email ID" append-icon="mdi-person" v-model="user_email" outlined color></v-text-field>
      <v-textarea rows="2" outlined color="" id="mess" name='message' placeholder="Type message..." error-count="" v-model="message"></v-textarea>

    <!-- <input type="submit" value="Send"> -->
  </form>
  <div class=" d-flex justify-end mb-2">
       <v-btn width="100" :disabled="un==''||user_email==''||message==''"  elevation="" @click="sendMess()" color="#129966">Send</v-btn>
</div>
  <div></div>
    </v-flex>

  </v-layout>
  </div>
</template>

<script>
import db from '@/fb'

export default {
  data(){
  return{
    un:'',
    user_email:'',
    message:'',
    value:false,

  }
  },
methods:{
  sendMess(){
                var d=new Date()

    var docu={fromName:this.un,fromMail:this.user_email,message:this.message,
    timestamp:d.getTime(),date:d}

    db.collection('messages').add(docu).then((res)=>{
  this.user_email=''
    this.un=''
    this.message=''
    this.value=true
    })
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
.qu{
    /* font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; */
font-size: 30px;
  color: #125566;
}
</style>
