const botoes = document . queryselctoA(`"botao"`)

for(let botao = 0; botao < 4; botao++){
    botoes [botao].onclick =function(){
        botoes[botao].classlist.add("ativo")
    }
}