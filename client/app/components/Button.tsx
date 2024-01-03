// prettier-ignore
"use client";

import { IconType } from "react-icons/";

interface ButtonProps {
	label: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	outline?: boolean;
	small?: boolean;
	icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	disabled,
	outline,
	small,
	icon: Icon,
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`
                relative
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-lg
                hover:opacity-80
                transition
                w-full
				py-3
                ${
					outline
						? "bg-white border-black text-black"
						: "bg-primary border-primary text-white"
				}
                ${
					small
						? "px-4 text-sm font-light border-[1px]"
						: "px-6 text-md font-semibold border-2"
				}
            `}
		>
			{Icon && (
				<Icon
					className={`
                        absolute
                        left-4
                        top-3
                    `}
					size={20}
				/>
			)}
			{label}
		</button>
	);
};

export default Button;
