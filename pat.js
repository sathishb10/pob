
function  romboys(n){
    var arr=[]
    for(let i=1;i<n;i++){
      var str=""
      for(var j=1;j<=n-i+1;j++){
        if(j!=n){
        str=str+(j)
        }
      }
      for(var k=0;k<=(i-2)*2;k++){
      str=str+(" ")
      }
      for(var t=n-i+1;t>=1;t--){
      str=str+(t);
      }
      arr.push(str)
    }
    for(let i=n;i>=1;i--){
      var str=""
      for(var j=1;j<=n-i+1;j++){
        // console.log(i+"dd")
        if(j!=n){
         
        str=str+(j)
        }
  
      }
      for(var k=0;k<=(i-2)*2;k++){
      str=str+(" ")
      }
      for(var t=n-i+1;t>=1;t--){
      str=str+(t);
      }
      arr.push(str)
  
    }
    return arr;
  
  }
  romboys(8)
  
  // =================================
  function ltacoding(w){
    var n=w.length
    for(var i=0;i<n/2;i++){
        var str=""
        for(var k=0;k<i;k++){
          str=str+("*")
        }
        for(var j=i;j<n-i;j++){
          str=str+(w[j])
        }
        for(var l=0;l<i;l++){
          str=str+("*")
        }
          console.log(str)
    }
  var kk=Math.floor(n/2)
     for(var i=kk;i>=0;i--){
        var str="";
        for(var k=0;k<i;k++){
          str=str+("*")
        }
        for(var j=i;j<n-i;j++){
          str=str+(w[j])
        }
        for(var l=0;l<i;l++){
          str=str+("*")
        }
        if(i!=kk){
          console.log(str)
        }
    }
  }
  //ltacoding("LTACODING")
  
  // --------------------------------------------------------
  
  
  function division(n){
  
    for(var i=0;i<n;i++){
      var str="";
      for(var j=0;j<n;j++){
            if(i==j){
          str=str+("\\")+(" ")
        }
      else if(j==(n-1)-i){
          str=str+("/")+(" ")
        }
        else{
          str=str+("*")+(" ")
        }
      }
      console.log(str)
    }
  }
  // division(10)
  
  // -------------------------------------------------------------------
  
  function lady(n) {
      var k = n + n - 1;
      var l;
      for(var i=1;i<=k;i++){
        var str=""
        for(var j=1;j<=k;j++){
            if(i<=n){
              l=i
            }
            else {
              l=n-(i%n)
            }
            if(j<=l){
              str=str+(j)
            }
            else if(j>=(k-l+1)){
              str=str+(k-j+1)
            }
            else{
              str=str+(" ")
            }
        }
      console.log(str)
      }
      }
  // // lady(7);
  // --------------------------------------------------
  
  function startalpha(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(j=i; j<n;j++){
          str=str+("*")+(" ")
      }
      for(k=i;k>=1;k--){
        str=str+(String.fromCharCode(k+64))+(" ")
      }
  
      console.log(str)
    }
  
  }
  // startalpha(9)
  // ------------------------------------------------
  function number(n){
  for(var i=0;i<=n;i++){
    var str="";
    for(var k=n;k>i;k--){
      str=str+(" ")+(" ")
    }
    for(var j=i;j>=0;j--){
      str=str+(j)+(" ")
    }
    for(var j=1;j<=i;j++){
      str=str+(j)+(" ")
    }
    
    console.log(str)
  }
  }
   //number(8)
  // --------------------------------------------------------
  
  function astar(n){
  
  for(var i=1;i<=n;i++){
    var str=""
    for(let k=i;k<n;k++){
      str=str+(" ")+(" ")
    }
    for(var j=1;j<=i;j++){
      str=str+("*")+(" ")
      if(j!=i ){
        str=str+("A")+(" ")
      }
    }
    console.log(str)
  }
  }
   //astar(9)
  //                *
  //               * A *
  //             * A * A *
  //           * A * A * A *
  //         * A * A * A * A *
  //       * A * A * A * A * A *
  //     * A * A * A * A * A * A *
  //   * A * A * A * A * A * A * A *
  // * A * A * A * A * A * A * A * A *
  
  // -----------------------------------------------------------
  
  function diifstr(n){
    for(var i=1;i<=n;i++){
      var str=""
  for(let k=1;k<i;k++){
        str=str+("*")+(" ")
  }
  for(let j=1,k=n-i+1;j<=n-i+1,k>=1;j++,k--){
   str=str+(j)+(" ")+(k)+(" ")
  }
  for(let j=1;j<i;j++){
    str=str+("*")+(" ")
  }
  console.log(str)    
  }
  
  }
  //diifstr(7)
  // 1 7 2 6 3 5 4 4 5 3 6 2 7 1
  // * 1 6 2 5 3 4 4 3 5 2 6 1 *
  // * * 1 5 2 4 3 3 4 2 5 1 * *
  // * * * 1 4 2 3 3 2 4 1 * * *
  // * * * * 1 3 2 2 3 1 * * * *
  // * * * * * 1 2 2 1 * * * * *
  // * * * * * * 1 1 * * * * * *
  // ----------------------------------------------------------------------
  
  
  function crossstar(n){
  for(var i=1;i<=n;i++){
    var str=""
    for(let k=i;k<=n;k++){
      str=str+(" ")
    }
    for(var j=1;j<=n;j++){
      if(i==1  || i==n || j==n || j==1){
   str=str+("*")
      }
      else{
        str=str+(" ")
      }
    }
    console.log(str)
  }
  }
  // crossstar(10)
  // t: hit control+c anytime to enter REPL.
  //           **********
  //          *        *
  //         *        *
  //        *        *
  //       *        *
  //      *        *
  //     *        *
  //    *        *
  //   *        *
  //  **********
  
  // --------------------------------------------------
  function starlovshape(n){
  for(let i=n/2;i<=n;i+=2){
    // console.log(i)
   var strr=""
  for(let j=1;j<n-i;j+=2){
      strr=strr+(" ")
  }
  for(let k=1;k<=i;k++){
    strr=strr+("*")
  }
  for(let j=1;j<=n-i;j++){
    strr=strr+(" ")
  }
  for(let jj=1;jj<=i;jj++){
    strr=strr+("*")
  }
  console.log(strr)
  
  }
    for(let i=0;i<n;i++){
      var str=""
      for(let ii=1;ii<=i;ii++){
        str=str+(" ")
      }
      for(var j=i;j<n;j++){
        str =str+("*")
      }
      for(let k=n-1;k>i ;k--){
  
        str=str+("*")
      }
      console.log(str)
    }
  
  }
  // starlovshape(10)
  
  // -----------------------------------------------------
  
  function gapestar(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=n-i;j>0;j--){
        str=str+(" ")
      }
      for(var k=1;k<=i;k++){
        var mi=Math.ceil(i/2)
          if( (i%2==1) && (k==1||k==i|| k==mi||i==n )){
            str=str+("*")+(" ")
          }
          else{
            str=str+(" ")+(" ")
          }
      }
      console.log(str)
    }
      for(var i=n-1;i>=1;i--){
      var str=""
      for(var j=n-i;j>0;j--){
        str=str+(" ")
      }
      for(var k=1;k<=i;k++){
        var mi=Math.ceil(i/2)
          if( (i%2==1) && (k==1||k==i|| k==mi)){
            str=str+("*")+(" ")
          }
          else{
            str=str+(" ")+(" ")
          }
      }
      console.log(str)
    }
  }
  // gapestar(11)
  //           *
  
  //         * * *
  
  //       *   *   *
  
  //     *     *     *
  
  //   *       *       *
  
  // * * * * * * * * * * *
  
  //   *       *       *
  
  //     *     *     *
  
  //       *   *   *
  
  //         * * *
  
  //           *
  
            // ---------------------------
  
  
  function numberstar(n){
    var arr=[]
    for(let i=1;i<=n;i++){
      var str=""
      for(let j=1;j<=i;j++){
        if(j==1){
        str=str+(i)
        }
        else{
        str=str+("*")+(i)
        }
      }
      arr.push(str)
    }
   var arr2=[...arr];
   arr[8]=arr[7]
   arr[9]=arr[6]
   arr[10]=arr[5]
   arr[11]=arr[4]
   arr[12]=arr[3]
   arr[13]=arr[2]
   arr[14]=arr[1]
   arr[15]=arr[0]
     return arr;
  
    // for(let i=n;i>=1;i--){
    //   var str=""
    //   for(let j=1;j<=i;j++){
    //     if(j==1){
    //     str=str+(i)
    //     }
    //     else{
    //     str=str+("*")+(i)
    //     }
  
    //   }
    //   console.log(str)
    // }
  
  
    
  }
  //  numberstar(8)
  // [ '1',
  //   '2*2',
  //   '3*3*3',
  //   '4*4*4*4',
  //   '5*5*5*5*5',
  //   '6*6*6*6*6*6',
  //   '7*7*7*7*7*7*7',
  //   '8*8*8*8*8*8*8*8',
  //   '8*8*8*8*8*8*8*8',
  //   '7*7*7*7*7*7*7',
  //   '6*6*6*6*6*6',
  //   '5*5*5*5*5',
  //   '4*4*4*4',
  //   '3*3*3',
  //   '2*2',
  //   '1' ]
  
  // ------------------------------------------------------------
  
            
  function kk(n){
    var kk=n+n-1
    for(var i=n;i>=1;i--){
        var str=""
        if(i%2==1){
        for(var j=1;j<=n-i+1;j++){
       
          if(j!=n){
          str=str+(j)
          }
        }
        for(var k=0;k<(i-2)*2+1;k++){
          str=str+(" ")
        }
        for(let t=n-i+1;t>=1;t--){
  
          str=str+(t)
        }
    console.log(str)
        
    }
    }
    
  }
  //kk(5) same loops
  
  // ======================================================
  //imp
  function rearrange(n){
    var kk=n+n-1;
    var count=0
    for(var i=0;i<kk;i+=2){
      var str=""
      for(let j=0;j<kk-i;j++){
        str=str+(n-count)  
      }
      count++
      console.log(str)
    }
    let coun=2;
    for(var i=kk;i>1;i-=2){
      var str=""                   //for(let j=0;j<=kk-i;j++)
      for(let j=0;j<=kk+1-i;j++){  //odd    for(let j=1;j<kk+2-i;j++){
        str=str+(coun)  
      }
      coun++
      console.log(str)
    }
  }
  //rearrange(4)
  // 4444444
  // 33333
  // 222
  // 1
  // 22
  // 3333
  // 444444
  
  
  // -----------------------------------------------------------
  //imp
  function loops(n){
    for(var i=1;i<=n;i++){
      var str=""
      if(i%2==1){
      for(var j=1;j<=i;j++){
        if(j!=n){
        str=str+(j)
        }
      }
      for(var k=2;k<((n-i)*2+1);k++){
         str=str+(" ")
    }
    for(var k=i;k>0;k--){
      str=str+(k)
    }
  console.log(str)
      }
  
    }
  }
  loops(5)
  // 1       1
  // 123   321
  // // 123454321
  // ---------------------------------------------
  
  
  
  function starspace(n){
  for(var i=1;i<=n;i++){
    var str=""
    for(var k=1;k<=n-i;k++){
      str=str+(" ")
    }
    for(var j=1;j<=i;j++){
       if(j==1 || j==i){
         str=str+("* ")
       }else{
         str=str+(" ")+(" ")
       }
    }
    console.log(str)
  }
  
  for(var i=n;i>=1;i--){
    var str=""
    for(var k=1;k<=n-i;k++){
      str=str+(" ")
    }
    for(var j=1;j<=i;j++){
       if(j==1 || j==i){
         str=str+("* ")
       }else{
         str=str+(" ")+(" ")
       }
    }
    console.log(str)
  }
  
  }
  // starspace(6)
  
  // Hint: hit control+c anytime to enter REPL.
  //      *
  //     * *
  //    *   *
  //   *     *
  //  *       *
  // *         *
  // *         *
  //  *       *
  //   *     *
  //    *   *
  //     * *
  //      *
  // 
  
  // -----------------------------------------------
  
  function starts(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var k=1;k<=n-i;k++){
        str=str+(" ")
      }
      for(var j=1;j<=i;j++){
         str=str+("* ")
      }
      console.log(str)
    }
    for(var i=n;i>=1;i--){
      var str=""
      for(var k=1;k<=n-i;k++){
        str=str+(" ")
      }
      for(var j=1;j<=i;j++){
        str=str+("* ")
      }
      console.log(str)
    }
  }
  // starts(6)
  
  //      *
  //     * *
  //    * * *
  //   * * * *
  //  * * * * *
  // * * * * * *
  // * * * * * *
  //  * * * * *
  //   * * * *
  //    * * *
  //     * *
  //      *
  
  // ---------------------------------------------------------
  
  function order(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var kk=i;kk<n;kk++){
        str=str+("*")
      }
      for(var j=1;j<=i;j++){
        if(j==n&&i==n){
        str=str+(j)+(" ")
        }
        else{
          str=str+(j)+("*")
        }
      }
      for(var k=i;k<n-1;k++){
        str=str+("*")
           
      }
     console.log(str)
    }
  
  }
  //  order(8)
  // // -----------------------------------------------
  // *******1*******
  // ******1*2******
  // *****1*2*3*****
  // ****1*2*3*4****
  // ***1*2*3*4*5***
  // **1*2*3*4*5*6**
  // *1*2*3*4*5*6*7*
  // 1*2*3*4*5*6*7*8
  
  
  function add(n){
    for(var i=1;i<=n;i++){
      var str=""
      var fact=0
      var fact1=1;
      for(var j=1;j<=i;j++){
        temp=fact+fact1;
        str=str+(temp)+(" ")
        fact=fact1;
        fact1=temp;      
      }
      console.log(str)
    }
  }
  //add(10)
  // ---------------------------------------------------------
  
   function abc(n){
    for(var i=1;i<=n;i++){
        var str=""
         for(var k=1;k<=i;k++){
           str=str+String.fromCharCode(k+64)
         }
         for(var j=i-1;j>=1;j--){
           str=str+String.fromCharCode(j+64)        
         }
         console.log(str)
    }
  }
  //abc(7)
  
  // -------------------------------------------------------
  
  function pascaltriangle(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var k=i;k<n;k++){
        str=str+(" ");
      }
      for(var j=1;j<=i;j++){
        if(j==1 || j==i){   
        str=str+("1")+(" ")
        }
        else if(i==n && j==3){
          str=str+(i+1)+(" ")
        }
        else{
          str=str+(i-1)+(" ")
        }
      }
      console.log(str)
    }
  }
  //pascaltriangle(5)
  
  
  // ----------------------------------------------------------------
  
  function pascaltriangleo(n){
    for(var i=1;i<=n;i++){
      var str="",kk=1;
      
      for(var k=i;k<n;k++){
        str=str+(" ")
      }
      for(var j=1;j<=i;j++){
        str=str+(kk)+(" ")
        kk=kk*(i-j)/j;
        
        // console.log(kk+" "+ i +" "+ j)
      }
       console.log(str)
    }
  
  }
  // pascaltriangleo(5)
  
  // ------------------------------------------------------------
  
  function desired(n){
  
    for(var i=1;i<=n;i++){
      var str=""
      for(var k=i;k<n;k++){
        str=str+(" ")
      }
      for(var j=1;j<=i;j++){
        if(i==1||j==1|| j==i || i==n ){
          str=str+(j)+(" ")
        }
        else{
          str=str+(" ")+(" ")
        }
      }
      console.log(str)
    }
  
  }
   //desired(9)
  // ------------------------------------------------------------------
  //imp
  function patterns(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var k=i;k<n;k++){
        str=str+(" ");
      }
      var kk=i
      for(var j=1;j<=i;j++){
        str=str+(kk++)
      }
       kk--
       for(var j=1;j<i;j++){
        str=str+(--kk)
      }
     console.log(str)
    }
  }
  // // patterns(5)
  //     1
  //    232
  //   34543
  //  4567654
  // 567898765
  // -----------------------------------------------------
  
  function gappat(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var k=i;k<=n;k++){
        if(k==i|| i==1 || k==n){
          str=str+(k)
        }
        else{
          str=str+(" ")
        }
      }
      console.log(str)
    }
  
  }
  // //gappat(9)
  
  // Hint: hit control+c anytime to enter REPL.
  // 123456789
  // 2      9
  // 3     9
  // 4    9
  // 5   9
  // 6  9
  // 7 9
  // 89
  // 9
  
  // -----------------------------------------------------------------
  
  function trianglegap(n){
  for(var i=1;i<=n;i++){
    var str=""
    for(var k=i;k<=n;k++){
      str=str+(" ")
        }
        for(var j=1;j<=i;j++){
        if(j==1 || j==i || i==n){
          str=str+(j)+(" ")
        }
        else{
          str=str+(" ")+(" ")
        }
        }
        console.log(str)
  }
  }
  // trianglegap(9)
  //         1
  //         1 2
  //        1   3
  //       1     4
  //      1       5
  //     1         6
  //    1           7
  //   1             8
  //  1 2 3 4 5 6 7 8 9
  
  // ------------------------------------------
  //h53
  function kk(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=1;j<=i;j++){
        if(j==1 || j==i || i==n){
   str=str+(j)+(" ")
        }
        else{
          str=str+(" ")+(" ")
        } 
      }
      console.log(str)
    }
  
  }
  // kk(8)
  
  // 1
  // 1 2
  // 1   3
  // 1     4
  // 1       5
  // 1         6
  // 1           7
  // 1 2 3 4 5 6 7 8
  
  
  // ------------------------------------------------------
  
  //52
  function reverse(n){
    for(var i=0;i<n;i++){
      var str=""
      for(var k=1;k<=i;k++){
        str=str+(" ")   
      }
      for(var j=1;j<=n-i;j++){
        if(i==0 || j==1 || j==n-i){
          str=str+("*")+(" ")
        }else{
          str=str+(" ")+(" ")
        }
      }
      console.log(str)
    }
  }
  // reverse(10);
  // * * * * * * * * * *
  //  *               *
  //   *             *
  //    *           *
  //     *         *
  //      *       *
  //       *     *
  //        *   *
  //         * *
  //          *
  
  // ---------------------------------------------------
  //51
  function pyramid(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var k=i;k<n;k++){
        str=str+(" ")
      }
      for(var j=1;j<=i;j++){
        if(j==1||j==i || i==n){
          str=str+("*")+(" ")
        }
        else{
          str=str+(" ")+(" ")
        }
     
      }
         console.log(str)
    }
  
  }
  // pyramid(5)
  // nt: hit control+c anytime to enter REPL.
  //     *
  //    * *
  //   *   *
  //  *     *
  // * * * * *
  
  // -------------------------------------------------
  //50
  
  function squarehalf(n){
    for(var i=1;i<=n;i++){
      var str=" "
      for(var j=1;j<=n;j++){
        if(j==1 || i==1 || j==n || i==n){
          str=str+("*")+(" ")
        }
        else if(j==n/2){
          str=str+(" *")
        }
        else{
          str=str+(" ")+(" ")
        }
      }
      console.log(str)
    }
  }
  // squarehalf(8)
  // * * * * * * * *
  //  *      *      *
  //  *      *      *
  //  *      *      *
  //  *      *      *
  //  *      *      *
  //  *      *      *
  // //  * * * * * * * *
  // 0-------------------------------------------
  //49
  
  function zigspace(n){
    for(var i=n/2;i>=1;i--){
      let str=""
      let ktr=" "
      for(j=1;j<=i;j++){
        str=str+String.fromCharCode(64+j)+(" ")
        ktr=ktr+String.fromCharCode(91-j)+(" ");
      }
      console.log(ktr)
      if(i!=1){
      console.log(str)
      }
        }
          var sstr=""
          var kktr=" "
         for(var i=1;i<=n/2;i++){
      var sstr=""
      var kktr=" "
      for(j=1;j<=i;j++){
        sstr=sstr+String.fromCharCode(64+j)+(" ")
        kktr=kktr+String.fromCharCode(91-j)+(" ");
      }
      console.log(sstr)
          console.log(kktr)
        }
  
  }
  //zigspace(8)
  
  // Hint: hit control+c anytime to enter REPL.
  //  Z Y X W
  // A B C D
  //  Z Y X
  // A B C
  //  Z Y
  // A B
  //  Z
  // A
  //  Z
  // A B
  //  Z Y
  // A B C
  //  Z Y X
  // A B C D
  // //  Z Y X W
  // -----------------------------------------------------------
  //48
  
  function az(n){
    var aec=1;
    var dec=1;
    for(var i=1;i<=n;i++){
      var str=""
      if(i%2==1){
        for(var j=1;j<=i;j++){
        var  stk=(String.fromCharCode(64+aec))
          str=str+String.fromCharCode(64+aec)
          if(stk=="Z"){
            aec -=26
          }
          aec++
        }
      }
      else{
        str=str+("<")
         for(var k=1;k<=i;k++){
         var  stk=String.fromCharCode(91-dec)
          str=str+String.fromCharCode(91-dec)
          if(stk=="A"){
            dec -=26
          }
          dec++
        }
      }
      console.log(str)
    }
  }
  // az(11)
  
  // A
  // <ZY
  // BCD
  // <XWVU
  // EFGHI
  // <TSRQPO
  // JKLMNOP
  // <NMLKJIHG
  // QRSTUVWXY
  // <FEDCBAZYXW
  // ZABCDEFGHIJ
  
  // ------------------------------------------------------
  //47
  function riangle(n){
  for(var i=1;i<=n;i++){
    var str=""
    for(var j=i;j<=n;j++){
      if(i==1 ||j==i || j==n){
       str=str+("*")+(" ")
      }
      else{
        str=str+(" ")+(" ")
      }
    
    }
    console.log(str)
  
  }
  }
  //riangle(8)
  
  // * * * * * * * *
  // // *       **         **       **     **   ** **
  // -----------------------------------------------------
  //46
  function square(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=1;j<=n;j++){
        if(i==1 || j==1 || j==n || i==n || i==j || j==n-i+1){
          str=str+("*")+(" ")
        }
        else{
          str=str+(" ")+(" ")
        }
      }
      console.log(str)
    }
  
  }
  // square(11)
  // * * * * * * * * * * *
  // * *               * *
  // *   *           *   *
  // *     *       *     *
  // *       *   *       *
  // *         *         *
  // *       *   *       *
  // *     *       *     *
  // *   *           *   *
  // * *               * *
  // // * * * * * * * * * * *
  // ----------------------------------------------------
  //45
  function xx(n){
    var kk=Math.ceil(n/2)
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=1;j<=n;j++){
        if(j==kk || i==kk){
        str=str+("X")
      }
      else{
        str=str+("0")
      }
      }
      console.log(str)
    }
  
  }
  // xx(9)
  
  // ---------------------------------------------------------
  //41
  function number(n){
  for(var i=1;i<=n;i++){
    var str=""
    for(var k=i;k<n;k++){
      str=str+(" ")
    }
      for(var j=1;j<=i;j++){
      str=str+(j)+(" ")
    }
  console.log(str)
  }
  }
  // number(9)
  //   1
  //        1 2
  //       1 2 3
  //      1 2 3 4
  //     1 2 3 4 5
  //    1 2 3 4 5 6
  //   1 2 3 4 5 6 7
  //  1 2 3 4 5 6 7 8
  // 1 2 3 4 5 6 7 8 9
  
  // ------------------------------------------------
  //42
  function abcd(n){
    for(var i=1;i<=n;i++){
    var str=""
      for(var j=1;j<=i;j++){
      str=str+String.fromCharCode(64+j)
    }
  console.log(str)
  }
  
  }
  // abcd(7)
  // A
  // AB
  // ABC
  // ABCD
  // ABCDE
  // ABCDEF
  // ABCDEFG
  
  // --------------------------------------------------
  
  //41 40 same
  function pyramidstar(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=1;j<=i;j++){
        if(j==1){
      str=str+(j)
      }
      else{
        str=str+("*")+(j)
      }
      }
      console.log(str)
      }
  
      for(var i=n;i>1;i--){
        var str=""
        for(var j=1;j<i;j++){
          if(j==1){
            str=str+(j)
          }
          else{
            str=str+("*")+(j)
          }
        }
        console.log(str)
      }
  }
  //pyramidstar(7)
  // 1
  // 1*2
  // 1*2*3
  // 1*2*3*4
  // 1*2*3*4*5
  // 1*2*3*4*5*6
  // 1*2*3*4*5*6*7
  // 1*2*3*4*5*6
  // 1*2*3*4*5
  // 1*2*3*4
  // 1*2*3
  // 1*2
  // // 1
  // -----------------------------------------------------------
  //39
  function number(n){
    for(var i=1;i<=n;i++){
      var str=""
      var kk=i;
      for(var j=0;j<=n-i;j++){  
      str=str+(kk++)
      }
      kk--
      for(var k=1;k<=n-i;k++){
        str=str+(--kk)
      
      }
      console.log(str);
    }
  
  }
  // number(7)
  // 1234567654321
  // 23456765432
  // 345676543
  // 4567654
  // 56765
  // 676
  // 7
  
  // ----------------------------------------------------
  function number(n){
    for(var i=1;i<=n;i++){
      var str="";
      for(var j=1;j<=i;j++){
       str=str+(j) 
      }
      for(var k=i-1;k>=1;k--){
        str=str+(k)
      }
      console.log(str)
    }
  }
  // number(7)
  // 1
  // 121
  // 12321
  // 1234321
  // 123454321
  // 12345654321
  // 1234567654321
  
  function pyramid(n){
  
    for(var i=1;i<=n;i++){
      var str="";
      for(var k=i;k<n;k++){
        str=str+(" ")
      }
      for(var j=1;j<=i;j++){
        str=str+("*")
      }
       for(var jj=1;jj<i;jj++){
        str=str+("*")
      }
      console.log(str)
    }
  
  }
  // pyramid(7)
  //    *
  //      ***
  //     *****
  //    *******
  //   *********
  //  ***********
  // *************
  
  
  function pyramid(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var k=i;k<n;k++){
        str=str+(" ")
      }
      for(var j=1;j<=i;j++){
        str=str+("*")+(" ")
      }
  console.log(str)
    }
  
  }
  // pyramid(8)
  //    *
  //       * *
  //      * * *
  //     * * * *
  //    * * * * *
  //   * * * * * *
  //  * * * * * * *
  // * * * * * * * *
  
  
  function inputs(n,k){
    for(var i=n;i<=k;i++){
      var str=""
      for(var j=n;j<=i;j++){
       str=str+(i)
      }
      console.log(str)
    }
    for(var i=k-1;i>=n;i--){
      var str=""
      for(var j=n;j<=i;j++){
       str=str+(i)
      }
      console.log(str)
    }
  }
  // inputs(5,9)
  // 5
  // 66
  // 777
  // 8888
  // 99999
  // 8888
  // 777
  // 66
  // 5
  
  // -----------------------------------------
  
  function starnum(n){
    for(var i=1;i<=n;i++){
      var str=""
      if(i%2==1){
        str=str+("*")
        for(var j=1;j<=i;j++){
          str=str+(j)
        }
      }
      else{
          for(var k=i;k>=1;k--){
          str=str+(k)
        }
        str=str+("*")
      }
      console.log(str)
    }
  }
  // starnum(8)
  // *1
  // 21*
  // *123
  // 4321*
  // *12345
  // 654321*
  // *1234567
  // 87654321*
  
  
  function jkl(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=1;j<=i;j++){
        if(j!=n){
        str=str+(j)
        }
      }
      for(var k=1;k<(n-i)*2;k++){
        str=str+(" ")
      }
      for(var kk=i;kk>=1;kk--){
        str=str+(kk)
      }
     console.log(str);
    }
      for(var i=n;i>=1;i--){
      var str=""
      for(var j=1;j<=i;j++){
        str=str+(j)
      }
      for(var k=1;k<(n-i)*2;k++){
        str=str+(" ")
      }
      for(var kk=i;kk>=1;kk--){
        str=str+(kk)
      }
      if(i!=n){
     console.log(str);
      }
    }
  
  
  }
  //jkl(7)
  
  function lady(n) {
      var k = n + n - 1;
      var l;
      for (var i = 1; i <= k; i++) {
          var str = ""
          for (var j = 1; j <= k; j++) {
              if (i <= n) {
                  l = i
              }
              else {
                  // console.log(n-i%n+"kk") 4,3,2,1
                  l = n - (i % n)
                //  console.log(l)
              }
              if (j <= l) {
                  str = str + (j)
              }
              else if (j >= k - l + 1) {
                  str = str + (k - j + 1)
              }
              else {
                  str = str + (" ")
              }
          }
           console.log(str);
      }
  }
  // lady(7);
  
  // -------------------------------------------
  // function  noo(n){
  //     for(var i=1;i<=n;i++){
  //         var str="";
  //         for(var j=1;j<=n;j++){
  //            if(i==1 || i==n || j==1 || j==n){
  //                str=str+("1")+(" ")
  //            }
  //            else{
  //                str=str+(" ")+(" ")
  //            }
             
  //         }
  //         console.log(str)
  //     }
  
  // }
  // noo(5)
  
  // 1 1 1 1 1
  // 1       1
  // 1       1
  // 1       1
  // // 1 1 1 1 1
  
  // function kk(n){
  //     for(var i=1;i<=n;i++){
  //         var str=""
  //         for(var j=1;j<=i;j++){
  //             if( i==n ||j==1 || j==i){
  //            str=str+("1")+(" ")
  //             }
        
          
  //         else{
  //             str=str+(" ")+(" ")
  //         }
  //         }
  //         console.log(str)
  //     }
  
  // }
  // kk(10)
  // 1
  // 1 1
  // 1   1
  // 1     1
  // 1       1
  // 1         1
  // 1           1
  // 1             1
  // 1               1
  // 1 1 1 1 1 1 1 1 1 1
  
  // --------------------------------------------------
  
  
  function num(n){
  var a=1
  for(var i=1;i<=n;i++){
    var str=""
    for(var j=1;j<=i;j++){
      str=str+(a%2)
      a++
    }
    console.log(str)
  }
  }
  //num(5)
  // 1
  // 01
  // 010
  // 1010
  // 10101
  
  // -----------------------------------------
  
  function numberchange(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=n;j>=1;j--){
        if(j<=i){
            str=str+(i)
        }
        else{
          str=str+("1")
        }
      }
      console.log(str)
    }
  
  }
  // numberchange(5)
  // 11111
  // 11122
  // 11333
  // 14444
  // 55555
  
  // -------------------------------------------------
  
  function number(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var k=i;k>1;k--){
         str=str+(" ")
      }
      for(var j=i;j<=n;j++){
          str=str+(j)+(" ")
      }
      console.log(str)
    }
    for(var i=n;i>=1;i--){
      var str=""
      for(var k=i;k>1;k--){
         str=str+(" ")
      }
      for(var j=i;j<=n;j++){
          str=str+(j)+(" ")
      }
      console.log(str)
    }
  }
  // number(6)
  // 1 2 3 4 5 6
  //  2 3 4 5 6
  //   3 4 5 6
  //    4 5 6
  //     5 6
  //      6
  //      6
  //     5 6
  //    4 5 6
  //   3 4 5 6
  //  2 3 4 5 6
  // 1 2 3 4 5 6
  
  // -----------------------------------------------
  //27
  function  divisionnum(n){
    for(var i=0;i<n;i++){
      var str=""
      for(var j=n-i;j>=1;j--){
        str=str+(j)
      }
      console.log(str)
       }
      for(var i=n;i>=1;i--){
      var str=""
      for(var j=n+1-i;j>=1;j--){
        str=str+(j)
      }
      console.log(str)
    }
  }
  // divisionnum(4)
  // 4321
  // 321
  // 21
  // 1
  // 1
  // 21
  // 321
  // 4321
  
  
  // -----------------------------------------------------------------
  
  
  // function pt(n){
  // for(var i=1;i<=n;i++){
  //     var str=""
  //     for(var k=0;k<n-i;k++){
  //         str=str+(" ");
  //     }
  //     for(var j=1;j<=i;j++){
      
  //     if(i%2==0){
  //         str=str+(j)+(" ")
  //     }
  //     else{
  
  //         str=str+("*")+(" ")
  //     }
  //     }
  // console.log(str)
  // }
  // }
  // pt(5)
  
  //     *
  //    1 2
  //   * * *
  //  1 2 3 4
  // * * * * *
  
  function kk(n){
  for(var i=1;i<=n;i++){
  var str=""
      for(var j=1;j<=i;j++){
          if(j%3==1){
             str=str+("*")+(" ")
          }
          else if(j%3==2){
              str=str+("#")+(" ")
          }
          else{
              str=str+("&")+(" ")
          }
  
      }
      console.log(str);
  }
  }
  // kk(6);
  // *
  // * #
  // * # &
  // * # & *
  // * # & * #
  // * # & * # &
  
  // -------------------------------------------------
  //16
  function pat(n){
    for(var i=0;i<n;i++){
      var str=""
      for(var k=1;k<=i;k++){
        str=str+(" ")
      }
      for(var j=1;j<=n-i;j++){
        str=str+(j)+(" ")
      }
      console.log(str)
    }
  
  }
  // pat(5)
  // 1 2 3 4 5
  //  1 2 3 4
  //   1 2 3
  //    1 2
  //     1
  
  // ----------------------------------------------------
  function part(n){
    for(var i=n;i>=1;i--){
      var str=""
      for(var k=i;k>1;k--){
        str=str+(" ")
      }
      for(var j=n;j>=i;j--){
        str=str+(i)+(" ")
      }
      console.log(str)
    }
  }
  // part(5)
  //    5
  //    4 4
  //   3 3 3
  //  2 2 2 2
  // // 1 1 1 1 1
  // -----------------------------------------------
  function numb(n){
    for(var i=0;i<n;i++){
      var str=""
      for(var j=n-i;j<=n;j++){
        str=str+(j)
      }
      console.log(str)
    }
  
  }
  //numb(5)
  // 5
  // 45
  // 345
  // 2345
  // 12345
  
  // -------------------------------------------------------
  
  function kk(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=i;j>=1;j--){
        str=str+(j)
      }
      console.log(str)
    }
  
  }
  // kk(5)
  // 1
  // 21
  // 321
  // 4321
  // // 54321
  // --------------------------------------
  //12
  function kk(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=1;j<=i;j++){
        str=str+(i)
      }
      console.log(str)
    }
  }
  // kk(5)
  // 1
  // 22
  // 333
  // 4444
  // 55555
  
  // ----------------------------------------
  function jkl(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=1;j<=i;j++){
        str=str+(j)
      }
      console.log(str)
    }
  }
  // jkl(5)
  // 1
  // 12
  // 123
  // 1234
  // 12345
  
  // -------------------------------------------------
  
  function name(n){
    var arr=n.split("") 
    for(var i=0;i<arr.length;i++){
    var str="";
    for(var j=0;j<=i;j++){
    str=str+(arr[j])
   }
  console.log(str)
    }
     for(var i=arr.length-1;i>=0;i--){
    var str="";
    for(var j=0;j<i;j++){
    str=str+(arr[j])
   }
  console.log(str)
    }
  }
  //name("satish burra")
  
  // --------------------------------------------
  function  daigonal(n){
    var m=(n+1)/2
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=1;j<=n;j++){
        if(i==j){
          if(i<m){
            str=str+(n-j+1)
          }
          else{
            str=str+(i)
          }
        }
        else if(i+j==n+1){
          if(i<m){
            str=str+(i)
          }
          else{
            str=str+(j)
          }
        }
        else{
          str=str+(" ")
        }
      }
      console.log(str)
    }
  }
  // daigonal(5)
  
  // --------------------------------------------------------