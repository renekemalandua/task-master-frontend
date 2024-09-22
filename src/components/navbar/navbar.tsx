import { User, CircleUser, FileCode, Settings, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Label } from "../ui/label";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div className="flex flex-row w-full justify-between h-12 z-50 top-0 border-b">
      <div className="flex items-center px-10 h-full w-6/12">
        <span className="text-2xl">Task Master</span>
      </div>

      <div className="flex justify-end items-center px-10 h-full w-6/12">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Label className="flex items-center flex-row gap-2 cursor-pointer">
              <User />
              <span className="">René Kemalandua</span>
            </Label>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="shadow-lg rounded-md">
            <Link to="/profile/1">
            <DropdownMenuItem className="flex gap-2 items-center" onClick={() => console.log("Opção 1 selecionada")}>
              
                <CircleUser/>
                Profile

            </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="flex gap-2 items-center" onClick={() => console.log("Opção 2 selecionada")}>
            <Settings/>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2 items-center" onClick={() => console.log("Opção 3 selecionada")}>
              <FileCode/>
              Terms & Privacities
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2 items-center" onClick={() => console.log("Opção 3 selecionada")}>
              <LogOut/>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
