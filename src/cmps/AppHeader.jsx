import React from "react";
import { Link } from "react-router-dom";

export function AppHeader() {
	return (
		<section className='app-header main-layout'>
			<div className='header-layout'>
				<nav className='nav-links'>
					<div>myteam</div>
					<a>home</a>
					<a>about</a>
				</nav>
				<button>contact us</button>
			</div>
		</section>
	);
}
