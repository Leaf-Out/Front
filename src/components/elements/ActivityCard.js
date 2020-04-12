import React, { useState } from 'react';
import jwt from 'jsonwebtoken';
import UserActivityCard from './UserActivityCard';
import AdminActivityCard from './AdminActivityCard';



export default function ActivityCard(props) {
    const token = jwt.decode(localStorage.getItem("token"))
    const [role] = useState(
        token === null ? null : token.rol[0]
    )
    return (
        (role === null) || (role === "USER") ? <UserActivityCard activity={props.activity} /> : <AdminActivityCard activity={props.activity} />
    )

}
