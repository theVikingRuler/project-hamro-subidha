import { forwardRef, useId } from "react";

export const Select = forwardRef(function TextInput(
    { label, className = "", id, ...props }, 
    ref
) {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
        <div className="flex flex-col gap-1 w-full">
            {label && (
                <label htmlFor={inputId} className="text-sm font-bold text-text-main">
                    {label}
                </label>
            )}
            <input
                ref={ref}
                id={inputId}
                className={`px-3 py-2 border-2 border-border-subtle rounded-md outline-none focus:ring-2 focus:ring-footer-bg ${className}`}
                {...props}
            />

            <select name="" id=""></select>
        </div>
    );
});