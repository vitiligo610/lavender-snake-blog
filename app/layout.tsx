import Nav from "./Nav"
import Footer from "./Footer"
import { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: {
		default: "Snakebyte",
		template: "%s | Snakebyte",
	},
	description: "A blog by Lavender Snake",
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
		other: [
			{
				rel: "icon",
				sizes: "32x32",
				type: "image/png",
				url: "/favicon-32x32.png",
			},
			{
				rel: "icon",
				sizes: "16x16",
				type: "image/png",
				url: "/favicon-16x16.png",
			},
		],
	},
	manifest: "/site.webmanifest",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	)
}
