import backArrowWhite from '../../components/Assets/backArrowWhite.png'
import groupImg from '../../components/Assets/groupImg.png'
import paybackLogo from '../../components/Assets/paybackLogo.png'
import smileySmiley from '../../components/Assets/smiley_smiley.png'
import molynaSmiley from '../../components/Assets/molyna_smiley.png'
import optionsIcon from '../../components/Assets/optionsDotsWhite.png'
import parkerSmiley from '../../components/Assets/parker_smiley.png'
import personSmiley from '../../components/Assets/personIcon.png'
import meganSmiley from '../../components/Assets/megan_smiley.png'
import allieSmiley from '../../components/Assets/allie_smiley.png'
import molynaProfile from '../../components/Assets/molyna_profile.png'
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import purpleLock from '../../components/Assets/purpleLock.png'
import addFriend from '../../components/Assets/addFriend.png'
import addFriendWhite from '../../components/Assets/addFriendWhite.png'
import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navExpenseDefault from '../../components/Assets/nav_expense_default.png'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'
import navProfileActive from '../../components/Assets/nav_profile_active.png'
import optionsIconWhite from '../../components/Assets/optionsIconWhite.png'
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
import { AddPhoto } from '../../components/addPhoto'

export const ViewProfile = () => {

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
                        <img src={backArrowWhite} alt="back" className="topNavBack" />
                    </a>
                    <h1 className="h6 bold" id="profile">Profile</h1>
                    <img src={optionsIconWhite} alt="back" className="topNavOptionsWhite" />
                 </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='profilePic d-flex flex-row justify-content-center'>
                        <img src={personSmiley} alt="smiley" className="personSmiley" />
                    </div>
                    <h2 className='h3 bold white'>Jasmine Sarmiento</h2>
                    <p className="p demiBold mt-2" id="profileName">@jasmene</p>
                    <Link to='/pages/allFriends'>
                    <p className="p demiBold mt-2" id="addFriend"> <img src={addFriendWhite} alt="addFriend" id="addFriendIcon" />Add Friend</p>
                    </Link>
                </div>
            </div>
        

            <div className="pageTab">
                <div className="col px-4">
                    <h3 className="h4 pt-4 mb-3 bold">Between You</h3>
                    <div className="row d-flex flex-direction-column justify-content-center">
                    <img src={purpleLock} alt="smiley" className="purpleLock" />
                    <h1 class="h1 bold" id="profileLocked">Profile locked!</h1>
                    <p class="p demiBold mt-1" id="lockedText">Add Jasmine as a friend to start splitting bills!</p>
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
