"use strict";
let firstName = "Gordon",
  lastName = "Gao";

console.log(firstName, lastName);
firstName = undefined;
firstName = null;
console.log(firstName, lastName);
console.log(firstName, lastName);

{
  let a = 1;
  a = 1;
  console.log(a);
  let b = "this is a b",
    b1 = "this is a b_1";
  let b3 = `it's a dog. dvfsdfv
  fbvsfdbv
  dfbvadfb
  adfbdafb
  adfbvad
  ${a}`;

  console.log(b3);
  let b5 = "caev" + 1;
  console.log(b5, "\n", typeof b5);

  let x = true,
    y = false,
    z = null;

  console.log(x == y);

  if (x) {
    console.log("good");
  } else if (y) {
    console.log("bad");
  } else if (z) {
    console.log("OK");
  }
}

{
  let obj = {
    name: "Gordon",
    age: 25,
    occupation: "engineer",
    stuff: { food: "apple", tool: "keyboard" },
  };

  obj.income = 0;
  obj.name = "gordon";
  console.log(obj);
  console.table(obj);
}

{
  let obj = {
    name: "Gordon",
    age: 25,
    occupation: "engineer",
    stuff: { food: "apple", tool: "keyboard" },
  };

  let obj2 = obj;
  console.log(obj, obj2);
  obj2.age = 30;
  console.log(obj, obj2);

  let obj3 = { ...obj };
  console.log(obj, obj3);
  obj3.age = 18;
  console.log(obj, obj3);

  let user = {
    name: "gordon",
    age: 18,
    profile: {
      cv: "http://",
      id: 12423412354,
    },
  };

  let user2 = { ...user };
  user2.name = "mike";
  user2.profile.id = 765432;
  console.log(user, user2);
}

{
  let array = [1, 2, 3, "4", true, { name: "cas" }];
  let array2 = array;
  array[0] = "gordon";
  console.log(array, array2);

  console.log(array.length);
  array[100] = {};
  array[100].name = 4324;
  console.log(array[100]);
  console.log(array.length);
}

{
  const password = "cavcsavcs";

  const obj = {
    name: "vsdvasad",
  };
  obj.name = "vavfav";
  obj.names = "ca";
  console.table(obj);

  let x = 10,
    y = 3;
  console.log(x + y);
  console.log(x - y);
  console.log(x * y);
  console.log(x / y);
  console.log(x % y);
  console.log(Math.sqrt(100));
  console.log(x ?? 5);
  console.log(x);
  console.log(x++);
  console.log(x);
  console.log(++x);
  console.log(x);
  console.log(x == 1);
  console.log(x === "10");
  console.log(0 == false);
  console.log(true == 2);
}

{
  let points = 100;
  if (points >= 100) {
    console.log("gold");
  } else {
    console.log("silver");
  }
  let x = points > 100 ? "gold" : "silver";
  console.log(x);
  console.log(true && false);
  console.log(true || false);
  console.log(true);
  let daytime = 5;
  console.log(
    (daytime > 18 && daytime < 24) || (daytime > 0 && daytime < 6)
      ? "night"
      : "day"
  );
  console.log(NaN || false);
  const port = 5666;
  //   const PORT = process.env.PORT ||port
  console.log(false == 0);

  console.log(false ?? 5);
}

{
  let obj1 = { s1: "abc", s2: [1, 5, 2] };
  let obj2 = { ...obj1 };
  obj2.s2.sort(function (a, b) {
    return a - b;
  });
  console.log(obj1.s2); //lodash
}

{
  const roles = ["student", "teacher", "boss"];
  let role = roles[0];

  if (role == "student") {
    console.log("hello!");
  } else if (role == "teacher") {
    console.log("hi!");
  } else if (role == "boss") {
    console.log("??");
  } else {
    console.log("...");
  }

  switch (role) {
    case roles[0]:
      console.log("hello");
      break; //if there is no break, it will keep execute to the next case until it hits a "break"
    case roles[1]:
      console.log("hi");
      break;
    case roles[2]:
      console.log("??");
      break;
    default:
      console.log("...");
      break;
  }
}

