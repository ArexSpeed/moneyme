import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="flex flex-row justify-between w-full h-full">
        <Sidebar />
        <section className="flex w-full p-4 text-black h-[calc(100vh_-_64px)] scrollbar-thin scrollbar-track-white scrollbar-thumb-primaryBlue bg-secondaryLight dark:scrollbar-track-primaryDark dark:scrollbar-thumb-darkBlue overflow-auto dark:text-white dark:bg-secondaryDark">
          Container
        </section>
      </div>
      <BottomNav />
    </main>
  );
}
