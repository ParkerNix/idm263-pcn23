import backArrowWhite from '../../components/Assets/backArrowWhite.png'
import note from '../../components/Assets/note.png'
import React from 'react';
import circlePink from '../../components/Assets/circlePink.png'
import circleDarkPurple from '../../components/Assets/circleDarkPurple.png'
import circleYellow from '../../components/Assets/circleYellow.png'
import circleOrange from '../../components/Assets/circleOrange.png'
import checkCostBreakdown from '../../components/Assets/checkCostBreakdown.png'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ConfirmationCard } from '../../components/confirmationCard'

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

    return (
        <>
            <div className="container gradientContainerCB">
                <div class="row justify-content-center">
                    <div className="col mt-4 mb-3 mx-3 d-flex justify-content-between align-items-center">
                        <img src={backArrowWhite} alt="back" className="topNavBack" />
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
                                <div class="d-flex align-items-start">
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
                            <button id='submit' data-bs-toggle="modal" data-bs-target="#myModal" className="btmRightBtn bold">
                                Payback
                            </button>
                        </div>
                    </div>
                </div>


                 {/* CONFIRMATION */}

                 <div className="modal" id="myModal">
                    <div class="modal-dialog">
        
                    

                        <ConfirmationCard/>

                    </div>
                    </div>

            </div>




        </>
    )
}