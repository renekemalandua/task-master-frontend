import { Users, LayoutDashboard, ListCheck, LucideShieldEllipsis} from "lucide-react";
import { Link } from "react-router-dom";
import SetThemeMode from "../setThemeMode/setThemeMode";

export function LeftBar() {
  return (
    <div className="h-[calc(100vh-48px)]  top-0 w-16 flex flex-col justify-center">
      <div className="flex flex-col h-5/6 gap-12 justify-center py-10 px-5  border-r">
          <Link to="/">
            <div className="w-full flex flex-row gap-2 cursor-pointer">
                <LayoutDashboard className="size-6"/>
                
            </div>
          </Link>

          <Link to="/users">
        <div className="w-full flex flex-row gap-2 cursor-pointer">
          <Users className="size-6" />
          
        </div>
        </Link>

        <Link to="/tasks">
        <div className="w-full flex flex-row gap-2 cursor-pointer">
          <ListCheck className="size-6"/>
          
        </div>
        </Link>

        <Link to="/roles">
        <div className="w-full flex flex-row gap-2 cursor-pointer">
          <LucideShieldEllipsis className="size-6"/>
          
        </div>
        </Link>
       
        <div className="w-full flex flex-row gap-2"/>
        <div className="w-full flex flex-row gap-2"/>

        <div className="w-full flex flex-row gap-2 cursor-pointer">
          <SetThemeMode/>
        </div>
        
          
      </div>
    </div>
  );
}
