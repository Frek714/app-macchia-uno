import React, {useState} from 'react';

function CustomNavbvarFunction(props) {
  const [linkActive, setLinkActive] = useState(1);
  
  const handleClickNavLink = (idNav) => {
    setLinkActive(idNav);
  }
  
  return (
    <div className="text-emerald-300 w-full flex justify-center">
      <ul className="flex">
        {
          props.links.map(link => <li
            className={`mr-5 cursor-pointer ${linkActive === link.id ? "text-amber-950" : "text-emerald-300"}`}
            onClick={() => handleClickNavLink(link.id)}
          >
            {link.link}
          </li>)
        }
      </ul>
    </div>
  )
}

export default CustomNavbvarFunction;