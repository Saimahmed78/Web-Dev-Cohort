// let date = new Date();  
// console.log(date.toLocaleString());  // Prints the current date & time  

// console.log(date.getTime());  // Prints the number of milliseconds since Jan 1, 1970  
// // console.log(date.setTime())

// const launchDate = new Date("July 1, 1999");
// const newlaunchdate= new Date()
// console.log(newlaunchdate.setTime(0))
// console.log(newlaunchdate.toUTCString())
function countApples(apples) {
    let count = 0;
    for (let i = 0; i < apples; i++) {
        count = count + 1
    }
    return count
}
function countBoxes(totalBars, barsPerBox) {
    let boxno = 0
    for (let i = barsPerBox; barsPerBox <= totalBars; i++) {
        boxno++
        totalBars = totalBars - barsPerBox
    }


    return boxno
}

console.log(countBoxes(20, 4))


function totalStars(starLevels) {
    let totalStars = 0;
    for (let i = 0; i < starLevels.length; i++) {
        totalStars = totalStars + starLevels[i].length
    }
    return totalStars
}

console.log(totalStars([["*", "*", "*"], ["*", "*", "*"], ["*", "*", "*"]]));
// let guestList = []
// /function addGuest(obj) {
//     let guestList = obj.guestList;  
//     let newGuest = obj.newGuest;   
 
//     guestList.push(newGuest); 
//     return guestList;
//  }
// console.log(addGuest({ "guestList": [], "newGuest": "C" }));
function addGuest(guestList, newGuest ) {
    guestList.push(newGuest);
    return guestList;
}
// console.log(addGuest({ "guestList": ["A", "B"], "newGuest": ["C","D"] })); // Now it works!

function filterHealthy(foodList) {
    let list = foodList.filter(el => el!="C")
    return list
}

console.log(filterHealthy(["A","B","C"]));


function writeLoveLetter(message, name) {
    let newmsg=message.unshift(name)
    return newmsg
  }
  console.log(writeLoveLetter(["A","B","C"],["D"]));

  function createStudentProfile(name, age, grade) {
    if(typeof(name)!=="string" || age>=5 || typeof(grade)!== "string" || name===""){
      let obj={
        name:name,
        age:age,
        grade:grade
      }
      return obj
    } else{
      return "Invalid input"
    }
  }

  console.log(createStudentProfile("Saim",4,"10th"))

  let obj={
    name:"Saim",
    age:18
  }
obj.num=18
console.log(obj)

function addCarColor(data) {
    let { car, color } = data;
    if (car.hasOwnProperty("a") && car.hasOwnProperty("b") && typeof color === "string" && color.length > 0) {
        car.color = color; 
        return data; 
    } else {
        return "Invalid color";
    }
}

 console.log(addCarColor({ "car": {"a":"a","b":"b"},"color":"green"}))

 function user(user1){
  if(typeof user1 === "string")
    return true
  else 
  return false
 }

 console.log(user({a:1}))