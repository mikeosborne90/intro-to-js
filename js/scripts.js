//Create taco recipe using prototypes. First to create what will be needed for the recipe itself.

function TacoRecipe(meat, seasonings, vegetables, tortilla)
{
    this.meat = meat;
    this.seasonings = seasonings;
    this.vegetables = vegetables;
    this.tortilla = tortilla;
}

TacoRecipe.prototype.prepIngredients = function ()
{
    console.log(`Get two pounds of ${this.meat} and add to pan. In a seperate bowl collect ${this.seasonings}. Make sure to get your ${this.vegetables} ready to be washed and cut. Then dip the ${this.tortilla} in some oil and ready to fry in the pan.`);
}

TacoRecipe.prototype.randomMeatChoice = function ()
{
    let meatChoices = ["carne asada", "carnitas", "pollo", "al pastor", "lengua"];
    let randomNumber = Math.floor(Math.random() * 5); // random # 0 -> 4

    this.meat = meatChoices[randomNumber];

    console.log(`You selected a random meat choice, your meat choice is: ${this.meat}!`);
}

const asadaTaco = new TacoRecipe("carne asada", ["garlic powder", "cumin", "onion powder", "salt & pepper"], ["lemon", "tomato", "lettuce/cabbage", "radish"], "corn tortilla");

asadaTaco.prepIngredients();

function Test(phrase)
{
    this.phrase = phrase;
}

function exampleTest(phrase)
{
    Test.call(this, phrase);
    this.random = "I am Robot";
}

console.log(new exampleTest("I fail at life"));

const randomTaco = new TacoRecipe("random", ["garlic powder", "cumin", "onion powder", "salt & pepper"], ["lemon", "tomato", "lettuce/cabbage", "radish"], "corn tortilla")

randomTaco.randomMeatChoice();