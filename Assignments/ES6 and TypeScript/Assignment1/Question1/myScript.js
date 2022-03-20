const number = 100;

try {
    number =200;
} catch (error) {
    console.log(error+`value assigned to const variable is ${number} cannot be changed.`);
};

