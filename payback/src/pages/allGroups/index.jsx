export const allGroups = () => {

    return (
        <>
           <div class="topNavigation">
            <h6>Groups</h6>
            {/* Add back arrow and 3 vertical dots */}
        </div>

        <h4>All Groups</h4>

        <div className ='groupsContainer'>
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
                <div className ='groupsCardRow'>
                    <div className ='groupsCardIcons'>
                        {/* <img src="">
                        <img src="">
                        <img src=""> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
