type Props = {}

const Nav = (props: Props) => {
	return (
		<>
			<button className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5`}>
				<span
					className={`animate-spin-slow absolute h-[150%] w-full rounded-full bg-[conic-gradient(_rgb(254,_240,_138),_rgb(236,_72,_153),_rgb(79,_70,_229)_)] blur transition-all duration-200 ease-linear group-hover:h-[200%] group-hover:contrast-150`}></span>
				<span
					className={`relative rounded-full bg-[radial-gradient(ellipse_at_center,#1f2033_20%,#1b1c2d)] px-4 py-2 text-center align-middle text-[#f9f9fa] transition-all duration-200 ease-linear group-hover:text-white group-hover:brightness-125`}>
					Home
				</span>
			</button>
			<button className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5`}>
				<span
					className={`animate-spin-slow absolute h-[150%] w-full rounded-full bg-[conic-gradient(_rgb(254,_240,_138),_rgb(236,_72,_153),_rgb(79,_70,_229)_)] blur transition-all duration-200 ease-linear group-hover:h-[200%] group-hover:contrast-150`}></span>
				<span
					className={`relative rounded-full bg-[radial-gradient(ellipse_at_center,#1f2033_20%,#1b1c2d)] px-4 py-2 text-center align-middle text-[#f9f9fa] transition-all duration-200 ease-linear group-hover:text-white group-hover:brightness-125`}>
					Services
				</span>
			</button>
			<button className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5`}>
				<span
					className={`animate-spin-slow absolute h-[150%] w-full rounded-full bg-[conic-gradient(_rgb(254,_240,_138),_rgb(236,_72,_153),_rgb(79,_70,_229)_)] blur transition-all duration-200 ease-linear group-hover:h-[200%] group-hover:contrast-150`}></span>
				<span
					className={`relative rounded-full bg-[radial-gradient(ellipse_at_center,#1f2033_20%,#1b1c2d)] px-4 py-2 text-center align-middle text-[#f9f9fa] transition-all duration-200 ease-linear group-hover:text-white group-hover:brightness-125`}>
					Wiki
				</span>
			</button>
		</>
	)
}

export default Nav
