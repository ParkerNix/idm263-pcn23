import newGroupImg from '../../components/Assets/newGroupIcon.png'
import lockIcon from '../../components/Assets/lock.png'
import backArrowWhite from '../../components/Assets/backArrowWhite.png'
import note from '../../components/Assets/note.png'
import allieSmiley from '../../components/Assets/allie_smiley.png'
import molynaSmiley from '../../components/Assets/molyna_smiley.png'
import parkerSmiley from '../../components/Assets/parker_smiley.png'
import joeySmiley from '../../components/Assets/joey_smiley.png'
import meganSmiley from '../../components/Assets/megan_smiley.png'
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navExpenseDefault from '../../components/Assets/nav_expense_default.png'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'
import { Link, useNavigate } from 'react-router-dom';

export const NewExpense = () => {

    // Use this hook to programmatically navigate to another page
    const navigate = useNavigate();

    // This function is used to navigate to the home page
    // It will be called when the button is clicked
    const goBack = () => {
      navigate(-1);
    };

    return (
        <>
            <div className="container gradientContainer">
                <div className="row">
                    <div className="col">
                        <div className='my-4 d-flex flex-column align-items-stretch'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <a onClick={goBack} className="bold line-height">
                                    <img src={backArrowWhite} alt="back" className="topNavBack" />
                                </a>
                                <h1 className="h4 white bold">Payback Gang</h1>
                                <span></span>
                            </div>
                            <img src={newGroupImg} alt="newGroupImg" className='groupImg mt-2 align-self-center' />
                            <label className="d-flex flex-column align-items-center">
                              <p className="white">Total Cost</p>
                              <input
                                className='ml-2 total'
                                type="number"
                                min="0"
                                step="0.1"
                                value={"64.00"}
                              />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row pageTab">
                    <div className="col pt-3 px-4 pageBottom">
                        <div>
                            <div className='expenseSection'>
                                <div className='my-2 d-flex justify-content-between align-items-center'>
                                    <h2 className='h4 bold'>What is it?</h2>
                                    <button className='noteBtn medium'>Add a note <img src={note} alt="note" className='noteIcon ms-2' /></button>
                                </div>
                                <div className="dropdown">
                                    <button type="button" className="dropdownBtn dropdown-toggle" data-bs-toggle="dropdown">
                                        Category
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Food</a></li>
                                        <li><a className="dropdown-item" href="#">Travel</a></li>
                                        <li><a className="dropdown-item" href="#">Entertainment</a></li>
                                        <li><a className="dropdown-item" href="#">Bills</a></li>
                                        <li><a className="dropdown-item" href="#">Other</a></li>
                                    </ul>
                                </div>
                                <select value="Other" hidden>
                                    <option value="Food">Food</option>
                                    <option value="Travel">Travel</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Bills">Bills</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className='expenseSection'>
                                <h2 className='h4 bold mb-3'>Who covered the bill?</h2>
                                <div className="dropdown">
                                    <button type="button" className="dropdownBtn dropdown-toggle" data-bs-toggle="dropdown">
                                        Choose group member
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Megan</a></li>
                                        <li><a className="dropdown-item" href="#">Molyna</a></li>
                                        <li><a className="dropdown-item" href="#">Parker</a></li>
                                        <li><a className="dropdown-item" href="#">Allie</a></li>
                                        <li><a className="dropdown-item" href="#">Joey</a></li>
                                    </ul>
                                </div>
                                <select value="Megan" hidden>
                                    <option value="Megan">Megan</option>
                                    <option value="Molyna">Molyna</option>
                                    <option value="Parker">Parker</option>
                                    <option value="Allie">Allie</option>
                                    <option value="Joey">Joey</option>
                                </select>
                            </div>
                            <div className='expenseSection'>
                                <h2 className='h4 bold mb-3'>How is it split?</h2>
                                <div>
                                    <button className='splitBtnActive'>Manual</button>
                                    <button className='splitBtn'>Percentage</button>
                                </div>
                            </div>
                            <div className='mb-4 d-flex flex-column'>
                                <h2 className='h4 bold mb-4'>Cost distribution</h2>
                                <label className='memberExpense'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className='d-flex align-items-center'>
                                            <img src={meganSmiley} className="memberIconsNE" alt="member2" />
                                            <h3 className='h6'>Megan</h3>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <img src={lockIcon} alt="lockIcon" className='lockIcon' />
                                            <input
                                                className='ml-2 indivTotal bold'
                                                type="number"
                                                min="0"
                                                step="0.1"
                                                value={"12.80"}
                                            />
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progressLightPurple" style={{ width: "20%" }}></div>
                                    </div>
                                </label>
                                <label className='memberExpense'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className='d-flex align-items-center'>
                                            <img src={molynaSmiley} className="memberIconsNE" alt="member2" />
                                            <h3 className='h6'>Molyna</h3>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                        <img src={lockIcon} alt="lockIcon" className='lockIcon' />
                                        <input
                                            className='ml-2 indivTotal bold'
                                            type="number"
                                            min="0"
                                            step="0.1"
                                            value={"12.80"}
                                        />
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progressOrange" style={{ width: "20%" }}></div>
                                    </div>
                                </label>
                                <label className='memberExpense'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className='d-flex align-items-center'>
                                            <img src={parkerSmiley} className="memberIconsNE" alt="member2" />
                                            <h3 className='h6'>Parker</h3>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                        <img src={lockIcon} alt="lockIcon" className='lockIcon' />
                                        <input
                                            className='ml-2 indivTotal bold'
                                            type="number"
                                            min="0"
                                            step="0.1"
                                            value={"12.80"}
                                        />
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progressPink" style={{ width: "20%" }}></div>
                                    </div>
                                </label>
                                <label className='memberExpense'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className='d-flex align-items-center'>
                                            <img src={allieSmiley} className="memberIconsNE" alt="member2" />
                                            <h3 className='h6'>Allie</h3>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                        <img src={lockIcon} alt="lockIcon" className='lockIcon' />
                                        <input
                                            className='ml-2 indivTotal bold'
                                            type="number"
                                            min="0"
                                            step="0.1"
                                            value={"12.80"}
                                        />
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progressYellow" style={{ width: "20%" }}></div>
                                    </div>
                                </label>
                                <label className='memberExpense'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className='d-flex align-items-center'>
                                            <img src={joeySmiley} className="memberIconsNE" alt="member2" />
                                            <h3 className='h6'>Joey</h3>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                        <img src={lockIcon} alt="lockIcon" className='lockIcon' />
                                        <input
                                            className='ml-2 indivTotal bold'
                                            type="number"
                                            min="0"
                                            step="0.1"
                                            value={"12.80"}
                                        />
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progressLightBlue" style={{ width: "20%" }}></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className='stickyBtn2'>
                            <Link to="/pages/viewGroup" className="button btmRightBtn demiBold">Save expense</Link>
                        </div>
                    </div>
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
