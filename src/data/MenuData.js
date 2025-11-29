import Americano from "../assets/Coffee/Americano.avif"
import Cappucino from "../assets/Coffee/Cappuccino.avif"
import ColdBrew from "../assets/Coffee/ColdBrew.avif"
import Espresso from "../assets/Coffee/Espresso.avif"
import FlatWhite from "../assets/Coffee/FlatWhite.avif"
import Latte from "../assets/Coffee/Latte.avif"
import Macchiato from "../assets/Coffee/Macchiato.avif"
import Mocha from "../assets/Coffee/Mocha.avif"
import AvocadoToast from "../assets/Food/AvocadoToast.avif"
import CreamCheese from "../assets/Food/CreamCheese.avif"
import BreakfastBurrito from "../assets/Food/BreakfastBurrito.avif"
import ChickenSaladWrap from "../assets/Food/ChickenSaladWrap.avif"
import GreekYogurtBowl from "../assets/Food/GreekYogurtBowl.avif"
import GrilledCheeseSandwich from "../assets/Food/GrilledCheeseSandwich.avif"
import QuicheLorraine from "../assets/Food/QuicheLorraine.avif"
import TurkeySandwich from "../assets/Food/TurkeySandwich.avif"
import AlmondCroissant from "../assets/Pastry/AlmondCroissant.avif"
import BlueberryMuffin from "../assets/Pastry/BlueberryMuffin.avif"
import Brownie from "../assets/Pastry/Brownie.avif"
import ChocolateChipCookie from "../assets/Pastry/ChocolateChipCookie.avif"
import ChocolateCroissant from "../assets/Pastry/ChocolateCroissant.avif"
import CinnamonRoll from "../assets/Pastry/CinnamonRoll.avif"
import DanishPastry from "../assets/Pastry/DanishPastry.avif"


