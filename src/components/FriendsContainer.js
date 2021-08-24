import FriendCard from "./FriendCard"


export default function FriendsContainer ({friends}) {
  console.log(friends)
  return (
    <div id="friends-collection">
      {friends.map((friend) => (
      <FriendCard friend={friend} key={friend.id} image={friend}  />))}
    </div>
  )
}

// deleted payAudio as a props and friendCard