const idade = prompt('informe a sua idade')

if (idade >= 18) {
    alert('voce é maior de idade')
}else if (idade > 12){
    alert('voce é menor de idade')
}else if(idade > 4){
    alert('voce é criança')
}

const resultado = (6 === 6) ? "verdadeiro" : "falso" // uma forma de escrever if e else em apenas uma linha, pra deixar "clean code"