
import { Button } from "@/components/ui/button"
import {useLogout} from "@/components/authentications/sign-out/sign-out";
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
export function DropDownMenu({ item, label, trigger }: dropdownmenuprops) {
  const itemsLength = item.length;
  const router=useRouter()
  const logout = useLogout();
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
              logout();
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

