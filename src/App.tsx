import React from "react";

import Layout from "./components/layout/Layout";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
// eslint-disable-next-line @typescript-eslint/naming-convention
import NewPost from "./pages/post/NewPost";
import EditPost from "./pages/post/EditPost";
import NotFound from "./pages/not-found/NotFound";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import ModalManager from "./components/modal/ModalManager";

const App: React.FC = () => {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Layout></Layout>} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/archive" element={<NewPost />} />
					<Route path="/editpost/:postId" element={<EditPost />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
			<ModalManager />
		</div>
	);
};

export default App;
