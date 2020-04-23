import React, { useState } from 'react';
import jwt from 'jsonwebtoken';
import UserPlanCard from './UserPlanCard';
import AdminPlanCard from './AdminPlanCard';



export default function PlanCard(props) {
 
    const token = jwt.decode(localStorage.getItem("token"))
    const [role] = useState(
        token === null ? null : token.rol[0]
    )
    return (
        (role === null) || (role === "USER") ? <UserPlanCard plan={props.plan} /> : <AdminPlanCard plan={props.plan} />
    )

}
