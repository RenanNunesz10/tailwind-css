# 🚀 React & Tailwind CSS — UI Components Lab

Um laboratório prático focado na construção de interfaces de utilizador reutilizáveis, responsivas e acessíveis. Este projeto é composto por **10 exercícios evolutivos**, começando com componentes primitivos (botões, *badges*, avatares) e escalando até composições complexas (formulários, *navbars* e *dashboards*), utilizando **React** e **Tailwind CSS**.

## 🛠️ Tecnologias Utilizadas

*   **[React](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces baseadas em componentes.
*   **[Tailwind CSS](https://tailwindcss.com/)**: *Framework* CSS *utility-first* para estilização rápida e responsiva.
*   **[Vite](https://vitejs.dev/)**: Ferramenta de *build* super rápida para o ambiente de desenvolvimento.

## 🎯 Trilho de Exercícios

O projeto segue uma lógica de **Design Atómico** e composição. Os componentes criados nos primeiros exercícios são reutilizados para construir as interfaces dos exercícios seguintes.

1.  **Button System**: Variantes semânticas (`primary`, `secondary`, `danger`, `dark`) e estados interativos (`hover`, `focus-visible`, `disabled`).
2.  **Badge + Avatar**: Primitivos de UI pequenos focados em semântica de cores e *border-radius*.
3.  **Profile Card**: Primeira composição complexa (utiliza `Avatar`, `Badge` e `Button`).
4.  **Product Card**: Hierarquia visual clara, manipulação de imagens e interações CSS avançadas (`group-hover`). Inclui um desafio de grelha responsiva.
5.  **Login Form**: Criação de um `InputField` reutilizável, controlo de estados de foco acessíveis e composição de formulário estático.
6.  **KPI Card**: Indicadores de *dashboard* com hierarquia de dados e renderização condicional de tendências (`positive`, `negative`, `neutral`).
7.  **Pricing Card**: Renderização de listas a partir de *arrays* (benefícios) e destaque visual condicional (`highlighted`).
8.  **Alert / Notification**: Componente de *feedback* visual com variantes semânticas e baseadas em Flexbox.
9.  **Responsive Navbar**: Navegação adaptável com estratégia *mobile-first* utilizando apenas classes do Tailwind (`hidden`, `md:flex`).
10. **Mini Dashboard**: Composição final que reúne e organiza cartões de *overview*, *performance* e *atividade* num *layout* responsivo (CSS Grid e Flexbox).

## 📁 Arquitetura do Projeto

O projeto está organizado de forma a separar claramente os primitivos reutilizáveis (`ui`), os moldes visuais (`layout`) e as páginas dos desafios (`exercises`).

```text
src/
├── components/
│   ├── layout/
│   │   └── ExerciseWrapper.jsx    # Moldura padrão (título, subtítulo e cartão)
│   │
│   └── ui/                        # Componentes primitivos reutilizáveis
│       ├── Alert.jsx
│       ├── Avatar.jsx
│       ├── Badge.jsx
│       ├── Button.jsx
│       ├── DashboardKpiCard.jsx
│       ├── InputField.jsx
│       ├── Navbar.jsx
│       ├── NavLink.jsx
│       ├── PricingCard.jsx
│       ├── ProductCard.jsx
│       ├── ProductImage.jsx
│       └── ProfileCard.jsx
│
├── exercises/                     # Os 10 cartões/ecrãs de exercícios
│   ├── Ex01ButtonSystem.jsx
│   ├── Ex02BadgeAvatar.jsx
│   ├── ...
│   └── Ex10MiniDashboard.jsx
│
├── App.jsx                        # Ponto de entrada que renderiza a galeria
├── index.css                      # Importação global do Tailwind CSS
└── main.jsx                       # Renderização da árvore do React