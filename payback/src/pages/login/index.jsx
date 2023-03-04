import paybackLandingPage from '../../components/Assets/payback_landing_page.png'

export const Login= () => {

    return (
        <>
        <div className="container" id="landingPage">
        <div className="row d-flex flex-direction-column justify-content-center align-items-center" id="createPageContainer">
            <img src={paybackLandingPage} alt="back" className="paybackLogo" />
                <h1 className="h2 bold mb-4" id="h1whiteWelcome">Welcome back!</h1>
            

                    <div className="input-group d-flex justify-content-center">
                        <div clasName="logInContainer">
                            <input type="text" id="email" class="form-control mt-3" placeholder="Email*"/>
                        </div>
                    </div>

                    <div className="input-group d-flex justify-content-center">
                        <div clasName="logInContainer">
                            <input type="text" id="password" class="form-control mt-3" placeholder="Password*"/>
                        </div>
                    </div>

                    <button className="Btn bold mt-5" id="signUp">Log In</button>




                </div>
            </div>
            

            </>
         );
    }