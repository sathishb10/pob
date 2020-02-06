

function chessboardGame(x, y) {
    return ((x-1)%4>1||(y-1)%4>1)?"First":"Second";
    
    }
    //chessboardGame()
    
    // ==========================================
    //s
    
    function cost(arr) {
    let min=0;
    let max=0;
    let max_value=0
    for(let i=1;i<arr.length;i++){
        var minv=min;
        var maxv=max;
        min=Math.max(minv, max+Math.abs(arr[i-1]-1));
        max=Math.max(maxv+Math.abs(arr[i]-arr[i-1]), minv+Math.abs(arr[i]-1));
          max_value = Math.max(min, max);
    }
    return max_value;
    }
    
    // cost([3,15, 4 ,12, 10])//50
    //10 1 10 1 10  //36
    // ==================================
    
    function substrings(n) {
      const modulo=Math.pow(10,9)+7
    var temp=0
    var sum=0
      for(var i=0;i<n.length;i++){
        temp=(temp *10 + parseInt(n[i]) * (i+1))%modulo
        sum=(sum+temp)%modulo
      }
      return sum%modulo
    }
    //substrings('1234')
    // ==================================================
    
    function fibonaic(t1,t2,n){
     let x=[BigInt(t1), BigInt(t2)];
     for(let i=2;i<=n;i++){
       x[i]=x[i-2]+x[i-1]*x[i-1]
       x.push(x[i])
     }
     return (x[n-1]).toString()
    
    }
    // fibonaic(0,1,10)
    // ====================================================
    
    
    function subarray(arr){
         var sum=0
      for(var i=0;i<arr.length;i++){
        for(var j=i;j<arr.length;j++){
            for(k=i;k<=j;k++){
                 sum +=arr[k]
            }
        }
        
      }
    console.log(sum)
    
    }
    //subarray([1,2,3,4])
    
    function substring(a){
      var temp=0
      var sum=0
      var madulo=Math.pow(10,9)+7
      for(var i=0;i<a.length;i++){
         temp=(temp * 10 + parseInt(a[i]) * (i+1))%madulo
         console.log(temp)
        sum=(sum+temp)%madulo
      }
    return sum%madulo
    }
    //substring('1234')
    
    
     function generatePowerSe(array){
        var result = [];
        result.push();
        for (var i = 1; i < (1 << array.length); i++) {
          var subset = [];
          for (var j = 0; j < array.length; j++){
         // console.log("k")
            if (i & (1 << j)){
              //console.log(i & (1 << j))
              //console.log(j, i)
              subset.push(array[j]);
            }
          }
          result.push(subset);
        }
        return result;
      }
       // generatePowerSe('abc');
    //[1,2,3]
    
    // =========================================================
    
    function absolutediffernce(arr){
      arr.sort((a,b)=>a-b)
    var min=Math.abs(arr[0]-arr[1])
        for(var i=1;i<arr.length-1;i++){
          var kk=Math.abs(arr[i]-arr[i+1])
    
           if(min>kk){
             min=kk
           }
        }
        console.log(min)
    }
    //absolutediffernce([3,-7,0])
    // absolutediffernce([-59,-36, -13, 1 ,-53, -92, -2 ,-96, -54, 75])
    // =====================================================================
    
    function cakewalk(arr){
      arr.sort((a,b)=>b-a)
      // console.log(arr)
    var sum=0
      for(var i=0;i<arr.length;i++){
            sum +=Math.pow(2,i)*arr[i]
      }
    return sum
    }
    // cakewalk([7,4 ,9 ,6])
    // =====================================================
    
    function gridChallenge(arr){
      var matrix=[]
         for(var i=0;i<arr.length;i++){
      matrix.push(arr[i].split('').map((item,index)=>item.charCodeAt(0))
                 .sort((a,b)=>a-b))
         }
         for(var j=0;j<matrix[0].length;j++){
               var min=0
               for(var i=0;i<matrix.length;i++){
                    if(matrix[i][j]<min){
                      return "no"
                    }
                    min=arr[i][j]
               }
         }
    return "YES"
         console.log(matrix)
    }
    // gridChallenge([ 'eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv' ])
    // ============================================================
    //how much incress the luck based on k value, if k=3 he has won the atlest 3 contesnt if not it will be substracted
    // If Lena loses no more than k important contests, what is the maximum amount of luck she can have after competing in all the preliminary contests? This value may be negative.
    
    function luckBalance(k, contests) {
      const arr=contests.sort((a,b)=> b[0]-a[0])
     
     var luck=0, lost=k
     for(var i=0;i<arr.length;i++){
       const [value,increment]=arr[i]
            if(increment){
              luck += lost>0 ? value : -value
              lost -=1
              continue
            }
            luck +=value
               }
               console.log(luck)
          }
    // luckBalance(3,[ [ 5, 1 ], [ 2, 1 ], [ 1, 1 ], [ 8, 1 ], [ 10, 0 ], [ 5, 0 ] ])
    // ================================================================
    
    function maximumperimetertriangle(arr){
      var kk=arr.sort((a,b)=>b-a)
    for(var i=0;i<kk.length;i++){
      if(kk[i+2]+kk[i+1]>kk[i]){
       return  [kk[i+2] ,kk[i+1] ,kk[i]]
      }
    }
    return -1
    }
    // maximumperimetertriangle([1,1,1,3,3])
    // =================================================
    //pairs wise disjoints sets
    function beautifulPairs(a,b) {
        var count=0
        for(var i=0;i<a.length;i++){
            for(var j=0;j<b.length;j++){
             // console.log(i)
                if(a[i]==b[j]){
                 // console.log("kk")
                  //console.log(a[i])
                   a[i]=-1;
                   b[j]=-1;
                 count++
                 break;
                }
            }
        }
          //console.log(a)
        if(count==a.length){
            return count-1;
        }
        else{
            return count+1
        }
    }
    //beautifulPairs([3,5,7,11,5,8],[5,7,11,10,5,8])
    // =========================================================
    
    function decentNumber(n) {
    
        for (let i = n; i> 0; i--) {
         var  j = n - i;
    
          if (i % 3 === 0 && j % 5 === 0) {
          //console.log('5'.repeat(i) + '3'.repeat(j))
                return '5'.repeat(i) + '3'.repeat(j);
            }
        }
            if (n % 3 === 0) {
                 // console.log('5'.repeat(n))
                return '5'.repeat(n);
            }
            else if (n % 5 === 0) {
                // console.log('3'.repeat(n))
                return '3'.repeat(n);
            }
            else {
                //console.log(-1)
                return - 1;
            }
    }
    // decentNumber(11)
    // ==============================================
    
    function toys(w) {
      var count=0
    let s=w.sort((a,b)=>a-b)
         while(s.length>0){
             var max=s[0]+4
          s=s.filter((data)=> data>max)
         count++      
         }
     return count;
    }
    // toys([1,2 ,3 ,21 ,7 ,12 ,14 ,21])
    // ========================================================
    
    function markandtoys(arr,amount){
        var arr=arr.sort((a,b)=>a-b)
        var count=0
         var i=0
         var price=amount
    
         while(i<=arr.length){
           if(arr[i]<=price){
             price=price-arr[i]
             count++
           }
           i++
         }   
     return count
    }
    // markandtoys([1,12 ,5 ,111, 200, 1000 ,10],50)
    // ==========================================================
    
    function twoArrays(k, A, B) {
           let A= [...A].sort((a,b) => a-b)
          let B= [...B].sort((a,b) => b-a)
           for(var i=0;i<A.length;i++){
             if(A[i]+B[i]<k){
               return "NO"
             }
           }
           return "YES"
    
    }
    // twoArrays(10,[2,1,3],[7,8,9])
    // //twoArrays(5,[1,2,2,1],[3,3,3,4])
    // ==============================================
    
    function iccreamparlour(m,arr){
         var result=[]
        for(var i=0;i<arr.length;i++){
          for(var j=i+1;j<arr.length;j++){
                if(arr[j]+arr[i]==m){
                  result.push(i+1,j+1)
                }
          }
        }
    return result;
    }
    //iccreamparlour(4,[1,4,5,3,2])
    // iccreamparlour(4,[2,2,4,3])
    // ===========================
    
    function missingNumbers(arr1,arr2){
        arr1.sort((a,b)=>a-b)
        arr2.sort((a,b)=>a-b)
        var temp=0
        var result=[]
        for(var i=0;i<arr2.length;i++){
           if(arr2[i]!=arr1[i-temp]){
              result.push(arr2[i])
              temp++
           }
        }
    return ([...new Set(result)].sort((a,b)=>{ return a-b }))
    }
    // missingNumbers([203,204,205,206,207,208,203,204,205,206],[203,204,204,205,206,207,205,208,203,206,205,206, 204])
    //==============================================================
    
    
    function pairs(arr,k){
      var count=0
       for(var i=0;i<arr.length;i++){
              for(var j=i+1;j<arr.length;j++){
                if(Math.abs(arr[j]-arr[i])==k){
                 count++
                }
             }
       }
       return count;
    
       
    }
    //pairs([1,5,3,4,2],2)
    
    function pairss(arr,k){
     var matches = 0;
            var arr=arr.sort((a,b)=>a-b)
            var i = 0;
            var j = 1;
            console.log(arr)
            while (j < arr.length) {
                if ((arr[j]-arr[i]) == k) {
                    matches++;
                    j++;
                } 
                else if((arr[j]-arr[i])> k) {
                    i++;
                    if (i == j) {
                        j++;
                    }
                } else if ((arr[j]-arr[i]) < k) {
                    j++;
                }
            }
            return matches;
    }
    // pairss([1,5,3,4,2],2)
    // ===========================================
    function balancedSums(arr) {
    if(arr.length===1){
        return 'YES'
    }
    let left=0;let temp=arr[0];
    
    var right= arr.slice(1).reduce((a,b)=>a+b)
    console.log(right)
    
    if(left===right){
        return 'YES'
    }
    for(var i=1;i<arr.length;i++){
        left +=temp;
         temp=arr[i];
         right -=temp; 
         if(left===right){
        return 'YES'
       }
    }
       
        return 'NO'
    }
    // balancedSums([1, 1, 4 ,1 ,1])
    
    // ===============================================