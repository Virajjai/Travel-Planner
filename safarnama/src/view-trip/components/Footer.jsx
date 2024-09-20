import { useState, useEffect } from 'react';

function Footer() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="bg-white  w-full left-0 right-0 p-3 mt-10 mb-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8 space-y-6 md:space-y-0">
        {/* Links Section */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <a
            href="mailto:jaiswalviraj72005@gmail.com"
            className="text-sm hover:text-blue-400 transition"
          >
            Email
          </a>
          <a
            href="https://github.com/Virajjai"
            className="text-sm hover:text-blue-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/virajjaiswal72/"
            className="text-sm hover:text-blue-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/Virajjai72"
            className="text-sm hover:text-blue-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://discord.com/channels/@me"
            className="text-sm hover:text-blue-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
        </div>

        {/* Date and Time */}
        <div className="text-sm">
          {` ${currentDateTime.toLocaleString()}`}
        </div>

        {/* Footer Credit */}
        <div className="text-sm">
          Created by <span className="font-semibold">Viraj Jaiswal</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
