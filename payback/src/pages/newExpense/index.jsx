import newGroupImg from '../../components/Assets/newGroupIcon.png'
import lockIcon from '../../components/Assets/lock.png'
import lockOnIcon from '../../components/Assets/lockOn.png'
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
import {useEffect, useState} from 'react';

export const NewExpense = () => {

    const [total, setTotal] = useState(0);
    const [error, seterror] = useState("");
    const [members, setMembers] = useState([
        {
            name : "Megan Lam",
            dollar : 0,
            percent : 0,
            lock : false,
            img : lockIcon
        },
        {
            name : "Molyna Tep",
            dollar : 0,
            percent : 0,
            lock : false,
            img : lockIcon
        },
        {
            name : "Parker Nix",
            dollar : 0,
            percent : 0,
            lock : false,
            img : lockIcon
        },
        {
            name : "Allie Drake",
            dollar : 0,
            percent : 0,
            lock : false,
            img : lockIcon
        },
        {
            name : "Joey McQuillan",
            dollar : 0,
            percent : 0,
            lock : false,
            img : lockIcon
        },
    ]);

    const lockImg = (index) => {
        let newArr = [...members]
        if(members[index].lock === true) {
            newArr[index].lock = false
            newArr[index].img = lockIcon
        }else if(members[index].lock === false) {
            newArr[index].lock = true
            newArr[index].img = lockOnIcon
        }
        setMembers(newArr)
    }

    const Evenvalues = (name, newdollar) => {
        
        let locknum = 0
        let leftover = total
        let newArr = [...members]

        for(let i=0; i<newArr.length; i++) {
            if(newArr[i].lock === true) {
                locknum++
                leftover = leftover - newArr[i].dollar
            }
        }

        let maxLocks = newArr.length - 2
        let unlockedNum = newArr.length - (1 + locknum)


        if(locknum > maxLocks) {
           console.log("return")
        } else {
            let difference = leftover - newdollar
            let divided = difference/unlockedNum
            let divpercent = total/divided
            for(let i=0; i<newArr.length; i++) {
                if(newArr[i].lock === true) {
                    console.log("she's locked tho")
                }else if(newArr[i].name === name) {
                    console.log(`this is ${name}`)
                    console.log(newArr[i].percent)
                    newArr[i].dollar = newdollar
                } else if(newArr[i].lock === false) {
                    newArr[i].dollar = divided
                    newArr[i].percent = divpercent * 10 + "%"
                    console.log(newArr[i].dollar)
                    console.log(newArr[i].percent)
                }
            }
        }

        setMembers(newArr)
    }
    const isEven = () => {
        let totalPercent = 0
        for(let i=0; i<members.length; i++) {
            totalPercent = totalPercent + members[i].percent
        }
        if ( 1 !== totalPercent ) {
            seterror("Please recheck your values, they do not add up to your total!");
        }
        if ( 1 === totalPercent ) {
            seterror("");
        }
    }
    useEffect(() => {
        isEven()
    }, [members, total])

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
                        <div className='my-4 mx-3 d-flex flex-column align-items-stretch'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <a onClick={goBack} className="bold line-height">
                                    <img src={backArrowWhite} alt="back" className="topNavBack" />
                                </a>
                                <h1 className="h4 white bold">Payback Gang</h1>
                                <span></span>
                            </div>
                            <img src={newGroupImg} alt="newGroupImg" className='groupImg mt-2 align-self-center' />
                            <label className="d-flex flex-column align-items-center">
                              <p className="white demiBold">Total Cost</p>
                              <input
                                className='ml-2 total'
                                type="text"
                                value={"$" + total}
                                onChange={
                                  event => {
                                    let eventTotal = event.target.value.substring(1)
                                    const newTotal = parseFloat(eventTotal);
                                    if (isNaN(newTotal)) {
                                        setTotal("")
                                    } else {
                                        setTotal(newTotal);
                                    }
                                  }
                                }
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
                                    <button className='noteBtn demiBold'>Add a note <img src={note} alt="note" className='noteIcon ms-2' /></button>
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
                                            <h3 className='h6'>Megan Lam</h3>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <img src={members[0].img} alt="lockIcon" className='lockIcon' onClick={
                                                () => {
                                                    lockImg(0)
                                                }
                                            }/>
                                            <input
                                                className='ml-2 indivTotal bold'
                                                type="text"
                                                value={"$" + members[0].dollar}
                                                onChange={
                                                    event => {
                                                        let newArr = [...members];
                                                        let eventnum = event.target.value.substring(1)
                                                        const personanew = parseFloat(eventnum)
                                                        if (isNaN(personanew)) {
                                                            return
                                                        } else {
                                                            newArr[0].dollar = personanew
                                                            const personapercentnew = personanew / total
                                                            newArr[0].percent = personapercentnew * 100 + "%"
                                                            setMembers(newArr);
                                                            Evenvalues("Megan Lam", personanew)
                                                        }
                                                    }
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progressLightPurple" style={{ width: members[0].percent }}></div>
                                    </div>
                                </label>
                                <label className='memberExpense'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className='d-flex align-items-center'>
                                            <img src={molynaSmiley} className="memberIconsNE" alt="member2" />
                                            <h3 className='h6'>Molyna Tep</h3>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                        <img src={members[1].img} alt="lockIcon" className='lockIcon' onClick={
                                            () => {
                                                lockImg(1)
                                            }
                                        }/>
                                        <input
                                            className='ml-2 indivTotal bold'
                                            type="text"
                                            value={"$" + members[1].dollar}
                                            onChange={
                                                event => {
                                                    let newArr = [...members];
                                                    let eventnum = event.target.value.substring(1)
                                                    const personanew = parseFloat(eventnum)
                                                    if (isNaN(personanew)) {
                                                        newArr[1].dollar = "";
                                                        setMembers(newArr);
                                                    } else {
                                                        newArr[1].dollar = event.target.value;
                                                        const personapercentnew = personanew / total
                                                        newArr[1].percent = personapercentnew * 100 + "%"
                                                        setMembers(newArr);
                                                        Evenvalues("Molyna Tep", personanew)
                                                    }
                                                }
                                              }
                                        />
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progressOrange" style={{ width: "50%" }}></div>
                                    </div>
                                </label>
                                <label className='memberExpense'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className='d-flex align-items-center'>
                                            <img src={parkerSmiley} className="memberIconsNE" alt="member2" />
                                            <h3 className='h6'>Parker Nix</h3>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                        <img src={members[2].img} alt="lockIcon" className='lockIcon' onClick={
                                            () => {
                                                lockImg(2)
                                            }
                                        }/>
                                        <input
                                            className='ml-2 indivTotal bold'
                                            type="text"
                                            value={"$" + members[2].dollar}
                                            onChange={
                                                event => {
                                                    let newArr = [...members];
                                                    let eventnum = event.target.value.substring(1)
                                                    const personanew = parseFloat(eventnum)
                                                    if (isNaN(personanew)) {
                                                        return
                                                    } else {
                                                        newArr[2].dollar = event.target.value;
                                                        const personapercentnew = personanew / total
                                                        newArr[2].percent = personapercentnew * 100 + "%"
                                                        setMembers(newArr);
                                                        Evenvalues("Parker Nix", personanew)
                                                    }
                                                }
                                              }
                                        />
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progressPink" style={{ width: "10%" }}></div>
                                    </div>
                                </label>
                                <label className='memberExpense'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className='d-flex align-items-center'>
                                            <img src={allieSmiley} className="memberIconsNE" alt="member2" />
                                            <h3 className='h6'>Allie Drake</h3>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                        <img src={members[3].img} alt="lockIcon" className='lockIcon' onClick={
                                            () => {
                                                lockImg(3)
                                            }
                                        }/>
                                        <input
                                            className='ml-2 indivTotal bold'
                                            type="text"
                                            value={"$" + members[3].dollar}
                                            onChange={
                                                event => {
                                                    let newArr = [...members];
                                                    let eventnum = event.target.value.substring(1)
                                                    const personanew = parseFloat(eventnum)
                                                    if (isNaN(personanew)) {
                                                        return
                                                    } else {
                                                        newArr[3].dollar = event.target.value;
                                                        const personapercentnew = personanew / total
                                                        newArr[3].percent = personapercentnew * 100 + "%"
                                                        setMembers(newArr);
                                                        Evenvalues("Allie Drake", personanew)
                                                    }
                                                }
                                              }
                                        />
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progressYellow" style={{ width: "10%" }}></div>
                                    </div>
                                </label>
                                <label className='memberExpense'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className='d-flex align-items-center'>
                                            <img src={joeySmiley} className="memberIconsNE" alt="member2" />
                                            <h3 className='h6'>Joey McQuillan</h3>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                        <img src={members[4].img} alt="lockIcon" className='lockIcon' onClick={
                                                () => {
                                                    lockImg(4)
                                                }
                                            }/>
                                        <input
                                            className='ml-2 indivTotal bold'
                                            type="text"
                                            value={"$" + members[4].dollar}
                                            onChange={
                                                event => {
                                                    let newArr = [...members];
                                                    let eventnum = event.target.value.substring(1)
                                                    const personanew = parseFloat(eventnum)
                                                    if (isNaN(personanew)) {
                                                        return
                                                    } else {
                                                        newArr[4].dollar = event.target.value;
                                                        const personapercentnew = personanew / total
                                                        newArr[4].percent = personapercentnew * 100 + "%"
                                                        setMembers(newArr);
                                                        Evenvalues("Joey McQuillan", personanew)
                                                    }
                                                }
                                              }
                                        />
                                        </div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progressLightBlue" style={{ width: "10%" }}></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className='stickyBtn2'>
                            <Link to="/pages/viewGroup" className="button btmRightBtn mediumCopy bold">Save expense</Link>
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
