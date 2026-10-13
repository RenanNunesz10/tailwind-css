// Product Grid

<main class="min-h-screen bg-slate-950 p-6 text-white">
  <section class="mx-auto max-w-6xl">
    <header class="mb-8">
      <span class="text-sm font-bold uppercase tracking-widest text-cyan-400">Tailwind Play</span>
      <h1 class="mt-2 text-3xl font-black sm:text-4xl lg:text-5xl">Product Grid Responsivo</h1>
      <p class="mt-3 max-w-2xl text-slate-400">
        Pratique breakpoints, Grid, hover, focus, active e disabled.
      </p>
    </header>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article class="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/4">
        <div class="grid aspect-[16/10] place-items-center bg-cyan-500 text-6xl font-black text-slate-950 transition duration-500 group-hover:scale-105">01</div>
        <div class="p-6">
          <span class="text-sm font-bold text-cyan-400">Starter</span>
          <h2 class="mt-1 text-2xl font-black">UI Foundations</h2>
          <p class="mt-3 text-slate-400">Layout, spacing, tipografia e cores.</p>
          <button class="mt-6 w-full rounded-xl bg-cyan-400 px-4 py-3 font-bold text-slate-950">Escolher</button>
        </div>
      </article>

      <article class="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/4">
        <div class="grid aspect-[16/10] place-items-center bg-purple-600 text-6xl font-black text-white transition duration-500 group-hover:scale-105">02</div>
        <div class="p-6">
          <span class="text-sm font-bold text-purple-500">Intermediate</span>
          <h2 class="mt-1 text-2xl font-black">Responsive UI</h2>
          <p class="mt-3 text-slate-400">Breakpoints e variantes condicionais.</p>
          <button class="mt-6 w-full rounded-xl bg-purple-500 px-4 py-3 font-bold text-white">Escolher</button>
        </div>
      </article>

      <article class="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/4">
        <div class="grid aspect-[16/10] place-items-center bg-gray-800 text-6xl font-black text-white transition duration-500 group-hover:scale-105">03</div>
        <div class="p-6">
          <span class="text-sm font-bold text-gray-700">Locked</span>
          <h2 class="mt-1 text-2xl font-black">Advanced UI</h2>
          <p class="mt-3 text-slate-400">Este plano ainda está indisponível.</p>
          <button class="mt-6 w-full rounded-xl bg-gray-400 px-4 py-3 font-bold text-gray-700" disabled>Indisponível</button>
        </div>
      </article>
    </div>
  </section>
</main>


// Profile Card
<main class="min-h-screen bg-slate-100 p-6 text-slate-900">
  <article class="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
    <div class="flex items-center gap-4">
      <div class="grid size-20 shrink-0 place-items-center rounded-full bg-blue-600 text-2xl font-black text-white">RSN</div>

      <div>
        <span class="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">Front-end</span>

        <h1 class="mt-2 text-2xl font-black tracking-tight">SEU NOME</h1>

        <p class="text-sm text-slate-600">FullStack Developer · React · Node • PHP • Angular • Laravel</p>
      </div>
    </div>

    <p class="mt-6 leading-7 text-slate-600">Estudando como pequenas utilities podem ser combinadas para construir uma interface completa sem criar uma classe CSS para cada elemento.</p>

    <div class="mt-6 flex gap-3">
      <button class="flex-1 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white">Seguir</button>
      <button class="rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-700">Perfil</button>
    </div>
  </article>
</main>


