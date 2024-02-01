export const keyUpHandler = (
  e: React.KeyboardEvent,
  ref: React.RefObject<HTMLTextAreaElement>
) => {
  const textarea = ref.current;

  if (!textarea) return;

  textarea.style.height = "auto";

  const scrollHeight = (e.target as HTMLTextAreaElement).scrollHeight;
  textarea.style.maxHeight = "300px";
  textarea.style.height = scrollHeight + "px";
};
