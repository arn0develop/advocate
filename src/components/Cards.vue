<template>
	<div>
	<mdb-container>
		<mdb-row class="cards_row">
			<mdb-card-group deck>
				<mdb-card class="z-depth-0">
					<div class="card_img">
						<img class="img-fluid text-center" src="../../public/images/law.png">
					</div>
					<mdb-card-body>
						<mdb-card-title class="custom_title">Administrative Procedures</mdb-card-title>
						<mdb-card-text>
							Administrative procedures are a set of formal objective rules enacted by a private or governmental organization.
						</mdb-card-text>
					</mdb-card-body>
				</mdb-card>
				<mdb-card class="z-depth-0">
					<div class="card_img">
						<img class="img-fluid text-center" src="../../public/images/family.png" height="64" width="64">
					</div>
					<mdb-card-body>
						<mdb-card-title class="custom_title">Family Law</mdb-card-title>
						<mdb-card-text>
							Family law is an area of the law that deals with family matters and domestic relations.
						</mdb-card-text>
					</mdb-card-body>
				</mdb-card>
				<mdb-card class="z-depth-0">
					<div class="card_img">
						<img class="img-fluid text-center" src="../../public/images/migrants.png" height="64" width="64">
					</div>
					<mdb-card-body>
						<mdb-card-title class="custom_title">Migration Law</mdb-card-title>
						<mdb-card-text>Migration law - a branch of law that regulates the movement of a person and the change of their place.</mdb-card-text>
					</mdb-card-body>
				</mdb-card>
				<mdb-card class="z-depth-0">
					<div class="card_img">
						<img class="img-fluid text-center" src="../../public/images/work-team.png" height="64" width="64">
					</div>
					<mdb-card-body>
						<mdb-card-title class="custom_title">Labour Law</mdb-card-title>
						<mdb-card-text>Labour law mediates the relationship between workers, employing entities, trade unions and the government.</mdb-card-text>
					</mdb-card-body>
				</mdb-card>
			</mdb-card-group>
		</mdb-row>
	</mdb-container>
	</div>
</template>

<script>

export default {
 name: 'Cards'
}
</script>
<script>
	import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon } from 'mdbvue';
	export default {
		name: 'CardProPage',
		components: {
			mdbContainer,
			mdbRow,
			mdbCol,
			mdbCard,
			mdbCardImage,
			mdbCardHeader,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
			mdbCardFooter,
			mdbCardUp,
			mdbCardAvatar,
			mdbCardGroup,
			mdbBtn,
			mdbView,
			mdbMask,
			mdbIcon
		}
	}
</script>


<style lang="scss">
  @import "../../public/sass/style.scss";
</style>