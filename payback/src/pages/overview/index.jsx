
import woohooSmiley from '../../components/Assets/woohoo_smiley.png'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    datasets: [
        {
            data: [0, 1],
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

export const Overview = () => {

    return (
        <>
            <div className="container gradientContainerCB">
                <div class="row justify-content-center">
                    <div className="col mt-4 mb-3 mx-3 d-flex justify-content-center align-items-center">
                        <h1 className="h6 bold white">Overview</h1>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='overviewButtonsActive'>Your Balance</button>
                        <button className='overviewButtons'>Friends in Debt</button>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <div style={{height:'231px',width:'231px'}}>
                            <Doughnut data={data} options={options} width={231} height={231} className='doughnutGraph' />
                        </div>
                        <div className='doughnutTextOverview'>
                            <p className='text-center white h1 bold'>$0.00</p>
                            <p className='text-center white largeCopy demiBold lineHeight64'>you owe</p>
                        </div>
                    </div>
                </div>
                <div className="row pageTab mt-5 pb-5">
                    <div className="col pt-3 px-4">
                        <div>
                            <div className='expenseSection mt-2'>
                                <div className='d-flex justify-content-between align-items-center mb-3'>
                                    <h2 className='h3 bold'>Oustanding balances</h2>
                                </div>
                            </div>
                            <div className='d-flex flex-column align-items-center'>
                                <img src={woohooSmiley} className="woohooSmiley mb-3" alt="Smiley" />
                                <h3 className='bold'>Woohoo!</h3>
                                <p className='mediumCopy medium mb-3'>All balances are cleared!</p>
                                <button className='mediumCopy bold'>Create a new expense</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}