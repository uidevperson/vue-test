Vue.component('tabs', {
	props: ['title', 'body'],
	template: `
	  <div class="tabs">
		  <ul>
		    <li class="is-active"><a>Pictures</a></li>
		    <li><a>Music</a></li>
		    <li><a>Videos</a></li>
		    <li><a>Documents</a></li>
		  </ul>
	</div>
	`,
	mounted() {
		console.log(this.$children);
	}
});

new Vue({
	el: '#root',
	data: {
		showModal: false
	}
});