import logo from "../../../public/logo.svg";
import back from "../../../public/back.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="bg-[#eff2fd] h-[50px] flex flex-center justify-center items-center relative">
        <Link href="/" className="ml-auto mr-auto absolute left-[28px]">
          <Image
            src={back}
            width={25}
            alt="Back"
          />
        </Link>
        <Link href="/" className="ml-auto mr-auto">
          <Image
            src={logo}
            width={48}
            alt="Logo"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
