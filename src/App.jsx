import { Ex01ButtonSystem } from "./exercises/Ex01ButtonSystem";
import { Ex02BadgeAvatar } from "./exercises/Ex02BadgeAvatar";
import { Ex03ProfileCard } from "./exercises/Ex03ProfileCard";
import { Ex04ProductCard } from "./exercises/Ex04ProductCard";
import { Ex05LoginForm } from "./exercises/Ex05LoginForm";
import { Ex06KpiCard } from "./exercises/Ex06KpiCard";

export default function App() {
  return (
    <main className="min-h-screen space-y-8 bg-slate-100 p-6 font-sans md:p-10">
      <Ex01ButtonSystem />
      <Ex02BadgeAvatar />
      <Ex03ProfileCard />
      <Ex04ProductCard />
      <Ex05LoginForm />
      <Ex06KpiCard />
    </main>
  );
}