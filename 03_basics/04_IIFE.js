// immedeatly invoked function expression(IIFE)
// iife is used to prevent the pollution of the global variabes
// also helps in executin the function immediatly

// named iife
(function vaish() {
    console.log(`hello Vaishnavi`)
})();

// its similar like vaish()
// vaish is wrapped inside peranthesis directly ()();

// un-named iife
((user)=>{
    console.log(`welcome ${user}`)
})('harsha');