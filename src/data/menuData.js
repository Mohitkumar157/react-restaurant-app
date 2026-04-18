// cake
import CaramelCheeseCake from "../assets/images/Caramel-Cheese-Cake.webp";
import ChocolateMousseCake from "../assets/images/Chocolate-Mousse-Cake.webp";
import BerryCreamCake from "../assets/images/Berry-Cream-Cake.webp";
import ChocolateVanillaCake from "../assets/images/chocolate-vanilla-cake.webp";
import ChocolateGlazedCake from "../assets/images/Chocolate-Glazed-Cake.webp";
import MixedBerryCheesecake from "../assets/images/Mixed-Berry-Cheesecake.webp";

// snaks
import ClassicButterPopcorn from "../assets/images/Classic-Butter-Popcorn.webp";
import CrispyBuglesChips from "../assets/images/cricpy-burger-chips.webp";
import SavoryBakedBiscuits from "../assets/images/Savory-Baked-Biscuits.webp";
import FriedCheeseBalls from "../assets/images/fried-cheese-balls.webp";
import CheesyNachoChips from "../assets/images/Cheesy-Nacho-Chips.webp";
import Masalafryums from "../assets/images/Masala-fryums.webp";

//Drinks
import BloodyMary from "../assets/images/Bloody-Mary.webp";
import LayeredCoffeeCocktail from "../assets/images/Layered-Coffee-Cocktail.webp";
import StrawberryLemonade from "../assets/images/Strawberry-Lemonade.webp";
import ZestyMintBliss from "../assets/images/zisty-minibills.webp";
import StrawberryDaiquiri from "../assets/images/Strawberry-Daiquiri.webp";
import CitrusIcedTea from "../assets/images/Citrus-Iced-Tea.webp";

//food
import CrinklePotatoes from "../assets/images/Crinkle-Potatoes.webp";
import ClassicCheeseburger from "../assets/images/Classic-Cheeseburger.webp";
import SpicedPotatoes from "../assets/images/Spiced-Potatoes.webp";
import Shishkebab from "../assets/images/sekh-kabab.webp";
import GrilledChicken from "../assets/images/Grilled-Chicken.webp";
import StuffedZucchini from "../assets/images/Stuffed-Zucchini.webp";

//
import rating3 from "../assets/images/rating-3.svg";
import rating4 from "../assets/images/rating-4.svg";
import rating5 from "../assets/images/rating-5.svg";
import Logo from "../components/layout/header/Logo";

