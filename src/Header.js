// import React, { useEffect, useState } from "react";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import SearchIcon from "@material-ui/icons/Search";
// import Modal from "./Modal";
// import "./Header.css";
// import Tippy from "@tippyjs/react";
// import "tippy.js/dist/tippy.css";
// import MoreT from "./MoreT";
// import LoginT from "./LoginT";
// import "tippy.js/themes/light.css";

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="header__first">
//         <img
//           src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
//           alt="flipkart logo"
//         />
//         <div className="header__first1">
//           <span
//             style={{
//               fontSize: "11px",
//               color: "white",
//               fontStyle: "italic",
//             }}
//           >
//             Explore
//           </span>
//           <span
//             style={{
//               color: "#f9e107",
//               fontSize: "11px",
//               fontStyle: "italic",
//             }}
//           >
//             Plus
//           </span>
//           <span>
//             <img
//               width="10"
//               src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
//               alt=""
//             />
//           </span>
//         </div>
//       </div>
//       <div className="header__second">
//         <input placeholder="Search for products" type="text" />
//         <SearchIcon />
//       </div>
//       <div className="header__third">
//         {/* <Tippy
//           theme="light"
//           content={<LoginT></LoginT>}
//           interactive={true}
//           offset={[5, 18]}
//         >
//           <button>Login</button>
//         </Tippy> */}
//         {!show ? (
//           <button onClick={handleOpen}>
//             <Tippy
//               content={<LoginT></LoginT>}
//               interactive={true}
//               offset={[5, 20]}
//               // theme="light"
//               animation="scale"
//             >
//               <button>Login</button>
//             </Tippy>
//           </button>
//         ) : (
//           <Tippy
//             content={<ShowLogin></ShowLogin>}
//             interactive={true}
//             theme="light"
//             animation="perspective"
//             visible={show}
//           >
//             <button>Login</button>
//           </Tippy>
//         )}
//       </div>
//       <div className="header__fourth">
//         <Tippy
//           theme="light"
//           content={<MoreT></MoreT>}
//           interactive={true}
//           offset={[5, 18]}
//         >
//           <span>More</span>
//         </Tippy>
//         <ExpandMoreIcon />
//       </div>
//       <div onClick={() => history.push("/cart")} className="header__fifth">
//         <ShoppingCartIcon />
//         <p>Cart</p>
//       </div>
//       <Modal open={open} handleClose={() => setOpen(false)} />
//     </div>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "./logo.svg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/animations/scale.css";
import LoginT from "./LoginT";
import MoreT from "./MoreT";
import Modal from "./Modal";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const showvalue = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => {
      clearTimeout(showvalue);
    };
  }, [show]);

  const handleOpen = () => {
    setOpen(true);
  };

  const ShowLogin = () => {
    return (
      <>
        <div className="showLogin">
          <div className="showLogin__button">
            <button>LOGIN</button>
          </div>
          <div className="showLogin__info">
            <div>
              <p>New customer?</p>
            </div>
            <div>
              <p style={{ color: "#2874f0" }}>Sign Up</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="header">
      <div className="first">
        <img
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
          alt="Flipkart"
        />
        <div className="first1">
          <span
            style={{
              fontSize: "11px",
              paddingRight: "2px",
              color: "white",
              fontStyle: "italic",
            }}
          >
            Explore
          </span>
          <span
            style={{
              color: "#F9E107",
              fontSize: "11px",
              fontStyle: "italic",
            }}
          >
            Plus
          </span>
          <span>
            <img
              width="10"
              className="logo"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
              alt=""
            />
          </span>
        </div>
      </div>
      <div className="second">
        <input type="text" placeholder="Search for products,brands and more" />
        <SearchIcon />
      </div>
      <div className="third">
        {!show ? (
          <button onClick={handleOpen}>
            <Tippy
              content={<LoginT></LoginT>}
              interactive={true}
              offset={[5, 20]}
              theme="light"
              animation="scale"
            >
              <span>Login</span>
            </Tippy>
          </button>
        ) : (
          <Tippy
            content={<ShowLogin></ShowLogin>}
            interactive={true}
            theme="light"
            animation="perspective"
            visible={show}
          >
            <button>Login</button>
          </Tippy>
        )}
      </div>
      <div className="fourth">
        <Tippy
          content={<MoreT></MoreT>}
          interactive={true}
          theme="light"
          offset={[5, 18]}
          animation="perspective"
        >
          <p className="tp">More</p>
        </Tippy>
        <ExpandMoreIcon />
      </div>
      <div onClick={() => history.push("/cart")} className="fifth">
        <img src={Logo} alt="" />
        <p style={{ color: "white", fontWeight: "600" }}>Cart</p>
      </div>
      <div className="modal"></div>
      <Modal open={open} handleClose={() => setOpen(false)} />
    </div>
  );
};

export default Header;
