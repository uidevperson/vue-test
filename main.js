Vue.component('modal', {
	props: ['title', 'body'],
	template: `
	  <div class="modal is-active">
		  <div class="modal-background"></div>
		  <div class="modal-content">
		  	<div class='box'>
			    <p>
			    	Lorem ipsum dolor sit amet.
			    </p>
		  	</div>
		  </div>
		  <button class="modal-close is-large" aria-label="close"></button>
		</div> 
	`,
	data(){
		return{
			isVisible: true
		};
	},
	methods: {
			hideModal(){
				this.isVisible = false;
			}
	}
});

new Vue({
	el: '#root'
});