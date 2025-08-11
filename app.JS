let arrayContato = []


$(function(){
    
    $("#adicionar").on("click", function(){
        let contato = $("#nomeContato").val().trim()
    
        if(contato != ""){
            arrayContato.push(contato)
            $("#nomeContato").val("")
            let $li = $("<li>").text(contato)
            let $botao = $('<button>', {
                text: "x",
                click: function(){
                  $li.remove()  
                }
            })
            $li.append($botao)
            $("#exibeContatos").append($li)

        } else{
            $("#aviso").html("<p>Informe um Contato!<p>")
        }
    })

    $("#exibir").on("click", function(){
        $("#exibeContatos").toggle()
    })

    $("#exibeContatos").on("click", "li", function(){
        $(this).toggleClass("destaque") 
    })

        $("#filtro").on("keyup", function(){
            var texto = $(this).val().toUpperCase();

            $("#exibeContatos li").hide()

            .filter(function(){
               return $(this).text().toUpperCase().indexOf(texto) >= 0
            })

            .show()
        })
})
