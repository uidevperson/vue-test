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

Vue.component('coupon', {
	template: `
	<div>
	  <input type='text' placeholder='pants' @blur='onCouponApplied'/>
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


