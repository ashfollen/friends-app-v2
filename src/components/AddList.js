import React, {useEffect, useState} from 'react';

function AddList({ onAddNewFriend }) {

    function handleClick(id) {
        let oldFriend;
        if (id === "Mike") {
            oldFriend = {
                "name": "Mike Hannigan",
                "image": "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-Friends-Paul-Rudd.jpg",
                "about": "Overview… an attorney-turned-pianist. Mike has forgone his parents’ affluent lifestyle for the quirkier side of things through his relationship with the kooky Phoebe Buffay. After his divorce, Mike has completely written off marriage, but he might want to give it another shot for Phoebe.",
                "audio": "https://www.101soundboards.com/sounds/538420-im-awesome"
            }
        } else if (id === "Gunther") {
            oldFriend = {
                "name": "Gunther",
                "image": "https://qph.fs.quoracdn.net/main-qimg-abff970a329991edc32cec412cde579c",
                "about": "Gunther has a smoking habit",
                "audio": "https://www.101soundboards.com/sounds/217314-oh-dark-mother-once-again-i-saw-collector-smoke-eat-eat"
            }
        } else {
            oldFriend = {
                "name": "Janice Hosenstein",
                "image": "https://www.personality-database.com/profile_images/21566.png",
                "about": "Oh my God.",
                "audio": "https://www.101soundboards.com/sounds/217361-joey-and-janice-is-day-of-fun"
            }
        }
        console.log(oldFriend);

        fetch("http://localhost:3000/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(oldFriend)
        })
        .then(resp => resp.json())
        .then(data => onAddNewFriend(data))
    }
    
    return (
        <div>
            <h2>Add an Old Friend</h2>
            <li id="Mike" onClick={e => handleClick(e.target.id)}>Mike</li>
            <li id="Gunther" onClick={e => handleClick(e.target.id)}>Gunther</li>
            <li id="Janice" onClick={e => handleClick(e.target.id)}>Janice</li>
        </div>
    );
}

export default AddList;