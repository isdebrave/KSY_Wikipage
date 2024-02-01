import React, { forwardRef } from "react";

import { keyUpHandler } from "../helpers/keyUpHandler";

interface TextareaProps {
  placeholder: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  value?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ placeholder, setValue, value }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={2}
        className="p-2 w-full resize-none outline-none overflow-auto focus:border focus:border-sky-500"
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={(e) =>
          keyUpHandler(e, ref as React.RefObject<HTMLTextAreaElement>)
        }
        value={value}
      ></textarea>
    );
  }
);
Textarea.displayName = "Textarea";

export default Textarea;
