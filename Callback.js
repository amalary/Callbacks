//  Definition : A callback function is a function being passed to another function as an argument.

document.getElementById('todo-container')
    .addEventListener('click',handleTodoClick); 


// - - Event Listener - - * /

document.getElementById('reply-btn').addEventListener('click',init); 

//  - - Functions - - */

init(); 

function init() {
    // initialize state and call render
}

const colors = ['red', 'green', 'blue'];
colors.forEach(function(color, idx) { 
    console.log(`${idx + 1} - ${color}`);
});

