clicks = 0

cpcI1Cost = 20
cpcI2Cost = 75

cpcI1Amount = 0

cpc = 1
cps = 0

function clickMe(){
    clicks = clicks + cpc
    console.log(clicks)
    document.getElementById("clicks").innerHTML = "Clicks: "+clicks
}

function cpcIncrease1(){
    if(clicks > (cpcI1Cost - 1)){
        clicks = clicks - cpcI1Cost
        cpc = cpc + 1
        cpcI1Cost = Math.floor(cpcI1Cost * 1.75)
        cpcI1Amount = cpcI1Amount + 1
        document.getElementById("costA1").innerHTML = "Cost: "+cpcI1Cost+" clicks"
        document.getElementById("amountA1").innerHTML = cpcI1Amount
        document.getElementById("clicks").innerHTML = "Clicks: "+clicks
    }
}

function cpcIncrease2(){
    if(clicks > (cpcI2Cost - 1)){
        clicks = clicks - cpcI2Cost
        cpc = cpc + 3
        cpcI2Cost = Math.floor(cpcI2Cost * 1.75)
        document.getElementById("costA2").innerHTML = "Cost: "+cpcI2Cost+" clicks"
        document.getElementById("clicks").innerHTML = "Clicks: "+clicks
    }
}

function openAdmin(){
    window.location = "adminCommands.html"
}


