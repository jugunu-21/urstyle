
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
type dropdownmenuprops = {
  item: string[], 
  trigger: () => JSX.Element,
   label: string, 
}
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { useToken } from "@/components/authentications/auth-utils/helpers/zustand";
import { app } from "@/app/config"
import { getAuth } from "firebase/auth";
import Cookies from 'js-cookie';

export function DropDownMenu({ item, label, trigger }: dropdownmenuprops) {
  const itemsLength = item.length;
  const router=useRouter()
  const jwtToken = useToken().token
  const auth = getAuth(app)
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Cookies.remove('jwtToken', { path: '/' });
        console.log("Signed out successfully and session cookie cleared");
        router.push("/")
          console.log("jwttoken",jwtToken)
        toast.success("successfully sign Out");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  return (
<>
    <DropdownMenu>
      <DropdownMenuTrigger >
          {trigger()}  
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {item.map((item, i) => {
          return (<>
          <DropdownMenuItem onClick={()=>{
            if(item==="Home"){
              router.push("/")
            }
            if(item==="Logout"){
              handleLogout();
            }
          }}>{item}</DropdownMenuItem>
          {i !== itemsLength - 1 && <DropdownMenuSeparator />}
          </>);
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  
</>
  )
}

