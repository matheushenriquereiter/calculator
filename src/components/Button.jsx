import clsx from "clsx";

export const Button = ({ children, equal, operator, ce }) => {
  return (
    <button
      className={clsx(
        "button h-[64px] w-[64px] rounded-full text-[24px] active:shadow-sm",
        { "equal-button": equal },
        { "operator-button": operator },
        { "text-[#975DFA]": ce }
      )}
    >
      {children}
    </button>
  );
};
