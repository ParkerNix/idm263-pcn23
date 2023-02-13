import backArrowWhite from '../../components/Assets/backArrowWhite.png'
import optionsIconHorizontal from '../../components/Assets/optionsDotsHorizontal.png'
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navExpenseDefault from '../../components/Assets/nav_expense_default.png'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import newGroupImg from '../../components/Assets/newGroupIcon.png'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

export const data = {
    datasets: [
        {
            data: [12.80, 51.20],
            backgroundColor: [
                '#c2a6ff',
                '#E7DFF8',
            ],
            borderWidth: 0
        },
    ],
};
  
const options = {
    cutout: "85%",
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

export const ViewGroup = () => {

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
                <div className="row mx-3 mb-4 justify-content-center">
                    <div className="col mt-4 mb-4 p-0 d-flex justify-content-between">
                        <a onClick={goBack} className="bold line-height">
                            <img src={backArrowWhite} alt="back" className="topNavBack" />
                        </a>
                        <h1 className="h6 bold white">View Group</h1>
                        <img src={optionsIconHorizontal} alt="options" className="OptionsHorizontal" />
                    </div>
                    <div className='mt-1 p-0 d-flex justify-content-start align-items-center'>
                        <div>
                            <img src={newGroupImg} alt='Group Icon' className='groupImg' />
                        </div>
                        <div className='mx-4'>
                            <h2 className='white h3 bold'>Payback Gang</h2>
                            <p className='white xsmallCopy demiBold'>You must pay!</p>
                        </div>
                    </div>
                </div>
                <div className="row pageTab pb-5">
                    <div className="col pt-3 px-4">
                        <h2 className='h4 bold mt-3 mb-1'>Group spending</h2>
                        <div className ='card'>
                            <div className='card-body'>
                                <div className='d-flex align-items-top justify-content-between mb-3'>
                                    <div className='d-flex align-items-center'>
                                        <div className='d-flex flex-column align-items-start'>
                                            <p className='mb-2 categoryTitle categoryFood'>Food</p>
                                            <div className='textVGCard'>
                                                <h3 className="h2 bold">$64.00</h3>
                                                <p className="medium xsmallCopy">Total spending</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center align-items-center justify-content-start'>
                                        <div style={{height:'85px', width:'85px', marginTop:'-10px'}}>
                                            <Doughnut data={data} options={options} width={77} height={77} className='doughnutGraph' />
                                        </div>
                                        <div className='doughnutTextCard'>
                                            <p className='text-center h4 bold'>20%</p>
                                            <p className='text-center xtestsmallCopy medium'>paid back</p>
                                        </div>
                                    </div>
                                </div>
                                <div className ='d-flex align-items-center justify-content-between'>
                                    <div className="groupsCardIcons">
                                        <p className='bold line-height'>10/10/22</p>
                                    </div>
                                    <div className="groupsCardButton">
                                        <Link to="/pages/costBreakdown" className="demiBold px-0 line-height">View breakdown →</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='stickyBtn2'>
                            <Link to="/pages/newExpense" className="button mediumCopy btmRightBtn bold">New expense</Link>
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