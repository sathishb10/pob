function migratoryBirds(arr){
    var newarr=new Array(arr.length).fill(0)
  
          for(let i=0;i<arr.length;i++){
          newarr[arr[i]] +=1
          }
          console.log(newarr)
          return newarr.indexOf(newarr.reduce((a,b)=> Math.max(a,b)))
  }
  // migratoryBirds([1 ,2 ,3 ,4 ,5, 4 ,3 ,2 ,1, 3,3, 4])  //3
  
  //count the numbers which are same.
  //     var k = 0;
  //     var results = 1;
  //    var result;
  //    var kk=arr.sort((a,b)=> a-b)
  //     for (let i = 0; i < kk.length; i++) {
  //         for (let j = 0; j < kk.length; j++) {
  //             if (kk[i] ==kk[j]) {
  //                 k++
  //                 if (results < k) {
  //                     results = k;
  //                     result=kk[i];
  //                 }
  //             }
  //         }
  //         k = 0;
  //     }
  // return result;
  
  // ------------------------------------------------------------
  function bonAppetit(bill, k, b) {
      const annasBill = (bill.reduce((a, b) => a + b, 0) - bill[k]) / 2;
      annasBill === b ? console.log('Bon Appetit') : console.log(b - annasBill);
  }
  // bonAppetit([3,10,2,9],1,12)
  // ----------------------------------------------------
  function sockMerchant(n, ar) {
  var result = 0;
      ar.sort();
      for(let i=0; i<n;i++){
          if(ar[i] == ar[i+1]){
              i++;
                    result++;
             }
      }
  return result;
  }
  // sockMerchant([10 ,20, 20, 10, 10, 30, 50, 10 ,20])
  // -----------------------------------------------------------------
  function countingValleys(n, s) {
  var altitude=0; var result=0;
  for(var i=0;i<n;i++)
  {
  if(s[i]=='U')
  {
  altitude++;
  
  if(altitude==0)
  {
  result++;
  }
  }
  else{
    //console.log(altitude--);
    altitude--;
    }}
  
    return result;
  }
  // countingValleys(8,"UDDDUDUU")
  // --------------------------------------------------
  function getMoneySpent(keyboards, drives, b) {
    var moneySpent=-1;
    var temp=0;
    for(var i=0;i<keyboards.length;i++){
  
  for(var j=0;j<drives.length;j++){
  if(keyboards[i]+drives[j]<=b){
  temp=keyboards[i]+drives[j];
   moneySpent = temp > moneySpent ? temp : moneySpent;
  }}
  
  }
  return moneySpent;
  }
  // getMoneySpent([3,1],[5,2,8],10)
  // ------------------------------------------------------
  function catAndMouse(x, y, z) {
  
  var catA=Math.abs(z-x);
  var catb=Math.abs(z-y);
  let result;
  
  if(catA<catb)
  {
  return result= "Cat A"
  }
  else if(catA>catb)
  {
  
   return result= "Cat B";
  }
  else if(catA==catb){
  return result= "Mouse C"
  
  }
  
  }
  
   //catAndMouse(1,2,3)
  // ------------------------------------------------------
  //differnce of the number less than the 1
  function pickingNumbers(a) {
      // Write your code here
      a.sort((a,b)=>a-b)
  // console.log(a)
  var max=0;
  for(var i=0;i<a.length;i++){
  var count=0;
  for(var j=i;j<a.length;j++){
  console.log(a[j]+" "+a[i])
  if(a[j]-a[i]<=1){
  count++;
  }
  }
  max=Math.max(max,count)
  }
  return max;
  }
  
   //pickingNumbers([4,6,5,3,3,1])
  // ---------------------------------------------------------------
  //DDD
  function climbingLeaderboard(scores, alice) {
  const result=[];
      let lastScore=null;  
      let currentSocreIndex=0; 
      let lastRank=1;
      alice=alice.reverse();
      alice.forEach((alicevalue,key)=>{
  while(currentSocreIndex<scores.length){
  
      let scoreValue=scores[currentSocreIndex];
     
      if(alicevalue>=scoreValue){
         result.push(lastRank);
         break;
      }
  
      if(scoreValue!==lastScore){  
          lastRank +=1;            
          lastScore=scoreValue;
          
      }
  currentSocreIndex +=1;
  }
  if(currentSocreIndex>=scores.length){
      result.push(lastRank);
  }
  
  })
      return result.reverse();
  }
  // climbingLeaderboard([100 ,100, 50 ,40, 40 ,20, 10],[5 ,25 ,50,120])
  // ---------------------------------------------------------------------
  
  
  function hrdulRace(k,arr){
  var newk=Math.max(...arr)
  if(newk>k){
    return newk-k;
  }
  else{
    return 0;
  }
  
  }
  // hrdulRace(7,[1 ,6 ,3 ,5 ,2])
  // -----------------------------------------------------------
  
  
  function designerPdfViewer (h, word) {
  
   var charAtIndex=c=>c.charCodeAt(0)-97;
  //  console.log(charAtIndex)
  // console.log(charAtIndex("d")) //takes the position
  
    var max=word.split('').map((x)=>h[charAtIndex(x)])                //131
                        .reduce((a,b)=> a>b ? a: b)
  return max*word.length;
  
  }
  
  // designerPdfViewer([ 1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ] ,'abc')
  // -----------------------------------------------------------------------
  function utopianTree(n) {
      var growtn=1;
      for(var i=1;i<=n;i++){
  
      (i%2 !=0) ? growtn *=2:growtn++
  
      }
  
  return growtn;
  }
  // utopianTree(4)
  // ----------------------------------------------------------
  function angryProfessor(k, a) {
      var count=0;
      for(var i=0;i<a.length;i++){
          if(a[i]<=0){
              count++
          }       
      }
     if(count>=k){
         return 'NO';
     }
     else{
         return 'YES';
     }
  }
  // angryProfessor(3,[-1 ,-3 ,4 ,2])
  // -------------------------------------------------------------
  
  function beautifulDays(i, j, k) {
      var z=0;
  var count=0
  for(var t=i;t<=j;t++){
   z =Number(('' + t).split('').reverse().join(''));
   console.log(z)
  
  var diff=Math.abs(t-z);
  
  if((diff)%k==0){
      count++
  }
  }
  return count;
  }
  // beautifulDays(20,23,6)
  // -------------------------------------------------------------
  function viralAdvertising(n) {
   var likes=0;
          var  people=5; 
      for(var i=1;i<=n;i++){
          
          likes=likes+Math.floor(people/2); 
          people=Math.floor((people/2))*3; 
         
      }
      return likes;
  
  }
  // viralAdvertising(3)
  // -----------------------------------------------------------
  function saveThePrisoner(n, m, s) {
  
  var pri=0
  for(var i=1;i<=n;i++){
          if(i>=s && m>0){
            pri=i
            m--
          }
  }
  console.log(pri)
  }
  //     var r = m % n; 
  //     if((r + s -1 ) % n == 0){ // 
  //        return n;
  //     }
  //     else{
  //     return ((r + s-1) % n);
  //     }
  
  // }
  
  // saveThePrisoner(5,2,2)
  // ----------------------------------------------------
  function permutationEquation(p) {
      var arr=[]
      for (let i = 1; i <= p.length; i++) {
          
          arr.push(p.indexOf(p.indexOf(i)+1)+1)
          
      }
      return arr
  
  
  }
  // permutationEquation([2, 3, 1])
  // -------------------------------------------------------------
  function jumpingOnClouds(c, k) {
      let j = 100,i = 0;
  
      do {
          j -= (c[i] == 1) ? 3 : 1;
         i = (i + k) % c.length;  //2,4,6
        
      }
      while(i!=0)
      return j;
  }
   //jumpingOnClouds([0,0 ,1 ,0 ,0 ,1 ,1 ,0],2)
  // ---------------------------------------------------------------
  
  function findDigits(n) {
      var k=n.toString();
  
  var count=0
     for(var i=0;i<k.length;i++){
         if(n%k[i]==0)
         {
             count++
         }
  
     }
     return count
  
  }
  // findDigits("1012")
  // -----------------------------------------
  function extraLongFactorials(n) {
        var   n = BigInt(n)
          var result = BigInt(1);
  
          for (let i = n; i > 0; i--) {
                  result = result * i
          }
  
          console.log(result.toString())
  
  }
  // extraLongFactorials(25)
  // // --------------------------------------------
  // https://www.hackerrank.com/challenges/append-and-delete/problem
  
  function squares(a, b) {
      let count = 0
      let num1 =Math.ceil(Math.sqrt(a))
       console.log(num1)
      let num2 = Math.floor(Math.sqrt(b))
      console.log(num2);
      for (let i = num1; i <= num2; i++) {
           //console.log(i)
          if (Number.isInteger(i)) 
          count++
      }
  return count
  }
  // squares(17,24)
  // // -----------------------------------------------
  // https://www.hackerrank.com/challenges/library-fine/problem
  
  function cutTheSticks(arr) {
      arr.sort((a,b)=>{
          return a-b;
      })
  
  let i=0;
  let result=[]
  while(i<arr.length){
   
  result.push(arr.length-i)
  while(arr[i]===arr[i+1]){
  
  i++
  }
  
  i++
  console.log(i)
  
  }
  return result;
  }
  // cutTheSticks([5 ,4 ,4 ,2 ,2 ,8])
  // // --------------------------------------------------------------------------
  // https://www.hackerrank.com/challenges/non-divisible-subset/problem
  function repeatedString(s, n){
      var countA=s=>s.split('a').length-1;
      
      let len= s.length 
      let  fl=Math.floor(n/len);
      let remainder=s.slice(0,n%len);
     
  return  fl*countA(s)+countA(remainder);
  }
  // repeatedString("aba",10)
  // ------------------------------------------------------
  function jumpingOnClouds(c) {
      var count =0
   for (var i = 0; i < c.length - 1; i++) {
      if (c[i] === 1)
          break;
      if (c[i + 2] < 1){
          // console.log(i);
          count++;
          i = i + 1;
          continue;
      }
      if (c[i + 1] < 1) {
          count++;
          continue;
      }
  }
  return count;
  }
  // jumpingOnClouds([0 ,0 ,0 ,0 ,1, 0])
  // --------------------------------------------------------------
  
  function acmTeam(topic) {
      // console.log(topic)
      var arr=[]
      for(let i=0;i<topic.length;i++){
             for(let j=i+1;j<topic.length;j++){
                  var count=0
               for(let k=0;k<topic[0].length;k++){
                   if(topic[i][k]==='1' || topic[j][k]==='1'){
                           count++
                   }
               }
               arr.push(count)
          }
      }
    // const maxvalue=Math.max(...arr)
  const maxvalue=arr.sort((a,b)=>b-a)[0];
  let max=0;
  for(var t=0;t<arr.length;t++){
      if(maxvalue==arr[t]){
          max++
      }
  }
  return [maxvalue,max]
  }
  // //acmTeam(["10101","11100","11010","00101"])
  // -------------------------------------------------------------------------------
  
  function taumBday(b, w, bc, wc, z) {
      // Write your code here
  
      var B = BigInt(b); var W = BigInt(w); var BC = BigInt(bc); var WC = BigInt(wc); var Z = BigInt(z);
      if (BC > WC + Z) {
          return ((B + W) * WC + B * Z);
      }
      else if (WC > BC + Z) {
          return ((B + W) * BC + W * Z);
      }
      else {
          return (B * BC + W * WC);
  
      }
  }
  // // https://www.hackerrank.com/challenges/taum-and-bday/problem
  // ---------------------------------------------------------------------------
  
  // https://www.hackerrank.com/challenges/bigger-is-greater/problem
  
  
  function kaprekarNumbers(p, q) {
      let n = [];
      if (p < q) {
          for (let i = p; i <= q; i++){
              let a = (i * i).toString();
              // console.log(a);
          //  console.log( a+"   "+parseInt(a.length/2))
  
              let s1 = a.slice(0, parseInt(a.length / 2));
  
  //  console.log(s1 + " " +a+"   "+parseInt(a.length/2) );
  
           let s2 = a.slice(parseInt(a.length / 2), a.length);
        
      //   console.log(s2 + " " +a+"   "+parseInt(a.length/2) );
  
        //console.log(parseInt(s1 || 0) + parseInt(s2 || 0) === i)
  
   if (parseInt(s1 || 0) + parseInt(s2 || 0) === i && parseInt(s1) !== 0 && parseInt(s2) !== 0) {
                  n.push(i);
              }
          }
      }
   
      console.log(n.length > 0 ? n.join(' ') : 'INVALID RANGE')
  }
  
  
  // kaprekarNumbers(1,100)
  
  // --------------------------------------------------------
  
  function beautifulTriplets(d, arr) {
  
  var count=0;
  for(var i=0;i<arr.length;i++){
      for(var j=i+1;j<arr.length;j++){
          if((arr[j]-arr[i])===d){
  for(var k=j+1;k<arr.length;k++){
      if((arr[k]-arr[j])===d){
              count++;
  
      }
  }
          }
      }
     
  }
   return count;
  
  }
  // // beautifulTriplets(3,[1 ,2 ,4 ,5 ,7 ,8 ,10])
  // ---------------------------------------------------------------
  
  function minimumDistances(a) {
  var min=a.length;
  for(var i=0;i<a.length-1;i++){
      for(var j=i+1;j<a.length;j++){
          if(a[i]==a[j]){
  
              if(min>(j-i)){
  
                  min=j-i;
                  break;
              }
          }
      }
  }
     if(min ==a.length){
          return -1;
      }
      return min;
  }
  
  // minimumDistances([7 ,1 ,3 ,4 ,1 ,7])
  
  // ---------------------------------------------------
  function howManyGames(p, d, m, s) {
      // Return the number of games you can buy
      var amount=s;
      var games=0;
      var decprice=p;
  
      while(amount>=decprice){  
          if(games==0){
              amount -=decprice
              decprice= (decprice-d) >= m? decprice-d : m;
          }
          else{
            amount -=decprice;
              decprice=(decprice-d) >=m ? decprice-d : m;
          }
  games++
      }
      return games;
  
  }
  // howManyGames(20,3,6,8)
  
  // -------------------------------------------
  //n=amount c=price m=
  function chocolateFeast(n, c, m) {
  
      if (n / c == m) {
          return n / c + 1;
      }
      else if (n / c < m) {
          return n / c;
      }
      else if (n / c > m) {
  
          var k = n / c;
          var re = k - m;
          return k = re + 1 + k
  
      }
  }
  // //chocolateFeast(10,2,5)
  // -------------------------------------------------------------
  
  function serviceLane(n, cases) {
  var result=[];
  for(let i=0;i<cases.length;i++){
         let arr=[];
      for(let j=cases[i][0];j<=cases[i][1];j++){
          arr.push(n[j])
      }
      // console.log(arr)
      result.push(Math.min(...arr));
  }
  return result;
  }
  serviceLane([ 2, 3, 1, 2, 3, 2, 3, 3 ] ,[ [ 0, 3 ], [ 4, 6 ], [ 6, 7 ], [ 3, 5 ], [ 0, 7 ] ])
  
  // -------------------------------------------------------------------------
  
  function workbook(n, k, arr) {
      var page=0;
      var count=0
      for(var i=0;i<n;i++){
          
          for(var j=1;j<=arr[i];j++){
  
              if(k===1 || j%k==1){
  
                  page++
              }
              if(j==page){
  
                  count++
              }
          }
      }
  return count;
  
  }
  // workbook(5,3,)
  // -------------------------------------------------------------
  
  
  function cavityMap(grid) {
      for (let i = 1; i < grid.length - 1; i++) {
  
          for (let j = 1; j < grid[i].length - 1; j++) {
              if (grid[i][j] > grid[i][j + 1] && grid[i][j] > grid[i][j - 1] && grid[i][j] > grid[i - 1][j] && grid[i][j] > grid[i + 1][j]) {
                  let change = grid[i].split('');
                  change.splice(j, 1, 'X');
                  change = change.join('');
                  grid[i] = change;
              }
          }
      }
      return grid;
  }
  cavityMap()
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // 1
  // 2  6  10
  // 3  7  11  14  17
  // 4  8  12  15  18  20  22
  // 5  9  13  16  19  21  23  24  25
  
  // function kk(n){
  //    var rotated=[]
  //     var counter=1;
  //   for(var i=1;i<=n+n;i++){
  //   rotated.push([])
  //   }
  //   for(var j=1;j<=9;j+=2){
  //              var kk=0
  //       for(var k=0;k<j;k++){
  //         rotated[k,j].push(counter)
  //          counter++
  //       }
    
  //   }
  //  for(var i=0;i<n+n;i++){
  
  //  console.log(rotated[i].join(" "))
  //  }
  
  //   }
  
  // kk(5)
  
  // function coloumn(n){
  //     var counter=1
  //         for(var i=1;i<n+n;i+=2){
  //           var str=""
  //           for(var j=1;j<i;j++){
         
  //             str=str+(j)
  //             counter++
  //           }
  //           console.log(counter)
  //         }
  // }
  // coloumn(5)
  function nleft(n){
  
  var arr=[]
   var count=1;
  for(var i=1;i<=n+n;i+=2){
      var str=[]; 
    var counter=count;
      for(var j=1;j<=i;j++){
         str.push(counter)
         if(j>=2){
            counter = counter+n-j+1;
         }
  
         else{
       counter = counter+n-j;
         }
      }
      count++
  
      arr.push(str)
  }
  console.log(arr)
  }
  nleft(5)
  // 1
  // 2 6 
  // 3 7 10 
  // 4 8 11 13
  // 5 9 12 14 15
  //  var arr=[]
  // function kk(n){
  //   for(var i=0;i<n;i++){
  //      var str=[]
  //      for(var j=0;j<n+n-1;j++){
  //        str.push(0)
  //      }
  //      arr.push(str)
  //   }
    
  // }
  // function number(arr){
  //   for(var i=0;i<arr.length;i++){
  //     for(var j=0;j<arr[i].length;j++){
       
        
  //     }
  //   }
  //   console.log(arr)
  
  // }
  
  
  // kk(5)
  // number(arr)