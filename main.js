Vue.component('message', {
	props: ['title', 'body'],
	template: `
		<article class="message">
	  <div class="message-header">
	    <p>{{ title }}</p>
	    <button class="delete" aria-label="delete"></button>
	  </div>
	  <div class="message-body">
	  	{{ body }}
	  </div>
	</article>
	`,
	// data() {
	// 	return {
	// 		tasks: [
	// 			{task: 'go to the store', complete: true},
	// 			{task: 'finish screencast', complete: false},
	// 			{task: 'make donation', complete: false},
	// 			{task: 'clear inbox', complete: false},
	// 			{task: 'gmake dinner', complete: false},
	// 			{task: 'clean room', complete: true},
	// 		] 
	// 	};
	// }
});

// Vue.component('task', {
// 	template: '<li><slot></slot></li>'
// });

new Vue({
	el: '#root'
});