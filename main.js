let attemps = 5
document.querySelector(".click").onclick = function(){
 attemps = attemps - 1
    if (attemps == 0){
        document.querySelector(".click").disabled = true
        alert("Вы проиграли")
    }
}
