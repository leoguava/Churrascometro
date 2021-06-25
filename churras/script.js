//Carne = 400g por pessoa +6 horas = 650g
//Cerveja = 1200ml por pessoa que bebe + de 6 horas = 2000ml
//Refrigerante/agua - 1000ml por pessoa + de 6 horas 1500ml
//crianças =  0.5 do adulto


let inputAdulto = document.getElementById('adultos')
let inputCrianca = document.getElementById('criança')
let inputDuracao = document.getElementById('duracao')

let inputCarne = document.getElementById('carne')
let inputCerveja = document.getElementById('cerveja')
let inputRefri = document.getElementById("refri")
   
   function churrasN(){
    let cerveja = 1200 * inputAdulto.value
    let carne = 400*(inputAdulto.value)+(inputCrianca.value)*200
    let refri = 1000*(inputAdulto.value)+(inputCrianca.value)*500   
    
    inputCarne.innerText = `Você precisará de:
    *Carne: ${carne/1000}kg de carne`
    inputRefri.innerText = `*Refrigerante: ${refri/1000}L de refrigerante`
    inputCerveja.innerText = `*Cerveja:   ${cerveja/1000}L de cerveja`
}

function churras6(){
    let cerveja = 2000 *inputAdulto.value
    let carne = 650*(inputAdulto.value)+(inputCrianca.value)*325
    let refri = 1500*(inputAdulto.value) + (inputCrianca.value)*750
    inputCarne.innerText = `Você precisará de:
    *Carne: ${carne/1000}KG de carne`
    inputRefri.innerText = `*Refrigerante: ${refri/1000}L de refrigerante`
    inputCerveja.innerText = `*Cerveja: ${cerveja/1000}L de cerveja`
}

function calcular(){
    if(inputDuracao.value<=6){
        churrasN()
    }else if(inputDuracao.value>6){
        churras6()
    }

}




