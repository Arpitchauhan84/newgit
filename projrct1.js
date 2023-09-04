
    let change=document.querySelectorAll(".main")
    let body=document.querySelector("body")

    change.forEach(function(change){
        change.addEventListener("click",function(e){
            console.log(e);
            console.log(e.target)
            if(e.target.id==="blue"){
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id==="red"){
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id==="green"){
                body.style.backgroundColor=e.target.id;
            }
            if(e.target.id==="black"){
                body.style.backgroundColor=e.target.id;
            }
        })
        console.log()
    },false)