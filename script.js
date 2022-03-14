function verificar() {
    const notaPrimeiroBimestre = document.getElementById('input_nota_primeiro').value
    const notaDoSegundoBimestre = document.getElementById('input_nota_segundo').value
    const notaDoTerceiroBimestre = document.getElementById('input_nota_terceiro').value
    const notaDoQuartoBimestre = document.getElementById('input_nota_quarto').value
    const aluno = document.getElementById('input_nome').value;

    const primeiroConvertido = parseInt(notaPrimeiroBimestre);
    const segundoConvertido = parseInt(notaDoSegundoBimestre);
    const terceiroConvertido = parseInt(notaDoTerceiroBimestre);
    const quartoConvertido = parseInt(notaDoQuartoBimestre);

    const somaNota = (primeiroConvertido + segundoConvertido + terceiroConvertido + quartoConvertido)
    const notaFinal = somaNota / 4
    console.log(notaFinal)

    if (notaFinal >= 6) {
        console.log('Aprovado')
        const aprResultado = document.getElementById('media')
        const resultado = `Parabens ${aluno} voce foi Aprovado(a)!!`
        aprResultado.innerHTML = resultado
    } else {
        console.log('Reprovado')
        const aprResultado = document.getElementById('reprovado')
        const resultado = `Infelizmente ${aluno} voce foi Reprovado(a)!!`
        aprResultado.innerHTML = resultado
    }
}
