import { Ex01ButtonSystem } from "./exercises/Ex01ButtonSystem";
import { Ex02BadgeAvatar } from "./exercises/Ex02BadgeAvatar";
import { Ex03ProfileCard } from "./exercises/Ex03ProfileCard";
import { Ex04ProductCard } from "./exercises/Ex04ProductCard";

export default function App() {
  return (
    <main className="min-h-screen space-y-8 bg-slate-100 p-6 font-sans md:p-10">
      <Ex01ButtonSystem />
      <Ex02BadgeAvatar />
      <Ex03ProfileCard />
      <Ex04ProductCard />
    </main>
  );
}