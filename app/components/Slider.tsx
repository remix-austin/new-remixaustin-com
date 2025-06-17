import * as SliderPrimitive from "@radix-ui/react-slider";
import { type ComponentProps, useMemo } from "react";

export function Slider({
    className,
    defaultValue,
    value,
    min = 0,
    max = 100,
    ...props
}: ComponentProps<typeof SliderPrimitive.Root>) {
    const values = useMemo(
        () =>
            Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max],
        [value, defaultValue, min, max],
    );

    return (
        <SliderPrimitive.Root
            className={["slider", className].join(" ").trim()}
            defaultValue={defaultValue}
            max={max}
            min={min}
            value={value}
            {...props}
        >
            <SliderPrimitive.Track className="slider-track">
                <SliderPrimitive.Range className="slider-range" />
            </SliderPrimitive.Track>
            {Array.from({ length: values.length }, (_, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: From shadcn source
                <SliderPrimitive.Thumb className="slider-thumb" key={index} />
            ))}
        </SliderPrimitive.Root>
    );
}
