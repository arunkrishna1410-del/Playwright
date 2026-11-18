function username(name){//1. username is a function
    console.log("hellow"+ " "+ name)//hello Arun
}

function processit(callback){//3. inside processit the callback refferce to the uername function 
    callback("Arun"); //4. callback("Arun") calls the username function.
}

processit(username)//2. we have passed username into processit


// 1. Define the callback function
function sayGoodbye() {
  console.log("Goodbye! Have a great day.");
}

// 2. Define a function that accepts another function as a parameter
function greetUser(name, callback) {
  console.log("Hello, " + name + "!");
  
  // 3. Run the callback function now that the callback function automaticaly calls the sayGoodboye function to we dont need to 
        //call the sayGoodboye function separatly
  callback(); 
}

// 4. Pass 'sayGoodbye' as an argument (Notice: No parentheses () here!)
greetUser("Rahul", sayGoodbye);