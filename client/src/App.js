import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Request from "./components/Request";
import AdminDashboard from "./components/AdminDashboard";
import { createContext, useState } from "react";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import UserInterface from './components/UserInterface';
import ApplicationStatus from "./components/ApplicationStatus"; 	
import Signup from "./components/Signup";
import ApplicationStatusAll from "./components/ApplicationStatusAll";
import ShowAllApplications from "./components/ShowAllApplications";


export const store = createContext();
function App() {
	const [user, setUser] = useState({});

	return (
		<div className="App">
			<store.Provider value={[user, setUser]}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} exact />
						<Route
							path="/admin/login"
							element={<Login value="Admin" />}
						/>
						<Route
							path="/admin/login/forgotPassword"
							element={<ForgotPassword value="Admin" />}
						/>
						<Route
							path="/admin/dashboard"
							element={<AdminDashboard />}
						/>
						<Route
							path="/user/dashboard"
							element={<UserInterface />}
						/>
						<Route
							path="/user/login"
							element={<Login value="User" />}
						/>
						<Route
							path="/user/signup"
							element={<Signup value = "User"/>}
						/>
						<Route
							path="/user/login/forgotPassword"
							element={<ForgotPassword value="Admin" />}
						/>
						<Route path="/user/request" element={<Request />} />
						<Route path="/user/application_status" element={<ApplicationStatus />} />
						<Route path="/user/all_applications" element={<ShowAllApplications />} />
						<Route path="/admin/all_applications" element={<ApplicationStatusAll />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</BrowserRouter>
			</store.Provider>
		</div>
	);
}

export default App;
