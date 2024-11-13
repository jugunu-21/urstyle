
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
import { handleLogout } from "@/components/authentications/sign-out/sign-out"
export function DropDownMenu({ item, label, trigger }: dropdownmenuprops) {
  const itemsLength = item.length;
  const router = useRouter()
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
                if (item === "Logout") {
                  handleLogout(router);
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

