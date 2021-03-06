import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppHeader } from "./cmps/AppHeader.jsx";
import { HomePage } from "./pages/HomePage.jsx";

export function RootCmp() {
	return (
		<section>
			<BrowserRouter>
				<AppHeader />
				<main>
					<HomePage />
					{/* <Routes>
						<Route path='/' element={<HomePage />} />
					</Routes> */}
				</main>
			</BrowserRouter>
		</section>
	);
}
