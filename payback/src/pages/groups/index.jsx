import backArrow from '../../components/Assets/Back arrow.png'
import backArrowWhite from '../../components/Assets/backArrowWhite.png'
import optionsIcon from '../../components/Assets/optionsDots.png'
import groupImg from '../../components/Assets/groupImg.png'
import smileySmiley from '../../components/Assets/smiley_smiley.png'
import molynaSmiley from '../../components/Assets/molyna_smiley.png'
import parkerSmiley from '../../components/Assets/parker_smiley.png'
import joeySmiley from '../../components/Assets/joey_smiley.png'
import meganSmiley from '../../components/Assets/megan_smiley.png'
import heartEmpty from '../../components/Assets/heartEmpty.png'
import molynaProfile from '../../components/Assets/molyna_profile.png'
import meganProfile from '../../components/Assets/megan_profile.png'
import friendCheck from '../../components/Assets/friend_check.png'
import remind from '../../components/Assets/remind.png'
import newGroupIcon from '../../components/Assets/newGroupIcon.png'

export const Groups = () => {

    return (
        <>
        <div className="container gradientContainer">
                <div className="row">
                    <div className="col mt-4 mb-2 mx-3 d-flex justify-content-between">
                        <img src={backArrowWhite} alt="back" className="topNavBack" />
                        <h1 className="h6 bold" id="profile">Groups</h1>
                        <img src={optionsIcon} alt="back" className="topNavOptions" />
                    </div>
                        <div className='recentFriends d-flex flex-row justify-content-between'>
                            <h4 className="h4 bold" id="recentFriends">Recent Friends</h4>
                            <p className="p demiBold" id="viewAll">View All</p> 
                        </div>

                <div className="smileyScroll d-flex flex-row justify-content-center">

                    <div className="smileyInScroll d-flex flex-column justify-content-center align-items-center">
                        <img src={smileySmiley} alt="smileyInScroll" className="smileyInScroll" />
                        <p className="p demiBold" id="smileyScrollName">Allie D.</p>
                    </div>
                    <div className="smileyInScroll d-flex flex-column align-items-center">
                        <img src={joeySmiley} alt="smileyInScroll" className="smileyInScroll" />
                        <p className="p demiBold" id="smileyScrollName">Joey M.</p>
                    </div>
                    <div className="smileyInScroll d-flex flex-column align-items-center">
                        <img src={meganSmiley} alt="smileyInScroll" className="smileyInScroll" />
                        <p className="p demiBold" id="smileyScrollName">Megan L.</p>
                    </div>
                    <div className="smileyInScroll d-flex flex-column align-items-center">
                        <img src={parkerSmiley} alt="smileyInScroll" className="smileyInScroll" />
                        <p className="p demiBold" id="smileyScrollName">Parker N.</p>
                    </div>
                </div>

            <div className="pageTab">
                <div className="col px-4">
                <h4 className="h4 bold" id="transactionsHeader">All Groups</h4>
                    <div className ='card mb-3'>
                                <div className='card-body'>
                                    <div className='d-flex align-items-center justify-content-between mb-2'>
                                        <div className='d-flex align-items-center'>
                                            <div className='groupsCardImg'>
                                                <img src={groupImg} alt="groupImg" className='groupImg' />
                                                <span className="placeholder"></span>
                                            </div>
                                            <div className='ms-2'>
                                                <h1 className="h4 bold">Roomies</h1>
                                                <p className="medium">Money money money</p>
                                            </div>
                                        </div>
                                        <div className="groupsCardHeart align-self-start">
                                            <img src={heartEmpty} alt="heart" className="heartIcon" />
                                        </div>
                                    </div>
                                    <div className ='d-flex align-items-center justify-content-between'>
                                        <div class="groupsCardIcons">
                                            <img src={smileySmiley} className="memberIcons" alt="member1" />
                                            <img src={molynaSmiley} className="memberIcons" alt="member2" />
                                            <img src={parkerSmiley} className="memberIcons" alt="member3" />
                                        </div>
                                        <div class="groupsCardButton">
                                            <button className='demiBold'>View Group</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className ='card'>
                                <div className='card-body'>
                                    <div className='d-flex align-items-center justify-content-between mb-2'>
                                        <div className='d-flex align-items-center'>
                                            <div className='groupsCardImg'>
                                                <img src={newGroupIcon} alt="groupImg" className='groupImg' />
                                                <span className="placeholder"></span>
                                            </div>
                                            <div className='ms-2'>
                                                <h1 className="h4 bold">Payback Gang</h1>
                                                <p className="medium">You must pay!</p>
                                            </div>
                                        </div>
                                        <div className="groupsCardHeart align-self-start">
                                            <img src={heartEmpty} alt="heart" className="heartIcon" />
                                        </div>
                                    </div>
                                    <div className ='d-flex align-items-center justify-content-between'>
                                        <div class="groupsCardIcons">
                                            <img src={smileySmiley} className="memberIcons" alt="member1" />
                                            <img src={molynaSmiley} className="memberIcons" alt="member2" />
                                            <img src={parkerSmiley} className="memberIcons" alt="member3" />
                                            <img src={meganSmiley} className="memberIcons" alt="member3" />
                                        </div>
                                        <div class="groupsCardButton">
                                            <button className='demiBold'>View Group</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <button className="btmRightBtn bold">
                        Create new group
                        </button>
                </div>

            </div>
        </div>
        </div>           
        
        </>
    );

}
