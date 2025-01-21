const foodItems = [
    { name: "Pizza", image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a" }, { name: "Burger", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90" }, { name: "Pasta", image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a" }, { name: "Sushi", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90" }, { name: "Salad", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce" }, { name: "Tacos", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90" }, { name: "Ice Cream", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" }, { name: "Cake", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" }, { name: "Fries", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90" }, { name: "Smoothie", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" }, { name: "Waffles", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90" }, { name: "Steak", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce" },
];

// Populate food grid dynamically
const foodGrid = document.getElementById('foodGrid');
foodItems.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-md-4 food-item';
    col.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="img-fluid" data-bs-toggle="modal" data-bs-target="#foodModal" data-bs-name="${item.name}" data-bs-image="${item.image}" data-bs-description="${item.description}">
        <h5>${item.name}</h5>
    `;
    foodGrid.appendChild(col);
});

// Modal setup for displaying clicked food details
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalTitle = document.getElementById('foodModalLabel');

document.querySelectorAll('.food-item img').forEach(image => {
    image.addEventListener('click', (e) => {
        const name = e.target.getAttribute('data-bs-name');
        const img = e.target.getAttribute('data-bs-image');
        const description = e.target.getAttribute('data-bs-description');
        
        modalTitle.textContent = name;
        modalImage.src = img;
        modalDescription.textContent = description;
    });
});
