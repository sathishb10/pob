let mat=[['k',0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]]
let moves={
  'moveUp':[-1,0],
  'moveDown':[1,0],
  'moveLeft':[0,-1],
  'moveRight':[0,1],
  'moveUR':[-1,1],
  'moveUL':[-1,-1],
  'moveDR':[1,1],
  'moveDL':[1,-1]
}
let destDirection;
let moveCounter=0;
let moveArr=[];
function f(r1,c1,r2,c2){
  //same coordinate
  if(r1==r2&&c1==c2)return;
  //same row
  if(r1==r2){
    if(c2>c1){//dest on the right
      let temp=c2-c1;//c1 will change
      for( let i=1; i<=temp;i++){
        c1+=moves.moveRight[1];
        mat[r1][c1]=".";
        moveArr.push([r1,c1]);
        moveCounter++;
      }
      return;
    }
    else{//dest on the left
      let temp=c1-c2;;//c1 will change
  
      for( let i=1; i<=temp;i++){
        c1+=moves.moveLeft[1];
        mat[r1][c1]=".";
        console.log([r1,c1])
        moveArr.push([r1,c1]);
        moveCounter++;
      }
      return;
    }
  }//same coloumn
  else if(c1==c2){
    if(r2>r1){//dest is below
      let temp=r2-r1;//r1 will change
      for( let i=1; i<=temp;i++){
        r1+=moves.moveDown[0];
        mat[r1][c1]=".";
        moveArr.push([r1,c1]);
        moveCounter++;
      }
      return;
    }
    else{//dest is above
      let temp=r1-r2;;//c1 will change
      // console.log(temp)
      for( let i=1; i<=temp;i++){
        r1+=moves.moveUp[0];
        mat[r1][c1]=".";
        console.log([r1,c1])
        moveArr.push([r1,c1]);

        moveCounter++;
      }
      return;
    }   
  }

  
  if(r1>r2&&c1<c2){//UR
    destDirection="moveUR";
  }
  else if(r1<r2&&c1<c2){//DR
    destDirection="moveDR";
  }
  else if(r1<r2&&c1>c2){//DL
    destDirection="moveDL";
  }
  else{//UL
    destDirection="moveUL";
  }
  while(r1!=r2&&c1!=c2){
  //  console.log(" in while ")
    r1+=moves[destDirection][0];
    c1+=moves[destDirection][1];
    moveCounter++;
    // console.log(r1,",",c1," ",moveCounter)
    mat[r1][c1]=".";
    moveArr.push([r1,c1]);
  }
  f(r1,c1,r2,c2);
}
f(4,3,3,0);
//printing the output
mat.forEach(item=>{
  console.log(item.join("  "));
})
console.log();
moveArr.forEach(item=>{
  console.log(item.join());
})
console.log();
console.log(moveCounter);