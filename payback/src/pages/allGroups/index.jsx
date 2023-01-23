import backArrow from '../../components/Assets/Back arrow.png'
import optionsIcon from '../../components/Assets/optionsDots.png'
import groupImg from '../../components/Assets/groupImg.png'
import smileySmiley from '../../components/Assets/smiley_smiley.png'
import molynaSmiley from '../../components/Assets/molyna_smiley.png'
import parkerSmiley from '../../components/Assets/parker_smiley.png'
import heartEmpty from '../../components/Assets/heartEmpty.png'

export const AllGroups = () => {

    return (
        <>
        <div className="container">
            <div class="row">
                <div className="col mt-4 mb-2 mx-3 d-flex justify-content-between">
                    <img src={backArrow} alt="back" className="topNavBack" />
                    <h1 className="h6 bold">Groups</h1>
                    <img src={optionsIcon} alt="back" className="topNavOptions" />
                    {/* Add back arrow and 3 vertical dots */}
                </div>
            </div>

            <div className='row'>
                <div className="col mx-3">
                    <h2 className="h4 bold my-4">All Groups</h2>
                    <div>
                        <div className ='card'>
                            <div className='card-body'>
                                <div className='d-flex align-items-center justify-content-between mb-2'>
                                    <div className='d-flex align-items-center'>
                                        <div className='groupsCardImg'>
                                            <img src={groupImg} alt="groupImg" className='groupImg' />
                                            <span className="placeholder"></span>
                                        </div>
                                        <div className='ms-2'>
                                            <h1 className="h4 bold">Roomies</h1>
                                            <p className="medium">Money money money</p>
                                        </div>
                                    </div>
                                    <div className="groupsCardHeart align-self-start">
                                        <img src={heartEmpty} alt="heart" className="heartIcon" />
                                    </div>
                                </div>
                                <div className ='d-flex align-items-center justify-content-between'>
                                    <div class="groupsCardIcons">
                                        <img src={smileySmiley} className="memberIcons" alt="member1" />
                                        <img src={molynaSmiley} className="memberIcons" alt="member2" />
                                        <img src={parkerSmiley} className="memberIcons" alt="member3" />
                                    </div>
                                    <div class="groupsCardButton">
                                        <button className='demiBold'>View Group</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btmRightBtn bold">
                        Create new group
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}
