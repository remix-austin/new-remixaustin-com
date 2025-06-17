import type { PropsWithChildren } from "react";

export function RadioButton(
    props: PropsWithChildren<{
        id?: string;
        name: string;
        value: string;
        checked?: boolean;
        "aria-label"?: string;
    }>,
) {
    return (
        <label htmlFor={props.id ?? props.value}>
            <input
                aria-label={props["aria-label"]}
                defaultChecked={props.checked}
                defaultValue={props.value ?? undefined}
                id={props.id ?? props.value}
                name={props.name}
                type="radio"
            />
            <span>{props.children}</span>
        </label>
    );
}
