const input = document.querySelector('.login__input'); // vai capturar oq foi digitado no input
const button = document.querySelector('.login__button'); // vai capturar o click do botão
const form = document.querySelector('.login-form');

// Essa função valida o input e gerencia regras
const validateInput = ({ target }) => { // aqui temos uma desestruturação do evento, capturando somento target
    if (target.value.length > 2) {
        button.removeAttribute('disabled')
        return;
    }
    button.setAttribute('disabled', '')
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html'
}


// Aqui vamos ficar escutando o evendo de input, e sempre que ele ocorrer, vai ser chamada a função ValidaInput
input.addEventListener('input', validateInput)
form.addEventListener('submit', handleSubmit)

