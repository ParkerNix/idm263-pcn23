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
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navExpenseDefault from '../../components/Assets/new_expense_default.svg'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'
import navProfileActive from '../../components/Assets/nav_profile_active.png'
import { Link, useNavigate } from 'react-router-dom';

export const FriendProfile = () => {

    return (
        <>
            <div className="gradientContainer">
                <div className="row">
                    <div className="col mt-4 mb-2 mx-3 d-flex justify-content-between">
                    <Link to='/pages/groups'>
                        <img src={backArrowWhite} alt="back" className="topNavBack" />
                    </Link>
                        <h1 className="h6 bold" id="profile">Profile</h1>
                        <img src={optionsIconWhite} alt="back" className="topNavOptionsWhite" />
                    </div>
                        <div className='d-flex flex-column align-items-center'>
                            <div className='profilePic d-flex flex-row justify-content-center'>
                            <img src={meganProfile} alt="smiley" className="profileSmiley" />
                            </div>

                            <h1 className='h1 bold' id="profileName">Megan Lam</h1>
                            <p className="p demiBold mt-1" id="profileName">@meganhadalittlelam</p>
                            <p className="p demiBold" id="profileFriends"><img src={friendCheck} alt="friendCheck" className="friendCheck"/>Friend</p>
                        </div>
                    </div>
        

            <div className="pageTab">
                <div className="col px-4">
                <h4 className="h4 bold mb-3" id="transactionsHeader">Between You</h4>
                <div className ='card'>
                            <div className='card-body'>
                                <div className='d-flex align-items-center justify-content-between mb-2'>
                                    <div className='d-flex align-items-center'>
                                        <div className='groupsCardImg'>
                                        <img src={smileySmiley} className="memberIcons" alt="member1" />
                                            <span className="placeholder"></span>
                                        </div>
                                        <div className='ms-2'>
                                            <h1 className="h4 bold" id="cardGroupName">Roomies</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className ='d-flex align-items-center justify-content-between'>
                                    <div class="col">
                                        <h2 className="h2 bold">$10.90</h2>
                                        <p className="p demiBold">Megan owes you</p>
                                    </div>
                                    <div class="groupsCardButton">
                                        <button className='bold' id="remind"><img src={remind} className="remind" alt="remind"/>Remind</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    <h4 className="h4 bold" id="transactionsHeader2">Previous Spending</h4>
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
                <hr className="friendProfile"></hr>

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
                <hr className="friendProfile"></hr>

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
                <hr className="friendProfile"></hr>
            </div>

            </div>

            <div className="navbar">
            <div className="navStack">
                <Link to='/' className="bold d-flex flex-column align-items-center">
                    <img src={navOverviewDefault} className="navIcons" alt="overview" />
                    Overview
                </Link>
            </div>
            <div className="navStack">
                <Link to='/pages/monthlyNetTotal' className="bold d-flex flex-column align-items-center">
                <img src={navMonthlyDefault} className="navIcons" alt="monthly" />
                Monthly
                </Link>
            </div>
            <div className="navStack">
                <Link to='/pages/allGroups' className="bold d-flex flex-column align-items-center">
                    <img src={navExpenseDefault} className="navIcons" alt="expense" />
                    Expense
                </Link>
            </div>
            <div className="navStack">
                <Link to='/pages/groups' className="bold d-flex flex-column align-items-center">
                    <img src={navGroupsDefault} className="navIcons" alt="groups" />
                    Groups
                </Link>
            </div>
            <div className="navStack active">
                <Link to='/pages/profile' className="bold d-flex flex-column align-items-center">
                    <img src={navProfileDefault} className="navIcons" alt="profile" />
                    <img src={navProfileActive} className="navIcons" alt="profile" id="active" />
                    Profile
                </Link>
            </div>
        </div> 
                       
        </>
    );

}
