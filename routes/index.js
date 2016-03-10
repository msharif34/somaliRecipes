var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/recipes', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); 
 var data = [
  {
    "Name": "Muufo",
    "NameLink": "http://www.mysomalifood.com/muufo/",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/11/muufo.jpg",
    "Ingredients": "1 cup cornmeal (precooked, \"PAN\")\t\t\t\t1 cup plain flour\t\t\t\t1 teaspoon baking powder\t\t\t\t2 teaspoons sugar\t\t\t\t1 teaspoon salt\t\t\t\t1 tablespoon of oil, and more for cooking the muufo",
    "Instructions": "In a mixing bowl add cornmeal, plain flour, baking powder, sugar and salt, add just enough water to make a\t\t\t\tsoft dough, add about 2 1/4 cups of  warm water,  more flour if sticky and more water if too dry.\t\t\t\tYou can use the dough right away or let it rest for 20 minutes to overnight.\t\t\t\tHeat a non-stick fry pan on a medium heat.\t\t\t\tDivide the dough into 6 equal pieces then leave them covered.\t\t\t\tUsing your hands flatten each piece in to a 4 inch/ 10 cm  diameter.\t\t\t\tUse little bit of water to wet your hand, so the dough won't stick.\t\t\t\tFry each bread until golden brown 4 to 5 minutes on each side.\t\t\t\tAlternatively use a griddle and brush each muufo with some oil  and\t\t\t\tturnover when the bread comes of the griddle about 4-5 minutes.\t\t\t\tServe with your favorite stew.",
    "Category": "Breakfast"
  },
  {
    "Name": "Cambaabur (ambaabur) : Eid Bread",
    "NameLink": "http://www.mysomalifood.com/cambaabur-eid-bread/",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2010/08/cambaabur1.jpg",
    "Ingredients": "1 ï¿½ cups all purpose flour\t\t\t\tï¿½ cup wheat flour\t\t\t\tï¿½ cup millet flour\t\t\t\t3 cups water\t\t\t\t1 ï¿½ teaspoon yeast\t\t\t\t1 ï¿½ teaspoon sugar\t\t\t\t1 teaspoon salt\t\t\t\t1 small onion chopped\t\t\t\t1 clove of garlic chopped\t\t\t\t1/2 teaspoon to 1 teaspoon of turmeric\t\t\t\t1 teaspoon fennel seeds (caraway)\t\t\t\t1 teaspoon habba sauda (nigella seeds)",
    "Instructions": "In a blender add the onion and garlic, cumin, turmeric and some water and blend until smooth paste.\t\t\t\tAdd all the other ingredients to the blender and blend again until combined. It should be like a pancake batter.\t\t\t\tCover the mixture and keep it in a warm place for about 4-6 hours or until it doubles in size.\t\t\t\tScoop the batter by 1/4 cup on a fry pan with a little oil, sprinkle with custard sugar on top to taste. repeat this until you have finished all the batter.\t\t\t\tServe with Yogurt.",
    "Category": "Breakfast"
  },
  {
    "Name": "Injera: Ethiopia Sourdough FlatBread with Chicken Stew",
    "NameLink": "http://www.mysomalifood.com/injera-ethiopia-sourdough-flatbread-with-chicken-stew/",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/10/injera.jpg",
    "Ingredients": "2 cup all-purposeflour\t\t\t\tï¿½ cup cornmeal flour\t\t\t\tï¿½ cup teff flour\t\t\t\t2 teaspoon yeast\t\t\t\t1/2 cup sourdough starter\t\t\t\t3 1/4 cups lukewarm water",
    "Instructions": "In a mixer or a blender combine all the ingredient and mix or blend until there are no lumps.\t\t\t\tCover and set aside to rest at a warm place for 2 hours.\t\t\t\tHeat a nonstick skillet on a medium heat.\t\t\t\tTake about ï¿½ cup of the batter and pour it in the skillet tilting to coat most of the bottom.\t\t\t\tCook, until moisture has evaporated and when lots of holes form in the injera and the edges lift from the pan.\t\t\t\tRemove and let cool each injera before stacking them as you go along.",
    "Category": "Breakfast"
  },
  {
    "Name": "Chappati",
    "NameLink": "http://www.mysomalifood.com/chappati/",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2010/03/chappati.jpg",
    "Ingredients": "",
    "Instructions": "",
    "Category": "Breakfast"
  },
  {
    "Name": "Mini Muufo",
    "NameLink": "http://www.mysomalifood.com/mini-muufo/",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/08/mini-muufo.jpg",
    "Ingredients": "21/4 cups/350g semolina flour\t\t\t\t1 tablespoon sugar\t\t\t\t1  teaspoon salt\t\t\t\t2 teaspoons baking powder\t\t\t\t1/4 cup/50ml oil\t\t\t\t1/2 cup/100ml  milk\t\t\t\t1 egg, beaten",
    "Instructions": "In a bowl mix all the dry ingredients.\t\t\t\tadd the egg milk and oil and stir until combined.\t\t\t\tKnead for few minutes until soft dough but not sticky.\t\t\t\tAdd more flour if needed.\t\t\t\tLet it sit for 30 minutes.\t\t\t\tRoll the dough on a floured surface.\t\t\t\tCut with a cookie cutter or a glass.\t\t\t\tHeat a nonstick pan on a medium heat.\t\t\t\tPlace the cakes to cook each side for about 4 minutes.\t\t\t\tServe warm with stew.",
    "Category": "Breakfast"
  },
  {
    "Name": "Stuffed Sabaayad with Green Onion",
    "NameLink": "http://www.mysomalifood.com/stuffed-sabaayad-with-green-onion/",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/07/green-onion-sabaayad.jpg",
    "Ingredients": "",
    "Instructions": "",
    "Category": "Breakfast"
  },
  {
    "Name": "Sourdough Lahooh",
    "NameLink": "http://www.mysomalifood.com/sourdough-lahooh/",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/01/Lohooh.jpg",
    "Ingredients": "1/2 cup millet\t\t\t\t1/2 cup cornmeal\t\t\t\t1 cup plain flour\t\t\t\t1 cup starter\t\t\t\t3  cups water\t\t\t\t1 teaspoon baking soda",
    "Instructions": "Mix all the ingredient in a bowl and leave it to sit for 30 minutes to overnight, the longer you leave it the more sour it will become.\t\t\t\tDepending how thick or thin your starter is, add more water if the batter is too tick and more flour if too thin\t\t\t\tWhen ready, stir the batter until incorporated.\t\t\t\tHeat a non stick pan on a medium heat.\t\t\t\tSpread ï¿½ cup of the batter gently, in a circular motion with the back of a ladle starting in the middle and then working clockwise.\t\t\t\tJust cook one side until golden brown. You should have nice bubbles on top.\t\t\t\tMake sure you start with a clean skillet, by wiping it off with a kitchen paper .\t\t\t\tRepeat using all batter.\t\t\t\tServe warm.",
    "Category": "Breakfast"
  },
  {
    "Name": "Sourdough Starter : Dhanaanis",
    "NameLink": "http://www.mysomalifood.com/sourdough-starter-dhanaanis/",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/05/sourdhough.jpg",
    "Ingredients": "",
    "Instructions": "",
    "Category": "Breakfast"
  },
  {
    "Name": "Whole Wheat Sourdough Sabaayad",
    "NameLink": "http://www.mysomalifood.com/wholewheat-sourdough-sabaayad/",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/01/sabaayad.jpg",
    "Ingredients": "",
    "Instructions": "",
    "Category": "Breakfast"
  },
  {
    "Name": "Sweet Fried Bread",
    "NameLink": "http://www.mysomalifood.com/sweet-fried-bread/",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/07/sweetfriedbread1.jpg",
    "Ingredients": "2 cups all-purpose flour\t\t\t\t1/4 cup sugar\t\t\t\t2 tablespoon oil\t\t\t\t1 teaspoon cardamom powder\t\t\t\t2 teaspoon baking powder\t\t\t\t1/2 cup lukewarm milk\t\t\t\t1 egg, beaten\t\t\t\tOil for frying",
    "Instructions": "In a bowl combine all the ingredient.\t\t\t\tKneed the dough lightly don't over work it.\t\t\t\tLeave it to rest for 30 min.\t\t\t\tRoll the though on a lightly floured surface.\t\t\t\tCut in to desired shapes.\t\t\t\tDeep fry until golden brown on both sides.\t\t\t\tDrain on a paper towel and serve.",
    "Category": "Breakfast"
  },
  {
    "Name": "Coconut Filed Sabaayad",
    "NameLink": "http://www.mysomalifood.com/coconut-sabaayad/",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/01/coconutSabaayad.jpg",
    "Ingredients": "2 cups all-purpose flour\t\t\t\t1 cup all-purpose wholewheat flour\t\t\t\t1 teaspoon salt\t\t\t\t2 tablespoons oil\t\t\t\tshredded coconut\t\t\t\tsugar\t\t\t\textra oil and flour",
    "Instructions": "Combine flour, salt and oil in deep bowl; add one cup of water gently using your fingers Knead the dough  add more water a table spoon at a time and kneed the dough if it gets sticky add tablespoon of flour each time.\t\t\t\tkneed the dough until it turns very soft ad  smooth for 5 to 10 minutes.\t\t\t\tCover and set aside for half an hour.\t\t\t\tDivide the dough into 8 large balls.\t\t\t\tOn a lightly floured surface, roll each piece into a rough circle about 8 inches in diameter.\t\t\t\tBrush with oil then sprinkle with the sugar and the coconut spread evenly fold the edges to meet center fold, in the four ends over each other, to make a square fold. set a side and apply the same method to all the pieces.\t\t\t\tRoll each piece lightly and place it a circle about 8 inch and place it on a  hot griddle over medium heat.\t\t\t\tFry the sabaayad one at a time with little oil, turning them once each side is golden brown.\t\t\t\tFinish until you have applied the same method to all the pieces.\t\t\t\tDrain the sabaayad on paper towels and serve warm with cup of shaah.",
    "Category": "Breakfast"
  },
  {
    "Name": "Lahooh with Suqaar and Eggs",
    "NameLink": "http://www.mysomalifood.com/lahooh-with-suqaar-and-eggs/",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/10/suqaar-lahooh.jpg",
    "Ingredients": "1 lb beef cubes, suqaar\t\t\t\t2 large tomatoes , chopped\t\t\t\t2 eggs\t\t\t\t1large onion chopped\t\t\t\t2 tablespoons Oil\t\t\t\t1 cloves garlic, chopped\t\t\t\t1 teaspoon coriander powder\t\t\t\t1 teaspoon paprika\t\t\t\tSalt and pepper\t\t\t\t2 green onion, chopped",
    "Instructions": "In a deep skillet on high heat add the meat and stir until brown.\t\t\t\tAdd oil and stir for few minutes season with salt and pepper.\t\t\t\tAdd the onion and stir for few more minutes.\t\t\t\tAdd the tomatoes and the garlic, coriander and paprika. Cook for 5 minutes.\t\t\t\tMake two holes by spreading the meat then crack the eggs drop them in to the holes.\t\t\t\tCook covered until the eggs have cooked through. Alternatively bake it in the oven 15-20 min until the eggs are set.\t\t\t\tServe with lahooh.",
    "Category": "Breakfast"
  },
  {
    "Name": "Soft Buns",
    "NameLink": "http://www.mysomalifood.com/soft-buns/",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/07/buns.jpg",
    "Ingredients": "4 1/2 koob daqiiq\t\t\t\t3 malqaacadood malab\t\t\t\t1 1/2 malqaacad yar milix\t\t\t\t5 malqaacadood saliid saytuun (olive oil)\t\t\t\t1 maqaacad yiist (yeast)\t\t\t\tDaqiiq iyo saliid dheeraad ah, oo loobaahanyahay marka laxashayo",
    "Instructions": "Yiista iyo 1/4 (rubuc) koob biyo aha isku walaaq yara dhig\t\t\t\t5 mirir.\t\t\t\tKadib soo qaado Weel ama madiibad weyn oo aad ku xashto\t\t\t\tdhaqiiqda. Daqiiqda, malabka, milixda, saliida, caanaha iyo yiista\t\t\t\tkuwada shub oo walaaq badadeed xash oo marka hore way\t\t\t\tisku dhaqdhagi laakiin markaad xashtid ayuu kabi'i doonaa.\t\t\t\tInyar oo daqiiqa kudar hadii uu kaa jilco, hadii uu adkaadana\t\t\t\tbiyo yar kudar.\t\t\t\tDaqiiqdu waa in ay jilicsanaataa, hadhow markaa roodhida\t\t\t\tayaa noqonaysa roodhi khafiif ah oo jilicsan.\t\t\t\tDabool oo meel dhig si ay ufaxdo ilaa saacad saacad iyo badh\t\t\t\twaa in ay is laba laabtaa, kolba kii soo horeeya.\t\t\t\tKadib u qaybi daqiiqda 12 xabadood.\t\t\t\tSidii kubada oo kale uyara xash markaa, weel balaadhan\t\t\t\tsoo qaado oo kuwadarid. Meel yara kulul dhig oo sug ilaa saacad inta ay faxayaan.\t\t\t\tOfinka sii diiri oo ka dhig 425f ama 220c\t\t\t\tWaxay qaadanaysaa ilaa 20 mirir markaad aragto oo ay dusha\t\t\t\tkashaaxido kasaar ofinka oo yara daa ilaa ay qaboobayso.",
    "Category": "Breakfast"
  },
  {
    "Name": "Quick Lahooh",
    "NameLink": "http://www.mysomalifood.com/lahoohanjero-flat-bread/",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/01/lohooh.jpg",
    "Ingredients": "1 cup all-purpose plain flour\t\t\t\t1/2 cup wholewheat flour\t\t\t\t1/2 cup cornmeal flour, fine\t\t\t\t3 teaspoon baking powder\t\t\t\t1/2 teaspoon salt\t\t\t\t2 cups of milk or more\t\t\t\t1 tablespoon sugar\t\t\t\t1 egg\t\t\t\tButter and honey for serving",
    "Instructions": "Mix all the ingredient in a blender to form a smooth batter with no lumps.\t\t\t\tAdd more milk if you need the batter should be like a pancake like consistency.\t\t\t\tHeat a cast iron skillet or a non stick pan on a medium heat.\t\t\t\tSpread ï¿½ cup of the batter gently, in a circular motion by starting in the middle and then working clockwise.\t\t\t\tCook one side until golden brown.\t\t\t\tIf it sticks on the skillet add few drops of oil and wipe it off with a kitchen paper.\t\t\t\tRepeat using all batter.\t\t\t\tServe warm",
    "Category": "Breakfast"
  },
  {
    "Name": "Banana Fritters",
    "NameLink": "http://www.mysomalifood.com/banana-fritters/",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/02/bananaf.jpg",
    "Ingredients": "",
    "Instructions": "",
    "Category": "Breakfast"
  },
  {
    "Name": "Lahooh with Eggs",
    "NameLink": "http://www.mysomalifood.com/lahooh-with-eggs/",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/beediyoloxoox.jpg",
    "Ingedients": "2 lahooh link here\n1 small tomato, chopped\n1 small onion, chopped\n1 chili pepper, chopped\n1 green onion, chopped\n2 eggs\nsalt pepper to taste\nï¿½ cup green pepper, chopped\nï¿½ cup grated cheese\noil",
    "Instructions": "Mix the flour, baking powder, salt, and cardamom. Mix in the egg, milk and the water and kneed to make a soft dough. Cover the dough and let it rest for 30-40 minutes Divide the dough into eight pieces then roll into a thin 5 inch round. Heat oil and fry the dough until golden. Dry on a kitchen paper. Serve with cardamom confectionery sugar.",
    "Category": "Breakfast"
  },
  {
    "Name": "lahooh-spongy-pancake-like-bread",
    "NameLink": "http://www.mysomalifood.com/lahooh-spongy-pancake-like-bread/",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/10/lahooh.jpg",
    "Ingedients": "1 ï¿½ cups all purpose flour ï¿½ cup wheat flour ï¿½ cup millet flour 3 cups water 1 ï¿½ teaspoon yeast 1 ï¿½ teaspoon sugar 1 teaspoon salt",
    "Instructions": "Mix all the ingredient together to form a batter; Stir well to avoid lumps set aside to rise in a warm place until bubbly and doubled in size, about 1 to 1 1/2 hours. When ready, stir batter if liquid has settled on bottom. Heat a cast iron skillet or a non stick pan on a medium heat. Spread ï¿½ cup of the batter gently, in a circular motion by starting in the middle and then working clockwise. Just cook one side until golden brown. If it sticks on the skillet add few drops of oil and wipe it off with a kitchen paper. Repeat using all batter.",
    "Category": "Breakfast"
  },
  {
    "Name": "Khamiir: Fried Dough",
    "NameLink": "http://www.mysomalifood.com/khamiir-fried-dough/",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/khamiir.jpg",
    "Ingedients": "2 cups flour\n2 teaspoon baking powder\n1 teaspoon salt\nï¿½ cup milk, warm\nï¿½ cup water, warm\n2 teaspoon oil\n1 teaspoon ground cardamom\n1 egg, beaten",
    "Instructions": "Mix the flour, baking powder, salt, and cardamom.\nMix in the egg, milk and the water and kneed to make a soft dough.\nCover the dough and let it rest for 30-40 minutes\nDivide the dough into eight pieces then roll into a thin 5 inch round.\nHeat oil and fry the dough until golden.\nDry on a kitchen paper.\nServe with cardamom confectionery sugar.",
    "Category": "Breakfast"
  },
  {
    "Name": "Lahooh with Sweetened Eggs",
    "NameLink": "http://www.mysomalifood.com/lahooh-with-sweet-eggs/",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/lahoohbeed.jpg",
    "Ingedients": "4 pieces of lahooh\n3 eggs\nsugar to taste\nï¿½ teaspoon ground cardamom\noil",
    "Instructions": "Beet the eggs in a bowl, add the sugar, and cardamom.\nIn a skillet on a medium heat drizzle little oil then place one lahooh on the skillet.\nPour ï¿½ of the egg mixture over the lahooh covering most of it.\ncover with the another lahooh.\nLeave it to cook until the bottom has a nice brown color and the egg has set.\nDrizzle with little oil and flip over to the other side, and cook until brown.\nCook the other patch the same way.\nDrizzle honey or syrup and serve warm",
    "Category": "Breakfast"
  },
  {
    "Name": "Sabaayad: Flatbread",
    "NameLink": "http://www.mysomalifood.com/sabayad-flatbread/",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/Sabaayad.jpg",
    "Ingedients": "3 cups of all-purpose plain 1 teaspoon salt 2 table spoons oil more oil for rolling and for the skillet more flour for rolling",
    "Instructions": "\nInstructions\nCombine the flour, oil and salt in deep bowl add one cup of water gently using your fingers Knead the dough. Add more water a tablespoon to make a soft dough continue to knead if it sticks sprinkle with some flour. Kneed the dough until it turns very smooth for 5 to 10 minutes. Brush a bowl with oil, and leave dough to rest covered in a plastic and set aside for 30 minutes. Divide the dough into 8 large balls. On a lightly floured surface, roll each piece into a rough circle about 8 inches in diameter. Brush with oil on top spread evenly fold to edges in to meet center fold, fold the other edges in You should now have a square fold, set a side. Finish until you have applied the same method to all the pieces. Again on a floured surface roll each piece out into 8 inch and place it on a hot griddle over medium heat. Fry the sabaayad one at a time with little oil, turning them once each side is golden brown. The sabaayad will puff slightly and become crisp and brown. Drain the sabaayad on paper towels and serve warm.",
    "Category": "Breakfast"
  },
  {
    "Name": "Sorghum & Corn flour Hot Cereal",
    "NameLink": "http://www.mysomalifood.com/shuurosoor/",
    "Ingredients": "1/2 cup corn flour 1/2 cup sorghum flour pinch of salt 2 cups milk 2 cups water sugar/honey pinch of cinnamon",
    "Instructions": "In a heavy pan bring the water and milk to a rolling boil.\t\t\t\tStir the corn and sorghum to the boiling water and milk, constantly stir.\t\t\t\tReduce the heat on a medium and let it simmer, stir occasionally .\t\t\t\tKeep stirring until it thickens add more water or milk to get softer consistency, according to your preference.\t\t\t\tServe hot with butter, milk, sugar, honey, buttermilk, or yogurt.",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/07/photo.jpg"
  },
  {
    "Name": "Farina: Hot Breakfast Cereal",
    "NameLink": "http://www.mysomalifood.com/farina-hot-breakfast-cereal/",
    "Ingredients": "3 cups of milk � cup Farina Salt to taste Sugar/honey to taste Butter (optional)",
    "Instructions": "In a sauce pan bring milk to a boil.\t\t\t\tAdd Farina slowly, stirring constantly.\t\t\t\tLower the heat, continue to cook while stirring until it thickens.\t\t\t\tAdd honey/sugar and butter.\t\t\t\tAdd more milk on top if you like it.",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/farina.jpg"
  },
  {
    "Name": "Lahooh with Sweetened Eggs",
    "NameLink": "http://www.mysomalifood.com/lahooh-with-sweet-eggs/",
    "Ingredients": "4 pieces of lahooh\n3 eggs\nsugar to taste\n� teaspoon ground cardamom\noil",
    "Instructions": "Beet the eggs in a bowl, add the sugar, and cardamom. In a skillet on a medium heat drizzle little oil then place one lahooh on the skillet. Pour � of the egg mixture over the lahooh covering most of it. cover with the another lahooh. Leave it to cook until the bottom has a nice brown color and the egg has set. Drizzle with little oil and flip over to the other side, and cook until brown. Cook the other patch the same way. Drizzle honey or syrup and serve warm",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/lahoohbeed.jpg"
  },
  {
    "Name": "Easy Pancake",
    "NameLink": "http://www.mysomalifood.com/easy-pancake/",
    "Ingredients": "1 cup milk\n2 eggs\n2 tablespoon dry milk\n2 tablespoon sugar\n1 tablespoon oil\n1 cup flour\n1 teaspoon cardamom\n1 teaspoon vanilla\n1 teaspoon baking powder\n oil for frying",
    "Instructions": "Combine all the ingredients in a blender and blend briefly. Then cover and let it rest for 20 minutes to one hour. Over a medium heat, heat 2 tablespoons of oil in griddle. Fry 1/4 cup of the mixture at a time, for 2 minutes or until bubbles start to form . Flip with a spatula and cook until both sides are golden. Serve hot with honey and yogurt or maple syrup.",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2010/02/pancake.jpg"
  },
  {
    "Name": "Haricot Beans",
    "NameLink": "http://www.mysomalifood.com/haricot-beans/",
    "Ingredients": "1 pound haricot beans\n4 table spoon oil\n1 red/green pepper\n2 cloves of garlic, chopped\n1 large onion chopped\n1 (15-ounce) can chopped tomatoes\n2 tablespoons tomato paste\n2 teaspoon cayenne pepper\n� cup cilantro, chopped\n1 Maggi bouillon\nSalt and pepper, to taste",
    "Instructions": "Put the haricot beans in a bowl, cover with water and soak overnight. Heat the oil in a large pan over medium heat and cook the onions until soft, add garlic and cook briefly season with salt and pepper. Add the tomato paste, tomato, pepper and cayenne, cook for 5 minutes. Stir in the cilantro. Drain the beans and add to the pan with 3 cups of hot water and the Maggi. Bring it to a boil, cover and simmer for 1 to 1 � hours until the beans are tender, add more water if necessary.",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/beans.jpg"
  },
  {
    "Name": "Spinach and Potato Frittata",
    "NameLink": "http://www.mysomalifood.com/spinach-and-potato-frittata/",
    "Ingredients": "3 potatoes, sliced 1/8 thick\n6 eggs beaten\n1 lb fresh spinach\n1 tomato, chopped\n1 clove of garlic minced\nSalt and pepper to taste\nAbout � cup shredded cheese\n3-4 tablespoon olive oil",
    "Instructions": "Wash and chop spinach finely, drain and place the spinach in a fry pan over medium heat. Stir for one minute until soft. Transfer the spinach to a colander and press out the moisture. Chop finely. Sautee the onions on a large fry pan over medium heat until soft, add the garlic and stir. Add the potato and cook for few minutes add the tomato and season. Stir in the spinach. Fold together the beaten eggs and the cheese and pour over the egg mixture and fold until just blended. Transfer in the oven and bake until just set.",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/beedspinach.jpg"
  },
  {
    "Name": "Bulgur with strawberries, raisins and honey",
    "NameLink": "http://www.mysomalifood.com/bulgur-with-strawberries-raisins-and-honey/",
    "Ingredients": "1 cup Bulgur\n2 cups of water\n1/2 teaspoon salt\nhoney to taste\n1/2 cup raisins\n1 cup yogurt\n 1 cup chopped strawberries",
    "Instructions": "In a sauce pan add the water and salt bring it to a boil. wash the bulgur and drain ad to the boiling water. Remove from the heat and cover for 20 minutes. Bulgur comes in different sizes of coarseness, add more water if you need to. Serve bulgur with yogurt on top and sprinkle raisin, strawberries, drizzle with honey.",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2010/12/bu1.jpg"
  },
  {
    "Name": "Somali Style Cooked Lamb Liver : Beer",
    "NameLink": "http://www.mysomalifood.com/beer-somali-style-cooked-lamb-liver/",
    "Ingredients": "Lamb liver, chopped into small pieces\n1 onion, diced\n1 tomato, chopped\n� cup green pepper\n1 green chili, chopped\nJuice of half of lime/lemon\n1 teaspoon coriander powder\n2 tablespoons cilantro\nSalt and pepper to taste",
    "Instructions": "Heat oil in a skillet on a medium heat, add the onions and saut� until tender add the tomato, and cook few more minutes, season with salt and pepper. Stir in the green pepper, green chili, lemon, coriander, and cilantro. Add the liver and cook until tender. Serve with lahooh or pita bread and lemon wedges. It is great with shigni too, if you serve it during lunch or dinner time.",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/beer.jpg"
  },
  {
    "Name": "Sweet and Creamy Millet",
    "NameLink": "http://www.mysomalifood.com/sweet-and-creamy-millet/",
    "Ingredients": "1 cup millet 2 cups of water 2 cups of milk and more salt",
    "Instructions": "In a dry saucepan toast the millet for few minutes for deeper flavor, stir continuously\t\t\t\tto avoid burning .\t\t\t\tAdd water, bring to a boil, then reduce heat and simmer for bout 20 minutes all the liquid will absorbed.\t\t\t\tAdd the milk, salt and butter to taste cook for 5-10 more minutes until desired consistency reached, for a creamier millet.\t\t\t\tServe with more milk, honey, dried or fresh fruits, nuts. Adding a dash of cinnamon will spice it up.",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/11/millet.png"
  },
  {
    "Name": "Creamy Pearled Barley Porridge",
    "NameLink": "http://www.mysomalifood.com/creamy-pearled-barley-porridge/",
    "Ingredients": "1 cup Pearl Barley\t\t\t\t6 cups of water\t\t\t\tsalt\t\t\t\tCinnamon\t\t\t\tbutter optional\t\t\t\tmilk",
    "Instructions": "In a large saucepan bring the water to a boil, add salt to taste add the barley, simmer uncoverd utill tender for an hour. Add more milk and cook untill reached disired consistency for a creamier barley.\t\t\t\tServe with more milk, yogurt, buttermilk, butter and cinnamon to taste.",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/10/w1.jpg"
  },
  {
    "Category": "Appetizers",
    "Name": "Babaganoush",
    "NameLink": "http://www.mysomalifood.com/babaganoush/",
    "Ingredients": "1 large eggplant\t\t\t\t2 garlic cloves,chopped\t\t\t\t2 tablespoons extra virgin olive oil\t\t\t\t2 tablespoons fresh lemon juice\t\t\t\tsalt and pepper\t\t\t\tChopped fresh cilantro for garnishing(optional)",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/08/babaganoush.jpg",
    "Instructions": "Preheat the oven to 400F/200C.\t\t\t\tCut the eggplant in half lengthwise and brush lightly with oil.\t\t\t\tPlace on a baking sheet, cut side down.\t\t\t\tRoast the eggplant for about 40 minutes or until tender. Let it cool.\t\t\t\tPlace the eggplant, garlic, oil, lemon, salt an peper in a food processor and process until fairly smooth but not completely pureed.\t\t\t\tTaste and add additional lemon juice and salt to taste.\t\t\t\tCover and refrigerate until needed.\t\t\t\tServe with pita."
  },
  {
    "Category": "Appetizers",
    "Name": "Baked Beef Sambusa",
    "NameLink": "http://www.mysomalifood.com/baked-beef-sambusa/",
    "Ingredients": "2 cups flour, �plus extra\t\t\t\t2 teaspoons baking powder\t\t\t\t1 egg, beaten\t\t\t\t1/4 cup olive oil or butter melted\t\t\t\t1/2 teaspoon salt",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/07/baked-beef-sambusa.jpg",
    "Instructions": "To make the pastry dough, in a bowl add the flour baking powder and salt egg and enough water to make a firm dough.\t\t\t\tknead until smooth and soft not sticky.\t\t\t\tCover the dough in a bowl and let it rest for 20 minutes.\t\t\t\tknead and divide the dough in to 16 pieces.\t\t\t\tFlour paste as a glue\t\t\t\tIn a small bowl, mix 1/4 cup flour and 1/4 cup�water to make a smooth paste.\t\t\t\tAssembly\t\t\t\tRoll one of the dough into 5 inch circle\t\t\t\tPick one the Sambusa wrappers with your hands and fold it into a cone shape seal it with flour paste.\t\t\t\tPlace a spoonful of the filling in the middle brush the edges with a flour paste or water and �shape it into a cone,\t\t\t\tclose the top with the paste if needed and shape like a triangle.\t\t\t\tPinch the edges so that it is completely sealed.\t\t\t\tContinue filling the rest of the Sambusas.\t\t\t\tBrush with the egg-wash on the top.\t\t\t\tBake 350f/180c for 25 minutes or until golden .\t\t\t\tIt is best served while warm."
  },
  {
    "Category": "Appetizers",
    "Name": "Baked Sambusas with Chicken",
    "NameLink": "http://www.mysomalifood.com/baked-sambusas-with-chicken/",
    "Ingredients": "3 1/2 cups all plain flour\t\t\t\t2 tablespoon oil\t\t\t\t1 egg\t\t\t\t1 cup milK\t\t\t\t2 teaspoon yeast",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/06/baked-sambuusa.jpg",
    "Instructions": "In a mixing bowl, mix together flour, yeast, salt,egg and oil and add the milk until combined.\t\t\t\tKnead the dough for 5 minutes until a soft dough is formed use more flour if sticky.\t\t\t\tPlace the dough in bowl and let it rise for 1 hour or until doubled in size."
  },
  {
    "Category": "Appetizers",
    "Name": "Date Filled Sambusa",
    "NameLink": "http://www.mysomalifood.com/date-filled-sambuuse/",
    "Ingredients": "2 � cups flour � cup water warm � cup milk warm 1 teaspoons yeast � cup sugar � teaspoon salt 1 egg 4 tablespoons oil\n1 cup soft dates, pitted and finely chopped 3 tablespoon oil/butter or ghee 1/2 teaspoon cardamom 1/4 teaspoon nutmeg",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/datesam.jpg",
    "Instructions": "Place the dates, butter, cardamom and nutmeg in a saucepan, over low heat, and stir occasionally until dates become a paste. Remove from the heat, and let it cool. In a bowl combine the yeast and the water leave it for 15 minutes. Stir in milk, sugar, salt, egg and the oil to the yeast mixture. Gradually stir in the flour to combine, kneed the dough to obtain soft dough. Cover and leave it to rise in a warm place. Divide the dough in to 2 equal portions and roll one on a lightly floured surface. Roll into a square 15�10 inch rectangle, divide into 9 equal squares. Spoon each square about 2 teaspoons of the filling in the center, then fold it into triangle. Brush the edges with water press with your fingers to seal it. Place on a baking sheet and repeat with the remaining ingredients. Preheat the oven 350f bake for 20 to 30 until golden"
  },
  {
    "Category": "Appetizers",
    "Name": "Easy Baajiya",
    "NameLink": "http://www.mysomalifood.com/easy-baajiya/",
    "Ingredients": "2 cups Blacked-eye beans, soaked overnight and drained\t\t\t\t1 onion, chopped\t\t\t\t2 cloves of garlic, chopped\t\t\t\t1 tablespoon cilantro, chopped\t\t\t\t1 teaspoon salt\t\t\t\t1 teaspoon coriander powder\t\t\t\t1 teaspoon cumi powder\t\t\t\t1 green chili, chopped optional",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/07/baajiye-sambusa.jpg",
    "Instructions": "Put all the ingredients in a food processor and pulse in to a paste or place them mortal and pestle in batches and and grind them in to a paste.\t\t\t\tIf you have time let them sit in the fridge for 2 hours.\t\t\t\tHeat the oil in a pan on medium heat and fry spoonfuls of the mixture until golden brown.\t\t\t\tServe with green chilli sauce or what ever sauce you like."
  },
  {
    "Category": "Appetizers",
    "Name": "Fried Fish",
    "NameLink": "http://www.mysomalifood.com/fried-fish/",
    "Ingredients": "1 lb haddock, cut into peaces 1 cup flour 1 teaspoon baking powder 1 egg Salt and pepper to taste 1 teaspoon chili powder",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/friedfish.jpg",
    "Instructions": "Heat oil in a large pan In a bowl combine, flour, egg, baking powder, salt, pepper and mix well until smooth. Drop the fish in the batter to cote and then place in the hot oil. Fry fish until golden. Drain on a pepper towel."
  },
  {
    "Category": "Appetizers",
    "Name": "Hummus: Chickpea Dip",
    "NameLink": "http://www.mysomalifood.com/hummus-chickpea-dip/",
    "Ingredients": "1 15 oz can chickpea, washed, drained 1 clove garlic 1/2 cup yogurt 2 tablespoon tahini 1 teaspoon salt 2 tablespoon lemon 2 tablespoon olive oil",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/hummus.jpg",
    "Instructions": "Place all the ingredient in a blender and process untill smooth, drizzle with more olive oil serve with pita. Garnish with olives."
  },
  {
    "Category": "Appetizers",
    "Name": "Khamiir with nigella seeds",
    "NameLink": "http://www.mysomalifood.com/khamiir-with-nigella-seeds/",
    "Ingredients": "2 1/2 cups of all-purpose plain flour\t\t\t\t1 cup milk/water\t\t\t\t2 tablespoons of butter/oil/ghee\t\t\t\t1 teaspoon yeast\t\t\t\t1 tablespoon sugar\t\t\t\t1 teaspoon nigella seeds\t\t\t\t1/2 teaspoon salt\t\t\t\toil for frying\t\t\t\tmore flour for kneeding",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/05/khamiir.jpg",
    "Instructions": "In a bowl add the flour yeast, sugar, nigella seeds and salt, rub the butter untill the mixture resembles bread cumbs, Gradually add enough water or milk to form a dough.\t\t\t\tWrap the dough in plastic wrap and leave in a warm place until it doubled in size.\t\t\t\tKnead the dough and roll on a floured surface, cut the dough in to various shapes with a sharp knife.\t\t\t\tDeep-fry in batches until golden on both sides, turning them once, drain on kitchen paper.\t\t\t\tServe with dates and tea."
  },
  {
    "Category": "Appetizers",
    "Name": "Nafaqo",
    "NameLink": "http://www.mysomalifood.com/nafaqo/",
    "Ingredients": "2 eggs 2 large potatoes, peeled 1 teaspoon cumin powder 1 teaspoon coriander powder 1 teaspoon turmeric salt and pepper bread crumbs oil for frying",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/08/nafaqo.jpg",
    "Instructions": "Place the potatoes in a large pan and cover with water and boil for 20 minutes or until tender, then mash with a fork season with salt and pepper, turmeric, coriander and cumin, mix well until combined. In the mean time place the eggs in another pan and boil until cooked. Peel the cooked eggs and cut into fourths then set aside. Take a heaping spoonful of the mashed potato slightly flatten with your hands. Place a piece of egg in the middle and cover with the mashed potato, and make a round or oval shape. Then roll the mashed potato balls with the bread crumbs until covered. Drop the naffaqos in the hot oil, and fry until golden brown."
  },
  {
    "Category": "Appetizers",
    "Name": "Quraac with nigella and buttermilk",
    "NameLink": "http://www.mysomalifood.com/quraac-with-nigella-and-buttermilk/",
    "Ingredients": "1 teaspooon nigella seeds (haba sauda)\t\t\t\t2 cups all-purpose plain flour\t\t\t\t2 teaspoons baking powder\t\t\t\t1/2 cup butter milk\t\t\t\t1 egg, beaten\t\t\t\t1/4 cup sugar\t\t\t\t2 tablespoons melted butter or oil",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/07/khamiirbuttermilk.jpg",
    "Instructions": "Mix all the ingredients and knead until it comes all together, if sticky add more flour and if too dry tablespoon of butter milk at a time.\t\t\t\tWrap the dough in plastic wrap and leave in a warm place for 20 minutes.\t\t\t\tKnead the dough and roll on a floured surface, 9 inch by 19 inch cut the dough in to diamonds.\t\t\t\tDeep-fry in batches until golden on both sides, turning them, drain on kitchen paper.\t\t\t\tServe with dates and tea."
  },
  {
    "Category": "Appetizers",
    "Name": "Sambusa filled with peas and potato",
    "NameLink": "http://www.mysomalifood.com/sambusa-filled-with-peas-and-potato/",
    "Ingredients": "� cup green peas, cooked 1 tablespoon chopped cilantro 2 teaspoon lemon juice 2 large potatoes, cooked, chopped in cubes 1 green chili 2 tablespoon oil 1 onion chopped 1 clove garlic � teaspoon turmeric 1 teaspoon coriander 1 teaspoon cumin 1 teaspoon fresh ginger, minced Salt and pepper � cup all-purpose flour � cup water, or as needed Sambusa wrappers Oil for frying",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2010/08/sambuuse.jpg",
    "Instructions": "In a skillet heat the oil and saut� the onions until browned. Add the ginger and garlic, coriander cumin, green chili, salt, turmeric and cook stirring until fragrant, season with salt and pepper. Add the potatoes and stir add the peas and cook for few minutes; add the cilantro and lemon juice. Take off the heat. And let it cool until we ready to use. In a small bowl, mix flour and the water to make a smooth paste. Pick one the sambusa wrappers with your hands and fold it into a cone shape seal it with flour paste. Fill the cone with the filling and close the top into a triangle shape and seal it with the flour paste. Pinch the edges so that it is completely sealed. Continue filling the rest of the sambusas. Heat the oil in frying pan, fry the sambusas until golden brown. Remove and drain on paper towels. Serve while warm."
  },
  {
    "Category": "Appetizers",
    "Name": "Sambusa Pastry",
    "NameLink": "http://www.mysomalifood.com/sambusa-pastry/",
    "Ingredients": "3 cups plain all-purpose flour 2 table spoon oil 1 cup Luke warm water salt more oil for brushing",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/08/sambuuse1.jpg",
    "Instructions": "Mix the flour oil and the salt, while using a fork mix in the water slowly, knead the though for 5-10 minutes until smooth and pliable dough. Form the dough into a ball and coat the outside with oil. Cover and set it aside for about 15 minutes. Heat a skillet on a medium-low heat. Knead the dough again and divide it into 8 equal portions Form each portion into a ball. Using two balls at a time roll both in 5inch brush one with oil and put the other one on top. Press with your fingers to make sure they line up, roll on a floured surface to flatten with a rolling pin about 9-10 inches in diameter. Cut into four peaces with a sharp knife, roll each peace again so it keeps its shape. Place each peace on the warm skillet and leave it each side to dry it out (make sure you don�t leave it too long). Remove and let it cool slightly then separate the two slowly without tearing the wrappers. Cover with a towel and continue to repeat the same steps until you have finished all peaces."
  },
  {
    "Category": "Appetizers",
    "Name": "Somali Sambusa",
    "NameLink": "http://www.mysomalifood.com/somali-sambusa/",
    "Ingredients": "1 pounds ground beef/lamb\t\t\t\t2 tablespoons oil\t\t\t\t1 small onion, chopped\t\t\t\t2 teaspoons coriander powder\t\t\t\t2 tablespoons cilantro, finely chopped\t\t\t\tgreen onion, chopped\t\t\t\t2 teaspoon cumin powder\t\t\t\t2 teaspoon cardamom powder\t\t\t\t1 teaspoon salt\t\t\t\t1 teaspoon pepper\t\t\t\t1 green chili\t\t\t\t1 clove garlic, minced\t\t\t\toil for frying",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/08/Sambusa1.jpg",
    "Instructions": "Mix the flour oil and the salt, while using a fork mix in the water slowly, knead the though for 5-10 minutes until smooth and pliable dough.\t\t\t\tForm the dough into a ball and coat the outside with oil. Cover and set it aside for about 15 minutes.\t\t\t\tHeat a skillet on a medium-low heat.\t\t\t\tKnead the dough again and divide it into 8 equal portions\t\t\t\tForm each portion into a ball.\t\t\t\tUsing two balls at a time roll both in 5inch brush one with oil and put the other one on top. Press with your fingers to make sure they line up, roll on a floured surface to flatten with a rolling pin about 10-11 inches in diameter.\t\t\t\tCut into four peaces with a sharp knife, roll each peace again so it keeps its shape.\t\t\t\tPlace each peace on the warm skillet and leave it each side to dry it out (make sure you don�t leave it too long).\t\t\t\tRemove and let it cool slightly then separate the two slowly without tearing the wrappers.\t\t\t\tCover with a towel and continue to repeat the same steps until you have finished all peaces."
  },
  {
    "Category": "Appetizers",
    "Name": "Sweet Fried Bread",
    "NameLink": "http://www.mysomalifood.com/sweet-fried-bread/",
    "Ingredients": "2 cups all-purpose flour\t\t\t\t1/4 cup sugar\t\t\t\t2 tablespoon oil\t\t\t\t1 teaspoon cardamom powder\t\t\t\t2 teaspoon baking powder\t\t\t\t1/2 cup lukewarm milk\t\t\t\t1 egg, beaten\t\t\t\tOil for frying",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/07/sweetfriedbread1.jpg",
    "Instructions": "In a bowl combine all the ingredient.\t\t\t\tKneed the dough lightly don't over work it.\t\t\t\tLeave it to rest for 30 min.\t\t\t\tRoll the though on a lightly floured surface.\t\t\t\tCut in to desired shapes.\t\t\t\tDeep fry until golden brown on both sides.\t\t\t\tDrain on a paper towel and serve."
  },
  {
    "Category": "Appetizers",
    "Name": "Tuna Sambusa",
    "NameLink": "http://www.mysomalifood.com/tuna-sambusa/",
    "Ingredients": "for the Sambusa filling\t\t\t\t1 small onion, chopped\t\t\t\t2 cans of tuna, drained\t\t\t\t1 tablespoon cilantro,chopped\t\t\t\t1 large potato, finely chopped\t\t\t\t2 teaspoons tomato-paste\t\t\t\tsalt and pepper to taste\t\t\t\t1 teaspoon coriander powder\t\t\t\t1/2 teaspoon turmeric powder\t\t\t\t1 teaspoon cayenne pepper",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/11/Tuna-Sambusa.jpg",
    "Instructions": "to make the dough\t\t\t\tIn a bowl add the flour and oil add warm water a little at a time to make pliable dough.\t\t\t\tknead the dough for 5 minutes on floured surface until the dough is smooth.\t\t\t\tCover and set aside for 20-30 minutes."
  },
  {
    "Category": "Desserts",
    "Name": "Bread pudding",
    "NameLink": "http://www.mysomalifood.com/bread-pudding/",
    "Ingredients": "7-8 slices bread 1/4 cup sugar 1/4 cup raisin 1 teaspoon cinnamon 3 eggs 2 1/2 cups milk 1 tablespoon custard powder 2 table spoon melted butter",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/02/breadp.jpg",
    "Instructions": "preheat the oven 180C/350F/gas mark 4, Brush a ovenproof dish with butter. Beat together eggs, sugar, cinnamon, vanilla, butter and the milk in a bowl. In another small dish beat the custard powder with some of the milk and mix, then add this to the egg and milk mixture. Cut the bread in small pieces, arrange in the dish, sprinkling with the raisins as you go layering. pour the custard mixture over the bread,bake in the preheated oven for 35-40 minutes until golden brown. serve warm with custard or vanilla ice cream."
  },
  {
    "Category": "Desserts",
    "Name": "Coconut Semolina Cake (Basbosa)",
    "NameLink": "http://www.mysomalifood.com/coconut-semolina-cake-basbosa/",
    "Ingredients": "1 1/4 cups sugar\t\t\t\t1 1/2 cups semolina flour\t\t\t\t2 cups coconut\t\t\t\t4 tablespoons butter melted\t\t\t\t1 cup milk\t\t\t\t2 eggs\t\t\t\t2 teaspoons baking powder\t\t\t\t1 teaspoon vanilla",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2014/02/coconut-semolina-cake.jpg",
    "Instructions": "Brush baking dish with oil or butter.\t\t\t\tPreheat the oven 350f/180c\t\t\t\tIn a bowl mix semolina flour, sugar,coconut, and baking powder.\t\t\t\tAdd the eggs, butter, milk and vanilla, mix well until all combined.\t\t\t\tTurn in to the prepared pan and level the top.\t\t\t\tBake in the over for 30 -35 minutes or until golden."
  },
  {
    "Category": "Desserts",
    "Name": "Coconut Sweet",
    "NameLink": "http://www.mysomalifood.com/coconut-sweet/",
    "Ingredients": "2 cups coconut, fresh or dried 14 oz can condensed milk 2 teaspoon cardamom, freshly grounded 1 tablespoon butter 1/4 cup sugar",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/11/qumbe-macaan.jpg",
    "Instructions": "In a sauce pan place the coconut, condensed milk, and the sugar on a medium heat. Stir constantly, making sure not to burn it for about 10 minutes until mixture thickens. Mix in the butter and the cardamom powder. Line a small pound cake pan with a parchment paper and spread the coconut sweets evenly and let it cool. When cool cut them squares, diamonds or shape them into balls."
  },
  {
    "Category": "Desserts",
    "Name": "Creme Caramel Cake",
    "NameLink": "http://www.mysomalifood.com/creme-caramel-cake/",
    "Ingredients": "For the Caramel\t\t\t\t1 cups sugar\t\t\t\t1/4 cup water",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/03/cremecaramelcake.jpg",
    "Instructions": "In a� saucepan combine sugar and water, heat until sugar is dissolved over medium heat.\t\t\t\tMake sure not to walk away or the sugar will burn quickly. Remove from heat once you have amber color.\t\t\t\tPour caramel over bottom of� 8 or 9 inch 20cm-23cm cake pan, tilting carefully to coat evenly. Let cool."
  },
  {
    "Category": "Desserts",
    "Name": "Date Banana Loaf",
    "NameLink": "http://www.mysomalifood.com/date-banana-loaf/",
    "Ingredients": "1/3 cup unsalted butter\t\t\t\t1/3 cup sugar\t\t\t\t2 tablespoons honey\t\t\t\t2 large eggs\t\t\t\t3 ripe bananas\t\t\t\t1/2 cup chopped dates\t\t\t\t1 cup plain flour\t\t\t\t1/2 cup wholemeal/wheat flour\t\t\t\t11/2 teaspoons baking powder\t\t\t\t1/2 cup Milk\t\t\t\t1/2 teaspoon salt",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/06/date-banana-loaf.jpg",
    "Instructions": "Preheat the oven to 350f/80c\t\t\t\tGrease a loaf-pan.\t\t\t\tWhisk the butter, honey and sugar in a large bowl for 5 minutes.\t\t\t\tAdd the eggs on at the time and mix.\t\t\t\tIn a food processor puree the dates and banana, and add this to the bowl and mix in.\t\t\t\tMix the flours, baking powder and salt and fold it it along with the milk.\t\t\t\tSpoon into the prepared loaf pan and level the top.\t\t\t\tPut it in the oven and bake for an 1 hour or until a tester inserted and comes out clean.\t\t\t\tLet it coll in the pan for 10 minutes before turning out."
  },
  {
    "Category": "Desserts",
    "Name": "Date Cake",
    "NameLink": "http://www.mysomalifood.com/date-cake/",
    "Ingredients": "1 1/2 cups plain flour 2 teaspoons baking powder 1/2 teaspoon salt 1 cup brown sugar 3 eggs 1 teaspoon ground cinnamon 1 teaspoon ground cardamom 1 teaspoon ground cloves 1 teaspoon vanilla extract 1/2 cup oil 1/2 cup date syrup",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/04/datecake.jpg",
    "Instructions": "Preheat oven 350F degrees Mix sugar, eggs in a large bowl, with a mixer, beat until thick and creamy. Add oil and date syrup then beat for few more minutes. Add flour,� baking powder, cloves, cinnamon and vanilla and beat until smooth. Pour batter into a prepared baking pan. Bake in preheated oven for 30-40 minutes or until a toothpick is inserted into the center , and comes out clean. Serve warm with scoop of your favorite vanilla ice cream and a drizzle of date syrup."
  },
  {
    "Category": "Desserts",
    "Name": "Easy Tiramisu (no eggs)",
    "NameLink": "http://www.mysomalifood.com/easy-tiramisu-no-eggs/",
    "Ingredients": "8 oz mascarpone\t\t\t\t1 cup cream, whipped\t\t\t\t1 teaspoon vanilla\t\t\t\t6 tablespoons caster sugar\t\t\t\t20-24 lady fingers\t\t\t\t2 cups of coffee, cooled\t\t\t\tUnsweetened coco powder (optional)",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2014/03/easy-tiramisu.jpg",
    "Instructions": "Dip the lady fingers one at the time into the coffee drain off any excess and arrange them in the base of a deep serving dish (square 8 inch).\t\t\t\tSpread half of the cream mixture over the biscuits.\t\t\t\tDip the remaining lady fingers and repeat the layers.\t\t\t\tChill in the refrigerator for at least 2 hours or over night.\t\t\t\tBefore serving, dust top with cocoa powder."
  },
  {
    "Category": "Desserts",
    "Name": "Orange Cake",
    "NameLink": "http://www.mysomalifood.com/orange-cake/",
    "Ingredients": "1 cup all purpose flour\t\t\t\t1 teaspoon baking powder\t\t\t\t1/2 cup oil\t\t\t\t3 eggs\t\t\t\t3/4 cup sugar\t\t\t\t2 tablespoons fresh orange juice\t\t\t\t2 teaspoons orange zest",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/07/orange-cake.jpg",
    "Instructions": "Heat the oven 350f, 180c or gas mark 4. Grease a loaf-pan.\t\t\t\tIn a bowl mix together the flour, baking powder and salt. set aside.\t\t\t\tIn another bowl beat the eggs until doubled in size.\t\t\t\tAdd the sugar, zest and the oil beat until it creamy.\t\t\t\tAdd the flour and mix until incorporated don't over mix.\t\t\t\tPut the mixture in to the greased baking pan.\t\t\t\tBake for 40 minutes or until a tester comes out clean.\t\t\t\tTo make the orange glaze\t\t\t\tMix all the ingredients and drizzle over the top of the warm cake."
  },
  {
    "Category": "Desserts",
    "Name": "Pineapple Upside-down Cake",
    "NameLink": "http://www.mysomalifood.com/pineapple-upside-down-cake/",
    "Ingredients": "1 cup sugar\t\t\t\t1/3 cup water\t\t\t\t20 oz/ 567 can pineapple slices\t\t\t\t1 1/2 cup all-purpose flour\t\t\t\t1/2 cup wholewheat flour\t\t\t\t3/4 cup packed light brown sugar\t\t\t\t2 eggs\t\t\t\t1/2 cup buttermilk\t\t\t\t1 teaspoon cardamom powder\t\t\t\t2 teaspoon baking powder\t\t\t\t1/4 teaspoon salt\t\t\t\t1/2 cup butter\t\t\t\tpineapple upside-down cake",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/06/pineapplecake2.jpg",
    "Instructions": "Preheat the oven to 350 degrees Fahrenheit .\t\t\t\tGenerously butter a 10-inch dish and arrange the pineapple in the dish about 8 slices.\t\t\t\tCombine 1 cup sugar and 1/3 cup water in a small pan and cook until it turns gold, don't stir only swirl.\t\t\t\tPour over the pineapple slices, cover evenly.\t\t\t\tIn a large bowl beat the butter add the sugar and beat light and fluffy.\t\t\t\tAdd the eggs beating after each addition..\t\t\t\tAdd the buttermilk, cardamom, vanilla, beat just until blended, add the flour, salt and baking powder.\t\t\t\tSpoon the batter over pineapple topping spread evenly, bake in the preheated oven about 45 or until it is cooked in the middle.\t\t\t\tCool the cake for 5 minutes, invert the cake into a flat plate.\t\t\t\tServe warm or room temperature."
  },
  {
    "Category": "Desserts",
    "Name": "Pressed Sugar Cookies with Cardamom",
    "NameLink": "http://www.mysomalifood.com/pressed-sugar-cookies-with-cardamom/",
    "Ingredients": "1 cup plain flour\t\t\t\t1 stick and 2 tablespoons unsalted butter\t\t\t\t1/2 tsp salt\t\t\t\t1/2 tsp ground cardamom\t\t\t\t1 tsp vanilla extract\t\t\t\t1/3 cup sugar caster sugar\t\t\t\t1 egg  yolk",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/05/biscuits.jpg",
    "Instructions": "Beat the sugar and butter in a mixer until pale and fluffy.\t\t\t\tAdd the egg and beat until smooth.\t\t\t\tThen add mix in the flour, salt and cardamom.\t\t\t\tPack the dough into cookie press, fit with desired shaped cookie plate.\t\t\t\tPress the dough out into ungreased baking sheet.\t\t\t\tBake the cookies until light golden on the sides."
  },
  {
    "Category": "Desserts",
    "Name": "Qureebaad : Butter Cookies",
    "NameLink": "http://www.mysomalifood.com/qureebaad-butter-cookies/",
    "Ingredients": "1 cup butter\t\t\t\t1 cup icing sugar\t\t\t\t2 1/2 cups plain flour\t\t\t\t1 teaspoon cardamom powder",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/08/qureebaad.jpg",
    "Instructions": "Melt the butter in a pan and let it cool.\t\t\t\tStir in the icing sugar then add the flour and the cardamom and mix until smooth.\t\t\t\tDivide in to two, and wrap each piece a plastic or parchment wrap and shaped it into a logs and let it cool for 20 minutes in the fridge.\t\t\t\tPreheat the oven to 350f/180c\t\t\t\tGrease a baking sheet.\t\t\t\tCut the logs of dough into disks and place them in to the prepared pan.\t\t\t\tBake for 20 minutes or until golden."
  },
  {
    "Category": "Desserts",
    "Name": "Rice Pudding",
    "NameLink": "http://www.mysomalifood.com/rice-pudding/",
    "Ingredients": "� cup basmati rice 3 cups milk 1 tablespoon butter � teaspoon vanilla 5 cardamom, crushed 1 cinnamon stick � cup raisins Salt",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/02/ricepudding1.jpg",
    "Instructions": "Wash the rice and place in a large pot, add two cups of water and let it boil slowly. When the water evaporates, mash the rice with a spoon, add two cups of milk, cardamom, cinnamon, vanilla, salt and sugar. Bring it to the boil and let it simmer until it becomes thick add here the remaining milk and the raisins cook and simmer until the pudding is creamy and thick. Let it cool, serve warm or cold"
  },
  {
    "Category": "Desserts",
    "Name": "Semolina cake",
    "NameLink": "http://www.mysomalifood.com/semolina-cake/",
    "Ingredients": "1/2 cup oil/butter 1/2 cup sugar 3 tablespoon millk 2 teaspoon baking powder 3 eggs 2 cups semolina 1/2 cup oil/butter 1/2 cup sugar 3 tablespoon millk 2 teaspoon baking powder 3 eggs 2 cups semolina",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/08/sam1.jpg",
    "Instructions": "Preheat the oven to 350F Grease baking dish (23cm/9inch square) Cream butter/oil, milk and sugar in a bowl add the eggs one at the time and mix. Add the semolina, baking powder and mix until combined. Turn in to the prepared pan and level the top. Bake for 30 minutes or until it is golden. Cut the cake in squares, or diamond shapes. Pour the cold syrup over the hot cake. Let it sit to cool and serve.  To make the syrup, in a small pan put the sugar and water. Bring it to the boil and keep boiling for 5 minutes. Stir in the orange blossom water. Let it cool."
  },
  {
    "Category": "Desserts",
    "Name": "Sweet Shells",
    "NameLink": "http://www.mysomalifood.com/sweet-shells/",
    "Ingredients": "1� 3/4 cup all purpose flour 1/4 cup semolina flour 2 table spoons oil/butter/ghee pinch of salt oil for frying water to form a dough 1 cup of sugar 3 tablespoons of water",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/06/shushume.jpg",
    "Instructions": "In a bowl rub the flour, salt and the oil/ghee/ butter using your fingers until the mixture has the consistency of crumbs. Add tablespoons of water at a time to make a soft dough. In the meantime, boil the water and the sugar in pan on medium high until tick syrup. Take marbled sized balls of dough and flatten as shown in the picture, using a back of the fork press with your thumb and roll forward to make a shell, keep it aside and finish with the rest of the shells. Heat the oil in a pan and fry the shells until golden, drain on a kitchen paper. Dip the shells in to the syrup to coat evenly. Let it cool and serve."
  },
  {
    "Category": "Desserts",
    "Name": "Vanilla Bundt Cake",
    "NameLink": "http://www.mysomalifood.com/vanilla-bundt-cake/",
    "Ingredients": "1 1/2 cup selfraising flour\t\t\t\t2 sticks unsalted butter\t\t\t\t1 cup sugar\t\t\t\t5 eggs\t\t\t\t1 teaspoon vanilla\t\t\t\t1/2 teaspoon salt",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2014/12/bundtcake1.jpg",
    "Instructions": "Preheat oven to 350. Spray a Bundt pan with cooking spray.\t\t\t\tBeat butter and sugar together in a bowl with a mixer on medium speed until pale and fluffy, 2 to 3 minutes.\t\t\t\tAdd eggs, one at a time, beating well after each addition and scraping down sides of bowl.\t\t\t\tAdd the flour and salt into the mixture and mix until combined .\t\t\t\tPour the batter into prepared pan.Bake cake until golden and a wooden skewer inserted comes out clean, about 50 to 60 minutes. Cool completely before turning out."
  },
  {
    "Category": "Grains & Legumes",
    "Name": "Baajiye: Black Eyed Bean Fritters with hot sauce",
    "NameLink": "http://www.mysomalifood.com/baajiye-blacked-eyed-bean-fritters-with-hot-sauce/",
    "Ingredients": "2 � cups of black-eyed beans 1 onion, chopped 2 cloves garlic, chopped 1 jalapeno, chopped 1 table spoon cilantro chopped 2 green onions 1 teaspoon baking powder � cup all propose flour/ gram flour Salt and pepper to taste 2/3 cup water",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/babjiye.jpg",
    "Instructions": "Soak the black-eyed beans in cold water overnight. Drain the beans and then remove the skin by rubbing the beans between the palms of your hands. Put the beans in a bowl filled with water and the skins will float to the surface. Discard the skin. Place the beans in a food processor with the all the ingredients. Process the mixture to make a thick paste. If it is watery add more flour, and if it is bather is tick add more water. Heat the oil in a pan and fry spoonfuls of the mixture until golden brown. Serve with basbaas sauce."
  },
  {
    "Category": "Grains & Legumes",
    "Name": "Bulgur with strawberries, raisins and honey",
    "NameLink": "http://www.mysomalifood.com/bulgur-with-strawberries-raisins-and-honey/",
    "Ingredients": "1 cup Bulgur 2 cups of water 1/2 teaspoon salt honey to taste 1/2 cup raisins 1 cup yogurt 1 cup chopped strawberries",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2010/12/bu1.jpg",
    "Instructions": "In a sauce pan add the water and salt bring it to a boil. wash the bulgur and drain ad to the boiling water. Remove from the heat and cover for 20 minutes. Bulgur comes in different sizes of coarseness, add more water if you need to. Serve bulgur with yogurt on top and sprinkle raisin, strawberries, drizzle with honey."
  },
  {
    "Category": "Grains & Legumes",
    "Name": "Creamy Pearled Barley Porridge",
    "NameLink": "http://www.mysomalifood.com/creamy-pearled-barley-porridge/",
    "Ingredients": "1 cup Pearl Barley\t\t\t\t6 cups of water\t\t\t\tsalt\t\t\t\tCinnamon\t\t\t\tbutter optional\t\t\t\tmilk",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/10/w1.jpg",
    "Instructions": "In a large saucepan bring the water to a boil, add salt to taste add the barley, simmer uncoverd utill tender for an hour. Add more milk and cook untill reached disired consistency for a creamier barley.\t\t\t\tServe with more milk, yogurt, buttermilk, butter and cinnamon to taste."
  },
  {
    "Category": "Grains & Legumes",
    "Name": "Haricot Beans",
    "NameLink": "http://www.mysomalifood.com/haricot-beans/",
    "Ingredients": "1 pound haricot beans 4 table spoon oil 1 red/green pepper 2 cloves of garlic, chopped 1 large onion chopped 1 (15-ounce) can chopped tomatoes 2 tablespoons tomato paste 2 teaspoon cayenne pepper � cup cilantro, chopped 1 Maggi bouillon Salt and pepper, to taste",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/beans.jpg",
    "Instructions": "Put the haricot beans in a bowl, cover with water and soak overnight. Heat the oil in a large pan over medium heat and cook the onions until soft, add garlic and cook briefly season with salt and pepper. Add the tomato paste, tomato, pepper and cayenne, cook for 5 minutes. Stir in the cilantro. Drain the beans and add to the pan with 3 cups of hot water and the Maggi. Bring it to a boil, cover and simmer for 1 to 1 � hours until the beans are tender, add more water if necessary."
  },
  {
    "Category": "Grains & Legumes",
    "Name": "Sorghum & Corn flour Hot Cereal",
    "NameLink": "http://www.mysomalifood.com/shuurosoor/",
    "Ingredients": "1/2  cup corn flour\t\t\t\t1/2 cup sorghum flour\t\t\t\tpinch of salt\t\t\t\t2 cups milk\t\t\t\t2 cups water\t\t\t\tsugar/honey\t\t\t\tpinch of cinnamon",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/07/photo.jpg",
    "Instructions": "In a heavy pan bring the water and milk to a rolling boil.\t\t\t\tStir the corn and sorghum to the boiling water and milk, constantly stir.\t\t\t\tReduce the heat on a medium and let it simmer, stir occasionally .\t\t\t\tKeep stirring until it thickens add more water or milk to get softer consistency, according to your preference.\t\t\t\tServe hot with butter, milk, sugar, honey, buttermilk, or yogurt."
  },
  {
    "Category": "Grains & Legumes",
    "Name": "Sorghum Cereal : Garow",
    "NameLink": "http://www.mysomalifood.com/garow/",
    "Ingredients": "2 cups of Sorghum/Millet Salt to taste Butter, Sugar, Milk to taste",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/02/garow.jpg",
    "Instructions": "Clean the sorghum water until it is clear. In a large pot combine the sorghum and enough water to come 2 inches over the sorghum. Bring to a boil and cook uncovered for 1 hour, or until tender, add more water if it needed. Stir occasionally. Drain and let cool. Serve in a bowl with butter sugar and milk"
  },
  {
    "Category": "Grains & Legumes",
    "Name": "Sweet Adzuki Beans : Digir",
    "NameLink": "http://www.mysomalifood.com/sweet-adzuki-beans-digir/",
    "Ingredients": "2 cups adzuki bean\t\t\t\tsalt",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/03/digir.jpg",
    "Instructions": "Rinse the beans and soak with water and let it sit for overnight, to reduce cooking time.\t\t\t\tDrain the beans and rinse again , in a saucepan boil beans and water, bring to a boil over high heat.\t\t\t\tReduce heat to medium to low, partially, or fully covered as long as it doesn't over follow, keep an eye on it, and cook 30-40 minutes.\t\t\t\tI you decide to add the rice you can add it in the last 10-15 minutes for the rice to be cooked.\t\t\t\tContinue to simmer until the rice is cooked.\t\t\t\tServe with sugar and sesame oil and milk."
  },
  {
    "Category": "Grains & Legumes",
    "Name": "Sweet and Creamy Millet",
    "NameLink": "http://www.mysomalifood.com/sweet-and-creamy-millet/",
    "Ingredients": "1 cup millet\t\t\t\t2 cups of water\t\t\t\t2 cups of milk and more\t\t\t\tsalt",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/11/millet.png",
    "Instructions": "In a dry saucepan toast the millet for few minutes for deeper flavor, stir continuously\t\t\t\tto avoid burning .\t\t\t\tAdd water, bring to a boil, then reduce heat and simmer for bout 20 minutes all the liquid will absorbed.\t\t\t\tAdd the milk, salt and butter to taste cook for 5-10 more minutes until desired consistency reached, for a creamier millet.\t\t\t\tServe with more milk, honey, dried or fresh fruits, nuts. Adding a dash of cinnamon will spice it up."
  },
  {
    "Category": "Main Courses",
    "Name": "Baamiye Suqaar",
    "NameLink": "http://www.mysomalifood.com/baamiye-suqaar/",
    "Ingredients": "1 pound lamb/beef, cubed 2 potato, diced 1/2 pound okra, sliced 1 squash, diced 1 tomato, chopped 1 chicken cube 1 onion, chopped 1 green onion, chopped 2 tablespoon cilantro, chopped 1 teaspoon coriander powder 1 teaspoon cumin powder 2 tablespoon oil",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/07/bamiyesuqaar.jpg",
    "Instructions": "On a medium heat the meat with the oil on a large skillet or a saucepan until brown. Add the onion and cook until tender, then add the potato and stir for 5 minutes. Season with the salt and the spices. Add the tomato, garlic, cilantro, and the squash. Mix the chicken cube with a little water and mix until dissolved then add it to the skillet. Stir in the okra, green onion, finish cooking until all the vegetables are tender Serve with sabaayad."
  },
  {
    "Category": "Main Courses",
    "Name": "Beef Lasagna",
    "NameLink": "http://www.mysomalifood.com/beef-lasagna/",
    "Ingredients": "12 sheets precooked lasagna\t\t\t\t15 oz 425g Ricotta cheese\t\t\t\t1 cup milk\t\t\t\t1 egg\t\t\t\t2 cups grated mozzarella cheese",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/07/beef-lasagna.jpg",
    "Instructions": "To make the sauce, heat the oil in a large pan over medium heat add the meat and cook until browned stirring frequently. Add the onion stir and cook for 5 minutes.\t\t\t\tStir in the tomatoes, coriander/cilantro leaves, garlic, tomato paste and cook for 5 minutes. season to taste with salt and pepper, cover and let it simmer gently for 45 minutes, siring occasionally.\t\t\t\tIn a mixing bowl whisk the egg, then add the ricotta and the milk and mix until combined.\t\t\t\tPreheat the oven, 375f/190c.\t\t\t\tSpoon a thin layer of the sauce on the bottom of an ovenproof dish, then arrange sheets of lasagna over. then spoon over a layer of the ricotta mix then some mozzarella cheese.\t\t\t\tContinue the same process twice, finishing with a layer of ricotta. sprinkle over the mozzarella.\t\t\t\tBake covered for 30 minutes then uncover and cook until  golden-brown and bubbly. serve immediately."
  },
  {
    "Category": "Main Courses",
    "Name": "Chicken Suqaar",
    "NameLink": "http://www.mysomalifood.com/chicken-suqaar/",
    "Ingredients": "1 pound chicken cube 1 squash/ zucchini, sliced 1 small onion, diced 1 teaspoon vinegar 1 teaspoon cumin 1 teaspoon chili powder Salt and pepper to taste 2 teaspoon oil 2 teaspoon lemon 1 teaspoon cilantro/coriander chopped",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2010/11/digaag.jpg",
    "Instructions": "On a skillet brown the chicken with oil on high heat, season with salt and pepper, chili powder and cumin powder. Stir the onions until soft, add squash, lemon, vinegar and the cilantro/coriander . Continue stirring until the squash is tender don�t over cook it. Serve with rice, lahooh, sabaayad or bread."
  },
  {
    "Category": "Main Courses",
    "Name": "Injera: Ethiopia Sourdough FlatBread with Chicken Stew",
    "NameLink": "http://www.mysomalifood.com/injera-ethiopia-sourdough-flatbread-with-chicken-stew/",
    "Ingredients": "2 cup all-purposeflour\t\t\t\t� cup cornmeal flour\t\t\t\t� cup teff flour\t\t\t\t2 teaspoon yeast\t\t\t\t1/2 cup sourdough starter\t\t\t\t3 1/4 cups lukewarm water",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/10/injera.jpg",
    "Instructions": "In a mixer or a blender combine all the ingredient and mix or blend until there are no lumps.\t\t\t\tCover and set aside to rest at a warm place for 2 hours.\t\t\t\tHeat a nonstick skillet on a medium heat.\t\t\t\tTake about � cup of the batter and pour it in the skillet tilting to coat most of the bottom.\t\t\t\tCook, until moisture has evaporated and when lots of holes form in the injera and the edges lift from the pan.\t\t\t\tRemove and let cool each injera before stacking them as you go along."
  },
  {
    "Category": "Main Courses",
    "Name": "Lahooh and Lentil",
    "NameLink": "http://www.mysomalifood.com/lahooh-and-lentil/",
    "Ingredients": "1 cup green lentils\t\t\t\t2 cups water and more if needed\t\t\t\t2 tablespoons oil\t\t\t\t1 smalll onion chopped\t\t\t\t2 cups baby spinach leaves\t\t\t\t1 large tomato, chopped\t\t\t\t1 teaspoon cumin\t\t\t\t2 cloves garlic chopped\t\t\t\tfresh lemon juice\t\t\t\tsalt,ground black pepper to taste",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/07/lahooh-and-lentil.jpg",
    "Instructions": "In a sauce pan bring water to a boil add the lentil, simmer until the lentils are tender about 20-30 minutes add more water if needed.\t\t\t\tDrain any excess water and set aside.\t\t\t\tHeat the oil in a large skillet over medium heat.\t\t\t\tAdd the onion and cook, about 4-5 minutes until softened.\t\t\t\tAdd the tomatoes, cumin and garlic and cook about few minutes,stir to combine.\t\t\t\tStir in the cooked lentil and cook for 5- 10 more minutes.\t\t\t\tSeason with salt and pepper and serve with lahooh."
  },
  {
    "Category": "Main Courses",
    "Name": "Lahooh with Suqaar and Eggs",
    "NameLink": "http://www.mysomalifood.com/lahooh-with-suqaar-and-eggs/",
    "Ingredients": "1 lb beef cubes, suqaar\t\t\t\t2 large tomatoes , chopped\t\t\t\t2 eggs\t\t\t\t1large onion chopped\t\t\t\t2 tablespoons Oil\t\t\t\t1 cloves garlic, chopped\t\t\t\t1 teaspoon coriander powder\t\t\t\t1 teaspoon paprika\t\t\t\tSalt and pepper\t\t\t\t2 green onion, chopped",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/10/suqaar-lahooh.jpg",
    "Instructions": "In a deep skillet on high heat add the meat and stir until brown.\t\t\t\tAdd oil and stir for few minutes season with salt and pepper.\t\t\t\tAdd the onion and stir for few more minutes.\t\t\t\tAdd the tomatoes and the garlic, coriander and paprika. Cook for 5 minutes.\t\t\t\tMake two holes by spreading the meat then crack the eggs drop them in to the holes.\t\t\t\tCook covered until the eggs have cooked through. Alternatively bake it in the oven 15-20 min until the eggs are set.\t\t\t\tServe with lahooh."
  },
  {
    "Category": "Main Courses",
    "Name": "Lamb Stew : Sanuunad Hilib Adhi",
    "NameLink": "http://www.mysomalifood.com/lamb-stew-sanuunad-hilib-adhi/",
    "Ingredients": "1lb lamb medium cut 3 large potatoes, cubed 3 large carrots, cubed 1 large onion, chopped 4 large tomatoes, chopped 3 tablespoons oil salt",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/08/lamb-stew.jpg",
    "Instructions": "Heat oil in a pan add the meat and sear on both sides on a medium heat . Add onion, and saute for few minutes add potatoes and carrots cook for 5 more minutes. Then add tomatoes saut� another 5 minutes. Add 3 cups of water bring to a boil then cook covered on a low until the stew is thick and the vegetables are tender(add more water if needed). Serve with rice."
  },
  {
    "Category": "Main Courses",
    "Name": "Slow roasted leg of lamb",
    "NameLink": "http://www.mysomalifood.com/slow-roasted-leg-of-lamb/",
    "Ingredients": "1 (6-pound) leg of lamb, bone-in 1 small onion, roughly chopped 4 cloves garlic 2 tablespoons cilantro 1 tablespoon ginger chopped juice of 1 lemon 2 tablespoons olive oil 2 teaspoons cardamom, powder 2 teaspoons coriander, powder 2 teaspoon cumin, powder salt, pepper to taste 1 tablespoon berbere recipe here (optional) 3 carrots , peeled, cut into chunks� (optional) 4 medium potatoes,peeled, cut into chunks (optional)",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/10/leg_lamb1.jpg",
    "Instructions": "In a blender or a food processor blend the onion, garlic, cilantro, oil, lemon and the spices until combined. Rub the marinade all over the lamb and season with salt and pepper Put the leg of lamb in a large bag and wrap it tightly with little air in the bag as possible. Let it sit in your refrigerator for two hours to overnight. Remove the leg of lamb from the refrigerator and let it come to a room temperature. Sprinkle with� berbere, salt and pepper. Preheat the oven 450F Place lamb in a roasting pan and cover tightly with foil and place in the oven. Turn the oven temperature down to 325F Cook this for about 3 1/2 hours. Last 20 minutes when the lamb is cooked add the carrots and potatoes and cook uncovered. The lamb is ready when it falls of the bone,and the vegetables are tender. Remove the lamb from the oven and let it rest covered in a foil. As a side dish I have made quick spinach and cabbage and the potatoes where roasted with the lamb in the end. Serve over rice if you prefer."
  },
  {
    "Category": "Main Courses",
    "Name": "Bariis Fahfah, Rice Pilaf",
    "NameLink": "http://www.mysomalifood.com/bariis-fahfah/",
    "Ingredients": "2 cups basmati rice 3 cups of stock 2 garlic, chopped 2 tablespoons oil 1 onion sliced 1 teaspoon salt 4 whole cardamom pods 1 cinnamon stick 5 black peppercorns 2 teaspoon cumin",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/02/bariisfahfah.jpg",
    "Instructions": "Rinse the rice well in cold water until most of the starch is removed. Heat the oil in a pan on a medium heat, saut� the onions until brown. Season with salt, add peppercorns, garlic, cinnamon stick, cardamom and the cumin and cook for few more minutes. Add the drained rice and stir for about 2-3 minutes. Add the stock and stir in and cover, bring it to a boil and then reduce the heat. Continue to cook gently on a low heat until the rice is tender about 10 to 15 minutes, you can add more to achieve desired consistency. Garnish with onions or raisin, sprinkle with some saffron powder. Gently fluff the rice with a fork and serve."
  },
  {
    "Category": "Main Courses",
    "Name": "Beef Stew with Green Peas and Potato",
    "NameLink": "http://www.mysomalifood.com/beef-stew-with-green-peas-and-potato-served-with-rice/",
    "Ingredients": "1 lb beef cubes 4 cardamom pods 2 tablespoon cilantro, chopped 2 garlic cloves, minced 1 tablespoon ginger 1 cup frozen peas 4 potatoes, cut into cubes 1 large onion, chopped 4 tomatoes, chopped 1 tablespoon tomato paste 1 Maggi beef cube 1 teaspoon chili powder 2 teaspoon cumin powder 1 teaspoon coriander powder 1 teaspoon turmeric powder 4 tablespoon oil Basmati rice, to serve with",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/07/peasbeef.jpg",
    "Instructions": "1 lb beef cubes 4 cardamom pods 2 tablespoon cilantro, chopped 2 garlic cloves, minced 1 tablespoon ginger 1 cup frozen peas 4 potatoes, cut into cubes 1 large onion, chopped 4 tomatoes, chopped 1 tablespoon tomato paste 1 Maggi beef cube 1 teaspoon chili powder 2 teaspoon cumin powder 1 teaspoon coriander powder 1 teaspoon turmeric powder 4 tablespoon oil Basmati rice, to serve with"
  },
  {
    "Category": "Main Courses",
    "Name": "Fluffy White Rice : Bariis Cad",
    "NameLink": "http://www.mysomalifood.com/fluffy-white-rice-bariis-cad/",
    "Ingredients": "1 cup basmati rice\t\t\t\t1 1/2 cup water\t\t\t\tsalt and pepper to taste\t\t\t\t1 tablespoon oil or butter\t\t\t\t1 tablespoon  vinegar\t\t\t\t1 tablespoon lemon juice",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2014/02/white-rice.-bariis-cad.jpg",
    "Instructions": "Wash the rice and drain.\t\t\t\tIn a saucepan, bring water to a boil.\t\t\t\tStir in the rice, oil or butter, vinegar, lemon juice season with salt and pepper.\t\t\t\tCover and reduce heat and simmer for 20 minutes or until all water is absorbed.\t\t\t\tTest the rice if it needs a bit of water you can add to it now.\t\t\t\tFluff with a fork and serve warm"
  },
  {
    "Category": "Main Courses",
    "Name": "Iskudheh Karis: Chicken Pilaf",
    "NameLink": "http://www.mysomalifood.com/isku-dhex-karis-with-chicken/",
    "Ingredients": "1 small chicken cut into pieces 2 cups of basmati rice 3 cups of water 1 onion, diced 2 chopped garlic cloves 5 cardamoms 4 cloves 1 cinnamon sticks 1 teaspoon cumin powder 1 teaspoon coriander powder 2 tablespoon cilantro, chopped 1 teaspoon ginger 2 tablespoon tomato paste 1 Maggie chicken bouillon cube 2 medium tomatoes, chopped 1 green chili pepper, seeded, chopped salt and pepper to taste",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/iskudhexkaris.jpg",
    "Instructions": "Wash the rice well in cold water until most of the starch is removed and let it to soak in water for 30 minutes. Heat the oil in a heavy pan on a medium heat; add the chicken season with salt and pepper and saut� until brown and crisp. Add the onion and the garlic and fry gently for 5-6 minutes until softened. Stir in the cardamoms, cloves, cinnamon stick, and ginger. Add the chopped tomatoes, chili, cumin, coriander, cilantro and the tomato paste and cook until tomato is soft. Drain the rice and mix with the sauce until combined. Pour the water and the Maggie and mix well, bring it to boil then cover. Simmer gently on a low heat for 15-20 minutes until all the liquid has been absorbed and the rice is done."
  },
  {
    "Category": "Main Courses",
    "Name": "Kaluun iyo Bariis: Spicy Fish Sauce with Rice",
    "NameLink": "http://www.mysomalifood.com/kaluun-iyo-bariis-spicy-fish-sauce-with-rice/",
    "Ingredients": "1 whole fish red snapper/king fish, cleaned and cut 3 potatoes 1 chili pepper 2 carrots � cup cilantro 2 cloves of garlic salt and pepper to taste 2 tomatoes, chopped 1 tablespoon tomato paste 2 teaspoon tamarind paste 1 onion, chopped 1 eggplant, chopped",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/kaluunbariis.jpg",
    "Instructions": "Fry the fish both sides with a little oil, and set aside in a warm place. Saut� the onions in the same pan. until golden. Add the garlic and stir for few minutes. Add the potato and the carrots cover and cook for 5 minutes. Add seasonings and the tomatoes, tomato paste, tamarind eggplant and cilantro. Cook until tomatoes are tender. Put the fish back in the sauce and cook on a medium eat add a little water as needed. Continue to cook until the vegetables are tender. Serve with rice."
  },
  {
    "Category": "Main Courses",
    "Name": "Lamb Meatballs In Yogurt Sauce",
    "NameLink": "http://www.mysomalifood.com/lamb-meatballs-in-yogurt-sauce/",
    "Ingredients": "I lb ground lamb 1 tablespoon ginger 1 onion, chopped 2 cloves of garlic, minced 1 green chili, chopped 1 egg, beaten 2 tablespoon cilantro, chopped 2 green onions, chopped Juice of � a lemon For the Tomato Sauce I lb ground lamb 1 tablespoon ginger 1 onion, chopped 2 cloves of garlic, minced 1 green chili, chopped 1 egg, beaten 2 tablespoon cilantro, chopped 2 green onions, chopped Juice of � a lemon",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/bariismeatball.jpg",
    "Instructions": "I lb ground lamb 1 tablespoon ginger 1 onion, chopped 2 cloves of garlic, minced 1 green chili, chopped 1 egg, beaten 2 tablespoon cilantro, chopped 2 green onions, chopped Juice of � a lemon"
  },
  {
    "Category": "Main Courses",
    "Name": "Lamb Surbiyaan: Surbiyaan Hilib Adhi",
    "NameLink": "http://www.mysomalifood.com/lamb-surbiyaan-surbiyaan-hilib-adhi/",
    "Ingredients": "Ingredients Caramelized onion and raisins 1/4 cup oil 1 onion, sliced 1/2 cup raisins Saffron 1/4 cup water 1 teaspoon saffron threads Boiling the Rice 3 cups basmati rice 5-6 cups of water The Lamb sauce 2 pounds lamb, medium cut 1 small onion, chopped 2 medium tomatoes, chopped 2 cloves garlic, chopped 1-2 tablespoons coriander/cilantro leaves 2 teaspoons coriander powder 2 teaspoons cumin powder 1-2 teaspoons paprika or a cayenne pepper 2-4 tablespoons oil (use the left over from the caramelized onions) 5 cardamom pods cracked 2 cinnamon sticks 2 tablespoons lemon juice",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/08/surb.jpg",
    "Instructions": "Caramelized onion and raisins Heat the oil over medium heat, add the onion and fry until nice and brown. Add the raisins and cook until they puff up. Drain on a kitchen paper Keep this a side we will, add this mixture over rice. Soak the Saffron In a small bowl add the saffron pour hot water into the bowl. let is soak for 4- 20 minutes Boiling the Rice Start boiling the water in a sauce pan . when boiled, add the rice and salt to sate. Cook about 4 minutes depending on your heat the rice should be cooked half way use your hand to test it, break the rice grain in your hand. Drain the rice in a colander and let it cool until needed. Cooking the lamb In a large pot fry the lamb with the oil until brown both sides Add onions saute until brown add cardamom, cinnamon sticks, lemon juice, then add garlic add tomatoes, spices and cilantro Mix this together until combined then cook for 3 minutes until fragrant, add the 1/2 cup of water Let it simmer while covered on a medium heat until boil and then lower the heat for 10- 15 minutes. Now we need the boiled rice add it to the lamb sauce, scrape the top evenly. Add the caramelized onion and raisins. Add the saffron water cover the pot and cook on a medium heat until boil, then reduced the heat on a simmer. The bottom of the pan will be dry and there will be no water left make sure not to burn the bottom. The rice should be fluffy"
  },
  {
    "Category": "Main Courses",
    "Name": "Plain Rice flavored with spices",
    "NameLink": "http://www.mysomalifood.com/plain-rice-flavored-with-spices/",
    "Ingredients": "2 cups basmati rice 3 cups of water 2 tablespoons ghee/oil 1 onion sliced 1 teaspoon salt 4 whole cardamom pods 1 cinnamon stick 5 black peppercorns 2 teaspoon cumin 1 chicken cube",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/11/bariis.jpg",
    "Instructions": "Rinse the rice well in cold water until most of the starch is removed. Heat the oil in a pan on a medium heat, and saut� the onions until brown. Add salt, pepper, cardamom, cinnamon and the cumin and cook until the onions are brown. Add the drained rice and stir for about 2-3 minutes. Add the water and chicken cube and stir in and cover, bring it to a boil and then reduce the heat. Continue to cook gently on a low heat until the rice is tender about 10 to 15 minutes."
  },
  {
    "Category": "Main Courses",
    "Name": "Rice with Vermicelli Noodles: Cadriyad iyo Bariis",
    "NameLink": "http://www.mysomalifood.com/rice-with-vermicelli-noodles-cadriyad-iyo-bariis/",
    "Ingredients": "2 cups Basmati Rice 3 cups of water 1 cup of vermicelli 1 small onion, chopped 4 tablespoons oil salt",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/08/6.jpg",
    "Instructions": "Wash the rice and let it soak for 30 minutes. Break the vermicelli noodles into small pieces. fry them with 2 tablespoons of oil on a skillet until golden color. Set aside. In a sauce pan add 2 tablespoons oil and fry the onions for 4 minutes. Add the drained rice and 3 cups water season with salt, bring to a boil turn down the heat and leave to a simmer for 10 minutes. Add the vermicelli to the rice and cover. Mix well with the rice and cover the pan and simmer on a low heat until the rice has soaked all the water and both the rice and vermicelli are tender. Add little water if needed."
  },
  {
    "Category": "Main Courses",
    "Name": "Somali Style Rice : Surbiyaan",
    "NameLink": "http://www.mysomalifood.com/somali-style-rice-surbiyaan/",
    "Ingredients": "6 pieces chicken (Thighs & Legs )\t\t\t\t3 cups basmati rice\t\t\t\t5 cardamom pods, crushed\t\t\t\t2 black cardamom\t\t\t\t2 cinnamon sticks\t\t\t\t5 peppercorn\t\t\t\t1 onion, chopped\t\t\t\t3 cloves\t\t\t\t2 teaspoons cumin, powder\t\t\t\t1 teaspoon ginger, powder\t\t\t\t2 teaspoons coriander powder\t\t\t\t1 teaspoon paprika/red pepper\t\t\t\t2 teaspoon cilantro, chopped\t\t\t\t2 cloves garlic, chopped\t\t\t\t1/2 green pepper, chopped\t\t\t\t1 cup yogurt\t\t\t\t1/2 lemon\t\t\t\ttwo medium tomatoes, chopped",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/02/surbiyaan.jpg",
    "Instructions": "Clean and soak the rice with water and let it rest of 30 minutes.\t\t\t\tFry the chicken with the oil until brown, add cardamom, black cardamom, cinnamon sticks, cloves, pepper corn.\t\t\t\tAdd onions saute until brown then add garlic add tomatoes .\t\t\t\tAdd the yogurt when tomatoes are tender.\t\t\t\tThen add the juice of a lemon, cumin, ginger, coriander, paprika and the cilantro.\t\t\t\tLet it simmer while covered on a medium heat until boil and then lower the heat for 10- 15 minutes.\t\t\t\tIn another saucepan add the rice in boiling water cook until the rice is half done.\t\t\t\tDrain and add the rice to the chicken sauce and cook until the rice is tender on a medium heat covered, add the garnish."
  },
  {
    "Category": "Salads",
    "Name": "Beet Salad with Mustard Vinaigrette",
    "NameLink": "http://www.mysomalifood.com/beet-salad-with-mustard-vinaigrette/",
    "Ingredients": "Beets, boiled, peeled, sliced into strips 1 onion, sliced 1 head iceberg or romaine salad 2 hard boiled eggs 1 tomato sliced Vinaigrette: 4 tablespoons olive oil juice of one lemon 1 teaspoon mustard 2 tablespoon vinegar Salt and pepper to taste",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/08/beetsalad.jpg",
    "Instructions": "Wash the salad and cut in to pieces. In a small bowl, mix together olive oil, lemon juice, mustard, salt, pepper and vinegar. Arrange the salad on a serving plate, top the beets, eggs and onions. Drizzle over the vinaigrette."
  },
  {
    "Category": "Salads",
    "Name": "Cucumber and Tomato Salad",
    "NameLink": "http://www.mysomalifood.com/cucumber-and-tomato-salad/",
    "Ingredients": "1/2 cucumber sliced 1 small red onion, chopped 2 tomato chopped finely 1/2 lettuce, cleaned, chopped thinly juice of half a lemon 1 tablespoon vinegar 2 tablespoon olive oil salt and pepper to taste",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/salad.jpg",
    "Instructions": "In a medium bowl combine the vinegar, lime juice, olive oil, salt and pepper stir well. Putt salad in a serving bowl, top with the cucumber, onion and the tomato. Drizzle over the dressing and serve."
  },
  {
    "Category": "Salads",
    "Name": "Egg Salad",
    "NameLink": "http://www.mysomalifood.com/egg-salad/",
    "Ingredients": "1 small head romaine, cut into bite size 1 carrot, grated 1 small onion, sliced 1 tomato, sliced 1 small cucumber, sliced 2 hard boiled eggs, sliced Dressing: 2 tablespoons olive oil juice of one lemon 1 -2 teaspoon mustard 2 tablespoon vinegar Salt and pepper to taste 2 tablespoons yogurt",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/05/eggsalad.jpg",
    "Instructions": "In a bowl, mix the salad, tomatoes, carrot, cucumber, onions, and the eggs."
  },
  {
    "Category": "Salads",
    "Name": "Fava Bean Salad",
    "NameLink": "http://www.mysomalifood.com/fava-bean-salad/",
    "Ingredients": "1 small cucumber, chopped 1 large tomato, chopped 1/2 red onion, chopped fine 2 tablespoon fresh cilantro, chopped squeeze of a lemon 2 cloves of garlic, finely chopped 1 15-oz favabean, rinsed and drained 2 tablespoon olive oil 1 teaspoon red chilli powder",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/10/fava-salad.png",
    "Instructions": "Saut� the garlic with olive oil, until fragrant for 2 minutes, add the beans and cook for 5 minutes. Then cool for 5 minutes."
  },
  {
    "Category": "Salads",
    "Name": "Fruit Salad",
    "NameLink": "http://www.mysomalifood.com/fruit-salad/",
    "Ingredients": "1 banana, sliced 1 papaya, diced 1 mango, diced 1/2 cup blueberries 1 table spoons of lemon�",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/06/fruitsalad.jpg",
    "Instructions": "In a large bowl combine the banana, papaya, mango, and blueberries, add the lemon juice and mix well. Bananas tend to get brown, add them just before serving."
  },
  {
    "Category": "Salads",
    "Name": "Garow: Sorghum Salad",
    "NameLink": "http://www.mysomalifood.com/garow-sorghum-salad/",
    "Ingredients": "2 cups sorghum 1/4 cup finely chopped cilantro 3 tablespoons olive oil 2 tablespoons lemon juice 1 onion, diced 2 green onions, chopped 2 tablespoon balsamic vinegar 1/2 red bell pepper, diced 1 tomato, diced chopped olives Salt and pepper to taste",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2010/03/garowsalad.jpg",
    "Instructions": "Clean the sorghum water until it is clear. (if you have the time it is best to soaked over night) In a large pot combine the sorghum and enough water to come 2 inches over the sorghum. Bring to a boil and cook uncovered for 1 hour, or until tender, add more water if it needed. Drain and let cool. In a large bowl, combine the sorghum, tomato, pepper, onion, green onions, cilantro, lemon juice, olive oil, olives, season to taste, with salt and pepper."
  },
  {
    "Category": "Salads",
    "Name": "Potato salad with yogurt",
    "NameLink": "http://www.mysomalifood.com/potato-salad/",
    "Ingredients": "1 lb potato, peeled, cubed and cooked 1 cup yogurt 2 tablespoon chopped cilantro � onion, minced � cup sweet corn 2 hard boiled eggs 1 jalapeno pepper, seeded and chopped 2 green onions, chopped 2 tablespoon mayonnaise 2 teaspoon mustard 2 tablespoon lemon 1 teaspoon smoked horseradish 1 garlic clove, chopped 2 tablespoon olive oil salt and pepper to taste 1 tomato, chopped",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/potatosalad.jpg",
    "Instructions": "In a large bowl, mix together mayonnaise, yogurt, mustard, horseradish, lemon, salt, pepper, and the olive oil. In another bowl mix the potato, onion, cilantro, green onion, sweet corn, and pepper. Gently combine the two mixtures until combined. Transfer to a serving bowl and garnish with the tomatoes."
  },
  {
    "Category": "Salads",
    "Name": "Tomato and Cucumber Salad",
    "NameLink": "http://www.mysomalifood.com/tomato-and-cucumber-salad/",
    "Ingredients": "�1 cumber, finely chopped 2 tomatoes, finely chopped 1 small onion, finely chopped 1 chilli, finely chopped 1 garlic clove, finely minced 2 tablespoons cilantro/coriander leaves, finely chopped 2 tablespoon olive oil Juice of one lemon 2 tablespoon vinegar salt and pepper�",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/07/tomatocu.jpg",
    "Instructions": "�Stir together in a bowl the onion, cucumber, tomato, chillies, coriander, lemon juice. Season with salt and pepper, to taste, before serving. In a small bowl mix together,lemon, vinegar, oil and salt and pepper and the minced garlic. Mix until all combined. let it chill."
  },
  {
    "Category": "Side-Dishes",
    "Name": "Beef Kebab",
    "NameLink": "http://www.mysomalifood.com/beef-kebab/",
    "Ingredients": "1 lb beef finly minced\t\t\t\t1 onion grated\t\t\t\t2 teaspoons ground cumin\t\t\t\t2 teaspoons ground coriander\t\t\t\t2 teaspoons paprika, or cayene pepper\t\t\t\t1 teaspoon salt\t\t\t\t1 egg\t\t\t\tsmall bunch of coriander/cilantro, finely chopped",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/06/kebab.jpg",
    "Instructions": "In a large bowl mix the beef, onion,  spices, salt, and the fresh cilantro/coriander.\t\t\t\tBreak the egg and mix it in another bowl pour it in the mixture.\t\t\t\tMix well and cover and leave to stand in the fridge for 1 hour.\t\t\t\tRoll small balls of the meat mixture using your hands.\t\t\t\tFry them in a large skillet with little oil, on a medium heat and fry them both sides."
  },
  {
    "Category": "Side-Dishes",
    "Name": "Berbere Spice Blend",
    "NameLink": "http://www.mysomalifood.com/berbere-spice-blend/",
    "Ingredients": "1 teaspoon black peppercorns\t\t\t\t1 teaspoon cumin seeds\t\t\t\t1/2 teaspoon cardamom seeds\t\t\t\t1/2 teaspoon coriander\t\t\t\t1 table spoon salt\t\t\t\t1/2 teaspoon fenugreek seeds\t\t\t\t3 whole cloves\t\t\t\t1/2 cup cayenne pepper\t\t\t\t1/2 cup paprika\t\t\t\t1/2 teaspoon turmeric powder\t\t\t\t1 teaspoon ginger powder\t\t\t\t1/4 ground cinnamon powder\t\t\t\t1 teaspoon garlic powder\t\t\t\t1 teaspoon onion powder",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/10/berbere.jpg",
    "Instructions": "In a skillet over medium heat, toast the, cumin, cardamom, whole cloves, cardamom, peppercorns, fenugreek for 2 minutes.\t\t\t\tRemove from heat and let it cool.\t\t\t\tfinely grind the toasted spices in a spice grinder or a mortar and pestle.\t\t\t\tmix in the remaining ingredients until combined.\t\t\t\tStore in a airtight jar."
  },
  {
    "Category": "Side-Dishes",
    "Name": "Chickpea in Tomato Sauce",
    "NameLink": "http://www.mysomalifood.com/chickpea-in-tomato-sauce/",
    "Ingredients": "1 cup dried chickpea, soaked overnight 2 tomatoes, chopped 2 cloves of garlic, minced 1 tablespoon tomato paste 1 onion, chopped 2 tablespoon oil 1 tablespoon ginger Salt and pepper 1 teaspoon chili powder 2 tablespoon cilantro 2 teaspoon cumin powder",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/chickp.jpg",
    "Instructions": "Heat the oil in a pan and cook the onion on a medium heat until soft add the garlic and ginger, stir until fragrant. Add the tomato paste stir few minutes, then add the tomatoes. cook until tomatoes are tender. Stir chili powder, cumin, cilantro and season with salt and pepper. Cook for few more minutes then add the chickpeas, cover with water. Continue to simmer on a low heat until chickpeas are tender."
  },
  {
    "Category": "Side-Dishes",
    "Name": "Cucumber Yogurt Dip",
    "NameLink": "http://www.mysomalifood.com/cucumber-yogurt-dip/",
    "Ingredients": "2 cups plain low-fat yogurt 2 large cucumber, peeled, seeded, and grated 1 tablespoon lemon juice 1 tablespoon fresh dill (optional) 1 garlic cloves, minced Salt and pepper to taste",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/07/cucumbersalad2.jpg",
    "Instructions": "Peel, seed, and grate cucumbers. Mix yogurt, grated cucumber, lemon juice, dill, and garlic in a serving bowl. season with salt and pepper Chill before serving."
  },
  {
    "Category": "Side-Dishes",
    "Name": "Goat Stew",
    "NameLink": "http://www.mysomalifood.com/goat-stew/",
    "Ingredients": "1 - 2 pound goat, small pieces\t\t\t\t3 medium potatoes, cut into cubes\t\t\t\t2 medium carrots, cut into pieces\t\t\t\t2 cups chopped tomato\t\t\t\t1 large onion, finely chopped\t\t\t\t2 tablespoon tomato paste\t\t\t\t2 cloves of garlic, finely chopped\t\t\t\t2 tablespoons chopped cilantro\t\t\t\tSalt and pepper to taste\t\t\t\t1 teaspoon cumin powder\t\t\t\t1 teaspoon coriander powder",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/06/goat-stew.jpg",
    "Instructions": "Heat oil in a pan add the meat and sear on both sides on a medium heat .\t\t\t\tAdd onion, potatoes, and carrots saut� about 5 minutes.\t\t\t\tThen add tomatoes saut� another 5 minutes.\t\t\t\tStir in garlic, cilantro and the spices, cook for  for 10 minutes stirring occasionally.\t\t\t\tAdd cup of water and cook covered until the stew is tick and the vegetables are tender.\t\t\t\tServe warm and enjoy."
  },
  {
    "Category": "Side-Dishes",
    "Name": "Shigni: Spicy Hot Sauce",
    "NameLink": "http://www.mysomalifood.com/shigni-spicy-hot-sauce/",
    "Ingredients": "� pound chilies 1 tomato 1 lemon juice 2 tablespoon cilantro 1 teaspoon tamarind Salt to taste Water as needed",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/shigni.jpg",
    "Instructions": "In a blender put all the ingredients and blend until smooth add water as go a long to keep the blender moving."
  },
  {
    "Category": "Side-Dishes",
    "Name": "Spicy Tomato Chutney",
    "NameLink": "http://www.mysomalifood.com/spicy-tomato-chutney/",
    "Ingredients": "1 onion, chopped 3 tablespoon 1 tablespoon tamarind paste 6 large tomatoes, peeled, chopped 4 cloves of garlic roughly chopped 2-4 tablespoons berbere 2 tablespoon tomato paste 1 tablespoon sugar",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/10/spicytomatos.jpg",
    "Instructions": "Heat oil in large sauce pan over medium heat. Add the onion and saute until soft and translucent. Add the tomatoes, garlic, tomato paste, bring it to a simmer for 10 minutes. Add the� sugar, berbere, tamarind paste and bring to a boil. Reduce the heat and simmer for� 50 minutes, or until the sauce is thick enough to coat the back of a spoon. Put the chutney in blender and make a smooth paste (optional)."
  },
  {
    "Category": "Soups",
    "Name": "Cauliflower Soup",
    "NameLink": "http://www.mysomalifood.com/cauliflower-soup/",
    "Ingredients": "1 tablespoon olive oil\t\t\t\t1 small onion (chopped)\t\t\t\t3 cloves garlic, chopped\t\t\t\tsalt and pepper to taste\t\t\t\t1 teaspoon coriander powder\t\t\t\t1 head cauliflower (cut in to florets)\t\t\t\t4 cups  water or stock\t\t\t\tPlain Yogurt(optional)\t\t\t\tspinach, chopped  (optional garnish)",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/03/cauliflower-soup.jpg",
    "Instructions": "In a large soup pan, saute onions, over medium heat until translucent.\t\t\t\tAdd in cauliflower and cook for few minutes add the garlic, salt, coriander and pepper.\t\t\t\tPour in water or stock and bring to a boil.\t\t\t\tReduce the heat to low and simmer with the lid until cauliflower is tender.\t\t\t\tCheck for seasoning and adjust accordingly.\t\t\t\tRemove from heat and puree until smooth with a hand blender or a food processor.\t\t\t\tServe with yogurt and top with chopped spinach and drizzle with olive oil."
  },
  {
    "Category": "Soups",
    "Name": "Chicken and chickpea soup",
    "NameLink": "http://www.mysomalifood.com/chicken-and-chickpea-soup/",
    "Ingredients": "2 table spoon oil 2 cloves of garlic 1 table spoon ginger 1 medium onion 1 pound chicken 2 potatoes, chopped 2 carrots, chopped 2 tomatoes 1 can chickpea 1 chili 2 table spoon cilantro juice of half a lemon 1 magi bouillon 1 teaspoon cumin 1 teaspoon turmeric Salt and pepper to taste",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/chickensoup.jpg",
    "Instructions": "In a large saucepan, heat the oil on a medium heat, add the onion, garlic and the ginger cook until the onion is brown and softened, season with salt and pepper. Add the spices and chicken continue to brown the chicken, and then add potatoes and the carrots. Next add tomatoes cook few more minutes. Then add chickpea, chilies, cilantro, and lemon juice, simmer for few minutes. Add the magi and some water continue to cook until the veggies and the chicken are cooked about 30-40 minutes add more lemon juice. And serve with bread."
  },
  {
    "Category": "Soups",
    "Name": "Chicken Soup : Maraq Digaag",
    "NameLink": "http://www.mysomalifood.com/chicken-soup-maraq-digaag/",
    "Ingredients": "4 chicken legs-tights 1 tomato, cut in half 3 carrots, peeled 3 potatoes, peeled 1/2� head of cabbage, sliced 3 cloves of garlic, chopped 3 black peppercorns 1 teaspoon cumin seeds 5 cardamom pods, crushed 1 teaspoon coriander 1 teaspoon ginger 1-2 tablespoons coriander/cilantro leaves salt to taste",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/08/maraqdigaag.jpg",
    "Instructions": "Place the chicken in a in a large soup pan, cover with water, bring it to a boil. Skim the foam that rises to the top with a spoon. Boil for 15 minutes, then let simmer on a medium. Add tomatoes, potatoes,cabbage, carrots, garlic and the spices continue to cook for 30-40 minutes or until the Chicken is tender almost falling off from the bone. Garnish with more cilantro/coriander leaves. Serve with bead."
  },
  {
    "Category": "Soups",
    "Name": "Kale potato lamb soup",
    "NameLink": "http://www.mysomalifood.com/kale-potato-lamb-soup/",
    "Ingredients": "1 punch kale\t\t\t\thalf a head cabbage\t\t\t\t2 potatoes\t\t\t\t1 tomato\t\t\t\t2 teaspoons tomato paste\t\t\t\t3 cloves of garlic,chopped\t\t\t\t1 medium onion small onion\t\t\t\t2 pounds lamb or goat\t\t\t\t1 teaspoon coriander powder",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/01/lamb-kale-soup.jpg",
    "Instructions": "In a large pot boil the meat with water until tender.\t\t\t\tChop the vegetables in the same size and add it to the meat.\t\t\t\tseason with salt pepper and the coriander and bring it to a boil.\t\t\t\tSimmer over low heat add more water if needed and until the vegetables are tender\t\t\t\tCheck if it needs more seasoning.\t\t\t\tServe warm with rice, flat breads."
  },
  {
    "Category": "Soups",
    "Name": "Lentil Soup",
    "NameLink": "http://www.mysomalifood.com/lentil-soup/",
    "Ingredients": "3 potatoes, diced 2 carrots, chopped 1 small onion, chopped 1 small tomato, chopped 2 cloves of garlic, minced 1 cup lentil 1 Magi cube salt and pepper to taste 1 teaspoon cumin 1 teaspoon paprika/chili powder/ 1 tablespoon chopped cilantro",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/lentilsoup.jpg",
    "Instructions": "In a sauce pan on a medium heat, add the lentil and cover with water. Bring it to a boil then simmer until the lentils are tender. On a sauce pan add the onions and cook until brown add the potato and the carrot. Cook for few minutes. Season with salt and pepper. Add the garlic, tomato, cilantro and cook until tomatoes are tender. Strir in the lentil, Maggi cube, cumin, paprika and cover with water. Cook until the potatoes and the carrots are tender, add more water if needed. Blend soup using a hand held blender or use a blender until pureed, or you can serve it as it is"
  },
  {
    "Category": "Soups",
    "Name": "Maraq Fahfah : Somali Soup",
    "NameLink": "http://www.mysomalifood.com/maraq-fahfah-somali-soup/",
    "Ingredients": "3 medium potatoes 2 carrots Half a head of cabbage 1 tomato, chopped 1 pound beef/lam 1 small onion, chopped 2 cloves of garlic, chopped 2 table spoon cilantro, chopped Half of green pepper, chopped 2 green onions, chopped 2 teaspoon coriander powder 1 green chili, seeded Juice of half of a lemon Salt and pepper, to taste",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/maraq.jpg",
    "Instructions": "In a large pot cook the beef and cover with water and the magi until the meat is tender. Add the potatoes, carrots and the cabbage and cook for 10-15 minutes. Add the rest of the vegetables and season with salt and pepper. Cook until the vegetables are tender"
  },
  {
    "Category": "Soups",
    "Name": "Oatmeal Soup : Shurbad",
    "NameLink": "http://www.mysomalifood.com/oatmeal-soup-shurbad/",
    "Ingredients": "1 1/2 cups of oats 6 cups of water 1/2 to 1 pound of meat salt pepper 1 small onion chopped 1 clove of garlic chopped 1 teaspoon cumin powder 1 teaspoon coriander powder one lemon cut in half",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2010/08/oatmealsoup.jpg",
    "Instructions": "In a medium sauce pan heat the oil add the meat and brown, add the onion season with salt and pepper cook until the onions are translucent, add the garlic, cumin and coriander powder stir for few minutes. Add the oats and bring it to a boil reduce the heat and simmer while stirring occasionally about 30- 40 minutes. (make sure not to burn the soup.) Using a hand blender or in a blender blend the soup until smooth and creamy. Serve with lemon and sprinkle with some sugar and duqus (optional)."
  },
  {
    "Category": "Soups",
    "Name": "Okra and Vegetable Soup : Maraq Baamiye iyo Khudrad kale",
    "NameLink": "http://www.mysomalifood.com/okra-and-vegetable-soup-maraq-baamiye-iyo-khudrad-kale/",
    "Ingredients": "1 onion, chopped\t\t\t\t1lb okra, trimmed and cut\t\t\t\t2-3 carrots\t\t\t\t3 potatoes chopped\t\t\t\t1 large tomato, chopped\t\t\t\t1 zucchini/courgette, chopped\t\t\t\t2 cloves garlic, finely chopped\t\t\t\t3 cups broth/stock\t\t\t\t1 teaspoon coriander powder\t\t\t\t2 tablespoons oil\t\t\t\tsalt and pepper",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/07/okra-soup.jpg",
    "Instructions": "In a saucepan heat oil on a medium heat add the onions and cook for 4 minutes.\t\t\t\tAdd the potatoes and the carrots, cook for 4 minutes add salt and pepper.\t\t\t\tThen add the tomatoes stir for few minutes add the zucchini/courgette.\t\t\t\tAdd the broth and cook for 5 minutes.\t\t\t\tThen add the okra and the garlic and the coriander powder.\t\t\t\tAdd more water and bring to a boil.Then simmer cook until the vegetables are tender."
  },
  {
    "Category": "Soups",
    "Name": "Okra Soup : Maraq Baamiye",
    "NameLink": "http://www.mysomalifood.com/okra-soup-maraq-baamiye/",
    "Ingredients": "2 tablespoons oil\t\t\t\t1 Onion,chopped\t\t\t\t3 Garlic cloves, chopped\t\t\t\t1 cup chopped green onion\t\t\t\t500 g okra, ends trimmed\t\t\t\t6 Cups broth\t\t\t\t1/4 Cup green coriander, chopped\t\t\t\tSalt and pepper\t\t\t\t1  lemon juice",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2014/03/okrasoup.jpg",
    "Instructions": "In a saucepan heat the oil over medium heat.\t\t\t\tAdd the onions and garlic, stirring cook about 5 minutes.\t\t\t\tAdd the green onions and okra, and stir.\t\t\t\tAdd the broth, lemon juice and salt and pepper.\t\t\t\tBring it to a boil, reduce heat and cook for 30 minutes covered .\t\t\t\tAdd cilantro and mix in.\t\t\t\tIn a blender or hand blender blend the mixture until smooth.\t\t\t\tServe warm"
  },
  {
    "Category": "Vegetables",
    "Name": "Cabbage",
    "NameLink": "http://www.mysomalifood.com/cabbage/",
    "Ingredients": "1 small head cabbage, sliced 1 medium onion, chopped 2 carrots grated 1 teaspoon cumin powder 1 teaspoon coriander powder 1 chilli peper, to taste 2 tablespoon lemon juice 2 table spoon cilantro, chopped salt and pepper to taste",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/cabage1.jpg",
    "Instructions": "Heat the oil on a medium heat, add the onion saut� for 3-5 minutes until soft. Add the cabbage and carrots and the chili and stir-fry until the cabbage is soft. Stir in coriander, cumin, cilantro, lemon, season with salt and pepper until combined. Lower the heat and cook until the cabbage is cooked through."
  },
  {
    "Category": "Vegetables",
    "Name": "Cabbage and Corn Saute",
    "NameLink": "http://www.mysomalifood.com/cabbage-and-corn-saute/",
    "Ingredients": "1 small head of cabbage,chopped\t\t\t\t1-2 tablespoon oil\t\t\t\tsalt\t\t\t\t1 teaspoon nigella seeds\t\t\t\t1 onion, chopped\t\t\t\t3 ears of corn,kernels removed\t\t\t\t2 cloves garlic, minced",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/06/cabbagecorn.jpg",
    "Instructions": "Heat oil in large skillet or a pan with a cover, add the onion and cook over medium heat about 5 minutes.\t\t\t\tAdd the cabbage and cook over, high heat, stirring, until wilted about 5 minutes lower heat and cook until almost tender for 10 more minutes.\t\t\t\tAdd the , salt, garlic, nigella, and the corn stir and cover and cook stirring occasionally until the corn and the cabbage are both tender about 10 minutes.\t\t\t\tAdd litte water in the last 10 minutes for a softer cabbage if you prefer and cover with the lid.\t\t\t\tServe while warm."
  },
  {
    "Category": "Vegetables",
    "Name": "Curried Cauliflower",
    "NameLink": "http://www.mysomalifood.com/curried-cauliflower/",
    "Ingredients": "1 head of cauliflower chopped 1 teaspoons curry powder 1 teaspoon coriander powder � teaspoon turmeric 1 medium onion, diced 2 cloves of garlic, chopped 1 table spoon ginger 2 small tomatoes 2 tablespoon cilantro, chopped 2 tablespoon oil 1 � cups of water Salt and pepper to taste",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/curryc.jpg",
    "Instructions": "In a large pan heat the oil over medium heat, add the onions saut� for few minutes. Add the curry , coriander, turmeric, garlic, ginger, tomatoes, cilantro, cauliflower, and season with salt and pepper. Stir until all veggies are incorporated. Add water and simmer until a boil then simmer on a low heat, continue to cook covered until the cauliflower is tender."
  },
  {
    "Category": "Vegetables",
    "Name": "Green Beans in Tomato Sauce",
    "NameLink": "http://www.mysomalifood.com/green-beans-in-tomato-sauce/",
    "Ingredients": "1 lb green beans, trimmed, cut in half 2 garlic cloves, finely chopped 4 tomatoes, chopped 1 green chilli, seeded, chopped 2 tablespoons cilantro/ coriander leaves, chopped 1 tablespoon tomato paste 1 teaspoon cumin powder Salt and pepper 1/4 cup oil",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/09/green-bean.jpg",
    "Instructions": "Heat the oil in a large pan, add the onion and cook over medium heat until softened. Add tomato paste, tomatoes, green chilli, and cilantro, cumin, season with salt and pepper. Cook until tomatoes are soft. Add the beans and 1/2 cup of water,bring it to a boil then simmer on a medium heat until the beans are tender about 10-15 minutes. Serve warm as a side dish."
  },
  {
    "Category": "Vegetables",
    "Name": "Saut�ed Mixed Vegetable",
    "NameLink": "http://www.mysomalifood.com/sauteed-mixed-vegetable/",
    "Ingredients": "2 Carrots, shredded\t\t\t\t2 potato, shredded\t\t\t\t1/2 head cabbage, shredded\t\t\t\t1 green squash, shredded\t\t\t\t1 yellow squash, shredded\t\t\t\tSalt and pepper",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/09/mixed-vegies-and-pasta.jpg",
    "Instructions": "Heat a large skillet on a high,  non stick makes it easier so the vegetable wont stick and to minimize the oil used.\t\t\t\tAdd the oil, then start with the cabbage and saute few minutes , add the potato, mix for few more minutes. Then Add the carrots and the squash.\t\t\t\tSeason with salt and pepper.\t\t\t\tCover and cook until the vegetables are tender.\t\t\t\tIf needed add some water"
  },
  {
    "Category": "Vegetables",
    "Name": "Sauteed Spinach with Sweet potato",
    "NameLink": "http://www.mysomalifood.com/sauteed-spinach-with-sweet-potato/",
    "Ingredients": "1 large sweet potato, peeled, chopped\t\t\t\tpunch spinach, cleaned, chopped\t\t\t\t2 tablespoon oil\t\t\t\t1 small onion, chopped\t\t\t\t1 clove garlic, finely chopped\t\t\t\tsalt\t\t\t\tpepper\t\t\t\tberbere (optional)",
    "image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/07/spinachandsweet-potato.jpg",
    "Instructions": "Heat oil in a skillet or a pan saute onions few minutes. Add the garlic and fry for a few seconds.\t\t\t\tThrow in sweet potatoes, season with berbere, salt and pepper  fry for a few minutes until partly done. Add in spinach, and stir fry until it starts to wilt and sweet potatoes are cooked through.\t\t\t\tServe warm."
  }
]

