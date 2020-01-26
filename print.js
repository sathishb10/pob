function corectposition(a,b){
    var position=0
     var count=0
 for(var i=0;i<a.length;i++){
   for(var j=i;j<b.length;j++){
     if(a[i]==b[j] && i==j){
         position++
         count++
            break;    
       }
       else if(a[i]===b[j]){
      count++
      break;
     }      
     }
   }
 console.log(position)
 console.log(count)
 }
 //corectposition([1,1,2,3,4],[1,1,1,2,5])
 //corectposition([1,1,1,2,3,4,1],[1,1,1,7,2,5,6,7])
 //corectposition([0,1,2,3,4],[1,2,3,4,5])
 
 function positioncount(a,b){
 var ar=[]
 var br=[]
 var position=0
 var count=0
 for(var i=0;i<a.length;i++){
   if(a[i]==b[i]){
     position++
   }
   else{
     ar.push(a[i])
     br.push(b[i])
   }
 }
  console.log(ar)
  console.log(br)
 var ar=new Set(ar)
 var br=new Set(br)
 
 var ar=Array.from(ar)
 var br=Array.from(br)
 for(j=0;j<ar.length;j++){
   if(br.includes(ar[j])){
     count++
   }
 }
 console.log("pos"+ position)
 console.log("co"+ count)
 }
 //positioncount([1,2,2,2,2],[1,3,1,2,2])
 
 // ================================================================
 
 function matching(arr1,arr2){
   var position=0
   var to=0
   lastIndex=0
   for(var i=0;i<arr1.length;i++){
     index=arr2.indexOf(arr1[i])
        console.log(index)
        if(index !=-1){
        if(arr1[i]==arr2[i]){
          position++
          to++
        }
        else{
          to++
        }
        }
        else if(index !==-1 && index>lastIndex){
          to++
        }
   }
 console.log("pos"+position)
 console.log("co"+to)
 }
 //matching([1,1,1,3,2],[1,1,1,3,5])                 //3,4
 //matching([1,1,2,3,4],[1,1,1,2,5])               //2,3
 //matching([0,1,2,3,4],[1,2,3,4,5])             //4
 
 // ===============================================
 
 function longsubstring(arr){
         var string=""
         var minlen=Infinity;
         arr.forEach(function(str){
           if(str.length<minlen){
             minlen=str.length
             string=str
           }
         })
         var substr=[]
         for(var i=0;i<minlen;i++){
           for(var j=i;j<minlen;j++){
             substr.push(string.substring(i,j+1))
           }
         }
         substr.sort((a,b)=> b.length-a.length)
         for(var i=0;i<substr.length;i++){
           var flag=0
           for(var j=0;j<arr.length;j++){
               if(arr[j].includes(substr[i])==false){
                // console.log(substr[i] +" "+arr[j])
                 flag=1
                 break;
               }
                }
               if(flag==0){
                 return substr[i]
               }
               }
         return "no common string"
       }
 //longsubstring(["nrame","ram","gadme"])
 
 // ===========================================================
 
 //doubt
 function longestConsec(strarr, k) {
   //console.log(strarr)
     const n = strarr.length;
     if (n === 0 || k > n || k <= 0) { 
       return "";
     }
 let lengthChecker = "";
 for ( let i = 0; i < strarr.length; i++) { 
   var str = "";
 let sliced = strarr.slice(i,k)
 //console.log(sliced)
 for (string of sliced){ 
   str+= string;
 }
 if (str.length > lengthChecker.length) { 
   lengthChecker = str;
 }
 k++
 }
 return lengthChecker;
 }
  //longestConsec(["666666", "1", "999999999", "22", "666666", "666666"], 2)
 //longestConsec(["it","wkppv","ixoyx", "3462", "zzzzzzzzzzzz"], 1)
 
 // ================================================
  function runLongestIndex(str) {
  var n = str.length; 
     var count = 0; 
     var res = str[0]; 
     var cur_count = 1; 
 
     for (var i=0; i<n-1; i++) 
     {  
         if ( str[i] == str[i+1]) {
             cur_count++; 
     }
         else
         { 
             if (cur_count > count) { 
                 count = cur_count; 
                 res = str[i]; 
             } 
             cur_count = 1; 
         } 
     } 
     return count; 
 } 
 //runLongestIndex('aabcdaaaddc')
 
 // ========================================================
 
 function kk(arr){
 var results = [];
 for (var i = 1; i < arr.length; i++) {
     if ((arr[i] - arr[i-1] != 1) && (arr[i] - arr[i+1] != 1)) {
         results.push(arr[i]);
     }
 }
 console.log(results)
 }
 //kk([1, 2, 3, 5, 10, 9, 8, 9, 10, 11, 12])
 
 // ===========================================================
 
 
 
 /*You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
 
 #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
 
 n being the length of the string array, if n = 0 or k > n or k <= 0 return "".*/
 //longestConsec(['a', 'bb', 'ccc', 'ddbktghdd'],2)
 // longestConsec(["abcd", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 3)
 //longestConsec(["zonek", "abigail", "form", "theta", "libe", "zas"], 2)
 
 //longestConsec(["ejjjjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 4)
 
 
 function longestConsec(strarr, k) {
     // your code
     var string = ""
     var n = strarr.length; 
     if (n === 0 || k > n || k <= 0) {
       return string; 
     }
     else {
       //find out which word is the longest word
       //return "that word + (k-1)after that word:
       var lengthWord = [];
       var max = 0; 
       var longest_word = ""
       for (var i = 0; i < strarr.length; i++) {
         if (strarr[i].length > max ) {
           max = strarr[i].length;
           longest_word = strarr[i]
           if (i === strarr.length -1 ) {
             return longest_word;
           }
         }
         console.log(strarr[i])
         for (var j = i + 1; j <= k; j++) {
           console.log(longest_word+"longes")
           console.log(strarr[j]+"starr")
           string = longest_word.concat(strarr[j])
         }
       }    //return longest_word; //i = 1, i + (k-1)
     }
   return string; 
 }
 //longestConsec(["zonek", "abigail", "form", "theta", "libe", "zas"], 2)
 
 // ============================================================
 
 function lengthofsubstring(s){
     var result=[]
      for(var i=0;i<s.length;i++){
        if(!result.includes(s[i])){
          result.push(s[i])
        }
      }
      console.log(result.length)
    }
   // lengthofsubstring("ABDEFGABEF")
   // =============================================
 
   function highestsubstring(names){
       var string=""
       var ss=""
       for(var i=0;i<names.length;i++){
         for(var j=i;j<names.length;j++){
           if(string.includes(names[j])){
             break;
           }
           else{
           string+=names[j]
         }
       }
           if(ss.length<string.length){
             ss=string
             string=""
           }
       }
       return ss
   }
   // highestsubstring('ABDEAFGABEF') //pwwkew
   // =====================================================
 
 function longestsub(arr){
 var maxstr=[]
 var current= new Set()
 for(let charcter of arr){
         if(current.has(charcter)){
             var substr= Array.from(current)
             maxstr= maxstr.length<substr.length ? substr : maxstr
             current= new Set(substr.slice(substr.indexOf(charcter)+1)) 
         }
         current.add(charcter)
      } 
      var substrh=maxstr.length>current.size ? maxstr : Array.from(current)
            return substrh.join('')
  }
 const tests = [
      "abcabc",
      "bbb",
      "pwwkew",
      "geeksforgeeks",
      "dvdf"
    ]
   //  tests.map(longestsub).forEach((result)=>console.log(result))
   //  ===================================================================================
 
   function vowels(arr){
     var vow='aeiou'
     var result=[]
     for(var i=0;i<arr.length;i++){
       if(vow.includes(arr[i])){
        var tt=arr.charCodeAt(i)
         result.push(tt)
       }
     }
     var len=result.length
     var count1=0
     var count2=0
     for(var i=0;i<result.length;i++){
    
    if(result[i]<result[i+1]){
        count1++
    }
    else if(result[i]>result[i+1]){
         count2++
    }
    else{
      count1++
      count2++
    }
      }
    if(count1==len){
      return "GOOD"
    }
    else if(count2==len){
      return "worst"
    }
    else{
      return "bad"
    }
        
   }
   //vowels('discount')
   // =============================================================================
 
   function longest_common_deeper(arr){
     let result='',tmp=''
     arr.sort().forEach((e,i,a)=>{
        if(i === a.length - 1)
          return;
 
       var idx=1;
       while(idx<=e.length){
              if(a[i].startsWith(e.slice(0,idx))){
              temp=e.slice(0,idx)
              idx++
              }
              else{
                break;
              }
       }
       result=(temp.length>result.length) ? temp : result
     })
     return result;
   }
   //longest_common_deeper(
     // ['goog', 'google', 'googlesearch', 'answerme', 'answer', 'answerm', 'answera'])
     // ========================================================================================
 
 
     
 
 