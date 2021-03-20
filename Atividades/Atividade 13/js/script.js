
function abrirModal(){
    document.getElementById('modal_pai').style.backgroundColor="rgba(0,0,0,0.7)";
    document.getElementById('modal').style.marginTop="60px";
    document.getElementById('modal_pai').style.zIndex="2";
}

function fecharModal(){
    document.getElementById('modal_pai').style.backgroundColor="rgba(0,0,0,0)";
    document.getElementById('modal').style.marginTop="-500px";
    document.getElementById('modal_pai').style.zIndex="1";
}

function validar(){
    if (document.getElementById('nome').value == '' && document.getElementById('telefone').value == '' && document.getElementById('email').value == '' ){
        document.getElementById('nome').style.border="solid 0.5px red";
        document.getElementById('telefone').style.border="solid 0.5px red";
        document.getElementById('email').style.border="solid 0.5px red";
        document.getElementById('aviso').innerHTML = "Preencha todos os campos!";
        document.getElementById('aviso').style.color="red";
        document.getElementById('aviso').style.fontSize="1.2em";
    }else if(document.getElementById('nome').value == ''){
        document.getElementById('nome').style.border="solid 0.5px red";
        document.getElementById('aviso').innerHTML = "Preencha todos os campos!";
        document.getElementById('aviso').style.color="red";
        document.getElementById('aviso').style.fontSize="1.2em";
    }else if(document.getElementById('telefone').value == ''){
        document.getElementById('telefone').style.border="solid 0.5px red";
        document.getElementById('aviso').innerHTML = "Preencha todos os campos!";
        document.getElementById('aviso').style.color="red";
        document.getElementById('aviso').style.fontSize="1.2em";
    }else if(document.getElementById('email').value == ''){
        document.getElementById('email').style.border="solid 0.5px red";
        document.getElementById('aviso').innerHTML = "Preencha todos os campos!";
        document.getElementById('aviso').style.color="red";
        document.getElementById('aviso').style.fontSize="1.2em";
    }else{
        document.getElementById('nome').style.border="solid 0.5px black";
        document.getElementById('telefone').style.border="solid 0.5px black";
        document.getElementById('email').style.border="solid 0.5px black";
        document.getElementById('aviso').innerHTML = "Enviado com sucesso!";
        document.getElementById('aviso').style.color="green";
        document.getElementById('aviso').style.fontSize="1.2em";
        document.getElementById('nome').value="";
        document.getElementById('telefone').value="";
        document.getElementById('email').value="";
    }
}