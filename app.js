// process.stdout.write("hello ");
// process.stdout.write("world");

// let prompt = require("prompt-sync")();
// let a = prompt("Enter a number ");
// process.stdout.write(a);

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number"));

// right angle triangle pattern
// for(let i=1; i<=n; i++){
//   for (let j=1; j<=i; j++){
//   process.stdout.write("* ");
//   }

//   console.log()
// }

// number pattern
// for(let i= 1; i<= n; i++){
//   for(let j= 1; j<=i; j++){
//     process.stdout.write( j + " ");
//   }
//   console.log()
// }

// Alphabet pattern
// for(let i=1; i<=n; i++){
//   let ascii = 65;
//   for(let j=1; j<=i; j++){
//     process.stdout.write(String.fromCharCode(ascii) + " ");
//     ascii++;
//   }
//   console.log();
// }

// decrement pattern

// for(let i=1; i<=n; i++){
//   for(let j=1; j<=n-i+1; j++){
//     process.stdout.write("* ");
//   }
//   console.log()
// }
// 2nd way
// for(let i=1; i<=n; i++){
//   for(let j=n; j>=i; j--){
//     process.stdout.write("* ");
//   }
//   console.log()
// }

// right side mirrored pattern

// for(let i=1; i<=n; i++){
//   for(let j=1; j<=n-i; j++){
//     process.stdout.write(" _ ");
//   }

//   for(let j=1; j<=i; j++){
//     process.stdout.write("* ");
//   }
//   console.log();
// }

//X pattern

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }

// v pattern

for(let i=1; i<=n; i++){
  for(let j=1; j<=2*n-1 ; j++){
    if(j==i || i+j==2*n){
      process.stdout.write("* ");
    }
    else{      
      process.stdout.write("  ");
    }
  }
  console.log();  
  }