const menuData = [
  {
    id: 1,
    ratingImg: rating5,
    rating: "5.0",
    img: MixedBerryCheesecake,
    name: "Mixed Berry Cheesecake",
    price: 250,
    category: "cakes",
    highlights: "This rich and creamy cheesecake is topped with fresh mixed berries, offering a perfect balance of sweetness and tanginess in every bite.",
    nutrition: { calories: 420, dietaryFiber: "3g", protein: "6g" },
    materials: ["Cream cheese", "Berries", "Sugar"],
    tastyPicks: [2, 3, 13]
  },
  {
    id: 2,
    ratingImg: rating3,
    rating: "3.0",
    img: ChocolateMousseCake,
    name: "Chocolate Mousse Cake",
    price: 250,
    category: "cakes",
    highlights: "A smooth and airy chocolate mousse layered with soft sponge, delivering a rich and indulgent chocolate experience.",
    nutrition: { calories: 450, dietaryFiber: "2g", protein: "5g" },
    materials: ["Chocolate", "Cream"],
    tastyPicks: [1, 4, 14]
  },
  {
    id: 3,
    ratingImg: rating4,
    rating: "4.5",
    img: BerryCreamCake,
    name: "Berry Cream Cake",
    price: 250,
    category: "cakes",
    highlights: "A light and fluffy cake layered with fresh cream and infused with berry flavors for a refreshing dessert.",
    nutrition: { calories: 400, dietaryFiber: "3g", protein: "5g" },
    materials: ["Cream", "Berries"],
    tastyPicks: [1, 5, 15]
  },
  {
    id: 4,
    ratingImg: rating4,
    rating: "4.5",
    img: ChocolateVanillaCake,
    name: "Chocolate Vanilla Cake",
    price: 250,
    category: "cakes",
    highlights: "A perfect combination of chocolate and vanilla layers with a soft texture and balanced sweetness.",
    nutrition: { calories: 430, dietaryFiber: "2g", protein: "5g" },
    materials: ["Chocolate", "Vanilla"],
    tastyPicks: [2, 6, 13]
  },
  {
    id: 5,
    ratingImg: rating4,
    rating: "4.3",
    img: ChocolateGlazedCake,
    name: "Chocolate Glazed Cake",
    price: 250,
    category: "cakes",
    highlights: "A moist chocolate cake topped with a glossy glaze, delivering a rich and satisfying dessert experience.",
    nutrition: { calories: 460, dietaryFiber: "2g", protein: "6g" },
    materials: ["Chocolate", "Butter"],
    tastyPicks: [3, 4, 14]
  },
  {
    id: 6,
    ratingImg: rating4,
    rating: "4.0",
    img: CaramelCheeseCake,
    name: "Caramel Cheese Cake",
    price: 250,
    category: "cakes",
    highlights: "A creamy cheesecake layered with smooth caramel sauce that melts perfectly in every bite.",
    nutrition: { calories: 480, dietaryFiber: "1g", protein: "6g" },
    materials: ["Caramel", "Cheese"],
    tastyPicks: [1, 2, 15]
  },

  {
    id: 7,
    ratingImg: rating5,
    rating: "5.0",
    img: ClassicButterPopcorn,
    name: "Classic Butter Popcorn",
    price: 150,
    category: "snacks",
    highlights: "Freshly popped popcorn coated with buttery goodness, making it a perfect crunchy snack for any occasion.",
    nutrition: { calories: 300, dietaryFiber: "4g", protein: "3g" },
    materials: ["Corn", "Butter"],
    tastyPicks: [8, 9, 13]
  },
  {
    id: 8,
    ratingImg: rating3,
    rating: "3.2",
    img: CrispyBuglesChips,
    name: "Crispy Bugles Chips",
    price: 120,
    category: "snacks",
    highlights: "Light and crispy bugles chips with a savory flavor and fun shape, perfect for quick snacking.",
    nutrition: { calories: 280, dietaryFiber: "2g", protein: "2g" },
    materials: ["Corn", "Oil"],
    tastyPicks: [7, 9, 14]
  },
  {
    id: 9,
    ratingImg: rating4,
    rating: "3.0",
    img: SavoryBakedBiscuits,
    name: "Savory Baked Biscuits",
    price: 130,
    category: "snacks",
    highlights: "Crispy baked biscuits with a light texture and savory taste, ideal for tea-time or casual snacking.",
    nutrition: { calories: 430, dietaryFiber: "12g", protein: "5g" },
    materials: ["Flour", "Butter"],
    tastyPicks: [7, 8, 15]
  },
  {
    id: 10,
    ratingImg: rating3,
    rating: "3.0",
    img: FriedCheeseBalls,
    name: "Fried Cheese Balls",
    price: 180,
    category: "snacks",
    highlights: "Golden fried cheese balls with a crispy exterior and gooey cheesy center, perfect for indulgent snacking.",
    nutrition: { calories: 350, dietaryFiber: "2g", protein: "6g" },
    materials: ["Cheese", "Flour"],
    tastyPicks: [11, 12, 13]
  },
  {
    id: 11,
    ratingImg: rating5,
    rating: "5.0",
    img: CheesyNachoChips,
    name: "Cheesy Nacho Chips",
    price: 140,
    category: "snacks",
    highlights: "Crunchy nacho chips loaded with cheesy flavor, delivering a bold and satisfying snack experience.",
    nutrition: { calories: 320, dietaryFiber: "3g", protein: "4g" },
    materials: ["Corn", "Cheese"],
    tastyPicks: [10, 12, 14]
  },
  {
    id: 12,
    ratingImg: rating5,
    rating: "5.0",
    img: Masalafryums,
    name: "Masala Fryums",
    price: 100,
    category: "snacks",
    highlights: "Spicy and crunchy fryums infused with traditional masala flavors, perfect for a quick snack.",
    nutrition: { calories: 290, dietaryFiber: "2g", protein: "3g" },
    materials: ["Potato", "Spices"],
    tastyPicks: [10, 11, 15]
  },

  {
    id: 13,
    ratingImg: rating5,
    rating: "5.0",
    img: BloodyMary,
    name: "Bloody Mary",
    price: 220,
    category: "drinks",
    highlights: "A bold and refreshing drink made with tomato juice and spices, offering a tangy and flavorful experience.",
    nutrition: { calories: 150, dietaryFiber: "1g", protein: "1g" },
    materials: ["Tomato juice", "Spices"],
    tastyPicks: [14, 15, 7]
  },
  {
    id: 14,
    ratingImg: rating4,
    rating: "4.0",
    img: LayeredCoffeeCocktail,
    name: "Layered Coffee Cocktail",
    price: 200,
    category: "drinks",
    highlights: "A visually stunning layered coffee drink with a smooth taste, perfect for coffee lovers.",
    nutrition: { calories: 180, dietaryFiber: "1g", protein: "2g" },
    materials: ["Coffee", "Milk"],
    tastyPicks: [13, 15, 8]
  },
  {
    id: 15,
    ratingImg: rating4,
    rating: "4.0",
    img: StrawberryLemonade,
    name: "Strawberry Lemonade",
    price: 180,
    category: "drinks",
    highlights: "A refreshing mix of sweet strawberries and tangy lemon, ideal for cooling down on a hot day.",
    nutrition: { calories: 160, dietaryFiber: "1g", protein: "1g" },
    materials: ["Strawberry", "Lemon"],
    tastyPicks: [13, 14, 9]
  },
  {
    id: 16,
    ratingImg: rating3,
    rating: "3.5",
    img: ZestyMintBliss,
    name: "Zesty Mint Bliss",
    price: 170,
    category: "drinks",
    highlights: "A refreshing mint-based drink with a zesty twist, delivering a cool and energizing flavor.",
    nutrition: { calories: 140, dietaryFiber: "1g", protein: "1g" },
    materials: ["Mint", "Lemon"],
    tastyPicks: [15, 17, 7]
  },
  {
    id: 17,
    ratingImg: rating3,
    rating: "3.5",
    img: StrawberryDaiquiri,
    name: "Strawberry Daiquiri",
    price: 210,
    category: "drinks",
    highlights: "A smooth strawberry-based drink with a sweet and tangy flavor that refreshes instantly.",
    nutrition: { calories: 190, dietaryFiber: "1g", protein: "1g" },
    materials: ["Strawberry", "Sugar"],
    tastyPicks: [15, 16, 8]
  },
  {
    id: 18,
    ratingImg: rating3,
    rating: "3.5",
    img: CitrusIcedTea,
    name: "Citrus Iced Tea",
    price: 160,
    category: "drinks",
    highlights: "A chilled iced tea infused with citrus flavors, offering a refreshing and light beverage option.",
    nutrition: { calories: 120, dietaryFiber: "1g", protein: "1g" },
    materials: ["Tea", "Citrus"],
    tastyPicks: [15, 16, 9]
  },

  {
    id: 19,
    ratingImg: rating3,
    rating: "3.5",
    img: CrinklePotatoes,
    name: "Crinkle Potatoes",
    price: 150,
    category: "food",
    highlights: "Crispy crinkle-cut potatoes seasoned to perfection, making them a delicious and crunchy snack.",
    nutrition: { calories: 330, dietaryFiber: "3g", protein: "4g" },
    materials: ["Potatoes", "Salt"],
    tastyPicks: [20, 21, 7]
  },
  {
    id: 20,
    ratingImg: rating5,
    rating: "5.0",
    img: ClassicCheeseburger,
    name: "Classic Cheeseburger",
    price: 250,
    category: "food",
    highlights: "A juicy cheeseburger loaded with fresh ingredients and melted cheese, offering a classic taste.",
    nutrition: { calories: 550, dietaryFiber: "2g", protein: "20g" },
    materials: ["Bun", "Cheese", "Patty"],
    tastyPicks: [19, 21, 13]
  },
  {
    id: 21,
    ratingImg: rating5,
    rating: "5.0",
    img: SpicedPotatoes,
    name: "Spiced Potatoes",
    price: 180,
    category: "food",
    highlights: "Perfectly cooked potatoes tossed in aromatic spices, delivering a flavorful and satisfying dish.",
    nutrition: { calories: 340, dietaryFiber: "4g", protein: "4g" },
    materials: ["Potatoes", "Spices"],
    tastyPicks: [19, 20, 14]
  },
  {
    id: 22,
    ratingImg: rating5,
    rating: "5.0",
    img: Shishkebab,
    name: "Shish Kebab",
    price: 300,
    category: "food",
    highlights: "Juicy and tender kebabs grilled to perfection with spices, offering a rich and smoky flavor.",
    nutrition: { calories: 400, dietaryFiber: "2g", protein: "18g" },
    materials: ["Meat", "Spices"],
    tastyPicks: [23, 24, 13]
  },
  {
    id: 23,
    ratingImg: rating5,
    rating: "5.0",
    img: GrilledChicken,
    name: "Grilled Chicken",
    price: 320,
    category: "food",
    highlights: "Tender grilled chicken seasoned with herbs and spices, delivering a healthy and flavorful meal.",
    nutrition: { calories: 420, dietaryFiber: "1g", protein: "25g" },
    materials: ["Chicken", "Spices"],
    tastyPicks: [22, 24, 14]
  },
  {
    id: 24,
    ratingImg: rating4,
    rating: "4.5",
    img: StuffedZucchini,
    name: "Stuffed Zucchini",
    price: 220,
    category: "food",
    highlights: "Fresh zucchini stuffed with flavorful fillings, offering a healthy and delicious vegetarian option.",
    nutrition: { calories: 260, dietaryFiber: "3g", protein: "6g" },
    materials: ["Zucchini", "Vegetables"],
    tastyPicks: [22, 23, 15]
  }
];
export default menuData;