// Theme Lab
<main class="mx-auto max-w-4xl p-6 font-sans">
  <header class="mb-8">
    <span class="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tracking-wider text-blue-600 uppercase"> Theme Lab </span>
    <h1 class="mt-3 text-3xl font-extrabold text-slate-900">Tailwind Design Tokens</h1>
    <p class="mt-2 text-sm text-slate-600">O mesmo componente deverá funcionar com tokens do tema claro e escuro.</p>
  </header>

  <div class="grid grid-cols-1 gap-8 rounded-3xl bg-slate-100 p-6 md:grid-cols-2 md:p-8">
    <!-- CARD LIGHT -->
    <section class="flex flex-col items-start rounded-3xl border border-border bg-background p-6 text-foreground shadow-sm">
      <span class="rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-bold text-blue-600 uppercase dark:bg-blue-900/50 dark:text-blue-300"> Light </span>
      <h2 class="mt-4 text-3xl font-extrabold tracking-tight">Tema claro</h2>
      <p class="mt-2 text-sm text-muted">Este bloco deve utilizar os valores definidos em :root.</p>

      <div class="mt-4 w-full rounded-2xl border border-border bg-surface p-4">
        <strong class="block text-sm font-bold">Surface token</strong>
        <p class="mt-1 text-xs text-muted">Use background, surface, muted e border.</p>
      </div>

      <div class="dark:bg-chestnut-dark mt-4 w-full rounded-full bg-chestnut py-1.5 text-center text-sm font-bold text-white">Cor Chestnut customizada</div>

      <button class="mt-4 rounded-2xl bg-primary px-8 py-3.5 text-sm font-bold text-white transition hover:opacity-90">Primary Button</button>
    </section>

    <section class="dark flex flex-col items-start rounded-3xl border border-border bg-blue-950 p-6 text-foreground shadow-sm">
      <span class="rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-bold text-blue-600 uppercase dark:bg-blue-900/50 dark:text-blue-300"> Dark </span>
      <h2 class="mt-4 text-3xl font-extrabold tracking-tight text-white">Tema escuro</h2>
      <p class="mt-2 text-sm text-muted">Este bloco deve utilizar os valores definidos em .dark.</p>

      <div class="mt-4 w-full rounded-2xl border bg-black p-4">
        <strong class="block text-sm font-bold text-white">Surface token</strong>
        <p class="mt-1 text-xs text-muted">Observe como os tokens mudam mantendo as mesmas utilities.</p>
      </div>

      <div class="mt-4 w-full rounded-full bg-chestnut py-1.5 text-center text-sm font-bold text-white dark:bg-chestnut">Cor Chestnut customizada</div>

      <button class="mt-4 rounded-2xl bg-primary px-8 py-3.5 text-sm font-bold text-white transition hover:opacity-90">Primary Button</button>

      <p class="mt-4 text-xs text-muted">Use também pelo menos uma classe com o prefixo dark:.</p>
    </section>
  </div>
</main>


// Login Form
<main class="flex min-h-screen items-center justify-center bg-slate-50 p-6 font-sans">
  <section class="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xs">
    <h1 class="text-3xl font-extrabold tracking-tight text-slate-900">Welcome back</h1>
    <p class="mt-2 text-sm text-slate-500">Entre na sua conta para continuar.</p>

    <form class="mt-5 space-y-4">
      <div>
        <label for="email" class="mb-2 block text-sm font-semibold text-slate-700">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          class="w-full rounded-2xl border border-slate-200 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
        />
      </div>

      <div>
        <label for="password" class="mb-2 block text-sm font-semibold text-slate-700">Senha</label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          class="w-full rounded-2xl border border-slate-200 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
        />
      </div>

      <div class="flex items-center justify-between pt-1 text-xs">
        <label class="flex cursor-pointer items-center gap-2 text-slate-500">
          <input
            type="checkbox"
            checked
            class="h-4 w-4 rounded border-slate-300 accent-slate-600 focus:ring-2 focus:ring-blue-600/20"
          />
          Lembrar de mim
        </label>

        <a href="#" class="font-bold text-blue-600 hover:text-blue-700 focus:underline focus:outline-none">Esqueci minha senha</a>
      </div>

      <button
        type="submit"
        class="mt-2 w-full rounded-2xl bg-blue-600 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-600/30"
      >
        Sign In
      </button>
    </form>
  </section>
</main>


// Pricing Cards
<main class="min-h-screen bg-slate-100 p-6 font-sans">
  <section class="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xs">
    <header class="mb-8 border-b border-slate-200 pb-6">
      <span class="inline-block rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
        Pricing
      </span>
      <h1 class="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">
        Escolha o plano ideal
      </h1>
      <p class="mt-2 text-sm text-slate-500">
        Compare recursos e preços.
      </p>
    </header>

    <div class="grid grid-cols-1 items-start gap-6 rounded-3xl bg-slate-100 p-6 md:grid-cols-3">
      <article class="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 class="text-xl font-extrabold text-slate-900">Starter</h2>
        <strong class="mt-3 block text-4xl font-extrabold tracking-tight text-slate-900">$0</strong>
        <span class="mt-2 block text-xs text-slate-500">/ month</span>

        <ul class="mt-4 space-y-2 text-sm text-slate-700">
          <li class="before:mr-1.5 before:content-['✓']">Projects</li>
          <li class="before:mr-1.5 before:content-['✓']">Basic support</li>
        </ul>

        <button class="mt-5 w-full rounded-2xl bg-blue-600 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700">
          Choose
        </button>
      </article>

      <article class="rounded-3xl border-2 border-violet-600 bg-violet-50/60 p-6">
        <span class="inline-block rounded-full bg-violet-100/80 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-violet-600">
          Popular
        </span>
        <h2 class="mt-3 text-xl font-extrabold text-slate-900">Pro</h2>
        <strong class="mt-3 block text-4xl font-extrabold tracking-tight text-slate-900">$29</strong>
        <span class="mt-2 block text-xs text-slate-500">/ month</span>

        <ul class="mt-4 space-y-2 text-sm text-slate-700">
          <li class="before:mr-1.5 before:content-['✓']">Projects</li>
          <li class="before:mr-1.5 before:content-['✓']">Analytics</li>
          <li class="before:mr-1.5 before:content-['✓']">Priority support</li>
        </ul>

        <button class="mt-5 w-full rounded-2xl bg-violet-600 py-3.5 text-sm font-bold text-white transition hover:bg-violet-700">
          Choose
        </button>
      </article>

      <article class="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 class="text-xl font-extrabold text-slate-900">Team</h2>
        <strong class="mt-3 block text-4xl font-extrabold tracking-tight text-slate-900">$79</strong>
        <span class="mt-2 block text-xs text-slate-500">/ month</span>

        <ul class="mt-4 space-y-2 text-sm text-slate-700">
          <li class="before:mr-1.5 before:content-['✓']">Projects</li>
          <li class="before:mr-1.5 before:content-['✓']">Analytics</li>
          <li class="before:mr-1.5 before:content-['✓']">Team access</li>
        </ul>

        <button class="mt-5 w-full rounded-2xl bg-blue-600 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700">
          Choose
        </button>
      </article>
    </div>
  </section>
