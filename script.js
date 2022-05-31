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
  x = points > 100 ? "gold" : "silver";
  console.log(x);
  console.log(true && false);
  console.log(true || false);
  console.log(true);
  daytime = 5;
  console.log(
    (daytime > 18 && daytime < 24) || (daytime > 0 && daytime < 6)
      ? "night"
      : "day"
  );
  console.log(NaN || false);
  const port = 5666;
  //   const PORT = process.env.PORT ||port
  console.log(false == 0);
}
