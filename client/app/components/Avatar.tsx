"use client";

import Image from "next/image";

const Avatar = () => {
	return (
		<Image
			src={"/placeholder.jpg"}
			width={30}
			height={30}
			alt="Avatar"
			className="rounded-full"
		/>
	);
};

export default Avatar;
