import React, {useEffect, useState} from 'react';
import AddList from "./AddList";
import AddForm from "./AddForm";

function AddFriendContainer({ onAddNewFriend }) {
    return (
        <div>
            <h1>More Friends</h1>
            <AddList onAddNewFriend={onAddNewFriend} />
            <AddForm onAddNewFriend={onAddNewFriend} />
        </div>
    )
}

export default AddFriendContainer;