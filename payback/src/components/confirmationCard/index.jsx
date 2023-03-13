import confirmationIcon from '../../components/Assets/confirmation.png'
import venmoLogo from '../../components/Assets/venmo_logo.png'
import noteIcon from '../../components/Assets/noteIcon.png'
import close from '../../components/Assets/close.png'


export const ConfirmationCard = ({toPay}) => {

    return (
        <>
        <div className="container" id="confirmation">
            <div class="row mx-5">
                <div className="col mt-4 mb-2 mx-3 d-flex justify-content-center">
                <img src={close} alt="close" className="close" data-bs-dismiss="modal"/>
                    <h1 id="modalTitle" className="h6 bold">Payback</h1>
                </div>
            </div>

            

            <div className="col d-flex flex-column justify-content-center align-items-center mx-5">
                <img src={confirmationIcon} alt="back" className="confirmationIcon" />
                <p className="p demiBold" id="youOwe">You owe</p>
                <h1 className="h1 bold" id="owedPrice">${toPay}</h1>
                <p className="p demiBold" id="owedTo">to Megan Lam</p>
                <p className="p bold" id="paymentMethods">Payment Methods</p>
            </div>

            <div className="col d-flex flex-column justify-content-center align-items-center mx-4">
                <button className="Btn bold" id="confirmationButton">
                    Pay with <img src={venmoLogo} alt="venmo" className="venmoLogo" />
                </button>

                <button className="Btn bold" id="confirmationButtonTwo">
                    Pay with cash
                </button>

                <p className="p demiBold" id="noteIcon">Paying a different way? Leave a note <img src={noteIcon} alt="back" className="noteIcon" /></p>

            </div>
        </div>

            </>
         );
    }