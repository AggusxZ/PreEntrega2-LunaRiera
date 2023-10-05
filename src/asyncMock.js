const products = [
    {
        id: '1',
        name: 'Broforce',
        price: 1050,
        category: 'accion',
        img: 'https://media.vandal.net/t200/24765/broforce-201631181336_1.jpg',
        stock: 20,
        description: 'Broforce es una oda a la libertad de desplazamiento lateral repleta de acción en la que controlas a una organización paramilitar tan musculada como mal financiada que se especializa en el uso excesivo de la fuerza.'
    },
    {
        id: '2',
        name: 'Grounded',
        price: 8000,
        category: 'aventura',
        img: 'https://steamuserimages-a.akamaihd.net/ugc/2070011897340821721/E44FDFAC3C31BF1A60F74EF95767CCECC7F03F60/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        stock: 10,
        description: 'El mundo es un lugar vasto, hermoso y peligroso, especialmente cuando te han reducido al tamaño de una hormiga. ¿Podrás prosperar junto a las hordas de insectos gigantes, luchando por sobrevivir a los peligros del patio trasero?'
    },
    {
        id: '3',
        name: 'Age of Empires IV',
        price: 8000,
        category: 'estrategia',
        img: 'https://i.blogs.es/82e43a/age-of-empire-iv/200_200.jpg',
        stock: 15,
        description: 'Para celebrar su primer año cautivando a millones de jugadores en todo el mundo, la galardonada y exitosa franquicia de estrategia continúa con Age of Empires IV: Edición Aniversario, sumergiéndote en las épicas batallas históricas que cambiaron el mundo.'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        const filteredProducts = products.filter((prod) => prod.category === category);
        setTimeout(() => {
            resolve(filteredProducts);
        }, 500);
    });
};