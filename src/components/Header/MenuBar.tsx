'use client'

import { MenuIcon } from '../Icons'
import { useAppDispatch } from '@/lib/hooks';
import { setOpenSidebar } from '@/lib/features/headerSlice';

export const MenuBar = () => {
  const dispatch = useAppDispatch();

  return (
    <MenuIcon onClick={() => dispatch(setOpenSidebar())} className="w-8 h-8 text-white" />

  )
}
