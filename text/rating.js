// Função para calcular a média das avaliações
function calculateAverage(ratings) {
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    const average = sum / ratings.length;
    return Math.round(average * 10) / 10; // Arredonda para 1 casa decimal
}


// Função para renderizar o sistema de estrelas dos grids
function renderStars(rating, element) {
    const starsContainer = element.querySelector('.stars');
    starsContainer.innerHTML = ''; // Limpa o container antes de renderizar

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.className = 'star'; // Define a classe base para a estrela
        star.innerHTML = '★';

        // Verifica se a estrela deve ser preenchida com a cor dourada
        if (i <= Math.round(rating)) {
            star.classList.add('rated'); // Adiciona a classe 'rated' para estrelas avaliadas
        }

        starsContainer.appendChild(star);
    }
}


