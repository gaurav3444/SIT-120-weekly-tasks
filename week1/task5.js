let vue = new Vue({
    el: '#app',
    data: {
        todos: [
            {title: 'complete assignment 1 of unit xxx', checked: false},
            {title: 'complete tasksheet of unit xxx', checked: true},
            {title: 'revise lecture', checked: true},
        ],
    },
    methods: {
        toggle: function(todo){
            todo.done = !todo.done
        },
        addItem: function (newItem){
            var value = this.newItem && this.newItem.trim()
            this.todos.push({
                title: value,
                done: false})
            this.newItem = "";
        }
    } 
});
