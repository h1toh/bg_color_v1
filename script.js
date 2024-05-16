let azul = document.getElementById("azul")
        let amarelo = document.getElementById("amarelo")
        let vermelho= document.getElementById("vermelho")
        let verde = document.getElementById("verde")
        let branco = document.getElementById("branco")

        azul.addEventListener("click", ()=>{
            document.body.style.backgroundColor = "blue"
        })
        amarelo.addEventListener("click", ()=>{
            document.body.style.backgroundColor = "yellow"
        })
        vermelho.addEventListener("click", ()=>{
            document.body.style.backgroundColor = "red"
        })
        verde.addEventListener("click", ()=>{
            document.body.style.backgroundColor = "green"
        })
        branco.addEventListener("click", ()=>{
            document.body.style.backgroundColor = "white"
        })
        preto.addEventListener("click", ()=>{
            document.body.style.backgroundColor = "black"
        })