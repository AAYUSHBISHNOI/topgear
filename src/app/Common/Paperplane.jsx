"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Paperplane = ({ isSending, isHovered }) => {
  const [planeFly, setPlaneFly] = useState(false);
  const [planeReset, setPlaneReset] = useState(false);
  const [showSmoke, setShowSmoke] = useState(false);

  // Handle sending animation (fly away)
  useEffect(() => {
    if (isSending) {
      setPlaneFly(true);
      setPlaneReset(false);
      setShowSmoke(false); // no smoke while flying away

      // Reset after animation
      const timer = setTimeout(() => {
        setPlaneFly(false);
        setPlaneReset(true);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setPlaneFly(false);
      setPlaneReset(false);
      setShowSmoke(isHovered); // show smoke on hover if not sending
    }
  }, [isSending, isHovered]);

  // Show smoke if hovered and not sending
  useEffect(() => {
    if (!isSending) {
      setShowSmoke(isHovered);
    }
  }, [isHovered, isSending]);

  return (
    <motion.div
      className="absolute top-0 right-0"
      initial={{ y: 0, opacity: 1, x: 0, rotate: 0 }}
      animate={
        planeFly
          ? {
              y: -50,
              x: 50,
              opacity: 0,
              transition: { duration: 1.5 },
              rotate: 20,
            }
          : planeReset
          ? {
              y: 0,
              x: 0,
              opacity: 1,
              rotate: 0,
              transition: { delay: 2, duration: 0.5 },
            }
          : isHovered
          ? {
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0],
              transition: { duration: 1, repeat: Infinity },
            }
          : {
              scale: 1,
              rotate: 0,
            }
      }
      style={{ originX: "50%", originY: "50%" }}
    >
      <svg
        width="254"
        height="230"
        viewBox="0 0 254 230"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Plane SVG Paths */}
        <path
          d="M199.528 88.4674C198.237 88.5022 198 87.8857 199.041 87.0594L236.019 57.6916C237.044 56.8784 237.95 57.2888 238.04 58.5514L241.352 105.073C241.446 106.361 240.788 106.646 239.891 105.717L225.465 90.7426L232.267 68.262L219.447 87.9317L199.528 88.4674V88.4674Z"
          fill="#D4D4E5"
        />
        <path
          d="M222.784 89.1062C222.784 89.1062 217.868 103.21 211.284 109.606C203.576 117.094 196.868 119.247 186.284 121.106C175.471 123.005 166.868 122.278 158.284 118.606C149.699 114.934 146.237 112.482 140.284 107.606C134.331 102.73 132.684 99.1107 126.784 94.1062C124.369 92.0578 114.632 85.8222 103.972 79.1704C87.4326 68.8498 65.1567 76.9906 60.5588 95.9361C60.4575 96.3535 60.3655 96.7444 60.2839 97.106C58.1829 106.408 56.0593 114.461 55.7839 121.106C55.5084 127.751 55.908 131.052 54.7839 137.606C53.6599 144.161 52.8943 149.316 48.7838 155.606C44.6733 161.896 35.969 169.959 35.969 169.959"
          stroke="#C7C7C7"
          strokeDasharray="3 3"
        />
      </svg>

      {/* Smoke effect */}
      <AnimatePresence>
        {showSmoke && (
          <motion.div
            className="absolute w-16 h-16 bg-gray-300 rounded-full opacity-50 blur-sm"
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: 0, scale: 2, y: -30 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{ top: "50%", left: "30%" }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Paperplane;
