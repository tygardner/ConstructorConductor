/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

var users = [];


//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

var tyler = new User('Tyler', 'tylermcginnis33', 'iLoveJS');
  users.push(tyler);

var cahlan = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
  users.push(cahlan);

var lenny = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');
  users.push(lenny);


console.log('Tyler\'s information is ');
//Console.log all of Tylers information

console.log('Tyler\'s information is ',tyler);



//Now console.log all of Lennys information

console.log('Lenny\'s information is ', lenny);

//Now create another instance of User using your own information and then add that to your users array.

var ty = new User('Ty', 'tygardner16@gmail.com', 'helloeveryone');
  users.push(ty);

//Now loop through your users Array and console.log every users name. 

console.log('All my users names are ', );

var people = function (myarr){
  var looper = "All my users names are";
    for(var i = 0; i < myarr.length; i++){
      looper += " " + myarr[i].name;
  }
  return looper;
};

people(users);