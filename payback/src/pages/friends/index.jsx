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
                            <input type="text" id="searchForm" class="form-control" placeholder="Search for friends"/>
                            {/* <label class="form-label" for="searchForm">Search</label> */}
                        </div>
                        </div>
                    <div className="searchButton">
                    <button id='submit' className="searchButton bold">
                    <img src={link} alt="link" className="link" />Invite
                            </button>
                    </div>
                    </div>
                    </div>
                        <div className="friendsList">
                            <h3 className="h5 bold mb-3" id="yourFriends">Your Friends</h3>
                            <div className="row d-flex flex-row justify-content-center">
                                <div className="friendName d-flex flex-row">
                                    <img src={allieSmiley} alt="smiley" className="smiley"/>
                                    <p className="p demiBold" id="friendName">Allie Drake</p>
                                        <div className="friendsCheck">
                                            <input type="radio" name="radio"/>
                                            <span class="checkmark"></span>
                                    </div>
                                </div>
                                <hr className="friendsList"></hr>
                                <div className="friendName d-flex flex-row">
                                    <img src={joeySmiley} alt="smiley" className="smiley"/>
                                    <p className="p demiBold" id="friendName">Allie Drake</p>
                                        <div className="friendsCheck">
                                            <input type="radio" name="radio"/>
                                            <span class="checkmark"></span>
                                    </div>
                                </div>
                                <hr className="friendsList"></hr>
                                <div className="friendName d-flex flex-row">
                                    <img src={meganSmiley} alt="smiley" className="smiley"/>
                                    <p className="p demiBold" id="friendName">Allie Drake</p>
                                        <div className="friendsCheck">
                                            <input type="radio" name="radio"/>
                                            <span class="checkmark"></span>
                                    </div>
                                </div>
                                <hr className="friendsList"></hr>


                            </div>
                        </div>
                    </div>
                </div>
            </>
         );
    }