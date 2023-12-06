const d = new Date(10, 30, 2022, 6, 0, 0);
const hour = d.getHours();

if (hour <= 8) {
    console.log('Good Morning');
} else if (hour < 18) {
    console.log('Good Afternoon');
}
else {
    console.log('Good Night');
}

//nested if 
if (hour <= 8) {
    console.log('Good Morning');
    if (hour === 6) {
     console.log('Wake Up');  
    }
} else if (hour < 18) {
    console.log('Good Afternoon');
}
else {
    console.log('Good Night');
    
    if (hour >= 20) {
     console.log('zzzzzzz');
    }
}

//multiple conditon 
//The && operator returns true if both expressions are true

if (hour >= 7 && hour < 15) {
   console.log('It is work time!');
}

//or
//The || returns true if one or both expressions are true
if (hour === 6 || hour === 20) {
    console.log('Brush your teeth');
}