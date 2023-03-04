import paybackLandingPage from '../../components/Assets/payback_landing_page.png'

export const Create= () => {

    return (
        <>
        <div className="container" id="landingPage">
        <div className="row d-flex flex-direction-column justify-content-center align-items-center" id="createPageContainer">
            <img src={paybackLandingPage} alt="back" className="paybackLogo" />
                <h1 className="h1 bold" id="h1white">Welcome!</h1>
                <h1 className="h6 demiBold mt-4" id="create">Create an Account</h1>
                
                    <div className="input-group d-flex justify-content-center">
                        <div clasName="logInContainer">
                            <input type="text" id="name" class="form-control mt-3" placeholder="Name*"/>
                        </div>
                    </div>

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

                    <div className="input-group d-flex justify-content-center">
                        <div clasName="logInContainer">
                            <input type="text" id="password" class="form-control mt-3" placeholder="Verify Password*"/>
                        </div>
                    </div>

                    <button className="Btn bold mt-5" id="signUp">Sign up</button>




                </div>
            </div>
            

            </>
         );
    }