const menuCategories = ['All', 'Coffee', 'Pastries', 'Food'];
const MenuData = [

    // ========== COFFEE (8 items) ==========
    {
        id: 1,
        name: "Cappuccino",
        category: "Coffee",
        price: "$4.00",
        description: "A classic Italian coffee drink made with espresso, steamed milk, and a thick layer of milk foam.",
        image: Cappucino,
        popular: true
    },
    {
        id: 2,
        name: "Latte",
        category: "Coffee",
        price: "$4.50",
        description: "A creamy coffee drink made with espresso and steamed milk, topped with a light layer of foam.",
        image: Latte,
        popular: true
    },
    {
        id: 3,
        name: "Espresso",
        category: "Coffee",
        price: "$3.00",
        description: "A strong and bold coffee shot made by forcing hot water through finely-ground coffee beans.",
        image: Espresso,
        popular: false
    },
    {
        id: 4,
        name: "Mocha",
        category: "Coffee",
        price: "$5.00",
        description: "A delightful blend of espresso, steamed milk, and chocolate syrup, topped with whipped cream.",
        image: Mocha,
        popular: true
    },
    {
        id: 5,
        name: "Americano",
        category: "Coffee",
        price: "$3.50",
        description: "A simple yet bold coffee made by diluting espresso with hot water for a smooth taste.",
        image: Americano,
        popular: false
    },
    {
        id: 6,
        name: "Macchiato",
        category: "Coffee",
        price: "$4.00",
        description: "Espresso with a dollop of foamed milk, perfect for those who like their coffee strong.",
        image: Macchiato,
        popular: false
    },
    {
        id: 7,
        name: "Flat White",
        category: "Coffee",
        price: "$4.75",
        description: "A smooth blend of espresso and velvety steamed milk with a thin layer of microfoam.",
        image: FlatWhite,
        popular: true
    },
    {
        id: 8,
        name: "Cold Brew",
        category: "Coffee",
        price: "$5.00",
        description: "Smooth, refreshing coffee steeped in cold water for 12 hours, served over ice.",
        image: ColdBrew,
        popular: false
    },

    // ========== PASTRIES (8 items) ==========
    {
        id: 9,
        name: "Blueberry Muffin",
        category: "Pastries",
        price: "$2.50",
        description: "A moist and fluffy muffin bursting with fresh blueberries, perfect for a quick breakfast or snack.",
        image: BlueberryMuffin,
        popular: false
    },
    {
        id: 10,
        name: "Chocolate Croissant",
        category: "Pastries",
        price: "$3.00",
        description: "A flaky and buttery croissant filled with rich chocolate, perfect for satisfying your sweet tooth.",
        image: ChocolateCroissant,
        popular: true
    },
    {
        id: 11,
        name: "Plain Croissant",
        category: "Pastries",
        price: "$2.50",
        description: "A classic French pastry with layers of buttery, flaky goodness.",
        image: AlmondCroissant,
        popular: false
    },
    {
        id: 12,
        name: "Cinnamon Roll",
        category: "Pastries",
        price: "$3.50",
        description: "A warm, gooey cinnamon roll topped with cream cheese frosting.",
        image: CinnamonRoll,
        popular: true
    },
    {
        id: 13,
        name: "Almond Croissant",
        category: "Pastries",
        price: "$3.25",
        description: "A buttery croissant filled with almond cream and topped with sliced almonds.",
        image: AlmondCroissant,
        popular: false
    },
    {
        id: 14,
        name: "Chocolate Chip Cookie",
        category: "Pastries",
        price: "$2.00",
        description: "A classic cookie loaded with chocolate chips, baked fresh daily.",
        image: ChocolateChipCookie,
        popular: false
    },
    {
        id: 15,
        name: "Danish Pastry",
        category: "Pastries",
        price: "$3.00",
        description: "A flaky pastry filled with fruit preserves and topped with sweet glaze.",
        image: DanishPastry,
        popular: false
    },
    {
        id: 16,
        name: "Brownie",
        category: "Pastries",
        price: "$2.75",
        description: "A rich, fudgy chocolate brownie, perfect for chocolate lovers.",
        image: Brownie,
        popular: true
    },

    // ========== FOOD (8 items) ==========
    {
        id: 17,
        name: "Avocado Toast",
        category: "Food",
        price: "$5.00",
        description: "Toasted artisan bread topped with creamy mashed avocado, cherry tomatoes, and a sprinkle of feta cheese.",
        image: AvocadoToast,
        popular: true
    },
    {
        id: 18,
        name: "Bagel with Cream Cheese",
        category: "Food",
        price: "$3.50",
        description: "A freshly baked bagel served with a generous spread of cream cheese, perfect for breakfast or brunch.",
        image: CreamCheese,
        popular: false
    },
    {
        id: 19,
        name: "Turkey & Swiss Sandwich",
        category: "Food",
        price: "$7.00",
        description: "Sliced turkey, Swiss cheese, lettuce, and tomato on freshly baked ciabatta bread.",
        image: TurkeySandwich,
        popular: true
    },
    {
        id: 20,
        name: "Chicken Salad Wrap",
        category: "Food",
        price: "$6.50",
        description: "Grilled chicken, mixed greens, cherry tomatoes, and ranch dressing wrapped in a soft tortilla.",
        image: ChickenSaladWrap,
        popular: false
    },
    {
        id: 21,
        name: "Breakfast Burrito",
        category: "Food",
        price: "$6.00",
        description: "Scrambled eggs, bacon, cheese, and salsa wrapped in a warm flour tortilla.",
        image: BreakfastBurrito,
        popular: true
    },
    {
        id: 22,
        name: "Greek Yogurt Bowl",
        category: "Food",
        price: "$5.50",
        description: "Creamy Greek yogurt topped with granola, fresh berries, and a drizzle of honey.",
        image: GreekYogurtBowl,
        popular: false
    },
    {
        id: 23,
        name: "Grilled Cheese Sandwich",
        category: "Food",
        price: "$5.00",
        description: "Classic grilled cheese with melted cheddar on buttery toasted sourdough bread.",
        image: GrilledCheeseSandwich,
        popular: false
    },
    {
        id: 24,
        name: "Quiche Lorraine",
        category: "Food",
        price: "$6.50",
        description: "A savory French tart filled with bacon, Swiss cheese, and creamy egg custard.",
        image: QuicheLorraine,
        popular: true
    }

]

export default MenuData;