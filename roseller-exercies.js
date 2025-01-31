import { userData } from "./users.js";

//1
const userAbove30 = userData[0].users.filter((user) => user.age >= 30).length;

//2
const userAdmin = userData[0].users.filter((user) => user.role === "admin");

//3
const userRoles = userData[0].users.map((user) => user.role);
const uniqueRoles = [...new Set(userRoles)];

//4
const sortAges = userData[0].users.sort((a, b) => b.age - a.age);

//5
const userName = userData[0].users.map((user) => {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return firstName + " " + lastName;
});

//6
function findUserByEmail(emailAddress) {
  const user = userData[0].users.find((user) => user.email === emailAddress);

  return user;
}
const t = findUserByEmail("michael.williams@x.dummyjson.com");

//7
const isUserHasManager = ["manager"].includes(
  userData[0].users.map((user) => user.role)
);

//8
function fnc() {
  const findNoEmail = userData[0].users.filter((user) => user.email === "");

  for (const d of findNoEmail) {
    const index = userData[0].users.indexOf(d);
    console.log("index", index);

    userData[0].users.splice(index);

    console.log("removed data: ", d);
  }

  const find = userData[0].users?.find((user) => user.email === "");

  return find;
}

console.log("fnc()", fnc());
