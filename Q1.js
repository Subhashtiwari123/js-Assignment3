// 1.Create in object representing a car with properties like "make," "model," and "years" Write a fanction to
// display all the properties of the car

const car = {
    make: "Tata",
    model: "Punch",
    year: 2023,
};

function displayCarProperties(car){
    for(const property in car){
        console.log(`${property}:${car[property]}`)
    }
}
displayCarProperties(car);