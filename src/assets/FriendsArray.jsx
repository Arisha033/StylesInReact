import React, { useState } from "react";

export const FriendsArray = () => {
  // updating arrays in React
  const [friends, setFriend] = useState(["Alex", "John"]);

  // spread operator to add new elements in original array
  const addFriend = () => {
    setFriend([...friends, "Sam"]);
  };

  // filter function doesn't change the origin array
  const removeFriend = () => {
    setFriend(friends.filter((friend) => (
      friend !== "John")) )
  };

  // map changes the original array 
  const updateFriend = () => {
    setFriend(friends.map((friend) =>
     (friend === "Alex" ? "Alex Smith" : friend)
     ))
  }
  return (
    <>
      {friends.map((friend) => (
        <li key={Math.random()}>{friend}</li>
      ))}

      <button onClick={addFriend} style={{border: '2px solid'}}>Add friend</button>
      <button onClick={removeFriend} style={{border: '2px solid'}}>Remove freind</button>
      <button onClick={updateFriend} style={{border: '2px solid'}}>Update freind</button>
    </>
  );
};
