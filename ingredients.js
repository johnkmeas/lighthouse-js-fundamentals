var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var repeat = 0;
// Write a while loop that prints out the contents of ingredients:
console.log('1');
while(repeat < ingredients.length ){
  console.log(ingredients[repeat])
  repeat++;
}
// Write a for loop that prints out the contents of ingredients:
console.log('2');
for (var i = 0; i < ingredients.length; i++){
  console.log(ingredients[i])
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log('3');
for (var i = ingredients.length - 1 ; i >= 0; i--){
  console.log(ingredients[i])
}