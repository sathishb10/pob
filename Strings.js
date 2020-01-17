//polindrome indexedDB;

function palindromeIndex(s) {
    let i=0;
    let j=s.length-1
    while(i<=j){
        if(s[i]==s[j]){
            i++;
            j--;
        }
       else{
           if(s[i+1]===s[j]  && s[i+2]===s[j-1]){
              console.log(s[i+1]+" "+s[j] +" "+ s[i+2]+" "+s[j-1])
               console.log(j +" "+i)
               return i;
           }
           if(s[i]===s[j-1] && s[i+1]===s[j-2]){
               return j;
           }
           }
    }
return -1;
}
palindromeIndex('prcoitfiptvcxrvoalqmfpnqyhrubxspplrftomfehbbhefmotfrlppsxburhyqnpfmqlaorxcvtpiftiocrp')

// --------------------------

function reducestring(s){
    var kk=s.split('')
    for(var i=0;i<kk.length;i++){
      if(kk[i]==kk[i+1]){
        kk.splice(i,2)
        i--
      }    
    }
    return kk;
  }
  reducestring('aaabccddd')

//   ----------------------------------------------------------------


function camelcase(s){

    var count=1
    for(var i=0;i<s.length;i++){
  
      if(s[i]==s[i].toUpperCase()){
        count++
      }
    }
    return count;
  
  }
//   camelcase('saveChangesInTheEditor')
//   ----------------------------------------------------------------------------------