var newData = [];
        for(var i = 0; i < data.length; i++){
          if(data[i].Category === "Appetizers"){
            data[i]['CategoryImg'] = "https://i.ytimg.com/vi/OWkzaLWtAhw/maxresdefault.jpg"
            newData.push(data[i])
          }

          if(data[i].Category === "Breakfast"){
            data[i]['CategoryImg'] = "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
            newData.push(data[i])
          }

          if(data[i].Category === "Desserts"){
            data[i]['CategoryImg'] = "http://www.mysomalifood.com/wp-content/uploads/2014/12/bundtcake1.jpg"
            newData.push(data[i])
          }

          if(data[i].Category === "Grains & Legumes"){
            data[i]['CategoryImg'] = "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
            newData.push(data[i])
          }

          if(data[i].Category === "Main Courses"){
            data[i]['CategoryImg'] = "https://c2.staticflickr.com/8/7126/6936775300_dfd376ca10_b.jpg"
            newData.push(data[i])
          }

          if(data[i].Category === "Salads"){
            data[i]['CategoryImg'] = "http://www.sequentgroups.com/wp-content/uploads/2015/12/Chopped-Salad_550x310.jpg"
            newData.push(data[i])
          }

          if(data[i].Category === "Soups"){
            data[i]['CategoryImg'] = "http://restaurant-atlantic.com/en/wp-content/uploads/2015/04/soups.jpg"
            newData.push(data[i])
          }

          if(data[i].Category === "Vegetables"){
            data[i]['CategoryImg'] = "https://akkiskitchen.files.wordpress.com/2013/10/hp1b9131.jpg"
            newData.push(data[i])
          }

          if(data[i].Category === "Side-Dishes"){
            data[i]['CategoryImg'] = "http://www.bonappetit.com/wp-content/uploads/2012/01/duck-confit-casserole-646.jpg"
            newData.push(data[i])
          }
      }

  res.send(newData)

});

module.exports = router;
