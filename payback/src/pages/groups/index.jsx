import backArrow from '../../components/Assets/Back arrow.png'
import backArrowWhite from '../../components/Assets/backArrowWhite.png'
import optionsIconWhite from '../../components/Assets/optionsIconWhite.png'
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
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navExpenseDefault from '../../components/Assets/nav_expense_default.png'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'

export const Groups = () => {

    return (
        <>
        <div className="container gradientContainer">
                <div className="row">
                    <div className="col mt-4 mb-2 mx-3 d-flex justify-content-between">
                        <div className="navSpacer"></div>
                        <h1 className="h6 bold" id="profile">Groups</h1>
                        <img src={optionsIconWhite} alt="back" className="topNavOptionsWhite" />
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

            <div className="pageTabTwo">
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
                                <button className="btmRightBtn bold">
                                    Create new group
                                </button>
                            </div>
                            
                </div>

            
                </div>  

            <div class="navbar">
                <div class="navStack">
                    <img src={navOverviewDefault} className="navIcons" alt="overview" />
                    <a href="#home" className="active bold">Overview</a>
                </div>
                <div class="navStack">
                    <img src={navMonthlyDefault} className="navIcons" alt="monthly" />
                    <a href="#monthly" className="bold">Monthly</a>
                </div>
                <div class="navStack">
                    <img src={navExpenseDefault} className="navIcons" alt="expense" />
                    <a href="#expense" className="bold">Expense</a>
                </div>
                <div class="navStack">
                    <img src={navGroupsDefault} className="navIcons" alt="groups" />
                    <a href="#groups" className="bold">Groups</a>
                </div>
                <div class="navStack">
                    <img src={navProfileDefault} className="navIcons" alt="profile" />
                    <a href="#groups" className="bold">Profile</a>
                </div>
            </div>
        </div>
        </div>  
               
        
        </>
    );

}
