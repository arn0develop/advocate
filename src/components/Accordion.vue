<template>
	<div>
		<section class="faq">
			<div class="container">
				<h2 class="faq_title">Faq</h2>
				<div class="row">
					<div class="col-sm-12 col-md-6 faq_img">
						<img class="img-fluid" src="../../public/images/lawhammer.png">
					</div>
					<div class="col-sm-12 col-md-6 faq_accordion">
						<mdb-accordion :panes="panes"/>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
	export default {
		name: "Accordion"
	}
</script>
<script>
  import { mdbAccordion } from 'mdbvue';
  export default {
    components: {
      mdbAccordion,
    },
    data() {
      return {
        panes: [
          {
            title: "What are lawyer's primary responsibilities?",
            content: "Lawyers, by virtue of a state's bar admission, are expected to both uphold the law and protect the rights of their clients. In addition to actually knowing the law, particularly within his or her practice area, an attorney must be able to communicate clearly with their clients, work competently to resolve their client's needs and be ethical in the performance of their overall handling of a case."
          }, 
          {
            title: "I can't afford a lawyer. Do you offer free legal help?",
            content: "You may qualify for free legal help if you meet certain income requirements, especially if you are charged with a crime for which the sentence would deprive you of liberty (such as jail or prison time). For non-criminal matters, community legal clinics and lawyers working \"pro bono\" offer free legal services for those who qualify."
          },
          {
            title: "May I hire a non-lawyer for a legal problem?",
            content: "It depends on the situation and the breadth of service since only lawyers may practice law. Paralegals, for example, may represent you in certain situations involving complaints against a government agency (such as a dispute over Social Security benefits). You may also represent yourself in court, hire a notary public, or work with law students (under the supervision of a lawyer) under certain circumstances."
          },
          {
            title: "What are the requirements for becoming a lawyer?",
            content: "To become a lawyer, one must first complete special training and meet other professional requirements. Although each state has its own standards for licensing attorneys, most states require hopeful lawyers to obtain an undergraduate degree and then graduate from an accredited law school. Once the formal education is complete, they must also take and pass the state's Bar Examination (a rigid test of knowledge in all fields of law), submit to the investigation into their moral character and fitness to practice law, and be sworn in by the state or federal Supreme Court."
          }
        ]
      };
    }
  }
</script>
<style lang="scss">
@import '../../public/sass/style.scss';
</style>