// Função para calcular a média das avaliações sem arredondamento excessivo
function calculateAverage(ratings) {
    if (ratings.length === 0) return 0; // Retorna 0 para casos sem avaliações
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    return Math.round((sum / ratings.length) * 10) / 10; // Arredonda para 1 casa decimal
}


// Função gerar as estrelas interativas
function generateStars(rating, isEditable = false) {
    const starsContainer = document.getElementById('interactive-stars');
    starsContainer.innerHTML = ''; // Limpa as estrelas existentes

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.innerHTML = '★';

        // As estrelas não devem ser 'rated' inicialmente
        // Apenas fica como rated se isEditable for verdadeiro e houver interação
        if (isEditable) {
            star.addEventListener('mouseover', () => hoverRating(i));
            star.addEventListener('mouseout', removeHover);
            star.addEventListener('click', () => setRating(i));
        }

        starsContainer.appendChild(star);
    }
}


//Função para atualizar as avaliações das estrelas
function setRating(rating) {
    // Identifica o ID da avaliação atual a partir da URL
    const reviewId = parseInt(new URLSearchParams(window.location.search).get("id"));
    
    // Localiza a avaliação correspondente na constante reviews
    const review = reviews.find(item => item.id === reviewId);
    
    if (review) {
        // Adiciona o novo rating à lista de avaliações - não está funcional, persistência dos dados não funcionou.
        review.ratings.push(rating);
        
        // Calcula a nova média
        const average = calculateAverage(review.ratings);

        // Atualiza a média de avaliação no DOM
        document.querySelector('.average-rating').innerText = `Média de Avaliação: ${average} ⭐`;

    }

    // Atualiza a exibição visual das estrelas com o novo rating
    const stars = document.querySelectorAll('#interactive-stars .star');
    stars.forEach((star, index) => {
        star.classList.toggle('rated', index < rating);
    });
}


//Funções ao passar ao cursor do mouse
function hoverRating(rating) {
    const stars = document.querySelectorAll('#interactive-stars .star');
    stars.forEach((star, index) => {
        star.classList.toggle('hover', index < rating);
    });
}

function removeHover() {
    const stars = document.querySelectorAll('#interactive-stars .star');
    stars.forEach(star => star.classList.remove('hover'));
}
