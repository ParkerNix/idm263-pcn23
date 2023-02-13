import backArrowWhite from '../../components/Assets/backArrowWhite.png'
import note from '../../components/Assets/note.png'
import React from 'react';
import circlePink from '../../components/Assets/circlePink.png'
import circleDarkPurple from '../../components/Assets/circleDarkPurple.png'
import circleYellow from '../../components/Assets/circleYellow.png'
import circleOrange from '../../components/Assets/circleOrange.png'
import checkCostBreakdown from '../../components/Assets/checkCostBreakdown.png'
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navExpenseDefault from '../../components/Assets/nav_expense_default.png'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Link, useNavigate } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    datasets: [
        {
            data: [12.80, 51.20],
            backgroundColor: [
                '#c2a6ff',
                'rgba(255, 255, 255, 0.2)',
            ],
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

export const CostBreakdown = () => {

      // Use this hook to programmatically navigate to another page
    const navigate = useNavigate();

    // This function is used to navigate to the home page
    // It will be called when the button is clicked
    const goBack = () => {
      navigate(-1);
    };

    return (
        <>
            <div className="container gradientContainerCB">
                <div className="row justify-content-center">
                    <div className="col mt-4 mb-3 mx-3 d-flex justify-content-between align-items-center">
                        <a onClick={goBack} className="bold line-height">
                            <img src={backArrowWhite} alt="back" className="topNavBack" />
                        </a>
                        <h1 className="h6 bold white">Cost Breakdown</h1>
                        <img src={note} alt="note" className="noteIcon iconButton" />
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <div style={{height:'231px',width:'231px'}}>
                            <Doughnut data={data} options={options} width={231} height={231} className='doughnutGraph' />
                        </div>
                        <div className='doughnutText'>
                            <p className='text-center white h1 bold'>$12.80</p>
                            <p className='text-center white largeCopy demiBold lineHeight64'>of $64.00</p>
                            <p className='text-center white smallCopy demiBold'>Paid back</p>
                        </div>
                    </div>
                </div>
                <div className="row pageTab pb-5">
                    <div className="col pt-3 px-4">
                        <div>
                            <div className='expenseSection mt-2 mb-4'>
                                <div className='d-flex justify-content-between align-items-center mb-3'>
                                    <h2 className='h4 bold'>Who covered the bill?</h2>
                                    <p className='categoryTitle categoryFood'>Food</p>
                                </div>
                                <div className="d-flex align-items-start">
                                    <div>
                                        <img src={checkCostBreakdown} alt='paid' className='checkCB' />
                                    </div>
                                    <div className='ms-3'>
                                        <h3 className='mediumCopy demiBold'>Megan Lam</h3>
                                        <p className='demiBold'>20% ($12.80)</p>
                                    </div>
                                </div>
                            </div>
                            <div className='expenseSection'>
                                <h2 className='h4 bold mb-3'>Split with</h2>
                                <div className='row mb-4'>
                                    <div className="col-6 d-flex align-items-start">
                                        <div>
                                            <img src={circleOrange} alt='unpaid' className='circleCB' />
                                        </div>
                                        <div className='ms-3'>
                                            <h3 className='mediumCopy demiBold'>Molyna Tep</h3>
                                            <p className='demiBold'>50% ($32.00)</p>
                                        </div>
                                    </div>
                                    <div className="col-6 d-flex align-items-start">
                                        <div>
                                            <img src={circlePink} alt='unpaid' className='circleCB' />
                                        </div>
                                        <div className='ms-3'>
                                            <h3 className='mediumCopy demiBold'>Parker Nix</h3>
                                            <p className='demiBold'>10% (%6.40)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mb-4'>
                                    <div className="col-6 d-flex align-items-start">
                                        <div>
                                            <img src={circleDarkPurple} alt='unpaid' className='circleCB' />
                                        </div>
                                        <div className='ms-3'>
                                            <h3 className='mediumCopy demiBold'>Joey McQuillan</h3>
                                            <p className='demiBold'>10% ($6.40)</p>
                                        </div>
                                    </div>
                                    <div className="col-6 d-flex align-items-start">
                                        <div>
                                            <img src={circleYellow} alt='unpaid' className='circleCB' />
                                        </div>
                                        <div className='ms-3'>
                                            <h3 className='mediumCopy demiBold'>Allie Drake</h3>
                                            <p className='demiBold'>10% ($6.40)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='stickyBtn2'>
                            <button className="btmRightBtn mediumCopy bold">Payback</button>
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