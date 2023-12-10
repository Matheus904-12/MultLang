const translations = {
    'loginTitle': {
        'pt-br': 'Entrar',
        // Adicione outras traduções conforme necessário
    },
    'emailPlaceholder': {
        'pt-br': 'Seu Email',
        // Adicione outras traduções conforme necessário
    },
    'passwordPlaceholder': {
        'pt-br': 'Sua Senha',
        // Adicione outras traduções conforme necessário
    },
    'loginButton': {
        'pt-br': 'Entrar',
        // Adicione outras traduções conforme necessário
    },
    'forgotPassword': {
        'pt-br': 'Esqueceu sua senha?',
        // Adicione outras traduções conforme necessário
    },
    'notRegistered': {
        'pt-br': 'Não é Cadastrado?',
        // Adicione outras traduções conforme necessário
    },
    'registerTitle': {
        'pt-br': 'Cadastre-se',
        // Adicione outras traduções conforme necessário
    },
    'namePlaceholder': {
        'pt-br': 'Seu Nome Completo',
        // Adicione outras traduções conforme necessário
    },
    'registerButton': {
        'pt-br': 'Cadastrar',
        // Adicione outras traduções conforme necessário
    },
    'cancelButton': {
        'pt-br': 'Cancelar',
        
        // Adicione outras traduções conforme necessário
    },
    'backButton': {
        'pt-br': 'Voltar',
        // Adicione outras traduções conforme necessário
    },
};

function translate(id, lang) {
    const element = document.getElementById(id);
    if (element && translations[id] && translations[id][lang]) {
        element.innerText = translations[id][lang];
    }
}

// Exemplo de uso
// Chame translate('loginTitle', 'pt-br') para traduzir o título de login para português