
function rotate(map, rotations, rows, columns) {
    //console.log(map, rotations, rows, columns)
    var factor = 0;
    var row_len = rows - 1;
    var col_len = columns - 1;
    var row_start = 0;
    var row_end = rows - 1;
    var col_start = 0;
    var col_end = columns - 1;
    while(row_len>=1 && col_len>=1) {
        var loop_rotation = 2 * (rows - ((factor*2) + 1)) + 2* (columns - ((factor*2) + 1));
        var total_rotations = rotations % loop_rotation;
        
        for(var r = 0; r < total_rotations; r++) {
            var loop_start = map[row_start][col_start];
            
            // Loop For Top Row
            for(var i=row_start;i<col_end;i++) {
                map[row_start][i] = map[row_start][i+1];
            }
            
            // Loop for Right Column
            for(var i=col_start; i<row_end;i++) {
                map[i][col_end] = map[i+1][col_end];
            }
            
            // Loop for Bottom Row
            for(var i=col_end;i>col_start;i--) {
                map[row_end][i] = map[row_end][i-1];
            }
            
            // Loop for Left Column
            for(var i=row_end; i>row_start;i--) {
                if(i!=row_start + 1)
                    map[i][col_start] = map[i-1][col_start];
                else 
                    map[i][col_start] = loop_start;
            }
            
            
        }
        factor +=1;
        row_start +=1;
        col_start +=1;
        row_end -=1;
        col_end -=1;
        row_len -=2;
        col_len -=2;
        
    }
    for(var i=0;i<rows;i++) {
        var str = "";
        for(var j=0;j<columns;j++) {
            if(j===columns-1)
                str += map[i][j]
            else 
                str += map[i][j] + ' ';
        }
        console.log(str);
    }   
}
rotate([ [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ] ] ,'1', '4' ,'4')



