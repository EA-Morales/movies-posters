import { createPortal } from 'react-dom';
import CrossIcon from './icons/CrossIcon';

const Modal = ({ children, closeModal }) => {
	return createPortal(
		<div className='flex justify-center items-center fixed inset-0 p-24 bg-slate-800/60'>
			<div className='relative w-3/4 mx-auto p-4 bg-black'>
				<button
					onClick={closeModal}
					className='absolute rounded-full -top-2 -right-2 p-2 bg-netflix-primary'>
					<CrossIcon className='w-4' />
				</button>
				{children}
			</div>
		</div>,

		document.getElementById('modal-container')
	);
};

export default Modal;
