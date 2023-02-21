import backArrow from '../../components/Assets/Back arrow.png'
import optionsIcon from '../../components/Assets/optionsDots.png'
import groupImg from '../../components/Assets/groupImg.png'
import smileySmiley from '../../components/Assets/smiley_smiley.png'
import molynaSmiley from '../../components/Assets/molyna_smiley.png'
import parkerSmiley from '../../components/Assets/parker_smiley.png'
import heartEmpty from '../../components/Assets/heartEmpty.png'
import editIcon from '../../components/Assets/editIcon.png'
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navExpenseDefault from '../../components/Assets/nav_expense_default.png'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'


export const CreateGroup = () => {

    return (
        <>
        <div className="container">
        <div class="row">
                <div className="col mt-4 mb-2 mx-3 d-flex justify-content-between">
                    <img src={backArrow} alt="back" className="topNavBack" />
                    <h1 className="h6 bold">Groups</h1>
                    <img src={optionsIcon} alt="back" className="topNavOptions" />
                    {/* Add back arrow and 3 vertical dots */}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="createGroup">
                    <img src={groupImg} alt="groupImg" className='newGroupImg mt-4 align-self-center'/>
                    <div class="groupName d-flex flex-row align-items-center mt-3">
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
                        {/* <input
                             className='add'
                             type="checkbox"
                             min="0"
                             /> */}
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