
function spiral(n){
    for(var i=n; i>1; i--){
      var str=""
        for(var j=n;j>=1;j--) {
            if(j>i){
            str=str+(j);
            }
            else{
             str=str+(i)
              } 
        }
        for(var j=2;j<=n;j++) {
            if(j>i) 
         str=str+(j)
            else{
              str=str+(i)
            }
            
    }  
    console.log(str)  
    }

    for(var i=1; i<=n; i++){ 
      var str="" 
        for(var j=n;j>=1;j--){
            if(j>i){
            str=str+(j)
            } 
            else{
           str=str+(i)
            }
        }
        for(var j=2;j<=n;j++){
            if(j>i){
             str=str+(j)
            }
            else {
             str=str+(i)
        }
    
    }
    console.log(str)
}


}
spiral(5)






