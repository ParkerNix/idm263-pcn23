import backArrow from '../../components/Assets/Back arrow.png'
import optionsIcon from '../../components/Assets/optionsDots.png'
import groupImg from '../../components/Assets/groupImg.png'
import smileySmiley from '../../components/Assets/smiley_smiley.png'
import molynaSmiley from '../../components/Assets/molyna_smiley.png'
import parkerSmiley from '../../components/Assets/parker_smiley.png'
import allieSmiley from '../../components/Assets/allie_smiley.png'
import joeySmiley from '../../components/Assets/joey_smiley.png'
import meganSmiley from '../../components/Assets/megan_smiley.png'
import heartEmpty from '../../components/Assets/heartEmpty.png'
import editIcon from '../../components/Assets/editIcon.png'
import search from '../../components/Assets/search.png'
import link from '../../components/Assets/link.png'
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navExpenseDefault from '../../components/Assets/new_expense_default.svg'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'
import navOverviewActive from '../../components/Assets/nav_overview_active.png'
import navMonthlyActive from '../../components/Assets/nav_monthly_active.png'
import navExpenseActive from '../../components/Assets/nav_expense_active.png'
import navGroupsActive from '../../components/Assets/nav_groups_active.png'
import navProfileActive from '../../components/Assets/nav_profile_active.png'
import searchFriends from '../../components/Assets/searchFriends.png'
import { Link, useNavigate } from 'react-router-dom';
import optionsIconHorizontal from '../../components/Assets/purpleDotsHorizontal.png'

import { FriendSettings } from '../../components/friendSettings'
import { BlockFriend } from '../../components/blockFriend'

export const AllFriends = () => {

    return (
        <>
        <div className="container">
        <div class="row mb-4">
                <div className="col mt-4 mx-3 d-flex justify-content-between">
                    <Link to="/pages/editGroup">
                        <img src={backArrow} alt="back" className="topNavBack" />
                    </Link>
                    <h1 id="friendsTitle" className="h6 bold">Friends</h1>
                    <div className="navSpacer"></div>
                </div>
            </div>
            <div className="row">
                <div className="col mb-4">
                    <div className="searchFriends d-flex flex-row justify-content-between">
                        <Link to="/pages/noFriends" className="d-flex demiBold">
                            <input type="text" id="searchForm" class="form-control" placeholder="Search for friends" style={
                                {
                                    paddingLeft: 25,
                                    background: `url(${search}) no-repeat left`,
                                    backgroundSize: 20,
                                }
                            }/>
                        </Link>
                        <button className="searchButton my-0">
                            <img src={link} alt="link" className="link" />Invite
                        </button>
                    </div>
                </div>
                        <div className="friendsList">
                            <h3 className="h6 bold mb-3" id="yourFriends">Your Friends</h3>
                            <div className="row d-flex flex-row justify-content-center">

                                <div className="friendsRow d-flex flex-row justify-content-between">
                                    <div className="friendsName d-flex flex-row">
                                    <img src={allieSmiley} alt="smiley" className="smiley"/>
                                    <p className="p demiBold" id="friendName">Allie Drake</p>
                                    </div>
                                        <div className="friendsCheck">
                                            <img src={optionsIconHorizontal} alt="options" className="options" data-bs-toggle="modal" data-bs-target="#myModal"/>
                                    </div>
                                </div>
                                <hr className="allFriends"></hr>
                                
                                <div className="friendsRow d-flex flex-row justify-content-between">
                                    <div className="friendsName d-flex flex-row">
                                    <img src={allieSmiley} alt="smiley" className="smiley"/>
                                    <p className="p demiBold" id="friendName">Joey McQuillan</p>
                                    </div>
                                        <div className="friendsCheck">
                                        <img src={optionsIconHorizontal} alt="options" className="options" data-bs-toggle="modal" data-bs-target="#myModal"/>
                                    </div>
                                </div>
                                <hr className="allFriends"></hr>

                                <div className="friendsRow d-flex flex-row justify-content-between">
                                    <div className="friendsName d-flex flex-row">
                                    <img src={allieSmiley} alt="smiley" className="smiley"/>
                                    <p className="p demiBold" id="friendName">Megan Lam</p>
                                    </div>
                                        <div className="friendsCheck">
                                        <img src={optionsIconHorizontal} alt="options" className="options" data-bs-toggle="modal" data-bs-target="#myModal"/>
                                    </div>
                                </div>
                                <hr className="allFriends"></hr>

                            </div>
                        </div>
                    </div>
                </div>

                 {/* FRIEND SETTINGS MODAL */}
                                                    
                 <div className="modal" id="myModal">
                                <div class="modal-dialog">
                                    <FriendSettings/>
                                </div>
                            </div>



                            <div className="navbar">
            <div className="navStack">
                <Link to='/' className="bold d-flex flex-column align-items-center">
                    <img src={navOverviewDefault} className="navIcons" alt="overview" />

                    Overview
                </Link>
            </div>
            <div className="navStack">
                <Link to='/pages/monthlyNetTotal' className="bold d-flex flex-column align-items-center">
                <img src={navMonthlyDefault} className="navIcons" alt="monthly" />
                Monthly
                </Link>
            </div>
            <div className="navStack">
                <Link to='/pages/allGroups' className="bold d-flex flex-column align-items-center">
                    <img src={navExpenseDefault} className="navIcons" alt="expense" />
                    Expense
                </Link>
            </div>
            <div className="navStack active">
                <Link to='/pages/groups' className="bold d-flex flex-column align-items-center">
                    <img src={navGroupsDefault} className="navIcons" alt="groups" />
                    <img src={navGroupsActive} className="navIcons" alt="groups" id="active" />
                    Groups
                </Link>
            </div>
            <div className="navStack">
                <Link to='/pages/profile' className="bold d-flex flex-column align-items-center">
                    <img src={navProfileDefault} className="navIcons" alt="profile" />
                    Profile
                </Link>
            </div>
        </div> 

            </>
         );
    }


    