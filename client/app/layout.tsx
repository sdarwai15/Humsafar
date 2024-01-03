import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import ToasterProvider from "./providers/ToasterProvider";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Humsafar",
	description: "Built to ease your travel experience.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className} suppressHydrationWarning>
				<ToasterProvider />
				{children}
			</body>
		</html>
	);
}
