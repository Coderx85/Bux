import React from "react";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import Search from "@/app/components/Search";
import FileUploader from "@/app/components/FileUploader";
import { signOutUser } from "@/lib/actions/user.actions";
import { FaQuestionCircle } from "react-icons/fa";
import Link from "next/link";

const Header = ({
  userId,
  accountId,
}: {
  userId: string;
  accountId: string;
}) => {
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader ownerId={userId} accountId={accountId} />
        <form
          action={async () => {
            "use server";

            await signOutUser();
          }}
        >
          <div className="flex gap-2">
            <Button type="submit" className="sign-out-button">
              <Image
                src="/assets/icons/logout.svg"
                alt="logo"
                width={24}
                height={24}
                className="w-6"
              />
            </Button>

            <Link href="/contact" className="query-button">
              {/* <Image 
                src="/assets/icons/query.svg"
                alt="logo"
                width={24}
                height={24}
                className="w-6"
              /> */}
              <FaQuestionCircle 
                width={30}
                height={30}
              />
            </Link>
          </div>
        </form>
      </div>
    </header>
  );
};
export default Header;
