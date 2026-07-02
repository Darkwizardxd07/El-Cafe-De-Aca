/**
 * MENU_DATA — Contenido completo de la carta de "El Café de Acá".
 * Transcripción fiel de las fotos oficiales del menú (ES = fuente de la verdad).
 * Los precios se dejan en un único formato "Gs. X.XXX" (no se traducen: la notación
 * monetaria es universal). Nombres y descripciones sí se traducen a EN/PT.
 *
 * Estructura:
 * MENU_DATA = [
 *   {
 *     id, title: {es,en,pt}, superTitle?: {es,en,pt}, note?: {es,en,pt},
 *     items: [ { id, name:{es,en,pt}, desc:{es,en,pt}?, price, vegan? } ],
 *     callouts?: [ { title:{es,en,pt}, lines:[{es,en,pt}], note?:{es,en,pt} } ]
 *   }
 * ]
 */

const MENU_DATA = [
  // 1. CAFÉ ---------------------------------------------------------------
  {
    id: "cafe",
    title: { es: "Café", en: "Coffee", pt: "Café" },
    items: [
      { id: "cafe-01", name: { es: "El cafecito de acá", en: "The little coffee from here", pt: "O cafezinho daqui" }, desc: { es: "Base de leche condensada, espresso, chantilly y maní ku'i.", en: "Condensed milk base, espresso, whipped cream and roasted peanut powder.", pt: "Base de leite condensado, espresso, chantilly e amendoim torrado moído." }, price: "Gs. 20.000" },
      { id: "cafe-02", name: { es: "Cortado", en: "Cortado", pt: "Cortado" }, price: "P Gs. 16.000 · M Gs. 19.000" },
      { id: "cafe-03", name: { es: "Café con leche", en: "Coffee with milk", pt: "Café com leite" }, price: "M Gs. 20.000 · G Gs. 25.000" },
      { id: "cafe-04", name: { es: "Café pituco", en: "Fancy coffee", pt: "Café chique" }, desc: { es: "Espresso, leche caliente y dibujito con jalea de chocolate.", en: "Espresso, hot milk and a little chocolate syrup drawing on top.", pt: "Espresso, leite quente e um desenho de calda de chocolate por cima." }, price: "Gs. 21.000" },
      { id: "cafe-05", name: { es: "Capuchino vienés", en: "Viennese cappuccino", pt: "Capuccino vienense" }, desc: { es: "Espresso, leche, chantilly, canela y chocolate rallado.", en: "Espresso, milk, whipped cream, cinnamon and grated chocolate.", pt: "Espresso, leite, chantilly, canela e chocolate ralado." }, price: "Gs. 24.000" },
      { id: "cafe-06", name: { es: "Capuchino", en: "Cappuccino", pt: "Capuccino" }, desc: { es: "Espresso y leche caliente, coronado con jalea de chocolate y chocolate rallado.", en: "Espresso and hot milk, topped with chocolate syrup and grated chocolate.", pt: "Espresso e leite quente, coberto com calda de chocolate e chocolate ralado." }, price: "M Gs. 22.000 · G Gs. 27.000" },
      { id: "cafe-07", name: { es: "Caramel latte", en: "Caramel latte", pt: "Caramel latte" }, desc: { es: "Salsa de caramelo, leche emulsionada y café espresso.", en: "Caramel sauce, steamed milk and espresso coffee.", pt: "Calda de caramelo, leite vaporizado e café espresso." }, price: "Gs. 27.000" },
      { id: "cafe-08", name: { es: "Mocca", en: "Mocha", pt: "Mocha" }, desc: { es: "Espresso, jalea de chocolate, leche emulsionada y cacao.", en: "Espresso, chocolate syrup, steamed milk and cocoa.", pt: "Espresso, calda de chocolate, leite vaporizado e cacau." }, price: "Gs. 24.000" },
      { id: "cafe-09", name: { es: "Latte macchiato", en: "Latte macchiato", pt: "Latte macchiato" }, desc: { es: "Mucha leche emulsionada y café espresso.", en: "Lots of steamed milk with a shot of espresso.", pt: "Bastante leite vaporizado e uma dose de espresso." }, price: "Gs. 23.000" },
      { id: "cafe-10", name: { es: "Espresso", en: "Espresso", pt: "Espresso" }, price: "Gs. 14.000" },
      { id: "cafe-11", name: { es: "Espresso doble", en: "Double espresso", pt: "Espresso duplo" }, desc: { es: "En la tacita de espresso; doble carga de café.", en: "Served in the espresso cup; double the coffee.", pt: "Servido na xícara de espresso; dose dupla de café." }, price: "Gs. 19.000" },
      { id: "cafe-12", name: { es: "Café americano", en: "Americano", pt: "Café americano" }, desc: { es: "Café negro suave de filtro, servido en taza grande.", en: "Smooth black filter coffee, served in a large cup.", pt: "Café preto coado suave, servido em xícara grande." }, price: "Gs. 25.000" },
      { id: "cafe-13", name: { es: "Espresso descafeinado", en: "Decaf espresso", pt: "Espresso descafeinado" }, price: "Gs. 22.000" },
      { id: "cafe-14", name: { es: "Café con leche descafeinado", en: "Decaf coffee with milk", pt: "Café com leite descafeinado" }, price: "Gs. 30.000" }
    ],
    subsections: [
      {
        title: { es: "Fríos", en: "Cold Coffees", pt: "Gelados" },
        items: [
          { id: "frio-01", name: { es: "Iced coffee", en: "Iced coffee", pt: "Iced coffee" }, desc: { es: "Café americano con mucho hielo.", en: "Americano coffee with plenty of ice.", pt: "Café americano com bastante gelo." }, price: "Gs. 25.000" },
          { id: "frio-02", name: { es: "Iced latte", en: "Iced latte", pt: "Iced latte" }, desc: { es: "Café espresso, leche emulsionada y mucho hielo.", en: "Espresso coffee, steamed milk and plenty of ice.", pt: "Café espresso, leite vaporizado e bastante gelo." }, price: "Gs. 27.000" },
          { id: "frio-03", name: { es: "Iced caramel latte", en: "Iced caramel latte", pt: "Iced caramel latte" }, desc: { es: "Café espresso, salsa de caramelo, leche emulsionada y hielo.", en: "Espresso coffee, caramel sauce, steamed milk and ice.", pt: "Café espresso, calda de caramelo, leite vaporizado e gelo." }, price: "Gs. 30.000" },
          { id: "frio-04", name: { es: "Iced mocca", en: "Iced mocha", pt: "Iced mocha" }, desc: { es: "Café espresso, jalea de chocolate, leche emulsionada y hielo.", en: "Espresso coffee, chocolate syrup, steamed milk and ice.", pt: "Café espresso, calda de chocolate, leite vaporizado e gelo." }, price: "Gs. 30.000" },
          { id: "frio-05", name: { es: "Affogato", en: "Affogato", pt: "Affogato" }, desc: { es: "Helado de crema americana, café espresso doble, crema chantilly, jalea de chocolate y chips de chocolate.", en: "American cream ice cream, double espresso, whipped cream, chocolate syrup and chocolate chips.", pt: "Sorvete de creme americano, espresso duplo, chantilly, calda de chocolate e gotas de chocolate." }, price: "Gs. 35.000" },
          { id: "frio-06", name: { es: "Milkshake de dulce de leche", en: "Dulce de leche milkshake", pt: "Milkshake de doce de leite" }, desc: { es: "Dulce de leche, helado, chantilly, salsa de caramelo y cereza.", en: "Dulce de leche, ice cream, whipped cream, caramel sauce and a cherry.", pt: "Doce de leite, sorvete, chantilly, calda de caramelo e cereja." }, price: "Gs. 45.000" },
          { id: "frio-07", name: { es: "Milkshake de Nutella", en: "Nutella milkshake", pt: "Milkshake de Nutella" }, desc: { es: "Nutella, helado, chantilly, jalea de chocolate y cereza.", en: "Nutella, ice cream, whipped cream, chocolate syrup and a cherry.", pt: "Nutella, sorvete, chantilly, calda de chocolate e cereja." }, price: "Gs. 48.000" }
        ]
      }
    ],
    callouts: [
      {
        title: { es: "Adicionales", en: "Extras", pt: "Adicionais" },
        lines: [
          { es: "Espresso — Gs. 8.000", en: "Espresso — Gs. 8,000", pt: "Espresso — Gs. 8.000" },
          { es: "Saquito de té o infusión — Gs. 3.000", en: "Tea or herbal tea bag — Gs. 3,000", pt: "Saquinho de chá ou infusão — Gs. 3.000" },
          { es: "Crema chantilly — Gs. 6.000", en: "Whipped cream — Gs. 6,000", pt: "Chantilly — Gs. 6.000" },
          { es: "Jarrita de leche — Gs. 6.000", en: "Small jug of milk — Gs. 6,000", pt: "Jarrinha de leite — Gs. 6.000" }
        ],
        note: { es: "Podés reemplazar por leche vegetal la mayoría de tus bebidas — Gs. 9.000", en: "You can swap in plant-based milk on most drinks — Gs. 9,000", pt: "Você pode trocar por leite vegetal na maioria das bebidas — Gs. 9.000" }
      }
    ]
  },

  // 2. COCIDO QUEMADO -------------------------------------------------------
  {
    id: "cocido",
    title: { es: "Cocido Quemado", en: "Toasted Yerba \"Cocido\"", pt: "Cocido Queimado" },
    items: [
      { id: "cocido-01", name: { es: "El cocidito de acá", en: "The little cocido from here", pt: "O cocidinho daqui" }, desc: { es: "Base de leche condensada, cocido quemado, crema chantilly y maní ku'i.", en: "Condensed milk base, toasted yerba cocido, whipped cream and roasted peanut powder.", pt: "Base de leite condensado, cocido queimado, chantilly e amendoim torrado moído." }, price: "Gs. 15.000" },
      { id: "cocido-02", name: { es: "Cocido negro", en: "Black cocido", pt: "Cocido preto" }, price: "M Gs. 15.000 · G Gs. 18.000" },
      { id: "cocido-03", name: { es: "Cocido con leche", en: "Cocido with milk", pt: "Cocido com leite" }, price: "M Gs. 16.000 · G Gs. 19.000" }
    ]
  },

  // 3. CHOCOLATES -----------------------------------------------------------
  {
    id: "chocolates",
    title: { es: "Chocolates", en: "Chocolates", pt: "Chocolates" },
    items: [
      { id: "choco-01", name: { es: "Chocolate caliente", en: "Hot chocolate", pt: "Chocolate quente" }, desc: { es: "De la olla a la taza, endulzado con leche condensada.", en: "Straight from the pot to the cup, sweetened with condensed milk.", pt: "Direto da panela para a xícara, adoçado com leite condensado." }, price: "M Gs. 25.000 · G Gs. 35.000" },
      { id: "choco-02", name: { es: "Chocolate frío", en: "Cold chocolate", pt: "Chocolate gelado" }, desc: { es: "Chocolate hecho a la olla pero bien frío, con leche condensada y jalea de chocolate.", en: "Pot-made chocolate served ice cold, with condensed milk and chocolate syrup.", pt: "Chocolate feito na panela, servido bem gelado, com leite condensado e calda de chocolate." }, price: "Gs. 30.000" }
    ]
  },

  // 4. TÉ - INFUSIONES -------------------------------------------------------
  {
    id: "te-infusiones",
    title: { es: "Té - Infusiones", en: "Tea & Herbal Infusions", pt: "Chá e Infusões" },
    note: { es: "En pavita para más de dos tazas.", en: "Served in a small kettle, good for more than two cups.", pt: "Servido em bule pequeno, rende mais de duas xícaras." },
    items: [
      { id: "te-01", name: { es: "Té en saquitos", en: "Bagged tea", pt: "Chá em saquinho" }, desc: { es: "Pedile a tu mozo la cajita de té en saquitos para elegir.", en: "Ask your server for the tea box to pick your favorite.", pt: "Peça ao garçom a caixinha de chás para escolher." }, price: "Gs. 20.000" },
      { id: "te-02", name: { es: "Infusiones nuestras en saquitos", en: "House herbal infusions", pt: "Infusões da casa em saquinho" }, desc: { es: "Menta'í • Burrito • Boldo • Manzanilla • Tilo • Anís", en: "Peppermint • Pennyroyal • Boldo • Chamomile • Linden • Anise", pt: "Menta • Poejo • Boldo • Camomila • Tília • Anis" }, price: "Gs. 18.000" }
    ]
  },

  // 5. SE VENDE MATE Y TERERÉ -------------------------------------------------
  {
    id: "mate-terere",
    superTitle: { es: "Se vende", en: "We sell", pt: "Vende-se" },
    title: { es: "Mate y Tereré", en: "Mate & Tereré", pt: "Mate e Tereré" },
    items: [
      { id: "mate-01", name: { es: "Tereré / Tereré pantano", en: "Tereré / Herbal Tereré", pt: "Tereré / Tereré de ervas" }, desc: { es: "Yerba mate y agua mineral con hielo. Recarga de agua mineral fría con hielo Gs. 14.000.", en: "Yerba mate with iced mineral water. Cold mineral water refill Gs. 14,000.", pt: "Erva-mate com água mineral gelada. Recarga de água mineral gelada Gs. 14.000." }, price: "Gs. 28.000" },
      { id: "mate-02", name: { es: "Mate", en: "Hot Mate", pt: "Mate quente" }, desc: { es: "Yerba mate y agua mineral bien caliente. Recarga de agua caliente Gs. 12.000.", en: "Yerba mate with piping hot mineral water. Hot water refill Gs. 12,000.", pt: "Erva-mate com água mineral bem quente. Recarga de água quente Gs. 12.000." }, price: "Gs. 28.000" },
      { id: "mate-03", name: { es: "Mate dulce", en: "Sweet Mate", pt: "Mate doce" }, desc: { es: "En la guampa: coco rallado, y en la pavita: leche caliente con caramelo de azúcar y cáscara de naranja.", en: "Grated coconut in the gourd, with hot milk, sugar caramel and orange peel in the kettle.", pt: "Coco ralado na cuia e, no bule, leite quente com caramelo de açúcar e casca de laranja." }, price: "Gs. 45.000" },
      { id: "mate-04", name: { es: "Adicional materito", en: "Extra mate set", pt: "Kit de mate adicional" }, desc: { es: "Guampa, yerba o coco y bombilla.", en: "Gourd, yerba mate or coconut, and a bombilla straw.", pt: "Cuia, erva-mate ou coco e bomba." }, price: "Gs. 14.000" }
    ],
    note: { es: "La bombilla viene de yapa; pedile a tu mozo para llevar.", en: "The bombilla straw is a free extra — ask your server if you'd like to take it home.", pt: "A bomba é um mimo da casa; peça ao garçom se quiser levar." }
  },

  // 6. DULCES! POSTRES! -------------------------------------------------------
  {
    id: "dulces-postres",
    title: { es: "Dulces! Postres!", en: "Sweets & Desserts!", pt: "Doces! Sobremesas!" },
    items: [
      { id: "postre-01", name: { es: "Postre brownie doble chocolate", en: "Double chocolate brownie dessert", pt: "Sobremesa de brownie duplo chocolate" }, price: "Gs. 28.000" },
      { id: "postre-02", name: { es: "Suspiro limeño", en: "Suspiro limeño", pt: "Suspiro limenho" }, price: "Gs. 28.000" },
      { id: "postre-03", name: { es: "Brigadeiro de cuchara", en: "Spoon brigadeiro", pt: "Brigadeiro de colher" }, price: "Gs. 28.000" },
      { id: "postre-04", name: { es: "Postre cuatro leches", en: "Four milks dessert", pt: "Sobremesa quatro leites" }, price: "Gs. 28.000" },
      { id: "postre-05", name: { es: "Porción de torta", en: "Cake slice", pt: "Fatia de bolo" }, desc: { es: "Red velvet - Carrot cake - Cuatro leches - Chocolate y dulce de leche.", en: "Red velvet - Carrot cake - Four milks - Chocolate and dulce de leche.", pt: "Red velvet - Bolo de cenoura - Quatro leites - Chocolate e doce de leite." }, price: "Gs. 30.000" },
      { id: "postre-06", name: { es: "Cheesecake", en: "Cheesecake", pt: "Cheesecake" }, desc: { es: "Frutos rojos - Caramel toffee - Oreo - Mburucuyá y choco blanco.", en: "Red berries - Caramel toffee - Oreo - Passion fruit and white chocolate.", pt: "Frutas vermelhas - Caramel toffee - Oreo - Maracujá e chocolate branco." }, price: "Gs. 33.000" },
      { id: "postre-07", name: { es: "Tarta de frutilla", en: "Strawberry tart", pt: "Torta de morango" }, price: "Gs. 30.000" },
      { id: "postre-08", name: { es: "Tarta frutal", en: "Fruit tart", pt: "Torta de frutas" }, price: "Gs. 29.000" },
      { id: "postre-09", name: { es: "Torta brownie y merengue", en: "Brownie and meringue cake", pt: "Bolo de brownie com merengue" }, price: "Gs. 30.000" },
      { id: "postre-10", name: { es: "Pie de limón", en: "Lemon pie", pt: "Torta de limão" }, price: "Gs. 27.000" },
      { id: "postre-11", name: { es: "Tarta crumble de manzana", en: "Apple crumble tart", pt: "Torta crumble de maçã" }, price: "Gs. 29.000" },
      { id: "postre-12", name: { es: "Tarta crumble de frutos rojos", en: "Red berries crumble tart", pt: "Torta crumble de frutas vermelhas" }, price: "Gs. 29.000" },
      { id: "postre-13", name: { es: "Brownie clásico", en: "Classic brownie", pt: "Brownie clássico" }, price: "Gs. 22.000" },
      { id: "postre-14", name: { es: "Tarta de coco y dulce de leche", en: "Coconut and dulce de leche tart", pt: "Torta de coco e doce de leite" }, price: "Gs. 27.000" },
      { id: "postre-15", name: { es: "Croissant", en: "Croissant", pt: "Croissant" }, price: "Gs. 12.000" },
      { id: "postre-16", name: { es: "Medialuna de manteca", en: "Butter croissant roll", pt: "Meia-lua de manteiga" }, price: "Gs. 10.000" },
      { id: "postre-17", name: { es: "Medialuna de manteca rellena", en: "Filled butter croissant roll", pt: "Meia-lua de manteiga recheada" }, desc: { es: "Dulce de guayaba y crema de queso Paraguay - Dulce de leche - Crema pastelera.", en: "Guava paste and Paraguayan cheese cream - Dulce de leche - Pastry cream.", pt: "Goiabada com creme de queijo paraguaio - Doce de leite - Creme de confeiteiro." }, price: "Gs. 12.000" },
      { id: "postre-18", name: { es: "Pastelitos de la abuela (2 unid.)", en: "Grandma's little pastries (2 pcs.)", pt: "Pastelzinhos da vovó (2 unid.)" }, desc: { es: "Dulce de leche - Crema pastelera - Dulce de batata - Dulce de guayaba.", en: "Dulce de leche - Pastry cream - Sweet potato paste - Guava paste.", pt: "Doce de leite - Creme de confeiteiro - Doce de batata-doce - Goiabada." }, price: "Gs. 15.000" },
      { id: "postre-19", name: { es: "Cookies", en: "Cookies", pt: "Cookies" }, desc: { es: "Chocolate y Nutella - Chips de chocolate - Churro de dulce de leche.", en: "Chocolate and Nutella - Chocolate chips - Dulce de leche churro.", pt: "Chocolate e Nutella - Gotas de chocolate - Churro de doce de leite." }, price: "Gs. 15.000" },
      { id: "postre-20", name: { es: "Cupcakes de la casa", en: "House cupcakes", pt: "Cupcakes da casa" }, desc: { es: "Dulce de leche - Chocolate - Vainilla.", en: "Dulce de leche - Chocolate - Vanilla.", pt: "Doce de leite - Chocolate - Baunilha." }, price: "Gs. 16.000" },
      { id: "postre-21", name: { es: "Pastafrola", en: "Pastafrola", pt: "Pastafrola" }, price: "Gs. 17.000" },
      { id: "postre-22", name: { es: "Cinnamon roll", en: "Cinnamon roll", pt: "Cinnamon roll" }, price: "Gs. 15.000" },
      { id: "postre-23", name: { es: "Torta marmolada", en: "Marble cake", pt: "Bolo mesclado" }, price: "Gs. 15.000" },
      { id: "postre-24", name: { es: "Torta de limón", en: "Lemon cake", pt: "Bolo de limão" }, price: "Gs. 15.000" },
      { id: "postre-25", name: { es: "Alfajor de maicena", en: "Cornstarch alfajor", pt: "Alfajor de maisena" }, price: "Gs. 16.000" },
      { id: "postre-26", name: { es: "Scones con azúcar (2 unid.)", en: "Sugar scones (2 pcs.)", pt: "Scones com açúcar (2 unid.)" }, price: "Gs. 12.000" },
      { id: "postre-27", name: { es: "Lengüita de gato (bolsita)", en: "\"Cat tongue\" cookies (bag)", pt: "Língua de gato (pacotinho)" }, price: "Gs. 15.000" },
      { id: "postre-28", name: { es: "Galletitas de manteca (bolsita)", en: "Butter cookies (bag)", pt: "Biscoitos de manteiga (pacotinho)" }, price: "Gs. 15.000" },
      { id: "postre-29", name: { es: "Pepas de guayaba (bolsita)", en: "Guava paste candies (bag)", pt: "Pepas de goiaba (pacotinho)" }, price: "Gs. 20.000" },
      { id: "postre-30", name: { es: "Palmeritas de hojaldre (bolsita)", en: "Puff pastry palmiers (bag)", pt: "Palmierzinhos de folhado (pacotinho)" }, price: "Gs. 18.000" },
      { id: "postre-31", name: { es: "Galletitas bañadas con chocolate", en: "Chocolate-coated cookies", pt: "Biscoitos cobertos com chocolate" }, price: "Gs. 25.000" },
      { id: "postre-32", name: { es: "Alfajorcitos de maicena (5 unid.)", en: "Mini cornstarch alfajores (5 pcs.)", pt: "Alfajorzinhos de maisena (5 unid.)" }, price: "Gs. 20.000" },
      { id: "postre-33", name: { es: "Browniecitos recubiertos (6 unid.)", en: "Coated mini brownies (6 pcs.)", pt: "Browniezinhos cobertos (6 unid.)" }, price: "Gs. 30.000" },
      { id: "postre-34", name: { es: "Brigadeiros y besitos de coco (6 unid.)", en: "Brigadeiros and coconut kisses (6 pcs.)", pt: "Brigadeiros e beijinhos de coco (6 unid.)" }, price: "Gs. 22.000" }
    ],
    callouts: [
      {
        title: { es: "Hay helado", en: "We've got ice cream", pt: "Tem sorvete" },
        lines: [],
        note: { es: "Agregale una bocha de crema americana a tus postres favoritos — Gs. 12.000.", en: "Add a scoop of American cream ice cream to your favorite dessert — Gs. 12,000.", pt: "Adicione uma bola de sorvete de creme às suas sobremesas favoritas — Gs. 12.000." }
      }
    ]
  },

  // 7. TÍPICOS ------------------------------------------------------------
  {
    id: "tipicos",
    title: { es: "Típicos", en: "Traditional Paraguayan", pt: "Típicos" },
    items: [
      { id: "tipico-01", name: { es: "Chipitas de acá (3 unid.)", en: "Chipitas from here (3 pcs.)", pt: "Chipitas daqui (3 unid.)" }, price: "Gs. 15.000" },
      { id: "tipico-02", name: { es: "Chipa so'o", en: "Chipa so'o (corn bread with meat)", pt: "Chipa so'o" }, price: "Gs. 16.000" },
      { id: "tipico-03", name: { es: "Pastel mandi'o", en: "Cassava pastel", pt: "Pastel de mandioca" }, price: "Gs. 15.000" },
      { id: "tipico-04", name: { es: "Sopa paraguaya", en: "Paraguayan \"sopa\" (corn & cheese bake)", pt: "Sopa paraguaia" }, price: "Gs. 24.000" },
      { id: "tipico-05", name: { es: "Chipa guazú tradicional", en: "Traditional chipa guazú", pt: "Chipa guaçu tradicional" }, price: "Gs. 24.000" }
    ]
  },

  // 8. EMPANADAS ------------------------------------------------------------
  {
    id: "empanadas",
    title: { es: "Empanadas", en: "Empanadas", pt: "Empanadas" },
    note: { es: "Clásicas de copetín, fritas o al horno. Pancito de Viena Gs. 2.000.", en: "Classic cocktail-size empanadas, fried or baked. Vienna mini bread roll Gs. 2,000.", pt: "Empanadinhas clássicas de coquetel, fritas ou assadas. Pãozinho viena Gs. 2.000." },
    items: [
      { id: "empanada-01", name: { es: "Carne", en: "Beef", pt: "Carne" }, price: "Gs. 14.000" },
      { id: "empanada-02", name: { es: "Pollo", en: "Chicken", pt: "Frango" }, price: "Gs. 14.000" },
      { id: "empanada-03", name: { es: "Jamón y queso", en: "Ham and cheese", pt: "Presunto e queijo" }, price: "Gs. 14.000" },
      { id: "empanada-04", name: { es: "Cebolla y roquefort", en: "Onion and blue cheese", pt: "Cebola e roquefort" }, price: "Gs. 14.000" },
      { id: "empanada-05", name: { es: "Palmito", en: "Palm heart", pt: "Palmito" }, price: "Gs. 14.000" },
      { id: "empanada-06", name: { es: "Provolone y morrones", en: "Provolone and bell peppers", pt: "Provolone e pimentão" }, price: "Gs. 14.000" },
      { id: "empanada-07", name: { es: "Chilena", en: "\"Chilena\" style", pt: "Chilena" }, price: "Gs. 14.000" }
    ]
  },

  // 9. MBEJU ----------------------------------------------------------------
  {
    id: "mbeju",
    title: { es: "Mbeju", en: "Mbeju", pt: "Mbeju" },
    items: [
      { id: "mbeju-01", name: { es: "Mbeju clásico", en: "Classic mbeju", pt: "Mbeju clássico" }, price: "Gs. 26.000" },
      { id: "mbeju-02", name: { es: "Mbeju jamón y queso", en: "Mbeju with ham and cheese", pt: "Mbeju com presunto e queijo" }, desc: { es: "Relleno de jamón cocido y queso mozzarella.", en: "Filled with cooked ham and mozzarella cheese.", pt: "Recheado com presunto cozido e queijo mozzarela." }, price: "Gs. 32.000" },
      { id: "mbeju-03", name: { es: "Mbeju tres quesos", en: "Three-cheese mbeju", pt: "Mbeju três queijos" }, desc: { es: "Relleno de queso paraguay, mozzarella y parmesano.", en: "Filled with Paraguayan cheese, mozzarella and parmesan.", pt: "Recheado com queijo paraguaio, mozarela e parmesão." }, price: "Gs. 34.000" },
      { id: "mbeju-04", name: { es: "Mbeju roquefort", en: "Blue cheese mbeju", pt: "Mbeju roquefort" }, desc: { es: "Relleno de queso roquefort y mozzarella.", en: "Filled with blue cheese and mozzarella.", pt: "Recheado com queijo roquefort e mozarela." }, price: "Gs. 36.000" },
      { id: "mbeju-05", name: { es: "Mbeju caprese", en: "Caprese mbeju", pt: "Mbeju caprese" }, desc: { es: "Tomate natural, tomates secos, queso mozzarella, albahaca y un toque de pesto con nueces.", en: "Fresh tomato, sun-dried tomatoes, mozzarella, basil and a touch of walnut pesto.", pt: "Tomate natural, tomate seco, queijo mozarela, manjericão e um toque de pesto com nozes." }, price: "Gs. 36.000" },
      { id: "mbeju-06", name: { es: "Mbeju napolitano", en: "Neapolitan mbeju", pt: "Mbeju napolitano" }, desc: { es: "Relleno de queso mozzarella, parmesano, jamón cocido, tomate natural, aceitunas verdes y orégano.", en: "Filled with mozzarella, parmesan, cooked ham, fresh tomato, green olives and oregano.", pt: "Recheado com mozarela, parmesão, presunto cozido, tomate natural, azeitonas verdes e orégano." }, price: "Gs. 40.000" },
      { id: "mbeju-07", name: { es: "Mbeju dulce", en: "Sweet mbeju", pt: "Mbeju doce" }, desc: { es: "Nuestro mbeju clásico relleno de dulce de guayaba y queso paraguayo.", en: "Our classic mbeju filled with guava paste and Paraguayan cheese.", pt: "Nosso mbeju clássico recheado com goiabada e queijo paraguaio." }, price: "Gs. 32.000", tag: "featured" }
    ]
  },

  // 10. CANASTA DE PANES CASEROS ----------------------------------------------
  {
    id: "panes-caseros",
    title: { es: "Canasta de Panes Caseros", en: "Homemade Bread Basket", pt: "Cesta de Pães Caseiros" },
    items: [
      { id: "panes-01", name: { es: "Canasta de panes caseros", en: "Homemade bread basket", pt: "Cesta de pães caseiros" }, desc: { es: "Selección de nuestros panes caseros para compartir. Viene con tres potecitos para untar o salsitas para dipear.", en: "A selection of our homemade breads to share, served with three small pots of spreads or dips.", pt: "Seleção dos nossos pães caseiros para compartilhar, com três potinhos de pastas ou molhos." }, price: "Gs. 39.000" },
      { id: "panes-02", name: { es: "Tostadas", en: "Toasts", pt: "Torradas" }, desc: { es: "Viene con un potecito para untar o una salsita para dipear.", en: "Served with one small pot of spread or dip.", pt: "Servido com um potinho de pasta ou molho." }, price: "Gs. 21.000" }
    ],
    callouts: [
      {
        title: { es: "Tipos de pan", en: "Bread types", pt: "Tipos de pão" },
        lines: [
          { es: "Pan lactal de molde", en: "Sliced sandwich bread", pt: "Pão de forma" },
          { es: "Pan de campo", en: "Country bread", pt: "Pão caseiro" },
          { es: "Pan integral de la casa", en: "House whole wheat bread", pt: "Pão integral da casa" },
          { es: "Pan baguette", en: "Baguette", pt: "Baguete" }
        ]
      },
      {
        title: { es: "Para untar — Gs. 7.000", en: "To spread — Gs. 7,000", pt: "Para passar — Gs. 7.000" },
        lines: [
          { es: "Manteca", en: "Butter", pt: "Manteiga" },
          { es: "Queso crema", en: "Cream cheese", pt: "Cream cheese" },
          { es: "Dulce de leche", en: "Dulce de leche", pt: "Doce de leite" },
          { es: "Miel de abeja", en: "Honey", pt: "Mel de abelha" },
          { es: "Mermelada light de durazno", en: "Light peach jam", pt: "Geleia diet de pêssego" },
          { es: "Mermelada de frutilla", en: "Strawberry jam", pt: "Geleia de morango" },
          { es: "Dulce de guayaba", en: "Guava paste", pt: "Goiabada" }
        ]
      },
      {
        title: { es: "Para dipear — Gs. 7.000", en: "To dip — Gs. 7,000", pt: "Para molhar — Gs. 7.000" },
        lines: [
          { es: "Salsa alioli", en: "Aioli sauce", pt: "Molho alioli" },
          { es: "Mayo casera", en: "Homemade mayo", pt: "Maionese caseira" },
          { es: "Salsa tzatziki", en: "Tzatziki sauce", pt: "Molho tzatziki" },
          { es: "Pesto de albahaca y nueces", en: "Basil and walnut pesto", pt: "Pesto de manjericão e nozes" },
          { es: "Hummus de garbanzos", en: "Chickpea hummus", pt: "Homus de grão-de-bico" },
          { es: "Picante de la casa", en: "House hot sauce", pt: "Molho picante da casa" },
          { es: "Guacamole", en: "Guacamole", pt: "Guacamole" }
        ]
      }
    ]
  },

  // 11. BRUNCH ----------------------------------------------------------------
  {
    id: "brunch",
    title: { es: "Brunch", en: "Brunch", pt: "Brunch" },
    items: [
      { id: "brunch-01", name: { es: "Bowl de granola", en: "Granola bowl", pt: "Bowl de granola" }, desc: { es: "Yogurt griego, granola casera, coco natural en hebras, frutilla, banana y arándanos.", en: "Greek yogurt, homemade granola, shredded coconut, strawberry, banana and blueberries.", pt: "Iogurte grego, granola caseira, coco natural ralado, morango, banana e mirtilo." }, price: "Gs. 45.000" },
      { id: "brunch-02", name: { es: "Tazón de frutas frescas", en: "Fresh fruit bowl", pt: "Tigela de frutas frescas" }, price: "Gs. 35.000" },
      { id: "brunch-03", name: { es: "Brunch paraguayan", en: "Paraguayan brunch", pt: "Brunch paraguaio" }, desc: { es: "Huevos revueltos con panceta crocante, mandioquitas fritas, tostadas francesas, potecitos de manteca y jarabe de arce.", en: "Scrambled eggs with crispy bacon, fried cassava sticks, French toast, butter pots and maple syrup.", pt: "Ovos mexidos com bacon crocante, mandioquinha frita, rabanadas, potinhos de manteiga e xarope de bordo." }, price: "Gs. 60.000" },
      { id: "brunch-04", name: { es: "Brunch campero", en: "Country-style brunch", pt: "Brunch campeiro" }, desc: { es: "Salchicha tipo chistorra, dos huevos fritos con ají picante seco y cebollita de verdeo, tomate asado, cebollas encurtidas, guacamole, queso crema y pan de campo tostado.", en: "Chistorra-style sausage, two fried eggs with dried chili flakes and scallion, roasted tomato, pickled onions, guacamole, cream cheese and toasted country bread.", pt: "Linguiça tipo chistorra, dois ovos fritos com pimenta seca e cebolinha, tomate assado, cebola em conserva, guacamole, cream cheese e pão caseiro torrado." }, price: "Gs. 58.000" },
      { id: "brunch-05", name: { es: "Tosta ranchera", en: "Ranchera toast", pt: "Torrada ranchera" }, desc: { es: "Pan de campo tostado, guacamole, tomates cherry, cilantro, un huevo frito (opcional un huevo poché) y ají picante seco. Viene con pico de gallo y limón. Opción vegana: sin huevo, Gs. 42.000.", en: "Toasted country bread, guacamole, cherry tomatoes, cilantro, a fried egg (poached egg optional) and dried chili flakes. Served with pico de gallo and lime. Vegan option: without egg, Gs. 42,000.", pt: "Pão caseiro torrado, guacamole, tomate cereja, coentro, um ovo frito (opcional ovo poché) e pimenta seca. Acompanha pico de gallo e limão. Opção vegana: sem ovo, Gs. 42.000." }, price: "Gs. 44.000" },
      { id: "brunch-06", name: { es: "Breakfast burrito", en: "Breakfast burrito", pt: "Breakfast burrito" }, desc: { es: "Tortilla de trigo, huevos revueltos con mozzarella y panceta crocante, queso cheddar, morrones asados, cebollas encurtidas, rodajas de aguacate y cilantro. Viene con totopos de maíz, guacamole, pico de gallo y picante chipotle.", en: "Wheat tortilla, scrambled eggs with mozzarella and crispy bacon, cheddar, roasted peppers, pickled onions, avocado slices and cilantro. Served with corn chips, guacamole, pico de gallo and chipotle salsa.", pt: "Tortilha de trigo, ovos mexidos com mozarela e bacon crocante, queijo cheddar, pimentão assado, cebola em conserva, fatias de abacate e coentro. Acompanha nachos, guacamole, pico de gallo e molho chipotle." }, price: "Gs. 68.000" },
      { id: "brunch-07", name: { es: "Shakshuka", en: "Shakshuka", pt: "Shakshuka" }, desc: { es: "En la paila se cocinan los huevos en una reducción de tomates y morrones, un toque de perejil por arriba, pancitos tostados y salsita picante para acompañar. Opción vegana: sin huevo, Gs. 44.000.", en: "Eggs poached in a skillet of reduced tomato and bell pepper sauce, finished with parsley, served with toasted bread and hot sauce. Vegan option: without egg, Gs. 44,000.", pt: "Ovos cozidos na frigideira em um molho reduzido de tomate e pimentão, finalizado com salsinha, servido com pãezinhos torrados e molho picante. Opção vegana: sem ovo, Gs. 44.000." }, price: "Gs. 49.000" },
      { id: "brunch-08", name: { es: "Huevos benedictinos", en: "Eggs Benedict", pt: "Ovos beneditinos" }, desc: { es: "English muffins tostados, jamón serrano, huevos poché, salsa holandesa, pimentón dulce y cebollita de hoja. Viene con papas fritas caseras, ensaladita de rúcula, espinaca y tomates cherry.", en: "Toasted English muffins, cured ham, poached eggs, hollandaise sauce, sweet paprika and chives. Served with homemade fries and an arugula, spinach and cherry tomato salad.", pt: "English muffins torrados, presunto cru, ovos poché, molho holandês, páprica doce e cebolinha. Acompanha batata frita caseira e saladinha de rúcula, espinafre e tomate cereja." }, price: "Gs. 75.000" },
      { id: "brunch-09", name: { es: "Huevos revueltos", en: "Scrambled eggs", pt: "Ovos mexidos" }, desc: { es: "4 huevos revueltos acompañados de pan lactal tostado.", en: "4 scrambled eggs served with toasted sandwich bread.", pt: "4 ovos mexidos acompanhados de pão de forma torrado." }, price: "Gs. 32.000" },
      { id: "brunch-10", name: { es: "Mandi'o chyryry", en: "Mandi'o chyryry", pt: "Mandi'o chyryry" }, desc: { es: "Mandioca salteada con cebolla, queso Paraguay, huevos y cebollita de hoja. Viene con pancito tostado. Agregado de salchicha tipo chistorra Gs. 46.000.", en: "Sautéed cassava with onion, Paraguayan cheese, eggs and chives. Served with toasted bread. Add chistorra-style sausage for Gs. 46,000.", pt: "Mandioca refogada com cebola, queijo paraguaio, ovos e cebolinha. Acompanha pãozinho torrado. Adicional de linguiça tipo chistorra Gs. 46.000." }, price: "Gs. 38.000" }
    ]
  },

  // 12. TOSTADAS FRANCESAS Y PANQUEQUES -----------------------------------------
  {
    id: "tostadas-panqueques",
    title: { es: "Tostadas Francesas y Panqueques", en: "French Toast & Pancakes", pt: "Rabanadas e Panquecas" },
    items: [
      { id: "tp-01", name: { es: "Tostadas francesas", en: "French toast", pt: "Rabanadas" }, desc: { es: "Pan rebozado en un preparado de leche, huevo, azúcar y canela. Servidos con azúcar, manteca y jarabe de arce.", en: "Bread soaked in a milk, egg, sugar and cinnamon batter. Served with sugar, butter and maple syrup.", pt: "Pão embebido em uma mistura de leite, ovo, açúcar e canela. Servido com açúcar, manteiga e xarope de bordo." }, price: "Gs. 34.000" },
      { id: "tp-02", name: { es: "Panqueques gordos", en: "Fluffy pancakes", pt: "Panquecas fofas" }, desc: { es: "Torre de cuatro panqueques de masa casera esponjosa. Servidos con azúcar, manteca y jarabe de arce.", en: "A stack of four fluffy homemade pancakes. Served with sugar, butter and maple syrup.", pt: "Torre de quatro panquecas fofas de massa caseira. Servido com açúcar, manteiga e xarope de bordo." }, price: "Gs. 36.000" },
      { id: "tp-03", name: { es: "Tostadas francesas de lujo", en: "Deluxe French toast", pt: "Rabanadas de luxo" }, desc: { es: "Vienen con frutillas frescas, arándanos, banana, crema chantilly, jarabe de arce y un toque de azúcar impalpable.", en: "Served with fresh strawberries, blueberries, banana, whipped cream, maple syrup and a touch of powdered sugar.", pt: "Acompanha morango fresco, mirtilo, banana, chantilly, xarope de bordo e um toque de açúcar de confeiteiro." }, price: "Gs. 52.000" },
      { id: "tp-04", name: { es: "Panqueques gordos de lujo", en: "Deluxe fluffy pancakes", pt: "Panquecas fofas de luxo" }, desc: { es: "Vienen con frutillas frescas, arándanos, banana, crema chantilly, jarabe de arce y un toque de azúcar impalpable.", en: "Served with fresh strawberries, blueberries, banana, whipped cream, maple syrup and a touch of powdered sugar.", pt: "Acompanha morango fresco, mirtilo, banana, chantilly, xarope de bordo e um toque de açúcar de confeiteiro." }, price: "Gs. 54.000" }
    ]
  },

  // 13. GLUTEN FREE -----------------------------------------------------------
  {
    id: "gluten-free",
    title: { es: "Sin Gluten", en: "Gluten Free", pt: "Sem Glúten" },
    items: [
      { id: "gf-01", name: { es: "Empanada de carne", en: "Beef empanada", pt: "Empanada de carne" }, price: "Gs. 20.000" },
      { id: "gf-02", name: { es: "Empanada de jamón y queso", en: "Ham and cheese empanada", pt: "Empanada de presunto e queijo" }, price: "Gs. 20.000" },
      { id: "gf-03", name: { es: "Beirut de pollo", en: "Chicken beirut sandwich", pt: "Beirute de frango" }, price: "Gs. 40.000" }
    ],
    note: { es: "Dulces: varias opciones en la vitrina y el almacén.", en: "Sweets: several options available in the display case and pantry shelf.", pt: "Doces: várias opções na vitrine e na prateleira da loja." }
  },

  // 14. PASE ADELANTE — MIXTOS, TOSTADOS Y SANDWICHES -----------------------------
  {
    id: "pase-adelante",
    superTitle: { es: "Pase adelante", en: "Come on in", pt: "Pode entrar" },
    title: { es: "Mixtos, Tostados y Sandwiches", en: "Mixed Toasts & Sandwiches", pt: "Mistos, Tostados e Sanduíches" },
    items: [
      { id: "sw-01", name: { es: "Mixto caliente", en: "Hot ham & cheese", pt: "Misto quente" }, desc: { es: "Jamón cocido y queso mozzarella (pan de molde blanco o integral, o pan árabe).", en: "Cooked ham and mozzarella cheese (white or whole wheat sandwich bread, or pita).", pt: "Presunto cozido e queijo mozarela (pão de forma branco ou integral, ou pão árabe)." }, price: "Gs. 29.000" },
      { id: "sw-02", name: { es: "Croissant con jamón y queso", en: "Ham and cheese croissant", pt: "Croissant com presunto e queijo" }, price: "Gs. 27.000" },
      { id: "sw-03", name: { es: "Croissant serrano", en: "Cured ham croissant", pt: "Croissant serrano" }, desc: { es: "Croissant relleno de huevos revueltos, queso mozzarella, jamón serrano, tomate natural y rúcula fresca.", en: "Croissant filled with scrambled eggs, mozzarella, cured ham, fresh tomato and arugula.", pt: "Croissant recheado com ovos mexidos, queijo mozarela, presunto cru, tomate natural e rúcula fresca." }, price: "Gs. 55.000" },
      { id: "sw-04", name: { es: "Croissant benedictino", en: "Eggs Benedict croissant", pt: "Croissant beneditino" }, desc: { es: "Croissant relleno de jamón cocido, queso parmesano, dos huevos poché bañados en salsa holandesa, pimentón dulce y cebollita de hoja.", en: "Croissant filled with cooked ham, parmesan, two poached eggs topped with hollandaise sauce, sweet paprika and chives.", pt: "Croissant recheado com presunto cozido, parmesão, dois ovos poché com molho holandês, páprica doce e cebolinha." }, price: "Gs. 47.000" },
      { id: "sw-05", name: { es: "Tostado caprese", en: "Caprese toasted sandwich", pt: "Tostado caprese" }, desc: { es: "Pan árabe relleno de queso mozzarella, rodajas de tomate natural, tomates secos, albahaca fresca y aceite de oliva. Viene con potecito de pesto de albahaca y nueces.", en: "Pita bread filled with mozzarella, fresh tomato slices, sun-dried tomatoes, fresh basil and olive oil. Served with a small pot of basil-walnut pesto.", pt: "Pão árabe recheado com mozarela, fatias de tomate natural, tomate seco, manjericão fresco e azeite. Acompanha potinho de pesto de manjericão e nozes." }, price: "Gs. 49.000" },
      { id: "sw-06", name: { es: "Sándwich mañanero", en: "Morning sandwich", pt: "Sanduíche matinal" }, desc: { es: "Pan lactal tostado relleno de huevos revueltos con perejil, rodajas de aguacate, queso cheddar, queso mozzarella y jamón cocido. Viene con mandioquitas chips.", en: "Toasted sandwich bread filled with scrambled eggs and parsley, avocado slices, cheddar, mozzarella and cooked ham. Served with cassava chips.", pt: "Pão de forma torrado recheado com ovos mexidos com salsinha, fatias de abacate, queijo cheddar, mozarela e presunto cozido. Acompanha chips de mandioca." }, price: "Gs. 48.000" },
      { id: "sw-07", name: { es: "Sándwich de verdura completo", en: "Loaded veggie sandwich", pt: "Sanduíche de legumes completo" }, desc: { es: "Pan de molde blanco o integral fresco, picadito de huevo duro con mayo casera, jamón cocido, queso mozzarella, lechuga y rodajas de tomate. Viene con mandioquitas chips.", en: "Fresh white or whole wheat sandwich bread, chopped hard-boiled egg with homemade mayo, cooked ham, mozzarella, lettuce and tomato slices. Served with cassava chips.", pt: "Pão de forma branco ou integral fresco, ovo cozido picado com maionese caseira, presunto cozido, mozarela, alface e fatias de tomate. Acompanha chips de mandioca." }, price: "Gs. 42.000" },
      { id: "sw-08", name: { es: "Pita de falafel", en: "Falafel pita", pt: "Pita de falafel" }, desc: { es: "Pan de pita tostado, hummus, falafel, pepino, ensaladita fattoush y espinaca. Viene con picante, fattoush y tzatziki. Opción vegana: en vez de tzatziki, hummus.", en: "Toasted pita bread, hummus, falafel, cucumber, fattoush salad and spinach. Served with hot sauce, fattoush and tzatziki. Vegan option: hummus instead of tzatziki.", pt: "Pão pita torrado, homus, falafel, pepino, saladinha fattoush e espinafre. Acompanha molho picante, fattoush e tzatziki. Opção vegana: homus no lugar do tzatziki." }, price: "Gs. 50.000" },
      { id: "sw-09", name: { es: "Focaccia italiana", en: "Italian focaccia", pt: "Focaccia italiana" }, desc: { es: "Focaccia de romero y aceitunas, pesto de albahaca, queso mozzarella, roquefort, tomate natural, tomates secos, rúcula, espinaca y aceite de oliva. Viene con mandioquitas chips.", en: "Rosemary and olive focaccia, basil pesto, mozzarella, blue cheese, fresh tomato, sun-dried tomatoes, arugula, spinach and olive oil. Served with cassava chips.", pt: "Focaccia de alecrim e azeitonas, pesto de manjericão, mozarela, roquefort, tomate natural, tomate seco, rúcula, espinafre e azeite. Acompanha chips de mandioca." }, price: "Gs. 58.000" },
      { id: "sw-10", name: { es: "Club sándwich", en: "Club sandwich", pt: "Sanduíche club" }, desc: { es: "Pan de molde tostado, mayo casera, queso mozzarella, jamón de pavo, panceta crocante, tomate y lechuga arrepollada. Viene con papas fritas y salsa barbacoa.", en: "Toasted sandwich bread, homemade mayo, mozzarella, turkey ham, crispy bacon, tomato and shredded lettuce. Served with fries and barbecue sauce.", pt: "Pão de forma torrado, maionese caseira, mozarela, presunto de peru, bacon crocante, tomate e alface picada. Acompanha batata frita e molho barbecue." }, price: "Gs. 70.000" },
      { id: "sw-11", name: { es: "Tostado de lomito", en: "Toasted beef tenderloin sandwich", pt: "Tostado de lombinho" }, price: "Gs. 78.000" },
      { id: "sw-12", name: { es: "Tostado de pollo", en: "Toasted chicken sandwich", pt: "Tostado de frango" }, price: "Gs. 69.000" },
      { id: "sw-13", name: { es: "Tostado vegetariano", en: "Vegetarian toasted sandwich", pt: "Tostado vegetariano" }, desc: { es: "Pan árabe tostado, mayo casera, queso mozzarella, verduras salteadas (cebollas, zanahorias, morrones rojos, amarillos y locote verde) y un toque de perejil. Viene con salsa picante y alioli.", en: "Toasted pita bread, homemade mayo, mozzarella, sautéed vegetables (onion, carrot, red and yellow peppers, green bell pepper) and a touch of parsley. Served with hot sauce and aioli.", pt: "Pão árabe tostado, maionese caseira, mozarela, legumes salteados (cebola, cenoura, pimentão vermelho, amarelo e verde) e um toque de salsinha. Acompanha molho picante e alioli." }, price: "Gs. 65.000" },
      { id: "sw-14", name: { es: "Bocata de bifecito", en: "Steak bocata", pt: "Bocata de bifinho" }, desc: { es: "Pan baguette, mayonesa casera, lechuga arrepollada, tomate natural, bifecitos de lomito y panceta crocante. Viene con papas fritas y potecito de alioli.", en: "Baguette, homemade mayo, shredded lettuce, fresh tomato, small beef tenderloin steaks and crispy bacon. Served with fries and a small pot of aioli.", pt: "Baguete, maionese caseira, alface picada, tomate natural, bifinhos de lombo e bacon crocante. Acompanha batata frita e potinho de alioli." }, price: "Gs. 78.000" },
      { id: "sw-15", name: { es: "Bocata pollo club", en: "Chicken club bocata", pt: "Bocata frango club" }, desc: { es: "Pan baguette, mayo casera, pollo salteado, panceta crocante, queso mozzarella, jamón pavita, tomate y lechuga. Viene con papas fritas y potecito de salsa barbacoa.", en: "Baguette, homemade mayo, sautéed chicken, crispy bacon, mozzarella, turkey ham, tomato and lettuce. Served with fries and a small pot of barbecue sauce.", pt: "Baguete, maionese caseira, frango salteado, bacon crocante, mozarela, presunto de peru, tomate e alface. Acompanha batata frita e potinho de molho barbecue." }, price: "Gs. 74.000" }
    ]
  },

  // 15. POTENTES ----------------------------------------------------------------
  {
    id: "potentes",
    title: { es: "Potentes", en: "Hearty Mains", pt: "Robustos" },
    note: { es: "Podés elegir papas fritas, batatas fritas, mandiocas fritas o ensaladita. Vienen con salsa picante y salsa alioli.", en: "Choose fries, sweet potato fries, cassava fries or a small salad. Served with hot sauce and aioli.", pt: "Escolha batata frita, batata-doce frita, mandioca frita ou saladinha. Acompanha molho picante e alioli." },
    items: [
      { id: "pot-01", name: { es: "Chabata de lomito roquefort", en: "Beef tenderloin and blue cheese ciabatta", pt: "Chabata de lombo com roquefort" }, desc: { es: "Pan ciabatta tostado, mayo casera, lomito salteado en salsa de soja con champiñones, queso roquefort, tomate fresco, espinaca y rúcula.", en: "Toasted ciabatta, homemade mayo, beef tenderloin sautéed in soy sauce with mushrooms, blue cheese, fresh tomato, spinach and arugula.", pt: "Ciabatta torrada, maionese caseira, lombo salteado em molho de soja com champignon, queijo roquefort, tomate fresco, espinafre e rúcula." }, price: "Gs. 92.000" },
      { id: "pot-02", name: { es: "Chabata de pollo gruyere", en: "Chicken and gruyère ciabatta", pt: "Chabata de frango com gruyère" }, desc: { es: "Pan ciabatta tostado, salsa de mostaza de dijón, pollo salteado, panceta crocante, queso gruyere, morrones asados, rodajas de aguacate y lechuga arrepollada.", en: "Toasted ciabatta, dijon mustard sauce, sautéed chicken, crispy bacon, gruyère cheese, roasted peppers, avocado slices and shredded lettuce.", pt: "Ciabatta torrada, molho de mostarda dijon, frango salteado, bacon crocante, queijo gruyère, pimentão assado, fatias de abacate e alface picada." }, price: "Gs. 72.000" },
      { id: "pot-03", name: { es: "Lomito callejero", en: "Street-style beef tenderloin sandwich", pt: "Lombinho de rua" }, desc: { es: "Pan tipo brioche, mayonesa casera, lomito a la plancha, queso mozzarella, huevo frito, lechuga arrepollada y tomate.", en: "Brioche bun, homemade mayo, grilled beef tenderloin, mozzarella, fried egg, shredded lettuce and tomato.", pt: "Pão brioche, maionese caseira, lombo grelhado, mozarela, ovo frito, alface picada e tomate." }, price: "Gs. 66.000" },
      { id: "pot-04", name: { es: "Sándwich de milanesa de lomito", en: "Breaded beef tenderloin sandwich", pt: "Sanduíche de milanesa de lombo" }, desc: { es: "Pan tipo brioche, mayo casera, milanesa de lomito, queso mozzarella, jamón cocido, huevo frito, lechuga y tomate.", en: "Brioche bun, homemade mayo, breaded beef tenderloin cutlet, mozzarella, cooked ham, fried egg, lettuce and tomato.", pt: "Pão brioche, maionese caseira, milanesa de lombo, mozarela, presunto cozido, ovo frito, alface e tomate." }, price: "Gs. 70.000" },
      { id: "pot-05", name: { es: "Hamburguesa pollo crispy", en: "Crispy chicken burger", pt: "Hambúrguer de frango crocante" }, desc: { es: "Pan tipo brioche, mayo casera, salsa barbacoa, pechuga apanada, panceta crocante, coleslaw, pepinillos, lechuga y tomate.", en: "Brioche bun, homemade mayo, barbecue sauce, breaded chicken breast, crispy bacon, coleslaw, pickles, lettuce and tomato.", pt: "Pão brioche, maionese caseira, molho barbecue, peito empanado, bacon crocante, coleslaw, picles, alface e tomate." }, price: "Gs. 65.000" },
      { id: "pot-06", name: { es: "Hamburguesa yankee", en: "Yankee burger", pt: "Hambúrguer yankee" }, desc: { es: "Pan tipo brioche, mayo casera, salsa barbacoa, medallón de carne, queso cheddar, panceta crocante, pepinillos, cebolla morada, lechuga y tomate.", en: "Brioche bun, homemade mayo, barbecue sauce, beef patty, cheddar, crispy bacon, pickles, red onion, lettuce and tomato.", pt: "Pão brioche, maionese caseira, molho barbecue, hambúrguer de carne, queijo cheddar, bacon crocante, picles, cebola roxa, alface e tomate." }, price: "Gs. 75.000" },
      { id: "pot-07", name: { es: "Doble bacon cheeseburger", en: "Double bacon cheeseburger", pt: "Duplo bacon cheeseburger" }, desc: { es: "Pan tipo brioche, mayo casera, doble medallón de carne (300 g), doble queso cheddar, panceta crocante y pepinillos.", en: "Brioche bun, homemade mayo, double beef patty (300 g), double cheddar, crispy bacon and pickles.", pt: "Pão brioche, maionese caseira, hambúrguer duplo de carne (300 g), cheddar em dobro, bacon crocante e picles." }, price: "Gs. 78.000" },
      { id: "pot-08", name: { es: "Cheeseburger", en: "Cheeseburger", pt: "Cheeseburger" }, desc: { es: "Pan tipo brioche, mayo casera, medallón de carne y queso cheddar.", en: "Brioche bun, homemade mayo, beef patty and cheddar cheese.", pt: "Pão brioche, maionese caseira, hambúrguer de carne e queijo cheddar." }, price: "Gs. 56.000" }
    ]
  },

  // 16. BURRITOS -----------------------------------------------------------------
  {
    id: "burritos",
    title: { es: "Burritos", en: "Burritos", pt: "Burritos" },
    note: { es: "Especial para compartir.", en: "Great for sharing.", pt: "Ótimo para compartilhar." },
    items: [
      { id: "bur-01", name: { es: "Burrito de lomito", en: "Beef tenderloin burrito", pt: "Burrito de lombo" }, desc: { es: "Tortilla de trigo, carne picadita, salteado de morrones, cebollas encurtidas, queso mozzarella, queso cheddar y cilantro. Viene con totopos de maíz, guacamole, pico de gallo y picante chipotle.", en: "Wheat tortilla, chopped beef, sautéed peppers, pickled onions, mozzarella, cheddar and cilantro. Served with corn chips, guacamole, pico de gallo and chipotle salsa.", pt: "Tortilha de trigo, carne picadinha, pimentão salteado, cebola em conserva, mozarela, cheddar e coentro. Acompanha nachos, guacamole, pico de gallo e molho chipotle." }, price: "Gs. 85.000" },
      { id: "bur-02", name: { es: "Burrito de pollo", en: "Chicken burrito", pt: "Burrito de frango" }, desc: { es: "Tortilla de trigo, carne picadita, salteado de morrones, cebollas encurtidas, queso mozzarella, queso cheddar y cilantro. Viene con totopos de maíz, guacamole, pico de gallo y picante chipotle.", en: "Wheat tortilla, sautéed peppers, pickled onions, mozzarella, cheddar and cilantro. Served with corn chips, guacamole, pico de gallo and chipotle salsa.", pt: "Tortilha de trigo, pimentão salteado, cebola em conserva, mozarela, cheddar e coentro. Acompanha nachos, guacamole, pico de gallo e molho chipotle." }, price: "Gs. 76.000" },
      { id: "bur-03", name: { es: "Burrito vegetariano", en: "Vegetarian burrito", pt: "Burrito vegetariano" }, desc: { es: "Tortilla de trigo, salteado de champiñones y morrones, cebollas encurtidas, queso mozzarella, queso cheddar y cilantro. Viene con totopos de maíz, guacamole, pico de gallo y picante chipotle.", en: "Wheat tortilla, sautéed mushrooms and peppers, pickled onions, mozzarella, cheddar and cilantro. Served with corn chips, guacamole, pico de gallo and chipotle salsa.", pt: "Tortilha de trigo, champignon e pimentão salteados, cebola em conserva, mozarela, cheddar e coentro. Acompanha nachos, guacamole, pico de gallo e molho chipotle." }, price: "Gs. 72.000" }
    ],
    callouts: [
      {
        title: { es: "Adicionales", en: "Extras", pt: "Adicionais" },
        lines: [
          { es: "Totopos de maíz • Mandioquitas chips — Gs. 12.000", en: "Corn chips • Cassava chips — Gs. 12,000", pt: "Nachos • Chips de mandioca — Gs. 12.000" },
          { es: "Queso Paraguay • Mozzarella • Gruyere • Parmesano • Roquefort • Cheddar — Gs. 10.000", en: "Paraguayan cheese • Mozzarella • Gruyère • Parmesan • Blue cheese • Cheddar — Gs. 10,000", pt: "Queijo paraguaio • Mozarela • Gruyère • Parmesão • Roquefort • Cheddar — Gs. 10.000" },
          { es: "Panceta crocante • Jamón cocido • Aguacate — Gs. 10.000", en: "Crispy bacon • Cooked ham • Avocado — Gs. 10,000", pt: "Bacon crocante • Presunto cozido • Abacate — Gs. 10.000" },
          { es: "Jamón de pavo • Tomates secos — Gs. 12.000", en: "Turkey ham • Sun-dried tomatoes — Gs. 12,000", pt: "Presunto de peru • Tomate seco — Gs. 12.000" },
          { es: "Jamón serrano • Ensaladita — Gs. 20.000", en: "Cured ham • Small salad — Gs. 20,000", pt: "Presunto cru • Saladinha — Gs. 20.000" },
          { es: "Medallón de hamburguesa — Gs. 25.000", en: "Burger patty — Gs. 25,000", pt: "Hambúrguer (carne) — Gs. 25.000" },
          { es: "Adicional lomito (150 g) — Gs. 30.000", en: "Extra beef tenderloin (150 g) — Gs. 30,000", pt: "Adicional de lombo (150 g) — Gs. 30.000" },
          { es: "Adicional pollo (150 g) — Gs. 20.000", en: "Extra chicken (150 g) — Gs. 20,000", pt: "Adicional de frango (150 g) — Gs. 20.000" }
        ]
      }
    ]
  },

  // 17. LIVIANOS -----------------------------------------------------------------
  {
    id: "livianos",
    title: { es: "Livianos", en: "Light Options", pt: "Leves" },
    note: { es: "Vienen con tostaditas de la casa.", en: "Served with house-made little toasts.", pt: "Acompanha torradinhas da casa." },
    items: [
      { id: "liv-01", name: { es: "Salteado oriental", en: "Oriental stir-fry", pt: "Salteado oriental" }, desc: { es: "Lomito, pollo o champiñones, verduras salteadas con aceite de sésamo, salsa de soja, repollo morado, brote de soja y semilla de sésamo tostado. Viene con salsa de soja.", en: "Beef tenderloin, chicken or mushrooms, vegetables sautéed in sesame oil, soy sauce, purple cabbage, bean sprouts and toasted sesame seeds. Served with soy sauce.", pt: "Lombo, frango ou champignon, legumes salteados em óleo de gergelim, molho de soja, repolho roxo, broto de soja e gergelim torrado. Acompanha molho de soja." }, price: "Lomito Gs. 89.000 · Pollo Gs. 80.000 · Vegetariano Gs. 76.000" },
      { id: "liv-02", name: { es: "Ensalada de rúcula y parmesano", en: "Arugula and parmesan salad", pt: "Salada de rúcula com parmesão" }, desc: { es: "Rúcula, espinaca y lechuga, tomates cherry, tomates secos, queso parmesano, nueces tostadas y reducción de aceto balsámico. Viene con pesto de albahaca y nueces.", en: "Arugula, spinach and lettuce, cherry tomatoes, sun-dried tomatoes, parmesan, toasted walnuts and balsamic reduction. Served with basil-walnut pesto.", pt: "Rúcula, espinafre e alface, tomate cereja, tomate seco, parmesão, nozes torradas e redução de balsâmico. Acompanha pesto de manjericão e nozes." }, price: "Gs. 78.000" },
      { id: "liv-03", name: { es: "Ensalada de campo", en: "Country salad", pt: "Salada do campo" }, desc: { es: "Mezclum de verdes, aguacate, tomates cherry, queso gruyere, huevo duro, semillas de sésamo negro y semillas de girasol. Viene con vinagreta casera.", en: "Mixed greens, avocado, cherry tomatoes, gruyère, hard-boiled egg, black sesame seeds and sunflower seeds. Served with homemade vinaigrette.", pt: "Mix de folhas verdes, abacate, tomate cereja, queijo gruyère, ovo cozido, gergelim preto e sementes de girassol. Acompanha vinagrete caseiro." }, price: "Gs. 60.000" },
      { id: "liv-04", name: { es: "Ensalada César", en: "Caesar salad", pt: "Salada César" }, desc: { es: "Lechuga arrepollada, salteado de pollo, panceta crocante, queso mozzarella y la clásica salsita César.", en: "Shredded lettuce, sautéed chicken, crispy bacon, mozzarella and classic Caesar dressing.", pt: "Alface picada, frango salteado, bacon crocante, mozarela e o clássico molho César." }, price: "Gs. 67.000" },
      { id: "liv-05", name: { es: "Omelette", en: "Omelette", pt: "Omelete" }, desc: { es: "De cuatro huevos y una ensaladita de lechuga arrepollada, rúcula, espinaca, tomates cherry y aceite de oliva. Ver opciones de adicionales para agregarle.", en: "Made with four eggs, served with a small salad of shredded lettuce, arugula, spinach, cherry tomatoes and olive oil. See extras to add toppings.", pt: "Feito com quatro ovos, acompanha saladinha de alface picada, rúcula, espinafre, tomate cereja e azeite. Veja os adicionais para incrementar." }, price: "Gs. 40.000" }
    ]
  },

  // 18. VARE'A JEFE — PICADAS -----------------------------------------------------
  {
    id: "picadas",
    superTitle: { es: "Vare'a Jefe", en: "Boss-Level Spread", pt: "Vare'a Jefe" },
    title: { es: "Picadas", en: "Sharing Platters", pt: "Tábuas para Compartilhar" },
    items: [
      { id: "pic-01", name: { es: "Marineritas de lomito", en: "Beef tenderloin \"marineritas\"", pt: "Marineritas de lombo" }, desc: { es: "Tortillitas rellenas con carne acompañadas de mandioquitas fritas, salsa alioli, picante y limón.", en: "Small filled beef tortillas served with fried cassava sticks, aioli, hot sauce and lime.", pt: "Tortilhas pequenas recheadas de carne, acompanhadas de mandioquinha frita, alioli, molho picante e limão." }, price: "Gs. 115.000" },
      { id: "pic-02", name: { es: "Surtidito típico", en: "Traditional sampler", pt: "Sortido típico" }, desc: { es: "Pastel mandi'o, pajagua mascada, mbeju clásico y bolitas de mandioca y queso. Vienen con salsa alioli, picante y limón.", en: "Cassava pastel, pajagua mascada, classic mbeju and cassava-cheese balls. Served with aioli, hot sauce and lime.", pt: "Pastel de mandioca, pajaguá mascada, mbeju clássico e bolinhas de mandioca com queijo. Acompanha alioli, molho picante e limão." }, price: "32 bocaditos Gs. 120.000 · 16 bocaditos Gs. 64.000" },
      { id: "pic-03", name: { es: "Bocaditos tradicionales (30 bocaditos)", en: "Traditional bites (30 pcs.)", pt: "Bocadinhos tradicionais (30 unid.)" }, desc: { es: "Empanaditas de carne, croquetitas de jamón pavita, empanaditas de pollo, milanesitas de lomito y empanaditas de jamón y queso. Vienen con salsa alioli, salsa picante y limón.", en: "Beef mini empanadas, turkey ham croquettes, chicken mini empanadas, beef tenderloin mini cutlets and ham & cheese mini empanadas. Served with aioli, hot sauce and lime.", pt: "Mini empanadas de carne, croquetes de presunto de peru, mini empanadas de frango, mini milanesas de lombo e mini empanadas de presunto e queijo. Acompanha alioli, molho picante e limão." }, price: "Gs. 120.000" },
      { id: "pic-04", name: { es: "Picada árabe", en: "Arab-style platter", pt: "Tábua árabe" }, desc: { es: "8 croquetitas de falafel, hummus, salsa tzatziki, ensaladita tipo fattoush, bastoncitos de zanahoria y pepino. Viene con una canastita de pan de pita tostado. Opción vegana: hummus en vez de tzatziki.", en: "8 falafel bites, hummus, tzatziki sauce, fattoush-style salad, carrot and cucumber sticks. Served with a small basket of toasted pita bread. Vegan option: hummus instead of tzatziki.", pt: "8 croquetes de falafel, homus, molho tzatziki, saladinha fattoush, palitos de cenoura e pepino. Acompanha uma cestinha de pão pita torrado. Opção vegana: homus no lugar do tzatziki." }, price: "Gs. 80.000" },
      { id: "pic-05", name: { es: "Tortillitas de la casa", en: "House tortillitas", pt: "Tortilhinhas da casa" }, desc: { es: "Típica masa casera con queso paraguay y cebollita de hoja. Viene con limón y salsa picante.", en: "Traditional homemade dough with Paraguayan cheese and chives. Served with lime and hot sauce.", pt: "Massa caseira tradicional com queijo paraguaio e cebolinha. Acompanha limão e molho picante." }, price: "Gs. 40.000" },
      { id: "pic-06", name: { es: "Bolitas de mandioca y queso", en: "Cassava and cheese balls", pt: "Bolinhas de mandioca e queijo" }, desc: { es: "Rellenas de mozzarella rebozadas con queso parmesano. Vienen con salsa picante.", en: "Filled with mozzarella and coated in parmesan. Served with hot sauce.", pt: "Recheadas com mozarela e empanadas com parmesão. Acompanha molho picante." }, price: "Gs. 45.000" },
      { id: "pic-07", name: { es: "Papas, mandiocas o batatas fritas", en: "Fries: potato, cassava or sweet potato", pt: "Batata, mandioca ou batata-doce frita" }, price: "Gs. 18.000" }
    ],
    note: { es: "Productos sin derivados de origen animal (apto vegano) marcados en la carta.", en: "Items free of animal derivatives (vegan-friendly) are marked on the menu.", pt: "Itens sem derivados de origem animal (veganos) estão marcados no cardápio." }
  },

  // 19. BEBIDAS HELADAS -----------------------------------------------------------
  {
    id: "bebidas-heladas",
    superTitle: { es: "Se vende", en: "We sell", pt: "Vende-se" },
    title: { es: "Bebidas Heladas", en: "Cold Drinks", pt: "Bebidas Geladas" },
    subsections: [
      {
        title: { es: "Jugos Naturales", en: "Fresh Juices", pt: "Sucos Naturais" },
        items: [
          { id: "jugo-01", name: { es: "Vaso de exprimido de naranja", en: "Fresh-squeezed orange juice", pt: "Copo de suco de laranja espremido" }, price: "Gs. 25.000" },
          { id: "jugo-02", name: { es: "Vaso de licuado de durazno", en: "Peach smoothie", pt: "Copo de vitamina de pêssego" }, price: "Gs. 25.000" }
        ]
      },
      {
        title: { es: "Jarritas (500 ml / 1 litro)", en: "Pitchers (500 ml / 1 liter)", pt: "Jarrinhas (500 ml / 1 litro)" },
        note: { es: "Vienen endulzadas con azúcar.", en: "Served pre-sweetened with sugar.", pt: "Vem adoçado com açúcar." },
        items: [
          { id: "jarrita-01", name: { es: "Piñada", en: "Pineapple-mint pitcher", pt: "Jarrinha de abacaxi com hortelã" }, desc: { es: "Piña y menta.", en: "Pineapple and mint.", pt: "Abacaxi e hortelã." }, price: "500 ml Gs. 30.000 · 1 L Gs. 60.000" },
          { id: "jarrita-02", name: { es: "Pomelada", en: "Grapefruit pitcher", pt: "Jarrinha de toranja" }, desc: { es: "Pomelo y cedrón kapi'i.", en: "Grapefruit and lemongrass.", pt: "Toranja e capim-cidreira." }, price: "500 ml Gs. 30.000 · 1 L Gs. 60.000" },
          { id: "jarrita-03", name: { es: "Limonada", en: "Lemonade pitcher", pt: "Jarrinha de limonada" }, desc: { es: "Limón, jengibre y menta.", en: "Lemon, ginger and mint.", pt: "Limão, gengibre e hortelã." }, price: "500 ml Gs. 30.000 · 1 L Gs. 60.000" },
          { id: "jarrita-04", name: { es: "Verde", en: "Green pitcher", pt: "Jarrinha verde" }, desc: { es: "Limón, apio, perejil y menta.", en: "Lemon, celery, parsley and mint.", pt: "Limão, aipo, salsinha e hortelã." }, price: "500 ml Gs. 30.000 · 1 L Gs. 60.000" },
          { id: "jarrita-05", name: { es: "Durazno", en: "Peach pitcher", pt: "Jarrinha de pêssego" }, desc: { es: "Licuado puro.", en: "Pure peach smoothie.", pt: "Vitamina pura de pêssego." }, price: "500 ml Gs. 30.000 · 1 L Gs. 60.000" },
          { id: "jarrita-06", name: { es: "Naranja", en: "Orange pitcher", pt: "Jarrinha de laranja" }, desc: { es: "Exprimido puro, sin endulzar.", en: "Pure-squeezed, unsweetened.", pt: "Espremido puro, sem açúcar." }, price: "500 ml Gs. 30.000 · 1 L Gs. 60.000" }
        ]
      },
      {
        title: { es: "Frozen de Frutas", en: "Frozen Fruit Drinks", pt: "Frozen de Frutas" },
        note: { es: "Vienen endulzados con azúcar.", en: "Served pre-sweetened with sugar.", pt: "Vem adoçado com açúcar." },
        items: [
          { id: "frozen-01", name: { es: "Frutilla", en: "Strawberry frozen", pt: "Frozen de morango" }, price: "Gs. 30.000" },
          { id: "frozen-02", name: { es: "Tutti frutti", en: "Tutti frutti frozen", pt: "Frozen tutti frutti" }, price: "Gs. 30.000" },
          { id: "frozen-03", name: { es: "Durazno", en: "Peach frozen", pt: "Frozen de pêssego" }, price: "Gs. 30.000" },
          { id: "frozen-04", name: { es: "Apasionado", en: "Passion frozen", pt: "Frozen apaixonado" }, desc: { es: "Mburucuyá, durazno y naranja.", en: "Passion fruit, peach and orange.", pt: "Maracujá, pêssego e laranja." }, price: "Gs. 30.000" },
          { id: "frozen-05", name: { es: "Aloja", en: "Aloja (cane honey frozen)", pt: "Aloja" }, desc: { es: "Batido de miel de caña, exprimido de limón y mucho hielo.", en: "Cane honey blended with fresh lime juice and plenty of ice.", pt: "Batido de mel de cana, suco de limão espremido e bastante gelo." }, price: "Gs. 24.000" }
        ]
      },
      {
        title: { es: "Aguas y Gaseosas", en: "Water & Soft Drinks", pt: "Águas e Refrigerantes" },
        items: [
          { id: "agua-01", name: { es: "Dasani con o sin gas", en: "Dasani still or sparkling", pt: "Dasani com ou sem gás" }, price: "Gs. 10.000" },
          { id: "agua-02", name: { es: "Productos Coca-Cola", en: "Coca-Cola products", pt: "Produtos Coca-Cola" }, price: "Gs. 12.000" }
        ]
      },
      {
        title: { es: "Cócteles", en: "Cocktails", pt: "Coquetéis" },
        items: [
          { id: "cok-01", name: { es: "Gin tonic", en: "Gin & tonic", pt: "Gin tônica" }, desc: { es: "Gin, agua tónica, hielo y limón.", en: "Gin, tonic water, ice and lime.", pt: "Gin, água tônica, gelo e limão." }, price: "Gs. 45.000" },
          { id: "cok-02", name: { es: "Aperol Spritz", en: "Aperol Spritz", pt: "Aperol Spritz" }, desc: { es: "Aperol, vino blanco espumante, rodajas de naranja, soda y mucho hielo.", en: "Aperol, sparkling white wine, orange slices, soda and plenty of ice.", pt: "Aperol, vinho branco espumante, rodelas de laranja, soda e bastante gelo." }, price: "Gs. 35.000" },
          { id: "cok-03", name: { es: "Mimosa", en: "Mimosa", pt: "Mimosa" }, desc: { es: "Exprimido de naranja, vino espumante blanco y una rodaja de naranja.", en: "Fresh orange juice, sparkling white wine and an orange slice.", pt: "Suco de laranja espremido, vinho espumante branco e uma rodela de laranja." }, price: "Gs. 36.000" },
          { id: "cok-04", name: { es: "Caipiriña", en: "Caipirinha", pt: "Caipirinha" }, price: "Gs. 29.000" },
          { id: "cok-05", name: { es: "Caipiroska", en: "Caipiroska", pt: "Caipiroska" }, desc: { es: "Cachaza o vodka, exprimido de limón, almíbar de azúcar, rodajas de limón y mucho hielo.", en: "Cachaça or vodka, fresh lime juice, simple syrup, lime slices and plenty of ice.", pt: "Cachaça ou vodka, suco de limão espremido, calda de açúcar, rodelas de limão e bastante gelo." }, price: "Gs. 35.000" },
          { id: "cok-06", name: { es: "Ka'u Aloja", en: "Ka'u Aloja", pt: "Ka'u Aloja" }, desc: { es: "Batido de miel de caña, exprimido de limón, caña paraguaya suave 8 años, hielo y ralladura de limón.", en: "Cane honey blended with fresh lime juice, smooth 8-year Paraguayan cane liquor, ice and lime zest.", pt: "Batido de mel de cana, suco de limão espremido, cana paraguaia suave de 8 anos, gelo e raspas de limão." }, price: "Gs. 33.000" },
          { id: "cok-07", name: { es: "Cañete", en: "Cañete", pt: "Cañete" }, desc: { es: "Exprimido de pomelo, caña paraguaya suave 8 años, miel de abeja, cedrón kapi'i y hielo.", en: "Fresh grapefruit juice, smooth 8-year Paraguayan cane liquor, honey, lemongrass and ice.", pt: "Suco de toranja espremido, cana paraguaia suave de 8 anos, mel de abelha, capim-cidreira e gelo." }, price: "Gs. 29.000" },
          { id: "cok-08", name: { es: "Raya de caña paraguaya", en: "Paraguayan cane liquor shot", pt: "Dose de cana paraguaia" }, desc: { es: "Ron suave etiqueta negra, 8 años.", en: "Smooth black label rum, aged 8 years.", pt: "Rum suave rótulo preto, 8 anos." }, price: "Gs. 15.000" }
        ]
      },
      {
        title: { es: "Vinos", en: "Wines", pt: "Vinhos" },
        items: [
          { id: "vino-01", name: { es: "Santa Julia Chardonnay (por copa, 187 ml)", en: "Santa Julia Chardonnay (by the glass, 187 ml)", pt: "Santa Julia Chardonnay (taça, 187 ml)" }, price: "Gs. 40.000" },
          { id: "vino-02", name: { es: "Santa Julia Malbec (por copa, 187 ml)", en: "Santa Julia Malbec (by the glass, 187 ml)", pt: "Santa Julia Malbec (taça, 187 ml)" }, price: "Gs. 40.000" },
          { id: "vino-03", name: { es: "Santa Julia Chenin Dulce Natural (blanco)", en: "Santa Julia Chenin Dulce Natural (white)", pt: "Santa Julia Chenin Dulce Natural (branco)" }, price: "Gs. 105.000" },
          { id: "vino-04", name: { es: "La Oveja Blanco Torrontés Natural (blanco)", en: "La Oveja Torrontés Natural (white)", pt: "La Oveja Torrontés Natural (branco)" }, price: "Gs. 160.000" },
          { id: "vino-05", name: { es: "Zuccardi Serie A Malbec (tinto)", en: "Zuccardi Serie A Malbec (red)", pt: "Zuccardi Série A Malbec (tinto)" }, price: "Gs. 145.000" },
          { id: "vino-06", name: { es: "La Vaquita Clarete Malbec-Torrontés (tinto)", en: "La Vaquita Clarete Malbec-Torrontés (red)", pt: "La Vaquita Clarete Malbec-Torrontés (tinto)" }, price: "Gs. 160.000" },
          { id: "vino-07", name: { es: "Nieto Senetiner Brut Nature (espumante)", en: "Nieto Senetiner Brut Nature (sparkling)", pt: "Nieto Senetiner Brut Nature (espumante)" }, price: "Gs. 160.000" }
        ]
      },
      {
        title: { es: "Cervezas", en: "Beers", pt: "Cervejas" },
        items: [
          { id: "cerv-01", name: { es: "Pilsen Chopp 300 ml", en: "Pilsen Draft 300 ml", pt: "Pilsen Chopp 300 ml" }, price: "Gs. 20.000" },
          { id: "cerv-02", name: { es: "Michelob Ultra (botellita)", en: "Michelob Ultra (bottle)", pt: "Michelob Ultra (garrafinha)" }, price: "Gs. 22.000" },
          { id: "cerv-03", name: { es: "Corona (botellita)", en: "Corona (bottle)", pt: "Corona (garrafinha)" }, price: "Gs. 25.000" },
          { id: "cerv-04", name: { es: "Corona 0,0% (botellita)", en: "Corona 0.0% (bottle)", pt: "Corona 0,0% (garrafinha)" }, price: "Gs. 25.000" }
        ]
      }
    ]
  }
];

