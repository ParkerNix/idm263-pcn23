import backArrowWhite from '../../components/Assets/backArrowWhite.png'
import paybackLogo from '../../components/Assets/paybackLogo.png'
import optionsIconHorizontal from '../../components/Assets/optionsDotsHorizontal.png'
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navExpenseDefault from '../../components/Assets/nav_expense_default.png'
import navExpenseActive from '../../components/Assets/nav_expense_active.svg'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import newGroupImg from '../../components/Assets/newGroupIcon.png'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { collection, onSnapshot, query, } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../store/slices/items";
import { motion } from "framer-motion"

export const ViewGroup = () => {

    const [dataArr, setDataArr] = useState([])
    const [colorArr, setColorArr] = useState([])
    const [totalPaid, setTotalPaid] = useState(0.00)
    const [overallTotal, setOverallTotal] = useState(0.00)

    const data = {
        datasets: [
            {
                data: dataArr,
                backgroundColor: colorArr,
                borderWidth: 0
            },
        ],
    };
      
    const options = {
        cutout: "87%",
        elements: {
            center: {
                text: 'Red is 2/3 the total numbers',
                color: '#FF6384', // Default is #000000
                fontStyle: 'Arial', // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25 // Default is 25 (in px), used for when text wraps
            },
        },
    };

    const dispatch = useDispatch();
  
    const [allItems, setAllItems] = useState([])

    const [thisExpense, setThisExpense] = useState({
        portions: [
            '0',
            '0',
            '0',
            '0',
            '0',
        ],
        paid: [
            false,
            false,
            false,
            false,
            false,
        ],
        colors: [
            "#000000",
            "#000000",
            "#000000",
            "#000000",
            "#000000"
        ],
        group: "none",
        total: "0.00",
        category: "food"
    })
  
  
    useEffect(() => {
      const q = query(collection(db, "Expenses"))
      onSnapshot(q, querySnapshot => {
        setAllItems([])
        querySnapshot.forEach(doc => {
          setAllItems(prevAllItems => [
            ...prevAllItems,
            doc.data()
          ])
        })
      })
    }, [])
  
    useEffect(() => {
      dispatch(update(allItems))
    })

    useEffect(() => {
        if (allItems[0] === undefined ) {
            console.log("loading...")
        } else {
            setThisExpense(allItems[0])

            if (allItems[0].total === undefined) {
                setOverallTotal(0.00)
            } else {
                let newOverall = allItems[0].total
                setOverallTotal(newOverall)
            }

            let newDataArr = []
            let newColorArr = []
            let newTotalPaid = 0.00
            newColorArr.push("#644dbd")
            newColorArr.push("#eae3fb")
            
            for (let i=0; i < allItems[0].portions.length; i++) {
                if (allItems[0].paid[i] === true) {
                    let paidNum = parseFloat(allItems[0].portions[i])
                    newTotalPaid = newTotalPaid + paidNum
                }
            }
            let totalNum = allItems[0].total
            let totalPercentPaid = (newTotalPaid/totalNum) * 100
            let leftover = (100-totalPercentPaid)
            newDataArr.push(totalPercentPaid)
            newDataArr.push(leftover)
            console.log(newColorArr)
            console.log(newDataArr)
            setDataArr(newDataArr)
            setColorArr(newColorArr)
            setTotalPaid(totalPercentPaid)
        }
    }, [allItems])

    // Use this hook to programmatically navigate to another page
    const navigate = useNavigate();
    
    // This function is used to navigate to the home page
    // It will be called when the button is clicked
    const goBack = () => {
      navigate(-1);
    };

    return (
        <>
            <motion.div 
                className="container gradientContainer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: {duration: 0.1} }}
                exit={{ opacity: 0, transition: {duration: 0.1} }}
            >
                <div className="row mx-3 mb-4 justify-content-center">
                    <div className="col mt-4 mb-4 p-0 d-flex justify-content-between">
                        <a onClick={goBack} className="bold line-height">
                            <img src={backArrowWhite} alt="back" className="topNavBackLink" />
                        </a>
                        <h1 className="h6 bold white">View Group</h1>
                        <img src={optionsIconHorizontal} alt="options" className="OptionsHorizontal" />
                    </div>
                    <div className='mt-1 p-0 d-flex justify-content-start align-items-center'>
                        <div>
                            <img src={paybackLogo} alt='Group Icon' className='groupImg2' />
                        </div>
                        <div className='mx-4'>
                            <h2 className='white h3 bold'>Payback Gang</h2>
                            <p className='white xsmallCopy demiBold'>You must pay!</p>
                        </div>
                    </div>
                </div>
                <div className="row pageTab pb-5">
                    <div className="col pt-3 px-4">
                        <h2 className='h4 bold mt-3 mb-2' id="groupSpending">Group spending</h2>
                        <div className ='card'>
                            <div className='card-body'>
                                <div className='d-flex align-items-top justify-content-between mb-3'>
                                    <div className='d-flex align-items-center'>
                                        <div className='d-flex flex-column align-items-start'>
                                            <p className='mb-2 categoryTitle categoryFood'>Food</p>
                                            <div className='textVGCard'>
                                                <h3 className="h2 bold">${overallTotal}
                                                </h3>
                                                <p className="medium xsmallCopy">Total spending</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center align-items-center justify-content-start'>
                                        <div style={{height:'85px', width:'85px', marginTop:'-10px'}}>
                                            <Doughnut data={data} options={options} width={77} height={77} className='doughnutGraph' />
                                        </div>
                                        <div className='doughnutTextCard'>
                                            <p className='text-center h4 bold'>{totalPaid}%</p>
                                            <p className='text-center xtestsmallCopy medium'>paid back</p>
                                        </div>
                                    </div>
                                </div>
                                <div className ='d-flex align-items-center justify-content-between'>
                                    <div className="groupsCardIcons">
                                        <p className='bold line-height'>10/10/22</p>
                                    </div>
                                    <div className="groupsCardButton">
                                        {/* Need to move this to around the entire card div so that hit box is whole entire card */}

                                        <Link to="/pages/costBreakdown" className="demiBold px-0 line-height"  onClick={
                                            () => {
                                                window.scrollTo(0,0)
                                            }
                                        }>View breakdown →</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='stickyBtn2'>
                            <Link to="/pages/newExpense" className="button mediumCopy btmRightBtn bold">New expense</Link>
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
    )
}