
import { IconType } from "react-icons";

export const GradientShadowButton = ({ onClick, type,Icon,value }: { onClick?: () => void, type?: "submit" | "reset" | "button";  Icon?:IconType ,value:string }) => {
  return (
    <div className="group relative w-fit  texttransition-transform duration-300 active:scale-95">
      <button type={type} onClick={onClick} className="relative z-10 rounded-lg bg-gradient-to-r duration-300 from-violet-600 to-indigo-600 text-white font-medium  whitespace-nowrap group-hover:scale-110">
        <span className="flex justify-between items-center space-x-4  px-4 py-2 bg-slate-750 text-slate-100 font-semibold rounded-md duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80">
          {value}
         {Icon&&<Icon className="ml-2" />} 
        </span>
      </button>
      <span className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-violet-200 to-indigo-200 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-90 group-active:opacity-50" />
    </div>
  );
};

// export { Example}; 