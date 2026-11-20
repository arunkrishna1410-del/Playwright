/** //Move all the zeros to the last
let value = [87,0,57,87,58,99,2444,0,95,65,0,100,875]

const output = [...value.filter(num=>num!==0),...value.filter(num=>num==0)]
console.log(output) //[87,   57, 87, 58,99, 2444, 95, 65,100,  875,  0,  0,0]*/

//--------------------------------------------------------------------------------------
/** //need to find the duplicate character and print it
let name = "arunjayapriyasanjay";
let duplicate = new Set(); // we are using new Set() opject here to deduct the duplication
//once the iteration is finished now duplicate = { 'a', 'r', 'n', 'j', 'y' }
for (let i = 0;i<name.length; i++){
    for(let j=i+1;j<name.length; j++){
        if(name.charAt(i)===name.charAt(j)){
           duplicate.add(name.charAt(i));//we will get all the repeaded values in a,a,a,a,r,n,j,a,a,alike this but
           //duplicate.add will delete the duplicate and give it in like { 'a', 'r', 'n', 'j', 'y' }
        }
    }
}
duplicate.forEach(output=>console.log(output)) // here we using forEach to print all the value a,r,n,j,y*/

//------------------------------------------------------------------------------------------
/** //reverse the given string
let name = "arunjayapriyasanjay";
let output = [...name].reverse().join("");//by default it will remove all the space and symbols join.
//without join we will get like this ['y', 'a', 'j', 'n', 'a','s', 'a', 'y', 'i', 'r','p', 'a', 'y', 'a', 'j','n', 'u', 'r', 'a']
console.log(output); //yajnasayirpayajnura*/

//--------------------------------------------------------------------------------------------
/** //Plaindrome true or not
let name = "arunjayapriyasanjay";
let output = [...name].reverse().join("");
if(output===name){
    console.log("it is palindrome")
}else{
    console.log("not a palindrome")//not a palindrome
}*/

//---------------------------------------------------------------------------------------------------
/** //Remove duplicate characters and print it
let name = "arunjayapriyasanjay";
let output = [...new Set(name)].join("");//remove the duplicate and join it together
console.log(output)//arunjypis */

//-------------------------------------------------------------------------------------------------
/** //Remove duplicate array elements
let arr = [1, 2, 3, 2, 4, 1, 5];
let out = [...new Set(arr)];
console.log(out)//[ 1, 2, 3, 4, 5 ] */

//--------------------------------------------------------------------------------------------------
/** //Find largest number
let arr = [10, 25, 5, 40, 15];

let output = [Math.max(...arr)]
console.log(output)//[ 40 ]*/

//------------------------------------------------------------------------------------------------
/** //Find smallest number
let arr = [10, 25, 5, 40, 15];
let output = [Math.min(...arr)];
console.log(output);//[ 5 ]*/

//---------------------------------------------------------------------------------------------
/** //using reduce() - is used to convert all array elements into a single accumulated value. Find sum of array elements
let arr = [87,84,52,98,54,87]
let out = arr.reduce((total,num)=>{
    return total+num;
})            
console.log(out) */

//-----------------------------------------------------------------------------------------------
/** //scond largest number
let arr = [87,52,45,87,100,1544]
let output = [...new Set(arr)].sort((a,b)=> b-a); //b-a ->[ 1544, 100, 87, 52, 45 ] //a-b->[ 45, 52, 87, 100, 1544 ]
console.log(output[1])//100 */

//---------------------------------------------------------------------------------------------

/** // odd and even number
let arr = [87,78,95,59,35,12,65,48,51,21]
let even =arr.filter(num=>num%2 == 0)
let odd =arr.filter(num=>num%2 !== 0)
console.log(even)//[ 78, 12, 48 ]
console.log(odd)//[87, 95, 59, 35,65, 51, 21]*/

//-------------------------------------------------------------------------------------------------
/** //Sort array in ascending order
let arr = [40, 10, 30, 20, 5];
let output = [...arr].sort((a,b)=>a-b) //[ 5, 10, 20, 30, 40 ]
console.log(output)*/

//------------------------------------------------------------------------------------------
/** //Find common elements in two arrays
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let output = arr1.filter(num=>arr2.includes(num)) //[ 3, 4 ]
console.log(output)*/

//---------------------------------------------------------------------------------------------
//Find duplicate elements
//let arr=[0, 1 ,2, 3, 4, 5, 6] - index
let arr = [1, 2, 3, 2, 4, 1, 5];//-number
let output = [...arr.filter((num,index)=>
   arr.indexOf(num)!==index)]//indexOf will will take the number from first whan the index matches..
console.log(output)
//--------------------------------------------------------------------------------------------------