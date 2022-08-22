import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Request from "./components/Request";
import AdminDashboard from "./components/AdminDashboard";
import { createContext, useState } from "react";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";


export const store = createContext();
function App() {


	const [user, setUser] = useState({});

	return (
		<div className="App">
			<store.Provider value={[user, setUser]}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/admin/login" element={<Login value = "Admin"/>} />
						<Route
							path="/admin/login/forgotPassword"
							element={<ForgotPassword value = "Admin"/>}
						/>
						<Route
							path="/admin/dashboard"
							element={<AdminDashboard />}
						/>
            <Route path="/user/login" element={<Login value = "User"/>} />
            <Route
							path="/user/login/forgotPassword"
							element={<ForgotPassword value = "Admin"/>}
						/>
						<Route path="/user/request" element={<Request />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</BrowserRouter>
			</store.Provider>
		</div>
	);
}

export default App;
