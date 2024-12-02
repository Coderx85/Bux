"use client";

import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
  fullName: string;
  avatar: string;
  email: string;
}

const Sidebar = ({ fullName, avatar, email }: Props) => {
  const pathname = usePathname();

  return (
    <aside className="sidebar bg-primary/30">
      <Link href="/">
        <Image
          src="/assets/icons/logo-full-brand.svg"
          alt="logo"
          width={160}
          height={50}
          className="hidden h-auto lg:block"
        />

        <Image
          src="/assets/icons/logo-brand.svg"
          alt="logo"
          width={52}
          height={52}
          className="lg:hidden"
        />
      </Link>

      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ url, name, icon }) => {
            const isActive = pathname === url || pathname.startsWith(`${url}/`);
            return(
              <Link key={name} href={url} className="group lg:w-full rounded-lg">
                <li
                  className={cn(
                    "sidebar-nav-item group-hover:shad-active ease-in duration-100 hover:animate-out",
                    {
                      "shad-active": isActive,
                    }
                  )}
                >
                  <Image
                    src={icon}
                    alt={name}
                    width={24}
                    height={24}
                    className={cn(
                      "nav-icon group-hover:nav-icon-active group-hover:",
                      pathname === url && "nav-icon-active scale-125",
                    )}
                  />
                  <p className="hidden lg:block">{name}</p>
                </li>
              </Link>
            )}
          )}
        </ul>
      </nav>

      {/* <Image
        src="/assets/images/files-2.png"
        alt="logo"
        width={506}
        height={418}
        className="w-full"
      /> */}

      <div className="sidebar-user-info">
        <Image
          src={avatar}
          alt="Avatar"
          width={44}
          height={44}
          className="sidebar-user-avatar"
        />
        <div className="hidden lg:block">
          <p className="subtitle-2 capitalize">{fullName}</p>
          <p className="caption">{email}</p>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
