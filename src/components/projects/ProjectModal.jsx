import Close from "../../assets/svgs/Close";

const ProjectModal = ({ index = 0, data }) => {
	return (
		<dialog id={`modal_${index}`} className='modal'>
			<div className='modal-box p-2 bg-secondary'>
				<div className='modal-action m-0 cursor-pointer'>
					<form method='dialog'>
						<button className='group btn border-none p-0'>
							<Close />
						</button>
					</form>
				</div>
				<div className='modal-content flex flex-col gap-4 items-center px-3 mb-4 md:px-8 md:pb-8 text-white text-center'>
					<h4 className='font-bold text-3xl text-accent'>
						{data.name}
					</h4>
					<h6 className='font-bold text-lg'>{data.tech}</h6>
					<p className='text-primary'>{data.description}</p>
					<div className='flex gap-4 justify-center flex-col md:flex-row'>
						{data.github && (
							<a
								className='btn btn-accent'
								href={data.github}
								target='_blank'
								aria-label={`View code for ${data.name}`}
							>
								View the code
							</a>
						)}
						{data.deployed && (
							<a
								className='btn btn-accent'
								href={data.deployed}
								target='_blank'
								aria-label={`View live site for ${data.name}`}
							>
								View the live site
							</a>
						)}
					</div>
				</div>
			</div>
		</dialog>
	);
};

export default ProjectModal;
