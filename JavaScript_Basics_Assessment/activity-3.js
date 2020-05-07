//Start off by creating an array with three student names.
const nameList = ['Mark', 'Hannah', 'Luke'];

//Create a loop that will prompt the user for three more names.
//After every user input, store the new name into the array.
for (let i = 0; i < 3; i++){
  const name = prompt('enter a name');
  nameList.push(name);
}

//Create a new loop that will iterate through the array and console log each element of the array.
for (let i = 0; i < nameList.length; i++){
  const name = nameList[i];
  console.log(name);
}