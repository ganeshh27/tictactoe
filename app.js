    ctr = 0
    chek_ar = []
    matrix_size = 9;
    winning_combo = [[0,4,8],[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]];
    playerOneArr = [];
    playerTwoArr = [];
    
    
    function setval(id1) {
        
        x = document.getElementById(id1)
        if (ctr%2==0 && !chek_ar.includes(id1)){
            x.value = 'X'
            ctr = ctr + 1
            playerOneArr.push(Number(id1)-1);
        }
        else{
            if (ctr%2==1 && !chek_ar.includes(id1)){
            x.value='O'
            ctr = ctr + 1
            playerTwoArr.push(Number(id1)-1);
        }}
        chek_ar.push(id1)
        
        function checkall(players,id){  
            for (var i = 0;i < 8;i++){
                flag = 0
                for (var j =0;j<3;j++){
                
                if (! players.includes(winning_combo[i][j])){

                        flag = 1
                }}
                if (flag == 0){
                     
                     b = document.getElementById("result")
                     b.value = "player " + id + " is the winner"
                     b.style.visibility = "visible"
                     
                     for (var i=1;i<=9;i++){
                        x = document.getElementById(i)
                        x.disabled = true
                     }
                     b.disabled =true
                     //window.location.reload();
                }
                }
                if (players.length == 5){
                    b = document.getElementById("result")
                    b.value = "Match Drawn"
                    b.style.visibility = "visible"

                    setInterval(function() {
                        b.style.opacity = (b.style.opacity == 0 ? 1 : 0);
                    }, 1000); 
                    
                    for (var i=1;i<=9;i++){
                       x = document.getElementById(i)
                       x.disabled = true
                    }
                    b.disabled =true

                }

            }
    
        checkall(playerOneArr,1)
        checkall(playerTwoArr,2)
    }
    
 