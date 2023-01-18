

export const NewExpense = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='my-4 d-flex flex-column'>
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
                                <select value="Megan">
                                    <option value="Megan">Megan</option>
                                    <option value="Molyna">Molyna</option>
                                    <option value="Parker">Parker</option>
                                    <option value="Allie">Allie</option>
                                    <option value="Joey">Joey</option>
                                </select>
                            </div>
                            <div className='mb-4 d-flex flex-column'>
                                <label>
                                    <div>
                                        Megan
                                        <input
                                            className='ml-2'
                                            type="number"
                                            min="0"
                                            step="0.1"
                                        />
                                        <button className='ml-2'>lock</button>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" style="width:70%"></div>
                                    </div>
                                </label>
                                <label>
                                    <div>
                                        Molyna
                                        <input
                                            className='ml-2'
                                            type="number"
                                            min="0"
                                            step="0.1"
                                        />
                                        <button className='ml-2'>lock</button>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" style="width:70%"></div>
                                    </div>
                                </label>
                                <label>
                                    <div>
                                        Parker
                                        <input
                                            className='ml-2'
                                            type="number"
                                            min="0"
                                            step="0.1"
                                        />
                                        <button className='ml-2'>lock</button>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" style="width:70%"></div>
                                    </div>
                                </label>
                                <label>
                                    <div>
                                        Allie
                                        <input
                                            className='ml-2'
                                            type="number"
                                            min="0"
                                            step="0.1"
                                        />
                                        <button className='ml-2'>lock</button>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" style="width:70%"></div>
                                    </div>
                                </label>
                                <label>
                                    <div>
                                        Joey
                                        <input
                                            className='ml-2'
                                            type="number"
                                            min="0"
                                            step="0.1"
                                        />
                                        <button className='ml-2'>lock</button>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" style="width:70%"></div>
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
