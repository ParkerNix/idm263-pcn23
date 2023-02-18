import backArrow from '../../components/Assets/Back arrow.png'
import backArrowWhite from '../../components/Assets/backArrowWhite.png'
import optionsIcon from '../../components/Assets/optionsDots.png'
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navExpenseDefault from '../../components/Assets/nav_expense_default.png'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'
import smileySmiley from '../../components/Assets/smiley_smiley.png'
import monthlyArrow from '../../components/Assets/monthlyArrow.png'
import monthlySwipe from '../../components/Assets/monthlySwipe.png'
import optionsIconWhite from '../../components/Assets/optionsIconWhite.png'
import dropDownArrow from '../../components/Assets/dropDownArrow.png'

export const MonthlyTotalSpend = () => {

    return (
        <>
        <div className="gradientContainer">
            <div className="row">
                <div className="col mt-4 mb-2 mx-3 d-flex justify-content-between">
                    {/* <img src={backArrowWhite} alt="back" className="topNavBack" /> */}
                    <h1 className="h6 bold" id="monthly">Monthly</h1>
                    <img src={optionsIconWhite} alt="back" className="topNavOptionsWhite" />
                 </div>

                <div className='d-flex flex-column align-items-center'>
                    <p className="p demiBold mb-2" id="netTotal">Entertainment</p>
                    <h2 className="h2 bold" id="netTotalNumber">$21.37</h2>

                    <h4 className="h4 bold" id="totalSpend">Total Spend - $133.60</h4>


                    {/* <img src={monthlySwipe} alt="back" className="monthlySwipe" /> */}
                    {/* Monthly swipe arrow */}
    
                   
                </div>
            </div>
        

            <div className="pageTab">
                <div className="col px-4">
                        <h4 className="h4 bold" id="transactionsHeader">Category <img src={dropDownArrow} alt="down" className="dropDownArrow" /></h4>
                            <div className="d-flex flex-column" id="monthlyCard">
                                <div className="d-flex justify-content-between">
                                    <div className="transactionInfo d-flex flex-column justify-content-center">
                                        <p className="p demiBold" id="youPaid">You paid Allie</p>
                                        <h2 className="h2 bold" id="monthlyAmount">-$18.50</h2>
                                    </div>
                                </div>

                                <div className="transactionInfo d-flex flex-row justify-content-between">
                                    <div className="tag">
                                        <p className="p demiBold" id="entertainmentTag">Entertainment</p>
                                    </div>
                                    <div className="d-flex flex-column justify-content-right">
                                    <h6 className="h6 bold" id="monthlyDate">10/28/22</h6>
                                    <p className="p demibold" id="viewGroup">View Payback Gang<img src={monthlyArrow} className="monthlyArrow" alt="monthlyArrow" /></p>    
                                    </div>
                                </div>
                            </div>


                            <div className="d-flex flex-column mt-3" id="monthlyCard">
                                <div className="d-flex justify-content-between">
                                    <div className="transactionInfo d-flex flex-column justify-content-center">
                                        <p className="p demiBold" id="youPaid">You paid Parker</p>
                                        <h2 className="h2 bold" id="monthlyAmount">-$2.87</h2>
                                    </div>
                                </div>

                                <div className="transactionInfo d-flex flex-row justify-content-between">
                                    <div className="tag">
                                        <p className="p demiBold" id="entertainmentTag">Entertainment</p>
                                    </div>
                                    <div className="d-flex flex-column justify-content-right">
                                    <h6 className="h6 bold" id="monthlyDate">10/28/22</h6>
                                    <p className="p demibold" id="viewGroup">View Roomies<img src={monthlyArrow} className="monthlyArrow" alt="monthlyArrow" /></p>    
                                    </div>
                                </div>
                            </div>
                            
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
