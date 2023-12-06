const d = new Date(2022, 1, 10, 18, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
    case 1:
        console.log('It is January');
        break;
    case 2:
        console.log('Its February');    
    case 3:
        console.log('Its March');    
        break;
        default:
            console.log('Its is not jan, feb or march');

}

switch (true) {
    case hour < 12:
        console.log('Good Morning');
        break;
    case hour < 18:
        console.log('Good AfterNoon');
        break;
    default:
        console.log('GoodNight');    
}