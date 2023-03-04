import blockFriend from '../../components/Assets/blockFriend.png'
import removeFriend from '../../components/Assets/removeFriend.png'
import close from '../../components/Assets/close.png'



export const BlockFriend = () => {

    return (
        <>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

        <div className="modal-body-block">

        <div className="blockFriend">
            <div class="row mx-5">
                <div className="col mt-4 mb-2 mx-3 d-flex justify-content-center">
                    <h1 id="modalTitle" className="h6 bold">Block Megan Lam?</h1>
                </div>
            </div>

            <div className="col d-flex flex-column justify-content-center align-items-center">
                <p className="p demiBold" id="blockWarning">By blocking Megan, they will be removed as a friend and you can no longer send or receive payments from them. They will not be notified that you blocked them.</p>
            </div>

            <hr className="block"></hr>

            <div className="blockCancel">
                <div className="cancel">
                    <p className="p demibold" id="cancel">Cancel</p>
                </div>

                {/* <hr className="block2"></hr> */}

                <div className="block">
                    <p className="p bold" id="block">Block</p>
                </div>
            </div>
        </div>

        </div>

            </>
         );
    }