import backArrow from '../../components/Assets/Back arrow.png'
import optionsIcon from '../../components/Assets/optionsDots.png'
import groupImg from '../../components/Assets/groupImg.png'
import smileySmiley from '../../components/Assets/smiley_smiley.png'
import allieSmiley from '../../components/Assets/allie_smiley.png'
import molynaSmiley from '../../components/Assets/molyna_smiley.png'
import parkerSmiley from '../../components/Assets/parker_smiley.png'
import joeySmiley from '../../components/Assets/joey_smiley.png'
import meganSmiley from '../../components/Assets/megan_smiley.png'
import heartEmpty from '../../components/Assets/heartEmpty.png'
import editIcon from '../../components/Assets/editIcon.png'
import editImgIcon from '../../components/Assets/editImgIcon.png'
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navExpenseDefault from '../../components/Assets/nav_expense_default.png'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'
import newGroupIcon from '../../components/Assets/newGroupIcon.png'
import addFriend from '../../components/Assets/addFriend.png'
import deletePlaceholder from '../../components/Assets/delete_placeholder.png'
import addPlaceholder from '../../components/Assets/addFriendsPlaceholder.png'
import { AddPhoto } from '../../components/addPhoto'
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"


export const EditGroup = () => {

    // Use this hook to programmatically navigate to another page
    const navigate = useNavigate();

    // This function is used to navigate to the home page
    // It will be called when the button is clicked
    const goBack = () => {
      navigate(-1);
    };

    return (
        <>
        <motion.div className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {duration: 0.1} }}
            exit={{ opacity: 0, transition: {duration: 0.1} }}
        >
            <div className="row">
                <div className="col mt-4 mb-2 mx-3 d-flex justify-content-between">
                    <a onClick={goBack} className="bold line-height">
                        <img src={backArrow} alt="back" className="topNavBack" />
                    </a>
                    <h1 className="h6 bold">Edit Group</h1>
                    <img src={optionsIcon} alt="back" className="topNavOptions" />
                    {/* Add back arrow and 3 vertical dots */}
                </div>
            </div>
            <div className="row pb-5">
                <div className="col pb-5">
                    <div className="createGroup">
                    <img src={newGroupIcon} alt="photoPlaceholder" className='newGroupImg mt-4 align-self-center'/>
                            <button id="editPhoto"  data-bs-toggle="modal" data-bs-target="#myModal"><img src={editImgIcon} alt="edit the group icon" id="editImgIcon"></img></button>

                            {/* ADD PHOTO MODAL */}
                                                    
                            <div className="modal" id="myModal">
                                <div class="modal-dialog">
                                    <AddPhoto/>
                                </div>
                            </div>
                        <div className="groupName d-flex flex-row justify-content-center align-items-center">
                            <input type="text" className ='groupNameEdit' maxLength="13" value="Payback Gang"></input>
                            <img src={editIcon} alt="editIcon" className='editIcon' />
                        </div>
                    </div>
                    <div className="description">
                        <h3 className="h5 bold mt-4 mb-3">Description</h3>
                        <div className="form-group">
                            <textarea className="form-control" rows="5" cols="50" id="comment">You must pay!</textarea>
                        </div>
                    </div>
                    <div className="groupMembers d-flex justify-content-center">
                        <h3 className='h5 bold mb-3'>Groups Members (4)</h3>

                        <div className="row d-flex flex-row justify-content-center">

                            <div className="friendsRow d-flex flex-row justify-content-between">
                                <div className="friendsName d-flex flex-row">
                                    <img src={allieSmiley} alt="smiley" className="smiley"/>
                                    <p className="p demiBold" id="friendName">Allie Drake</p>
                                </div>
                                <div className="addFriend">
                                    <img src={deletePlaceholder} alt="delete friend" className="deleteFriend"/>
                                </div>
                            </div>

                            <hr className="editFriend"></hr>
                            
                            <div className="friendsRow d-flex flex-row justify-content-between">
                                <div className="friendsName d-flex flex-row">
                                    <img src={joeySmiley} alt="smiley" className="smiley"/>
                                    <p className="p demiBold" id="friendName">Joey McQuillan</p>
                                </div>
                                <div className="addFriend">
                                    <img src={deletePlaceholder} alt="delete friend" className="deleteFriend"/>
                                </div>
                            </div>
                            <hr className="editFriend"></hr>

                            <div className="friendsRow d-flex flex-row justify-content-between">
                                <div className="friendsName d-flex flex-row">
                                    <img src={meganSmiley} alt="smiley" className="smiley"/>
                                    <p className="p demiBold" id="friendName">Megan Lam</p>
                                </div>
                                <div className="addFriend">
                                    <img src={deletePlaceholder} alt="delete friend" className="deleteFriend"/>
                                </div>
                            </div>
                            <hr className="editFriend"></hr>
                        
                            <div className="friendsRow d-flex flex-row justify-content-between">
                                <div className="friendsName d-flex flex-row">
                                    <img src={parkerSmiley} alt="smiley" className="smiley"/>
                                    <p className="p demiBold" id="friendName">Parker Nix</p>
                                </div>
                                <div className="addFriend">
                                    <img src={deletePlaceholder} alt="delete friend" className="deleteFriend"/>
                                </div>
                            </div>

                            <hr className="editFriend"></hr>

                            <div className="friendsRow d-flex flex-row justify-content-between">
                                <div className="friendsName d-flex flex-row align-items-center">
                                    <Link to="/pages/friends" className="d-flex demiBold">
                                        <img src={addPlaceholder} alt="addMoreFriends" className="deleteFriend"/>
                                        <p className="p demiBold ms-1" id="friendName">Add more friends</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='stickyBtn2'>
                        <Link to="/pages/newExpense" className="button mediumCopy btmRightBtn bold"  onClick={
                            () => {
                                window.scrollTo(0,0)
                            }
                        }>Save group</Link>
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
                <img src={navMonthlyDefault} className="navIcons" alt="monthly" />
                <a href="#monthly" className="bold">Monthly</a>
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