import React, { useState } from "react";

function UserProfileEditor({ user, onUpdate }) {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const handleSubmit = (event) => {
        event.preventDefault();
        onUpdate({
    });
};

