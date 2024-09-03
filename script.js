let meter = prompt(`Digite um valor em metros (Ex: 2.5)`)
let option = prompt(`Agora, selecione uma opção abaixo para converter, entre:\n1 - milímetro (mm)\n2 - centrímetro (cm)\n3 - decímetro (dm) \n4 - decâmetro (dam) \n5 - hectômetro (hm) \n6 - quilômetro (km)`)
switch (option) {
  case (`1`):
     alert(`seu valor em milímetros é: ${meter*1000} `)
    break
  case (`2`):
    alert(`seu valor em centímetros é: ${meter*100} `)
break
  case ('3'):
alert(`seu valor em decímetros é: ${meter*10} `)
break
  case (`4`):
alert(`seu valor em decâmetros é: ${meter/10} `)
break
  case (`5`):
alert(`seu valor em hectômetros é: ${meter/100} `)
break
  case (`6`):
alert(`seu valor em quilômetros é: ${meter/1000} `)
break 
  default:
    alert(`Opção inválida!`)
}
