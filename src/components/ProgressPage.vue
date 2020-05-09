<template>
	<div>
		<mdbProgress/>
		<mdbContainer/>
		<h6 class="prog_title text-left">Family Law</h6>
			<mdb-progress :height="15" :value="25">25%</mdb-progress>
			<h6 class="prog_title text-left">Labour Law</h6>
			<mdb-progress :height="15" :value="40">40%</mdb-progress>
			<h6 class="prog_title text-left">Migration Law</h6>
			<mdb-progress :height="15" :value="65">65%</mdb-progress>
			<h6 class="prog_title text-left">Civil Litigations</h6>
			<mdb-progress :height="15" :value="72">72%</mdb-progress>
			<h6 class="prog_title text-left">Administrative Procedures</h6>
			<mdb-progress :height="15" :value="80">80%</mdb-progress>
	</div>
</template>
<script>
  import { mdbContainer, mdbProgress } from 'mdbvue';
  export default {
    name: 'ProgressPage',
    components: {
      mdbContainer,
      mdbProgress
    }
  }
</script>