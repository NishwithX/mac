import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  FaGithub, 
  FaTwitter, 
  FaInstagram, 
  FaDiscord, 
  FaWhatsapp,
  FaCaretDown 
} from "react-icons/fa";

const Nav = () => {
  const [showSocials, setShowSocials] = useState(false);

  const socials = [
    { 
      name: 'GitHub',
      icon: <FaGithub className="text-xl" />,
      url: 'https://github.com/yourusername'
    },
    { 
      name: 'Twitter',
      icon: <FaTwitter className="text-xl" />,
      url: 'https://twitter.com/yourusername'
    },
    { 
      name: 'Instagram',
      icon: <FaInstagram className="text-xl" />,
      url: 'https://instagram.com/yourusername'
    },
    { 
      name: 'Discord',
      icon: <FaDiscord className="text-xl" />,
      url: 'https://discord.gg/yourinvite'
    },
    { 
      name: 'WhatsApp',
      icon: <FaWhatsapp className="text-xl" />,
      url: 'https://wa.me/yourphonenumber'
    }
  ];

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest('[data-dropdown]')) {
        setShowSocials(false);
      }
    };

    if (showSocials) {
      document.addEventListener('click', closeDropdown);
    }

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [showSocials]);

  return (
    <nav className="bg-gray-800 py-4 sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-4 flex justify-between items-center">
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-blue-400 transition-colors duration-300">
            Home
          </Link>
          <Link to="/blog" className="text-white hover:text-blue-400 transition-colors duration-300">
            Blog
          </Link>
        </div>
        <div className="relative" data-dropdown>
          <button 
            className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors duration-300 focus:outline-none"
            onClick={() => setShowSocials(!showSocials)}
          >
            <span>Socials</span>
            <FaCaretDown className={`transform transition-transform duration-300 ${showSocials ? 'rotate-180' : ''}`} />
          </button>
          {showSocials && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              {socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                >
                  {social.icon}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;