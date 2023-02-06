import { GiHamburgerMenu } from "react-icons/gi";

export const Navigation = () => {
  return (
    <div className="w-screen flex p-6 h-1/10">
      <div className="flex  w-3/5 justify-start items-center pl-10">
        <Logo text="WAVE" />
      </div>
      <div className="flex w-2/5 justify-around items-center text-white font-thin ">
        <Link text="Lorem" />
        <Link text="Phasellus" />
        <Link text="Curabitur" />
        <BurgerMenu />
      </div>
    </div>
  );
};



const Logo = ({ text }: { text: string }) => {
  return <div className="text-6xl text-white font-BarlowCondensed-Black tracking-widest">{text}</div>;
};

const Link = ({ text }: { text: string }) => {
  return <div className="text-white">{text}</div>;
};

const BurgerMenu = () => {
  return (
    <div>
      <GiHamburgerMenu />
    </div>
  );
};
