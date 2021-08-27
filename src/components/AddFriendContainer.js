import React, {useEffect, useState} from 'react';
import AddList from "./AddList";
import AddForm from "./AddForm";

function AddFriendContainer({ onAddNewFriend }) {
    return (
        <div className="add-friend-container">
            <AddList onAddNewFriend={onAddNewFriend} />
            <AddForm onAddNewFriend={onAddNewFriend} />
        </div>
    )
}

export default AddFriendContainer;