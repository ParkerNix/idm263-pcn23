import { Route, Routes, useLocation } from "react-router-dom";
import { NewExpense } from './pages/newExpense';
import { AllGroups } from './pages/allGroups';
import { CreateGroup } from './pages/createGroup';
import { AddFriends } from './pages/friends';
import { SearchFriends } from './pages/searchFriends';
import { NoFriends } from './pages/noFriends';
import { Profile } from './pages/profile';
import { FriendProfile } from './pages/friendProfile';
import { Groups } from './pages/groups';
import { EditGroup } from './pages/editgroup';
import { AddedFriend } from './pages/addedFriend';

import { CostBreakdown } from './pages/costBreakdown';
import { ViewGroup } from './pages/viewGroup';
import { Overview } from './pages/overview';

import { AnimatePresence } from "framer-motion"

function AnimatedRoutes() {
	const location = useLocation()

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Overview />}></Route>
				<Route path="/pages/allGroups" element={<AllGroups />}></Route>
				<Route path="/pages/newExpense" element={<NewExpense />}></Route>
				<Route path="/pages/createGroup" element={<CreateGroup />}></Route>
				<Route path="/pages/friends" element={<AddFriends />}></Route>
				<Route path="/pages/searchFriends" element={<SearchFriends />}></Route>
				<Route path="/pages/noFriends" element={<NoFriends />}></Route>
				<Route path="/pages/profile" element={<Profile />}></Route>
				<Route path="/pages/friendProfile" element={<FriendProfile />}></Route>
				<Route path="/pages/groups" element={<Groups />}></Route>
				<Route path="/pages/editgroup" element={<EditGroup />}></Route>
				<Route path="/pages/addedFriend" element={<AddedFriend />}></Route>
				<Route path="/pages/costBreakdown" element={<CostBreakdown />}></Route>
				<Route path="/pages/viewGroup" element={<ViewGroup />}></Route>
			</Routes>
		</AnimatePresence>
	)
}

export default AnimatedRoutes