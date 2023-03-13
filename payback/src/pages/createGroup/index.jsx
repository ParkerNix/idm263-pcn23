import backArrow from '../../components/Assets/Back arrow.png'
import optionsIcon from '../../components/Assets/optionsDots.png'
import editIcon from '../../components/Assets/editIcon.png'
import editImgIcon from '../../components/Assets/editImgIcon.png'
import photoPlaceholder from '../../components/Assets/photoPlaceholder.png'
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navExpenseDefault from '../../components/Assets/new_expense_default.svg'
import navExpenseActive from '../../components/Assets/nav_expense_active.svg'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'
import { AddPhoto } from '../../components/addPhoto'
import addPlaceholder from '../../components/Assets/addFriendsPlaceholder.png'
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"


export const CreateGroup = () => {

    let photoPath = photoPlaceholder

    // Use this hook to programmatically navigate to another page
    const navigate = useNavigate();

    // This function is used to navigate to the home page
    // It will be called when the button is clicked
    const goBack = () => {
      navigate(-1);
    };

    return (
        <>

{/*
        <div className="container">
            <div class="row">
                <div className="col mt-4 mb-2 mx-3 d-flex justify-content-between">
                    <img src={backArrow} alt="back" className="topNavBack" />
                    <h1 className="h6 bold">Create Group</h1>
                    <img src={optionsIcon} alt="back" className="topNavOptions" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="createGroup">
                        <img src={photoPlaceholder} alt="photoPlaceholder" className='newGroupImg mt-4 align-self-center'/>
                        <button id="addPhoto"  data-bs-toggle="modal" data-bs-target="#myModal"><p>+</p></button>


                        <div className="modal" id="myModal">
                            <div class="modal-dialog">
                                <AddPhoto/>
                            </div>
                        </div>
                   
                   


                    <div class="groupName d-flex flex-row align-items-center mt-1">
                        <h2 id="groupH2" className = 'h3 bold'>Group 1</h2>
                        <img src={editIcon} alt="editIcon" className='editIcon' />
                    </div>
                </div>
                    <div className="description">
                        <h3 className="h5 bold mt-4 mb-3">Description</h3>
                        <div class="form-group">
                            <textarea class="form-control" rows="5" cols="50" id="addGroupDescription">Add group description</textarea>
                          </div>
                    </div>
                    <div className="groupMembers d-flex justify-content-center">
                        <h3 className='h5 bold mb-3'>Groups Members (0)</h3>
                        <div class="checkbox d-flex flex-row gap-2">
                        <input
                             className='add'
                             type="checkbox"
                             min="0"
                             />
                             <button id="addFriends"><p>+</p></button>
                             <p className="p demiBold">Add Friends</p>
                          </div>
                          </div>
                          <button id='submit' className="btmRightBtn bold">
                                Save group
                            </button>
                    </div>
            </div>
        </div>
-------------------------------------------------*/}
            <motion.div
                className="container pb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: {duration: 0.1} }}
                exit={{ opacity: 0, transition: {duration: 0.1} }}
            >
                <div className="row">
                    <div className="col mt-4 mb-2 mx-4 px-0 d-flex justify-content-between">
                        <a onClick={goBack} className="bold line-height">
                            <img src={backArrow} alt="back" className="topNavBack" />
                        </a>
                        <h1 className="h6 bold">Edit Group</h1>
                        <img src={optionsIcon} alt="back" className="topNavOptions" />
                        {/* Add back arrow and 3 vertical dots */}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="createGroup">
                            <img src={photoPath} alt="placeholder icon" className='newGroupImg mt-4 align-self-center'/>
                            <button id="editPhoto"  data-bs-toggle="modal" data-bs-target="#myModal"><img src={editImgIcon} alt="edit the group icon" id="editImgIcon"></img></button>

                            {/* ADD PHOTO MODAL */}
                                                    
                            <div className="modal" id="myModal">
                                <div class="modal-dialog">
                                    <AddPhoto/>
                                </div>
                            </div>
                            
                            <div className="groupName d-flex flex-row justify-content-center align-items-center">
                                <input type="text" className ='groupNameEdit' placeholder='Group 1' maxLength="13"></input>
                                <img src={editIcon} alt="editIcon" className='editIcon' />
                            </div>
                        </div>
                        <div className="description">
                            <h3 className="h5 bold mt-4 mb-3">Description</h3>
                            <div className="form-group">
                                <textarea className="form-control" rows="5" cols="50" id="comment">Add group description</textarea>
                              </div>
                        </div>
                        <div className="groupMembers d-flex justify-content-center">
                            <h3 className='h5 bold mb-3'>Groups Members (0)</h3>
                            <div className="checkbox d-flex flex-row gap-2">
                                <Link to="/pages/friends" className="d-flex align-items-center demiBold">
                                        <img src={addPlaceholder} alt="smiley" className="deleteFriend"/>
                                        <p className="p demiBold ms-1 pt-1" id="friendName">Add more friends</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='stickyBtnCB'>
                    <button className="btmRightBtn mediumCopy inactive bold">Save group</button>
                </div>
            </motion.div>
{/*-------------------------------------------------*/}

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