import Image from "next/image";
import HeaderMain from "./components/headers/headerMain";
import TasksContainer from "./components/tasksContainer";

export default function Home() {
  return (
    <main className='flex bg-primary min-h-screen flex-col items-center justify-start p-10 sm:p-24 '>
      <HeaderMain />
      <TasksContainer />
    </main>
  );
}
