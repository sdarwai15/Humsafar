"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Input/Input";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Button from "../Button";

const RegisterModal = () => {
	const registerModal = useRegisterModal();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		setIsLoading(true);

		try {
			const res = await axios.post("/api/register", data);
			console.log(res);
			registerModal.onClose();
		} catch (error) {
			toast("Something went wrong!");
		} finally {
			setIsLoading(false);
		}
	};

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Heading
				title="Welcome to Humsafar"
				subtitle="Create an account!"
				center
			/>
			<Input
				id="email"
				label="Email"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id="name"
				label="Name"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id="password"
				label="Password"
				type="password"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
		</div>
	);

	const footerContent = (
		<div className="flex flex-col gap-4">
			<div className="relative flex items-center pt-2 opacity-50">
				<div className="flex-grow border-t border-gray-400"></div>
				<span className="mx-4 flex-shrink">or</span>
				<div className="flex-grow border-t border-gray-400"></div>
			</div>

			<Button
				outline
				small
				label="Continue with Google"
				icon={FcGoogle}
				onClick={() => {}}
			/>
			<Button
				outline
				small
				label="Continue with Github"
				icon={AiFillGithub}
				onClick={() => {}}
			/>

			<div
				className="
					text-neutral-500
					text-center
					font-light
					mt-2
				"
			>
				<div className="felx flex-row items-center gap-2">
					<div>
						Already have an account?{" "}
						<span
							className="
								w-fit 
								mx-auto 
								text-neutral-800 
								cursor-pointer 
								hover:underline
							"
							onClick={registerModal.onClose}
						>
							Login
						</span>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title="Register"
			actionLabel="Continue"
			onClose={registerModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default RegisterModal;
