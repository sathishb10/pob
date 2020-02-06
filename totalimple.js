function gradingstudent(arr){
    for(var i=0;i<arr.length;i++){
        if((parseInt(arr[i]))%5>=3 && arr[i]>37){
    
          arr[i]=(arr[i]-parseInt(arr[i])%5+5)
        }
        else{
          arr[i]=arr[i]
        }
    }
    console.log(arr)
    }
    //gradingstudent([73,67,38,33])
    
    // =========================================================
    
    
    function countApplesAndOranges(s, t, a, b, apples, oranges){
      var applecount=0
      var orangecount=0
      for(var i=0;i<apples.length;i++){
        if(a+apples[i]>=s && a+apples[i]<=t){
              applecount++
        }
      }
        for(var i=0;i<oranges.length;i++){
        if(b+oranges[i]>=s && b+oranges[i]<=t){
            orangecount++
        }
      }
    console.log(`${applecount}${'\n'}${orangecount}`)
    
    }
    //countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6] )
    
    // ==========================================================
    
    function kangaro(x1,v1,x2,v2){
      if(v2>v1 && v2==v1){
        return "NO"
      }
      else{
            if((x1-x2)%(v2-v1)==0){
              return "YES"
            }
            else{
              return "no"
            }
      }
    }
    //kangaro(0,3,4,2)
    // //kangaro([0,2,5,3])
    // ===========================================
    
    function betweentwoset(a,b){
      var count=0
      var arr=[]
      for(var i=0;i<100;i++){
        if(a.every(int=> i%int==0)){
          if(b.every(int=>int%i==0)){
            arr.push(i)
            count++
          }
        }
      }
    console.log(count)    //3
    return arr;        //4,8,16
    }
    //betweentwoset([2,4],[16,32,96])
    
    // ===================================================
    
    function breakingreacords(arr){
      var max=arr[0]
      var min=arr[0]
      var maxcount=0
      var mincount=0;
      for(var i=0;i<arr.length;i++){
        if(arr[i]>max){
          max=arr[i]
           maxcount++
        }
        else if(arr[i]<min){
          min=arr[i]
            mincount++
        }
      }
      console.log(maxcount,mincount)
    
    }
    //breakingreacords([10,5,20,20,4,5,2,25,1])
    
    // =====================================================
    
    function birdaychoclate(s,d,m){
              var result=0
               for(var i=0;i<(s.length)-m;i++){
                 var sum=0
                 for(var j=0;j<m;j++){
                   sum +=s[j+i]
                 }
                 if(sum==d){
                   result++
                 }
               }
              return result;
            }
    // //birdaychoclate([1,2,1,3,2],3,2)
    // ==========================================================
    
    function divisible(s,k){
      var count=0
      for(var i=0;i<s.length;i++){
        for(var j=1;j<s.length;j++){
               if(i<j){
              var a=s[i]+s[j]
              if(a%k==0){
                count++
              }
               }
            
        }
      }
    return count;
    }
    //divisible([1,3,2,6,1,2],3)
    
    function migrartortbird(arr){
       arr.sort((a,b)=>a-b)
       var maxcount=0
       var value;
      for(var i=0;i<arr.length;i++){
         var count=0
         for(var j=0;j<arr.length;j++){
               if(arr[i]==arr[j]){
                    count++
                 if(maxcount<count){
                   maxcount=count
                   value=arr[i]
                 }
               }
         }
                 count=0
      }
      return value
    }
    //migrartortbird([1,4,4,4,5,3])
    //migrartortbird([1,2,3,4,5,4,3,2,1,3,4])
    
    function migrartory(arr){
      var newarr= new Array(arr.length).fill(0)
           for(var i=0;i<arr.length;i++){
             newarr[[arr[i]]] +=1
           }
           console.log(newarr)
          return  newarr.indexOf(newarr.reduce((a,b)=> Math.max(a,b)))
    
    }
    //migrartory([1,4,4,4,5,3])
    //migrartory([1,2,3,4,5,4,3,2,1,3,4])
    
    // =========================
    
    function dayOfProgrammer(year) {
    
    if (year == 1918){
            return '26.09.1918'
    }
        else if( ((year <= 1917) && (year%4 == 0)) ||((year > 1918) & (year%400 == 0)) ||
         ((year%4 == 0) && (year%100 != 0))  )
      {
            return '12.09.'+year;
        }
        else{
    
            return '13.09.'+year;
    
        }
    }
    
    // =============================
    
    function boneappt(arr,k,b){
     var annasbill= (arr.reduce((a,b)=> a+b,0)-arr[k])/2
      return  annasbill=annasbill<b ? b-annasbill : 'boneappeit'
    }
    // boneappt([3,10,2,9],1,7)
    // ======================================================
    
    function sockmerchant(arr){
     arr.sort((a,b)=> a-b)
     var count=0
        for(var i=0;i<arr.length;i++){
              if(arr[i]==arr[i+1]){
                   count++
                i++
              }
        }    
        return count;
    
    }
    //sockmerchant([10,20,20,10,10,30,50,10,20])
    
    // ===============================================
    
    function pagecount(n,p){
    let result;
    var total=n/2;
    var right=p/2
    var to=Math.floor(total)
    var rg=Math.floor(right)
    var left=to-rg
    // console.log(rg)
    if(rg<left){
      return rg
    }
    else{
      return left
    }
    return result
    }
    // pagecount(5,4)
    // ==========================================
    
    function countingvaly(s){
      var altitude=0
      var result=0
      for(var i=0;i<s.length;i++){
        if(s[i]=='U'){
            altitude++
            if(altitude==0){
             result++
            }
        }
            else{
              altitude--
            }
        
      }
    return result
    }
    // countingvaly('UDDDUDUU')
    // =====================================================
    
    function electronicshop(b,n,m){
          var monyspent=-1
          var temp=0
       for(var i=0;i<n.length;i++){
         for(var j=0;j<m.length;j++){
           if(n[i]+m[j]<=b){
             temp=n[i]+m[j]
           monyspent = temp> monyspent ? temp : monyspent
         }
         }
       }
    return monyspent
    }
    // electronicshop(10,[3,1],[5,2,8])
    // ===========================================================
    
    function catandmouse(a,b,c){
     var cata=Math.abs(c-a)
     var catb=Math.abs(c-b)
     if(cata>catb){
       return "catb"
     }
     else if(cata<catb){
          return "cata"
     }
     else if(cata=catb){
       return "mouse c"
     }
    }
    // catandmouse(1 ,3,2)
    // ==================================================
    
    function formingMagicSquare(s) {
        
        var min_cost = 45;
        var all_squares =
        [
            [[8,1,6],[3,5,7],[4,9,2]],
            [[6,1,8],[7,5,3],[2,9,4]],
            [[4,9,2],[3,5,7],[8,1,6]],
            [[2,9,4],[7,5,3],[6,1,8]],
            [[8,3,4],[1,5,9],[6,7,2]],
            [[4,3,8],[9,5,1],[2,7,6]],
            [[6,7,2],[1,5,9],[8,3,4]],
            [[2,7,6],[9,5,1],[4,3,8]],
        ];
    
        // for(var i = 0; i < 3; i++){
        //     s[i] = readLine().split(' ');
        //     s[i] = s[i].map(Number);
        // };
    
        for(var k = 0; k < 8; k++){
            var cost = 0;
            for(var i = 0; i < 3; i++){
                for(var j = 0; j < 3; j++){
                    cost += Math.abs(s[i][j] - all_squares[k][i][j]);
                };
            };
            console.log(cost)
            if( min_cost > cost ){ min_cost = cost };
        };
        console.log(min_cost);
    };

    //  formingMagicSquare([[4,9,2],[3,5,7],[8, 1 ,5]])
    //  ==============================================================
    
    //diff les tahn 1
    function pickingnumber(a){
         a.sort((a,b)=>a-b)
         console.log(a)
      var max=0
      for(var i=0;i<a.length;i++){
        var  count=0
        for(var j=i;j<a.length;j++){
          console.log(a[j]+"  "+a[i])
          if(a[j]-a[i]<=1){
            count++
          }
        }
        console.log(count)
        max=Math.max(count,max)
      }
    return max
    }
    //pickingnumber([4,6,5,3,3,1])
    //1 2 2 3 1 2
    function climbingleaderboard(score,alice){
    const result=[]
    let lastscore=null
    let currentIndex=0
    let lastrank=1
    alice=alice.reverse()
    // console.log(alice)
    alice.forEach((alicevalue,key)=>{
     while(currentIndex<score.length){
           let scoreValue=score[currentIndex]
           //console.log(scoreValue+"mknmk")
           if(alicevalue>=scoreValue){
             //console.log(alicevalue+)
             result.push(lastrank)
             break;
           }
    
          if(scoreValue!==lastscore){  
            //console.log(lastscore)
            lastrank +=1;            
          lastscore=scoreValue;  
          //console.log(lastscore) 
        }
        console.log(currentIndex)
    currentIndex +=1;
    }
    console.log(currentIndex)
    if(currentIndex>=score.length){
        result.push(lastrank);
    }
    })
    
    return result.reverse();
    
    }
    //climbingleaderboard([100,100,50,40,40,20,10],[5,25,50,120])
    
    
    
    function leaderboard(score,alice){
      var lastank=1
      var lastScore=null
      var result=[]
         var currentIndex=0
           alice=alice.reverse();
      alice.forEach((alicevalue,key)=>{
       while(currentIndex<score.length){
               var scoreValue=score[currentIndex]
        
                if(alicevalue>=scoreValue){
                  //console.log(lastank)
                  result.push(lastank)
                  break;
                }
    
                if(scoreValue!=lastScore){
                  lastank +=1
                  lastScore=scoreValue
                }
         currentIndex +=1
       }
      })
      if(currentIndex>=score.length){
        result.push(lastank)
      }
    return result.reverse()
    }
    // leaderboard([100,100,50,40,40,20,10],[5,25,50,120])
    // ===========================================================
    
    function hurdleRace(k, height) {
    
    var max=0; var result=0;
        for(var i=0;i<height.length;i++){
        if(max<height[i] && height[i]>k){
            
          max=height[i]
    }
    }
    
    if(max>k){
    return  result= max-k
    }
    else{
        return result
    }
    }
    
    // hurdleRace(4,[1,6,3,5,2])
    // =================================================
    
      function designerPdfViewer (h, word) {
      var charindex=c=>c.charCodeAt(0)-97
    
    var max=word.split('').map((b)=>h[charindex(b)])
                            .reduce((a,b)=> a>b ? a :b)
       return max*word.length                    
      }
      
      //  designerPdfViewer([ 1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ] ,'abc')
    
      //  ===============================================
    //incress for every odd values one seesion after another
      function utopiantree(n){
       var growth=1
         for(var i=1;i<=n;i++){
           (i%2 !==0) ? growth*=2 : growth++
         }
         return growth
      }
      // utopiantree(4)
      // ===============================================
    //leess than 0 count if it equal k,s value than no cancelation
      function angrayproffesor(arr,k){
        var count=0
        for(var i=0;i<arr.length;i++){
               if(arr[i]<=0){
                 count++
               }
        }
        if(count>=k){
          return "no"
        }
        else{
          return "Yes"
        }
    
      }
      //angrayproffesor([-1,-3,4,2],3)
    // angrayproffesor([0,-1,2,1],2)
    // ==============================================
    // twhich divide by k if  reverse the range and actual value
    function beautifuldays(i,j,k){
      var count=0
      for(var t=i;t<=j;t++){
             //console.log(t)
            var kk=Number((''+ t).split('').reverse().join(''))
        var diff= Math.abs(t-kk)
        if((diff)%k==0){
          count++
        }
      }
    return count
    }
    // beautifuldays(20,23,6)
    // ================================================
    //people likes the advertisement 2 members if we send for 5 five people 
    function viralAdvertising(n){
      var likes=0
      var people=5
      for(var i=1;i<=n;i++){
        likes=likes+Math.floor(people/2);
        people=Math.floor((people/2))*3
      }
     return likes
    
    }
    // viralAdvertising(3)
    // =========================================
    // here n= prisons m=sweets s=starts distrribution from
    function saveprisonar(n,m,s){
      var r=m%n
      if((r+s-1)%n==0){
        return n
      }
      else{
        return ((r+s-1)%n)
      }
    
    }
    //saveprisonar(5,2,1)
    //saveprisonar(7,19,2)
    // saveprisonar(3,7,3)
    // ===================================================
    
    function circulararrayroation(arr,k,quires){
    
      var rotate=[]
      for(var i=0;i<arr.length;i++){
        rotate[(i+k)%arr.length]=arr[i]
      }
      const result=[]
       for(let t of quires){
       result.push(rotate[t])
       }     
    return result;
    }
    // circulararrayroation([1,2,3],2,[0,1,2])
    // ====================================================
    
    function permutationEquation(p){
      var result=[]
      for(var i=1;i<=p.length;i++){
        result.push(p.indexOf(p.indexOf(i)+1)+1)
      }
    return result
    }
    // permutationEquation([2,3,1])
    // ==============================================
    
    function jumpingonclouds(c,k){
      var j=100, i=0
      do{
        j-=(c[i]==1) ? 3 : 1
        i=(i+k)%c.length
    
      }
      while(i!=0)
      return j
      
    }
    // //jumpingonclouds([0,0,1,0,0,1,1,0],2)
    // jumpingonclouds([0,1 ,1 ,0 ,1 ,0, 1, 1 ,0 ,1 ,1 ,0 ,0 ,0, 0 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,1 ,0],3)
    // ================================================
    
    function finddigit(n){
      var kk=n.toString()
      var count=0
      for(var i=0;i<kk.length;i++){
        if(n%kk[i]==0){
          count++
        }
      }
    return count
    }
    // finddigit(1012)
    // ===============================================
    
    function extralongfactoraila(n){
      var n=BigInt(n)
      var result=BigInt(1)
      for(var i=n;i>=1;i--){
        result= result*i
      }
      console.log(result.toString())
    }
    // extralongfactoraila(25)
    // ================================================
    function appendAndDelete(s, t, k) {
    
        if((s.endsWith(t) || t.endsWith(s)) || (s.length + t.length<=k)){
            return 'Yes'
        }
        var count=0;
        for(var i=0;i<s.length;i++){
             if(s[i]===t[i]){
               count++
            }
            else{
                break;
            }
        }
        console.log(count)
        if(((s.length-count)+(t.length-count))===k){
    
            return 'Yes'
        }
        else{
            return 'No'
        }
    }
    //appendAndDelete('hackerhappy', 'hackerrank', 9)
    //appendAndDelete('aba','aba',7)
    
    // ======================================
    
    function sherlocksquare(a,b){
      let count=0
      var num1=Math.ceil(Math.sqrt(a))
      var num2=Math.ceil(Math.sqrt(b))
      for(let i=num1; i<=num2;i++){
        if(Number.isInteger(i)){
          count++
        }
      }
    return count
    }
    // sherlocksquare(3,9) //17 24
    // =================================
    
    
    function libraryFine(d1, m1, y1, d2, m2, y2) {
        if(m1<m2 && y1<=y2 || y1<y2){
            return 0;
        }
    
        else if(d1>d2 && m1<=m2 && y1<=y2){
            return 15*(d1-d2);
        }
    
        else if(m1>m2 && y1==y2){
               return 500*(m1-m2);   
        }
    
        else if(y1>y2){
            return 10000;
        }
    
         return 0;
    }
    // 9 6 2015
    // 6 6 2015
    
    // =============================================
    
    function cutTheSticks(arr) {
        arr.sort((a,b)=>{
            return a-b;
        })
        console.log(arr)
    var i=0
    var result=[]
    while(i<arr.length){
      result.push(arr.length-i)
      while(arr[i]==arr[i+1]){
        i++
      }
      i++
    }
    return result;
    }
    // cutTheSticks([5,4,4,2,2,8])
    //cutTheSticks([1,2,3,4,3,3,2,1])
    // ======================================================
    
    function nonDivisibleSubset(s, k) {
        // Write your code here
        let k2=Math.floor(k/2)
        var remcount=new Array(k+1).fill(0)
        // for(var i=0;i<s.length;i++){
        //   remcount[s[i]%k]++
        // }
           s.forEach((n)=>{
            remcount[n%k]++
           })
        console.log(remcount)
    
        if(remcount[0]>0){
          remcount[0]=1
        }
        if(remcount[k2]>0 && k%2==0){
          remcount[k2]=1
        }
        var count=0
        for(var i=0;i<=k2;i++){
          count+=Math.max(remcount[i],remcount[k-i])
        }
        return count
    }
    // //nonDivisibleSubset([1,7,2,4],3)
    // nonDivisibleSubset([278,576,496,727,410,124,338,149,209,702,282,718, 771 ,575 ,436],7)
    // ==============================================================
    
    function repeatedstring(s,n){
    var countA=s=>s.split('a').length-1
     let len=s.length
     let f1=Math.floor(n/len)
    let reaminder=s.slice(0,n%len);
    return f1*countA(s)+countA(reaminder)
    }
    // repeatedstring('aba',10)
    // ==============================================================
    //it should not fall on the one,
    function jumpingonclouds(c){
    var count=0
     for(var i=0;i<c.length;i++){
       if(c[i]==1){
         break;
       }
       if(c[i+1]<1){
           count++
           continue;
       }
       if(c[i+2]<1){
         count++
         i=i+1
         continue;
       }
     }
     return count;
    }
    // jumpingonclouds([0,0,1,0,0,1,0])
    // ==================================================================
    //count matching leements and delte the reamining
    function equalizearry(arr){
              let cocunt=0
              let finalcount=0
              arr.map((firstnumber)=>{
                var count=0
                arr.map((secondnumber)=>{
                          if(firstnumber==secondnumber){
                            count++
                          }
                        })
                        
                      if(finalcount<count){
                        finalcount=count;
              }
              })
              var deleteion= arr.length-finalcount
            return deleteion
    }
    // //equalizearry([3,3,2,1,3])
    //1 2 3 1 2 3 3 3
    // =================================================
    
    function acmicpc(topic){
    var result=[]
    for(var i=0;i<topic.length;i++){
      for(var j=i+1;j<topic.length;j++){
            var count=0
            for(var k=0;k<topic[0].length;k++){
                  if(topic[i][k]=='1' || topic[j][k]=='1'){
                    count++
                  }
            }
            result.push(count)
      }
    }
    const maxvalue=Math.max(...result)
    //var maxvalue=result.sort((a,b)=>b-a)[0]
        let max=0
        for(var i=0;i<result.length;i++){
          if(maxvalue==result[i]){
            max++
          }
        }
      return [maxvalue,max]
    }
    // acmicpc([ '10101', '11100', '11010', '00101' ])
    // ==================================================
    
    function taumandbday(b,w,bc,wc,z){
    var B = BigInt(b); var W = BigInt(w); var BC = BigInt(bc); var WC = BigInt(wc); var Z = BigInt(z);
         
         if(BC>WC+Z){
           
          return ((B+W)*WC+(B*Z))
         }
         else if(WC>BC+Z){
           return ((B+W)*BC+(W*Z))
         }
         else{
             return (B * BC + W * WC);
         }
    }
    // taumandbday(3,6,9,1,1)
    //taumandbday(10,10,1,1,1)
    // =================================
    //next largest word in 
    function biggerIsGreater(w) {
    let arr=w.split("");
    let decreseOrder=-1
    for(let index=arr.length-1;index>0;index--){
    
      if(arr[index]>arr[index-1]){
        decreseOrder=index-1;
        break;
      }
    }
    if(decreseOrder===-1){
        return "no answer"
    }
    else{
        let greater=null;
        let greaterIndex=null;
        for(let index=arr.length-1;index>decreseOrder;index--){
            if(arr[index]>arr[decreseOrder]){
               if(greater===null|| greater>arr[index]){
                   greater=arr[index];
                   greaterIndex=index;
               }
            }
         }
        // https://repl.it/@SathishBurra/implimentation-2
    
    arr[greaterIndex]=arr[decreseOrder];
    arr[decreseOrder]=greater
    
    return arr.slice(0,decreseOrder+1).concat(arr.slice(decreseOrder+1)).join("")
    
    }
    
     }
    // =================================================================
    /// 
    function kaprekarNumbers(p, q) {
        let n = [];
       if(p<q){
         for(var i=p;i<=q;i++){
           var multiply=(i*i).toString()
           var a=multiply.slice(0,multiply.length/2)
           var b= multiply.slice(multiply.length/2, multiply.length)
    
           if(parseInt(a||0)+parseInt(b||0)==i && parseInt(a)!==0 && parseInt(b)!==0){
             n.push(i)
           }
         }
       }
        console.log(n.length > 0 ? n.join(' ') : 'INVALID RANGE')
    }
    // kaprekarNumbers(1,100) //1 9 45 55 99
    // ====================================================
    
    function beautifultriplets(arr,d){
      var count=0
         for(var i=0;i<arr.length;i++){
                   for(var j=i+1;j<arr.length;j++){
                          if(arr[j]-arr[i]==d){
                    for(var k=j+1;k<arr.length;k++){
                          if(arr[k]-arr[j]==d){
                            count++
                          }
                    }
    
               }
         }
    }
    return count
    }
    // beautifultriplets([1,2,4,5,7,8,10],3)
    // ======================================================================
    
    
    function minimumdistance(arr){
       var min=arr.length;
       for(var i=0;i<arr.length;i++){
         for(var j=i+1;j<arr.length;j++){
           if(arr[i]==arr[j]){
            if(min>(j-1)){
              min=(j-1)
              break;
            }
           }
         }
       }
    if(min==arr.length){
      return -1
    }
    return min
    }  
    // minimumdistance([7,1,3,4,1,7])
    // ==================================================================
    
    function hallowsale(p,d,m,s){
      var amount=s
      var decprice=p
    var games=0
      while(amount>=decprice){
                if(games==0){
                  amount-=decprice
                  decprice= (decprice-d)>=m? decprice-d : m
                }
                else{
                     amount-=decprice
                  decprice= (decprice-d)>=m? decprice-d : m
    
                }
    games++
      }
    return games
    }
    // hallowsale(20,3,6,85)
    // ========================================
    
    function choclatefeast(n,c,m){
      if(n/c==m){
        return n/c+1;
      }  
      else if(n/c<m){
        return n/c
      }
      else if(n/c>m){
       var k=n/c;
       var re=k-m
       return k=re+k+1
      }
    }
    // choclatefeast(6,2,2)
    // =============================================
    
    function serviceline(n,cases){
    var result=[]
    for(var i=0;i<cases.length;i++){
          let arr=[]
          for(let j=cases[i][0];j<cases[i][1];j++){
            arr.push(n[j])
          }
          result.push(Math.min(...arr))
    }
     return result;
    }
    // serviceline([ 2, 3, 1, 2, 3, 2, 3, 3 ],[ [ 0, 3 ], [ 4, 6 ], [ 6, 7 ], [ 3, 5 ], [ 0, 7 ] ]) // 1, 2, 3, 2, 1 ]
    
    // ===================================================
    //mathc
    function liasworkbook(n,arr,k){
                var page=0
                var count=0
           for(var i=0;i<n;i++){
           for(var j=1;j<=arr[i];j++){
             if(k==1 || j%k==1){
               page++
             }
             if(j==page){
               count++
             }
           }
         }
      return count;
      }
    // liasworkbook(5,[4,2,6,1,10],3)
    // ======================================================
    function flatedspacestation(n,c){
      c=c.sort((a,b)=>a-b)
      let startdistance=c[0]
      let enddist=(n-1)-c[c.length-1]
    let interdistance=0
    let distance=0
    for(var i=1;i<c.length;i++){
      distance=Math.floor((c[i]-c[i-1])/2)
      distance>0 && distance > interdistance ? interdistance=distance:'';
    }
    return Math.max(startdistance,enddist,interdistance)
    }
    //flatedspacestation(5,[ 0, 4 ])
    // flatedspacestation(6,[ 0, 1, 2, 4, 3, 5 ])
    // ==================================================
    
    function fairratio(arr){
      var count=0
                 for(var i=0;i<arr.length;i++){
                  if(arr[i]%2==1){
                    arr[i]++;
                    arr[i+1]++;
                    count +=2
                  }
                  if(i==arr.length-2 && arr[arr.length-1]%2==1){
                    return "no"
                  }
                 }
     return count
          
    }
    //fairratio([2,3 ,4 ,5 ,6]) [ 2, 4, 6, 6, 6 ]
    // fairratio([1,2])
    // =====================================================
    
    function cavitymap(arr){
      
      for(var i=1;i<arr.length-1;i++){
        for(var j=0;j<arr.length-1;j++){
          if(arr[i][j]>arr[i-1][j] && arr[i][j]>arr[i+1][j] && 
          arr[i][j]>arr[i][j+1] && arr[i][j]>arr[i][j-1]){
            var change=arr[i].split('')
                  change.splice(j,1,'X')
                  change=change.join('')
                  arr[i]=change
          }
        }
      }
    return arr
    }
    // cavitymap([ '1112', '1912', '1892', '1234' ])
    // ================================================================
    
    function stones(n, a, b) {
    let result=[]
    let ceil=n-1
    
    for(var i=0;i<=ceil;i++){
        var num=(a*i)+(b*(ceil-i))
        console.log(num)
        if(!result.includes(num)){
          result.push(num)
        }
    }
    return result.sort((a,b)=> a-b)
    
    }
    // stones(4,10,100)
    // ====================================================
    function gridSearch(G, P) {
        for (let i = 0; i <= G.length - P.length; i++) { //7
        //6length
            // console.log(G[0].length-P[0].length)
    for (let j = 0; j <= G[0].length - P[0].length; j++) {
                if (G[i][j] != P[0][0]){
                   continue
                } 
                let match = true
                for (let k = 0; k < P.length; k++) {
                    for (let l = 0; l < P[0].length; l++) {
                        if (G[i + k][j + l] != P[k][l]) {
                            match = false
                            break
                        }
                    }
                    if (!match) break
                }
                
                if (match) return 'YES'
            }
        }
        return 'NO'
    }
    // gridsearch([ '7283455864',
    //   '6731158619',
    //   '8988242643',
    //   '3830589324',
    //   '2229505813',
    //   '5633845374',
    //   '6473530293',
    //   '7053106601',
    //   '0834282956',
    //   '4607924137' ],[ '9505', '3845', '3530' ])
    //   =========================================================
    
    function happyLadybugs(b) {
       return (b.includes("_") ? b.split('').sort() : b.split(''))
        .filter(k=> k!='_').every((f,i,l)=> f==l[i+1] || f==l[i-1]) ?'YES' :'NO'
    }
    //happyLadybugs('RBY_YBR')
    // happyLadybugs('B_RRBR')
    // ===============================================================
    
    
    
    function strangeCounter(t) {
           let n = Math.floor(Math.log2((t + 2) / 3)+1)
        return 3*(2**n)-2-t;
    
    
    }
    // strangeCounter(4)
    // ================================================
    
    function larrysArray(A) {
    var res=0;
    for(let i=0;i<A.length;i++){
        for(let j=i+1;j<A.length;j++){
            if(A[i]>A[j]){
                res++
            }
        }
    }
    return res%2==0 ?'YES':'NO';
    }
    //larrysArray([3,1,2])
    // larrysArray([1,3,4,2])
    // ================================================
    