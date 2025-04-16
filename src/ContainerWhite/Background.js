function Background() {
	return (
		<div id="bg-wrap" className="background">
			<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
				<defs>
					<radialGradient
						id="Gradient1"
						cx="50%"
						cy="50%"
						fx="0.441602%"
						fy="50%"
						r=".5"
					>
						<animate
							attributeName="fx"
							dur="102s" // 68s * 1.5
							values="0%;3%;0%"
							repeatCount="indefinite"
						></animate>
						<stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop>
						<stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop>
					</radialGradient>
					<radialGradient
						id="Gradient2"
						cx="50%"
						cy="50%"
						fx="2.68147%"
						fy="50%"
						r=".5"
					>
						<animate
							attributeName="fx"
							dur="70.5s" // 47s * 1.5
							values="0%;3%;0%"
							repeatCount="indefinite"
						></animate>
						<stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop>
						<stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop>
					</radialGradient>
					<radialGradient
						id="Gradient3"
						cx="50%"
						cy="50%"
						fx="0.836536%"
						fy="50%"
						r=".5"
					>
						<animate
							attributeName="fx"
							dur="64.5s" // 43s * 1.5
							values="0%;3%;0%"
							repeatCount="indefinite"
						></animate>
						<stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop>
						<stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop>
					</radialGradient>
					<radialGradient
						id="Gradient4"
						cx="50%"
						cy="50%"
						fx="4.56417%"
						fy="50%"
						r=".5"
					>
						<animate
							attributeName="fx"
							dur="69s" // 46s * 1.5
							values="0%;5%;0%"
							repeatCount="indefinite"
						></animate>
						<stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop>
						<stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop>
					</radialGradient>
					<radialGradient
						id="Gradient5"
						cx="50%"
						cy="50%"
						fx="2.65405%"
						fy="50%"
						r=".5"
					>
						<animate
							attributeName="fx"
							dur="73.5s" // 49s * 1.5
							values="0%;5%;0%"
							repeatCount="indefinite"
						></animate>
						<stop offset="0%" stop-color="rgba(0,0,255, 1)"></stop>
						<stop offset="100%" stop-color="rgba(0,0,255, 0)"></stop>
					</radialGradient>
					<radialGradient
						id="Gradient6"
						cx="50%"
						cy="50%"
						fx="0.981338%"
						fy="50%"
						r=".5"
					>
						<animate
							attributeName="fx"
							dur="76.5s" // 51s * 1.5
							values="0%;5%;0%"
							repeatCount="indefinite"
						></animate>
						<stop offset="0%" stop-color="rgba(255,0,0, 1)"></stop>
						<stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop>
					</radialGradient>
				</defs>
				<rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient4)">
					<animate
						attributeName="x"
						dur="60s" // 40s * 1.5
						values="25%;0%;25%"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="y"
						dur="63s" // 42s * 1.5
						values="0%;25%;0%"
						repeatCount="indefinite"
					/>
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 50 50"
						to="360 50 50"
						dur="51s" // 34s * 1.5
						repeatCount="indefinite"
					/>
				</rect>
				<rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient5)">
					<animate
						attributeName="x"
						dur="69s" // 46s * 1.5
						values="0%;-25%;0%"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="y"
						dur="72s" // 48s * 1.5
						values="25%;-25%;25%"
						repeatCount="indefinite"
					/>
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 50 50"
						to="360 50 50"
						dur="54s" // 36s * 1.5
						repeatCount="indefinite"
					/>
				</rect>
				<rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient6)">
					<animate
						attributeName="x"
						dur="75s" // 50s * 1.5
						values="-25%;0%;-25%"
						repeatCount="indefinite"
					/>
					<animate
						attributeName="y"
						dur="78s" // 52s * 1.5
						values="0%;-25%;0%"
						repeatCount="indefinite"
					/>
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="360 50 50"
						to="0 50 50"
						dur="57s" // 38s * 1.5
						repeatCount="indefinite"
					/>
				</rect>
				<rect
					x="13.744%"
					y="1.18473%"
					width="100%"
					height="100%"
					fill="url(#Gradient1)"
					transform="rotate(334.41 50 50)"
				>
					<animate
						attributeName="x"
						dur="60s" // 40s * 1.5
						values="25%;0%;25%"
						repeatCount="indefinite"
					></animate>
					<animate
						attributeName="y"
						dur="63s" // 42s * 1.5
						values="0%;25%;0%"
						repeatCount="indefinite"
					></animate>
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 50 50"
						to="360 50 50"
						dur="21s" // 14s * 1.5
						repeatCount="indefinite"
					></animateTransform>
				</rect>
				<rect
					x="-2.17916%"
					y="35.4267%"
					width="100%"
					height="100%"
					fill="url(#Gradient2)"
					transform="rotate(255.072 50 50)"
				>
					<animate
						attributeName="x"
						dur="69s" // 46s * 1.5
						values="-25%;0%;-25%"
						repeatCount="indefinite"
					></animate>
					<animate
						attributeName="y"
						dur="72s" // 48s * 1.5
						values="0%;50%;0%"
						repeatCount="indefinite"
					></animate>
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 50 50"
						to="360 50 50"
						dur="36s" // 24s * 1.5
						repeatCount="indefinite"
					></animateTransform>
				</rect>
				<rect
					x="9.00483%"
					y="14.5733%"
					width="100%"
					height="100%"
					fill="url(#Gradient3)"
					transform="rotate(139.903 50 50)"
				>
					<animate
						attributeName="x"
						dur="75s" // 50s * 1.5
						values="0%;25%;0%"
						repeatCount="indefinite"
					></animate>
					<animate
						attributeName="y"
						dur="36s" // 24s * 1.5
						values="0%;25%;0%"
						repeatCount="indefinite"
					></animate>
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="360 50 50"
						to="0 50 50"
						dur="27s" // 18s * 1.5
						repeatCount="indefinite"
					></animateTransform>
				</rect>
			</svg>
		</div>
	);
}

export { Background };
