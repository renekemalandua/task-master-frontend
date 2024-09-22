import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export default function SetThemeMode() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleDarkMode() {
        const html = document.documentElement;
        const isDarkMode = html.classList.toggle('dark');
        
        if (isDarkMode) {
          localStorage.setItem('theme', "true");
          setIsOpen(true)
        } else {
          localStorage.setItem('theme', 'false');
          setIsOpen(false)
        }
    }

    
  return (
    <div className="relative inline-block text-left cursor-pointer">
      {isOpen?
        <Sun
          onClick={toggleDarkMode}
        />:
        <Moon
          onClick={toggleDarkMode}
        />
      }
    </div>
  )
}

  