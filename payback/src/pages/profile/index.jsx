import backArrow from '../../components/Assets/Back arrow.png'
import backArrowWhite from '../../components/Assets/backArrowWhite.png'
import optionsIcon from '../../components/Assets/optionsDots.png'
import groupImg from '../../components/Assets/groupImg.png'
import smileySmiley from '../../components/Assets/smiley_smiley.png'
import molynaSmiley from '../../components/Assets/molyna_smiley.png'
import parkerSmiley from '../../components/Assets/parker_smiley.png'
import heartEmpty from '../../components/Assets/heartEmpty.png'

export const Profile = () => {

    return (
        <>
        <div className="container gradientContainer">
                <div className="row">
                    <div className="col mt-4 mb-2 mx-3 d-flex justify-content-between">
                        <img src={backArrowWhite} alt="back" className="topNavBack" />
                        <h1 className="h6 bold" id="profile">Profile</h1>
                        <img src={optionsIcon} alt="back" className="topNavOptions" />
                    </div>
                        <div className='d-flex flex-column align-items-center'>
                            <div className='profilePic d-flex flex-row justify-content-center'>
                            <img src={smileySmiley} alt="smiley" className="profileSmiley" />
                            <button id='addButton'></button>
                            </div>

                            <h1 className='h1 bold' id="profileName">Molyna Tep</h1>
                            <p className="p demiBold mt-2" id="profileName">@mochi</p>
                            <p className="p demiBold mt-2" id="profileFriends">24 friends</p>
                        </div>
                    </div>
                </div>

            <div className="row pageTab pb-5">
                <div className="col pt-3 px-4">
                    <div className='d-flex flex-column justify-content-center'>
                        <div className="completedTransactions">
                            <h4 className="h4 bold">Completed Transactions</h4>
                        </div>
                        
                    </div>
                </div>
            </div>
                
    
                       
            
        </>
    );

}
