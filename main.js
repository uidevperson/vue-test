Vue.component('coupon', {
	template: `
	<div>
	  <input type='text' placeholder='pants' @blur='onCouponApplied'/>
	</div>
	`,
	methods: { 	
		onCouponApplied(e){
			e.preventDefault();
			this.$emit('applied', e.currentTarget.value);
		}
	}
});

new Vue({
	el: '#root',
	methods: { 	
		onCouponApplied(value){
			alert('applied ' + value);
		}
	}
});


