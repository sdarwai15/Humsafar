import Modal from "../components/Modals/Modal";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
	return (
		<div>
			<Modal isOpen />
			<Navbar />
		</div>
	);
}
