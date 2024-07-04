import { NavLink } from "react-router-dom";
import { navItems } from "../App";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Package2 } from "lucide-react";

const Sidebar = () => (
  <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span>Music Stream</span>
        </NavLink>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
          {navItems.map((item) => (
            <SidebarNavLink key={item.to} to={item.to}>
              {item.icon}
              {item.title}
            </SidebarNavLink>
          ))}
        </nav>
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Username</p>
            <p className="text-xs text-muted-foreground">View Profile</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SidebarNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-muted-foreground",
        isActive && "text-primary bg-muted",
      )
    }
  >
    {children}
  </NavLink>
);

export default Sidebar;