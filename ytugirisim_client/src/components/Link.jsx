import NextLink from "next/link";

const Link = ({ href, children, ...props }) => {
    // Check if the href is an external link
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);

    if (isExternal) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        );
    }

    return (
        <NextLink href={href} {...props}>
            {children}
        </NextLink>
    );
};

export default Link;
