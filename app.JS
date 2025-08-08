let arrayContato = []


$(function(){
    console.log($("#adicionar"))


    $("#adicionar").on("click", function(){
        let contato = $("#nomeContato").val().trim()
        let exibirContato = $("#exibeContatos")
    
        if(contato != ""){
            arrayContato.push(contato)
            $("#nomeContato").val("")
            var $botao = $('<button>', {
                text: "X",
                click: function(){
                  $("li").parent().remove()  
                }
            })
            $("#exibeContatos").append(`<li>${contato}</li>`).append($botao)


        } else{
            $("#exibeContatos").html("<p>Informe um Contato<p>")
        }
    })

    $("#exibeContatos").on("click", "li", function(){
        $(this).toggleClass("destaque") 
    })
})
