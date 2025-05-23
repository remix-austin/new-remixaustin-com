export function Checkbox(props: {
    name: string;
    value: string;
    checked?: boolean;
    "aria-describedby"?: string;
}) {
    return (
        <div className="group grid size-4 grid-cols-1">
            <input
                aria-describedby={props["aria-describedby"]}
                defaultChecked={props.checked}
                id={props.value}
                name={props.name}
                type="checkbox"
                value={props.value}
            />
            <svg
                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                fill="none"
                viewBox="0 0 14 14"
            >
                <title>Checkmark</title>
                <path
                    className="opacity-0 group-has-[:checked]:opacity-100"
                    d="M3 8L6 11L11 3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                />
                <path
                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                    d="M3 7H11"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                />
            </svg>
        </div>
    );
}
