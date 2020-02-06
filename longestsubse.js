function longCommon(A, B) {
    var dp=[], i, prev, cur;
    for (i=0; i<=A.length; i++) {
        dp[i] = [];
    }
    for (j=1; j<=B.length; j++) {
        prev = dp[0];
        
        for (i=1; i<=A.length; i++) {
            cur = dp[i].slice(0);
            //A[i] = A[i]==B[j] ? (prev+1) : Math.max(A[i], cur);
            if (A[i-1] == B[j-1]) {
                dp[i] = prev.concat([A[i-1]]);
            } else {
                dp[i] = dp[i-1].length > cur.length ? dp[i-1].slice(0) : cur.slice(0);
            }
            prev = cur.slice(0);
        }
    }
    return dp[A.length];
}
longCommon('AGGTAB', 'GXTXATB')



function getLcs(str1,str2){
    let array = [];
    str1 = str1.split('');
    str2 = str2.split('')
    for(let i =0; i < str2.length; i++){
        if(str1.includes(str2[i])){
          array.push(str2[i])
      }
    }
    // for()
    return array.join('')
  }
  let str1='AGGTkAB';
  let str2 = 'GXTXAYB';
  //getLcs(str1,str2) // output = GTAB