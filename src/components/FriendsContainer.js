import FriendCard from "./FriendCard";

export default function FriendsContainer ({ friends, onAddNewFriend }) {
  console.log(friends)
  return (
    <div className="friends-collection">
      {friends.map((friend) => (
      <FriendCard friend={friend} key={friend.id} image={friend} />))}
    </div>
  )
}

