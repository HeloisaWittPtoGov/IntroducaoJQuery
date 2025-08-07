let arrayContato = []

$("#adicionar").on("click", function(){
    let contato = $("#nomeContato").val().trim()
    let exibirContato = $("#exibeContatos")

    if(contato != ""){
        arrayContato.push(contato)
        $("#nomeContato").val("")
        for(let i = 0; i < arrayContato.length; i ++){
           $("#exibeContatos").append(`<li>${arrayContato[i]}</li>`)
        }
}

})