const ContactLink = ({
	href = "",
	ariaLabel = "Link",
	children,
}) => {
	return (
		<a href={href} target='_blank' aria-label={ariaLabel}>
			{children}
		</a>
	);
};

export default ContactLink;
