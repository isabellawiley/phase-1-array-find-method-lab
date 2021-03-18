
function superbowlWin(record){
    const game = record.find(( {result}) => result === "W")
    if (game){
        let win = record.indexOf(game)
        let num = record[win]["year"]
        return num
    }
    else{
        return game
    }
    
}