</main>


// Settings Toggle
<main class="flex min-h-screen items-center justify-center bg-slate-50 p-6 font-sans">
  <section class="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-xs">
    <h1 class="text-2xl font-extrabold tracking-tight text-slate-900">Notification Settings</h1>
    <p class="mt-2 text-sm text-slate-500">Controle suas preferências de comunicação.</p>

    <label class="mt-5 flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition hover:bg-slate-100/70">
      <div>
        <strong class="block text-sm font-bold text-slate-900">Email notifications</strong>
        <span class="mt-0.5 block text-xs text-slate-500">Receive product updates</span>
      </div>

      <input type="checkbox" checked class="peer sr-only" />
      <span class="relative h-7 w-12 shrink-0 rounded-full bg-slate-200 transition-colors after:absolute after:top-0.5 after:left-0.5 after:h-6 after:w-6 after:rounded-full after:bg-white after:shadow-xs after:transition-transform after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-5 peer-focus-visible:ring-4 peer-focus-visible:ring-blue-600/20"></span>
    </label>

    <label class="mt-4 flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition hover:bg-slate-100/70">
      <div>
        <strong class="block text-sm font-bold text-slate-900">Marketing</strong>
        <span class="mt-0.5 block text-xs text-slate-500">Receive campaigns</span>
      </div>

      <input type="checkbox" class="peer sr-only" />
      <span class="relative h-7 w-12 shrink-0 rounded-full bg-slate-200 transition-colors after:absolute after:top-0.5 after:left-0.5 after:h-6 after:w-6 after:rounded-full after:bg-white after:shadow-xs after:transition-transform after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-5 peer-focus-visible:ring-4 peer-focus-visible:ring-blue-600/20"></span>
    </label>
  </section>
</main>


// FAQ Accordion
<main class="flex min-h-screen items-center justify-center bg-slate-50 p-6 font-sans">
  <section class="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-xs">
    <h1 class="text-3xl font-extrabold tracking-tight text-slate-900">Frequently Asked Questions</h1>

    <details open class="group mt-5 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition-colors open:border-blue-600 open:bg-blue-50/50">
      <summary class="flex cursor-pointer list-none items-center justify-between text-sm font-bold text-slate-900 after:text-lg after:font-bold after:text-slate-500 after:content-['+'] group-open:after:text-blue-600 group-open:after:content-['−'] [&::-webkit-details-marker]:hidden">O que é utility-first?</summary>
      <p class="mt-3 text-xs text-slate-500">
        É uma abordagem baseada na composição de pequenas utilities.
      </p>
    </details>

    <details class="group mt-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition-colors open:border-blue-600 open:bg-blue-50/50">
      <summary class="flex cursor-pointer list-none items-center justify-between text-sm font-bold text-slate-900 after:text-lg after:font-bold after:text-slate-500 after:content-['+'] group-open:after:text-blue-600 group-open:after:content-['−'] [&::-webkit-details-marker]:hidden">Tailwind substitui CSS?</summary>
      <p class="mt-3 text-xs text-slate-500">
        Tailwind continua sendo CSS, mas oferece utilities e ferramentas.
      </p>
    </details>

    <details class="group mt-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition-colors open:border-blue-600 open:bg-blue-50/50">
      <summary class="flex cursor-pointer list-none items-center justify-between text-sm font-bold text-slate-900 after:text-lg after:font-bold after:text-slate-500 after:content-['+'] group-open:after:text-blue-600 group-open:after:content-['−'] [&::-webkit-details-marker]:hidden">Como funciona dark mode?</summary>
      <p class="mt-3 text-xs text-slate-500">
        Variantes permitem alterar estilos quando um tema dark está ativo.
      </p>
    </details>
  </section>
