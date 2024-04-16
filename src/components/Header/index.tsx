import { BellIcon, UserCircleIcon } from '@/icons/Icons'
import { MenuBar } from './MenuBar';

export const Header = () => {

  return (
    

<nav className="bg-transparent flex flex-row justify-between items-center w-full p-2">
  <div className=" flex flex-row gap-2 justify-center items-center">
      <MenuBar />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Group Name</span>
  </div>
  <div className=" flex flex-row gap-2 justify-center items-center">
    <BellIcon className="w-8 h-8 text-white" />
    <UserCircleIcon className="w-8 h-8 text-white" />
  </div>
</nav>

  )
}
