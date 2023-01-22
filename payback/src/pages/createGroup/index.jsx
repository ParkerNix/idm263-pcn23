export const createGroup = () => {

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="createGroup">
                        <h1>Create Group</h1>
                        {/* <img src="images/groupCardImg.png"> */}
                        <h2>Group 1</h2> {/*}add edit button */}
                </div>
                    <div className="description">
                        <h3>Description</h3>
                        <div class="form-group">
                            <textarea class="form-control" rows="5" id="comment"></textarea>
                          </div>
                    </div>
                    <div className="groupMembers">
                        <h3>Groups Members (0)</h3>
                        <div class="checkbox">
                        <input
                             className='add'
                             type="checkbox"
                             min="0"
                             />
                          </div>
                          </div>
                          <div className='d-inline'>
                            <button id='submit' className="button">
                              Save Group
                            </button>
                          </div>
                    </div>

            </div>
        </div>
            </>
         );
    }