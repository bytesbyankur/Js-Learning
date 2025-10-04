//Q. Write a function that takes a string and returns it reversed.

const palin = (n) =>{
   let new_str = ""
   for(let i=(n.length-1);i>=0;i--){
      new_str = new_str+n.charAt(i)
   }

   console.log(new_str)
}

palin("Ankur")