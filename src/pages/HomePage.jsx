import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import bgimg1 from "../assets/images/bg-pattern-home-1.svg";
import bgimg2 from "../assets/images/bg-pattern-home-2.svg";
import bgimg3 from "../assets/images/bg-pattern-home-3.svg";
import bgimg4 from "../assets/images/bg-pattern-home-4-about-3.svg";
import bgimg5 from "../assets/images/bg-pattern-home-5.svg";
import bgimg6 from "../assets/images/bg-pattern-home-6-about-5.svg";

import quotes from "../assets/images/icon-quotes.svg";

import kady from "../assets/images/avatar-kady.jpg";
import aiysha from "../assets/images/avatar-aiysha.jpg";
import arthur from "../assets/images/avatar-arthur.jpg";

import cardImg1 from "../assets/images/icon-person.svg";
import cardImg2 from "../assets/images/icon-cog.svg";
import cardImg3 from "../assets/images/icon-chart.svg";

export function HomePage() {
	useEffect(() => {}, []);

	return (
		<section className='home-page main-layout'>
			<img className='bg-img1' src={bgimg1} />

			<div className='hero'>
				<div className='hero-header'>
					Find the
					<div>
						best <span>talent</span>
					</div>
				</div>
				<p className='hero-paragraph'>
					<div className='little-rect'></div>
					<div>Finding the right people and building high</div>
					<div>performing teams can be hard. Most companies</div>
					<div>aren’t tapping into the abundance of global talent.</div>
					<div>We’re about to change that.</div>
					<img className='bg-img2' src={bgimg2} />
				</p>
			</div>

			<div className='info'>
				<img className='bg-img' src={bgimg3} />
				<div className='info-header'>
					<div className='little-rect'></div>Build & manage distributed teams like no one else.
				</div>
				<div className='cards'>
					<div className='card flex'>
						<img src={cardImg1} />
						<div>
							<div className='card-header'>Experienced Individuals</div>
							<div className='card-content'>Our network is made up of highly experienced professionals who are passionate about what they do.</div>
						</div>
					</div>
					<div className='card flex'>
						<img src={cardImg2} />
						<div>
							<div className='card-header'>Easy to Implement</div>
							<div className='card-content'>Our processes have been refined over years of implementation meaning our teams always deliver.</div>
						</div>
					</div>
					<div className='card flex'>
						<img src={cardImg3} />
						<div>
							<div className='card-header'>Enhanced Productivity</div>
							<div className='card-content'>Our customized platform with in-built analytics helps you manage your distributed teams.</div>
						</div>
					</div>
				</div>
			</div>

			<div className='info2'>
				<img className='bg-img1' src={bgimg4} />
				<img className='bg-img2' src={bgimg5} />

				<div className='header'>
					Delivering real results for top companies. Some of our <span>success stories.</span>
				</div>
				<div className='cards'>
					<div className='card'>
						<img className='bg-img' src={quotes} />
						<div className='content'>
							“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than
							planned.”
						</div>
						<div className='name'>Kady Baker</div>
						<div className='role'>Product Manager at Bookmark</div>
						<img className='member' src={kady} />
					</div>
					<div className='card'>
						<img className='bg-img' src={quotes} />
						<div className='content'>
							“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”
						</div>
						<div className='name'>Aiysha Reese</div>
						<div className='role'>Founder of Manage</div>
						<img className='member' src={aiysha} />
					</div>
					<div className='card'>
						<img className='bg-img' src={quotes} />
						<div className='content'>
							“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first
							month.”
						</div>
						<div className='name'>Arthur Clarke</div>
						<div className='role'>Co-founder of MyPhysio</div>
						<img className='member' src={arthur} />
					</div>
				</div>
			</div>

			<div className='contact flex'>
				<img src={bgimg6} />
				<div>Ready to get started?</div>
				<button>contact us</button>
			</div>

			<div className='footer'>
				<div className='about'>
					<div className='name'>mytemam</div>
					<div className='navs'>
						<div>home</div>
						<div>about</div>
					</div>
				</div>
				<div className='loc'>987 Hillcrest Lane Irvine, CA California 92714 Call Us : 949-833-7432</div>
				<div className='coffe'>
					<div>
						<img />
						<img />
						<img />
					</div>
					<div>Copyright 2022. All Rights Reserved</div>
				</div>
			</div>
		</section>
	);
}
