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
                                        <input id="form_name" type="text" name="name" class="form-control"
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
                                        <input id="form_email" type="email" name="email" class="form-control"
                                               placeholder="Your email*" required="required"
                                               data-error="Valid email is required.">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-xs-offset-0 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                                    <div class="form-group">
                                        <!--<label for="form_message">Message *</label>-->
                                        <textarea id="form_message" name="message" class="form-control"
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
                                    <input type="submit" class="btn_pages" value="Send message">
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

export default {
  name: "Contact",
}
</script>

<style lang="scss" scoped>
@import 'Contact.sass'
</style>