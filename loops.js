
// 6A 
var i = 0 
while (i <= 100){
    console.log (i);
    i += 2;
}

// 6B b.	A while loop that prints every 3rd number going backwards from 100 until we reach 0

var i = 100;
while (i >= 0){
    console.log(i);
    i = i - 3;
}

// 6C. A for loop that prints every other number from 1 to 100

for (var i = 1; i < 100; i +=2){
console.log(i);
}


// 6d. d.	A for loop that prints every number from 0 to 100, but if the number is divisible by 3, it prints “Hello” instead of the number, and if the number is divisible by 5, it prints “World” instead of the number, and if it is divisible by both 3 and 5, it prints “HelloWorld” instead of the number.

for(var i = 1; i <=100; i ++){
    if (i%15==0){
        console.log("Hello World");
    }
    else if (i%3==0){
        console.log ("Hello");
    }
   else if (i%5==0){
       console.log("World");
   }
        else{
            console.log(i)

        }

    }
