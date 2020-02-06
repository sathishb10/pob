function lengthofsubstring(s){
    var result=[]
     for(var i=0;i<s.length;i++){
       if(!result.includes(s[i])){
         result.push(s[i])
       }
     }
     console.log(result.length)
   }
   //lengthofsubstring("ABDEFGABEF")
   
   function higestsubstring(names){
    var string=""
    var ss =""
    for(var i=0;i<names.length;i++){
      for(var j=i;j<names.length;j++){
        if(string.includes(names[j])){
          break;
        }
        else{
          string +=names[j];
        }
      }
      if(ss.length<string.length){
        ss=string
        string=""
      }
    }
    return ss;
   }
   higestsubstring("pwwkew")
   
   //find l;ongest substring in the array
   function longestSubstring(str) {
     let maxSubstr = []
     let current = new Set()
     for (let character of str) {
       if (current.has(character)) {
         const substr = Array.from(current)
         maxSubstr = maxSubstr.length < substr.length ? substr: maxSubstr
         current = new Set(substr.slice(substr.indexOf(character)+1))
       }
       current.add(character)
     }
      const substr = maxSubstr.length < current.size ? Array.from(current) : maxSubstr
      return substr.join('')
   }
   const tests = [
     "abcabc",
     "bbb",
     "pwwkew",
     "geeksforgeeks",
     "dvdf"
   ]
   
   //tests.map(longestSubstring).forEach(result => console.log(result))
   
   // =============================================================================
   // 3
   // discount
   // weak
   // goalkeeper
   // Good
   // Worst
   // Bad
   //aeiou
   // ExplanationFor case 1, the vowels in the spell are i,o and u and they occur in the alphabetical order in the string, so this is a "Good" string.
   // For case 2, the vowels in the spell are e and a and they occur in reverse order of the alphabetical order in the string, so this is a "Worst" string.
   // For case 3, the vowels in the spell are o, a and e and they occur neither in the reverse order nor in the same order as alphabetical, so this is a "Bad" string.
   
   
   function vowels(n){
     var kk="aeiou"
     var str=0;
     var arr=[]
     var count1=0,count2=0
     for(var i=0;i<n.length;i++){
       if(kk.includes(n[i])){
       var tt=n.charCodeAt(i);
       arr.push(tt)
       }
     }
   var len=arr.length
       for(var i=0;i<arr.length;i++){
           if(arr[i]>arr[i+1]){
             count1++
           }
           else if(arr[i]<arr[i+1]){
             count2++
           }
           else{
             count1++
             count2++
           }        
       }
   if(count2==len){
     return "GOOD"
   }
   else if(count1==len){
     console.log("Worst")
   }
   else{
     console.log("Bad")
   }
   }
   
   //vowels("goalkeeper")
   
   // ========================================================
   function longest_common_deeper(arr){
     let result = '', tmp = '';
     arr.sort().forEach((e,i,a) => {
       if(i === a.length - 1)
         return;
       let idx = 1;
       while(idx <= e.length){
         if(a[i+1].startsWith(e.slice(0, idx))) {
           tmp = e.slice(0,idx);
           idx++;
         }
         else
           break;
       }
       result = (tmp.length > result.length) ? tmp : result;
     });
     //console.log(tmp)
     return result;
    }
    //console.log(longest_common_deeper(['goog', 'google', 'googlesearch', 'answerme', 'answer', 'answerm', 'answera']));
   
   //  ===========================================================
   
   //only find the commonsub of the element starting
   function commonSub(strings) {
       const min = Math.min(...strings.map(str => str.length));
       console.log(min)
       let commonSub;
       for (let i = 1; i <= min; i++) {
           const [sub1, sub2] = strings.map(str => str.substring(0, i));
           console.log(sub1 ,sub2)
           if (sub1 !== sub2) continue;
           commonSub = sub1;
       }
       return commonSub || null;
   }
   //const strings = ['goooo', 'google','gooo'];
   //const strings=['name','rame','game']
   //console.log(commonSub(strings)); // goo
   
   
   function commonSubstring(arr) {
       let newStr = "";
       const str1 = arr[0];
       const str2 = arr[1];
       for (let i = 0; i < str1.length; i++) {
           while (str1[i] === str2[i]) {
               newStr += str1[i];
               break;
           }
       }
       return newStr;
   }
   
   //console.log(commonSubstring(['go', 'google'])); // go
   // console.log(commonSubstring(['goog', 'google'])); // goog
   // console.log(commonSubstring(['SQLInjection', 'SQLTutorial'])); // SQL
   // console.log(commonSubstring(['abcd', '1234']));
   
   // =======================================================
   
   
   
   function main(nn,kk) {
      var nn=nn.split("\n");
      var kk=kk.split("\n");
    var input=nn.concat(kk)
      var c=[],log="YES";
      for(var i=0;i<input[0].length;i++){
          c.push(Math.abs(input[0][i].charCodeAt(0) - input[1][i].charCodeAt(0)));
      }
      c.forEach(function(ele,i){
       // console.log(ele+" "+c[i+1])
           if(ele<c[i+1]){
               log="NO";
               return;
           }
       })
       console.log(log);
   }
    //main('abaca' , 'cdbda')
   
   //  =================================================================
   
     function kk(n,kk){
   var c=0
      for(var i=0;i<n.length;i++){
        if(n[i].charCodeAt()>kk[i].charCodeAt()){
         c++
        }
      }
      if(c==0){
        return "YES"
      }
      else{
        return "NO"
      }
    }
    //kk('abaca' , 'cdbda')
    
   //  ==========================================================
   
   
   
   
   function array(arr){
     var krr=arr;
     for(var i=0;i<krr.length;i++){
       if(krr[i]==krr[i+1]){
         krr.splice(i,2)
         i--
       }
     }
   return krr;
   }
   //array([1, 1, 2, 2, 3, 4, 4, 5, 5])
   // //to print non repeated element
   // ========================================================
   
   
   function titlecase(str){
     var convert=str.toLowerCase().split(" ")
         var result=convert.map(function(val){
           return val.replace(val.charAt(0),val.charAt(0).toUpperCase());
         })
         return result
   }
   //titlecase('Im a little tea pot')
   
   // ==================================================
   
   
   function chunkarray(arr,size){
     var arr2=[]
     for(var i=0;i<arr.length ;i+=size){
       arr2.push(arr.slice(i,i+size));
     }
   return arr2
   }
   //chunkarray(["a","b","c","d"],2)
   //chunkarray([0,1,2,3,4,5],3)
   
   function largest(arr){
     var result=[]
     for(var i=0;i<arr.length;i++){
       var max=arr[i][0]
       for(var j=0;j<arr.length;j++){
         if(max<arr[i][j]){
           max=arr[i][j]
         }
       }
       result.push(max)
     }
     console.log(result)
   }
   //largest([[1,4,6,7],[2,8,9,10],[23,45,67,90],[1,2,3,99]])
   
   function mutation(arr){
     var test=arr[1].toLowerCase();
     var target=arr[0].toLowerCase();
     for(var i=0;i<test.length;i++){
       if(target.indexOf(test[i])<0){
         return false;
       }
     }
   return true
   }
   //mutation(['hello','hello'])
   
   // ==============================================
   function longestSubString(str) {
       let longest = '';
       let tmpStr = '';
       for (let i = 0; i < str.length; i++) {
           for (let j = i; j < str.length; j++) {
               if (tmpStr.indexOf(str[j]) !== -1) {
                   i = str.indexOf(str[j],i) + 1;
                   tmpStr = '';
               } else {
                   tmpStr = str.slice(i, j+1);
                   if (tmpStr.length > longest.length) {
                       longest = tmpStr;
                   }
               }
           }
       }
       return longest;
   }
   
   //console.log(longestSubString('google.com'));
   //console.log(longestSubString('example.com'));
   
   
   function pageCount(n, p){
           // Complete this function
             let result;
           var total = n/2;
           var right = p/2;
           var to =Math.floor(total);
           var rg =Math.floor(right);
           //console.log(rg)
           var left = to - rg;    
           if(rg < left){
               return rg;
           }
           else {
               return left;
           }
       }
      // pageCount(18183,18042)
   //     //18183 18042
   // ==========================================================
   
      
   
   