{
  let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let num = 0;
  while (num < 9) {
    arrayNumber.push(num);
    num++;
  }
  console.log(arrayNumber);

  let newArrayNumber = [];
  for (let i = 0; i < 10; i++) {
    newArrayNumber[i] = i + 5;
  }
  console.log(newArrayNumber);

  arrayNumber.forEach((value, index) => {
    console.log(index, value);
  });

  let sum = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    sum += arrayNumber[i];
  }
  console.log(sum);

  sum = 0;
  arrayNumber.forEach((value) => {
    sum += value;
  });
  console.log(sum);
}

{
  let str = ``;
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j <= i; j++) {
      str += `${i}*${j}=${i * j}  `;
    }
    str += `\n`;
  }
  console.log(str);
}

{
  function blender(fruit = "Apple") {
    console.log(`${fruit} Juice`);
  }
  blender();

  //unknown number of input
  function adder(...num) {
    let out = 0;
    for (let i of num) {
      out += i;
    }
    console.log(out);
  }
  adder(1, 2, 3, 4, 5, 6);

  function adder2(a, b) {
    return a + b;
  }
  let total = adder2(1, 2);
  console.log(total);

  //object as input
  function func6(obj) {
    console.log("name", obj.name);
    console.log("age", obj.age);
    obj.name = "marci";
    obj.age = 25;
  }

  const obj = {
    name: "gordon",
    age: 25,
  };
  func6(obj);
  console.log(obj);
  //only one entrance to the function, but there is multiple exsit: 1. return new value; 2. use for complex structure like object can change the orginal input data

  //use object as input without changing it
  function fun7({ name, age }) {
    console.log("name", name);
    console.log("age", age);
    name = "hehe";
    age = 50;
    return { name, age };
  }
  const obj2 = fun7(obj);
  console.log(obj);
  console.log(obj2);
}

{
  //arrow operator
  const arrow_fun1 = (a, b) => {
    return a - b;
  };
  const fun8 = function (a, b) {
    return a - b;
  }; //can only be used after declare it
  console.log(arrow_fun1(1, 2));
  console.log(fun8(1, 2));

  //better to use arrow operation in forEach()
  const array = [1, 2, 3, 4, 5];
  const array_fun2 = (num) => {
    console.log(num);
  };
  array.forEach(array_fun2);
}

{
  const circle = {
    radius: 1,
    location: { x: 1, y: 2 },
    isVisible: true,
    draw1: function () {
      console.log("draw1");
    },
    draw2() {
      console.log("draw2");
    },
  };

  circle.draw1();
  circle.draw2();

  //take value from outside
  const radius = 1;
  const location = { x: 1, y: 2 };
  const isVisible = true;
  const draw = function () {
    console.log("draw");
  };
  const circle2 = {
    radius: radius,
    location: location,
    isVisible: isVisible,
    draw: draw,
  };
  circle2.draw();

  //we can even do this
  const circle3 = {
    radius,
    location,
    isVisible,
    draw,
  };
  circle3.draw();
}

{
  //selector and manipulate html, query selector
  const content = document.querySelector(".content");
  content.innerHTML = "hahaha";

  const contents = document.querySelectorAll(".content");

  console.log(contents);

  contents.forEach((node, index) => {
    node.innerHTML = `"yes"${index}`;
  });

  //document.getElementById()
  //document.getElementsByClassName()

  //creat element
  const div = document.createElement("div"); //creat element
  div.innerHTML = "<h1>Click Me</h1>";
  contents[contents.length - 1].appendChild(div); //append()==appendChild()
  const domBody = document.querySelector("body");

  domBody.appendChild(div);

  div.classList.add("active");
  div.classList.remove("active");
  div.classList.toggle("active");

  div.setAttribute('style','cursor:pointer')

  div.addEventListener('click', ()=>{div.classList.toggle('active')})
}
