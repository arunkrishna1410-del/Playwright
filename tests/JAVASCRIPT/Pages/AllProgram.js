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
/** //Find duplicate elements
//let arr=[0, 1 ,2, 3, 4, 5, 6] - index
let arr = [1, 2, 3, 2, 4, 1, 5];//-number
let output = [...arr.filter((num,index)=>
   arr.indexOf(num)!==index)]//indexOf will will take the number from first whan the index matches..
console.log(output)*/

//------------------------------------------------------------------------------------------------
/** //Count vowels
//finding the vowels in the given character
let str = "javascript";
let result = [...str].filter(char=>"aeiou".includes(char)).length;
console.log(result); */

//----------------------------------------------------------------------------------------------
/** //Count character occurrences
let input = "javascriptworkingarun"
let result = {};//Here, we are creating an empty object.//Because we need to store each character and its count.
for(let char of input){//It takes every character one by one and stores it in the variable char.
    if(result[char]){//1.result["j"]now result is empty so false it will move to else j:1,
                     //it stores in the result in key and value ex..result ={j:1,a:1,v:1,now again a}
                       
        result[char]++//now we already have a:1 in result now +1 is 2 = a:2
    }else{
        result[char]=1;
    }
}
console.log(result) */
//------------------------------------------------------------------------------------------------------
/** //find missing character
let arr = [1, 2, 3, 5, 6];
let n = 6;
let out = n * (n+1)/2 - arr.reduce((num,acc)=>num + acc)
        //6*(6+1)/2=>6*7/2=>42/2=>21 - 1+2+3+5+6 = 17    
        //21-17 = 4
console.log(out)//4 */

//------------------------------------------------------------------------------------------------------
/** //Find longest word
let word = "hi this is arun from pondycherry in ariyur"
let out = word.split(" ");//[ 'hi', 'this', 'is', 'arun', 'from', 'pondycherry', 'in', 'ariyur' ]
let output = out.reduce((a,b)=>a.length > b.length ? a:b)
//1.hi.length > this.length ? a:b -- b true
//2.this.length > this.is ? a:b -- a true
//3.this.length > this.arun ? a:b -- a true
//4.this.length > this.from ? a:b -- a true
//5.this.length > this.pondycherry ? a:b -- b true
//6.this.pondycherry > this.in ? a:b -- a true
//7.this.pondycherry > this.ariyur ? a:b -- a true
console.log(output);//pondycherry */

//-------------------------------------------------------------------------------------------------------
/** //Find the first non-repeated character
let input = "aabbddctdthd"
let r = {};
for(let char of input){
    if(r[char]){
        r[char]++
    }else{
        r[char]=1
    }
}
console.log(r)//{ a: 2, b: 2, d: 4, c: 1, t: 2, h: 1 }

for(let output of input){
    if(r[output]===1){
        console.log(output)//c
        break;
    }
} */

//-------------------------------------------------------------------------------------------------------
/** //Replace vowels in "Tomorrow" with *
let value = "TomorrOw"
let out = value.replace(/[aeiou]/gi, "*"); 
                    // /[aeiou]/-[aeiou] – matches vowels: a, e, i, o, u. 
                    // g – replaces all matching vowels, not just the first one.
                    // i – ignores uppercase/lowercase differences.
                    // * - replace with this one. *
console.log(out)//T*m*rr*w */

//----------------------------------------------------------------------------------------------------
/** //Reverse every word without changing word order
let text = "Java Selenium Testing"
                ////[ 'Java', 'Selenium', 'Testing' ]
let splited = text.split(" ").map(word=>word.split("").reverse().join("")).join(" ");//map will retun a new array so we are using this join in last
console.log(splited)//avaJ muineleS gnitseT
                                         //["J","a","v","a"]
                                                        //	["a","v","a","J"]
                                                                    //"avaJ"  
*/                                                                    
//----------------------------------------------------------------------------------------------------------
/** //Find each character and its count in every word
let str = "Java Selenium Java API Selenium Testing";
let word = str.split(" ");//[ 'Java', 'Selenium', 'Java', 'API', 'Selenium', 'Testing' ]
for(let first of word){
    let count = {}
    for(let second of first){
        count[second] = (count[second]||0)+1;
    }
    console.log(first,count)
}
*/
//---------------------------------------------------------------------------------------------------------
/** //Check whether two strings are anagrams
let one = "listen"
let two = "silent"
let oneoutput = [...one].sort().join("");//eilnst
let twooutput = [...two].sort().join("");//eilnst
console.log(oneoutput===twooutput ? "anagrams":"not anagrams")//anagrams *? */

//--------------------------------------------------------------------------------------------------------
/** //Find duplicate characters and their count
let input = "programming"
let r={}
for(let out of input){
    if(r[out]){
        r[out]++
    }else{
        r[out]=1
    }
}
for(let output in r){
    if(r[output]>1){
        console.log(output,r[output])
    }
}
*/
//----------------------------------------------------------------------------------------------------------
