import type { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
    name: string;
}

// TODO: Make this type-safe based on all of the <symbol id>s in /images/icons.svg
// How? No clue...
export function Icon({ name, viewBox = "0 0 64 64", ...props }: IconProps) {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <svg data-slot="icon" fill="currentColor" viewBox={viewBox} {...props}>
            <title>{`${capitalizedName} icon`}</title>
            <use href={`/icons.svg#${name}`} />
        </svg>
    );
}
