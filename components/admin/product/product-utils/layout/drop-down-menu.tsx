
import { Button } from "@/components/ui/button"
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
  return (
<>
    <DropdownMenu>
      <DropdownMenuTrigger >
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          {trigger()}   </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {item.map((item, i) => {
          return (<>
          <DropdownMenuItem>{item}</DropdownMenuItem>
          {i !== itemsLength - 1 && <DropdownMenuSeparator />}
          </>);
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  
</>
  )
}

