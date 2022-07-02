import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import CrossIcon from './icons/CrossIcon';

const Modal = ({ children, closeModal }) => {
	useEffect(() => {
		document.body.classList.add('overflow-y-hidden');

		return () => document.body.classList.remove('overflow-y-hidden');
	}, []);
	return createPortal(
		<div className='flex justify-center items-center fixed inset-0 bg-slate-800/60'>
			<div className='relative max-w-2xl mx-auto p-6 bg-black'>
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
