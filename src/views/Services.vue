<template>
	<div>
		<Header/>
		<div class="services_bg">
			<div class="container">
				<h2 class="pages_title">Services</h2>
			</div>
		</div>
		<section class="services_sec">
			<div class="services_main_bg">
				<div class="container">
					<h5 class="services_title">Our Services</h5>
					<h6 class="services_sec_title">We can succsessfully represent and consult our clients in following areas</h6>
					<div class="row services_row">
            <div class="col services_list">
              <img src="images/family.png">
              <h6 class="services_titles">Family law</h6>
              <ul class="services_ul">
                <li>- Divorse(contested and non contested)</li>
                <li>- Divorse(domestic violence)</li>
                <li>- Child custody</li>
                <li>- Child adoption (including international)</li>
                <li>- Marital property division</li>
                <li>- Paternity</li>
                <li>- Marital contracts</li>
                <li>- Alimony</li>
                <li>- Property division</li>
                <li>- Deprivation of parential rights</li>
              </ul>
            </div>
            <div class="col services_list">
              <img src="images/migrants.png">
              <h6 class="services_titles">Migration law</h6>
              <p class="migration_txt text-left">Complex of laws and other legislative acts dealing with the status of foreigners planning to visit temporarily or wishing to relocate  permanently in Republic of Armenia for various reasons and governing deportation procedure as well. The law office &lt;&lt; Private entrepreneur Minas Arabyan&gt;&gt; is proud to offer a wide variety of immigration related services including but not limited to the following areas:</p>
              <ul class="services_ul">
                <li>- Visas and ivitations</li>
                <li>- Asylum</li>
                <li>- Deportation procedures</li>
                <li>- Citizenship, dual citizenship</li>
                <li>- Termination of citizenship</li>
                <li>- Temporary, permanent and special residency statuses</li>
                <li>- ID card and passport procedures</li>
                <li>- Extradition procedures</li>
                <li>- Appeal of administrative decisions concerning migration issues.</li>
              </ul>
            </div>
            <div class="col services_list">
              <img src="images/civil.png">
              <h6 class="services_titles">Civil Litigations</h6>
              <ul class="services_ul">
                <li>- Dept relief</li>
                <li>- Disputes concerning breaching of contractual duties</li>
                <li>- Real estate and property law litigations </li>
                <li>- Legal consulting on real estate issues.</li>
                <li>- Compensation of personal injury </li>
                <li>- Expertise and development of contracts</li>
                <li>- Servitute and concerning litigations</li>
                <li>- Heritage and concerning disputes</li>
              </ul>
            </div>
          </div>
          <div class="row">
              <div class="col services_list">
                <img src="images/law.png">
                <h6 class="services_titles">Administrative Procedures</h6>
                <ul class="services_ul">
                  <li>- Represantation in administrative agencies</li>
                  <li>- Juridicial and administrative appeal of administrtative acts</li>
                  <li>- Appeal of administrative court’s dicisions</li>
                </ul>
              </div>
              <div class="col services_list">
                <img src="images/work-team.png">
                <h6 class="services_titles">Labour law</h6>
                <ul class="services_ul">
                  <li>- Legal support for labour relations</li>
                  <li>- Labour disputes</li>
                  <li>- Development of personal and collective labour contracts</li>
                  <li>- Development and expertise of employer’s internal legal acts.</li>
                </ul>
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
		name: 'Services',
		components: {
			Header,
			Footer
		}
	}
</script>
<style lang="scss">
  @import "../../public/sass/style.scss";
</style>