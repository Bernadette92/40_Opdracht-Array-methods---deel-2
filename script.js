
//A 

const superheroes = [
  {name: "Batman", alter_ego: "Bruce Wayne"}, 
  {name: "Superman", alter_ego: "Clark Kent"}, 
  {name: "Spiderman", alter_ego: "Peter Parker"}]

  const findSpiderMan = function (superheroes){
return superheroes.name === "Superman";
  }
  
  console.log(superheroes.find(findSpiderMan));

  //B

const doubleArrayValues = [1, 2, 3];
const double = function (x){
  return x * 2;
};
const verdubbelt = doubleArrayValues.map(double);
  console.log( verdubbelt);

//C
const items = [1, 4, 3, 6, 9, 7, 11]
const items1 = [1,2,1,2,1,2]

const containsNumberBiggerThan10 = items.some ((items) => {
  return items > 10
});

const containsNumberBiggerThan101 = items1.some ((items) => {
  return items > 10
});


console.log (containsNumberBiggerThan10)
// result should be true
console.log (containsNumberBiggerThan101);
// result should be false

//E

const arrayValues = [1, 4, 3, 6, 9, 7, 11];
const multi = function (x){
  return x * 10;
};
const tenfold = arrayValues.map(multi);
  console.log( tenfold);

//F

const cijfers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]

const isBelow100 = cijfers.some ((items) => {
  return items > 100
});


console.log(isBelow100);
