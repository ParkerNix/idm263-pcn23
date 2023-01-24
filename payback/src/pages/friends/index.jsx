import backArrow from '../../components/Assets/Back arrow.png'
import optionsIcon from '../../components/Assets/optionsDots.png'
import groupImg from '../../components/Assets/groupImg.png'
import smileySmiley from '../../components/Assets/smiley_smiley.png'
import molynaSmiley from '../../components/Assets/molyna_smiley.png'
import parkerSmiley from '../../components/Assets/parker_smiley.png'
import heartEmpty from '../../components/Assets/heartEmpty.png'
import editIcon from '../../components/Assets/editIcon.png'


export const AddFriends = () => {

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
                        
                    <div className="input-group">
                        <div clasName="form-outline">
                            <input type="search" id="searchForm" class="form-control" />
                            {/* <label class="form-label" for="searchForm">Search</label> */}
                        </div>
                        </div>
                    <div className="searchButton">
                    <button id='submit' className="searchButton bold">
                                Invite
                            </button>
                    </div>
                    </div>
                    </div>
                        <div className="friendsList">
                            <h3 className="h5 bold mb-3">Your Friends</h3>
                        </div>
                    </div>
                </div>
            </>
         );
    }