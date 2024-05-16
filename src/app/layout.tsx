import { Header } from '@/app/Header'
import Nav from '@/app/Nav'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

const quicksand = Quicksand({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-quicksand',
})

/* current downloads (dashboard), services, uptime */

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			className={`${quicksand.variable}`}>
			<body className={`m-0 flex h-full w-full flex-col overflow-hidden p-4 text-white antialiased`}>
				<Header text={`NekoCentral`}>
					<Nav />
				</Header>
				{children}
			</body>
		</html>
	)
}
