// User Validation Algorithm

// The username is between 4 and 25 characters. 
// It must start with letter. It can only contain letters, 
// number and the underscore character.
// If the username is valid then your program should return the string true.
// Test username is "u_hello_world123"

const userValidation = (username) => {
    
      if (
          username &&
          username.length >= 4 && username.length <= 25 && 
          (/[a-zA-Z]/).test(username.charAt(0)) && 
          (/^\w+$/).test(username)  
      ){
          return true;
      } else {
          return false;
      }
      
};

console.log(userValidation("u_hello_world123")); 