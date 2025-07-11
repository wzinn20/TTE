// Mensagem de boas-vindas ao carregar a página
window.addEventListener('DOMContentLoaded', function() {
    alert('Bem-vindo à TTE! Aproveite nossos cursos.');
});

// Destaque do botão do menu ao clicar
const menuButtons = document.querySelectorAll('.menu button');
menuButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        menuButtons.forEach(b => b.classList.remove('ativo'));
        this.classList.add('ativo');
    });
});

// Rolagem suave para âncoras (caso existam)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Estilo para botão ativo
const style = document.createElement('style');
style.innerHTML = `.menu button.ativo { background: #333; color: #fff; }`;
document.head.appendChild(style);
