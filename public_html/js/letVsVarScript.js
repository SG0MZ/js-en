/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

/* 
  let vs var

   let:
   1) RANGE (to block)
   2) MEMORY RELEASE (immediately after block)
   3) HOISTING (none)
   4) REDECLARATION (secure)

   var:
   1) RANGE (function)
   2) MEMORY RELEASE (after leaving function)
   3) HOISTING (yes)
   4) Re-declare (declare as much as you want)
*/
var age;
 if (age === 4)
   alert("true");

 if (true)
 {
   let age = 4;
 }

alert(age);


//var name, nr, age, sample;

let nr = 10;

 let sum  = 0;
 for (let i = 0; i < 10; i++)
 {
     if (sum === 15)
       break
     sum += 5;
 }

// alert(nr);
function test()
{
  if (true)
  {
    var nr = 5;
  }

}
test();
 alert(nr);
