import { clienteService } from '../js/cliente-service.js'

const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  
  try {
    const email = evento.target.querySelector('[data-email]').value
    const psw = evento.target.querySelector('[data-psw]').value
    const pswr = evento.target.querySelector('[data-pswr]').value

    if (email.length > 0 && psw.length > 0 && pswr.length > 0){
      if(psw === pswr){
        // if(email.indexOf ) implementar usuario já existente
        
        await clienteService.criaCliente(email, psw)
        window.location.href = '../cadastro_concluido.html'
      } else {
        throw new Error('as senhas não conferem')
      }
    } else {
      throw new Error('preencha todos os campos')
    }
  }
  catch (erro) {
    console.log(erro)
    window.location.href = "../erro.html"
  }
})