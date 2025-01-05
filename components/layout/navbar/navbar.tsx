
// "use client"
// import Navbardrop from "@/components/layout/navbar/navbar-drop"
// import { motion } from "framer-motion";
// import { Dispatch, SetStateAction, useState } from "react";
// import { FiMenu, FiArrowRight } from "react-icons/fi";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { useToken } from "@/components/authentications/auth-utils/helpers/zustand";
// import { FaHeart } from "react-icons/fa";
// import { Button } from "@/components/ui/button";
// import { Collection } from "@/components/home/hero/collection";
// import { Sheet, SheetClose, SheetContent, SheetFooter } from "@/components/ui/sheet";
// import { RiAdminFill } from "react-icons/ri";

// import LikedCollectionsSheet from "@/components/sheet/LikedCollectionsSheet"
// export const FlipNavWrapper = () => {
//   return (
//     <div className="bg-primary-foreground sticky top-0 h-18 z-50   " >
//       <FlipNav />
//     </div>
//   );
// };
// const FlipNav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const handler = () => {
//     setIsOpen((isOpen) => !isOpen)
//   }
//   return (
//     <div className="bg-white p-2 border-b-[1px] border-gray-200 flex items-center justify-between relative " style={{ backgroundColor: `hsl(var(--card))` }}>
//       <NavLeft setIsOpen={setIsOpen} />
//       <NavRight />
//       <NavMenu handler={handler} isOpen={isOpen} />
//     </div>
//   );
// };
// const Logo = () => {
//   return (
//     <Link
//       href="/"
//       className="font-serif text-[#ff0366] text-xl font-extrabold hover:bg-gray-100 focus:bg-gray-200 p-2 rounded-lg"
//     >
//       URSTYLE
//     </Link>
//   );
// };
// const NavLeft = ({
//   setIsOpen,
// }: {
//   setIsOpen: Dispatch<SetStateAction<boolean>>;
// }) => {
//   return (
//     <div className="flex items-center gap-6">
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="block lg:hidden text-gray-950 text-2xl"
//         onClick={() => setIsOpen((pv) => !pv)}
//       >
//         <FiMenu />
//       </motion.button>
//       <Logo />
//       {/* <NavLink text="About" link="#" />
//       <NavLink text="Home" link="#" />
//       <NavLink text="Contact" link="#" /> */}



//     </div>
//   );
// };
// const NavLink = ({ text, link }: { text: string, link: string }) => {
//   return (
//     <a
//       href={link}
//       // rel="nofollow"
//       className="hidden lg:block h-[30px] overflow-hidden font-medium"
//     >
//       <motion.div whileHover={{ y: -30 }}>
//         <span className="flex items-center h-[30px] text-gray-800">{text}</span>
//         <span className="flex items-center h-[30px] text-[#ff0366] ">
//           {text}
//         </span>
//       </motion.div>
//     </a>
//   );
// };
// const NavRight = () => {
//   const jwtToken = useToken().token
//   const router = useRouter()
//   const [liked, setLiked] = useState<boolean>(false);
//   const [sheetOpenLikedCollection, setSheetOpenLikedCollection] = useState(false);
//   return (
//     <div className="gap-0  flex ">
//       <Button
//         onClick={() => {
//           if (jwtToken != null && jwtToken != '') {
//             router.push("/admin")

//           }
//           else {
//             router.push("/sign-in")
//           }

//         }}
//         variant={'ghost'}
//         className="flex flex-col h-14 data-[state=open]:bg-slate-200"
//       >
//         <RiAdminFill />
//         <span className="text-xs pt-1">Admin Dashboard</span>
//       </Button>
//       <Button
//         onClick={() => {
//           if (jwtToken != null && jwtToken != '') {

//             setLiked(true);
//             setSheetOpenLikedCollection(true);

//           }
//           else {
//             router.push("/sign-in")
//           }

//         }}
//         variant={'ghost'}
//         className="flex flex-col h-14 data-[state=open]:bg-slate-200"
//       >
//         <FaHeart />
//         <span className="text-xs pt-1">Wishlist</span>
//       </Button>

//       {liked && (
//         <LikedCollectionsSheet
//           isOpen={sheetOpenLikedCollection}
//           onClose={() => setSheetOpenLikedCollection(false)}
//         />
//       )}

