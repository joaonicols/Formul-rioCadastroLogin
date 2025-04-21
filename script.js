function alternarFormulario() {
    const formularioLogin = document.querySelector ('.formulario-login');
    const formularioCadastro = document.querySelector('.formulario-cadastro');

    if (formularioLogin.classList.contains('ativo')) {
        
        formularioLogin.classList.remove('ativo');
        formularioCadastro.classList.add('ativo');
    } else {

        formularioCadastro.classList.remove('ativo');
        formularioLogin.classList.add('ativo');
    }
}