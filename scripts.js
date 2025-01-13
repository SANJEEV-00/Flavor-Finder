document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        {
            id: 1,
            category: 'breakfast',
            title: 'Pancakes',
            image: 'https://via.placeholder.com/300',
            description: 'Fluffy pancakes with syrup and butter.'
        },
        {
            id: 2,
            category: 'lunch',
            title: 'Caesar Salad',
            image: 'https://via.placeholder.com/300',
            description: 'Crisp romaine lettuce with Caesar dressing.'
        },
        {
            id: 3,
            category: 'dinner',
            title: 'Spaghetti Bolognese',
            image: 'https://via.placeholder.com/300',
            description: 'Classic Italian pasta dish with a rich meat sauce.'
        }
    ];

    const recipeContainer = document.getElementById('recipe-container');

    function displayRecipes(recipesToDisplay) {
        recipeContainer.innerHTML = '';
        recipesToDisplay.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.classList.add('recipe');
            recipeElement.innerHTML = `
                <h2>${recipe.title}</h2>
                <img src="${recipe.image}" alt="${recipe.title}">
                <p>${recipe.description}</p>
            `;
            recipeContainer.appendChild(recipeElement);
        });
    }

    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            const filteredRecipes = category === 'all' ? recipes : recipes.filter(recipe => recipe.category === category);
            displayRecipes(filteredRecipes);
        });
    });

    // Display all recipes by default
    displayRecipes(recipes);
});
