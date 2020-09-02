<template>
<v-app>
  <v-main>
  <div>
    <v-layout  v-if="!login"   class='mt-16 pt-16' row wrap justify-center="" align-center="">
<v-flex class='mt-10' xs10 sm8 md6 lg5 justify-center >
<v-card
     class="mt-5 ma-3" width="auto"
elevation="2"
  >
  <v-card-title primary-title class="grey--text justify-center">
        <span class="h6" > Login</span>

  </v-card-title>
    <v-card-text justify-center>

         <v-text-field type="email" class=""
         label="Email" prepend-icon="mdi-mail"  v-model="email"  ></v-text-field>

         <v-text-field :type="show? 'text' :'password'" error-count="" placeholder="" class=""
         label="Password" prepend-icon="mdi-lock" :append-icon="show?'mdi-eye':'mdi-eye-off'" @click:append="show=!show" v-model="password"  color></v-text-field>
         <v-alert  v-if="erro!=''" type="error" class="pa-2" >
         The email address or phone number that you've entered doesn't match any account.
         </v-alert>

        <v-card-actions class="justify-end mr-3">
            <v-btn  elevation="" class="justify-end" color="success" @click="Signin" >
              <v-icon left color="">mdi-login-variant</v-icon>
               Login</v-btn>

        </v-card-actions>
    </v-card-text>
    <v-card-actions>

    </v-card-actions>
  </v-card>
</v-flex>
    </v-layout >
<v-layout class='mt-10' justify-center="" align-start="">
  <v-flex xs10 sm8 md7 lg6>
    <div v-if="login && messages.length!=0">
      <h3 class="ml-7 h4">
        {{views}} members viewed this page
      </h3>
      <div class=" display-1 mb-5">Messages from viewers</div>
      <v-card elevation="" v-for="mess in messages" :key="mess.timestamp" class=" card text-start my-2" >
        <v-card-title primary-title>
        <v-row>
        <v-col>
        <div class="h7">{{mess.data().fromName}}</div>
        <div class="body-2">{{mess.data().fromMail}}</div>
        </v-col>
        <div class="caption mt-4">{{date(mess.data().date.toDate())}}</div>
        </v-row>
        </v-card-title>
        <v-card-text class="ml-4 mt-n5">
        {{mess.data().message}}
        </v-card-text>
        <v-card-actions class=" d-flex justify-space-around">
          <v-btn color="#358899" :href='"https://mail.google.com/mail/?view=cm&fs=1&to=" + mess.data().fromMail' target="_blank">reply</v-btn>
          <v-btn @click="del(mess.id)" color='#358899'>delete</v-btn>

        </v-card-actions>
      </v-card>
    </div>
</v-flex>
    </v-layout>
  </div>
  </v-main>
</v-app>
</template>

<script>
import db from "@/fb";

export default {
data(){
  return{
    messages:[],
    email:'',
    password:'',
    erro:false,
    show:false,
    login:false,
    views:'',
  }
},
methods:{
Signin(){
  if(this.email=='prashanth31399@gmail.com' && this.password=='prashanth205'){
    this.login=true
  }
  else{
    this.erro='true'
  }
},
del(i){
  db.collection('messages').doc(i).delete()
},
date(time){
  var messtime=''
   if(parseInt(time.getHours())>12){
                                 messtime=String(parseInt(time.getHours())-12)+':'
                                 if(time.getMinutes()>=10)
                                 messtime=messtime+time.getMinutes()
                                 else
                                 messtime=messtime+'0'+time.getMinutes()
                                 messtime=String(messtime)+' PM'
                             }
                             else{
                                 messtime=time.getHours()+':'
                                  if(time.getMinutes()>=10)
                                 messtime=messtime+time.getMinutes()
                                 else
                                 messtime=messtime+'0'+time.getMinutes()
                                 messtime=String(messtime)+' AM'
                             }
                             return messtime+','+" "+ time.getDate()+'/'+time.getMonth()+'/'+time.getFullYear()
}
},
mounted(){
db.collection('messages').doc('views').onSnapshot((res)=>{
  this.views=res.data().views
})
  db.collection('messages').orderBy('timestamp','desc').onSnapshot((res)=>{
    res.docs.forEach(element => {
    });
    this.messages=res.docs
  })
}

}
</script>

<style>
.card{
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}
</style>
