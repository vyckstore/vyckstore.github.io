/* ============================================================
   produtos.js — LISTA ÚNICA DE PEÇAS
   Usada por index.html e favoritos.html. Edite SÓ aqui:
   as duas páginas passam a mostrar sempre as mesmas peças.
   ============================================================ */

  // Suas peças. Adicione, remova ou edite os itens abaixo.
  // "imagem" pode ser um link de foto sua (ex: hospedada no imgur, ou dentro
  // da pasta do site, tipo "imagens/colar-1.jpg")
  //
  // Quer colocar MAIS DE UMA FOTO no mesmo produto? Troque "imagem" (singular)
  // por "imagens" (plural), com uma lista de fotos entre colchetes. Exemplo:
  //   {
  //     nome: "Colar Pérolas",
  //     categoria: "Colares",
  //     preco: "R$ 30,00",
  //     novidade: false,
  //     imagens: ["colares/colar-perolas.jpg", "colares/colar-perolas-2.jpg"]
  //   }
  // O card mostrará bolinhas para navegar entre as fotos. Pode usar quantas
  // fotos quiser (2, 3, 4...). Se usar "imagens", pode remover a linha "imagem".
  //
  // Cada foto da lista também pode ser um objeto com ajustes próprios:
  //   imagens: [
  //     { src: "pulseiras/foto1.jpg", foco: "50% 20%", ajuste: "contain", zoom: 1 },
  //     "pulseiras/foto2.jpg"
  //   ]
  // O que for escrito direto no produto vale como padrão para as fotos
  // que não tiverem o próprio valor.
  //
  // AJUSTES OPCIONAIS DE ENQUADRAMENTO (por peça — se não escrever nada,
  // a peça segue o padrão definido no CSS lá em cima):
  //   foco:   parte da foto que fica visível. Ex: "top", "bottom", "50% 30%"
  //   ajuste: "cover" (preenche e corta) ou "contain" (foto inteira, sem cortar)
  //   zoom:   ampliação da foto. 1 = normal, 1.2 = +20%, 1.5 = +50%,
  //           0.8 = reduz (só faz sentido com ajuste: "contain")
  //           O zoom cresce a partir do ponto definido em "foco".
  //   fundo:  cor das margens quando a foto não preenche a moldura.
  //           Ex: "#000" (preto), "#fff" (branco). Sem isso, usa o cinza padrão.
  //   Exemplo:
  //     foco: "50% 40%",
  //     zoom: 1.3,
  //     fundo: "#000"
  const PRODUCTS = [

    // novidades:


    // Colares:
    {
      nome: "Colar Cruz Tribal",
      categoria: "Colares",
      preco: "R$ 45,00",
      novidade: true,
      imagem: "colares/cruz-de-prata.jpg",
      foco: "50% 70%",
      zoom: 1.4
    },
    {
      nome: "Colar Cruz Invertida",
      categoria: "Colares",
      preco: "R$ 35,00",
      novidade: true,
      imagem: "colares/cruz-invertida.jpg",
      foco: "60% 85%",
      zoom: 1.3
    },
    {
      nome: "Colar Borboleta Cravejada",
      categoria: "Colares",
      preco: "R$ 35,00",
      novidade: true,
      imagem: "colares/colar-borboleta-cravejada.jpg"
    },
    {
      nome: "Colar Borboleta Monarca",
      categoria: "Colares",
      preco: "R$ 35,00",
      novidade: false,
      imagem: "colares/colar-borboleta-cravejada2.jpg"
    },

    {
      nome: "Conjunto Lua Cheia",
      categoria: "Colares",
      preco: "R$ 50,00",
      novidade: false,
      imagem: "colares/colar-conjunto-perolado.jpg"
    },
    {
      nome: "Colar Fio de Prata",
      categoria: "Colares",
      preco: "R$ 30,00",
      novidade: false,
      imagem: "colares/colar-corrente-fina.jpg",
      foco: "20% 65%",
      zoom: 1.2
    },
    {
      nome: "Colar Elo Grosso",
      categoria: "Colares",
      preco: "R$ 30,00",
      novidade: false,
      imagem: "colares/colar-corrente-larga.jpg"
    },
    {
      nome: "Colar Duo Coração",
      categoria: "Colares",
      preco: "R$ 50,00",
      novidade: false,
      imagem: "colares/colar-duo-coracao.jpg"
    },
    {
      nome: "Colar Gargantilha de Borboleta",
      categoria: "Colares",
      preco: "R$ 36,00",
      novidade: false,
      imagem: "colares/colar-gargantilha-borboletas.jpg"
    },
    {
      nome: "Colar Pérolado",
      categoria: "Colares",
      preco: "R$ 30,00",
      novidade: false,
      imagem: "colares/colar-perolas.jpg"
    },
    {
      nome: "Colar Pérola Solitária",
      categoria: "Colares",
      preco: "R$ 30,00",
      novidade: false,
      imagem: "colares/colar-perola-unica.jpg"
    },
    {
      nome: "Colar Estrela Solitária",
      categoria: "Colares",
      preco: "R$ 30,00",
      novidade: false,
      imagem: "colares/IMG_8408.JPG"
    },
    {
      nome: "Colar Slim",
      categoria: "Colares",
      preco: "R$ 30,00",
      novidade: false,
      imagem: "colares/IMG_8410.JPG"
    },
    {
      nome: "Colar Mini Borboleta",
      categoria: "Colares",
      preco: "R$ 30,00",
      novidade: false,
      imagem: "colares/IMG_8406.JPG"
    },
    // {nome: "Colar Pérola de Prata", categoria: "Colares", preco: "R$ 30,00", novidade: false, imagem: "colares/IMG_8422.JPG"},

    // Brincos:
    {
      nome: "Brinco Farpado",
      categoria: "Brincos",
      preco: "R$ 20,00",
      novidade: false,
      imagem: "brincos/brinco-arame.jpg",
      foco: "43% 18%",
      zoom: 1.4
      
    },
    {
      nome: "Brinco Aranha",
      categoria: "Brincos",
      preco: "R$ 20,00",
      novidade: true,
      imagem: "brincos/brinco-aranha.jpg",
      foco: "43% 20%",
      zoom: 1.3
      
    },
    {
      nome: "Brinco Coração",
      categoria: "Brincos",
      preco: "R$ 20,00",
      novidade: false,
      imagem: "brincos/brinco-coracao.jpg",
      foco: "30% 23%",          // opcional
      zoom: 1.4,                 // opcional (1 = normal; ex: 1.3 para ampliar)
      fundo: "#000" 
    },
    {
      nome: "Brinco Caveira",
      categoria: "Brincos",
      preco: "R$ 20,00",
      novidade: false,
      imagem: "brincos/IMG_8483.JPG"
    },
    {
      nome: "Brinco Asas de Morcego",
      categoria: "Brincos",
      preco: "R$ 20,00",
      novidade: false,
      imagem: "brincos/IMG_8473.JPG",
      foco: "45% 50%",          // opcional
      ajuste: "scale-down",    // opcional
      zoom: 1.8,                 // opcional (1 = normal; ex: 1.3 para ampliar)
      fundo: "#000"            // opcional (cor das margens sobrando)
    },
    {
      nome: "Brinco Aranha de Rubi",
      categoria: "Brincos",
      preco: "R$ 20,00",
      novidade: false,
      imagem: "brincos/IMG_8479.JPG"
    },
    {
      nome: "Brinco Coração de Ônix",
      categoria: "Brincos",
      preco: "R$ 10,00",
      novidade: false,
      imagem: "brincos/IMG_8484.JPG"
    },
    {
      nome: "Brinco Pérola Clássica",
      categoria: "Brincos",
      preco: "R$ 12,00",
      novidade: false,
      imagem: "brincos/IMG_8486.JPG"
    },
    {
      nome: "Brinco Cubo",
      categoria: "Brincos",
      preco: "R$ 10,00",
      novidade: false,
      imagem: "brincos/IMG_8490.JPG",
      foco: "40% 50%",          // opcional
      zoom: 1.8,                 // opcional (1 = normal; ex: 1.3 para ampliar)
      fundo: "#000" 
    },
    // {nome: "Brinco Slim", categoria: "Brincos", preco: "R$ 10,00", novidade: false, imagem: "brincos/IMG_8491.JPG", foco: "44% 50%", ajuste: "scale-down", zoom: 1.8, fundo: "#000"},



    // Anéis:
    {
      nome: "Anel Farpado",
      categoria: "Anéis",
      preco: "R$ 20,00",
      novidade: false,
      imagem: "aneis/anel-arame.jpg",
      foco: "45% 45%",
      zoom: 2.0
    },
   // {nome: "Anel Aranha", categoria: "Anéis", preco: "R$ 20,00", novidade: true,
   //    imagem: "aneis/anel-aranha.jpg", foco: "33% 45%", zoom: 2.0 },
   // {nome: "Anel Monarca", categoria: "Anéis", preco: "R$ 17,00", novidade: false, imagem: "aneis/anel-borboleta.jpg"},
   
  {nome: "Anel Morcego", categoria: "Anéis", preco: "R$ 17,00", novidade: false,
  imagem: "aneis/IMG_8308.JPG", foco: "44% 55%", zoom: 2.0 },
   
  //  {nome: "Anel Bola Oito", categoria: "Anéis", preco: "R$ 20,00", novidade: false, imagem: "aneis/IMG_8329.JPG"},
    
    {
      nome: "Anel Elo Largo",
      categoria: "Anéis",
      preco: "R$ 15,00",
      novidade: false,
      imagem: "aneis/IMG_8330.JPG"
    },
   // {nome: "Anel Monarca Largo", categoria: "Anéis", preco: "R$ 17,00",
   //  novidade: false, imagem: "aneis/IMG_8333.JPG"},
   // {nome: "Anel Elo", categoria: "Anéis", preco: "R$ 15,00", novidade: false, imagem: "aneis/IMG_8336.JPG"},
    
   // {nome: "Anel Serpente", categoria: "Anéis", preco: "R$ 17,00", novidade: false, imagem: "aneis/IMG_8343.JPG"},
    
    {
      nome: "Anel Love Letter",
      categoria: "Anéis",
      preco: "R$ 15,00",
      novidade: false,
      imagem: "aneis/IMG_8349.JPG"
    },
    {
      nome: "Anel Coroa Negra",
      categoria: "Anéis",
      preco: "R$ 15,00",
      novidade: false,
      imagem: "aneis/IMG_8351.JPG"
    },
    {
      nome: "Anel Caveira",
      categoria: "Anéis",
      preco: "R$ 20,00",
      novidade: true,
      imagem: "aneis/IMG_8355.JPG"
    },
    {
      nome: "Anel Ônix",
      categoria: "Anéis",
      preco: "R$ 15,00",
      novidade: false,
      imagem: "aneis/IMG_8356.JPG"
    },
    {
      nome: "Anel Angel",
      categoria: "Anéis",
      preco: "R$ 20,00",
      novidade: false,
      imagem: "aneis/IMG_8361.JPG"
    },
    // {nome: "Anel Coração Entrelaçado", categoria: "Anéis", preco: "R$ 17,00", novidade: false, imagem: "aneis/IMG_8366.JPG"},
   
    // {nome: "Anel Girassol", categoria: "Anéis", preco: "R$ 17,00", novidade: false, imagem: "aneis/IMG_8367.JPG"},
    
    {
      nome: "Anel Yin Yang",
      categoria: "Anéis",
      preco: "R$ 17,00",
      novidade: false,
      imagem: "aneis/IMG_8369.JPG"
    },
    {
      nome: "Anel Filigrama",
      categoria: "Anéis",
      preco: "R$ 13,00",
      novidade: false,
      imagem: "aneis/IMG_8337.JPG"
    },
    {
      nome: "Anel Ondas",
      categoria: "Anéis",
      preco: "R$ 13,00",
      novidade: false,
      imagem: "aneis/IMG_8342.JPG"
    },
    {
      nome: "Anel Folhas",
      categoria: "Anéis",
      preco: "R$ 13,00",
      novidade: false,
      imagem: "aneis/IMG_8348.JPG"
    },
    // {nome: "Anel Trança", categoria: "Anéis", preco: "R$ 13,00", novidade: false, imagem: "aneis/IMG_8360.JPG"},
    
    {
      nome: "Anel Pontilhado",
      categoria: "Anéis",
      preco: "R$ 13,00",
      novidade: false,
      imagem: "aneis/IMG_8364.JPG"
    },
    {
      nome: "Anel Arabesco",
      categoria: "Anéis",
      preco: "R$ 13,00",
      novidade: false,
      imagem: "aneis/IMG_8370.JPG"
    },

    // Pulseiras:
    {
      nome: "Bracelete Estrela Única",
      categoria: "Pulseiras",
      preco: "R$ 30,00",
      novidade: true,
      imagem: "pulseiras/IMG_20261027_122923765.jpg"
    },
    {
      nome: "Bracelete Fio de Prata",
      categoria: "Pulseiras",
      preco: "R$ 25,00",
      novidade: true,
      imagem: "pulseiras/IMG_20261027_122936486.jpg"
    },
    {
      nome: "Bracelete Argento",
      categoria: "Pulseiras",
      preco: "R$ 30,00",
      novidade: true,
      imagem: "pulseiras/IMG_20261027_122801238.jpg"
    },
    {
      nome: "Bracelete Serena",
      categoria: "Pulseiras",
      preco: "R$ 25,00",
      novidade: true,
      imagem: "pulseiras/IMG_20261027_122821316.jpg"
    },
    {
      nome: "Bracelete Clássico",
      categoria: "Pulseiras",
      preco: "R$ 25,00",
      novidade: true,
      imagem: "pulseiras/IMG_20261027_122908121.jpg"
    },
    {
      nome: "Bracelete Lunar",
      categoria: "Pulseiras",
      preco: "R$ 30,00",
      novidade: true,
      imagem: "pulseiras/IMG_20261027_122742429.jpg"
    },
    {
      nome: "Pulseira Lisa",
      categoria: "Pulseiras",
      preco: "R$ 20,00",
      novidade: false,
      imagens: [
        { src: "pulseiras/IMG_8439.JPG", foco: "55% 90%", ajuste: "contain", zoom: 2.3},
        { src: "pulseiras/IMG_8440.JPG", foco: "60% 90%", ajuste: "contain", zoom: 2.3 }
      ]
      
    },
    {
      nome: "Pulseira Trançada",
      categoria: "Pulseiras",
      preco: "R$ 25,00",
      novidade: false,
      imagens: ["pulseiras/IMG_8437.JPG", 
      { src: "pulseiras/IMG_8441.JPG", foco: "60% 90%", ajuste: "contain", zoom: 2.3 }
      ]
    },
    {
      nome: "Pulseira Esferas",
      categoria: "Pulseiras",
      preco: "R$ 20,00",
      novidade: false,
      imagens: ["pulseiras/IMG_8461.JPG", "pulseiras/IMG_8460.JPG"]
    },
    {
      nome: "Pulseira Cordame",
      categoria: "Pulseiras",
      preco: "R$ 25,00",
      novidade: false,
      imagens: ["pulseiras/IMG_8442.JPG", "pulseiras/IMG_8443.JPG"]
    },
    {
      nome: "Pulseira Elo Quadrado",
      categoria: "Pulseiras",
      preco: "R$ 20,00",
      novidade: false,
      imagens: ["pulseiras/IMG_8446.JPG", "pulseiras/IMG_8447.JPG"]
    },
    {
      nome: "Pulseira Fio Fino",
      categoria: "Pulseiras",
      preco: "R$ 20,00",
      novidade: false,
      imagens: ["pulseiras/IMG_8449.JPG", "pulseiras/IMG_8448.JPG"]
    },
    {
      nome: "Pulseira Trançada Fina",
      categoria: "Pulseiras",
      preco: "R$ 20,00",
      novidade: false,
      imagens: ["pulseiras/IMG_8455.JPG", "pulseiras/IMG_8454.JPG"]
    },
    {
      nome: "Pulseira Elo Largo",
      categoria: "Pulseiras",
      preco: "R$ 20,00",
      novidade: false,
      imagens: ["pulseiras/IMG_8457.JPG", "pulseiras/IMG_8456.JPG"]
    },
    {
      nome: "Pulseira Pérolas de Prata",
      categoria: "Pulseiras",
      preco: "R$ 20,00",
      novidade: false,
      imagens: ["pulseiras/IMG_8458.JPG", "pulseiras/IMG_8459.JPG"]
    },
    {
      nome: "Pulseira Elo Largo",
      categoria: "Pulseiras",
      preco: "R$ 20,00",
      novidade: false,
      imagens: ["pulseiras/IMG_8463.JPG", "pulseiras/IMG_8462.JPG"]
    },
    {
      nome: "Pulseira Ítalica",
      categoria: "Pulseiras",
      preco: "R$ 20,00",
      novidade: false,
      imagens: ["pulseiras/IMG_8467.JPG", "pulseiras/IMG_8468.JPG"]
    },

  ];

/* Dá a cada peça um id estável (baseado no nome) e ÚNICO.
   Nomes repetidos ganham sufixo (-2, -3...), assim favoritar uma
   peça não favorita as outras de mesmo nome. */
(function(){
  const usados = {};
  PRODUCTS.forEach(p => {
    const base = p.nome.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    let id = base, n = 2;
    while(usados[id]) id = base + '-' + n++;
    usados[id] = true;
    p.id = id;
  });
})();
