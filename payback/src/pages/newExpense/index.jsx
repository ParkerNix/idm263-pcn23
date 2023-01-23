

export const NewExpense = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='my-4 d-flex flex-column'>
                            <h1>Payback Gang</h1>
                            <label>
                              Total Cost
                              <input
                                className='ml-2'
                                type="number"
                                min="0"
                                step="0.1"
                              />
                            </label>
                        </div>
                        <div>
                            <div className='mb-4'>
                                <h2>What is it?</h2>
                                <button>Add a note</button>
                                <div class="dropdown">
                                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
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
                                <select value="Other">
                                    <option value="Food">Food</option>
                                    <option value="Travel">Travel</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Bills">Bills</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className='mb-4'>
                                <h2>Who covered the bill?</h2>
                                <div class="dropdown">
                                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
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
                                <select value="Megan">
                                    <option value="Megan">Megan</option>
                                    <option value="Molyna">Molyna</option>
                                    <option value="Parker">Parker</option>
                                    <option value="Allie">Allie</option>
                                    <option value="Joey">Joey</option>
                                </select>
                            </div>
                            <div className='mb-4'>
                                <h2>How is it split?</h2>
                                <div>
                                    <button>Manual</button>
                                    <button>Percentage</button>
                                </div>
                            </div>
                            <div className='mb-4 d-flex flex-column'>
                                <h2>Cost Distribution</h2>
                                <label>
                                    <div>
                                        <h3>Megan</h3>
                                        <button className='ml-2'>lock</button>
                                        <input
                                            className='ml-2'
                                            type="number"
                                            min="0"
                                            step="0.1"
                                        />
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" style={{ width: "70%" }}></div>
                                    </div>
                                </label>
                                <label>
                                    <div>
                                        <h3>Molyna</h3>
                                        <button className='ml-2'>lock</button>
                                        <input
                                            className='ml-2'
                                            type="number"
                                            min="0"
                                            step="0.1"
                                        />
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" style={{ width: "70%" }}></div>
                                    </div>
                                </label>
                                <label>
                                    <div>
                                        <h3>Parker</h3>
                                        <button className='ml-2'>lock</button>
                                        <input
                                            className='ml-2'
                                            type="number"
                                            min="0"
                                            step="0.1"
                                        />
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" style={{ width: "70%" }}></div>
                                    </div>
                                </label>
                                <label>
                                    <div>
                                        <h3>Allie</h3>
                                        <button className='ml-2'>lock</button>
                                        <input
                                            className='ml-2'
                                            type="number"
                                            min="0"
                                            step="0.1"
                                        />
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" style={{ width: "70%" }}></div>
                                    </div>
                                </label>
                                <label>
                                    <div>
                                        <h3>Joey</h3>
                                        <button className='ml-2'>lock</button>
                                        <input
                                            className='ml-2'
                                            type="number"
                                            min="0"
                                            step="0.1"
                                        />
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" style={{ width: "70%" }}></div>
                                    </div>
                                </label>
                            </div>
                            <div className='d-inline'>
                              <button id='submit' className="button">
                                Save Expense
                              </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
