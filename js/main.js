// Recipe Data - English Version
const recipes = [
    {
        id: 1,
        title: "Lasagna Bolognese",
        desc: "Layered Italian pasta with rich meat sauce and béchamel",
        rating: 4.9,
        reviews: 478,
        image: "image/photo-1574894709920-11b28e7367e3.avif", 
        tags: [
            {text: "Intermediate", class: "bg-green-light"}, 
            {text: "Italian", class: "bg-blue-light"}
        ],
        prep: "30 min", cook: "90 min", serve: "4 people",
        alert: {
            title: "Extended Preparation Time",
            text: "This recipe requires more than 45 minutes to prepare. Plan accordingly!"
        },
        ingredients: [
            "12 lasagna sheets",
            "500g ground beef",
            "400g canned tomatoes",
            "1 onion, diced",
            "2 carrots, diced",
            "500ml béchamel sauce",
            "200g mozzarella, grated",
            "100g parmesan cheese",
            "Fresh basil"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Sauté onion and carrots. Add beef and cook until browned.",
            "Add canned tomatoes and simmer for 20 mins.",
            "In a baking dish, spread a layer of meat sauce.",
            "Layer: pasta sheets, meat sauce, béchamel, mozzarella.",
            "Repeat layers 3 times.",
            "Top with parmesan. Bake for 45 mins until golden."
        ],
        nutrition: [
            {label: "Calories", val: "680 kcal", icon: "fa-fire", bgClass: "bg-cal"},
            {label: "Protein", val: "42g", icon: "fa-dumbbell", bgClass: "bg-pro"},
            {label: "Carbs", val: "58g", icon: "fa-wheat-awn", bgClass: "bg-carb"},
            {label: "Fat", val: "28g", icon: "fa-droplet", bgClass: "bg-fat"}
        ],
        tips: [
            "Make bolognese sauce a day ahead for better flavor.",
            "Don't skip the resting time after baking (15 mins).",
            "Use fresh pasta sheets for silky texture."
        ]
    },
    {
        id: 2,
        title: "Chicken Stir-Fry",
        desc: "Quick and healthy stir-fry with colorful vegetables and soy sauce",
        rating: 4.7,
        reviews: 320,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=2025&auto=format&fit=crop",
        tags: [
            {text: "Easy", class: "bg-green-light"}, 
            {text: "Asian", class: "bg-purple-light"}
        ],
        prep: "20 min", cook: "15 min", serve: "3 people",
        alert: null,
        ingredients: [
            "500g chicken breast, sliced",
            "2 bell peppers, sliced",
            "1 head broccoli, florets",
            "3 tbsp soy sauce",
            "1 tbsp sesame oil",
            "Minced ginger and garlic"
        ],
        instructions: [
            "Heat wok over high heat. Sear chicken until golden.",
            "Add ginger and garlic, stir for 1 minute.",
            "Add vegetables and sauces. Stir-fry on high heat for 5 mins.",
            "Serve hot over rice or noodles."
        ],
        nutrition: [
            {label: "Calories", val: "320 kcal", icon: "fa-fire", bgClass: "bg-cal"},
            {label: "Protein", val: "35g", icon: "fa-dumbbell", bgClass: "bg-pro"},
            {label: "Carbs", val: "18g", icon: "fa-wheat-awn", bgClass: "bg-carb"},
            {label: "Fat", val: "12g", icon: "fa-droplet", bgClass: "bg-fat"}
        ],
        tips: [
            "Chop all ingredients before you start cooking.",
            "Keep the heat very high for that smoky flavor."
        ]
    },
    {
        id: 3,
        title: "Classic Caesar Salad",
        desc: "Crispy romaine lettuce with creamy homemade dressing and croutons",
        rating: 4.5,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2070&auto=format&fit=crop",
        tags: [
            {text: "Easy", class: "bg-green-light"}, 
            {text: "Healthy", class: "bg-blue-light"}
        ],
        prep: "15 min", cook: "0 min", serve: "2 people",
        alert: null,
        ingredients: [
            "1 large romaine lettuce",
            "1/2 cup Caesar dressing",
            "Shaved parmesan cheese",
            "1 cup croutons",
            "Lemon wedges"
        ],
        instructions: [
            "Wash and dry the romaine lettuce thoroughly.",
            "Toss lettuce with dressing until coated.",
            "Add croutons and parmesan cheese.",
            "Serve immediately with a squeeze of lemon."
        ],
        nutrition: [
            {label: "Calories", val: "250 kcal", icon: "fa-fire", bgClass: "bg-cal"},
            {label: "Protein", val: "10g", icon: "fa-dumbbell", bgClass: "bg-pro"},
            {label: "Carbs", val: "15g", icon: "fa-wheat-awn", bgClass: "bg-carb"},
            {label: "Fat", val: "18g", icon: "fa-droplet", bgClass: "bg-fat"}
        ],
        tips: [
            "Use ice-cold water to wash lettuce for extra crunch.",
            "Add grilled chicken for a complete meal."
        ]
    },
    {
        id: 4,
        title: "Grilled Salmon",
        desc: "Healthy grilled salmon served with fresh asparagus and lemon",
        rating: 4.8,
        reviews: 215,
        image: "image/photo-1574894709920-11b28e7367e3.avif",
        tags: [
            {text: "Healthy", class: "bg-green-light"}, 
            {text: "Seafood", class: "bg-blue-light"}
        ],
        prep: "10 min", cook: "15 min", serve: "2 people",
        alert: null,
        ingredients: [
            "2 fresh salmon fillets",
            "Bunch of asparagus",
            "3 tbsp olive oil",
            "Lemon slices",
            "Fresh herbs (dill)"
        ],
        instructions: [
            "Season salmon with salt, pepper, and olive oil.",
            "Preheat the grill or pan to medium-high heat.",
            "Grill salmon for 4-5 minutes per side.",
            "Serve with grilled asparagus and lemon."
        ],
        nutrition: [
            {label: "Calories", val: "450 kcal", icon: "fa-fire", bgClass: "bg-cal"},
            {label: "Protein", val: "40g", icon: "fa-dumbbell", bgClass: "bg-pro"},
            {label: "Carbs", val: "5g", icon: "fa-wheat-awn", bgClass: "bg-carb"},
            {label: "Fat", val: "25g", icon: "fa-droplet", bgClass: "bg-fat"}
        ],
        tips: [
            "Do not overcook the salmon to keep it moist.",
            "Crispy skin adds amazing texture and flavor."
        ]
    },
    {
        id: 5,
        title: "Classic Cheeseburger",
        desc: "Juicy beef burger with melted cheddar cheese and fresh toppings",
        rating: 4.6,
        reviews: 850,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop",
        tags: [
            {text: "Easy", class: "bg-green-light"}, 
            {text: "American", class: "bg-purple-light"}
        ],
        prep: "20 min", cook: "10 min", serve: "4 people",
        alert: null,
        ingredients: [
            "500g ground beef",
            "4 brioche burger buns",
            "4 slices cheddar cheese",
            "Lettuce, tomato, onion",
            "Ketchup and mayonnaise"
        ],
        instructions: [
            "Form the beef into 4 equal patties.",
            "Season generously with salt and pepper.",
            "Grill patties for 3-4 minutes per side.",
            "Add cheese in the last minute to melt.",
            "Assemble burger with toasted buns and toppings."
        ],
        nutrition: [
            {label: "Calories", val: "750 kcal", icon: "fa-fire", bgClass: "bg-cal"},
            {label: "Protein", val: "30g", icon: "fa-dumbbell", bgClass: "bg-pro"},
            {label: "Carbs", val: "45g", icon: "fa-wheat-awn", bgClass: "bg-carb"},
            {label: "Fat", val: "40g", icon: "fa-droplet", bgClass: "bg-fat"}
        ],
        tips: [
            "Don't press down on the patties while grilling.",
            "Toast the buns with a little butter for best taste."
        ]
    }
];

