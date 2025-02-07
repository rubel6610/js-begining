const friendScore = 81;

if(friendScore >= 80){
    console.log('Go for lunch my friend')
}else{
    if(friendScore < 80 && friendScore >= 60){
        console.log('Good luck next time my friend')
    }else{
        if(friendScore < 60 && friendScore >= 40){
            console.log('Message Unseen for my friend')
        }else{
            console.log('block')
        }
        
    }
}