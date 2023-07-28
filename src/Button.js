import className from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const finalClassName = className(
    rest.className,
    "flex gap-1 flex-row items-center px-3 py-1.5",
    {
      "bg-sky-400 border-sky-600 hover:bg-sky-300": primary,
      "bg-cyan-400 border-cyan-600 hover:bg-cyan-300": secondary,
      "bg-green-400 border-green-600 hover:bg-green-300": success,
      "bg-yellow-400 border-yellow-600 hover:bg-yellow-300": warning,
      "bg-red-400 border-red-600 hover:bg-red-300": danger,
      "border-2 hover:text-black bg-white": outline,
      "text-sky-400": outline && primary,
      "text-cyan-400": outline && secondary,
      "text-green-400": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-400": outline && danger,
      "text-white border": !outline,
      "rounded-full": rounded,
    }
  );
  return (
    <button {...rest} className={twMerge(finalClassName)}>
      {children ? children : "Hello"}
    </button>
  );
}

Button.propTypes = {
  checkVariation: ({ primary, secondary, success, warning, danger }) => {
    const count = Number(
      !!primary +
        Number(!!secondary) +
        Number(!!success) +
        Number(!!warning) +
        Number(!!danger)
    );

    if (count > 1) {
      return new Error(
        "only one of primary, secondary, success, warning or danger can be true"
      );
    }
  },
};
export default Button;