let currentIndex = 0;

function renderRecipe(index) {
    const r = recipes[index];
    
    // Animate transition (simple fade)
    const card = document.querySelector('.recipe-card');
    card.style.opacity = '0';
    
    setTimeout(() => {
        // --- Populate Data ---

        // Header
        document.getElementById('recipe-title').textContent = r.title;
        document.getElementById('recipe-desc').textContent = r.desc;
        document.getElementById('recipe-img').src = r.image;
        document.getElementById('rating-val').textContent = r.rating;
        document.getElementById('review-count').textContent = `(${r.reviews} reviews)`;

        // Tags
        const tagsContainer = document.getElementById('tags-container');
        tagsContainer.innerHTML = '';
        r.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = `badge badge-pill ${tag.class}`;
            span.textContent = tag.text;
            tagsContainer.appendChild(span);
        });

        // Stats (Overlay)
        document.getElementById('prep-time').textContent = r.prep;
        document.getElementById('cook-time').textContent = r.cook;
        document.getElementById('servings').textContent = r.serve;

        // Alert
        const alertArea = document.getElementById('alert-area');
        if (r.alert) {
            alertArea.innerHTML = `
                <div class="alert-box">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <span class="alert-title">${r.alert.title}</span>
                        <span class="alert-desc">${r.alert.text}</span>
                    </div>
                </div>
            `;
        } else {
            alertArea.innerHTML = '';
        }

        // Ingredients (With the orange circles)
        const ingList = document.getElementById('ingredients-list');
        ingList.innerHTML = r.ingredients.map((item, i) => `
            <li><span class="num-circle">${i+1}</span> ${item}</li>
        `).join('');

        // Instructions
        const instList = document.getElementById('instructions-list');
        instList.innerHTML = r.instructions.map((item, i) => `
            <li class="mb-3 d-flex"><span class="fw-bold me-2 text-dark">${i+1}.</span> ${item}</li>
        `).join('');

        // Nutrition (Grid 2x2)
        const nutGrid = document.getElementById('nutrition-grid');
        nutGrid.innerHTML = r.nutrition.map(n => `
            <div class="col-6">
                <div class="nutri-card">
                    <div class="nutri-icon-box ${n.bgClass}">
                        <i class="fa-solid ${n.icon}"></i>
                    </div>
                    <div class="nutri-info">
                        <span class="nutri-label">${n.label}</span>
                        <span class="nutri-val">${n.val}</span>
                    </div>
                </div>
            </div>
        `).join('');

        // Tips
        const tipsList = document.getElementById('tips-list');
        tipsList.innerHTML = r.tips.map(tip => `
            <li class="mb-2"><i class="fa-solid fa-lightbulb text-warning me-2"></i> ${tip}</li>
        `).join('');

        // Reset Tab to Ingredients
        const firstTabEl = document.querySelector('.nav-link[data-bs-target="#ingredients"]');
        if (typeof bootstrap !== 'undefined') {
            const tab = new bootstrap.Tab(firstTabEl);
            tab.show();
        }

        // Fade back in
        card.style.opacity = '1';
        card.style.transition = 'opacity 0.3s ease';

    }, 200);
}

function nextRecipe() {
    currentIndex = (currentIndex + 1) % recipes.length;
    renderRecipe(currentIndex);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('next-recipe-btn').addEventListener('click', nextRecipe);
    renderRecipe(currentIndex);
});