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


const cars = [
    { make: 'Toyota', yrsOld: 5, mileage: 92399 },
    { make: 'Ford', yrsOld: 12, mileage: 255005 },
    { make: 'Ferrari', yrsOld: 9, mileage: 12966 },
    { make: 'Subaru', yrsOld: 9, mileage: 111266 },
    { make: 'Toyota', yrsOld: 2, mileage: 41888 },
    { make: 'Tesla', yrsOld: 3, mileage: 57720 }
  ];


  console.log(results); 

const numbers = [1,-1,-2,3]; 

const filtered = numbers.filter(function(value ){

    return value >= 0;
});

console.log(filtered)

// Question #2
const cars = [
    { make: 'Toyota', yrsOld: 5, mileage: 92399 },
    { make: 'Ford', yrsOld: 12, mileage: 255005 },
    { make: 'Ferrari', yrsOld: 9, mileage: 12966 },
    { make: 'Subaru', yrsOld: 9, mileage: 111266 },
    { make: 'Toyota', yrsOld: 2, mileage: 41888 },
    { make: 'Tesla', yrsOld: 3, mileage: 57720 }
];

    const wellDrivenCars = cars.filter(function(car){
        return car.mileage > 20000
    }); 

    console.log(wellDrivenCars); 



// Question #3 

wellDrivenCars.forEach(function(car){
    console.log(car)
})

// Synchronous Code Execution

const colors = ['red','green','blue']; 

console.log('Code before the forEach')

colors.forEach(function(color, idx){
    console.log(`${idx + 1} - ${color}`);
}); 

console.log('Code after the forEach'); 

// Asynchronous Code Execution

const colors = ['red','green','blue']; 

console.log('Code before the forEach....'); 

// setTimeOut accepts a callback & how long to wait before calling the cb 

setTimeout(function(){
    colors.forEach(function(color, idx){
        console.log(`${idx + 1} - ${color}`); 
    });

}), 1000 //setting the time to 1000 milliseconds 


console.log('Code AFTER the forEach...');

