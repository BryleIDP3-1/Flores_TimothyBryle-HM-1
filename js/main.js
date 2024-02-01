//The Window.console property returns a reference to the console object, which provides methods for logging information to the browser's console.
console.log("JS file connected");

console.log('JavaScript is running')

const vectorGraphic = document.querySelector('#badge');
console.log(vectorGraphic);


function logThisId() {
    console.log(this);
    console.log('clicked on this element:', this.id)
}

// function logThisId(colour) {
//     console.log(colour);
//     // console,log(this);
//     // console.log('clicked on this element:', this.id);
// }

// logThisId('blue');
// logThisId('orange');

// vectorGraphic.addEventListener('hover', logThisId);
vectorGraphic.addEventListener('click', logThisId);
