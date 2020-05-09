<template>
	<div>
		<footer>
			<div class="container">
				<div class="row">
					<div class="col footer_img">
						<router-link to="/"><img class="logo" src="../../public/images/logo-footer.png" height="47" width="149" alt="logo"/></router-link>
						<p class="footer_txt">
							If you or your business is facing a legal challenge that calls for sound advice and skilled representation, contact us today to arrange a free consultation with an attorney.
						</p>
						<router-link to="#" class="footer_links">
							<i class="fas fa-angle-right"></i>
						Free Consultation
						</router-link>
					</div>
					<div class="col quick_links">
						<h6 class="links_title">Quick Links</h6>
						<router-link to="/" class="footer_links">
							<i class="fas fa-angle-right"></i>
						Home
						</router-link>
						<router-link to="About" class="footer_links">
							<i class="fas fa-angle-right"></i>
						About Us
						</router-link>
						<router-link to="Services" class="footer_links">
							<i class="fas fa-angle-right"></i>
						Services
						</router-link>
						<router-link to="Contacts" class="footer_links">
							<i class="fas fa-angle-right"></i>
						Contact Us
						</router-link>
					</div>
					<div class="col quick_links">
						<h6 class="links_title">Contact us</h6>
						<address>
							<router-link to="mailto:lawyer@gmail.com?Subject=Hello%20again" class="footer_links" href="contact">
							<i class="fas fa-angle-right"></i>
						lawyer@gmail.com
						</router-link>
						<router-link to="tel:#" class="footer_links">
							<i class="fas fa-angle-right"></i>
						+(374) 99 77 77 77
						</router-link>
						<router-link to="#" class="footer_links">
							<i class="fas fa-angle-right"></i>
						Kentron tex 26
						</router-link>
						</address>
					</div>
					<div class="col-md-12 right_section">
						<span class="copy">© Copyright 2019 Arabian Law.</span>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>


<script>
	export default {
		name: "Footer"
	}
</script>


<style lang="scss">
  @import "../../public/sass/style.scss";
</style>