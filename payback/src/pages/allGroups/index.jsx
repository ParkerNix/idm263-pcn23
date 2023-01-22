export const allGroups = () => {

    return (
        <>
           <div class="topNavigation">
            <h6>Groups</h6>
            {/* Add back arrow and 3 vertical dots */}
        </div>

        <div className='allGroupsPage'>

            <div className='allGroupsPageHeader'>  
                <h4>All Groups</h4> 
            </div>
        

            <div className ='container'>
                <div className ='groupsCard'>
                    <div className = 'groupsCardRow'>
                        <div className ='groupsCardImg'>
                            {/* <img src="images/groupsCardImg.png" alt="groupImg"> */}
                        </div>
                        <div class='groupsCardInfo'>
                            <h4>Roomies</h4>
                            <p>Money money money</p>
                        </div>
                        <div className ='groupsCardHeart'>
                            {/* <img src="images/groupsCardHeart.png" alt="heart"> */}
                        </div>
                    </div>
                    <div className ='groupsCardRowTwo'>
                        <div class="groupsCardIcons">
                            {/* <img id="smileySmiley" src="images/smiley_smiley.png">
                            <img id="molynaSmiley" src="images/molyna_smiley.png">
                            <img id="parkerSmiley" src="images/parker_smiley.png"> */}
                        </div>
                        <div class="groupsCardButton">
                        <button>View Group</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
