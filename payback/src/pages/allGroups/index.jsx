import backArrow from '../../components/Assets/Back arrow.png'
import optionsIcon from '../../components/Assets/optionsDots.png'
import groupImg from '../../components/Assets/groupImg.png'
import smileySmiley from '../../components/Assets/smiley_smiley.png'
import molynaSmiley from '../../components/Assets/molyna_smiley.png'
import parkerSmiley from '../../components/Assets/parker_smiley.png'
import heartEmpty from '../../components/Assets/heartEmpty.png'
import backArrowWhite from '../../components/Assets/backArrowWhite.png'
import newGroupIcon from '../../components/Assets/newGroupIcon.png'
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navExpenseDefault from '../../components/Assets/nav_expense_default.png'
import navExpenseActive from '../../components/Assets/nav_expense_active.png'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"

export const AllGroups = () => {

    // Use this hook to programmatically navigate to another page
    const navigate = useNavigate();
    
    // This function is used to navigate to the home page
    // It will be called when the button is clicked
    const goBack = () => {
      navigate(-1);
    };

    return (
        <>
        <motion.div className="container pb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {duration: 0.1} }}
            exit={{ opacity: 0, transition: {duration: 0.1}}}
        >
            <div className="row">
                <div className="col mt-4 mb-2 mx-3 d-flex justify-content-between">
                    <a onClick={goBack} className="bold line-height">
                        <img src={backArrow} alt="back" className="topNavBack" />
                    </a>
                    <h1 className="h6 bold">Groups</h1>
                    <img src={optionsIcon} alt="options" className="topNavOptions" />
                    {/* Add back arrow and 3 vertical dots */}
                </div>
            </div>

            <div className='row'>
                <div className="col mx-3">
                    <h2 className="h4 bold my-4">All groups</h2>
                    <div>
                        <div className ='card'>
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
                                    <div className="groupsCardIcons">
                                        <img src={smileySmiley} className="memberIcons" alt="member1" />
                                        <img src={molynaSmiley} className="memberIcons" alt="member2" />
                                        <img src={parkerSmiley} className="memberIcons" alt="member3" />
                                    </div>
                                    <div className="groupsCardButton">
                                        <Link to='/pages/viewGroup' className="button demiBold"  onClick={
                                            () => {
                                                window.scrollTo(0,0)
                                            }
                                        }>
                                            View group
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='stickyBtn mb-5'>
                <Link to="/pages/createGroup" className="button mediumCopy btmRightBtn bold buttonSpacer"  onClick={
                    () => {
                        window.scrollTo(0,0)
                    }
                }>Create new group</Link>
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
            <div className="navStack active">
                <Link to='/pages/allGroups' className="bold d-flex flex-column align-items-center">
                    <img src={navExpenseDefault} className="navIcons" alt="expense" />
                    <img src={navExpenseActive} className="navIcons" alt="expense" id ="active" />
                    Expense
                </Link>
            </div>
            <div className="navStack">
                <Link to='/pages/groups' className="bold d-flex flex-column align-items-center">
                    <img src={navGroupsDefault} className="navIcons" alt="groups" />
                    Groups
                </Link>
            </div>
            <div className="navStack">
                <Link to='/pages/profile' className="bold d-flex flex-column align-items-center">
                    <img src={navProfileDefault} className="navIcons" alt="profile" />
                    Profile
                </Link>
            </div>
        </div> 


        </>
    );
}
