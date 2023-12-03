const form = document.getElementById("form-deposito");
const nomePessoa = document.getElementById('nomeBeneficiario');
let formEValido = false;

function validaNome (NomeCompleto)
{
    const nomePessoaArray = NomeCompleto.split (' ');
    return nomePessoaArray.length >= 2;
}
form.addEventListener('submit', function(e) {
    
    e.preventDefault();
    
    const conta = document.getElementById('numeroConta');
    const valorDeposito =  document.getElementById('valorDeposito');
    const mensagem = `Depósito de: <b>${valorDeposito.value}</b> feito para o cliente: <b> ${nomePessoa.value}</b> - conta: <b>${conta.value}</b>`; 
    
    formEValido = validaNome(nomePessoa.value)
if (formEValido) {
    const containerMensagem =  document.querySelector('.mensagem-sucesso');
    containerMensagem.innerHTML = mensagem;
    containerMensagem.style.display = 'block';

    nomePessoa.value = '';
    conta.value = '';
    valorDeposito.value = '';
    descrica.value = '';
}
else {
    nomePessoa.style.border = '1px solid red';
    document.querySelector('.erro-nome').style.display='block';
}
})
nomePessoa.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value)

    if (!formEValido) {
    nomePessoa.classList.add('error');
    document.querySelector('.erro-nome').style.display='block';
    } 
    else {
        nomePessoa.classList.remove('error');
    document.querySelector('erro-nome').style.display='none';
    }
})
