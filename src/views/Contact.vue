<template>
   <section id="contact" class="content_sectionContact">
        <div class="container">
            <div class="row">
                <div class="container">
                    <div class="row">
                        <!--Formulaire de contact-->
                        <form method="post" role="form">
                            <div class="controls">
                                <div class="row" align="center">
                                    <div class="col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6  col-lg-offset-3">
                                        <h1>Contact me</h1>
                                        <br>
                                        <br>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                                    <div class="form-group">
                                        <!--<label for="form_name">Name *</label>-->
                                        <label for="Name">Full Name</label> 
                                        <input 
                                        id="userFullName" 
                                        type="text" name="Full Name" 
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
                                        <input 
                                                type="Email" 
                                                name="Email" 
                                                id="userEmail"
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
                                     <textarea 
                                            name="Message" 
                                            id="userMessage" 
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
                                    <button id="submit" 
                                           class="btn_pages">Submit</button>
                                               <!--@click="openModal"-->
                                    <Modal ref="modal" />
                                    
                                    <br>
                                    <br>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import Modal from '../components/Modal.vue'

export default {
  name: "Contact",
  components: { 
    Modal, 
  },
  methods: {
  openModal() { 
    return this.$refs.modal.show() 
    },//executing the show method of child
    saveContactMessage: function (e) {
        e.preventDefault()
        const messagesRef = this.$firebaseDatabase.collection('message')
        messagesRef.add(
          {
            name: this.name,
            email: this.email,
            message: this.message,
            time: new Date(),
          },
        )
        this.name= ''
        this.email = ''
        this.message = ''
        this.submitted = true
        this.snackbar = false
      },
  }
  


}
</script>

<style lang="scss" scoped>
@import 'Contact.sass'
</style>