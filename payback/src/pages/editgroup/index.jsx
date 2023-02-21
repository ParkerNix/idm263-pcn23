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
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navExpenseDefault from '../../components/Assets/nav_expense_default.png'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'
import newGroupIcon from '../../components/Assets/newGroupIcon.png'
import addFriend from '../../components/Assets/addFriend.png'
import deletePlaceholder from '../../components/Assets/delete_placeholder.png'


export const EditGroup = () => {

    return (
        <>
        <div className="container">
        <div class="row">
                <div className="col mt-4 mb-2 mx-3 d-flex justify-content-between">
                    <img src={backArrow} alt="back" className="topNavBack" />
                    <h1 className="h6 bold">Edit Group</h1>
                    <img src={optionsIcon} alt="back" className="topNavOptions" />
                    {/* Add back arrow and 3 vertical dots */}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="createGroup">
                    <img src={newGroupIcon} alt="groupImg" className='newGroupImg mt-4 align-self-center'/>
                    <div class="groupName d-flex flex-row align-items-center mt-3">
                        <h2 id="groupH2" className = 'h3 bold'>Payback Gang</h2>
                        <img src={editIcon} alt="editIcon" className='editIcon' />
                    </div>
                </div>
                    <div className="description">
                        <h3 className="h5 bold mt-4 mb-3">Description</h3>
                        <div class="form-group">
                            <textarea class="form-control" rows="5" cols="50" id="comment">You must pay!</textarea>
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
                                            <button id="deleteFriends"><p>+</p></button>
                                    </div>
                                </div>

                                <hr className="editFriend"></hr>
                                
                                <div className="friendsRow d-flex flex-row justify-content-between">
                                    <div className="friendsName d-flex flex-row">
                                    <img src={joeySmiley} alt="smiley" className="smiley"/>
                                    <p className="p demiBold" id="friendName">Joey McQuillan</p>
                                    </div>
                                    <div className="addFriend">
                                        <button id="deleteFriends"><p>+</p></button>
                                    </div>
                                </div>
                                <hr className="addFriend"></hr>

                                <div className="friendsRow d-flex flex-row justify-content-between">
                                    <div className="friendsName d-flex flex-row">
                                    <img src={meganSmiley} alt="smiley" className="smiley"/>
                                    <p className="p demiBold" id="friendName">Megan Lam</p>
                                    </div>
                                    <div className="addFriend">
                                        <button id="deleteFriends"><p>+</p></button>
                                    </div>
                                </div>
                                <hr className="editFriend"></hr>
                        
                                <div className="friendsRow d-flex flex-row justify-content-between">
                                    <div className="friendsName d-flex flex-row">
                                    <img src={parkerSmiley} alt="smiley" className="smiley"/>
                                    <p className="p demiBold" id="friendName">Parker Nix</p>
                                    </div>
                                    <div className="addFriend">
                                        <button id="deleteFriends"><p>+</p></button>
                                    </div>
                                </div>

                                <hr className="editFriend"></hr>

                                <div className="friendsRow d-flex flex-row justify-content-between">
                                    <div className="friendsName d-flex flex-row align-items-center">
                                    <button id="addFriends"><p>+</p></button>
                                        <p className="p demiBold" id="friendName">Add more friends</p>
                                    </div>
                                </div>

                            </div>
                        



                          </div>
                          <button id='submit' className="btmRightBtn bold">
                                Save group
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
            
            </>
         );
    }