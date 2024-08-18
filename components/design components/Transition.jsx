"use client";
import React from 'react';
import { motion } from "framer-motion";

const TransitionEffect = () => { 
    return (
        <>
            {/* First Panel - Red */}
            <motion.div 
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-black/90"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />

            {/* Second Panel - Blue */}
            <motion.div 
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-blue-600" 
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
            />

            {/* Third Panel - Yellow */}
            <motion.div 
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-yellow-500" 
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
            />
        </>
    );
}

export default TransitionEffect;
