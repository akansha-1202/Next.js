import React from 'react'

function User({user}) {
  return (
      <li>
        {user.id}. <b>{user.name}</b>, {user.email}, {user.phone},{" "}
        {user.website}
      </li>
  );
}

export default User
