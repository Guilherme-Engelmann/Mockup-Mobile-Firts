function validarFormulario(){

    const nome = document.getElementById('nome_maquinista').value.trim();
    console.log(nome);

    const cpf = document.getElementById('cpf_maquinista').value.trim();
    console.log(cpf);

    const idade = parseInt(document.getElementById('idade_maquinista').value, 10);
    console.log(idade); 

    const experiencia = parseInt(document.getElementById('experiencia_maquinista').value, 10);
    console.log(experiencia); 

    if(!nome){
        alert('Por favor, preencha seu nome ');
        return;
    } else{
        console.log(nome);
    }

    if(!cpf || cpf.length !== 11 || isNaN(cpf)){
        alert('Por favor, insira um CPF valido com 11 digitos'); 
        return;
    }else{
        console.log(cpf);
    }

    if(isNaN(idade) || idade < 30){
        alert('A idade deve ser um numero maior que 30!');
        return;
    }else{
        console.log(idade);
    }

    if(isNaN(experiencia) || experiencia < 3){
        alert('Os anos de experiencia tem que ser maior que tres ou igual');
        return;
    }else{
        console.log(experiencia);
    }

}