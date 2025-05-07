import type { FC, HTMLAttributeAnchorTarget, ReactNode } from "react";
import type { To } from "react-router";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

type LinkButtonProps = {
    to: To;
    target?: HTMLAttributeAnchorTarget;
    children: ReactNode;
    className?: string;
};

const LinkButton: FC<LinkButtonProps> = ({ to, target = "_self", children, className }) => {
    return (
        <Link
            className={twMerge(
                "rounded-md bg-(--color-button-bg) px-6 py-4 font-bold text-(--color-button-text) text-lg",
                className,
            )}
            target={target}
            to={to}
        >
            {children}
        </Link>
    );
};

export default LinkButton;
