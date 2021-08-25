import React, { useState } from 'react';

function AddForm({ onAddNewFriend }) {
    const [ newFriendName, setNewFriendName ] = useState("");
    const [ newFriendImage, setNewFriendImage ] = useState("");
    const [ newFriendAbout, setNewFriendAbout ] = useState("");
    const [ friend, setFriend ] = useState(false);
    

    function handleSubmit(event) {
        event.preventDefault();
        const newFriendFormData = {
            "name": newFriendName,
            "image": newFriendImage,
            "about": newFriendAbout,
            
        }
        console.log(newFriendFormData);  

        fetch("http://localhost:3000/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFriendFormData)
        })
        .then(resp => resp.json())
        .then(data => onAddNewFriend(data))     
    }

    function friendStatus() {
        setFriend(true);
    }



    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a New Friend</h2>
            <div className="form-fields">
                <div className="form-field-input">
                    <label htmlFor="name">Name   </label>
                    <input 
                        type="text" 
                        id="name" 
                        value={newFriendName} 
                        onChange={e => setNewFriendName(e.target.value)} 
                    />
                </div>

                <div className="form-field-input">
                    <label htmlFor="image">Image URL   </label>
                    <input 
                        type="text" 
                        id="image" 
                        value={newFriendImage} 
                        onChange={e => setNewFriendImage(e.target.value)}
                    />
                </div>

                <div className="form-field-input">
                    <label htmlFor="about">About   </label>
                    <input 
                        type="text" 
                        id="about" 
                        value={newFriendAbout} 
                        onChange={e => setNewFriendAbout(e.target.value)}
                    />
                </div>


                <div className="form-field-input">                   
                    <input className="input-button" type="submit" value="Add Friend" onClick={friendStatus} />
                    {friend ? <p>Added to Friends!</p> : null}
                </div> 
            </div>
        </form>
    )
}

export default AddForm;