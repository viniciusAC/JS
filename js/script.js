/* BEM VINDO! 
   O desafio demorou mas saiu rápido
   Antes de tudo, leia todas as dicas e obersações no link do desafio
   ...
   *-* Todo conteudo dentro de $(document).ready( function() { ... } ); será execultado assim que carregar a página
*/

$(document).ready(function() {
    
    $("#alerta").draggable();
    $('#contador').slideToggle();
    contador();

    //Inserir um comando para deixar a div #alerta movel  (Dica: função da jqueryui)
    //chamar a funcão chamada "contador"
    //Fazer a alerta aparecer depois de 5 segundos, chamando ã função toggleAlert

    $("#novidadesform [type='submit']").click(function(e) {
        e.preventDefault();
        var email = document.getElementById('email').value;
        if (email == '') {
            toastr.error('Preencha um email!', 'Error!');
        }else{
            $.ajax({
                url : 'http://51.254.204.44/ti/enviar_email.php',
                type : 'post',
                data : {'meuemail': email},
                dataType: 'JSON',

                success: function(retorno){
                    console.log(retorno);
                    toastr.success('E-mail enviado com sucesso');
                     $( '.resultado' ).html( email+' foi salvo em nossa lista de novidades =)');
                     document.getElementById('email').value="";
                     cont(); 
                },
                error: function(erro){
                    console.log(erro.responseText);
                    toastr.error(erro); 
                }
            })

        }
        //criar uma variavel e pegar o conteudo digitado na input
        //verificar se o campo não está vazio com if e else

        //se for vazio execultar o comando abaixo
        //toastr.error('Preencha um email!', 'Error!');

        //se não for vazio enviar uma requisição com -requisição AJAX- do tipo POST para http://51.254.204.44/ti/enviar_email.php 
        // -- passando o paramentro "meuemail" e o dataType JSON

        //SE OCORRER TUDO CERTO COM A REQUISIÇAO: 1° exibir um toastr.sucess com a mensagem  | 2° 
        // 2° colocar um texto na div  de class resultado. "*emaildigitado* foi salvo em nossa lista de novidades =)"
        //limpar input
        //fechar a alerta depois de 2 segundos

        //SE não ocorrer tudo certo a alerta ñ deve fechar. Exibir um toastr.error com a mensagem do erro retornada pelo servidor



    });
});

/* NÃO MEXER 
   Se tiver visível, após executar a função, a div será oculta e vice-versa
*/
function toggleAlert() {
    $('#alerta').slideToggle();
}

//Contador inicia em 5
var i = 6;

function contador() {

	var interval = setInterval(function() {
   		i--;
    	// Display 'counter' wherever you want to display it.
        $('#contador').text('Alerta aparecendo em: '+i);
        
    	if (i == 0) {
    	    // Display a login box
    	    clearInterval(interval);
    	    toggleAlert();
            $('#contador').slideToggle();
    	}
        if (i<=3) {
            document.getElementById("contador").style.color="red";
        }

	}, 1000);
    
    //Ocultar a div #contador qnd o cronometro ser menor ou igual a ZERO

    //Mudar a cor do texto da div #contador qnd o cronometro ser menor ou igual a TRES

    //Sinalizar contador. Ex: Alerta aparecendo em: __  (usar a div #contador)

	
}

var j = 2;

function cont() {
	var intervalo = setInterval(function() {
		j--;
		if (j == 0) {
    	    // Display a login box
    	    clearInterval(intervalo);
    	    toggleAlert();
    	}
	}, 1000);
}


function funcao_bem_louca() {
  document.getElementById('alerta').style.display = 'none';
}


$(document).ready(function(){
    $('.blocos').hover(function() {
        $(this).addClass('transition');

    }, function() {
        $(this).removeClass('transition');
    });
});

$(document).ready(function(){
    $('.ver').hover(function() {
        $(this).addClass('transition');

    }, function() {
        $(this).removeClass('transition');
    });
});
