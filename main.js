window.Event = new class{
	constructor(){
		this.vue = new Vue();
	}

	fire(event, data = null){
		this.vue.$emit(event, data);
	}
	
	listen(event, callback){
		this.vue.$on(event, callback);
	}
};

Vue.component('modal', {
	template: `  
	  <div class="modal is-active">
		  <div class="modal-background"></div>
		  <div class="modal-card">
		    <header class="modal-card-head">
		      <p class="modal-card-title">
		      	<slot name='header'></slot>
		      </p>
		      <button class="delete" aria-label="close"></button>
		    </header>
		    <section class="modal-card-body">
		      <slot> </slot>
		    </section>
		    <footer class="modal-card-foot">
		    <slot name='footer'>  
		    	default footer
		    </slot>
		    </footer>
		  </div>
		</div>
	`,
	methods: { 	
		onCouponApplied(e){
			e.preventDefault();
			Event.fire('applied', e.currentTarget.value);
		}
	}
});

new Vue({
	el: '#root',
	data:{
		couponApplied: false,
		value: ''
	},
	methods: { 	
		onCouponApplied(value){
			this.couponApplied = true;
			this.value = value;
		}
	},
	created() { 	
		Event.listen('applied', (value) => {
			this.onCouponApplied(value);
		});
	}
});


