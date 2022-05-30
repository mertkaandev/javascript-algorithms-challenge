// Reverse String

// Reverse the string that comes as a parameter.

const reverse = (string) => {

     const arr = string.split("");
     const reversedArr = arr.reverse();
     const newStr = reversedArr.join();

     return newStr;

}

console.log(reverse("hey"));

