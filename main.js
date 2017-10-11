window.Event = new Vue();

Vue.component('coupon', {
	template: `
	<div>
	  <input type='text' placeholder='pants' @blur='onCouponApplied'/>
	</div>
	`,
	methods: { 	
		onCouponApplied(e){
			e.preventDefault();
			Event.$emit('applied', e.currentTarget.value);
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
		Event.$on('applied', (value) => {
			this.onCouponApplied(value);
		});
	}
});


