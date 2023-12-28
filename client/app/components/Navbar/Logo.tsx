"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Bai_Jamjuree } from "next/font/google";

const LogoFont = Bai_Jamjuree({
	weight: ["200", "300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

const Logo = () => {
	const router = useRouter();
	return (
		<div
			className={`
				hidden 
				md:flex 
				items-start
				justify-between
				gap-1
				cursor-pointer
				${LogoFont.className}
			`}
		>
			<Image src={"/logo.png"} width={45} height={45} alt="Logo" />
			<div>
				<h1
					className="
						text-lg
						text-primary
						font-semibold
					"
				>
					Humsafar
				</h1>
				<p
					className="
						text-sm
						text-primary
						mt-[-3px]
					"
				>
					Vasudhaiva Kutumbakam
				</p>
			</div>
		</div>
	);
};

export default Logo;
