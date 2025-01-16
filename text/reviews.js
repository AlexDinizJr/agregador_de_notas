// Função para exibir análises de uma categoria específica
function displayCategoryReviews(category) {
    const gridContainer = document.getElementById("category-reviews");
    gridContainer.innerHTML = "";  // Limpa o container antes de preencher

    // Filtra e exibe apenas as análises da categoria especificada
    const filteredReviews = reviews.filter(review => review.category === category);
    
    filteredReviews.forEach(review => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        // Cria um contêiner flexível para a imagem e descrição longa
        const contentWrapper = document.createElement("div");
        contentWrapper.classList.add("content-wrapper");

        // Cria o link para a página dedicada
        const link = document.createElement("a");
        link.href = `detalhes.html?id=${review.id}`; // Link para a página dedicada
        link.classList.add("review-link");  // Pode adicionar uma classe para estilizar o link

        // Cria a imagem
        const image = document.createElement("img");
        image.src = review.imageUrl;
        image.alt = review.title;
        image.classList.add("review-image");

        // Cria a descrição curta
        const shortDescription = document.createElement("div");
        shortDescription.classList.add("short-description");

        const title = document.createElement("h4");
        title.innerText = review.title;

        const description = document.createElement("p");
        description.innerText = review.description;

        shortDescription.appendChild(title);
        shortDescription.appendChild(description);

        // Cria a descrição longa
        const longDescriptionContainer = document.createElement("div");
        longDescriptionContainer.classList.add("long-description");

        const longDescription = document.createElement("h3");
        longDescription.innerText = review.longDescription || "Sem descrição longa";
        
        // Exibe a média de avaliação
        const averageRating = calculateAverage(review.ratings);

        const ratingText = document.createElement("p");
        ratingText.classList.add("average-rating");
        ratingText.innerText = `Média de Avaliação: ${averageRating} ⭐`;

        // Cria o container de estrelas para interação
        const starsContainer = document.createElement("div");
        starsContainer.classList.add("stars");

        // Cria o container com detalhes da review
        longDescriptionContainer.appendChild(ratingText);
        longDescriptionContainer.appendChild(starsContainer);

        // Adiciona a imagem e a descrição curta ao contentWrapper
        contentWrapper.appendChild(image);
        contentWrapper.appendChild(shortDescription);
        contentWrapper.appendChild(longDescriptionContainer);

        // Adiciona o contentWrapper ao gridItem
        gridItem.appendChild(contentWrapper);
        gridContainer.appendChild(gridItem);

        // Adiciona o contentWrapper ao link
        link.appendChild(contentWrapper);

        // Adiciona o link ao gridItem
        gridItem.appendChild(link);
        gridContainer.appendChild(gridItem);
        
        // Renderiza as estrelas
        renderStars(averageRating, gridItem);
    });
}


// Função para carregar as análises mais populares
function loadTrendingReviews() {
    const trendingContainer = document.getElementById("trending-reviews");
    trendingContainer.innerHTML = ""; // Limpa o container

    // Ordena as análises pela média das avaliações em ordem decrescente
    const trendingReviews = reviews
        .sort((a, b) => calculateAverage(b.ratings) - calculateAverage(a.ratings))
        .slice(0, 3); // Seleciona as 3 mais bem avaliadas

    // Renderiza cada análise em destaque
    trendingReviews.forEach(review => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        // Cria o link para a página dedicada
        const link = document.createElement("a");
        link.href = `detalhes.html?id=${review.id}`; // Link para a página dedicada
        link.classList.add("review-link");  // Pode adicionar uma classe para estilizar o link

        // Cria a imagem do review
        const image = document.createElement("img");
        image.src = review.imageUrl;
        image.alt = review.title;
        image.classList.add("review-image");

        // Cria o título da análise
        const title = document.createElement("h4");
        title.innerText = review.title;

        // Cria a descrição da análise
        const description = document.createElement("p");
        description.innerText = review.description;

        // Calcula a média das avaliações e cria o texto para exibição
        const averageRating = calculateAverage(review.ratings);
        const ratingText = document.createElement("p");
        ratingText.classList.add("average-rating");
        ratingText.innerText = `Média de Avaliação: ${averageRating} ⭐`;

        // Cria o container de estrelas para a análise
        const starsContainer = document.createElement("div");
        starsContainer.classList.add("stars");

        // Adiciona a imagem, título, descrição, avaliação e estrelas ao link
        link.appendChild(image);
        link.appendChild(title);
        link.appendChild(description);
        link.appendChild(ratingText);
        link.appendChild(starsContainer);

        // Adiciona o link (que contém todo o conteúdo do grid) ao item do grid
        gridItem.appendChild(link);

        // Adiciona o item do grid ao container de análises
        trendingContainer.appendChild(gridItem);

        // Renderiza as estrelas com base na avaliação média
        renderStars(averageRating, gridItem);
    });
}