//       <Navbardrop />
//     </div>
//   );
// };
// const NavMenu = ({ isOpen, handler }: { isOpen: boolean, handler: () => void }) => {
//   return (
//     <motion.div
//       variants={menuVariants}
//       initial="closed"
//       animate={isOpen ? "open" : "closed"}
//       className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
//     >


//       {/* <MenuLink handler={handler} text="About" link="#" />
//       <MenuLink handler={handler} text="Home" link="#" />
//       <MenuLink handler={handler} text="Contact" link="#" /> */}


//     </motion.div>
//   );
// };
// const MenuLink = ({ text, link, handler }: { text: string, link: string, handler: () => void }) => {
//   return (
//     <motion.a
//       variants={menuLinkVariants}
//       onClick={handler}
//       // rel="nofollow"
//       href={link}
//       className="h-[20px] overflow-hidden font-medium text-sm flex items-start gap-2"
//     >
//       <motion.span variants={menuLinkArrowVariants}>
//         <FiArrowRight className="h-[20px] text-gray-950" />
//       </motion.span>
//       <motion.div whileHover={{ y: -20 }}>
//         <span className="flex items-center h-[20px] text-gray-800">{text}</span>
//         <span className="flex items-center h-[20px] text-indigo-600">
//           {text}
//         </span>
//       </motion.div>
//     </motion.a>
//   );
// };
// const menuVariants = {
//   open: {
//     scaleY: 1,
//     transition: {
//       when: "beforeChildren",
//       staggerChildren: 0.1,
//     },
//   },
//   closed: {
//     scaleY: 0,
//     transition: {
//       when: "afterChildren",
//       staggerChildren: 0.1,
//     },
//   },
// };
// const menuLinkVariants = {
//   open: {
//     y: 0,
//     opacity: 1,
//   },
//   closed: {
//     y: -10,
//     opacity: 0,
//   },
// };
// const menuLinkArrowVariants = {
//   open: {
//     x: 0,
//   },
//   closed: {
//     x: -4,
//   },
// };









"use client"
import { FaSignInAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import Navbardrop from "@/components/layout/navbar/navbar-drop"
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useToken } from "@/components/authentications/auth-utils/helpers/zustand";
import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Collection } from "@/components/home/hero/collection";
import { Sheet, SheetClose, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { RiAdminFill } from "react-icons/ri";

import LikedCollectionsSheet from "@/components/sheet/LikedCollectionsSheet"
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton, SignOutButton, SignUpButton } from '@clerk/nextjs'
export const FlipNavWrapper = () => {
  return (
    <div className="bg-gray-50 sticky top-0 h-18 z-50   ">
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
    <div className="bg-white p-2 border-b-[1px] border-gray-200 flex items-center justify-between relative" style={{ backgroundColor: `hsl(var(--card))` }}>
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
      className="font-serif text-[#ff0366] text-xl font-extrabold hover:bg-gray-100 focus:bg-gray-200 p-2 rounded-lg"
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
      {/* <NavLink text="About" link="#" />
      <NavLink text="Home" link="#" />
      <NavLink text="Contact" link="#" /> */}



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
        <span className="flex items-center h-[30px] text-[#ff0366] ">
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
    <div className=" flex gap-1 ">
      <SignedIn >

        <Button
          onClick={() => {
            setLiked(true);
          }}
          variant={'ghost'}
          className=" data-[state=open]:bg-slate-200 gap-1"
        >
          <FaHeart />
          <span className="text-sm ">Wishlist</span>
        </Button>


        <Button className="mb-2 " variant={'ghost'}>
          < UserButton /></Button>
        <Button
          onClick={() => {

            router.push("/admin")

          }}

          className="  data-[state=open]:bg-slate-200 gap-1"
        >
          <RiAdminFill />
          <span className="text-sm ">Admin Dashboard</span>
        </Button>
      </SignedIn>
      <SignedOut>
        <Button className="text-sm " variant={'secondary'} >
          <SignInButton /></Button>
        <Button className="text-sm" variant={'secondary'}> <SignUpButton /></Button>
      </SignedOut>
      {liked && (
        <LikedCollectionsSheet
          isOpen={sheetOpenLikedCollection}
          onClose={() => setSheetOpenLikedCollection(false)}
        />
      )}

      {/* <Navbardrop /> */}
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


      {/* <MenuLink handler={handler} text="About" link="#" />
      <MenuLink handler={handler} text="Home" link="#" />
      <MenuLink handler={handler} text="Contact" link="#" /> */}


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








