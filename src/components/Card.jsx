import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
const Card = (props) => {
  return (
    <motion.div drag dragConstraints={props.r} whileDrag={{scale:1.1}} className="w-60 h-72  flex flex-col flex-shrink-0 rounded-3xl bg-zinc-900 text-white px-8 py-10 relative overflow-hidden">
      <FaRegFileAlt />
      <p className="font-semibold mt-5 text-sm">
        {props.data.desc}
      </p>
      <div className="footer w-full absolute bottom-0 left-0  ">
        <div className="footer1 flex justify-between p-5 px-9 items-center">
          <p>{props.data.size}</p>
          {props.data.close ? <IoClose size="1.2em"/>: <MdOutlineFileDownload size="1.2em" /> }
          {/* <MdOutlineFileDownload size="1.2em" /> */}
        </div>
        {props.data.tag.isOpen && (
          <div className={`footer2 ${props.data.tag.tagColor==="blue" ? "bg-sky-700" :"bg-green-700"} py-3 flex justify-center`}>
          <h3 className="text-sm font-semibold">{props.data.tag.tagTitle}</h3>
      </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