const CAROUSEL_DATA = {
  cafeteria: {
    title: { es: "Cafetería", en: "Coffee Shop", pt: "Cafeteria" },
    slides: [
      { es: "Nuestra barra de café", en: "Our coffee bar", pt: "Nosso balcão de café" },
      { es: "Espresso recién hecho", en: "Freshly pulled espresso", pt: "Espresso fresquinho" },
      { es: "Rincón para trabajar y charlar", en: "A corner to work and chat", pt: "Um cantinho para trabalhar e conversar" }
    ]
  },
  pasteleria: {
    title: { es: "Pastelería", en: "Pastry", pt: "Confeitaria" },
    slides: [
      { es: "Vitrina de tortas y postres", en: "Our cake and dessert display", pt: "Vitrine de bolos e sobremesas" },
      { es: "Horneado fresco todos los días", en: "Freshly baked every day", pt: "Assado fresquinho todos os dias" },
      { es: "Dulces típicos paraguayos", en: "Traditional Paraguayan sweets", pt: "Doces típicos paraguaios" }
    ]
  },
  paraguay: {
    title: { es: "Temáticas Paraguayas", en: "Paraguayan Themes", pt: "Temas Paraguaios" },
    slides: [
      { es: "Mate y tereré, tradición de acá", en: "Mate and tereré, a tradition from here", pt: "Mate e tereré, tradição daqui" },
      { es: "Inspirado en el Paraguay que nos gusta", en: "Inspired by the Paraguay we love", pt: "Inspirado no Paraguai que a gente ama" },
      { es: "Sabores típicos en cada rincón", en: "Traditional flavors in every corner", pt: "Sabores típicos em cada cantinho" }
    ]
  }
};

const BRANCHES = [
  { name: "Villa Morra", mapsQuery: "El Café de Acá Villa Morra, Asunción, Paraguay" },
  { name: "Barrio Jara", mapsQuery: "El Café de Acá Barrio Jara, Asunción, Paraguay" },
  { name: "Los Laureles", mapsQuery: "El Café de Acá Los Laureles, Asunción, Paraguay" },
  { name: "Terrazas del Paseo La Galería", mapsQuery: "El Café de Acá Terrazas del Paseo La Galería, Asunción, Paraguay" }
];

const CONTACT_INFO = {
  whatsapp: "595973153040",
  instagram: "https://instagram.com/elcafedeaca",
  facebook: "https://facebook.com/elcafedeaca"
};
