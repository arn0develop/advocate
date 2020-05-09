<template>
	<div>
		<Header/>
		<div class="about_bg">
			<div class="container">
				<h2 class="pages_title">About Us</h2>
			</div>
		</div>
		<section class="about_who">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-sm-12 who_div">
						<h4 class="about_page_titles text-left">Who We Are</h4>
						<article class="text-left">
							The law office Private entrepreneur Sam Smith is an independent law firm, not associated with any governmental or non-governmental entity. The law office strives at protecting the rights and legal interests of its clients, in various fields of law, including but not limited to general civil, migration, family law, labour law and administrative law. The staff is comprised of skilled attorneys, who are trained to handle each individual case with the required sensibility, starting from interfacing with the client, to defending of the client's rights in government administrations, and as necessary, in responsible representation in court. Our activity is based on independence, privacy, responsibility and individual approach. The firm is providing legal services in armenian, english and russian languages.
						</article>
					</div>
					<div class="col-md-6 col-sm-12">
						<ProgressPage/>
					</div>
				</div>
			</div>
		</section>
		<section class="testimonial_sec">
			<div class="testimonial_bg">
				<div class="container">
					<div class="testimonial_slide">
						<h3 class="test_title">What People Say</h3>
						<p class="comment">
							<q>
								We have been very pleased with our experience with the Law&amp;Justice. Although we did not actually go to court, I felt that Jane was more than ready to fight her best for us. Our whole experience with all of the staff was very easy and enjoyable. Thank you for your work!
							</q>
						</p>
						<cite class="client_name">Michael Jackson</cite>
						<cite class="desc">Client</cite>
					</div>
				</div>
			</div>
		</section>
		<section class="choose_sec">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-sm-12">
						<h4 class="about_page_titles text-left">Who We Are</h4>
						<div class="choose_divs">
							<img class="float-left" src="images/avatar.png" alt="Avatar">
							<h6 class="text-left">Our Beliefs</h6>
							<article class="text-left">Our firm is like family. We truly believe that each case is someone’s life and we need to treat it as such.</article>
						</div>
						<div class="choose_divs">
							<img class="float-left" src="images/court.png" alt="Avatar">
							<h6 class="text-left">Rich Experience</h6>
							<article class="text-left">Experience gets the job done. Law&Justice’s attorneys have more than 150 years of combined legal practice.</article>
						</div>
						<div class="choose_divs">
							<img class="float-left" src="images/suitcase.png" alt="Avatar">
							<h6 class="text-left">Great Results</h6>
							<article class="text-left">Results are only successful when we make a difference in your life. We’ll help you get the money and benefits.</article>
						</div>
					</div>
					<div class="col-md-6 col-sm-12">
						<img class="img-fluid" src="images/choose.jpg">
					</div>
				</div>
			</div>
		</section>
		<CountUp/>
		<Footer/>
	</div>
</template>

<script>
import Header from '@/components/Header'
import ProgressPage from '@/components/ProgressPage'
import CountUp from '@/components/CountUp'
import Footer from '@/components/Footer'
	export default {
		name: 'About',
		components: {
			Header,
			CountUp,
			Footer,
			ProgressPage
		}
	}
</script>
