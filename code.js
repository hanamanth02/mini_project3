function Click() {
    var ran1=Math.floor(Math.random()*6)+1
    var ranimg1="images/dice"+ran1+".png"
    var img1=document.getElementById("img1")
    img1.setAttribute("src",ranimg1)

    var ran2=Math.floor(Math.random()*6)+1
    var ranimg2="images/dice"+ran2+".png"
    var img2=document.getElementById("img2")
    img2.setAttribute("src",ranimg2)

    var result=document.getElementById("res")
    if(ran1>ran2)
    result.innerHTML="Player 1 is won"
    else if(ran1<ran2)
    result.innerHTML="Player 2 is won"
    else
    result.innerHTML="Draw"
}

var rlbtn=document.getElementById("rlbtn")
rlbtn.addEventListener("click",Click)