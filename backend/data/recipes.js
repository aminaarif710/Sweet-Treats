// src/data/recipes.js
export const recipes = {
  classic: [
    {
    id: "peach-cake",
    name: "Peach Cake",
    ingredients: ["2 cups flour", "1 cup sugar", "2 eggs", "1/2 cup butter", "1/2 cup milk", "2 peaches (sliced)"],
    steps: [
      "Preheat oven to 180°C (350°F).",
      "Cream butter and sugar together.",
      "Add eggs and milk, mix well.",
      "Fold in flour and combine.",
      "Pour batter into greased tin, top with peach slices.",
      "Bake for 35–40 minutes."
    ]
  },
  {
    id: "sticky-date-pudding",
    name: "Sticky Date Pudding",
    ingredients: ["1 cup dates (chopped)", "1 tsp baking soda", "1 cup boiling water", "1 cup flour", "1/2 cup sugar", "2 eggs", "1/4 cup butter"],
    steps: [
      "Soak dates in boiling water with baking soda.",
      "Beat butter and sugar, add eggs.",
      "Stir in flour and soaked dates.",
      "Pour into baking dish, bake at 180°C for 30 minutes.",
      "Serve with caramel sauce."
    ]
  },
  {
    id: "custard",
    name: "Homemade Custard",
    ingredients: ["2 cups milk", "3 egg yolks", "1/4 cup sugar", "1 tbsp cornstarch", "1 tsp vanilla"],
    steps: [
      "Heat milk in a saucepan until warm.",
      "Whisk yolks, sugar, and cornstarch.",
      "Slowly pour warm milk into egg mixture while whisking.",
      "Return to pan, cook until thickened.",
      "Add vanilla and serve warm."
    ]
  },
  {
    id: "lemon-pound-cake",
    name: "Lemon Pound Cake",
    ingredients: ["1 1/2 cups flour", "1 cup sugar", "1/2 cup butter", "2 eggs", "1/2 cup milk", "2 tbsp lemon juice", "1 tbsp lemon zest"],
    steps: [
      "Preheat oven to 175°C (350°F).",
      "Cream butter and sugar.",
      "Add eggs, lemon juice, and zest.",
      "Mix in flour and milk alternately.",
      "Bake for 40 minutes."
    ]
  },
  {
    id: "oatmeal-cookies",
    name: "Oatmeal Chocolate Chip Cookies",
    ingredients: ["1 cup oats", "1 cup flour", "1/2 cup butter", "1/2 cup sugar", "1 egg", "1/2 cup chocolate chips"],
    steps: [
      "Preheat oven to 180°C.",
      "Mix butter, sugar, and egg.",
      "Add oats, flour, and chocolate chips.",
      "Scoop onto tray and bake 12–15 minutes."
    ]
  },
  {
    id: "lime-coconut-cake",
    name: "Lime Coconut Cake",
    ingredients: ["2 cups flour", "1 cup sugar", "1/2 cup butter", "2 eggs", "1/2 cup coconut milk", "1 lime (juice & zest)"],
    steps: [
      "Preheat oven to 175°C.",
      "Cream butter and sugar.",
      "Add eggs, lime juice, and zest.",
      "Stir in flour and coconut milk.",
      "Bake for 35–40 minutes."
    ]
  },
  ],
  popular: [ /* same idea */
  // --- MOST POPULAR ---
  {
    id: "chocolate-cake",
    name: "Classic Chocolate Cake",
    ingredients: ["2 cups flour", "1 1/2 cups sugar", "3/4 cup cocoa", "2 eggs", "1/2 cup butter", "1 cup milk"],
    steps: [
      "Preheat oven to 180°C.",
      "Mix flour, sugar, and cocoa.",
      "Add eggs, butter, and milk.",
      "Bake 30–35 minutes."
    ]
  },
  {
    id: "strawberry-cheesecake",
    name: "Strawberry Cheesecake",
    ingredients: ["200g biscuits", "100g butter", "500g cream cheese", "1/2 cup sugar", "2 eggs", "1 cup strawberries"],
    steps: [
      "Crush biscuits, mix with melted butter, press into tin.",
      "Beat cream cheese, sugar, and eggs.",
      "Pour over base, bake 40 minutes.",
      "Top with fresh strawberries."
    ]
  },
  {
    id: "macarons",
    name: "French Macarons",
    ingredients: ["1 cup almond flour", "1 cup powdered sugar", "3 egg whites", "1/4 cup sugar", "Food coloring"],
    steps: [
      "Whisk egg whites and sugar until stiff peaks.",
      "Fold in almond flour and powdered sugar.",
      "Pipe onto tray, rest 30 mins.",
      "Bake at 150°C for 15 minutes.",
      "Fill with buttercream or ganache."
    ]
  },
  {
    id: "vanilla-cupcakes",
    name: "Vanilla Bean Cupcakes",
    ingredients: ["1 1/2 cups flour", "1 cup sugar", "1/2 cup butter", "2 eggs", "1 tsp vanilla bean paste", "1/2 cup milk"],
    steps: [
      "Preheat oven to 175°C.",
      "Cream butter and sugar.",
      "Add eggs and vanilla.",
      "Mix in flour and milk.",
      "Bake 18–20 minutes."
    ]
  },
  {
    id: "bomboloni",
    name: "Bomboloni",
    ingredients: ["3 cups flour", "1/2 cup sugar", "2 eggs", "1/2 cup milk", "2 tbsp butter", "Yeast", "Oil for frying"],
    steps: [
      "Make dough with flour, sugar, eggs, milk, butter, and yeast.",
      "Let rise until doubled.",
      "Shape balls, fry until golden.",
      "Fill with cream or jam."
    ]
  },
  {
    id: "eclairs",
    name: "Parisian Eclairs",
    ingredients: ["1 cup water", "1/2 cup butter", "1 cup flour", "4 eggs", "Pastry cream", "Chocolate glaze"],
    steps: [
      "Boil water and butter, add flour to form dough.",
      "Beat in eggs one at a time.",
      "Pipe into logs, bake 25 minutes.",
      "Fill with pastry cream and top with chocolate glaze."
    ]
  },
 ],
  quick: [ /* same idea */ 
  // --- QUICK & EASY ---
  {
    id: "mug-cake",
    name: "Chocolate Mug Cake",
    ingredients: ["4 tbsp flour", "4 tbsp sugar", "2 tbsp cocoa", "1 egg", "3 tbsp milk", "2 tbsp oil"],
    steps: [
      "Mix all ingredients in a mug.",
      "Microwave 1–2 minutes.",
      "Serve warm."
    ]
  },
  {
    id: "brownies",
    name: "Fudgy Brownies",
    ingredients: ["1/2 cup butter", "1 cup sugar", "2 eggs", "1/2 cup cocoa", "1/2 cup flour", "1/2 cup chocolate chips"],
    steps: [
      "Preheat oven to 175°C.",
      "Melt butter and mix with sugar and eggs.",
      "Add cocoa, flour, and chocolate chips.",
      "Bake 20–25 minutes."
    ]
  },
  {
    id: "ice-cream-sandwich",
    name: "Ice Cream Sandwiches",
    ingredients: ["12 cookies", "Ice cream"],
    steps: [
      "Scoop ice cream between two cookies.",
      "Freeze for 1 hour before serving."
    ]
  },
  {
    id: "fruit-tarts",
    name: "Mini Fruit Tarts",
    ingredients: ["Tart shells", "Pastry cream", "Fresh fruits"],
    steps: [
      "Fill tart shells with pastry cream.",
      "Top with assorted fresh fruits.",
      "Chill before serving."
    ]
  },
  {
    id: "kinder-bueno",
    name: "Decadent Mini Kinder Bueno",
    ingredients: ["Chocolate shells", "Hazelnut cream", "Chopped hazelnuts"],
    steps: [
      "Fill chocolate shells with hazelnut cream.",
      "Sprinkle with hazelnuts.",
      "Chill before serving."
    ]
  },
  {
    id: "croissants",
    name: "Easy Chocolate Croissants",
    ingredients: ["Puff pastry sheets", "Chocolate bars"],
    steps: [
      "Cut puff pastry into triangles.",
      "Place chocolate inside, roll up.",
      "Bake at 180°C for 15 minutes."
    ]
  },
],
  twoIng: [ /* same idea */ 
  // --- TWO INGREDIENTS ---
  {
    id: "nutella-cake",
    name: "Nutella Cake",
    ingredients: ["1 cup Nutella", "2 eggs"],
    steps: [
      "Whisk eggs until fluffy.",
      "Mix with Nutella.",
      "Bake 25 minutes at 175°C."
    ]
  },
  {
    id: "peanut-butter-cake",
    name: "Peanut Butter Cake",
    ingredients: ["1 cup peanut butter", "2 eggs"],
    steps: [
      "Whisk eggs.",
      "Mix with peanut butter.",
      "Bake 20 minutes at 175°C."
    ]
  },
  {
    id: "banana-cake",
    name: "Banana Cake",
    ingredients: ["2 bananas", "2 eggs"],
    steps: [
      "Mash bananas.",
      "Add eggs and mix.",
      "Bake 20 minutes at 180°C."
    ]
  },
  {
    id: "soda-cake",
    name: "Soda Cake",
    ingredients: ["1 box cake mix", "1 can soda"],
    steps: [
      "Mix cake mix with soda.",
      "Bake as per box instructions."
    ]
  },
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    ingredients: ["2 cups chocolate", "4 eggs"],
    steps: [
      "Melt chocolate.",
      "Whisk eggs until fluffy.",
      "Fold together and bake 25 minutes."
    ]
  },
  {
    id: "vanilla-cupcakes",
    name: "Quick Vanilla Cupcakes",
    ingredients: ["1 box vanilla cake mix", "1 can soda"],
    steps: [
      "Mix cake mix with soda.",
      "Pour into cupcake liners.",
      "Bake 15–18 minutes."
    ]
  }
  ],
};

// Flatten for search
export const allRecipes = Object.values(recipes).flat();
