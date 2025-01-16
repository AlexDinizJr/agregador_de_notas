// Constantes para as categorias
const CATEGORIES = {
    FILMES: 'filmes',
    GAMES: 'games',
    MUSICAS: 'musicas',
};

// "Banco de Dados"
const reviews = [
    { 
        id: 1,
        title: "Avatar: The Way of Water",
        category: CATEGORIES.FILMES,
        description: "20th Century Studios",
        longDescription: "Avatar: The Way of Water leva o público de volta ao mundo mágico de Pandora, onde Jake Sully e Neytiri enfrentam desafios cada vez maiores para proteger sua família e seu lar dos ataques de uma força externa. Com visuais deslumbrantes que redefinem o uso de CGI e tecnologias de captura de movimento, a sequência expande o universo de Pandora, introduzindo novas tribos e ecossistemas subaquáticos. A narrativa explora temas profundos como pertencimento, identidade e respeito pela natureza, combinados com a luta pela sobrevivência e a harmonia entre espécies. James Cameron continua a impressionar com sua dedicação ao realismo ambiental e à complexidade emocional dos personagens.",
        imageUrl: "images/movies/2.png", 
        ratings: [5, 4, 5, 3, 4],
        trailerUrl: "https://www.youtube.com/embed/d9MyW72ELq0?si=TPSKi4OhH1hwyEgR",
        wallpaperUrl: "images/movies/avatar-wallpaper.png"
    },
    { 
        id: 2,
        title: "Avengers: Endgame", 
        category: CATEGORIES.FILMES,
        description: "Marvel Studios",
        longDescription: "Avengers: Endgame é a conclusão épica da saga do Infinito da Marvel, um marco no cinema que reúne personagens icônicos em uma batalha decisiva contra Thanos. A história aborda temas de sacrifício, redenção e esperança enquanto os Vingadores enfrentam dilemas pessoais e desafios cósmicos. O filme apresenta uma estrutura complexa de narrativa com viagens no tempo, conectando momentos de filmes anteriores e proporcionando aos fãs uma experiência emocional e nostálgica. Com cenas de ação intensas e efeitos visuais avançados, o longa não só encerra uma era, mas também celebra a união e resiliência que a franquia construiu ao longo de uma década.",
        imageUrl: "images/movies/DzAOmwbUYAAy67B.jpg", 
        ratings: [5, 5, 4, 5, 5],
        trailerUrl: "https://www.youtube.com/embed/TcMBFSGVi1c?si=jmeBGzUh968W8rGN",
        wallpaperUrl: "images/movies/avengers-wallpaper.png"
    },
    { 
        id: 3,
        title: "The Lion King", 
        category: CATEGORIES.FILMES,
        description: "Disney",
        longDescription: "O Rei Leão é uma animação clássica da Disney que conta a emocionante história de Simba, um jovem leão que passa por uma jornada de autoconhecimento e responsabilidade. A trama explora temas de perda, amadurecimento e redenção, refletindo sobre o ciclo da vida. Com uma trilha sonora icônica de Elton John e letras de Tim Rice, incluindo sucessos como 'Circle of Life' e 'Hakuna Matata', o filme se destaca por seu apelo universal. A animação também inovou com a criação de paisagens e personagens que remetem à savana africana, com um toque emocional que cativou várias gerações de espectadores.",
        imageUrl: "images/movies/images.jpeg", 
        ratings: [2, 3, 3, 4, 4],
        trailerUrl: "https://www.youtube.com/embed/vXvtBVidecc?si=gARX_cNhv8iJjGNW",
        wallpaperUrl: "images/movies/the-lion-king-wallpaper.jpg"
    },
    { 
        id: 4,
        title: "Elden Ring", 
        category: CATEGORIES.GAMES, 
        description: "FromSoftware",
        longDescription: "Elden Ring é um RPG de ação desenvolvido pela FromSoftware, que traz uma experiência envolvente em um vasto mundo aberto repleto de perigos e desafios. Em colaboração com o autor George R.R. Martin, o jogo apresenta uma narrativa rica e personagens complexos que habitam um universo sombrio. Os jogadores devem explorar terras misteriosas, enfrentar criaturas míticas e desvendar segredos antigos para restaurar o poder do anel. A jogabilidade exigente e os gráficos detalhados proporcionam uma imersão única, combinando o desafio característico da FromSoftware com um cenário expansivo e envolvente.",
        imageUrl: "images/games/Elden-Ring-Banner.webp",
        ratings: [5, 5, 5, 5, 5],
        trailerUrl: "https://www.youtube.com/embed/E3Huy2cdih0?si=32rj8_k-cDAAT1q_",
        wallpaperUrl: "images/games/elden-ring-wallpaper.jpg"
    },
    { 
        id: 5,
        title: "Numb", 
        category: CATEGORIES.MUSICAS, 
        description: "Linkin Park",
        longDescription: "Numb é uma das faixas mais emblemáticas do Linkin Park, destacando a fusão do rock com eletrônica e abordando temas como isolamento e as pressões sociais. Com vocais emotivos de Chester Bennington e uma instrumentação forte, a música fala sobre o conflito entre as expectativas dos outros e a identidade pessoal. O impacto da música e seu videoclipe contribuíram para o sucesso global da banda, ressoando com fãs ao longo dos anos e consolidando o álbum 'Meteora' como um dos mais influentes do rock dos anos 2000.",
        imageUrl: "images/musics/1.png",
        ratings: [4, 4, 5, 4, 3],
        musicUrl: "https://open.spotify.com/embed/track/2nLtzopw4rPReszdYBJU6h?utm_source=generator",
        wallpaperUrl: "images/musics/linkin-park-wallpaper.webp"
    },
    { 
        id: 6,
        title: "Super Mario Galaxy 2", 
        category: CATEGORIES.GAMES, 
        description: "Nintendo EAD",
        longDescription: "Super Mario Galaxy 2 leva o jogador a uma experiência espacial única, com mecânicas inovadoras e desafios que misturam ação e estratégia. A história simples, mas cativante, acompanha Mario em sua missão de resgatar a Princesa Peach, enfrentando vilões em planetas e cenários incríveis. Os controles precisos e a física de gravidade invertida contribuem para a jogabilidade imersiva, enquanto os gráficos e trilha sonora capturam a essência mágica da franquia, tornando-o um clássico moderno.",
        imageUrl: "images/games/31.jpg",
        ratings: [5, 5, 4, 4, 5],
        trailerUrl: "https://www.youtube.com/embed/O7steQttNTo?si=bJ_lSWDWE7ZjLfnQ",
        wallpaperUrl: "images/games/mario-galaxy-2-wallpaper.jpg"
    },
    { 
        id: 7,
        title: "God of War: Ragnarok", 
        category: CATEGORIES.GAMES, 
        description: "PlayStation Studios",
        longDescription: "God of War: Ragnarok continua a história de Kratos e seu filho Atreus na mitologia nórdica, explorando temas de destino, família e sacrifício. A jornada épica é repleta de batalhas intensas e visuais impressionantes, oferecendo uma narrativa emocionalmente carregada. O jogo aprimora os elementos de combate e traz novas mecânicas que ampliam a experiência de exploração. Com um enredo envolvente e uma relação de pai e filho no centro da trama, Ragnarok entrega uma experiência completa e imersiva, mantendo o alto padrão estabelecido pela franquia.",
        imageUrl: "images/games/E-38a9GXMAIKvVE.jpg",
        ratings: [3, 4, 3, 4, 4],
        trailerUrl: "https://www.youtube.com/embed/hfJ4Km46A-0?si=6mV6tKAagwRY4VXC",
        wallpaperUrl: "images/games/god-of-war-ragnarok-wallpaper.png"
    },
    { 
        id: 8,
        title: "Billie Jean", 
        category: CATEGORIES.MUSICAS, 
        description: "Michael Jackson",
        longDescription: "Billie Jean é um marco do pop, com uma batida envolvente e uma linha de baixo inesquecível. A letra fala de rumores e pressão da fama, sendo uma das músicas mais misteriosas e comentadas da carreira de Michael Jackson. O videoclipe inovador ajudou a popularizar a MTV e estabeleceu Jackson como um artista visionário. 'Billie Jean' continua a ser celebrada e influente, tendo pavimentado o caminho para o estrelato de Jackson e consolidado sua posição como o Rei do Pop.",
        imageUrl: "images/musics/Cl0fSNDWAAAiynZ.jpg",
        ratings: [5, 4, 4, 5, 5, 5],
        musicUrl: "https://open.spotify.com/embed/track/5ChkMS8OtdzJeqyybCc9R5?utm_source=generator",
        wallpaperUrl: "images/musics/michael-jackson-wallpaper.png"
    },
    { 
        id: 9,
        title: "Bohemian Rhapsody", 
        category: CATEGORIES.MUSICAS, 
        description: "Queen",
        longDescription: "Bohemian Rhapsody é uma das músicas mais icônicas da banda Queen e um marco na história do rock. Composta por Freddie Mercury, a canção mistura elementos de rock, ópera e balada, criando uma experiência musical única e inovadora. Lançada em 1975, a faixa desafiou as convenções da época, com sua longa duração e estrutura pouco convencional, incluindo uma seção operática que alterna vocais complexos e dramáticos. A música narra uma história enigmática e emocional, passando por momentos de reflexão, desespero e redenção. 'Bohemian Rhapsody' continua a ser aclamada por seu impacto cultural e pela ousadia criativa de Mercury e dos membros da banda, que ajudaram a redefinir o que uma música de rock poderia ser.",
        imageUrl: "images/musics/queen.png",
        ratings: [5, 5, 3, 5, 5],
        musicUrl: "https://open.spotify.com/embed/track/3z8h0TU7ReDPLIbEnYhWZb?utm_source=generator",
        wallpaperUrl: "images/musics/queen-wallpaper.png"
    }
];
