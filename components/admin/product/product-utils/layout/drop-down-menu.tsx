
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { handleLogout } from "@/components/authentications/auth-utils/helpers/log-out";
import { useToken } from "@/components/authentications/auth-utils/helpers/zustand";
type dropdownmenuprops = {
  item: (string | JSX.Element)[],
  trigger: () => JSX.Element,
  label: string,
}

export function DropDownMenu({ item, label, trigger }: dropdownmenuprops) {
  const itemsLength = item.length;
  const router = useRouter()
  const changeToken = useToken((state) => (state.changeToken));
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
              <DropdownMenuItem onClick={() => {
                if (item === "Home") {
                  router.push("/")
                }
                else {
                  Cookies.remove('jwtToken', { expires: 0 })
                  router.push("/")
                  changeToken('')
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

