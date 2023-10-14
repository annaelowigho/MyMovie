import React, { useContext } from "react";
import { AiFillAppstore } from "react-icons/ai";
import { MdLocalMovies, MdMovie } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { bookmarkContext } from "../context/BookmarkContext";


const Nav = () => {
  const { bookmarkMovies } = useContext(bookmarkContext);
  return (
    <>
      <div
        className="sticky left-0 top-0 flex items-center justify-between h-[100px] bg-[#161d2f] 
      lg:h-[95vh] lg:gap-[100px] p-5 md:m-[20px] lg:flex-col md:rounded-md lg:rounded-[20px] cursor-pointer"
      >
        <Link to="/">
          <MdMovie className="text-[60px] text-[#ff4549] " />
        </Link>
        <div className="flex items-center justify-between lg:flex-col gap-2 md:gap-8 lg:gap-10 text-[#56698f] text-[40px] lg:pb-[50px]">
          <Link to="/movies">
            <MdLocalMovies className="hover:text-white" />
          </Link>
          <Link to="/series">
            <PiTelevision className="hover:text-white" />
          </Link>
          <Link className="relative" to="/bookmark">
            <BsFillBookmarkFill className="hover:text-white text-[30px]" />
            {bookmarkMovies.length > 0 && (
              <span className="absolute top-[-10%] right-0 grid place-items-center h-5 w-5 rounded-full bg-red-400 text-[10px] z-10 text-white">
                {" "}
                {bookmarkMovies.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;

// NavItems = ({icon, link}) => {
//   return(
//     <li>
//       <Link to={link} href=''>
//         <span>{icon}</span>
//       </Link>
//     </li>
//   );
// };
