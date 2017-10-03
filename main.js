Vue.component('task-list', {

	template: `
		<div>
			<task v-for="task in tasks">{{ task.task}}</task>
		</div>
	`,
	data() {
		return {
			tasks: [
				{task: 'go to the store', complete: true},
				{task: 'finish screencast', complete: false},
				{task: 'make donation', complete: false},
				{task: 'clear inbox', complete: false},
				{task: 'gmake dinner', complete: false},
				{task: 'clean room', complete: true},
			] 
		};
	}
});

Vue.component('task', {
	template: '<li><slot></slot></li>'
});

new Vue({
	el: '#root',
	data: {

	}
});