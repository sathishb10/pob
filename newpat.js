function patte(n){
    for(var i=0;i<n;i++){
      var str=""
      for(var j=1;j<=n-i;j++){
      str=str+(j)
    }
  console.log(str)
    }
  }
  // patte(5)
  // Hint: hit control+c anytime to enter REPL.
  // 12345
  // 1234
  // 123
  // 12
  // 1
  
  // ---------------------------------------------
  // function patter(n){
  //   for(var i=1;i<=n;i++){
  //     var str=""
  //     for(var j=i;j<=n;j++){
  //     str=str+(j)
  //   }
  // console.log(str)
  //   }
  // }
  // patter(5)
  
  // function patter(n){
  //   for(var i=0;i<n;i++){
  //     var str=""
  //     for(var j=n-i;j>=1;j--){
  //     str=str+(j)
  //   }
  // console.log(str)
  //   }
  // }
  // patter(5)
  
  // function patter(n){
  //   for(var i=1;i<=n;i++){
  //     var str=""
  //     for(var j=i;j>=1;j--){
  //     str=str+(j)
  //   }
  // console.log(str)
  //   }
  // }
  // patter(5)
  // 1
  // 21
  // 321
  // 4321
  // 54321
  
  
  function patter(n){
    for(var i=5;i>=1;i--){
      var str=""
      for(var j=i;j>=1;j--){
      str=str+(i)
    }
  console.log(str)
    }
  }
  //patter(5)
  // Hint: hit control+c anytime to enter REPL.
  // 55555
  // 4444
  // 333
  // 22
  // 1
  
  function num(n){
    for(var i=n;i>=1;i--){
      var str=""
      for(var j=i;j<=n;j++){
      str=str+(i)
    }
  console.log(str)
    }
  }
  // num(5)
  // Hint: hit control+c anytime to enter REPL.
  // 5
  // 44
  // 333
  // 2222
  // 11111
  
  function numm(n){
    for(var i=1;i<=5;i++){
      var str=""
      for(var j=0;j<=n-i;j++){
      str=str+(i)
    }
  console.log(str)
    }
  }
  // numm(5)
  // Hint: hit control+c anytime to enter REPL.
  // 11111
  // 2222
  // 333
  // 44
  // 5
  
  
  function numkfk(n){
    var k;
    for(var i=n;i>=1;i--){
      var str="";
      if(i%2==1){
        k=1;
      }
      else{
        k=i
      }
      var str=""
      for(var j=1;j<=i;j++){
  
        if(i%2==1){
          str=str+(k)
          k++
        }
        else{
           str=str+(k)
           k--
        }
    }
  console.log(str)
    }
  }
  //numkfk(5)
  // Hint: hit control+c anytime to enter REPL.
  // 12345
  // 4321
  // 123
  // 21
  // 1
  
  function numb(n){
    var k=n+n-1;
    for(var i=k;i>=1;i-=2){
      var str="";
      for(var j=1;j<=i;j++){
        str=str+(j)
      }
    console.log(str)
    }
  
  }
  //numb(4)
  // 1234567
  // 12345
  // 123
  // 1
  
  function aa(n){
    var a=1
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=i;j>=1;j--){
        str=str+(j%2)
     
      }
      console.log(str)
    }
  
  }
  //aa(4)
  // 1
  // 01
  // 010
  // 1010
  
  // function numch(n){
  //   for(var i=1;i<=n;i+=2){
  //     var str=""
  //     for(var j=i;j<=n;j+=2){
  //           str=str+(j)
  //     }
  //     console.log(str)
  //   }
  
  // }
  // numch(9)
  // Hint: hit control+c anytime to enter REPL.
  // 13579
  // 3579
  // 579
  // 79
  // // 9
  
  
  function numc(n){
    for(var i=1;i<=n;i++){
      var str=""
      if(i%2==0){
        k=2;
      }
      else{
        k=1
      }
      for(var j=1;j<=i;j++){
        str=str+(k)
        k +=2
      }
  console.log(str)
    }
  
  }
  //numc(5)
  // 1
  // 2 4
  // 1 3 5
  // 2 4 6 8
  // 1 3 5 7 9
  
  function five(n){
    for(var i=1;i<=n;i++){
      var str=""
      kk=n+1-i
      for(var k=1;k<i;k++){
        str=str+(kk)
        kk++
      }
      for(var j=i;j<=n;j++){
        str=str+("5")
      }
      console.log(str)
    }
  
  }
  // five(5)
  // 55555
  // 45555
  // 34555
  // 23455
  // 12345
  
  function numin(n){
    var count=1
    for(var i=1;i<=n;i++){
      var str=""
      var num=i
      for(var j=1;j<=i;j++){
      str=str+(num)
      num=num+n-j
      }
      console.log(str)
    }
  
  }
  // numin(5)
  // 1
  // 26
  // 3710
  // 481113
  // 59121415
  
  function kk(n){
    for(var i=0;i<n;i++){
      var str=""
       for(var j=1;j<=n-i;j++){
          str=str+(j)
       }
       for(var k=1;k<=i*2;k++){
         str=str+("*")
       }
       for(var jj=n-i;jj>=1;jj--){
          str=str+(jj)
       }
       console.log(str)
    }
  
  }
  // kk(5)
  // 1234554321
  // 1234**4321
  // 123****321
  // 12******21
  // 1********1
  //imp
  function numk(n){
    var k=1
    for(var i=1;i<=n;i+=2){
    var str=""
    for(var j=n;j>=1;j--){
      if(j>i){
        str=str+(" ")
      }
      else{
        str=str+(k++)+(" ")
      }
  
    }
    console.log(str)
    }
  }
  // numk(5)
  //   1
  //   2 3 4
  // 5 6 7 8 9
  
  function jk(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=n;j>=i;j--){
        if(i<=3){
        str=str+(i)
        }
        else{
          str=str+(6-i)
        }
  
      }
      console.log(str)
    }
  
  }
  // jk(5)
  // 11111
  // 2222
  // 333
  // 22
  // 1
  
  function numh(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=n;j>=i;j--){
  if(j==i){
    str=str+("*")
  }
  else{
    str=str+(j)
    } 
    }
    for(var kk=i-1;kk>=1;kk--){
    str=str+(kk)
    }
      console.log(str)
    }
  
  }
  // numh(5)
  // 5432*
  // 543*1
  // 54*21
  // 5*321
  // *4321
  
  function change(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=1;j<=i;j++){
        str=str+(j)
      }
      for(var kk=i-1;kk>=1;kk--){
        str=str+(kk)
      }
      console.log(str)
    }
  
  }
  // change(4)
  // 1
  // 121
  // 12321
  // 1234321
  
  function kkk(n){
    for(var i=n+1;i>=1;i--){
      var str=""
      for(var j=i;j<=n;j++){
       str=str+(j)
      }
      str=str+("0")
      for(var k=n;k>=i;k--){
        str=str+(k)
      }
      console.log(str)
    } 
  }
  // kkk(9)
  // 0
  // 909
  // 89098
  // 7890987
  // 678909876
  // 56789098765
  // 4567890987654
  // 345678909876543
  // 23456789098765432
  // 1234567890987654321
  
  //imp
  function code(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=1;j<=5;j++){
          if(j<=i){
         str=str+(j)
         }
          else{
            str=str+(" ")
          }  
      }
      for(var k=5;k>=1;k--){
        if(i>=k){
          str=str+(k)
        }
        else{
          str=str+(" ")
        }
      }
      console.log(str)
    }
  
  }
  // code(5)
  // 1        1
  // 12      21
  // 123    321
  // 1234  4321
  // 1234554321
  
  function jkltk(n){
    for(var i=1;i<=n;i++){
      var str=""
      var k=i;
      for(var j=5;j>=1;j--){
        if(i>=j){
          str=str+(k)
          k--
        }
        else{
          str=str+(" ")
        }
      }
      console.log(str)
    }
  
  }
  // jkltk(5)
  //     1
  //    21
  //   321
  //  4321
  // 54321
  //impp
  function number(n){
  
     var k=1,l=1
    for(var i=1;i<=n;i++){
      var str=""
      l=k
      for(var j=1;j<=i;j++){
        // console.log(l+"up")
        str=str+(l++)
        // console.log(l+"dn")
      }
      k =l--
      for(var j=1;j<i;j++){
        str=str+(--l)
      }
      console.log(str)
    }
   }
   number(4)
  // 1
  // 232
  // 45654
  // 78910987
  
  function plus(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=1;j<=i;j++){
        var k=9+i+j
      str=str+(k)
      }
      console.log(str)
    }
  }
  // plus(4)
  // 11
  // 1213
  // 131415
  // 14151617
  
  //d
  function kk(n){
        var num=1
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=5;j>=1;j--){
        if(j>i){    
           str=str+(" ")  
        }
        else{
        
          str=str+(num++)
           
        }   
      }
       console.log(str)
    }
  
  }
  // kk(5)
  //    1
  //    23
  //   456
  //  78910
  // 1112131415
  
  function numkk(n){
    for(var i=5;i>=1;i--){
      var str=" "
      for(var k=1;k<i;k++){
        str=str+(" ")
      }
      for(var j=n;j>=i;j--){
        str=str+(j)
      }
      console.log(str)
    }
  
  }
   //numkk(5)
  //   5
  //     54
  //    543
  //   5432
  //  54321
  
  function  numl(n){
    for(var i=1;i<=n;i++){
      var str=""
      for(var j=i;j>1;j--){
          str=str+(j)
      }
      for(var k=1;k<=i;k++){
        str=str+(k)
      }
      console.log(str)
    }
  
  }
  // numl(4)
  // 1
  // 212
  // 32123
  // 4321234
  function numberr(n){
    for(var i=1;i<=n;i++){
      var str=""
      var k=i
      for(var j=1;j<=i;j++){
        str=str+(k++)
      }
      console.log(str)
    }
  
   }
  // numberr(5)
  // 1
  // 23
  // 345
  // 4567
  // 56789
  
  function spiral(n){
  
    for(var i=n;i>1;i--){
      var str=""
      for(var j=n;j>=1;j--){
        if(j>i){
     str=str+(j)
        }
        else{
          str=str+(i)
        }
     }
  for(var k=2;k<=n;k++){
    if(k>i){
      str=str+(k)
    }
    else{
  str=str+(i)
    }
  }
  console.log(str)
    }
      for(var i=1;i<=n;i++){
      var str=""
      for(var j=n;j>=1;j--){
        if(j>i){
     str=str+(j)
        }
        else{
          str=str+(i)
        }
     }
  for(var k=2;k<=n;k++){
    if(k>i){
      str=str+(k)
    }
    else{
  str=str+(i)
    }
  }
  console.log(str)
    }
  
  
  }
  //spiral(5)
  
  
  
  
  
  
  