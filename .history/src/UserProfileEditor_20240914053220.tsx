import React, { useState } from "react";



interface Props {
    user: ;
    onUpdate: ;
}
function UserProfileEditor({ user, onUpdate }) {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const handleSubmit = (event) => {
        event.preventDefault();
        onUpdate({
            ...user,
            name: name,
            email: email,
    });
};

return (
  <form onSubmit={handleSubmit}>
    <div>
       <label>Name:</label>
       <input
         type="text"
         value={name}
         onChange={(e) => setName(e.target.value)}
        />
    </div>
    <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
    </div>
    <button type="submit">Update Profile</button>
  </form>
);
}

export default UserProfileEditor;