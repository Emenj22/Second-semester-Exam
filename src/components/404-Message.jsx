import React from "react";
import { Link } from "react-router-dom";
import "../styles/404-Message.css";

// setting my function for the text type animation
let message = "Oops! It looks like the page you're searching for doesn't exist. Please check the URL and try again. If you believe this is an error, feel free to contact our support team for assistance. We apologize for any inconvenience."
let Message = ()=>{
  return (
    <div className="Holder404">
      <p>{message}</p>
      <button>
        <p>
          <Link to="/">
           {"Home Page"}
          </Link>
        </p>
      </button>
    </div>
  );
}
export default Message;
