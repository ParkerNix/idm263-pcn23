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

export const FriendProfile = () => {

    return (
        <>
        <div className="container gradientContainer">
                <div className="row">
                    <div className="col mt-4 mb-2 mx-3 d-flex justify-content-between">
                        <img src={backArrowWhite} alt="back" className="topNavBack" />
                        <h1 className="h6 bold" id="profile">Profile</h1>
                        <img src={optionsIcon} alt="back" className="topNavOptions" />
                    </div>
                        <div className='d-flex flex-column align-items-center'>
                            <div className='profilePic d-flex flex-row justify-content-center'>
                            <img src={meganProfile} alt="smiley" className="profileSmiley" />
                            </div>

                            <h1 className='h1 bold mt-1' id="profileName">Megan Lam</h1>
                            <p className="p demiBold mt-1" id="profileName">@meganhadalittlelam</p>
                            <p className="p demiBold mt-2" id="profileFriends"><img src={friendCheck} alt="friendCheck" className="friendCheck"/>Friend</p>
                        </div>
                    </div>
                </div>

            <div className="pageTab">
                <div className="col px-4">
                <h4 className="h4 bold" id="transactionsHeader">Between You</h4>
                <div className ='card'>
                            <div className='card-body'>
                                <div className='d-flex align-items-center justify-content-between mb-2'>
                                    <div className='d-flex align-items-center'>
                                        <div className='groupsCardImg'>
                                        <img src={smileySmiley} className="memberIcons" alt="member1" />
                                            <span className="placeholder"></span>
                                        </div>
                                        <div className='ms-2'>
                                            <h1 className="h4 bold">Roomies</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className ='d-flex align-items-center justify-content-between'>
                                    <div class="col">
                                        <h2 className="h2 bold">$10.90</h2>
                                        <p className="p demiBold">Megan owes you</p>
                                    </div>
                                    <div class="groupsCardButton">
                                        <button className='bold'><img src={remind} className="remind" alt="remind" />Remind</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    <h4 className="h4 bold" id="transactionsHeader">Previous Spending</h4>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-between">
                                <div className="transactions">
                                    <img src={meganSmiley} alt="smiley" className="transactionSmiley d-flex justify-content-center" />
                                </div>

                            <div className="transactionInfo d-flex flex-column justify-content-center">
                                    <p className="p demiBold" id="groupName">Payback Gang</p>
                                    <h6 className="h6 demiBold" id="groupMember">Megan Paid You</h6>
                                    </div>
                        </div>

                            <div className="transactionInfo d-flex flex-column justify-content-center">
                                <h6 className="h6 demiBold" id="GroupCost">+$12.75</h6>
                                <p className="p bold" id="groupDate">10/10/22</p>    
                            </div>
                        </div>
                </div>
                <hr className="addFriend"></hr>

                <div className="col px-4">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-between">
                                <div className="transactions">
                                    <img src={molynaSmiley} alt="smiley" className="transactionSmiley d-flex justify-content-center" />
                                </div>

                            <div className="transactionInfo d-flex flex-column justify-content-center">
                                    <p className="p demiBold" id="groupName">Payback Gang</p>
                                    <h6 className="h6 demiBold" id="groupMember">You paid</h6>
                                    </div>
                        </div>

                            <div className="transactionInfo d-flex flex-column justify-content-center">
                                <h6 className="h6 demiBold" id="GroupCost">-$18.20</h6>
                                <p className="p bold" id="groupDate">10/03/22</p>    
                            </div>
                        </div>
                </div>
                <hr className="addFriend"></hr>

                <div className="col px-4">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-between">
                                <div className="transactions">
                                    <img src={smileySmiley} alt="smiley" className="transactionSmiley d-flex justify-content-center" />
                                </div>

                            <div className="transactionInfo d-flex flex-column justify-content-center">
                                    <p className="p demiBold" id="groupName">Payback Gang</p>
                                    <h6 className="h6 demiBold" id="groupMember">Allie paid you</h6>
                                    </div>
                        </div>

                            <div className="transactionInfo d-flex flex-column justify-content-center">
                                <h6 className="h6 demiBold" id="GroupCost">+$21.00</h6>
                                <p className="p bold" id="groupDate">09/28/22</p>    
                            </div>
                        </div>
                </div>
                <hr className="profile"></hr>
            </div>
                       
            
        </>
    );

}
