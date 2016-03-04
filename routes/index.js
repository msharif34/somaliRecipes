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
"Ingredients": "1 cup cornmeal (precooked, \"PAN\")	1 cup plain flour	1 teaspoon baking powder	2 teaspoons sugar	1 teaspoon salt	1 tablespoon of oil, and more for cooking the muufo",
"Instructions": "In a mixing bowl add cornmeal, plain flour, baking powder, sugar and salt, add just enough water to make a	soft dough, add about 2 1/4 cups of warm water, more flour if sticky and more water if too dry.	You can use the dough right away or let it rest for 20 minutes to overnight.	Heat a non-stick fry pan on a medium heat.	Divide the dough into 6 equal pieces then leave them covered.	Using your hands flatten each piece in to a 4 inch/ 10 cm diameter.	Use little bit of water to wet your hand, so the dough won't stick.	Fry each bread until golden brown 4 to 5 minutes on each side.	Alternatively use a griddle and brush each muufo with some oil and	turnover when the bread comes of the griddle about 4-5 minutes.	Serve with your favorite stew.",
"Category": "Breakfast",
"CategoryImg": "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
},
{
"Name": "Cambaabur (ambaabur) : Eid Bread",
"NameLink": "http://www.mysomalifood.com/cambaabur-eid-bread/",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2010/08/cambaabur1.jpg",
"Ingredients": "1 ï¿½ cups all purpose flour	ï¿½ cup wheat flour	ï¿½ cup millet flour	3 cups water	1 ï¿½ teaspoon yeast	1 ï¿½ teaspoon sugar	1 teaspoon salt	1 small onion chopped	1 clove of garlic chopped	1/2 teaspoon to 1 teaspoon of turmeric	1 teaspoon fennel seeds (caraway)	1 teaspoon habba sauda (nigella seeds)",
"Instructions": "In a blender add the onion and garlic, cumin, turmeric and some water and blend until smooth paste.	Add all the other Ingredients to the blender and blend again until combined. It should be like a pancake batter.	Cover the mixture and keep it in a warm place for about 4-6 hours or until it doubles in size.	Scoop the batter by 1/4 cup on a fry pan with a little oil, sprinkle with custard sugar on top to taste. repeat this until you have finished all the batter.	Serve with Yogurt.",
"Category": "Breakfast",
"CategoryImg": "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
},
{
"Name": "Injera: Ethiopia Sourdough FlatBread with Chicken Stew",
"NameLink": "http://www.mysomalifood.com/injera-ethiopia-sourdough-flatbread-with-chicken-stew/",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/10/injera.jpg",
"Ingredients": "2 cup all-purposeflour	ï¿½ cup cornmeal flour	ï¿½ cup teff flour	2 teaspoon yeast	1/2 cup sourdough starter	3 1/4 cups lukewarm water",
"Instructions": "In a mixer or a blender combine all the ingredient and mix or blend until there are no lumps.	Cover and set aside to rest at a warm place for 2 hours.	Heat a nonstick skillet on a medium heat.	Take about ï¿½ cup of the batter and pour it in the skillet tilting to coat most of the bottom.	Cook, until moisture has evaporated and when lots of holes form in the injera and the edges lift from the pan.	Remove and let cool each injera before stacking them as you go along.",
"Category": "Breakfast",
"CategoryImg": "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
},
{
"Name": "Chappati",
"NameLink": "http://www.mysomalifood.com/chappati/",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2010/03/chappati.jpg",
"Ingredients": "",
"Instructions": "",
"Category": "Breakfast",
"CategoryImg": "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
},
{
"Name": "Mini Muufo",
"NameLink": "http://www.mysomalifood.com/mini-muufo/",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/08/mini-muufo.jpg",
"Ingredients": "21/4 cups/350g semolina flour	1 tablespoon sugar	1 teaspoon salt	2 teaspoons baking powder	1/4 cup/50ml oil	1/2 cup/100ml milk	1 egg, beaten",
"Instructions": "In a bowl mix all the dry Ingredients.	add the egg milk and oil and stir until combined.	Knead for few minutes until soft dough but not sticky.	Add more flour if needed.	Let it sit for 30 minutes.	Roll the dough on a floured surface.	Cut with a cookie cutter or a glass.	Heat a nonstick pan on a medium heat.	Place the cakes to cook each side for about 4 minutes.	Serve warm with stew.",
"Category": "Breakfast",
"CategoryImg": "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
},
{
"Name": "Stuffed Sabaayad with Green Onion",
"NameLink": "http://www.mysomalifood.com/stuffed-sabaayad-with-green-onion/",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/07/green-onion-sabaayad.jpg",
"Ingredients": "",
"Instructions": "",
"Category": "Breakfast",
"CategoryImg": "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
},
{
"Name": "Sourdough Lahooh",
"NameLink": "http://www.mysomalifood.com/sourdough-lahooh/",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/01/Lohooh.jpg",
"Ingredients": "1/2 cup millet	1/2 cup cornmeal	1 cup plain flour	1 cup starter	3 cups water	1 teaspoon baking soda",
"Instructions": "Mix all the ingredient in a bowl and leave it to sit for 30 minutes to overnight, the longer you leave it the more sour it will become.	Depending how thick or thin your starter is, add more water if the batter is too tick and more flour if too thin	When ready, stir the batter until incorporated.	Heat a non stick pan on a medium heat.	Spread ï¿½ cup of the batter gently, in a circular motion with the back of a ladle starting in the middle and then working clockwise.	Just cook one side until golden brown. You should have nice bubbles on top.	Make sure you start with a clean skillet, by wiping it off with a kitchen paper . Repeat using all batter.	Serve warm.",
"Category": "Breakfast",
"CategoryImg": "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
},
{
"Name": "Sourdough Starter : Dhanaanis",
"NameLink": "http://www.mysomalifood.com/sourdough-starter-dhanaanis/",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/05/sourdhough.jpg",
"Ingredients": "",
"Instructions": "",
"Category": "Breakfast",
"CategoryImg": "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
},
{
"Name": "Whole Wheat Sourdough Sabaayad",
"NameLink": "http://www.mysomalifood.com/wholewheat-sourdough-sabaayad/",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/01/sabaayad.jpg",
"Ingredients": "",
"Instructions": "",
"Category": "Breakfast",
"CategoryImg": "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
},
{
"Name": "Sweet Fried Bread",
"NameLink": "http://www.mysomalifood.com/sweet-fried-bread/",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/07/sweetfriedbread1.jpg",
"Ingredients": "2 cups all-purpose flour	1/4 cup sugar	2 tablespoon oil	1 teaspoon cardamom powder	2 teaspoon baking powder	1/2 cup lukewarm milk	1 egg, beaten	Oil for frying",
"Instructions": "In a bowl combine all the ingredient.	Kneed the dough lightly don't over work it.	Leave it to rest for 30 min.	Roll the though on a lightly floured surface.	Cut in to desired shapes.	Deep fry until golden brown on both sides.	Drain on a paper towel and serve.",
"Category": "Breakfast",
"CategoryImg": "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
},
{
"Name": "Coconut Filed Sabaayad",
"NameLink": "http://www.mysomalifood.com/coconut-sabaayad/",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/01/coconutSabaayad.jpg",
"Ingredients": "2 cups all-purpose flour	1 cup all-purpose wholewheat flour	1 teaspoon salt	2 tablespoons oil	shredded coconut	sugar extra oil and flour",
"Instructions": "Combine flour, salt and oil in deep bowl; add one cup of water gently using your fingers Knead the dough add more water a table spoon at a time and kneed the dough if it gets sticky add tablespoon of flour each time.	kneed the dough until it turns very soft ad smooth for 5 to 10 minutes.	Cover and set aside for half an hour.	Divide the dough into 8 large balls.	On a lightly floured surface, roll each piece into a rough circle about 8 inches in diameter.	Brush with oil then sprinkle with the sugar and the coconut spread evenly fold the edges to meet center fold, in the four ends over each other, to make a square fold. set a side and apply the same method to all the pieces.	Roll each piece lightly and place it a circle about 8 inch and place it on a hot griddle over medium heat.	Fry the sabaayad one at a time with little oil, turning them once each side is golden brown.	Finish until you have applied the same method to all the pieces.	Drain the sabaayad on paper towels and serve warm with cup of shaah.",
"Category": "Breakfast",
"CategoryImg": "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
},
{
"Name": "Lahooh with Suqaar and Eggs",
"NameLink": "http://www.mysomalifood.com/lahooh-with-suqaar-and-eggs/",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/10/suqaar-lahooh.jpg",
"Ingredients": "1 lb beef cubes, suqaar	2 large tomatoes , chopped	2 eggs	1large onion chopped	2 tablespoons Oil	1 cloves garlic, chopped	1 teaspoon coriander powder	1 teaspoon paprika	Salt and pepper	2 green onion, chopped",
"Instructions": "In a deep skillet on high heat add the meat and stir until brown.	Add oil and stir for few minutes season with salt and pepper.	Add the onion and stir for few more minutes.	Add the tomatoes and the garlic, coriander and paprika. Cook for 5 minutes.	Make two holes by spreading the meat then crack the eggs drop them in to the holes.	Cook covered until the eggs have cooked through. Alternatively bake it in the oven 15-20 min until the eggs are set.	Serve with lahooh.",
"Category": "Breakfast",
"CategoryImg": "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
},
{
"Name": "Soft Buns",
"NameLink": "http://www.mysomalifood.com/soft-buns/",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/07/buns.jpg",
"Ingredients": "4 1/2 koob daqiiq	3 malqaacadood malab	1 1/2 malqaacad yar milix	5 malqaacadood saliid saytuun (olive oil)	1 maqaacad yiist (yeast)	Daqiiq iyo saliid dheeraad ah, oo loobaahanyahay marka laxashayo",
"Instructions": "Yiista iyo 1/4 (rubuc) koob biyo aha isku walaaq yara dhig	5 mirir.	Kadib soo qaado Weel ama madiibad weyn oo aad ku xashto	dhaqiiqda. Daqiiqda, malabka, milixda, saliida, caanaha iyo yiista	kuwada shub oo walaaq badadeed xash oo marka hore way isku dhaqdhagi laakiin markaad xashtid ayuu kabi'i doonaa.	Inyar oo daqiiqa kudar hadii uu kaa jilco, hadii uu adkaadana	biyo yar kudar.	Daqiiqdu waa in ay jilicsanaataa, hadhow markaa roodhida	ayaa noqonaysa roodhi khafiif ah oo jilicsan.	Dabool oo meel dhig si ay ufaxdo ilaa saacad saacad iyo badh	waa in ay is laba laabtaa, kolba kii soo horeeya.	Kadib u qaybi daqiiqda 12 xabadood. Sidii kubada oo kale uyara xash markaa, weel balaadhan	soo qaado oo kuwadarid. Meel yara kulul dhig oo sug ilaa saacad inta ay faxayaan.	Ofinka sii diiri oo ka dhig 425f ama 220c	Waxay qaadanaysaa ilaa 20 mirir markaad aragto oo ay dusha	kashaaxido kasaar ofinka oo yara daa ilaa ay qaboobayso.",
"Category": "Breakfast",
"CategoryImg": "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
},
{
"Name": "Quick Lahooh",
"NameLink": "http://www.mysomalifood.com/lahoohanjero-flat-bread/",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/01/lohooh.jpg",
"Ingredients": "1 cup all-purpose plain flour	1/2 cup wholewheat flour	1/2 cup cornmeal flour, fine	3 teaspoon baking powder	1/2 teaspoon salt	2 cups of milk or more	1 tablespoon sugar	1 egg	Butter and honey for serving",
"Instructions": "Mix all the ingredient in a blender to form a smooth batter with no lumps.	Add more milk if you need the batter should be like a pancake like consistency.	Heat a cast iron skillet or a non stick pan on a medium heat.	Spread ï¿½ cup of the batter gently, in a circular motion by starting in the middle and then working clockwise.	Cook one side until golden brown.	If it sticks on the skillet add few drops of oil and wipe it off with a kitchen paper.	Repeat using all batter.	Serve warm",
"Category": "Breakfast",
"CategoryImg": "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
},
{
"Name": "Banana Fritters",
"NameLink": "http://www.mysomalifood.com/banana-fritters/",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/02/bananaf.jpg",
"Ingredients": "",
"Instructions": "",
"Category": "Breakfast",
"CategoryImg": "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
},
{
"Name": "Lahooh with Eggs",
"NameLink": "http://www.mysomalifood.com/lahooh-with-eggs/",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/beediyoloxoox.jpg",
Ingedients: "2 lahooh link here 1 small tomato, chopped 1 small onion, chopped 1 chili pepper, chopped 1 green onion, chopped 2 eggs salt pepper to taste ï¿½ cup green pepper, chopped ï¿½ cup grated cheese oil",
"Instructions": "Mix the flour, baking powder, salt, and cardamom. Mix in the egg, milk and the water and kneed to make a soft dough. Cover the dough and let it rest for 30-40 minutes Divide the dough into eight pieces then roll into a thin 5 inch round. Heat oil and fry the dough until golden. Dry on a kitchen paper. Serve with cardamom confectionery sugar.",
"Category": "Breakfast",
"CategoryImg": "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
},
{
"Name": "lahooh-spongy-pancake-like-bread",
"NameLink": "http://www.mysomalifood.com/lahooh-spongy-pancake-like-bread/",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/10/lahooh.jpg",
Ingedients: "1 ï¿½ cups all purpose flour ï¿½ cup wheat flour ï¿½ cup millet flour 3 cups water 1 ï¿½ teaspoon yeast 1 ï¿½ teaspoon sugar 1 teaspoon salt",
"Instructions": "Mix all the ingredient together to form a batter; Stir well to avoid lumps set aside to rise in a warm place until bubbly and doubled in size, about 1 to 1 1/2 hours. When ready, stir batter if liquid has settled on bottom. Heat a cast iron skillet or a non stick pan on a medium heat. Spread ï¿½ cup of the batter gently, in a circular motion by starting in the middle and then working clockwise. Just cook one side until golden brown. If it sticks on the skillet add few drops of oil and wipe it off with a kitchen paper. Repeat using all batter.",
"Category": "Breakfast",
"CategoryImg": "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
},
{
"Name": "Khamiir: Fried Dough",
"NameLink": "http://www.mysomalifood.com/khamiir-fried-dough/",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/khamiir.jpg",
Ingedients: "2 cups flour 2 teaspoon baking powder 1 teaspoon salt ï¿½ cup milk, warm ï¿½ cup water, warm 2 teaspoon oil 1 teaspoon ground cardamom 1 egg, beaten",
"Instructions": "Mix the flour, baking powder, salt, and cardamom. Mix in the egg, milk and the water and kneed to make a soft dough. Cover the dough and let it rest for 30-40 minutes Divide the dough into eight pieces then roll into a thin 5 inch round. Heat oil and fry the dough until golden. Dry on a kitchen paper. Serve with cardamom confectionery sugar.",
"Category": "Breakfast",
"CategoryImg": "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
},
{
"Name": "Lahooh with Sweetened Eggs",
"NameLink": "http://www.mysomalifood.com/lahooh-with-sweet-eggs/",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/lahoohbeed.jpg",
Ingedients: "4 pieces of lahooh 3 eggs sugar to taste ï¿½ teaspoon ground cardamom oil",
"Instructions": "Beet the eggs in a bowl, add the sugar, and cardamom. In a skillet on a medium heat drizzle little oil then place one lahooh on the skillet. Pour ï¿½ of the egg mixture over the lahooh covering most of it. cover with the another lahooh. Leave it to cook until the bottom has a nice brown color and the egg has set. Drizzle with little oil and flip over to the other side, and cook until brown. Cook the other patch the same way. Drizzle honey or syrup and serve warm",
"Category": "Breakfast",
"CategoryImg": "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
},
{
"Name": "Sabaayad: Flatbread",
"NameLink": "http://www.mysomalifood.com/sabayad-flatbread/",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/Sabaayad.jpg",
Ingedients: "3 cups of all-purpose plain 1 teaspoon salt 2 table spoons oil more oil for rolling and for the skillet more flour for rolling",
"Instructions": "Combine the flour, oil and salt in deep bowl add one cup of water gently using your fingers Knead the dough. Add more water a tablespoon to make a soft dough continue to knead if it sticks sprinkle with some flour. Kneed the dough until it turns very smooth for 5 to 10 minutes. Brush a bowl with oil, and leave dough to rest covered in a plastic and set aside for 30 minutes. Divide the dough into 8 large balls. On a lightly floured surface, roll each piece into a rough circle about 8 inches in diameter. Brush with oil on top spread evenly fold to edges in to meet center fold, fold the other edges in You should now have a square fold, set a side. Finish until you have applied the same method to all the pieces. Again on a floured surface roll each piece out into 8 inch and place it on a hot griddle over medium heat. Fry the sabaayad one at a time with little oil, turning them once each side is golden brown. The sabaayad will puff slightly and become crisp and brown. Drain the sabaayad on paper towels and serve warm.",
"Category": "Breakfast",
"CategoryImg": "https://kitchenkemistry.files.wordpress.com/2012/02/chapati.jpg"
},
{
"Category": "Appetizers",
"Name": "Babaganoush",
"NameLink": "http://www.mysomalifood.com/babaganoush/",
"Ingredients": "1 large eggplant	2 garlic cloves,chopped	2 tablespoons extra virgin olive oil	2 tablespoons fresh lemon juice	salt and pepper	Chopped fresh cilantro for garnishing(optional)",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/08/babaganoush.jpg",
"Instructions": "Preheat the oven to 400F/200C.	Cut the eggplant in half lengthwise and brush lightly with oil.	Place on a baking sheet, cut side down.	Roast the eggplant for about 40 minutes or until tender. Let it cool.	Place the eggplant, garlic, oil, lemon, salt an peper in a food processor and process until fairly smooth but not completely pureed.	Taste and add additional lemon juice and salt to taste.	Cover and refrigerate until needed.	Serve with pita.",
"CategoryImg": "https://i.ytimg.com/vi/OWkzaLWtAhw/maxresdefault.jpg"
},
{
"Category": "Appetizers",
"Name": "Baked Beef Sambusa",
"NameLink": "http://www.mysomalifood.com/baked-beef-sambusa/",
"Ingredients": "2 cups flour, �plus extra	2 teaspoons baking powder	1 egg, beaten	1/4 cup olive oil or butter melted	1/2 teaspoon salt",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/07/baked-beef-sambusa.jpg",
"Instructions": "To make the pastry dough, in a bowl add the flour baking powder and salt egg and enough water to make a firm dough. knead until smooth and soft not sticky.	Cover the dough in a bowl and let it rest for 20 minutes.	knead and divide the dough in to 16 pieces.	Flour paste as a glue	In a small bowl, mix 1/4 cup flour and 1/4 cup�water to make a smooth paste.	Assembly	Roll one of the dough into 5 inch circle	Pick one the Sambusa wrappers with your hands and fold it into a cone shape seal it with flour paste. Place a spoonful of the filling in the middle brush the edges with a flour paste or water and �shape it into a cone,	close the top with the paste if needed and shape like a triangle.	Pinch the edges so that it is completely sealed.	Continue filling the rest of the Sambusas.	Brush with the egg-wash on the top.	Bake 350f/180c for 25 minutes or until golden .	It is best served while warm.",
"CategoryImg": "https://i.ytimg.com/vi/OWkzaLWtAhw/maxresdefault.jpg"
},
{
"Category": "Appetizers",
"Name": "Baked Sambusas with Chicken",
"NameLink": "http://www.mysomalifood.com/baked-sambusas-with-chicken/",
"Ingredients": "3 1/2 cups all plain flour	2 tablespoon oil	1 egg	1 cup milK	2 teaspoon yeast",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/06/baked-sambuusa.jpg",
"Instructions": "In a mixing bowl, mix together flour, yeast, salt,egg and oil and add the milk until combined.	Knead the dough for 5 minutes until a soft dough is formed use more flour if sticky.	Place the dough in bowl and let it rise for 1 hour or until doubled in size.",
"CategoryImg": "https://i.ytimg.com/vi/OWkzaLWtAhw/maxresdefault.jpg"
},
{
"Category": "Appetizers",
"Name": "Date Filled Sambusa",
"NameLink": "http://www.mysomalifood.com/date-filled-sambuuse/",
"Ingredients": "2 � cups flour � cup water warm � cup milk warm 1 teaspoons yeast � cup sugar � teaspoon salt 1 egg 4 tablespoons oil 1 cup soft dates, pitted and finely chopped 3 tablespoon oil/butter or ghee 1/2 teaspoon cardamom 1/4 teaspoon nutmeg",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/datesam.jpg",
"Instructions": "Place the dates, butter, cardamom and nutmeg in a saucepan, over low heat, and stir occasionally until dates become a paste. Remove from the heat, and let it cool. In a bowl combine the yeast and the water leave it for 15 minutes. Stir in milk, sugar, salt, egg and the oil to the yeast mixture. Gradually stir in the flour to combine, kneed the dough to obtain soft dough. Cover and leave it to rise in a warm place. Divide the dough in to 2 equal portions and roll one on a lightly floured surface. Roll into a square 15�10 inch rectangle, divide into 9 equal squares. Spoon each square about 2 teaspoons of the filling in the center, then fold it into triangle. Brush the edges with water press with your fingers to seal it. Place on a baking sheet and repeat with the remaining Ingredients. Preheat the oven 350f bake for 20 to 30 until golden",
"CategoryImg": "https://i.ytimg.com/vi/OWkzaLWtAhw/maxresdefault.jpg"
},
{
"Category": "Appetizers",
"Name": "Easy Baajiya",
"NameLink": "http://www.mysomalifood.com/easy-baajiya/",
"Ingredients": "2 cups Blacked-eye beans, soaked overnight and drained	1 onion, chopped	2 cloves of garlic, chopped	1 tablespoon cilantro, chopped	1 teaspoon salt	1 teaspoon coriander powder	1 teaspoon cumi powder	1 green chili, chopped optional",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/07/baajiye-sambusa.jpg",
"Instructions": "Put all the Ingredients in a food processor and pulse in to a paste or place them mortal and pestle in batches and and grind them in to a paste.	If you have time let them sit in the fridge for 2 hours.	Heat the oil in a pan on medium heat and fry spoonfuls of the mixture until golden brown.	Serve with green chilli sauce or what ever sauce you like.",
"CategoryImg": "https://i.ytimg.com/vi/OWkzaLWtAhw/maxresdefault.jpg"
},
{
"Category": "Appetizers",
"Name": "Fried Fish",
"NameLink": "http://www.mysomalifood.com/fried-fish/",
"Ingredients": "1 lb haddock, cut into peaces 1 cup flour 1 teaspoon baking powder 1 egg Salt and pepper to taste 1 teaspoon chili powder",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/friedfish.jpg",
"Instructions": "Heat oil in a large pan In a bowl combine, flour, egg, baking powder, salt, pepper and mix well until smooth. Drop the fish in the batter to cote and then place in the hot oil. Fry fish until golden. Drain on a pepper towel.",
"CategoryImg": "https://i.ytimg.com/vi/OWkzaLWtAhw/maxresdefault.jpg"
},
{
"Category": "Appetizers",
"Name": "Hummus: Chickpea Dip",
"NameLink": "http://www.mysomalifood.com/hummus-chickpea-dip/",
"Ingredients": "1 15 oz can chickpea, washed, drained 1 clove garlic 1/2 cup yogurt 2 tablespoon tahini 1 teaspoon salt 2 tablespoon lemon 2 tablespoon olive oil",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/hummus.jpg",
"Instructions": "Place all the ingredient in a blender and process untill smooth, drizzle with more olive oil serve with pita. Garnish with olives.",
"CategoryImg": "https://i.ytimg.com/vi/OWkzaLWtAhw/maxresdefault.jpg"
},
{
"Category": "Appetizers",
"Name": "Khamiir with nigella seeds",
"NameLink": "http://www.mysomalifood.com/khamiir-with-nigella-seeds/",
"Ingredients": "2 1/2 cups of all-purpose plain flour	1 cup milk/water	2 tablespoons of butter/oil/ghee	1 teaspoon yeast	1 tablespoon sugar	1 teaspoon nigella seeds	1/2 teaspoon salt	oil for frying	more flour for kneeding",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/05/khamiir.jpg",
"Instructions": "In a bowl add the flour yeast, sugar, nigella seeds and salt, rub the butter untill the mixture resembles bread cumbs, Gradually add enough water or milk to form a dough.	Wrap the dough in plastic wrap and leave in a warm place until it doubled in size.	Knead the dough and roll on a floured surface, cut the dough in to various shapes with a sharp knife.	Deep-fry in batches until golden on both sides, turning them once, drain on kitchen paper.	Serve with dates and tea.",
"CategoryImg": "https://i.ytimg.com/vi/OWkzaLWtAhw/maxresdefault.jpg"
},
{
"Category": "Appetizers",
"Name": "Nafaqo",
"NameLink": "http://www.mysomalifood.com/nafaqo/",
"Ingredients": "2 eggs 2 large potatoes, peeled 1 teaspoon cumin powder 1 teaspoon coriander powder 1 teaspoon turmeric salt and pepper bread crumbs oil for frying",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/08/nafaqo.jpg",
"Instructions": "Place the potatoes in a large pan and cover with water and boil for 20 minutes or until tender, then mash with a fork season with salt and pepper, turmeric, coriander and cumin, mix well until combined. In the mean time place the eggs in another pan and boil until cooked. Peel the cooked eggs and cut into fourths then set aside. Take a heaping spoonful of the mashed potato slightly flatten with your hands. Place a piece of egg in the middle and cover with the mashed potato, and make a round or oval shape. Then roll the mashed potato balls with the bread crumbs until covered. Drop the naffaqos in the hot oil, and fry until golden brown.",
"CategoryImg": "https://i.ytimg.com/vi/OWkzaLWtAhw/maxresdefault.jpg"
},
{
"Category": "Appetizers",
"Name": "Quraac with nigella and buttermilk",
"NameLink": "http://www.mysomalifood.com/quraac-with-nigella-and-buttermilk/",
"Ingredients": "1 teaspooon nigella seeds (haba sauda)	2 cups all-purpose plain flour	2 teaspoons baking powder	1/2 cup butter milk	1 egg, beaten	1/4 cup sugar	2 tablespoons melted butter or oil",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/07/khamiirbuttermilk.jpg",
"Instructions": "Mix all the Ingredients and knead until it comes all together, if sticky add more flour and if too dry tablespoon of butter milk at a time.	Wrap the dough in plastic wrap and leave in a warm place for 20 minutes.	Knead the dough and roll on a floured surface, 9 inch by 19 inch cut the dough in to diamonds.	Deep-fry in batches until golden on both sides, turning them, drain on kitchen paper.	Serve with dates and tea.",
"CategoryImg": "https://i.ytimg.com/vi/OWkzaLWtAhw/maxresdefault.jpg"
},
{
"Category": "Appetizers",
"Name": "Sambusa filled with peas and potato",
"NameLink": "http://www.mysomalifood.com/sambusa-filled-with-peas-and-potato/",
"Ingredients": "� cup green peas, cooked 1 tablespoon chopped cilantro 2 teaspoon lemon juice 2 large potatoes, cooked, chopped in cubes 1 green chili 2 tablespoon oil 1 onion chopped 1 clove garlic � teaspoon turmeric 1 teaspoon coriander 1 teaspoon cumin 1 teaspoon fresh ginger, minced Salt and pepper � cup all-purpose flour � cup water, or as needed Sambusa wrappers Oil for frying",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2010/08/sambuuse.jpg",
"Instructions": "In a skillet heat the oil and saut� the onions until browned. Add the ginger and garlic, coriander cumin, green chili, salt, turmeric and cook stirring until fragrant, season with salt and pepper. Add the potatoes and stir add the peas and cook for few minutes; add the cilantro and lemon juice. Take off the heat. And let it cool until we ready to use. In a small bowl, mix flour and the water to make a smooth paste. Pick one the sambusa wrappers with your hands and fold it into a cone shape seal it with flour paste. Fill the cone with the filling and close the top into a triangle shape and seal it with the flour paste. Pinch the edges so that it is completely sealed. Continue filling the rest of the sambusas. Heat the oil in frying pan, fry the sambusas until golden brown. Remove and drain on paper towels. Serve while warm.",
"CategoryImg": "https://i.ytimg.com/vi/OWkzaLWtAhw/maxresdefault.jpg"
},
{
"Category": "Appetizers",
"Name": "Sambusa Pastry",
"NameLink": "http://www.mysomalifood.com/sambusa-pastry/",
"Ingredients": "3 cups plain all-purpose flour 2 table spoon oil 1 cup Luke warm water salt more oil for brushing",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/08/sambuuse1.jpg",
"Instructions": "Mix the flour oil and the salt, while using a fork mix in the water slowly, knead the though for 5-10 minutes until smooth and pliable dough. Form the dough into a ball and coat the outside with oil. Cover and set it aside for about 15 minutes. Heat a skillet on a medium-low heat. Knead the dough again and divide it into 8 equal portions Form each portion into a ball. Using two balls at a time roll both in 5inch brush one with oil and put the other one on top. Press with your fingers to make sure they line up, roll on a floured surface to flatten with a rolling pin about 9-10 inches in diameter. Cut into four peaces with a sharp knife, roll each peace again so it keeps its shape. Place each peace on the warm skillet and leave it each side to dry it out (make sure you don�t leave it too long). Remove and let it cool slightly then separate the two slowly without tearing the wrappers. Cover with a towel and continue to repeat the same steps until you have finished all peaces.",
"CategoryImg": "https://i.ytimg.com/vi/OWkzaLWtAhw/maxresdefault.jpg"
},
{
"Category": "Appetizers",
"Name": "Somali Sambusa",
"NameLink": "http://www.mysomalifood.com/somali-sambusa/",
"Ingredients": "1 pounds ground beef/lamb	2 tablespoons oil	1 small onion, chopped	2 teaspoons coriander powder	2 tablespoons cilantro, finely chopped	green onion, chopped	2 teaspoon cumin powder	2 teaspoon cardamom powder	1 teaspoon salt	1 teaspoon pepper 1 green chili	1 clove garlic, minced	oil for frying",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/08/Sambusa1.jpg",
"Instructions": "Mix the flour oil and the salt, while using a fork mix in the water slowly, knead the though for 5-10 minutes until smooth and pliable dough.	Form the dough into a ball and coat the outside with oil. Cover and set it aside for about 15 minutes. Heat a skillet on a medium-low heat.	Knead the dough again and divide it into 8 equal portions	Form each portion into a ball.	Using two balls at a time roll both in 5inch brush one with oil and put the other one on top. Press with your fingers to make sure they line up, roll on a floured surface to flatten with a rolling pin about 10-11 inches in diameter.	Cut into four peaces with a sharp knife, roll each peace again so it keeps its shape.	Place each peace on the warm skillet and leave it each side to dry it out (make sure you don�t leave it too long).	Remove and let it cool slightly then separate the two slowly without tearing the wrappers. Cover with a towel and continue to repeat the same steps until you have finished all peaces.",
"CategoryImg": "https://i.ytimg.com/vi/OWkzaLWtAhw/maxresdefault.jpg"
},
{
"Category": "Appetizers",
"Name": "Sweet Fried Bread",
"NameLink": "http://www.mysomalifood.com/sweet-fried-bread/",
"Ingredients": "2 cups all-purpose flour	1/4 cup sugar	2 tablespoon oil	1 teaspoon cardamom powder	2 teaspoon baking powder	1/2 cup lukewarm milk	1 egg, beaten	Oil for frying",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/07/sweetfriedbread1.jpg",
"Instructions": "In a bowl combine all the ingredient.	Kneed the dough lightly don't over work it.	Leave it to rest for 30 min.	Roll the though on a lightly floured surface.	Cut in to desired shapes.	Deep fry until golden brown on both sides.	Drain on a paper towel and serve.",
"CategoryImg": "https://i.ytimg.com/vi/OWkzaLWtAhw/maxresdefault.jpg"
},
{
"Category": "Appetizers",
"Name": "Tuna Sambusa",
"NameLink": "http://www.mysomalifood.com/tuna-sambusa/",
"Ingredients": "for the Sambusa filling	1 small onion, chopped	2 cans of tuna, drained	1 tablespoon cilantro,chopped	1 large potato, finely chopped	2 teaspoons tomato-paste	salt and pepper to taste	1 teaspoon coriander powder	1/2 teaspoon turmeric powder	1 teaspoon cayenne pepper",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/11/Tuna-Sambusa.jpg",
"Instructions": "to make the dough	In a bowl add the flour and oil add warm water a little at a time to make pliable dough.	knead the dough for 5 minutes on floured surface until the dough is smooth.	Cover and set aside for 20-30 minutes.",
"CategoryImg": "https://i.ytimg.com/vi/OWkzaLWtAhw/maxresdefault.jpg"
},
{
"Category": "Desserts",
"Name": "Bread pudding",
"NameLink": "http://www.mysomalifood.com/bread-pudding/",
"Ingredients": "7-8 slices bread 1/4 cup sugar 1/4 cup raisin 1 teaspoon cinnamon 3 eggs 2 1/2 cups milk 1 tablespoon custard powder 2 table spoon melted butter",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/02/breadp.jpg",
"Instructions": "preheat the oven 180C/350F/gas mark 4, Brush a ovenproof dish with butter. Beat together eggs, sugar, cinnamon, vanilla, butter and the milk in a bowl. In another small dish beat the custard powder with some of the milk and mix, then add this to the egg and milk mixture. Cut the bread in small pieces, arrange in the dish, sprinkling with the raisins as you go layering. pour the custard mixture over the bread,bake in the preheated oven for 35-40 minutes until golden brown. serve warm with custard or vanilla ice cream.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Bread pudding",
"NameLink": "http://www.mysomalifood.com/bread-pudding/",
"Ingredients": "7-8 slices bread 1/4 cup sugar 1/4 cup raisin 1 teaspoon cinnamon 3 eggs 2 1/2 cups milk 1 tablespoon custard powder 2 table spoon melted butter",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/02/breadp.jpg",
"Instructions": "preheat the oven 180C/350F/gas mark 4, Brush a ovenproof dish with butter. Beat together eggs, sugar, cinnamon, vanilla, butter and the milk in a bowl. In another small dish beat the custard powder with some of the milk and mix, then add this to the egg and milk mixture. Cut the bread in small pieces, arrange in the dish, sprinkling with the raisins as you go layering. pour the custard mixture over the bread,bake in the preheated oven for 35-40 minutes until golden brown. serve warm with custard or vanilla ice cream.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Coconut Semolina Cake (Basbosa)",
"NameLink": "http://www.mysomalifood.com/coconut-semolina-cake-basbosa/",
"Ingredients": "1 1/4 cups sugar	1 1/2 cups semolina flour	2 cups coconut	4 tablespoons butter melted	1 cup milk	2 eggs	2 teaspoons baking powder	1 teaspoon vanilla",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2014/02/coconut-semolina-cake.jpg",
"Instructions": "Brush baking dish with oil or butter.	Preheat the oven 350f/180c	In a bowl mix semolina flour, sugar,coconut, and baking powder.	Add the eggs, butter, milk and vanilla, mix well until all combined.	Turn in to the prepared pan and level the top. Bake in the over for 30 -35 minutes or until golden.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Coconut Semolina Cake (Basbosa)",
"NameLink": "http://www.mysomalifood.com/coconut-semolina-cake-basbosa/",
"Ingredients": "1 1/4 cups sugar	1 1/2 cups semolina flour	2 cups coconut	4 tablespoons butter melted	1 cup milk	2 eggs	2 teaspoons baking powder	1 teaspoon vanilla",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2014/02/coconut-semolina-cake.jpg",
"Instructions": "Brush baking dish with oil or butter.	Preheat the oven 350f/180c	In a bowl mix semolina flour, sugar,coconut, and baking powder.	Add the eggs, butter, milk and vanilla, mix well until all combined.	Turn in to the prepared pan and level the top. Bake in the over for 30 -35 minutes or until golden.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Coconut Sweet",
"NameLink": "http://www.mysomalifood.com/coconut-sweet/",
"Ingredients": "2 cups coconut, fresh or dried 14 oz can condensed milk 2 teaspoon cardamom, freshly grounded 1 tablespoon butter 1/4 cup sugar",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/11/qumbe-macaan.jpg",
"Instructions": "In a sauce pan place the coconut, condensed milk, and the sugar on a medium heat. Stir constantly, making sure not to burn it for about 10 minutes until mixture thickens. Mix in the butter and the cardamom powder. Line a small pound cake pan with a parchment paper and spread the coconut sweets evenly and let it cool. When cool cut them squares, diamonds or shape them into balls.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Coconut Sweet",
"NameLink": "http://www.mysomalifood.com/coconut-sweet/",
"Ingredients": "2 cups coconut, fresh or dried 14 oz can condensed milk 2 teaspoon cardamom, freshly grounded 1 tablespoon butter 1/4 cup sugar",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/11/qumbe-macaan.jpg",
"Instructions": "In a sauce pan place the coconut, condensed milk, and the sugar on a medium heat. Stir constantly, making sure not to burn it for about 10 minutes until mixture thickens. Mix in the butter and the cardamom powder. Line a small pound cake pan with a parchment paper and spread the coconut sweets evenly and let it cool. When cool cut them squares, diamonds or shape them into balls.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Creme Caramel Cake",
"NameLink": "http://www.mysomalifood.com/creme-caramel-cake/",
"Ingredients": "For the Caramel	1 cups sugar	1/4 cup water",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/03/cremecaramelcake.jpg",
"Instructions": "In a� saucepan combine sugar and water, heat until sugar is dissolved over medium heat.	Make sure not to walk away or the sugar will burn quickly. Remove from heat once you have amber color.	Pour caramel over bottom of� 8 or 9 inch 20cm-23cm cake pan, tilting carefully to coat evenly. Let cool.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Creme Caramel Cake",
"NameLink": "http://www.mysomalifood.com/creme-caramel-cake/",
"Ingredients": "For the Caramel	1 cups sugar	1/4 cup water",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/03/cremecaramelcake.jpg",
"Instructions": "In a� saucepan combine sugar and water, heat until sugar is dissolved over medium heat.	Make sure not to walk away or the sugar will burn quickly. Remove from heat once you have amber color.	Pour caramel over bottom of� 8 or 9 inch 20cm-23cm cake pan, tilting carefully to coat evenly. Let cool.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Date Banana Loaf",
"NameLink": "http://www.mysomalifood.com/date-banana-loaf/",
"Ingredients": "1/3 cup unsalted butter	1/3 cup sugar	2 tablespoons honey	2 large eggs	3 ripe bananas	1/2 cup chopped dates	1 cup plain flour	1/2 cup wholemeal/wheat flour	11/2 teaspoons baking powder	1/2 cup Milk	1/2 teaspoon salt",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/06/date-banana-loaf.jpg",
"Instructions": "Preheat the oven to 350f/80c	Grease a loaf-pan.	Whisk the butter, honey and sugar in a large bowl for 5 minutes.	Add the eggs on at the time and mix.	In a food processor puree the dates and banana, and add this to the bowl and mix in.	Mix the flours, baking powder and salt and fold it it along with the milk.	Spoon into the prepared loaf pan and level the top.	Put it in the oven and bake for an 1 hour or until a tester inserted and comes out clean.	Let it coll in the pan for 10 minutes before turning out.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Date Banana Loaf",
"NameLink": "http://www.mysomalifood.com/date-banana-loaf/",
"Ingredients": "1/3 cup unsalted butter	1/3 cup sugar	2 tablespoons honey	2 large eggs	3 ripe bananas	1/2 cup chopped dates	1 cup plain flour	1/2 cup wholemeal/wheat flour	11/2 teaspoons baking powder	1/2 cup Milk	1/2 teaspoon salt",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/06/date-banana-loaf.jpg",
"Instructions": "Preheat the oven to 350f/80c	Grease a loaf-pan.	Whisk the butter, honey and sugar in a large bowl for 5 minutes.	Add the eggs on at the time and mix.	In a food processor puree the dates and banana, and add this to the bowl and mix in.	Mix the flours, baking powder and salt and fold it it along with the milk.	Spoon into the prepared loaf pan and level the top.	Put it in the oven and bake for an 1 hour or until a tester inserted and comes out clean.	Let it coll in the pan for 10 minutes before turning out.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Date Cake",
"NameLink": "http://www.mysomalifood.com/date-cake/",
"Ingredients": "1 1/2 cups plain flour 2 teaspoons baking powder 1/2 teaspoon salt 1 cup brown sugar 3 eggs 1 teaspoon ground cinnamon 1 teaspoon ground cardamom 1 teaspoon ground cloves 1 teaspoon vanilla extract 1/2 cup oil 1/2 cup date syrup",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/04/datecake.jpg",
"Instructions": "Preheat oven 350F degrees Mix sugar, eggs in a large bowl, with a mixer, beat until thick and creamy. Add oil and date syrup then beat for few more minutes. Add flour,� baking powder, cloves, cinnamon and vanilla and beat until smooth. Pour batter into a prepared baking pan. Bake in preheated oven for 30-40 minutes or until a toothpick is inserted into the center , and comes out clean. Serve warm with scoop of your favorite vanilla ice cream and a drizzle of date syrup.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Date Cake",
"NameLink": "http://www.mysomalifood.com/date-cake/",
"Ingredients": "1 1/2 cups plain flour 2 teaspoons baking powder 1/2 teaspoon salt 1 cup brown sugar 3 eggs 1 teaspoon ground cinnamon 1 teaspoon ground cardamom 1 teaspoon ground cloves 1 teaspoon vanilla extract 1/2 cup oil 1/2 cup date syrup",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/04/datecake.jpg",
"Instructions": "Preheat oven 350F degrees Mix sugar, eggs in a large bowl, with a mixer, beat until thick and creamy. Add oil and date syrup then beat for few more minutes. Add flour,� baking powder, cloves, cinnamon and vanilla and beat until smooth. Pour batter into a prepared baking pan. Bake in preheated oven for 30-40 minutes or until a toothpick is inserted into the center , and comes out clean. Serve warm with scoop of your favorite vanilla ice cream and a drizzle of date syrup.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Easy Tiramisu (no eggs)",
"NameLink": "http://www.mysomalifood.com/easy-tiramisu-no-eggs/",
"Ingredients": "8 oz mascarpone	1 cup cream, whipped	1 teaspoon vanilla	6 tablespoons caster sugar	20-24 lady fingers	2 cups of coffee, cooled	Unsweetened coco powder (optional)",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2014/03/easy-tiramisu.jpg",
"Instructions": "Dip the lady fingers one at the time into the coffee drain off any excess and arrange them in the base of a deep serving dish (square 8 inch).	Spread half of the cream mixture over the biscuits.	Dip the remaining lady fingers and repeat the layers.	Chill in the refrigerator for at least 2 hours or over night.	Before serving, dust top with cocoa powder.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Easy Tiramisu (no eggs)",
"NameLink": "http://www.mysomalifood.com/easy-tiramisu-no-eggs/",
"Ingredients": "8 oz mascarpone	1 cup cream, whipped	1 teaspoon vanilla	6 tablespoons caster sugar	20-24 lady fingers	2 cups of coffee, cooled	Unsweetened coco powder (optional)",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2014/03/easy-tiramisu.jpg",
"Instructions": "Dip the lady fingers one at the time into the coffee drain off any excess and arrange them in the base of a deep serving dish (square 8 inch).	Spread half of the cream mixture over the biscuits.	Dip the remaining lady fingers and repeat the layers.	Chill in the refrigerator for at least 2 hours or over night.	Before serving, dust top with cocoa powder.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Orange Cake",
"NameLink": "http://www.mysomalifood.com/orange-cake/",
"Ingredients": "1 cup all purpose flour	1 teaspoon baking powder	1/2 cup oil	3 eggs	3/4 cup sugar	2 tablespoons fresh orange juice	2 teaspoons orange zest",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/07/orange-cake.jpg",
"Instructions": "Heat the oven 350f, 180c or gas mark 4. Grease a loaf-pan.	In a bowl mix together the flour, baking powder and salt. set aside.	In another bowl beat the eggs until doubled in size.	Add the sugar, zest and the oil beat until it creamy.	Add the flour and mix until incorporated don't over mix.	Put the mixture in to the greased baking pan.	Bake for 40 minutes or until a tester comes out clean.	To make the orange glaze	Mix all the Ingredients and drizzle over the top of the warm cake.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Orange Cake",
"NameLink": "http://www.mysomalifood.com/orange-cake/",
"Ingredients": "1 cup all purpose flour	1 teaspoon baking powder	1/2 cup oil	3 eggs	3/4 cup sugar	2 tablespoons fresh orange juice	2 teaspoons orange zest",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/07/orange-cake.jpg",
"Instructions": "Heat the oven 350f, 180c or gas mark 4. Grease a loaf-pan.	In a bowl mix together the flour, baking powder and salt. set aside.	In another bowl beat the eggs until doubled in size.	Add the sugar, zest and the oil beat until it creamy.	Add the flour and mix until incorporated don't over mix.	Put the mixture in to the greased baking pan.	Bake for 40 minutes or until a tester comes out clean.	To make the orange glaze	Mix all the Ingredients and drizzle over the top of the warm cake.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Pineapple Upside-down Cake",
"NameLink": "http://www.mysomalifood.com/pineapple-upside-down-cake/",
"Ingredients": "1 cup sugar	1/3 cup water	20 oz/ 567 can pineapple slices	1 1/2 cup all-purpose flour	1/2 cup wholewheat flour	3/4 cup packed light brown sugar	2 eggs	1/2 cup buttermilk	1 teaspoon cardamom powder	2 teaspoon baking powder	1/4 teaspoon salt	1/2 cup butter	pineapple upside-down cake",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/06/pineapplecake2.jpg",
"Instructions": "Preheat the oven to 350 degrees Fahrenheit .	Generously butter a 10-inch dish and arrange the pineapple in the dish about 8 slices.	Combine 1 cup sugar and 1/3 cup water in a small pan and cook until it turns gold, don't stir only swirl.	Pour over the pineapple slices, cover evenly.	In a large bowl beat the butter add the sugar and beat light and fluffy.	Add the eggs beating after each addition..	Add the buttermilk, cardamom, vanilla, beat just until blended, add the flour, salt and baking powder.	Spoon the batter over pineapple topping spread evenly, bake in the preheated oven about 45 or until it is cooked in the middle.	Cool the cake for 5 minutes, invert the cake into a flat plate.	Serve warm or room temperature.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Pineapple Upside-down Cake",
"NameLink": "http://www.mysomalifood.com/pineapple-upside-down-cake/",
"Ingredients": "1 cup sugar	1/3 cup water	20 oz/ 567 can pineapple slices	1 1/2 cup all-purpose flour	1/2 cup wholewheat flour	3/4 cup packed light brown sugar	2 eggs	1/2 cup buttermilk	1 teaspoon cardamom powder	2 teaspoon baking powder	1/4 teaspoon salt	1/2 cup butter	pineapple upside-down cake",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/06/pineapplecake2.jpg",
"Instructions": "Preheat the oven to 350 degrees Fahrenheit .	Generously butter a 10-inch dish and arrange the pineapple in the dish about 8 slices.	Combine 1 cup sugar and 1/3 cup water in a small pan and cook until it turns gold, don't stir only swirl.	Pour over the pineapple slices, cover evenly.	In a large bowl beat the butter add the sugar and beat light and fluffy.	Add the eggs beating after each addition..	Add the buttermilk, cardamom, vanilla, beat just until blended, add the flour, salt and baking powder.	Spoon the batter over pineapple topping spread evenly, bake in the preheated oven about 45 or until it is cooked in the middle.	Cool the cake for 5 minutes, invert the cake into a flat plate.	Serve warm or room temperature.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Pressed Sugar Cookies with Cardamom",
"NameLink": "http://www.mysomalifood.com/pressed-sugar-cookies-with-cardamom/",
"Ingredients": "1 cup plain flour	1 stick and 2 tablespoons unsalted butter	1/2 tsp salt	1/2 tsp ground cardamom	1 tsp vanilla extract	1/3 cup sugar caster sugar	1 egg yolk",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/05/biscuits.jpg",
"Instructions": "Beat the sugar and butter in a mixer until pale and fluffy.	Add the egg and beat until smooth.	Then add mix in the flour, salt and cardamom.	Pack the dough into cookie press, fit with desired shaped cookie plate.	Press the dough out into ungreased baking sheet.	Bake the cookies until light golden on the sides.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Pressed Sugar Cookies with Cardamom",
"NameLink": "http://www.mysomalifood.com/pressed-sugar-cookies-with-cardamom/",
"Ingredients": "1 cup plain flour	1 stick and 2 tablespoons unsalted butter	1/2 tsp salt	1/2 tsp ground cardamom	1 tsp vanilla extract	1/3 cup sugar caster sugar	1 egg yolk",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/05/biscuits.jpg",
"Instructions": "Beat the sugar and butter in a mixer until pale and fluffy.	Add the egg and beat until smooth.	Then add mix in the flour, salt and cardamom.	Pack the dough into cookie press, fit with desired shaped cookie plate.	Press the dough out into ungreased baking sheet.	Bake the cookies until light golden on the sides.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Qureebaad : Butter Cookies",
"NameLink": "http://www.mysomalifood.com/qureebaad-butter-cookies/",
"Ingredients": "1 cup butter	1 cup icing sugar	2 1/2 cups plain flour	1 teaspoon cardamom powder",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/08/qureebaad.jpg",
"Instructions": "Melt the butter in a pan and let it cool.	Stir in the icing sugar then add the flour and the cardamom and mix until smooth.	Divide in to two, and wrap each piece a plastic or parchment wrap and shaped it into a logs and let it cool for 20 minutes in the fridge.	Preheat the oven to 350f/180c	Grease a baking sheet.	Cut the logs of dough into disks and place them in to the prepared pan.	Bake for 20 minutes or until golden.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Qureebaad : Butter Cookies",
"NameLink": "http://www.mysomalifood.com/qureebaad-butter-cookies/",
"Ingredients": "1 cup butter	1 cup icing sugar	2 1/2 cups plain flour	1 teaspoon cardamom powder",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/08/qureebaad.jpg",
"Instructions": "Melt the butter in a pan and let it cool.	Stir in the icing sugar then add the flour and the cardamom and mix until smooth.	Divide in to two, and wrap each piece a plastic or parchment wrap and shaped it into a logs and let it cool for 20 minutes in the fridge.	Preheat the oven to 350f/180c	Grease a baking sheet.	Cut the logs of dough into disks and place them in to the prepared pan.	Bake for 20 minutes or until golden.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Rice Pudding",
"NameLink": "http://www.mysomalifood.com/rice-pudding/",
"Ingredients": "� cup basmati rice 3 cups milk 1 tablespoon butter � teaspoon vanilla 5 cardamom, crushed 1 cinnamon stick � cup raisins Salt",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/02/ricepudding1.jpg",
"Instructions": "Wash the rice and place in a large pot, add two cups of water and let it boil slowly. When the water evaporates, mash the rice with a spoon, add two cups of milk, cardamom, cinnamon, vanilla, salt and sugar. Bring it to the boil and let it simmer until it becomes thick add here the remaining milk and the raisins cook and simmer until the pudding is creamy and thick. Let it cool, serve warm or cold",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Rice Pudding",
"NameLink": "http://www.mysomalifood.com/rice-pudding/",
"Ingredients": "� cup basmati rice 3 cups milk 1 tablespoon butter � teaspoon vanilla 5 cardamom, crushed 1 cinnamon stick � cup raisins Salt",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/02/ricepudding1.jpg",
"Instructions": "Wash the rice and place in a large pot, add two cups of water and let it boil slowly. When the water evaporates, mash the rice with a spoon, add two cups of milk, cardamom, cinnamon, vanilla, salt and sugar. Bring it to the boil and let it simmer until it becomes thick add here the remaining milk and the raisins cook and simmer until the pudding is creamy and thick. Let it cool, serve warm or cold",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Semolina cake",
"NameLink": "http://www.mysomalifood.com/semolina-cake/",
"Ingredients": "1/2 cup oil/butter 1/2 cup sugar 3 tablespoon millk 2 teaspoon baking powder 3 eggs 2 cups semolina 1/2 cup oil/butter 1/2 cup sugar 3 tablespoon millk 2 teaspoon baking powder 3 eggs 2 cups semolina",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/08/sam1.jpg",
"Instructions": "Preheat the oven to 350F Grease baking dish (23cm/9inch square) Cream butter/oil, milk and sugar in a bowl add the eggs one at the time and mix. Add the semolina, baking powder and mix until combined. Turn in to the prepared pan and level the top. Bake for 30 minutes or until it is golden. Cut the cake in squares, or diamond shapes. Pour the cold syrup over the hot cake. Let it sit to cool and serve. To make the syrup, in a small pan put the sugar and water. Bring it to the boil and keep boiling for 5 minutes. Stir in the orange blossom water. Let it cool.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Semolina cake",
"NameLink": "http://www.mysomalifood.com/semolina-cake/",
"Ingredients": "1/2 cup oil/butter 1/2 cup sugar 3 tablespoon millk 2 teaspoon baking powder 3 eggs 2 cups semolina 1/2 cup oil/butter 1/2 cup sugar 3 tablespoon millk 2 teaspoon baking powder 3 eggs 2 cups semolina",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/08/sam1.jpg",
"Instructions": "Preheat the oven to 350F Grease baking dish (23cm/9inch square) Cream butter/oil, milk and sugar in a bowl add the eggs one at the time and mix. Add the semolina, baking powder and mix until combined. Turn in to the prepared pan and level the top. Bake for 30 minutes or until it is golden. Cut the cake in squares, or diamond shapes. Pour the cold syrup over the hot cake. Let it sit to cool and serve. To make the syrup, in a small pan put the sugar and water. Bring it to the boil and keep boiling for 5 minutes. Stir in the orange blossom water. Let it cool.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Sweet Shells",
"NameLink": "http://www.mysomalifood.com/sweet-shells/",
"Ingredients": "1� 3/4 cup all purpose flour 1/4 cup semolina flour 2 table spoons oil/butter/ghee pinch of salt oil for frying water to form a dough 1 cup of sugar 3 tablespoons of water",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/06/shushume.jpg",
"Instructions": "In a bowl rub the flour, salt and the oil/ghee/ butter using your fingers until the mixture has the consistency of crumbs. Add tablespoons of water at a time to make a soft dough. In the meantime, boil the water and the sugar in pan on medium high until tick syrup. Take marbled sized balls of dough and flatten as shown in the picture, using a back of the fork press with your thumb and roll forward to make a shell, keep it aside and finish with the rest of the shells. Heat the oil in a pan and fry the shells until golden, drain on a kitchen paper. Dip the shells in to the syrup to coat evenly. Let it cool and serve.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Sweet Shells",
"NameLink": "http://www.mysomalifood.com/sweet-shells/",
"Ingredients": "1� 3/4 cup all purpose flour 1/4 cup semolina flour 2 table spoons oil/butter/ghee pinch of salt oil for frying water to form a dough 1 cup of sugar 3 tablespoons of water",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/06/shushume.jpg",
"Instructions": "In a bowl rub the flour, salt and the oil/ghee/ butter using your fingers until the mixture has the consistency of crumbs. Add tablespoons of water at a time to make a soft dough. In the meantime, boil the water and the sugar in pan on medium high until tick syrup. Take marbled sized balls of dough and flatten as shown in the picture, using a back of the fork press with your thumb and roll forward to make a shell, keep it aside and finish with the rest of the shells. Heat the oil in a pan and fry the shells until golden, drain on a kitchen paper. Dip the shells in to the syrup to coat evenly. Let it cool and serve.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Vanilla Bundt Cake",
"NameLink": "http://www.mysomalifood.com/vanilla-bundt-cake/",
"Ingredients": "1 1/2 cup selfraising flour	2 sticks unsalted butter	1 cup sugar	5 eggs	1 teaspoon vanilla	1/2 teaspoon salt",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2014/12/bundtcake1.jpg",
"Instructions": "Preheat oven to 350. Spray a Bundt pan with cooking spray.	Beat butter and sugar together in a bowl with a mixer on medium speed until pale and fluffy, 2 to 3 minutes.	Add eggs, one at a time, beating well after each addition and scraping down sides of bowl.	Add the flour and salt into the mixture and mix until combined .	Pour the batter into prepared pan.Bake cake until golden and a wooden skewer inserted comes out clean, about 50 to 60 minutes. Cool completely before turning out.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Desserts",
"Name": "Vanilla Bundt Cake",
"NameLink": "http://www.mysomalifood.com/vanilla-bundt-cake/",
"Ingredients": "1 1/2 cup selfraising flour	2 sticks unsalted butter	1 cup sugar	5 eggs	1 teaspoon vanilla	1/2 teaspoon salt",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2014/12/bundtcake1.jpg",
"Instructions": "Preheat oven to 350. Spray a Bundt pan with cooking spray.	Beat butter and sugar together in a bowl with a mixer on medium speed until pale and fluffy, 2 to 3 minutes.	Add eggs, one at a time, beating well after each addition and scraping down sides of bowl.	Add the flour and salt into the mixture and mix until combined .	Pour the batter into prepared pan.Bake cake until golden and a wooden skewer inserted comes out clean, about 50 to 60 minutes. Cool completely before turning out.",
"CategoryImg": "http://i0.wp.com/www.treatswithatwist.com/wp/wp-content/uploads/2014/02/Creamy-Millet-Porridge-4.jpg?resize=586%2C391"
},
{
"Category": "Main Courses",
"Name": "Baamiye Suqaar",
"NameLink": "http://www.mysomalifood.com/baamiye-suqaar/",
"Ingredients": "1 pound lamb/beef, cubed 2 potato, diced 1/2 pound okra, sliced 1 squash, diced 1 tomato, chopped 1 chicken cube 1 onion, chopped 1 green onion, chopped 2 tablespoon cilantro, chopped 1 teaspoon coriander powder 1 teaspoon cumin powder 2 tablespoon oil",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/07/bamiyesuqaar.jpg",
"Instructions": "On a medium heat the meat with the oil on a large skillet or a saucepan until brown. Add the onion and cook until tender, then add the potato and stir for 5 minutes. Season with the salt and the spices. Add the tomato, garlic, cilantro, and the squash. Mix the chicken cube with a little water and mix until dissolved then add it to the skillet. Stir in the okra, green onion, finish cooking until all the vegetables are tender Serve with sabaayad.",
"CategoryImg": "https://c2.staticflickr.com/8/7126/6936775300_dfd376ca10_b.jpg"
},
{
"Category": "Main Courses",
"Name": "Beef Lasagna",
"NameLink": "http://www.mysomalifood.com/beef-lasagna/",
"Ingredients": "12 sheets precooked lasagna	15 oz 425g Ricotta cheese	1 cup milk	1 egg	2 cups grated mozzarella cheese",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/07/beef-lasagna.jpg",
"Instructions": "To make the sauce, heat the oil in a large pan over medium heat add the meat and cook until browned stirring frequently. Add the onion stir and cook for 5 minutes.	Stir in the tomatoes, coriander/cilantro leaves, garlic, tomato paste and cook for 5 minutes. season to taste with salt and pepper, cover and let it simmer gently for 45 minutes, siring occasionally.	In a mixing bowl whisk the egg, then add the ricotta and the milk and mix until combined.	Preheat the oven, 375f/190c.	Spoon a thin layer of the sauce on the bottom of an ovenproof dish, then arrange sheets of lasagna over. then spoon over a layer of the ricotta mix then some mozzarella cheese.	Continue the same process twice, finishing with a layer of ricotta. sprinkle over the mozzarella. Bake covered for 30 minutes then uncover and cook until golden-brown and bubbly. serve immediately.",
"CategoryImg": "https://c2.staticflickr.com/8/7126/6936775300_dfd376ca10_b.jpg"
},
{
"Category": "Main Courses",
"Name": "Chicken Suqaar",
"NameLink": "http://www.mysomalifood.com/chicken-suqaar/",
"Ingredients": "1 pound chicken cube 1 squash/ zucchini, sliced 1 small onion, diced 1 teaspoon vinegar 1 teaspoon cumin 1 teaspoon chili powder Salt and pepper to taste 2 teaspoon oil 2 teaspoon lemon 1 teaspoon cilantro/coriander chopped",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2010/11/digaag.jpg",
"Instructions": "On a skillet brown the chicken with oil on high heat, season with salt and pepper, chili powder and cumin powder. Stir the onions until soft, add squash, lemon, vinegar and the cilantro/coriander . Continue stirring until the squash is tender don�t over cook it. Serve with rice, lahooh, sabaayad or bread.",
"CategoryImg": "https://c2.staticflickr.com/8/7126/6936775300_dfd376ca10_b.jpg"
},
{
"Category": "Main Courses",
"Name": "Injera: Ethiopia Sourdough FlatBread with Chicken Stew",
"NameLink": "http://www.mysomalifood.com/injera-ethiopia-sourdough-flatbread-with-chicken-stew/",
"Ingredients": "2 cup all-purposeflour	� cup cornmeal flour	� cup teff flour	2 teaspoon yeast	1/2 cup sourdough starter	3 1/4 cups lukewarm water",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/10/injera.jpg",
"Instructions": "In a mixer or a blender combine all the ingredient and mix or blend until there are no lumps.	Cover and set aside to rest at a warm place for 2 hours.	Heat a nonstick skillet on a medium heat.	Take about � cup of the batter and pour it in the skillet tilting to coat most of the bottom.	Cook, until moisture has evaporated and when lots of holes form in the injera and the edges lift from the pan.	Remove and let cool each injera before stacking them as you go along.",
"CategoryImg": "https://c2.staticflickr.com/8/7126/6936775300_dfd376ca10_b.jpg"
},
{
"Category": "Main Courses",
"Name": "Lahooh and Lentil",
"NameLink": "http://www.mysomalifood.com/lahooh-and-lentil/",
"Ingredients": "1 cup green lentils	2 cups water and more if needed	2 tablespoons oil	1 smalll onion chopped	2 cups baby spinach leaves	1 large tomato, chopped	1 teaspoon cumin	2 cloves garlic chopped	fresh lemon juice	salt,ground black pepper to taste",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/07/lahooh-and-lentil.jpg",
"Instructions": "In a sauce pan bring water to a boil add the lentil, simmer until the lentils are tender about 20-30 minutes add more water if needed.	Drain any excess water and set aside.	Heat the oil in a large skillet over medium heat.	Add the onion and cook, about 4-5 minutes until softened.	Add the tomatoes, cumin and garlic and cook about few minutes,stir to combine.	Stir in the cooked lentil and cook for 5- 10 more minutes.	Season with salt and pepper and serve with lahooh.",
"CategoryImg": "https://c2.staticflickr.com/8/7126/6936775300_dfd376ca10_b.jpg"
},
{
"Category": "Main Courses",
"Name": "Lahooh with Suqaar and Eggs",
"NameLink": "http://www.mysomalifood.com/lahooh-with-suqaar-and-eggs/",
"Ingredients": "1 lb beef cubes, suqaar	2 large tomatoes , chopped	2 eggs	1large onion chopped	2 tablespoons Oil	1 cloves garlic, chopped	1 teaspoon coriander powder	1 teaspoon paprika	Salt and pepper	2 green onion, chopped",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/10/suqaar-lahooh.jpg",
"Instructions": "In a deep skillet on high heat add the meat and stir until brown.	Add oil and stir for few minutes season with salt and pepper.	Add the onion and stir for few more minutes.	Add the tomatoes and the garlic, coriander and paprika. Cook for 5 minutes.	Make two holes by spreading the meat then crack the eggs drop them in to the holes.	Cook covered until the eggs have cooked through. Alternatively bake it in the oven 15-20 min until the eggs are set.	Serve with lahooh.",
"CategoryImg": "https://c2.staticflickr.com/8/7126/6936775300_dfd376ca10_b.jpg"
},
{
"Category": "Main Courses",
"Name": "Lamb Stew : Sanuunad Hilib Adhi",
"NameLink": "http://www.mysomalifood.com/lamb-stew-sanuunad-hilib-adhi/",
"Ingredients": "1lb lamb medium cut 3 large potatoes, cubed 3 large carrots, cubed 1 large onion, chopped 4 large tomatoes, chopped 3 tablespoons oil salt",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/08/lamb-stew.jpg",
"Instructions": "Heat oil in a pan add the meat and sear on both sides on a medium heat . Add onion, and saute for few minutes add potatoes and carrots cook for 5 more minutes. Then add tomatoes saut� another 5 minutes. Add 3 cups of water bring to a boil then cook covered on a low until the stew is thick and the vegetables are tender(add more water if needed). Serve with rice.",
"CategoryImg": "https://c2.staticflickr.com/8/7126/6936775300_dfd376ca10_b.jpg"
},
{
"Category": "Main Courses",
"Name": "Slow roasted leg of lamb",
"NameLink": "http://www.mysomalifood.com/slow-roasted-leg-of-lamb/",
"Ingredients": "1 (6-pound) leg of lamb, bone-in 1 small onion, roughly chopped 4 cloves garlic 2 tablespoons cilantro 1 tablespoon ginger chopped juice of 1 lemon 2 tablespoons olive oil 2 teaspoons cardamom, powder 2 teaspoons coriander, powder 2 teaspoon cumin, powder salt, pepper to taste 1 tablespoon berbere recipe here (optional) 3 carrots , peeled, cut into chunks� (optional) 4 medium potatoes,peeled, cut into chunks (optional)",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/10/leg_lamb1.jpg",
"Instructions": "In a blender or a food processor blend the onion, garlic, cilantro, oil, lemon and the spices until combined. Rub the marinade all over the lamb and season with salt and pepper Put the leg of lamb in a large bag and wrap it tightly with little air in the bag as possible. Let it sit in your refrigerator for two hours to overnight. Remove the leg of lamb from the refrigerator and let it come to a room temperature. Sprinkle with� berbere, salt and pepper. Preheat the oven 450F Place lamb in a roasting pan and cover tightly with foil and place in the oven. Turn the oven temperature down to 325F Cook this for about 3 1/2 hours. Last 20 minutes when the lamb is cooked add the carrots and potatoes and cook uncovered. The lamb is ready when it falls of the bone,and the vegetables are tender. Remove the lamb from the oven and let it rest covered in a foil. As a side dish I have made quick spinach and cabbage and the potatoes where roasted with the lamb in the end. Serve over rice if you prefer.",
"CategoryImg": "https://c2.staticflickr.com/8/7126/6936775300_dfd376ca10_b.jpg"
},
{
"Category": "Main Courses",
"Name": "Bariis Fahfah, Rice Pilaf",
"NameLink": "http://www.mysomalifood.com/bariis-fahfah/",
"Ingredients": "2 cups basmati rice 3 cups of stock 2 garlic, chopped 2 tablespoons oil 1 onion sliced 1 teaspoon salt 4 whole cardamom pods 1 cinnamon stick 5 black peppercorns 2 teaspoon cumin",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/02/bariisfahfah.jpg",
"Instructions": "Rinse the rice well in cold water until most of the starch is removed. Heat the oil in a pan on a medium heat, saut� the onions until brown. Season with salt, add peppercorns, garlic, cinnamon stick, cardamom and the cumin and cook for few more minutes. Add the drained rice and stir for about 2-3 minutes. Add the stock and stir in and cover, bring it to a boil and then reduce the heat. Continue to cook gently on a low heat until the rice is tender about 10 to 15 minutes, you can add more to achieve desired consistency. Garnish with onions or raisin, sprinkle with some saffron powder. Gently fluff the rice with a fork and serve.",
"CategoryImg": "https://c2.staticflickr.com/8/7126/6936775300_dfd376ca10_b.jpg"
},
{
"Category": "Main Courses",
"Name": "Beef Stew with Green Peas and Potato",
"NameLink": "http://www.mysomalifood.com/beef-stew-with-green-peas-and-potato-served-with-rice/",
"Ingredients": "1 lb beef cubes 4 cardamom pods 2 tablespoon cilantro, chopped 2 garlic cloves, minced 1 tablespoon ginger 1 cup frozen peas 4 potatoes, cut into cubes 1 large onion, chopped 4 tomatoes, chopped 1 tablespoon tomato paste 1 Maggi beef cube 1 teaspoon chili powder 2 teaspoon cumin powder 1 teaspoon coriander powder 1 teaspoon turmeric powder 4 tablespoon oil Basmati rice, to serve with",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/07/peasbeef.jpg",
"Instructions": "1 lb beef cubes 4 cardamom pods 2 tablespoon cilantro, chopped 2 garlic cloves, minced 1 tablespoon ginger 1 cup frozen peas 4 potatoes, cut into cubes 1 large onion, chopped 4 tomatoes, chopped 1 tablespoon tomato paste 1 Maggi beef cube 1 teaspoon chili powder 2 teaspoon cumin powder 1 teaspoon coriander powder 1 teaspoon turmeric powder 4 tablespoon oil Basmati rice, to serve with",
"CategoryImg": "https://c2.staticflickr.com/8/7126/6936775300_dfd376ca10_b.jpg"
},
{
"Category": "Main Courses",
"Name": "Fluffy White Rice : Bariis Cad",
"NameLink": "http://www.mysomalifood.com/fluffy-white-rice-bariis-cad/",
"Ingredients": "1 cup basmati rice	1 1/2 cup water	salt and pepper to taste	1 tablespoon oil or butter	1 tablespoon vinegar	1 tablespoon lemon juice",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2014/02/white-rice.-bariis-cad.jpg",
"Instructions": "Wash the rice and drain.	In a saucepan, bring water to a boil.	Stir in the rice, oil or butter, vinegar, lemon juice season with salt and pepper.	Cover and reduce heat and simmer for 20 minutes or until all water is absorbed.	Test the rice if it needs a bit of water you can add to it now.	Fluff with a fork and serve warm",
"CategoryImg": "https://c2.staticflickr.com/8/7126/6936775300_dfd376ca10_b.jpg"
},
{
"Category": "Main Courses",
"Name": "Iskudheh Karis: Chicken Pilaf",
"NameLink": "http://www.mysomalifood.com/isku-dhex-karis-with-chicken/",
"Ingredients": "1 small chicken cut into pieces 2 cups of basmati rice 3 cups of water 1 onion, diced 2 chopped garlic cloves 5 cardamoms 4 cloves 1 cinnamon sticks 1 teaspoon cumin powder 1 teaspoon coriander powder 2 tablespoon cilantro, chopped 1 teaspoon ginger 2 tablespoon tomato paste 1 Maggie chicken bouillon cube 2 medium tomatoes, chopped 1 green chili pepper, seeded, chopped salt and pepper to taste",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/iskudhexkaris.jpg",
"Instructions": "Wash the rice well in cold water until most of the starch is removed and let it to soak in water for 30 minutes. Heat the oil in a heavy pan on a medium heat; add the chicken season with salt and pepper and saut� until brown and crisp. Add the onion and the garlic and fry gently for 5-6 minutes until softened. Stir in the cardamoms, cloves, cinnamon stick, and ginger. Add the chopped tomatoes, chili, cumin, coriander, cilantro and the tomato paste and cook until tomato is soft. Drain the rice and mix with the sauce until combined. Pour the water and the Maggie and mix well, bring it to boil then cover. Simmer gently on a low heat for 15-20 minutes until all the liquid has been absorbed and the rice is done.",
"CategoryImg": "https://c2.staticflickr.com/8/7126/6936775300_dfd376ca10_b.jpg"
},
{
"Category": "Main Courses",
"Name": "Kaluun iyo Bariis: Spicy Fish Sauce with Rice",
"NameLink": "http://www.mysomalifood.com/kaluun-iyo-bariis-spicy-fish-sauce-with-rice/",
"Ingredients": "1 whole fish red snapper/king fish, cleaned and cut 3 potatoes 1 chili pepper 2 carrots � cup cilantro 2 cloves of garlic salt and pepper to taste 2 tomatoes, chopped 1 tablespoon tomato paste 2 teaspoon tamarind paste 1 onion, chopped 1 eggplant, chopped",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/kaluunbariis.jpg",
"Instructions": "Fry the fish both sides with a little oil, and set aside in a warm place. Saut� the onions in the same pan. until golden. Add the garlic and stir for few minutes. Add the potato and the carrots cover and cook for 5 minutes. Add seasonings and the tomatoes, tomato paste, tamarind eggplant and cilantro. Cook until tomatoes are tender. Put the fish back in the sauce and cook on a medium eat add a little water as needed. Continue to cook until the vegetables are tender. Serve with rice.",
"CategoryImg": "https://c2.staticflickr.com/8/7126/6936775300_dfd376ca10_b.jpg"
},
{
"Category": "Main Courses",
"Name": "Lamb Meatballs In Yogurt Sauce",
"NameLink": "http://www.mysomalifood.com/lamb-meatballs-in-yogurt-sauce/",
"Ingredients": "I lb ground lamb 1 tablespoon ginger 1 onion, chopped 2 cloves of garlic, minced 1 green chili, chopped 1 egg, beaten 2 tablespoon cilantro, chopped 2 green onions, chopped Juice of � a lemon For the Tomato Sauce I lb ground lamb 1 tablespoon ginger 1 onion, chopped 2 cloves of garlic, minced 1 green chili, chopped 1 egg, beaten 2 tablespoon cilantro, chopped 2 green onions, chopped Juice of � a lemon",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/bariismeatball.jpg",
"Instructions": "I lb ground lamb 1 tablespoon ginger 1 onion, chopped 2 cloves of garlic, minced 1 green chili, chopped 1 egg, beaten 2 tablespoon cilantro, chopped 2 green onions, chopped Juice of � a lemon",
"CategoryImg": "https://c2.staticflickr.com/8/7126/6936775300_dfd376ca10_b.jpg"
},
{
"Category": "Main Courses",
"Name": "Lamb Surbiyaan: Surbiyaan Hilib Adhi",
"NameLink": "http://www.mysomalifood.com/lamb-surbiyaan-surbiyaan-hilib-adhi/",
"Ingredients": "Caramelized onion and raisins 1/4 cup oil 1 onion, sliced 1/2 cup raisins Saffron 1/4 cup water 1 teaspoon saffron threads Boiling the Rice 3 cups basmati rice 5-6 cups of water The Lamb sauce 2 pounds lamb, medium cut 1 small onion, chopped 2 medium tomatoes, chopped 2 cloves garlic, chopped 1-2 tablespoons coriander/cilantro leaves 2 teaspoons coriander powder 2 teaspoons cumin powder 1-2 teaspoons paprika or a cayenne pepper 2-4 tablespoons oil (use the left over from the caramelized onions) 5 cardamom pods cracked 2 cinnamon sticks 2 tablespoons lemon juice",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2012/08/surb.jpg",
"Instructions": "Caramelized onion and raisins Heat the oil over medium heat, add the onion and fry until nice and brown. Add the raisins and cook until they puff up. Drain on a kitchen paper Keep this a side we will, add this mixture over rice. Soak the Saffron In a small bowl add the saffron pour hot water into the bowl. let is soak for 4- 20 minutes Boiling the Rice Start boiling the water in a sauce pan . when boiled, add the rice and salt to sate. Cook about 4 minutes depending on your heat the rice should be cooked half way use your hand to test it, break the rice grain in your hand. Drain the rice in a colander and let it cool until needed. Cooking the lamb In a large pot fry the lamb with the oil until brown both sides Add onions saute until brown add cardamom, cinnamon sticks, lemon juice, then add garlic add tomatoes, spices and cilantro Mix this together until combined then cook for 3 minutes until fragrant, add the 1/2 cup of water Let it simmer while covered on a medium heat until boil and then lower the heat for 10- 15 minutes. Now we need the boiled rice add it to the lamb sauce, scrape the top evenly. Add the caramelized onion and raisins. Add the saffron water cover the pot and cook on a medium heat until boil, then reduced the heat on a simmer. The bottom of the pan will be dry and there will be no water left make sure not to burn the bottom. The rice should be fluffy",
"CategoryImg": "https://c2.staticflickr.com/8/7126/6936775300_dfd376ca10_b.jpg"
},
{
"Category": "Main Courses",
"Name": "Plain Rice flavored with spices",
"NameLink": "http://www.mysomalifood.com/plain-rice-flavored-with-spices/",
"Ingredients": "2 cups basmati rice 3 cups of water 2 tablespoons ghee/oil 1 onion sliced 1 teaspoon salt 4 whole cardamom pods 1 cinnamon stick 5 black peppercorns 2 teaspoon cumin 1 chicken cube",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/11/bariis.jpg",
"Instructions": "Rinse the rice well in cold water until most of the starch is removed. Heat the oil in a pan on a medium heat, and saut� the onions until brown. Add salt, pepper, cardamom, cinnamon and the cumin and cook until the onions are brown. Add the drained rice and stir for about 2-3 minutes. Add the water and chicken cube and stir in and cover, bring it to a boil and then reduce the heat. Continue to cook gently on a low heat until the rice is tender about 10 to 15 minutes.",
"CategoryImg": "https://c2.staticflickr.com/8/7126/6936775300_dfd376ca10_b.jpg"
},
{
"Category": "Main Courses",
"Name": "Rice with Vermicelli Noodles: Cadriyad iyo Bariis",
"NameLink": "http://www.mysomalifood.com/rice-with-vermicelli-noodles-cadriyad-iyo-bariis/",
"Ingredients": "2 cups Basmati Rice 3 cups of water 1 cup of vermicelli 1 small onion, chopped 4 tablespoons oil salt",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/08/6.jpg",
"Instructions": "Wash the rice and let it soak for 30 minutes. Break the vermicelli noodles into small pieces. fry them with 2 tablespoons of oil on a skillet until golden color. Set aside. In a sauce pan add 2 tablespoons oil and fry the onions for 4 minutes. Add the drained rice and 3 cups water season with salt, bring to a boil turn down the heat and leave to a simmer for 10 minutes. Add the vermicelli to the rice and cover. Mix well with the rice and cover the pan and simmer on a low heat until the rice has soaked all the water and both the rice and vermicelli are tender. Add little water if needed.",
"CategoryImg": "https://c2.staticflickr.com/8/7126/6936775300_dfd376ca10_b.jpg"
},
{
"Category": "Main Courses",
"Name": "Somali Style Rice : Surbiyaan",
"NameLink": "http://www.mysomalifood.com/somali-style-rice-surbiyaan/",
"Ingredients": "6 pieces chicken (Thighs & Legs )	3 cups basmati rice	5 cardamom pods, crushed	2 black cardamom	2 cinnamon sticks	5 peppercorn	1 onion, chopped	3 cloves	2 teaspoons cumin, powder	1 teaspoon ginger, powder	2 teaspoons coriander powder	1 teaspoon paprika/red pepper	2 teaspoon cilantro, chopped	2 cloves garlic, chopped	1/2 green pepper, chopped	1 cup yogurt	1/2 lemon	two medium tomatoes, chopped",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/02/surbiyaan.jpg",
"Instructions": "Clean and soak the rice with water and let it rest of 30 minutes.	Fry the chicken with the oil until brown, add cardamom, black cardamom, cinnamon sticks, cloves, pepper corn.	Add onions saute until brown then add garlic add tomatoes .	Add the yogurt when tomatoes are tender.	Then add the juice of a lemon, cumin, ginger, coriander, paprika and the cilantro.	Let it simmer while covered on a medium heat until boil and then lower the heat for 10- 15 minutes.	In another saucepan add the rice in boiling water cook until the rice is half done.	Drain and add the rice to the chicken sauce and cook until the rice is tender on a medium heat covered, add the garnish.",
"CategoryImg": "https://c2.staticflickr.com/8/7126/6936775300_dfd376ca10_b.jpg"
},
{
"Category": "Salads",
"Name": "Beet Salad with Mustard Vinaigrette",
"NameLink": "http://www.mysomalifood.com/beet-salad-with-mustard-vinaigrette/",
"Ingredients": "Beets, boiled, peeled, sliced into strips 1 onion, sliced 1 head iceberg or romaine salad 2 hard boiled eggs 1 tomato sliced Vinaigrette: 4 tablespoons olive oil juice of one lemon 1 teaspoon mustard 2 tablespoon vinegar Salt and pepper to taste",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/08/beetsalad.jpg",
"Instructions": "Wash the salad and cut in to pieces. In a small bowl, mix together olive oil, lemon juice, mustard, salt, pepper and vinegar. Arrange the salad on a serving plate, top the beets, eggs and onions. Drizzle over the vinaigrette.",
"CategoryImg": "http://www.sequentgroups.com/wp-content/uploads/2015/12/Chopped-Salad_550x310.jpg"
},
{
"Category": "Salads",
"Name": "Cucumber and Tomato Salad",
"NameLink": "http://www.mysomalifood.com/cucumber-and-tomato-salad/",
"Ingredients": "1/2 cucumber sliced 1 small red onion, chopped 2 tomato chopped finely 1/2 lettuce, cleaned, chopped thinly juice of half a lemon 1 tablespoon vinegar 2 tablespoon olive oil salt and pepper to taste",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/salad.jpg",
"Instructions": "In a medium bowl combine the vinegar, lime juice, olive oil, salt and pepper stir well. Putt salad in a serving bowl, top with the cucumber, onion and the tomato. Drizzle over the dressing and serve.",
"CategoryImg": "http://www.sequentgroups.com/wp-content/uploads/2015/12/Chopped-Salad_550x310.jpg"
},
{
"Category": "Salads",
"Name": "Egg Salad",
"NameLink": "http://www.mysomalifood.com/egg-salad/",
"Ingredients": "1 small head romaine, cut into bite size 1 carrot, grated 1 small onion, sliced 1 tomato, sliced 1 small cucumber, sliced 2 hard boiled eggs, sliced Dressing: 2 tablespoons olive oil juice of one lemon 1 -2 teaspoon mustard 2 tablespoon vinegar Salt and pepper to taste 2 tablespoons yogurt",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/05/eggsalad.jpg",
"Instructions": "In a bowl, mix the salad, tomatoes, carrot, cucumber, onions, and the eggs.",
"CategoryImg": "http://www.sequentgroups.com/wp-content/uploads/2015/12/Chopped-Salad_550x310.jpg"
},
{
"Category": "Salads",
"Name": "Fava Bean Salad",
"NameLink": "http://www.mysomalifood.com/fava-bean-salad/",
"Ingredients": "1 small cucumber, chopped 1 large tomato, chopped 1/2 red onion, chopped fine 2 tablespoon fresh cilantro, chopped squeeze of a lemon 2 cloves of garlic, finely chopped 1 15-oz favabean, rinsed and drained 2 tablespoon olive oil 1 teaspoon red chilli powder",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/10/fava-salad.png",
"Instructions": "Saut� the garlic with olive oil, until fragrant for 2 minutes, add the beans and cook for 5 minutes. Then cool for 5 minutes.",
"CategoryImg": "http://www.sequentgroups.com/wp-content/uploads/2015/12/Chopped-Salad_550x310.jpg"
},
{
"Category": "Salads",
"Name": "Fruit Salad",
"NameLink": "http://www.mysomalifood.com/fruit-salad/",
"Ingredients": "1 banana, sliced 1 papaya, diced 1 mango, diced 1/2 cup blueberries 1 table spoons of lemon�",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/06/fruitsalad.jpg",
"Instructions": "In a large bowl combine the banana, papaya, mango, and blueberries, add the lemon juice and mix well. Bananas tend to get brown, add them just before serving.",
"CategoryImg": "http://www.sequentgroups.com/wp-content/uploads/2015/12/Chopped-Salad_550x310.jpg"
},
{
"Category": "Salads",
"Name": "Garow: Sorghum Salad",
"NameLink": "http://www.mysomalifood.com/garow-sorghum-salad/",
"Ingredients": "2 cups sorghum 1/4 cup finely chopped cilantro 3 tablespoons olive oil 2 tablespoons lemon juice 1 onion, diced 2 green onions, chopped 2 tablespoon balsamic vinegar 1/2 red bell pepper, diced 1 tomato, diced chopped olives Salt and pepper to taste",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2010/03/garowsalad.jpg",
"Instructions": "Clean the sorghum water until it is clear. (if you have the time it is best to soaked over night) In a large pot combine the sorghum and enough water to come 2 inches over the sorghum. Bring to a boil and cook uncovered for 1 hour, or until tender, add more water if it needed. Drain and let cool. In a large bowl, combine the sorghum, tomato, pepper, onion, green onions, cilantro, lemon juice, olive oil, olives, season to taste, with salt and pepper.",
"CategoryImg": "http://www.sequentgroups.com/wp-content/uploads/2015/12/Chopped-Salad_550x310.jpg"
},
{
"Category": "Salads",
"Name": "Potato salad with yogurt",
"NameLink": "http://www.mysomalifood.com/potato-salad/",
"Ingredients": "1 lb potato, peeled, cubed and cooked 1 cup yogurt 2 tablespoon chopped cilantro � onion, minced � cup sweet corn 2 hard boiled eggs 1 jalapeno pepper, seeded and chopped 2 green onions, chopped 2 tablespoon mayonnaise 2 teaspoon mustard 2 tablespoon lemon 1 teaspoon smoked horseradish 1 garlic clove, chopped 2 tablespoon olive oil salt and pepper to taste 1 tomato, chopped",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/potatosalad.jpg",
"Instructions": "In a large bowl, mix together mayonnaise, yogurt, mustard, horseradish, lemon, salt, pepper, and the olive oil. In another bowl mix the potato, onion, cilantro, green onion, sweet corn, and pepper. Gently combine the two mixtures until combined. Transfer to a serving bowl and garnish with the tomatoes.",
"CategoryImg": "http://www.sequentgroups.com/wp-content/uploads/2015/12/Chopped-Salad_550x310.jpg"
},
{
"Category": "Salads",
"Name": "Tomato and Cucumber Salad",
"NameLink": "http://www.mysomalifood.com/tomato-and-cucumber-salad/",
"Ingredients": "�1 cumber, finely chopped 2 tomatoes, finely chopped 1 small onion, finely chopped 1 chilli, finely chopped 1 garlic clove, finely minced 2 tablespoons cilantro/coriander leaves, finely chopped 2 tablespoon olive oil Juice of one lemon 2 tablespoon vinegar salt and pepper�",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/07/tomatocu.jpg",
"Instructions": "�Stir together in a bowl the onion, cucumber, tomato, chillies, coriander, lemon juice. Season with salt and pepper, to taste, before serving. In a small bowl mix together,lemon, vinegar, oil and salt and pepper and the minced garlic. Mix until all combined. let it chill.",
"CategoryImg": "http://www.sequentgroups.com/wp-content/uploads/2015/12/Chopped-Salad_550x310.jpg"
},
{
"Category": "Soups",
"Name": "Cauliflower Soup",
"NameLink": "http://www.mysomalifood.com/cauliflower-soup/",
"Ingredients": "1 tablespoon olive oil	1 small onion (chopped)	3 cloves garlic, chopped	salt and pepper to taste	1 teaspoon coriander powder	1 head cauliflower (cut in to florets)	4 cups water or stock	Plain Yogurt(optional)	spinach, chopped (optional garnish)",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/03/cauliflower-soup.jpg",
"Instructions": "In a large soup pan, saute onions, over medium heat until translucent.	Add in cauliflower and cook for few minutes add the garlic, salt, coriander and pepper.	Pour in water or stock and bring to a boil.	Reduce the heat to low and simmer with the lid until cauliflower is tender.	Check for seasoning and adjust accordingly.	Remove from heat and puree until smooth with a hand blender or a food processor.	Serve with yogurt and top with chopped spinach and drizzle with olive oil.",
"CategoryImg": "https://akkiskitchen.files.wordpress.com/2013/10/hp1b9131.jpg"
},
{
"Category": "Soups",
"Name": "Cauliflower Soup",
"NameLink": "http://www.mysomalifood.com/cauliflower-soup/",
"Ingredients": "1 tablespoon olive oil	1 small onion (chopped)	3 cloves garlic, chopped	salt and pepper to taste	1 teaspoon coriander powder	1 head cauliflower (cut in to florets)	4 cups water or stock	Plain Yogurt(optional)	spinach, chopped (optional garnish)",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/03/cauliflower-soup.jpg",
"Instructions": "In a large soup pan, saute onions, over medium heat until translucent.	Add in cauliflower and cook for few minutes add the garlic, salt, coriander and pepper.	Pour in water or stock and bring to a boil.	Reduce the heat to low and simmer with the lid until cauliflower is tender.	Check for seasoning and adjust accordingly.	Remove from heat and puree until smooth with a hand blender or a food processor.	Serve with yogurt and top with chopped spinach and drizzle with olive oil.",
"CategoryImg": "https://akkiskitchen.files.wordpress.com/2013/10/hp1b9131.jpg"
},
{
"Category": "Soups",
"Name": "Chicken and chickpea soup",
"NameLink": "http://www.mysomalifood.com/chicken-and-chickpea-soup/",
"Ingredients": "2 table spoon oil 2 cloves of garlic 1 table spoon ginger 1 medium onion 1 pound chicken 2 potatoes, chopped 2 carrots, chopped 2 tomatoes 1 can chickpea 1 chili 2 table spoon cilantro juice of half a lemon 1 magi bouillon 1 teaspoon cumin 1 teaspoon turmeric Salt and pepper to taste",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/chickensoup.jpg",
"Instructions": "In a large saucepan, heat the oil on a medium heat, add the onion, garlic and the ginger cook until the onion is brown and softened, season with salt and pepper. Add the spices and chicken continue to brown the chicken, and then add potatoes and the carrots. Next add tomatoes cook few more minutes. Then add chickpea, chilies, cilantro, and lemon juice, simmer for few minutes. Add the magi and some water continue to cook until the veggies and the chicken are cooked about 30-40 minutes add more lemon juice. And serve with bread.",
"CategoryImg": "https://akkiskitchen.files.wordpress.com/2013/10/hp1b9131.jpg"
},
{
"Category": "Soups",
"Name": "Chicken and chickpea soup",
"NameLink": "http://www.mysomalifood.com/chicken-and-chickpea-soup/",
"Ingredients": "2 table spoon oil 2 cloves of garlic 1 table spoon ginger 1 medium onion 1 pound chicken 2 potatoes, chopped 2 carrots, chopped 2 tomatoes 1 can chickpea 1 chili 2 table spoon cilantro juice of half a lemon 1 magi bouillon 1 teaspoon cumin 1 teaspoon turmeric Salt and pepper to taste",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/chickensoup.jpg",
"Instructions": "In a large saucepan, heat the oil on a medium heat, add the onion, garlic and the ginger cook until the onion is brown and softened, season with salt and pepper. Add the spices and chicken continue to brown the chicken, and then add potatoes and the carrots. Next add tomatoes cook few more minutes. Then add chickpea, chilies, cilantro, and lemon juice, simmer for few minutes. Add the magi and some water continue to cook until the veggies and the chicken are cooked about 30-40 minutes add more lemon juice. And serve with bread.",
"CategoryImg": "https://akkiskitchen.files.wordpress.com/2013/10/hp1b9131.jpg"
},
{
"Category": "Soups",
"Name": "Chicken Soup : Maraq Digaag",
"NameLink": "http://www.mysomalifood.com/chicken-soup-maraq-digaag/",
"Ingredients": "4 chicken legs-tights 1 tomato, cut in half 3 carrots, peeled 3 potatoes, peeled 1/2� head of cabbage, sliced 3 cloves of garlic, chopped 3 black peppercorns 1 teaspoon cumin seeds 5 cardamom pods, crushed 1 teaspoon coriander 1 teaspoon ginger 1-2 tablespoons coriander/cilantro leaves salt to taste",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/08/maraqdigaag.jpg",
"Instructions": "Place the chicken in a in a large soup pan, cover with water, bring it to a boil. Skim the foam that rises to the top with a spoon. Boil for 15 minutes, then let simmer on a medium. Add tomatoes, potatoes,cabbage, carrots, garlic and the spices continue to cook for 30-40 minutes or until the Chicken is tender almost falling off from the bone. Garnish with more cilantro/coriander leaves. Serve with bead.",
"CategoryImg": "https://akkiskitchen.files.wordpress.com/2013/10/hp1b9131.jpg"
},
{
"Category": "Soups",
"Name": "Chicken Soup : Maraq Digaag",
"NameLink": "http://www.mysomalifood.com/chicken-soup-maraq-digaag/",
"Ingredients": "4 chicken legs-tights 1 tomato, cut in half 3 carrots, peeled 3 potatoes, peeled 1/2� head of cabbage, sliced 3 cloves of garlic, chopped 3 black peppercorns 1 teaspoon cumin seeds 5 cardamom pods, crushed 1 teaspoon coriander 1 teaspoon ginger 1-2 tablespoons coriander/cilantro leaves salt to taste",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2011/08/maraqdigaag.jpg",
"Instructions": "Place the chicken in a in a large soup pan, cover with water, bring it to a boil. Skim the foam that rises to the top with a spoon. Boil for 15 minutes, then let simmer on a medium. Add tomatoes, potatoes,cabbage, carrots, garlic and the spices continue to cook for 30-40 minutes or until the Chicken is tender almost falling off from the bone. Garnish with more cilantro/coriander leaves. Serve with bead.",
"CategoryImg": "https://akkiskitchen.files.wordpress.com/2013/10/hp1b9131.jpg"
},
{
"Category": "Soups",
"Name": "Kale potato lamb soup",
"NameLink": "http://www.mysomalifood.com/kale-potato-lamb-soup/",
"Ingredients": "1 punch kale	half a head cabbage	2 potatoes	1 tomato	2 teaspoons tomato paste	3 cloves of garlic,chopped	1 medium onion small onion	2 pounds lamb or goat	1 teaspoon coriander powder",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/01/lamb-kale-soup.jpg",
"Instructions": "In a large pot boil the meat with water until tender.	Chop the vegetables in the same size and add it to the meat. season with salt pepper and the coriander and bring it to a boil.	Simmer over low heat add more water if needed and until the vegetables are tender	Check if it needs more seasoning.	Serve warm with rice, flat breads.",
"CategoryImg": "https://akkiskitchen.files.wordpress.com/2013/10/hp1b9131.jpg"
},
{
"Category": "Soups",
"Name": "Kale potato lamb soup",
"NameLink": "http://www.mysomalifood.com/kale-potato-lamb-soup/",
"Ingredients": "1 punch kale	half a head cabbage	2 potatoes	1 tomato	2 teaspoons tomato paste	3 cloves of garlic,chopped	1 medium onion small onion	2 pounds lamb or goat	1 teaspoon coriander powder",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/01/lamb-kale-soup.jpg",
"Instructions": "In a large pot boil the meat with water until tender.	Chop the vegetables in the same size and add it to the meat. season with salt pepper and the coriander and bring it to a boil.	Simmer over low heat add more water if needed and until the vegetables are tender	Check if it needs more seasoning.	Serve warm with rice, flat breads.",
"CategoryImg": "https://akkiskitchen.files.wordpress.com/2013/10/hp1b9131.jpg"
},
{
"Category": "Soups",
"Name": "Lentil Soup",
"NameLink": "http://www.mysomalifood.com/lentil-soup/",
"Ingredients": "3 potatoes, diced 2 carrots, chopped 1 small onion, chopped 1 small tomato, chopped 2 cloves of garlic, minced 1 cup lentil 1 Magi cube salt and pepper to taste 1 teaspoon cumin 1 teaspoon paprika/chili powder/ 1 tablespoon chopped cilantro",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/lentilsoup.jpg",
"Instructions": "In a sauce pan on a medium heat, add the lentil and cover with water. Bring it to a boil then simmer until the lentils are tender. On a sauce pan add the onions and cook until brown add the potato and the carrot. Cook for few minutes. Season with salt and pepper. Add the garlic, tomato, cilantro and cook until tomatoes are tender. Strir in the lentil, Maggi cube, cumin, paprika and cover with water. Cook until the potatoes and the carrots are tender, add more water if needed. Blend soup using a hand held blender or use a blender until pureed, or you can serve it as it is",
"CategoryImg": "https://akkiskitchen.files.wordpress.com/2013/10/hp1b9131.jpg"
},
{
"Category": "Soups",
"Name": "Lentil Soup",
"NameLink": "http://www.mysomalifood.com/lentil-soup/",
"Ingredients": "3 potatoes, diced 2 carrots, chopped 1 small onion, chopped 1 small tomato, chopped 2 cloves of garlic, minced 1 cup lentil 1 Magi cube salt and pepper to taste 1 teaspoon cumin 1 teaspoon paprika/chili powder/ 1 tablespoon chopped cilantro",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/06/lentilsoup.jpg",
"Instructions": "In a sauce pan on a medium heat, add the lentil and cover with water. Bring it to a boil then simmer until the lentils are tender. On a sauce pan add the onions and cook until brown add the potato and the carrot. Cook for few minutes. Season with salt and pepper. Add the garlic, tomato, cilantro and cook until tomatoes are tender. Strir in the lentil, Maggi cube, cumin, paprika and cover with water. Cook until the potatoes and the carrots are tender, add more water if needed. Blend soup using a hand held blender or use a blender until pureed, or you can serve it as it is",
"CategoryImg": "https://akkiskitchen.files.wordpress.com/2013/10/hp1b9131.jpg"
},
{
"Category": "Soups",
"Name": "Maraq Fahfah : Somali Soup",
"NameLink": "http://www.mysomalifood.com/maraq-fahfah-somali-soup/",
"Ingredients": "3 medium potatoes 2 carrots Half a head of cabbage 1 tomato, chopped 1 pound beef/lam 1 small onion, chopped 2 cloves of garlic, chopped 2 table spoon cilantro, chopped Half of green pepper, chopped 2 green onions, chopped 2 teaspoon coriander powder 1 green chili, seeded Juice of half of a lemon Salt and pepper, to taste",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/maraq.jpg",
"Instructions": "In a large pot cook the beef and cover with water and the magi until the meat is tender. Add the potatoes, carrots and the cabbage and cook for 10-15 minutes. Add the rest of the vegetables and season with salt and pepper. Cook until the vegetables are tender",
"CategoryImg": "https://akkiskitchen.files.wordpress.com/2013/10/hp1b9131.jpg"
},
{
"Category": "Soups",
"Name": "Maraq Fahfah : Somali Soup",
"NameLink": "http://www.mysomalifood.com/maraq-fahfah-somali-soup/",
"Ingredients": "3 medium potatoes 2 carrots Half a head of cabbage 1 tomato, chopped 1 pound beef/lam 1 small onion, chopped 2 cloves of garlic, chopped 2 table spoon cilantro, chopped Half of green pepper, chopped 2 green onions, chopped 2 teaspoon coriander powder 1 green chili, seeded Juice of half of a lemon Salt and pepper, to taste",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2009/05/maraq.jpg",
"Instructions": "In a large pot cook the beef and cover with water and the magi until the meat is tender. Add the potatoes, carrots and the cabbage and cook for 10-15 minutes. Add the rest of the vegetables and season with salt and pepper. Cook until the vegetables are tender",
"CategoryImg": "https://akkiskitchen.files.wordpress.com/2013/10/hp1b9131.jpg"
},
{
"Category": "Soups",
"Name": "Oatmeal Soup : Shurbad",
"NameLink": "http://www.mysomalifood.com/oatmeal-soup-shurbad/",
"Ingredients": "1 1/2 cups of oats 6 cups of water 1/2 to 1 pound of meat salt pepper 1 small onion chopped 1 clove of garlic chopped 1 teaspoon cumin powder 1 teaspoon coriander powder one lemon cut in half",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2010/08/oatmealsoup.jpg",
"Instructions": "In a medium sauce pan heat the oil add the meat and brown, add the onion season with salt and pepper cook until the onions are translucent, add the garlic, cumin and coriander powder stir for few minutes. Add the oats and bring it to a boil reduce the heat and simmer while stirring occasionally about 30- 40 minutes. (make sure not to burn the soup.) Using a hand blender or in a blender blend the soup until smooth and creamy. Serve with lemon and sprinkle with some sugar and duqus (optional).",
"CategoryImg": "https://akkiskitchen.files.wordpress.com/2013/10/hp1b9131.jpg"
},
{
"Category": "Soups",
"Name": "Oatmeal Soup : Shurbad",
"NameLink": "http://www.mysomalifood.com/oatmeal-soup-shurbad/",
"Ingredients": "1 1/2 cups of oats 6 cups of water 1/2 to 1 pound of meat salt pepper 1 small onion chopped 1 clove of garlic chopped 1 teaspoon cumin powder 1 teaspoon coriander powder one lemon cut in half",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2010/08/oatmealsoup.jpg",
"Instructions": "In a medium sauce pan heat the oil add the meat and brown, add the onion season with salt and pepper cook until the onions are translucent, add the garlic, cumin and coriander powder stir for few minutes. Add the oats and bring it to a boil reduce the heat and simmer while stirring occasionally about 30- 40 minutes. (make sure not to burn the soup.) Using a hand blender or in a blender blend the soup until smooth and creamy. Serve with lemon and sprinkle with some sugar and duqus (optional).",
"CategoryImg": "https://akkiskitchen.files.wordpress.com/2013/10/hp1b9131.jpg"
},
{
"Category": "Soups",
"Name": "Okra and Vegetable Soup : Maraq Baamiye iyo Khudrad kale",
"NameLink": "http://www.mysomalifood.com/okra-and-vegetable-soup-maraq-baamiye-iyo-khudrad-kale/",
"Ingredients": "1 onion, chopped	1lb okra, trimmed and cut	2-3 carrots	3 potatoes chopped	1 large tomato, chopped	1 zucchini/courgette, chopped	2 cloves garlic, finely chopped	3 cups broth/stock	1 teaspoon coriander powder	2 tablespoons oil	salt and pepper",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/07/okra-soup.jpg",
"Instructions": "In a saucepan heat oil on a medium heat add the onions and cook for 4 minutes.	Add the potatoes and the carrots, cook for 4 minutes add salt and pepper.	Then add the tomatoes stir for few minutes add the zucchini/courgette.	Add the broth and cook for 5 minutes.	Then add the okra and the garlic and the coriander powder.	Add more water and bring to a boil.Then simmer cook until the vegetables are tender.",
"CategoryImg": "https://akkiskitchen.files.wordpress.com/2013/10/hp1b9131.jpg"
},
{
"Category": "Soups",
"Name": "Okra and Vegetable Soup : Maraq Baamiye iyo Khudrad kale",
"NameLink": "http://www.mysomalifood.com/okra-and-vegetable-soup-maraq-baamiye-iyo-khudrad-kale/",
"Ingredients": "1 onion, chopped	1lb okra, trimmed and cut	2-3 carrots	3 potatoes chopped	1 large tomato, chopped	1 zucchini/courgette, chopped	2 cloves garlic, finely chopped	3 cups broth/stock	1 teaspoon coriander powder	2 tablespoons oil	salt and pepper",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2013/07/okra-soup.jpg",
"Instructions": "In a saucepan heat oil on a medium heat add the onions and cook for 4 minutes.	Add the potatoes and the carrots, cook for 4 minutes add salt and pepper.	Then add the tomatoes stir for few minutes add the zucchini/courgette.	Add the broth and cook for 5 minutes.	Then add the okra and the garlic and the coriander powder.	Add more water and bring to a boil.Then simmer cook until the vegetables are tender.",
"CategoryImg": "https://akkiskitchen.files.wordpress.com/2013/10/hp1b9131.jpg"
},
{
"Category": "Soups",
"Name": "Okra Soup : Maraq Baamiye",
"NameLink": "http://www.mysomalifood.com/okra-soup-maraq-baamiye/",
"Ingredients": "2 tablespoons oil	1 Onion,chopped	3 Garlic cloves, chopped	1 cup chopped green onion	500 g okra, ends trimmed	6 Cups broth	1/4 Cup green coriander, chopped	Salt and pepper	1 lemon juice",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2014/03/okrasoup.jpg",
"Instructions": "In a saucepan heat the oil over medium heat.	Add the onions and garlic, stirring cook about 5 minutes.	Add the green onions and okra, and stir.	Add the broth, lemon juice and salt and pepper.	Bring it to a boil, reduce heat and cook for 30 minutes covered .	Add cilantro and mix in.	In a blender or hand blender blend the mixture until smooth.	Serve warm",
"CategoryImg": "https://akkiskitchen.files.wordpress.com/2013/10/hp1b9131.jpg"
},
{
"Category": "Soups",
"Name": "Okra Soup : Maraq Baamiye",
"NameLink": "http://www.mysomalifood.com/okra-soup-maraq-baamiye/",
"Ingredients": "2 tablespoons oil	1 Onion,chopped	3 Garlic cloves, chopped	1 cup chopped green onion	500 g okra, ends trimmed	6 Cups broth	1/4 Cup green coriander, chopped	Salt and pepper	1 lemon juice",
"image_src": "http://www.mysomalifood.com/wp-content/uploads/2014/03/okrasoup.jpg",
"Instructions": "In a saucepan heat the oil over medium heat.	Add the onions and garlic, stirring cook about 5 minutes.	Add the green onions and okra, and stir.	Add the broth, lemon juice and salt and pepper.	Bring it to a boil, reduce heat and cook for 30 minutes covered .	Add cilantro and mix in.	In a blender or hand blender blend the mixture until smooth.	Serve warm",
"CategoryImg": "https://akkiskitchen.files.wordpress.com/2013/10/hp1b9131.jpg"
}
]

  res.send(data)







});

module.exports = router;
