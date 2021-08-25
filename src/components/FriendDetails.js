import Chandler from '../audioclips/Chandler.mp3'
import Ross from '../audioclips/Ross.mp3'
import Rachel from '../audioclips/Rachel.mp3'
import Monica from '../audioclips/Monica.mp3'
import Mike from '../audioclips/Mike.mp3'
import Joey from '../audioclips/Joey.mp3'
import Janice from '../audioclips/Janice.mp3'
import Gunther from '../audioclips/Gunther.mp3'
import Phoebe from '../audioclips/Phoebe.mp3'

export default function FriendDetails ({friend}){

 

  function audio (){
    if (friend.firstName === 'Ross'){
      return Ross
    }else if (friend.firstName === 'Chandler'){
      return Chandler
    }else if (friend.firstName === 'Rachel'){
      return Rachel
    }else if (friend.firstName === 'Monica'){
      return Monica
    }else if (friend.firstName === 'Mike'){
      return Mike
    }else if (friend.firstName === 'Joey'){
      return Joey
    }else if (friend.firstName === 'Janice'){
      return Janice
    }else if (friend.firstName === 'Gunther'){
      return Gunther
    }else if (friend.firstName === 'Phoebe'){
      return Phoebe
    }
  }

  function handleClick(){
    
  }


  return(
  <div className="friend-column"  >
      <div className="friend-card"
        key={friend.id}
      >
        
        <div className="content">
          <div className="header">{friend.name}</div>
          <div className="meta text-wrap">
            {/* <small>{friend.catchphrase}</small> */}
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {friend.about}
          </span>
          
          <span>

            <div className="audio">
            <audio autoPlay >
              <source src={audio()} type="audio/mpeg"/>
            </audio>
        
            


            </div>
          </span>
        </div>
      </div>
    </div>

  )
}