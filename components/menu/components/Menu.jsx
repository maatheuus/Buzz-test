"use client";

import { useState } from "react";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";
import LinksMenu from "./LinksMenu";
import { menu } from "../anim";

export default function Menu() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="fixed z-50 sm:hidden right-12 top-12">
      <motion.menu
        className="w-[348px] h-[650px] bg-black rounded-3xl relative overflow-hidden"
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        role="menu"
        aria-hidden={isActive}
      >
        <AnimatePresence mode="wait">
          {isActive && <LinksMenu setIsActive={setIsActive} />}
        </AnimatePresence>
      </motion.menu>

      {/* <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      /> */}
    </div>
  );
}
