// DOM que verifica o id do item para criação da página
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const reviewId = parseInt(params.get("id"));
    const review = reviews.find(item => item.id === reviewId);

    if (review) {
        const detailsContainer = document.getElementById("review-details");
        
        //Criação das páginas "dedicadas" para cada análise com innerHTML, há uma verificação
        //para saber se a análise possui trailerUrl ou musicUrl para criação dos container de música OU video
        detailsContainer.innerHTML = `
        <title>${review.title} - Reviews</title>
        <div class="content-container">
            <h1 class="review-title">${review.title}</h1>
            <h2 class="review-description">${review.description}</h1>
            <div class="average-rating">
                Média de Avaliação: ${calculateAverage(review.ratings)} ⭐
            </div>
            <div class="review-wallpaper">
                <img src="${review.wallpaperUrl}" alt="${review.title}">
            </div>
            <p class="review-description">${review.longDescription}</p>
           
            ${review.trailerUrl ? `
            <div class="video-container">
                <iframe src="${review.trailerUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>` : ""}

            ${review.musicUrl ? `
            <div class="music-container">
                <iframe src="${review.musicUrl}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>` : ""}
            
            <div class="stars-container">
                <h1>Deixe a sua Avaliação!</h1>
                <div class="stars" id="interactive-stars"></div>
            </div>

            <div class="back-button-container">
                <button id="back-button" onclick="history.back()">Voltar</button>
            </div>
        </div>
        `;
        //Chama a função de estrelas interativas        
        generateStars(calculateAverage(review.ratings), true);
    } else {
        detailsContainer.innerHTML = "<p>Review não encontrado.</p>";
    }
});