</main>


// Dashboard Summary
<main class="flex min-h-screen items-center justify-center bg-white p-6 font-sans">
  <section class="w-full max-w-4xl rounded-3xl bg-slate-100 p-8">
    <header class="flex items-center justify-between">
      <h1 class="text-2xl font-extrabold tracking-tight text-slate-900">Overview</h1>
      <button class="rounded-2xl bg-slate-900 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800">
        Export
      </button>
    </header>

    <div class="mt-4 flex flex-wrap gap-4">
      <article class="rounded-2xl border border-slate-200 bg-white px-5 py-4">
        <span class="block text-xs text-slate-500">Revenue</span>
        <strong class="mt-1.5 block text-2xl font-extrabold tracking-tight text-slate-900">128k</strong>
      </article>

      <article class="rounded-2xl border border-slate-200 bg-white px-5 py-4">
        <span class="block text-xs text-slate-500">Orders</span>
        <strong class="mt-1.5 block text-2xl font-extrabold tracking-tight text-slate-900">1,842</strong>
      </article>

      <article class="rounded-2xl border border-slate-200 bg-white px-5 py-4">
        <span class="block text-xs text-slate-500">Conversion</span>
        <strong class="mt-1.5 block text-2xl font-extrabold tracking-tight text-slate-900">4.7%</strong>
      </article>
    </div>

    <div class="mt-4 flex flex-col items-start gap-4 md:flex-row">
      <section class="w-full rounded-2xl border border-slate-200 bg-white p-5 md:w-auto">
        <h2 class="text-xs font-bold text-slate-900">Performance</h2>

        <div class="mt-4 flex h-28 items-end gap-5 pr-6">
          <span class="h-6 w-10 rounded-lg bg-slate-200/80"></span>
          <span class="h-9 w-10 rounded-lg bg-slate-200/80"></span>
          <span class="h-12 w-10 rounded-lg bg-slate-200/80"></span>
          <span class="h-16 w-10 rounded-lg bg-slate-200/80"></span>
          <span class="h-20 w-10 rounded-lg bg-slate-200/80"></span>
          <span class="h-24 w-10 rounded-lg bg-blue-600"></span>
        </div>
      </section>

      <aside class="w-full rounded-2xl border border-slate-200 bg-white p-5 md:w-44">
        <h2 class="text-xs font-bold text-slate-900">Activity</h2>
        <p class="mt-2.5 text-xs text-slate-500 before:mr-1 before:content-['•']">New order</p>
        <p class="mt-2 text-xs text-slate-500 before:mr-1 before:content-['•']">Payment approved</p>
        <p class="mt-2 text-xs text-slate-500 before:mr-1 before:content-['•']">User created</p>
      </aside>
    </div>
  </section>
</main>


// Theme Toggle
<main class="flex min-h-screen items-center justify-center bg-slate-100 p-6 font-sans dark:bg-slate-950">
  <section class="flex w-full max-w-md flex-col items-start rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-xs transition-colors dark:border-[#1e295d] dark:bg-[#0d1042] dark:text-white">
    <header class="flex w-full items-start justify-between gap-4">
      <div>
        <span class="block text-lg font-extrabold tracking-tight">Theme Lab</span>
        <h1 class="mt-5 text-3xl font-extrabold tracking-tight">Light & Dark Mode</h1>
      </div>

      <button
        type="button"
        onclick="document.documentElement.classList.toggle('dark')"
        class="shrink-0 rounded-2xl bg-slate-900 px-5 py-3 text-xs font-bold text-white transition hover:opacity-90 dark:bg-amber-400 dark:text-slate-900"
      >
        Alternar tema
      </button>
    </header>

    <p class="mt-3 text-xs text-slate-500 dark:text-slate-400">
      O mesmo componente deverá mudar de aparência sem trocar sua estrutura HTML.
    </p>

    <div class="mt-4 rounded-2xl bg-slate-100 p-4 dark:bg-[#121316]">
      <strong class="block text-sm font-bold">Surface token</strong>
      <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
        Background e texto devem responder ao tema.
      </p>
    </div>

    <div class="mt-4 rounded-full bg-[#8f341e] px-3 py-0.5 text-xs font-bold text-white dark:bg-[#d87657]">
      Chestnut
    </div>

    <button class="mt-4 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700">
      Primary Button
    </button>
  </section>
</main>