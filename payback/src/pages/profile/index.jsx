import backArrowWhite from '../../components/Assets/backArrowWhite.png'
import groupImg from '../../components/Assets/groupImg.png'
import paybackLogo from '../../components/Assets/paybackLogo.png'
import smileySmiley from '../../components/Assets/smiley_smiley.png'
import molynaSmiley from '../../components/Assets/molyna_smiley.png'
import optionsIcon from '../../components/Assets/optionsIconWhite.png'
import editImgIcon from '../../components/Assets/editImgIcon.png'
import parkerSmiley from '../../components/Assets/parker_smiley.png'
import meganSmiley from '../../components/Assets/megan_smiley.png'
import allieSmiley from '../../components/Assets/allie_smiley.png'
import molynaProfile from '../../components/Assets/molyna_profile.png'
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navExpenseDefault from '../../components/Assets/new_expense_default.svg'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'
import navProfileActive from '../../components/Assets/nav_profile_active.png'
import optionsIconWhite from '../../components/Assets/optionsIconWhite.png'
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
import { AddPhoto } from '../../components/addPhoto'

export const Profile = () => {

    // Use this hook to programmatically navigate to another page
    const navigate = useNavigate();
    
    // This function is used to navigate to the home page
    // It will be called when the button is clicked
    const goBack = () => {
      navigate(-1);
    };

    return (
        <>
        <motion.div className="gradientContainer mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {duration: 0.1} }}
            exit={{ opacity: 0, transition: {duration: 0.1} }}
        >
            <div className="row">
                <div className="col mt-4 mb-2 mx-3 d-flex justify-content-between">
                    <a onClick={goBack} className="bold line-height">
                        <img src={backArrowWhite} alt="back" className="topNavBackLink" />
                    </a>
                    <h1 className="h6 bold" id="profile">Profile</h1>
                    <img src={optionsIconWhite} alt="back" className="topNavOptionsWhite" />
                 </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='profilePic d-flex flex-row justify-content-center'>
                        <div>
                            <img src={molynaProfile} alt="smiley" className="profileSmiley" />
                            <button id="addPhoto"><img src={editImgIcon} alt="edit the group icon" id="editImgIcon" data-bs-toggle="modal" data-bs-target="#myModal"></img></button>
                        </div>
                    </div>
                    <h2 className='h3 bold white'>Molyna Tep</h2>
                    <p className="p demiBold mt-2" id="profileName">@mochi</p>
                    <Link to='/pages/allFriends'>
                    <p className="p demiBold mt-2" id="profileFriends">24 friends</p>
                    </Link>
                </div>
            </div>

            {/* ADD PHOTO MODAL */}
                                                    
            <div className="modal" id="myModal">
                <div class="modal-dialog animate-bottom">
                    <AddPhoto/>
                </div>
            </div>
        

            <div className="pageTab">
                <div className="col px-4">
                    <h3 className="h4 pt-4 mb-3 bold">Completed Transactions</h3>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-between">
                                <div className="transactions">
                                    <img src={parkerSmiley} alt="smiley" className="transactionSmiley d-flex justify-content-center" />
                                </div>
                                <div className="transactionInfo d-flex flex-column justify-content-center">
                                    <h4 className="xsmallCopy demiBold groupNameCard">Payback Gang</h4>
                                    <h5 className="h6 demiBold" id="groupMember">Parker Nix</h5>
                                </div>
                            </div>

                            <div className="transactionInfo d-flex flex-column justify-content-center">
                                <p className="h6 demiBold" id="GroupCost">+$12.75</p>
                                <p className="xsmallCopy demiBold" id="groupDate">10/10/22</p>    
                            </div>
                        </div>
                </div>

                <hr className="addFriend"></hr>

                <div className="col px-4">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-between">
                                <div className="transactions">
                                    <img src={allieSmiley} alt="smiley" className="transactionSmiley d-flex justify-content-center" />
                                </div>

                                <div className="transactionInfo d-flex flex-column justify-content-center">
                                    <h4 className="xsmallCopy demiBold groupNameCard">Payback Gang</h4>
                                    <h5 className="h6 demiBold" id="groupMember">Allie Drake</h5>
                                </div>
                            </div>

                            <div className="transactionInfo d-flex flex-column justify-content-center">
                                <p className="h6 demiBold" id="GroupCost">-$18.20</p>
                                <p className="xsmallCopy demiBold" id="groupDate">10/03/22</p>    
                            </div>
                        </div>
                </div>

                <hr className="addFriend"></hr>

                <div className="col px-4">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between">
                            <div className="transactions">
                                <img src={meganSmiley} alt="smiley" className="transactionSmiley d-flex justify-content-center" />
                            </div>

                            <div className="transactionInfo d-flex flex-column justify-content-center">
                                <h4 className="xsmallCopy demiBold groupNameCard">Roomies</h4>
                                <h5 className="h6 demiBold" id="groupMember">Megan Lam</h5>
                            </div>
                        </div>

                        <div className="transactionInfo d-flex flex-column justify-content-center">
                            <p className="h6 demiBold" id="GroupCost">-$21.00</p>
                            <p className="xsmallCopy demiBold" id="groupDate">09/28/22</p>    
                        </div>
                    </div>
                </div>
       
            </div>
        </motion.div>

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
