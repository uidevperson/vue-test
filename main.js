Vue.component('tabs', {
	props: ['title', 'body'],
	template: `
	<div>
	  <div class="tabs">
		  <ul>
		    <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }" >
		    	<a href='#' @click="selectedTab(tab) "> {{ tab.name}}</a>
		    </li>
		  </ul>
		</div>

		<div class='tab-details'>
			<slot></slot>
		</div>
	</div>
	`,
	data() {
		return { tabs:[] };
	},
	created() {
		this.tabs = this.$children;
	},
	methods: {
		selectedTab(selectedTab){
			this.tabs.forEach(tab => {
				tab.isActive = (tab.name === selectedTab.name);
			});
		}
	}
});

Vue.component('tab', {
	template:`
		<div><slot></slot></div>
	`,
	props: {
		name: {
			required: true,
			selected: {
				default: false
			}
		}
	},
	data(){
		return {
			isActive: false
		};
	},
	mounted(){
		this.isActive = this.selected;
	}
});

new Vue({
	el: '#root',
	data: {
		showModal: false
	}
});