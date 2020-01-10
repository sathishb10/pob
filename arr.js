// https://www.hackerrank.com/challenges/equality-in-a-array/problem
function equalizeArray(arr) {
    let count=0;
    let finalcount=0
    arr.map((firstnumber)=>{
      count=0
      arr.map((secondnumber)=>{        
               if(firstnumber===secondnumber){
                 count++
                 if(count>finalcount){
                   finalcount=count;
                 }
               }
      });});        
      let deletions = arr.length - finalcount;
      return deletions; 
  }
  //equalizeArray([3,3,2,1,3])
  
  
      // ------------------------------------
  
  function rotLeft(a, d){
  
   return a.splice(d).concat(a.slice(0, d))
   
  }
  //rotLeft([1 ,2 ,3 ,4 ,5], 2)
  
  
  // ----------------------------------------------------
  
  function circularArrayRotation(a, k,queries) {
      
      // const rotated = new Array(a.length)
      //    for (let i = 0; i < a.length; i++) {
      
      //   rotated[(k + i) % a.length]=a[i]
  
      //   //  console.log(rotated)
        
      // }
      // const result = []
      // for (let j of queries) {
   
      //     result.push(rotated[j])
      // }
      // return result;
  
  const rotated= new Array(a.length)
  for(var i=0;i<a.length;i++){
    rotated[(i+k)%a.length]=a[i]
  }
  console.log(rotated)
  
  }
  //circularArrayRotation([ 1, 2, 3 ],2 ,[ 0, 1, 2 ])
  //[ 1, 2, 3 ] 2 [ 0, 1, 2 ]
  
  // ---------------------------------------------------------------
  
  
  // ---------------------------------------------------------
  
  function degreerotation(arr){
   var sumlength=arr.length+arr.length-1
   var rotated=[]
  for(var i=0;i<sumlength;i++){
    rotated.push([])
  }
  for(var j=0;j<arr.length;j++){
    for(var k=0;k<arr.length;k++){
      rotated[j+k].push(arr[k][j])
    }
  }
  for(var i=0;i<sumlength;i++){
    console.log(rotated[i].join(" "))
  }
  
  }
  //degreerotation([[1,2,3], [4,5,6], [7,8,9]])
  
  // ----------------------------------------------------------------
  
  function ninedegress(arr){
  // var rotated=[]
  // var sumlength=arr.length-1
  // for(var i=0;i<arr.length;i++){
  //   rotated.push([])
  // }
  // for(let j=0;j<arr[0].length;j++){
  //   for(let k=0;k<arr.length;k++){
  //      var t=sumlength-k;
  //     rotated[k,j].push(arr[t][j])
  //   }
  // }
  // return 
  var rotated=[]
  var sumlength=arr.length-1
  for(var i=0;i<arr.length;i++){
    rotated.push([])
  }
  for(var j=0;j<arr.length;j++){
    for(var k=0;k<arr.length;k++){
      var  t=sumlength-k
      rotated[k,j].push(arr[t][j])
     console.log(k,j)
    }
     console.log(rotated)
  }
  return rotated
  }
   //ninedegress([[1,2,3], [4,5,6], [7,8,9]])
  
  // ---------------------------------------------------------------
  
  
  function onegntedegress(arr){
  var rotated=[]
  var sumlength=arr.length-1
  for(var i=0;i<arr.length;i++){
    rotated.push([])
  }
  for(let j=0;j<arr[0].length;j++){
    for(let k=0;k<arr.length;k++){
       var t=sumlength-k;
         var m=sumlength-j;
      rotated[k,j].push(arr[m][t])
    }
  }
  return rotated
  console.log(rotated)
  }
    //onegntedegress([[1,2,3], [4,5,6], [7,8,9]])
  
  
  // -----------------------------------------------------
  
  function transposemtrix(arr){
    var newarr=[]
    for(var i=0;i<arr.length+1;i++){
      newarr[i]=[];
      for(var k=0;k<arr.length;k++){
        newarr[i].push(arr[k][i])  
      }
    }
  return arr;
   }
   //transposemtrix([ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ] ])
  
  //-----------------------------------------------------------------------------------
  // function  circularArrayRotation(a,k){
  //     const rotated = new Array(a.length)
  //        for (let i = 0; i < a.length; i++) {
  //       rotated[(k + i) % a.length]=a[i]
  //      }
  // return rotated;
  //  }
  // circularArrayRotation([ 1, 2, 3 ] ,2)
  
  // -------------------------------------------------------
  
  
  function string(s,n){
  var k=s.split('');
  var count=0;
  var arr=[]
  for(var i=0;i<s.length;i+=3){
   var kk=k.splice(0,3)
   arr.push(kk.reverse().join(""))      
  }
  console.log(arr.join(''))
  }
  //string("propelschool",3)
  
  // ----------------------------------------------------------------
  
  function subarray(n){
    var result=0
    //  for(var i=0;i<n.length;i++){
    //        for(var j=i;j<n.length;j++){
    //      for(k=i;k<=j;k++){
    //        result +=n[k]
    //        console.log(n[k])
    //      }
    //      console.log(result+"kk")
         
    //    }
       
    //  }
    for(var i=0;i<n.length;i++){
      for(var j=i;j<n.length;j++){
        for(var k=i;k<=j;k++){
          result +=n[k]
        }
      } 
    }
    console.log(result)
     }
   //subarray([1,2,3]) 
  // ---------------------------------------------------------
  function diagonalDifference(arr) {
      // Write your code here
  var sum=0
  for(var i=0;i<arr.length;i++){
      sum += arr[i][i]-arr[i].reverse()[i];     
  }
  return Math.abs(sum);
  }
  //diagonalDifference([[3],[11,2,4],[4,5,6],[10,8,-12]])
  
  // ---------------------------------------------
  
  
  function miniMaxSum(arr){
  var array=[...arr].sort();
  // console.log(array)
  
  var sum=0
  for(var i=0;i<array.length;i++){
  sum +=array[i];
  }
  
  var max=sum-array[0];
  var min =sum-array[array.length-1];
  console.log(min,max);
  }
   //miniMaxSum([1,2,3,4,5])
  
  // -----------------------------------------------
  function bcand(arr){
    var maxarray= Math.max(...arr)
    var blows=0
   for(var i=0;i<arr.length;i++){
     if(arr[i]===maxarray){
       blows +=1
     }
   }
   return blows;
  
  }
  bcand([3,1,2,3])
  
  