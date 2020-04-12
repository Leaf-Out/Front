import React,{useState} from 'react';
import UserParkCard from './UserParkCard';
import AdminParkCard from './AdminParkCard';
import jwt from 'jsonwebtoken';




export default function ParkCard(props) {
  
    const token = jwt.decode(localStorage.getItem("token"))
    const [role] = useState(
        token === null ? null : token.rol[0]
    )
    return (
        (role === null) || (role === "USER") ? <UserParkCard park={props.park} /> : <AdminParkCard park={props.park} />
    )

}
