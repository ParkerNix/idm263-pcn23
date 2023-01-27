import backArrow from '../../components/Assets/Back arrow.png'
import optionsIcon from '../../components/Assets/optionsDots.png'
import groupImg from '../../components/Assets/groupImg.png'
import smileySmiley from '../../components/Assets/smiley_smiley.png'
import molynaSmiley from '../../components/Assets/molyna_smiley.png'
import parkerSmiley from '../../components/Assets/parker_smiley.png'
import allieSmiley from '../../components/Assets/allie_smiley.png'
import joeySmiley from '../../components/Assets/joey_smiley.png'
import meganSmiley from '../../components/Assets/megan_smiley.png'
import heartEmpty from '../../components/Assets/heartEmpty.png'
import editIcon from '../../components/Assets/editIcon.png'
import link from '../../components/Assets/link.png'
import addFriend from '../../components/Assets/addFriend.png'
import sadSmiley from '../../components/Assets/sad_smiley.png'



export const NoFriends = () => {

    return (
        <>
        <div className="container">
        <div class="row">
                <div className="col mt-4 mb-2 mx-3 d-flex justify-content-between">
                    <img src={backArrow} alt="back" className="topNavBack" />
                    <h1 id="friendsTitle" className="h6 bold">Friends</h1>
                    <img src={optionsIcon} alt="back" className="topNavOptions" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="searchFriends d-flex flex-row justify-content-center">
                        
                    <div className="input-group d-flex justify-content-center">
                        <div clasName="form-outline">
                            <input type="text" id="searchFormTwo" class="form-control" placeholder="Search for friends"/>
                        </div>
                    </div>
                    </div>
                    </div>
                        
                                
                    <div className="noFriends d-flex flex-column justify-content-center align-items-center">
                        <img src={sadSmiley} alt="sadSmiley" className="sadSmiley" />
                        <h1 className='h1 bold' id="noFriends">No friends found yet.</h1>
                    </div>
                </div>
                </div>
            </>
         );
    }