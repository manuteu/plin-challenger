'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  h?: {}
  v?: {};
  styles?: string
}

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Reveal({ children }: Props) {

  return (
    <motion.div
      variants={item}
      className="relative"
    >
      {children}
    </motion.div>
  )
}
