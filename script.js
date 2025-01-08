function welcomeUser(name) {
    console.log(`Hello, ${name}! Welcome!`);
}
welcomeUser("Hajra")

// 2nd Point //

function calculateRectangleArea(length, width) {
    return length * width;
}
const area = calculateRectangleArea(4,4);
console.log(`The area of Rectangle is : ${area}`);

// 3rd Point //

function describePerson(name, age = 25) {
    return `Name is ${name} and age is ${age}.`;
  }

  console.log(describePerson("Ali", 30));  
  console.log(describePerson("Aqsa")); 
   
  // 4th Point //

  const isEven = num => num % 2 === 0;
   
  console.log(isEven(2));
  console.log(isEven(9));

  // 5th Point //

  const findMax = function(num1, num2) {
    return num1 > num2 ? num1 : num2;
  };
  console.log(findMax(16,50));  
  console.log(findMax(20,40));

  // 6th Point //

  function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }
   console.log(isPalindrome("hello"));
   console.log(isPalindrome("madam"));
   console.log(isPalindrome("A man, a plan, a canal: Panama"));

   // 7th Point //

   function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("hello"));  
  console.log(reverseString("world")); 
 

 
 
