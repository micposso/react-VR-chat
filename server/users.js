const users = [];

// need a function that adds users
// take 3 params, ID, name and room

exports.addUser = ({ id, name, room }) => {
  // need to sanitize data
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // check if user already exists in the user array 
  // find() is an array method that return the first item that matches the search condition
  // create a condition that if a user is entering room with the same name as another user in the room, forbidden.
  const existUser = users.find(( user ) => user.room === room && user.name === name );
  // if user exists, then end the function and return error
  if(existUser) {
    return { error: "user name is taken" };
  }
  // if user does not exist, then create user object
  const user = { id, name, room };
  // add to array
  users.push(user);
  // return user object
  console.log(user);
  return { user };
}

// need to remove users
const removeUser = (id) => {
  // findIndex returns the index of the first element that satisfies the test function
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) {
    // remove the user from the array
    return users.splice(index, 1)[0];
  }

}

// need to get user
const getUser = (id) => users.find((user) => user.id === id);

// need to get users in specific room
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };