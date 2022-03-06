import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUserName } from '../../features/users/userSlice'
import './style.css'
function Contact() {

    const dispatch = useDispatch()
    const usersList = useSelector(state => state.users.value)
    console.log(usersList);


    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [updatedUserName, setUpdatedUserName] = useState('')

    return (
        <div className="contact">
            <div>
                <div className="header">
                    <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
                    <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)}></input>
                    <button onClick={
                        () => {
                            dispatch(addUser({ id: usersList[usersList.length - 1].id + 1, name, userName }))
                        }
                    }>Add Username</button>
                </div>

                <div>
                    {usersList.map((data, index) => {
                        return (
                            <div key={index} className="container">
                                <h3>{data.name}</h3>
                                <h1>{data.userName}</h1>

                                {/* input */}
                                <input type="text" placeholder="New Username" onChange={(e) => setUpdatedUserName(e.target.value)}></input>

                                {/* update */}
                                <button onClick={() => {
                                    dispatch(updateUserName({ id: data.id, userName: updatedUserName }))
                                }}>Update Username</button>

                                {/* delete */}
                                <button onClick={() => {
                                    dispatch(deleteUser({ id: data.id }))
                                }}>Delete name{data.id}</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Contact;
