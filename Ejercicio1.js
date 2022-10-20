document.addEventListener("DOMContentLoaded",e =>{
  numeroMayor()
})

const numeroMayor = () =>{
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")


const submit = document.getElementById("submit")

let nu1
let nu2

submit.addEventListener("click", e =>{
      e.preventDefault()

      nu1 = Number(n1.value)
      nu2 = Number(n2.value)

      if(nu1 == '' || nu2 == '') return alert("llene los campos")
      if(nu1 == nu2) return alert("Son iguales")

      if(nu1 > nu2){
          tarjeta(nu1)
      }
      if(nu2 > nu1){
          tarjeta(nu2)
      }

})

}
const tarjeta = (numero) =>{  
      const tarjeta = document.createElement("p")
      tarjeta.textContent = `El numero mayor es ${numero}`
      tarjeta.classList.add("tarjeta")
      document.body.appendChild(tarjeta)

      setTimeout(()=>{
        document.body.removeChild(tarjeta)
      },2000)

    }
