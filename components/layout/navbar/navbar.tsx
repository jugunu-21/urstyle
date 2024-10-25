
"use client"
import Navbardrop from "@/components/layout/navbar/navbar-drop"
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useToken } from "@/components/authentications/auth-utils/helpers/zustand";
import { FaRegHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Collection } from "@/components/home/hero/card-collection";
import { Sheet, SheetClose, SheetContent, SheetFooter } from "@/components/ui/sheet";
export const FlipNavWrapper = () => {
  return (
    <div className="bg-gray-50 sticky top-0 h-20 z-50   ">
      <FlipNav />
    </div>
  );
};
const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handler = () => {
    setIsOpen((isOpen) => !isOpen)
  }
  return (
    <div className="bg-white p-2 border-b-[1px] border-gray-200 flex items-center justify-between relative">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu handler={handler} isOpen={isOpen} />
    </div>
  );
};
const Logo = () => {
  return (
    <Link
      href="/"
      className="font-serif text-cyan-800 text-xl font-extrabold hover:bg-gray-100 focus:bg-gray-200 p-2 rounded-lg"
    >
      URSTYLE
    </Link>
  );
};
const NavLeft = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <Logo />
      <NavLink text="About" link="/Component/About" />
      <NavLink text="Home" link="/Component/Home" />
      <NavLink text="Contact" link="/Component/Contact" />
      {/* <NavLink text="Testimonials" link="/#testimonial" />
      <NavLink text="Features" link="/#feature" /> */}
    </div>
  );
};
const NavLink = ({ text, link }: { text: string, link: string }) => {
  return (
    <a
      href={link}
      // rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-800">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </a>
  );
};
const NavRight = () => {
  const jwtToken = useToken().token
  const router = useRouter()
  const [liked, setLiked] = useState<boolean>(false);
  const [sheetOpenLikedCollection, setSheetOpenLikedCollection] = useState(false);
  return (
    <div className="gap-4  flex ">
      {/* {typeof window !== 'undefined' && jwtToken !== null && (
        <Button
          onClick={() => {
            setLiked(true);
            setSheetOpenLikedCollection(true);
          }}
          variant={'ghost'}
          className="flex flex-col h-14 data-[state=open]:bg-slate-200"
        >
          <FaRegHeart />
          <span className="text-xs">Wishlist</span>
        </Button>
      )} */}

      <Button
        onClick={() => {
          setLiked(true);
          setSheetOpenLikedCollection(true);
        }}
        variant={'ghost'}
        className="flex flex-col h-14 data-[state=open]:bg-slate-200"
      >
        <FaRegHeart />
        <span className="text-xs">Wishlist</span>
      </Button>


      {liked &&
        <Sheet open={sheetOpenLikedCollection} onOpenChange={setSheetOpenLikedCollection}>
          <SheetContent className="h-full overflow-y-auto" >
            <div className=" overflow-y-auto w-full  h-full">
              <Collection likedQuery="user" />
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit" onClick={() => setSheetOpenLikedCollection(false)}>close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>}


      <Navbardrop />
    </div>
  );
};
const NavMenu = ({ isOpen, handler }: { isOpen: boolean, handler: () => void }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      {/* <NavLink text="About" link="/Component/About" /> */}
      <MenuLink handler={handler} text="About" link="/Component/About" />
      <MenuLink handler={handler} text="Home" link="/" />
      <MenuLink handler={handler} text="Contact" link="/Component/Contact" />
      {/* <MenuLink handler={handler} text="Testimonials" link="#" />
      <MenuLink handler={handler} text="Features" link="#" /> */}
    </motion.div>
  );
};
const MenuLink = ({ text, link, handler }: { text: string, link: string, handler: () => void }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      onClick={handler}
      // rel="nofollow"
      href={link}
      className="h-[20px] overflow-hidden font-medium text-sm flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[20px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -20 }}>
        <span className="flex items-center h-[20px] text-gray-800">{text}</span>
        <span className="flex items-center h-[20px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};
const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};
const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};
const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};