function password(n,s){
    var password=[/[0-9]/,/[a-z]/,/[A-Z]/,/[!@#$%^&*()-+]/]
    .map(c=>!c.test(s)).filter(Boolean).length
    
    return Math.max(password,6-n)
  }
//   password(11,'#HackerRank')
// ---------------------------------------------------------------------------------------  


function twoCharacters(str) {
    var chars = [];
    //const sets= [...new Set(s)]; //OR
    for (var i = 0; i < str.length; i++) {
        if (chars.indexOf(str[i]) < 0)  //-1
            chars.push(str[i]);
    }
    var max = 0;
    var result=[]
    for (i = 0; i < chars.length - 1; i++) {
        for (var j = i + 1; j < chars.length; j++) {
            var pair = [chars[i], chars[j]];
            //console.log(pair)
            var last = null; var count = 0;
            for (var s = 0; s < str.length; s++) {
                var ch = str[s];
                //console.log(ch +"  "+pair[0]+" "+pair[1])
                if ((ch == pair[0] || ch == pair[1])) {
                    if (last == ch) {
                         //console.log(ch)
                        // console.log("kk")
                        count = 0;
                        break;
                    }
                    //console.log(ch)
                    last = ch;
                    count++;
                  
                }
            }
              //console.log(count)
            if (count > max) {
                max = count;
             result=pair
            }
        }
    }
    console.log(result)
    return max;
    
}
twoCharacters("cwomzxmuelmangtosqkgfdqvkzdnxerhravxndvomhbokqmvsfcaddgxgwtpgpqrmeoxvkkjunkbjeyteccpugbkvhljxsshpoymkryydtmfhaogepvbwmypeiqumcibjskmsrpllgbvc")



function ciser(s,k){
    var newstr=""
    for(var i=0;i<s.length;i++){
    var c=s[i]
    if(c.match(/[a-z]/)){
      let num=c.charCodeAt(c)
    if(num>=65 && num<=90){
      c=String.fromCharCode((((num-65)+k)%26) +65)
    }
    else if(num>=90 && num<=120){
      c=String.fromCharCode((((num-97)+k)%26)+97)
    }
    }
    newstr +=c
    }
    return newstr
    }
    // ciser('middle-Outz',2)
    // ---------------------------------------------------------------------------------

    function  marsexploration(s){
        var count=0
          for(var i=0;i<s.length;i+=3){
            
            if(s[i] !=="S"){
              count++
            }
             if(s[i+1] !=="O"){
              count++
            }
           if(s[i+2] !=="S"){
              count++
            }
          }
          return  count;
        }
        marsexploration('SOSSPSSQSSOR')

        
function hackerank(kk){
    var s="hackerrank"
    if(s.length>kk.length){
      return "NO"
    }
    var j=0
    for(var i=0;i<kk.length;i++){
      if(j<s.length && kk.charAt(i) ===s.charAt(j)){
      j++
      }
    }
    return j==s.length ? "yes" : "no"
  }
  hackerank("hhaacckkekraraannk")

//   --------------------------------------------------------------
  function panagram(s){
    var alphabet =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    var lowercase=s.toLowerCase();
    for(var i=0;i<alphabet.length;i++){
    
    if(lowercase.indexOf(alphabet[i])==-1){
      return "No pnagram"
    }
    }
    return "pangram"
    
    
    }
    panagram('We promptly judged antique ivory bucklxes for the prize')

    
function weighteduniform(s,queries){
    var kk=[]
    var ele=0;
    var charIs;
    var charcounting;
     var count=Object.create(null);
      for(var i=0;i<s.length;i++){
        ele=s.charCodeAt(i)-96
        if(charIs===ele){
            charcounting++
        }
        else{
          charcounting=1;
          charIs=ele
        }
      count[ele*charcounting]=true;
      }
    // console.log(count)
      var output=[]
      for(var i=0;i<queries.length;i++){
       output.push(count[queries[i]] ? "YES" : "NO")
    
      }
      return output;
    
    }
    weighteduniform("abccddde",[6,1,3,12,5,9,10])

    // ------------------------------------------

    function funnystring(s){
        const strlen=s.length-1
        for(var i=0;i<strlen;i++){
          var kk=strlen-i
       //console.log(Math.abs(s[i+1].charCodeAt()-s[i].charCodeAt()))
       //console.log(Math.abs(s[kk].charCodeAt()-s[kk-1].charCodeAt()))
       if(Math.abs(s[i+1].charCodeAt()-s[i].charCodeAt()) !==
       Math.abs(s[kk].charCodeAt()-s[kk-1].charCodeAt())){
         return "no fuuny"
       }
       
        }
        return "fujnnt"
       
       
       }
       funnystring('acxz')//bcxz

       function gemstone(kk){
        var types=[...new Set(...kk)]
        var count=0
         types.forEach(letters=>{
               kk.every(part=>part.includes(letters)) ? count++ : false      })
         return count
      }
      gemstone([ 'abcdde', 'abccd', 'eeabg' ])

      
function alternatechar(s){
    var count=0
    for(var i=0;i<s.length;i++){
      if(s[i]==s[i+1]){
        count++
      }
    }
    return count;
  
  }
  alternatechar('BABABA')

  
  
function beautifulbinarstring(s){
    return (s.match(/010/g) || []).length
  
  }
  beautifulbinarstring("0101000010011100111110011000001000100101100010000011010111111101110110001110111110110101001011")

  
 function theLoveLetterMystery(s) {
    var count=0
    var half=Math.ceil(s.length/2)
    for(var i=half;i<s.length;i++){
count=count+Math.abs(s.charCodeAt(i)- s.charCodeAt(s.length-i-1));
    }
return count;
}
theLoveLetterMystery("feazhaxpux")

// -----------------------------------------------------------------------------------------------
function  polindrome(s){
    var i=0
     var j=s.length-1
       while(i<=j){
   
     if(s[i]==s[j]){
       i++
       j--
     }
   else{
       if(s[i+1]===s[j] && s[i+2]===s[j-1]){
         return i;
       }
       if(s[i]===s[j-1] && s[i+1]===s[j-2]){
       return j;
       }
      }
     }
   return -1
   }
   polindrome('quyjjdcgsvvsgcdjjyq')
   //aaab

   //dd
   function makingAnagrams(s1, s2) {

    var str=""
    for(var i=0;i<s1.length;i++){
      if(s2.indexOf(s1[i])===-1){
          str=str+s1[i];
      }  
      else{
          s2=s2.substring(0,s2.indexOf(s1[i]))+s2.substring(s2.indexOf(s1[i])+1,s2.length);
      }
    }
    return str.length+s2.length;
    }

  //  -------------------------------------------------------------- 

    function gameOfThrones(s) {
      const data= new Set()
      s.split('').forEach(letters=> data.has(letters) ? data.delete(s) : data.add(s))
      
      return data.size>1 ? "no" :"yes"
      }
      gameOfThrones("aaabbbb");

      // ============================================================

      function twoStrings(s1, s2) {

        //return (s1.split('').map(l=>s2.includes(l)).filter(k=>!!k).length) ?'YES':'NO'
       
       for(var i=0;i<s1.length;i++){
       if(s2.includes(s1[i])== true){
       
         return 'YES'
       }
       }
       return 'NO'
     }

  //  -------------------------------------------------------------------------------    
       
function stringConstruction(s){
  var s=new Set(s.split(''))
  return Array.from(s).length
}
sherlock('abab')

// ====================================================

function isValid(s) {
  const mapper = function (arr) {
           const map = {};
          for (let el of arr){            
                    if (!map.hasOwnProperty(el)) {
                  map[el] = 1;
                  continue;
              }
              map[el] += 1;
          }
          return map;
      }
  
   const letters = s.split("");
      const counts = mapper(letters);
       const result = mapper(Object.values(counts));
       const keys = Object.keys(result);
    const values = Object.values(result);
      if (keys.length === 1) {
          return "YES";
      }
      if (keys.length === 2) {
          if (result["1"] === 1) {
              return "YES";
          }
         
          if (values.includes(1) && +keys[0] + 1 === +keys[1] 
              || +keys[0] === +keys[1] + 1) {
              return "YES";
          }
      }
  
      return "NO";
  }
  isValid("abcdefghhgfedecba");
  
  
