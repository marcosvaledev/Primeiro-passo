let namePersonAtack = prompt('nome do personagem')
let powerAtack = Number(prompt('poder de ataque?'))

let namePersonDefensor = prompt('nome do personagem defensor?')
let defensorHp = Number(prompt('pontos de vida?'))
let powerDefensor = Number(prompt('qual o poder de defesa'))
let defensorShield = prompt('possui escudo? sim/nao?')

let danoCausado = 0

if(powerAtack > powerDefensor && defensorShield === 'nao'){
    danoCausado = powerAtack - powerDefensor
}else if(powerAtack > powerDefensor && defensorShield === 'sim'){
    danoCausado = (powerAtack - powerDefensor) / 2
}if(powerAtack <= powerDefensor){
    danoCausado = 0
}

defensorHp -= danoCausado

alert(
    




)
