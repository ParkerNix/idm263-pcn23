import newGroupImg from '../../components/Assets/newGroupIcon.png'
import lockIcon from '../../components/Assets/lock.png'
import allieSmiley from '../../components/Assets/allie_smiley.png'
import molynaSmiley from '../../components/Assets/molyna_smiley.png'
import parkerSmiley from '../../components/Assets/parker_smiley.png'
import joeySmiley from '../../components/Assets/joey_smiley.png'
import meganSmiley from '../../components/Assets/megan_smiley.png'

export const NewExpense = () => {

    return (
        <>
            <div className="container gradientContainer">
                <div className="row">
                    <div className="col">
                        <div className='my-4 d-flex flex-column align-items-center'>
                            <h1 className="h4 white">Payback Gang</h1>
                            <img src={newGroupImg} alt="newGroupImg" className='groupImg mt-2' />
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
                <div className="row pageTab pb-5">
                    <div className="col pt-3">
                        <div>
                            <div className='expenseSection'>
                                <div className='my-2 d-flex justify-content-between align-items-center'>
                                    <h2 className='h4 bold'>What is it?</h2>
                                    <button className='noteBtn medium'>Add a note</button>
                                </div>
                                <div class="dropdown">
                                    <button type="button" class="dropdownBtn dropdown-toggle" data-bs-toggle="dropdown">
                                        Category
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Food</a></li>
                                        <li><a class="dropdown-item" href="#">Travel</a></li>
                                        <li><a class="dropdown-item" href="#">Entertainment</a></li>
                                        <li><a class="dropdown-item" href="#">Bills</a></li>
                                        <li><a class="dropdown-item" href="#">Other</a></li>
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
                                <div class="dropdown">
                                    <button type="button" class="dropdownBtn dropdown-toggle" data-bs-toggle="dropdown">
                                        Choose Group Member
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Megan</a></li>
                                        <li><a class="dropdown-item" href="#">Molyna</a></li>
                                        <li><a class="dropdown-item" href="#">Parker</a></li>
                                        <li><a class="dropdown-item" href="#">Allie</a></li>
                                        <li><a class="dropdown-item" href="#">Joey</a></li>
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
                                <h2 className='h4 bold mb-4'>Cost Distribution</h2>
                                <label className='memberExpense'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className='d-flex align-items-center'>
                                            <img src={meganSmiley} className="memberIcons" alt="member2" />
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
                                    <div class="progress">
                                        <div class="progress-bar progressLightPurple" style={{ width: "20%" }}></div>
                                    </div>
                                </label>
                                <label className='memberExpense'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className='d-flex align-items-center'>
                                            <img src={molynaSmiley} className="memberIcons" alt="member2" />
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
                                    <div class="progress">
                                        <div class="progress-bar progressOrange" style={{ width: "20%" }}></div>
                                    </div>
                                </label>
                                <label className='memberExpense'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className='d-flex align-items-center'>
                                            <img src={parkerSmiley} className="memberIcons" alt="member2" />
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
                                    <div class="progress">
                                        <div class="progress-bar progressPink" style={{ width: "20%" }}></div>
                                    </div>
                                </label>
                                <label className='memberExpense'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className='d-flex align-items-center'>
                                            <img src={allieSmiley} className="memberIcons" alt="member2" />
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
                                    <div class="progress">
                                        <div class="progress-bar progressYellow" style={{ width: "20%" }}></div>
                                    </div>
                                </label>
                                <label className='memberExpense'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div className='d-flex align-items-center'>
                                            <img src={joeySmiley} className="memberIcons" alt="member2" />
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
                                    <div class="progress">
                                        <div class="progress-bar progressLightBlue" style={{ width: "20%" }}></div>
                                    </div>
                                </label>
                            </div>
                            <button id='submit' className="btmRightBtn bold">
                                Save Expense
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
