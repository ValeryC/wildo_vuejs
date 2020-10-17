<template>
   <section id="contact" class="content_sectionContact">
        <div class="container">
            <div class="row">
                <div class="container">
                    <div  v-if="show_contact == true" class="row">
                        <!--Formulaire de contact-->
                   
                            <div class="controls">
                                <div class="row" align="center">
                                    <div class="col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6  col-lg-offset-3">
                                        <h1>Contact me</h1>
                                        <br>
                                        <br>
                                    </div>
                                </div>
                            </div>
                             <div v-if="contact_notice != ''" class="alert alert-warning">
                                 There was a problem submitting your message.
                                 {{contact_notice}}
                          </div>
                            <div class="row">
                                <div class="col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                                    <div class="form-group">
                                        <!--<label for="form_name">Name *</label>-->
                                      <label for="Name">Full Name</label> 
                                        <input v-model="firstName"
                                        type="text" 
                                        class="form-control"
                                        placeholder="Your name*" required="required"
                                        data-error="Firstname is required.">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                                    <div class="form-group">
                                        <!--<label for="form_email">Email *</label>-->
                                        <label for="Email">Email</label>
                                        <input  v-model="emailAddress"
                                                type="email" 
                                                class="form-control"
                                               placeholder="Your email*" required="required"
                                               data-error="Valid email is required.">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                                    <div class="form-group">
                                    <label for="Message">Message *</label>
                                     <textarea v-model="message"
                                            type="text"
                                            class="form-control"
                                            placeholder="Your message*" rows="4" required="required"
                                            data-error="Please,leave us a message."></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                                    <span class="text-muted">*These fields are required.</span>
                                </div>
                                <div class="col-12" align="center">
                                    <br>
                                    <br>
                                    <button v-on:click="submit" id="submit" 
                                           class="btn_pages">Submit</button>
            
                                               <!--@click="openModal"-->
                                    <Modal ref="modal" />
                                    
                                    <br>
                                    <br>
                                </div>
                            </div>
                    </div>
             
        <div v-else class="messageSent">
          <h3>Message Sent Successfully!</h3>
          <p>Thank you for contacting us, we'll get back to you as soon as we can.</p>
        </div>

             
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import db from '../firestoreInit';
import Modal from '../components/Modal.vue';


export default {
    data: function(){
        return {
                show_contact:true,
                firstName:'',
                emailAddress:'',
                message:'',
                contact_notice: '',
                
        }
    },
    name: "Contact",
    components: { 
      Modal, 
    },
    methods: {

   
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    openModal() { 
      return this.$refs.modal.show() 
      },//executing the show method of child
     submit(){
        if(this.firstName.length==0){
        this.contact_notice = 'Put your name.';
        }
        else if (!this.validEmail(this.emailAddress)) {
        this.contact_notice = 'The email address is badly formatted.';
        } 
        else if (this.message.length < 10) {
        this.contact_notice = "Your message is too short";
        }
        else{
                db.collection("EmailAddresses").add({
                        firstName:this.firstName,
                        emailAddress:this.emailAddress,
                        message:this.message
                })
                this.show_contact=false
         }
        },
    }
}
</script>

<style lang="scss" scoped>
@import 'Contact.sass'
</style>