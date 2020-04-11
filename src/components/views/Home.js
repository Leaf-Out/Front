import React, { useState } from 'react'
import jwt from 'jsonwebtoken';
import HomeUser from './HomeUser';
import HomeAdmin from './HomeAdmin';

export default function Home() {
    const token = jwt.decode(localStorage.getItem("token"))
    const [role] = useState(
        token === null ? null : token.rol[0]
    )
    return (
        (role === null) || (role === "USER") ? <HomeUser /> : <HomeAdmin />
    )
}

