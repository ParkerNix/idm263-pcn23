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
import deletePlaceholder from '../../components/Assets/delete_placeholder.png'
import { Link, useNavigate } from 'react-router-dom';


export const CreateGroup = () => {

    // Use this hook to programmatically navigate to another page
    const navigate = useNavigate();

    // This function is used to navigate to the home page
    // It will be called when the button is clicked
    const goBack = () => {
      navigate(-1);
    };

    return (
        <>
        <div className="container">
        <div className="row">
                <div className="col mt-4 mb-2 mx-3 d-flex justify-content-between">
                    <a onClick={goBack} className="bold line-height">
                        <img src={backArrow} alt="back" className="topNavBack" />
                    </a>
                    <h1 className="h6 bold">Groups</h1>
                    <img src={optionsIcon} alt="back" className="topNavOptions" />
                    {/* Add back arrow and 3 vertical dots */}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="createGroup">
                        <img src={groupImg} alt="groupImg" className='newGroupImg mt-4 align-self-center'/>
                        <div className="groupName d-flex flex-row justify-content-center align-items-center mt-3">
                            <h2 className ='h3 bold'>Group 1</h2>
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
                            <Link to="/pages/editGroup" className="d-flex demiBold">
                                    <img src={deletePlaceholder} alt="smiley" className="add"/>
                                    <p className="p demiBold ms-1" id="friendName">Add more friends</p>
                            </Link>
                        </div>
                    </div>
                    <button id='submit' className="btmRightBtn bold">
                        Save group
                    </button>
                </div>
            </div>
        </div>


        <div className="navbar">
                <div class="navStack">
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
                    <img src={navExpenseDefault} className="navIcons" alt="expense" />
                    <a href="#expense" className="bold">Expense</a>
                </div>
                <div className="navStack">
                    <img src={navGroupsDefault} className="navIcons" alt="groups" />
                    <a href="#groups" className="bold">Groups</a>
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