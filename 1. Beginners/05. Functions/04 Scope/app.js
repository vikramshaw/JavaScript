// Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.

// The two types of scope are local and global

// Global variables are those declared outside of a block.

// Local variables are those declared inside of a block.

// Global Scope
// Local Scope

let textMessage = "hi"; // Global Scope
// textMessage = "Vikram";  let ---> Cannot be redeclaried but can be reassigned

function showMessage() {
  let textMessage = "Vikram"; // Local Scope
  console.log(textMessage); // Access Local Scope
}

showMessage();

for (let i = 0; i < 5; i++) {
  console.log(i); // Local Scope
}

console.log(i); // Gives Error as i is not defined. Global Scope

console.log(textMessage); // Access Global Scope
