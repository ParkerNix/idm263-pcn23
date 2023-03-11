import { Route, Routes, useLocation } from "react-router-dom";
import { NewExpense } from './pages/newExpense';
import { AllGroups } from './pages/allGroups';
import { CostBreakdown } from './pages/costBreakdown';
import { ViewGroup } from './pages/viewGroup';
import { Overview } from './pages/overview';
import { CreateGroup } from './pages/createGroup';
import { AddFriends } from './pages/friends';
import { SearchFriends } from './pages/searchFriends';
import { NoFriends } from './pages/noFriends';
import { Profile } from './pages/profile';
import { ViewProfile } from './pages/viewProfile';
import { FriendProfile } from './pages/friendProfile';
import { Groups } from './pages/groups';
import { EditGroup } from './pages/editgroup';
import { AddedFriend } from './pages/addedFriend';
import { MonthlyNetTotal } from './pages/monthlyNetTotal';
import { AllFriends } from './pages/allFriends';
import { MonthlyTotalSpend } from './pages/monthlyTotalSpend';
import { MonthlyTotalGain } from './pages/monthlyTotalGain';
import { Create } from './pages/create';
import { Landing } from './pages/landing';
import { Login } from './pages/login';
import { Test} from './pages/test';

// import { CostBreakdown } from './pages/costBreakdown';
// import { ViewGroup } from './pages/viewGroup';
// import { Overview } from './pages/overview';


import { ConfirmationCard} from './components/confirmationCard';
import { FriendSettings} from './components/friendSettings';
import { AddPhoto} from './components/addPhoto';
import { BlockFriend} from './components/blockFriend';


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
            	<Route path="/components/confirmationCard" element={<ConfirmationCard />}></Route>
            	<Route path="/components/friendSettings" element={<FriendSettings />}></Route>
            	<Route path="/components/blockFriend" element={<BlockFriend />}></Route>
            	<Route path="/components/addPhoto" element={<AddPhoto />}></Route>
            	<Route path="/pages/monthlyNetTotal" element={<MonthlyNetTotal />}></Route>
            	<Route path="/pages/monthlyTotalSpend" element={<MonthlyTotalSpend />}></Route>
            	<Route path="/pages/monthlyTotalGain" element={<MonthlyTotalGain />}></Route>
            	<Route path="/pages/allFriends" element={<AllFriends />}></Route>
            	<Route path="/pages/create" element={<Create />}></Route>
            	<Route path="/pages/landing" element={<Landing />}></Route>
            	<Route path="/pages/login" element={<Login />}></Route>
            	<Route path="/pages/test" element={<Test />}></Route>
				<Route path="/pages/viewProfile" element={<ViewProfile />}></Route>
			</Routes>
		</AnimatePresence>
	)
}

export default AnimatedRoutes