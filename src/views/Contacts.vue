<template>
	<div>
		<Header/>
		<section class="contacts_section">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-sm-12">
						<h4 class="about_page_titles text-left">How to Find Us</h4>
						<p class="find_txt text-left">
							If you have any questions, just fill in the contact form, and we will answer you shortly. If you are living nearby, come visit Law&Justice at one of our comfortable offices.
						</p>
						<div class="info">
							<h6 class="info_title text-left">Information</h6>
							<address>
							<router-link to="mailto:lawyer@gmail.com?Subject=Hello%20again" class="contact_links" href="contact">
							<i class="fas fa-angle-right"></i>
						lawyer@gmail.com
						</router-link>
						<router-link to="tel:#" class="contact_links">
							<i class="fas fa-angle-right"></i>
						+(374) 99 77 77 77
						</router-link>
						<router-link to="#" class="contact_links">
							<i class="fas fa-angle-right"></i>
						Kentron tex 26
						</router-link>
						</address>
						</div>
					</div>
				<div class="col-md-6 col-sm-12">
					<h4 class="about_page_titles text-left">Contact Us</h4>
					<form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control">
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control">
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                    <!--Grid column-->

                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control">
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                <!--Grid row-->
            </form>
            <div class="text-center text-md-left">
                <a class="btn contact_btn" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
				</div>
				</div>
			</div>
		</section>
		<Footer/>
	</div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
	export default {
		name: 'Contacts',
		components: {
			Header,
			Footer
			
		}
	}
</script>
<style lang="scss">
  @import "../../public/sass/style.scss";
</style>