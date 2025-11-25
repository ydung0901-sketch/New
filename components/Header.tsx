import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center whitespace-nowrap border-b border-solid border-slate-200 bg-white/95 backdrop-blur-sm px-4 sm:px-10 py-3">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <a className="flex items-center gap-2 text-slate-900" href="#">
          <img 
            alt="Genlab logo" 
            className="h-10" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiyo-aWZxPYT9XnTO4uUVpwE-CqhPCcyaaILNxWSGYjnNyttk1YXe55XC78asLJufyclcA2yr9iz2cFtpCdy5mYkBViB5-BrM--6HToVAPnBvC643ljBepRr1xgUDilYAFrl6KlMipKQWhxRkSh7cAChiMFUGqH3z1vCNDe3xQQocZcd_JnDXUKGOkP0keH4DzJeoDljR8AUzDKhA11axMM_Xfx_VgbJvN88H5z89ycG3HNWwbZ9B90BKjhTs8bGraQvC9TOyGYpM" 
          />
        </a>
        
        <div className="hidden lg:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a className="text-slate-900 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#cau-chuyen-1">Câu chuyện</a>
            <a className="text-slate-900 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#form-dang-ky">Tư vấn</a>
          </div>
          <div className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-sm hover:bg-primary/90">
            <span className="truncate">Hotline: 0931 879 700</span>
          </div>
        </div>

        <button 
          className="lg:hidden text-slate-900 p-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg lg:hidden flex flex-col p-4 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
           <a 
            className="text-slate-900 text-base font-medium hover:text-primary" 
            href="#cau-chuyen-1"
            onClick={() => setIsMenuOpen(false)}
          >
            Câu chuyện
          </a>
          <a 
            className="text-slate-900 text-base font-medium hover:text-primary" 
            href="#form-dang-ky"
            onClick={() => setIsMenuOpen(false)}
          >
            Tư vấn
          </a>
           <a 
            href="tel:0931879700"
            className="flex items-center justify-center rounded-lg h-12 px-4 bg-primary text-white text-base font-bold w-full"
          >
            Hotline: 0931 879 700
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;