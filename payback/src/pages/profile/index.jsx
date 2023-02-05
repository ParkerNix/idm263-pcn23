import backArrow from '../../components/Assets/Back arrow.png'
import backArrowWhite from '../../components/Assets/backArrowWhite.png'
import optionsIcon from '../../components/Assets/optionsDots.png'
import groupImg from '../../components/Assets/groupImg.png'
import smileySmiley from '../../components/Assets/smiley_smiley.png'
import molynaSmiley from '../../components/Assets/molyna_smiley.png'
import parkerSmiley from '../../components/Assets/parker_smiley.png'
import heartEmpty from '../../components/Assets/heartEmpty.png'
import molynaProfile from '../../components/Assets/molyna_profile.png'
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navExpenseDefault from '../../components/Assets/nav_expense_default.png'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'

export const Profile = () => {

    return (
        <>
        <div className="gradientContainer">
            <div className="row">
                <div className="col mt-4 mb-2 mx-3 d-flex justify-content-between">
                    <img src={backArrowWhite} alt="back" className="topNavBack" />
                    <h1 className="h6 bold" id="profile">Profile</h1>
                    <img src={optionsIcon} alt="back" className="topNavOptions" />
                 </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='profilePic d-flex flex-row justify-content-center'>
                        <img src={molynaProfile} alt="smiley" className="profileSmiley" />
                        <button id='addButton'></button>
                    </div>
                    <h1 className='h1 bold' id="profileName">Molyna Tep</h1>
                    <p className="p demiBold mt-2" id="profileName">@mochi</p>
                    <p className="p demiBold mt-2" id="profileFriends">24 friends</p>
                </div>
            </div>
        

            <div className="pageTab">
                <div className="col px-4">
                    <h4 className="h4 bold" id="transactionsHeader">Completed Transactions</h4>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-between">
                                <div className="transactions">
                                    <img src={smileySmiley} alt="smiley" className="transactionSmiley d-flex justify-content-center" />
                                </div>
                                <div className="transactionInfo d-flex flex-column justify-content-center">
                                    <p className="p demiBold" id="groupName">Payback Gang</p>
                                    <h6 className="h6 demiBold" id="groupMember">Parker Nix</h6>
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
                                    <img src={smileySmiley} alt="smiley" className="transactionSmiley d-flex justify-content-center" />
                                </div>

                            <div className="transactionInfo d-flex flex-column justify-content-center">
                                    <p className="p demiBold" id="groupName">Payback Gang</p>
                                    <h6 className="h6 demiBold" id="groupMember">Allie Drake</h6>
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
                                    <h6 className="h6 demiBold" id="groupMember">Megan Lam</h6>
                                    </div>
                        </div>

                            <div className="transactionInfo d-flex flex-column justify-content-center">
                                <h6 className="h6 demiBold" id="GroupCost">-$21.00</h6>
                                <p className="p bold" id="groupDate">09/28/22</p>    
                            </div>
                        </div>
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
                       
            
        </>
    );

}
