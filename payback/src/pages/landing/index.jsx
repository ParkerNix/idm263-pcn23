import paybackLandingPage from '../../components/Assets/payback_landing_page.png'

export const Landing = () => {

    return (
        <>
        <div className="container" id="landingPage">
        <div className="row d-flex flex-direction-column justify-content-center align-items-center" id="landingPageContainer">
            <img src={paybackLandingPage} alt="back" className="paybackLogo" />
                <h1 className="h1 bold" id="h1white">Payback</h1>
                <h1 className="h6 demiBold mt-2" id="catchPhrase">spend better, <span id="split">split better.</span></h1>
                <button className="Btn bold" id="create">Create an account</button>
                <button className="Btn bold mt-1" id="login">Login</button>
                </div>
            </div>
            

            </>
         );
    }