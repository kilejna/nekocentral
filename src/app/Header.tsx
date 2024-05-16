import { NekoCentral } from '@/app/assets/NekoCentral'
import React from 'react'

type Props = {
	children: React.ReactNode
	text: string
}

export const Header = ({ children, text }: Props) => {
	const style = `font-header animate-colour-cycle absolute h-full w-full bg-[linear-gradient(_45deg,_rgb(254,_240,_138),_20%,_rgb(236,_72,_153),_60%,_rgb(79,_70,_229)_)] bg-[percentage:150%_150%] bg-clip-text text-center align-middle text-7xl leading-[192px] text-transparent blur-sm contrast-200`
	return (
		<header className={`flex h-[180px] w-full flex-col`}>
			<div className={`relative h-[126px] w-full`}>
				<span className={`${style}`}>{text}</span>
				<span className={`${style}`}>{text}</span>
				<span className={`font-header absolute h-full w-full text-center align-middle text-7xl leading-[200px] text-white`}>{text}</span>
			</div>
			<nav className={`font-quicksand absolute flex h-[180px] w-full justify-center gap-4 text-center align-middle leading-none`}>
				<button className={`group relative inline-flex h-fit items-center justify-center self-end overflow-hidden rounded-full p-0.5`}>
					<span
						className={`animate-spin-slow absolute h-[150%] w-full rounded-full bg-[conic-gradient(_rgb(254,_240,_138),_rgb(236,_72,_153),_rgb(79,_70,_229)_)] blur transition-all duration-200 ease-linear group-hover:h-[200%] group-hover:contrast-150`}></span>
					<span
						className={`relative rounded-full bg-[radial-gradient(ellipse_at_center,#1f2033_20%,#1b1c2d)] px-4 py-2 text-center align-middle text-[#f9f9fa] transition-all duration-200 ease-linear group-hover:text-white group-hover:brightness-125`}>
						Home
					</span>
				</button>
				<button className={`group relative inline-flex h-fit items-center justify-center self-end overflow-hidden rounded-full p-0.5`}>
					<span
						className={`animate-spin-slow absolute h-[150%] w-full rounded-full bg-[conic-gradient(_rgb(254,_240,_138),_rgb(236,_72,_153),_rgb(79,_70,_229)_)] blur transition-all duration-200 ease-linear group-hover:h-[200%] group-hover:contrast-150`}></span>
					<span
						className={`relative rounded-full bg-[radial-gradient(ellipse_at_center,#1f2033_20%,#1b1c2d)] px-4 py-2 text-center align-middle text-[#f9f9fa] transition-all duration-200 ease-linear group-hover:text-white group-hover:brightness-125`}>
						Services
					</span>
				</button>
				<NekoCentral />
				<button className={`group relative inline-flex h-fit items-center justify-center self-end overflow-hidden rounded-full p-0.5`}>
					<span
						className={`animate-spin-slow absolute h-[150%] w-full rounded-full bg-[conic-gradient(_rgb(254,_240,_138),_rgb(236,_72,_153),_rgb(79,_70,_229)_)] blur transition-all duration-200 ease-linear group-hover:h-[200%] group-hover:contrast-150`}></span>
					<span
						className={`relative rounded-full bg-[radial-gradient(ellipse_at_center,#1f2033_20%,#1b1c2d)] px-4 py-2 text-center align-middle text-[#f9f9fa] transition-all duration-200 ease-linear group-hover:text-white group-hover:brightness-125`}>
						Wiki
					</span>
				</button>
				<button className={`group relative inline-flex h-fit items-center justify-center self-end overflow-hidden rounded-full p-0.5`}>
					<span
						className={`animate-spin-slow absolute h-[150%] w-full rounded-full bg-[conic-gradient(_rgb(254,_240,_138),_rgb(236,_72,_153),_rgb(79,_70,_229)_)] blur transition-all duration-200 ease-linear group-hover:h-[200%] group-hover:contrast-150`}></span>
					<span
						className={`relative rounded-full bg-[radial-gradient(ellipse_at_center,#1f2033_20%,#1b1c2d)] px-4 py-2 text-center align-middle text-[#f9f9fa] transition-all duration-200 ease-linear group-hover:text-white group-hover:brightness-125`}>
						Placeholder
					</span>
				</button>
			</nav>
		</header>
	)
}
