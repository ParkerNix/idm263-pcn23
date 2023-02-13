import blockFriend from '../../components/Assets/blockFriend.png'
import removeFriend from '../../components/Assets/removeFriend.png'



export const FriendSettings = () => {

    return (
        <>
        <div className="container">
            <div class="row mx-5">
                <div className="col mt-4 mb-2 mx-3 d-flex justify-content-center">
                    <h1 id="modalTitle" className="h6 bold">Friend Settings</h1>
                </div>
            </div>

            <div className="col d-flex flex-column justify-content-center align-items-center">
                <div className="viewProfile">
                    <p className="p demiBold">View Profile</p>
                </div>
            </div>

            <div className="col d-flex flex-column justify-content-center align-items-center">
                <div className="blockRemove">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <p className="p demiBold" id="block">Block friend</p>
                        <img src={blockFriend} alt="back" className="blockFriend" />
                    </div>
                        <hr className="block"></hr>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <p className="p demiBold" id="remove">Remove from friends</p>
                        <img src={removeFriend} alt="back" className="blockFriend" />
                    </div>
                </div>
            </div>
        </div>

            </>
         );
    }