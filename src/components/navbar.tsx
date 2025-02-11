import { FC } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Bell, Settings, Menu } from "lucide-react";

const Navbar: FC = () => {
  return (
    <nav className="bg-pink-50 py-4 font-sans">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left Section: Logo and Navigation Links */}
        <div className="flex items-center gap-32">
          <div>
            <span className="text-2xl font-bold text-orange-600 ml-5">
              MOMS
            </span>
            <p className="text-xs text-orange-600">Empowering Every Step</p>
          </div>
          <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <li className="cursor-pointer hover:text-orange-500 ">ABOUT US</li>
            <li className="cursor-pointer hover:text-orange-500">CATALOG</li>
            <li className="cursor-pointer hover:text-orange-500">PLACES</li>
            <li className="cursor-pointer hover:text-orange-500">BLOG</li>
            <li className="cursor-pointer hover:text-orange-500">CONTACT</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" />
          </div>
          {/* Icons */}
          <Bell className="text-gray-600 cursor-pointer hover:text-orange-500" />
          <Settings className="text-gray-600 cursor-pointer hover:text-orange-500" />
          {/* Create Account Button */}
          <Button className="bg-gradient-to-r from-orange-400 to-red-500 text-white font-medium rounded-full px-4 py-2 shadow-lg hover:from-orange-500 hover:to-red-600">
            Create Account
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <button className="text-gray-700 focus:outline-none">
                <Menu />
              </button>
            </SheetTrigger>
            <SheetContent side="left">
              <ul className="flex flex-col space-y-4 mt-4 text-sm font-medium text-gray-700">
                <li className="cursor-pointer hover:text-orange-500">
                  ABOUT US
                </li>
                <li className="cursor-pointer hover:text-orange-500">
                  CATALOG
                </li>
                <li className="cursor-pointer hover:text-orange-500">PLACES</li>
                <li className="cursor-pointer hover:text-orange-500">BLOG</li>
                <li className="cursor-pointer hover:text-orange-500">
                  CONTACT
                </li>
              </ul>
              <div className="mt-8 space-y-4">
                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="border rounded-full pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                  <Search className="absolute right-3 top-2.5 text-gray-400" />
                </div>
                {/* Icons and Button */}
                <div className="flex items-center space-x-4">
                  <Bell className="text-gray-600 cursor-pointer hover:text-orange-500" />
                  <Settings className="text-gray-600 cursor-pointer hover:text-orange-500" />
                </div>
                <Button className="bg-gradient-to-r from-orange-400 to-red-500 text-white font-medium rounded-full px-4 py-2 shadow-lg hover:from-orange-500 hover:to-red-600 w-full">
                  Create Account
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
