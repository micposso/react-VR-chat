const users = [];

// need a function that adds users
// take 3 params, ID, name and room

const addUser = ({ id, name, room }) => {
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

// test addUser
addUser( {id: 5, name: "Fike", room: "GavascrRpt mastery "} );

// need to remove users
const removeUser = () => {

}

// need to get user
const getUser = () => {

}

// need to get users in specific room
const getUsersInRoom = () => {

}