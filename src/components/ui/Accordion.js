"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Accordion({
  items,
  containerClassName = "",
  itemClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  chevronClassName = "",
  stagger = false,
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const Wrapper = stagger ? motion.div : "div";
  const Item = stagger ? motion.div : "div";
  const wrapperProps = stagger
    ? {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: false, amount: 0.2 },
      }
    : {};
  const itemProps = stagger ? { variants: itemVariants } : {};

  return (
    <Wrapper className={containerClassName} {...wrapperProps}>
      {items.map((it, i) => {
        const isOpen = openIndex === i;
        return (
          <Item key={it.title} className={itemClassName} {...itemProps}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className={titleClassName}>{it.title}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={chevronClassName}
              >
                <ChevronDown className="h-5 w-5" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className={descriptionClassName}>{it.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Item>
        );
      })}
    </Wrapper>
  );
}
