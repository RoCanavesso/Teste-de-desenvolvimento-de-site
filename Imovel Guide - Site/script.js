function verNum1(){
    alert("(99) 99999-9999");
}

function verNum2(){
    alert("(99) 99999-9999");
}

function enviarAssunto(){
    alert("Assunto enviado!");
}

const dialogAbrir = document.getElementById('botao_modal_abrir');
const dialogFechar = document.getElementById('botao_modal_fechar');
const dialog1 = document.getElementById('dialog_1');

dialogAbrir.addEventListener('click', () => {
    dialog1.showModal();
});

dialogFechar.addEventListener('click', () => {
    dialog1.close();
});

function calcular_regra_de_3() {
    var valor1 = parseFloat(document.getElementById("regra_1").value);
    var valor2 = parseFloat(document.getElementById("regra_2").value);
    var valor3 = parseFloat(document.getElementById("regra_3").value);

    var resultado = (valor3 * valor2) / valor1;
    document.getElementById("regra_4").value = resultado;
}


// codigo do html2canvas
// aparentemente a imagem nao esta sendo baixada por um erro no DOM, pelo o que entendi seria um erro de imagem de domínio diferente,
// como eu peguei a imagem do google, ele considera violação das políticas de segurança do navegador
document.getElementById('botao_download').addEventListener('click', function() {
    html2canvas(document.querySelector("#flex_5")).then(canvas => {
        canvas.toBlob(function(blob) {
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = 'minha-imagem.png';
            a.click();
            window.URL.revokeObjectURL(url);
        });
    });
});

const input_cpf = document.querySelector('#digite_cpf')

input_cpf.addEventListener('keypress', () =>{
    let inputlength = input_cpf.value.length;

    if(inputlength == 3){
        input_cpf.value += '.';
    }

    else if(inputlength == 7){
        input_cpf.value += '.';
    }

    else if(inputlength == 11){
        input_cpf.value += '-'
    }
});

const input_telefone = document.querySelector('#digite_telefone')

input_telefone.addEventListener('keypress', () => {
    let inputlength = input_telefone.value.length;

    if(inputlength == 0){
        input_telefone.value += '(';
    }

    else if(inputlength == 3){
        input_telefone.value += ') ';
    }

    else if(inputlength == 10){
        input_telefone.value += '-';
    }
});

function clicarHamburger(){
    if(hamburger_lista.style.display == "block"){
        hamburger_lista.style.display = "none"
    }

    else{
        hamburger_lista.style.display = "block"
    }
}