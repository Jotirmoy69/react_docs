import React, { useRef} from "react";
import Card from "./Card.jsx";

const Foreground = () => {
    const ref = useRef(null)
    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            size: "2.5mb",
            close: true,
            tag:{
              isOpen:false,
              tagTitle :"Download now",
              tagColor : "zinc"
            }
          },

          {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            size: "2.5mb",
            close: false,
            tag:{
              isOpen:true,
              tagTitle :"Download now",
              tagColor : "blue"
            }
          },

          {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            size: "2.5mb",
            close: true,
            tag:{
              isOpen:true,
              tagTitle :"Download now",
              tagColor : "sky"
            }
          },
    ];

    
  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 w-full h-screen flex gap-6 p-5 flex-wrap ">
            {data.map((item,index)=>(
                <Card r={ref} data={item} size={item.size} close={item.close} tag={item.tag} key={index}/>
            ))}
      </div>
    </>
  );
};

export default Foreground;
