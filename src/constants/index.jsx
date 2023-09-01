import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoSass,
  BiLogoJavascript,
  BiLogoJquery,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoGithub,
  BiLogoLinkedinSquare
} from 'react-icons/bi';

import {
  TbBrandNextjs
} from 'react-icons/tb';

export const navbarLinks = [
  {
    id: "projects",
    label: "Projects",
  },
  {
    id: "aboutme",
    label: "About Me",
  },
  {
    id: "contacts",
    label: "Contacts",
  }
]

export const projects = [
  {
    label: "Coffee Recipes",
    url: "https://coffee-recipes.vercel.app/",
    github: "https://github.com/MayuHayakawa/coffee_recipes",
    image: "/image/CoffeeRecipes.png",
    tools: ["HTML", "CSS", "JavaScript"],
    comment_en: <p>This site allows you getting coffee recipes.<br/>You choose hot or iced.</p>,
    comment_jp: <p>コーヒーのレシピサイト<br/>ホットかアイスの選択可</p>
  },
  {
    label: "e-commerce Site",
    url: "https://e-commerce-site-cyan.vercel.app/",
    github: "https://github.com/MayuHayakawa/e-commerce-site",
    image: "/image/Artificial-Nails-Online-Store.png",
    tools: ["HTML", "SCSS", "JavaScript"],
    comment_en: <p>An E-commerce site.<br/>You can pick products and items go into shopping cart.</p>,
    comment_jp: <p>ショッピングカート機能付きE-コマースサイト</p>
  },
  {
    label: "Free Game Search",
    url: "https://free-game-search.vercel.app/",
    github: "https://github.com/MayuHayakawa/free-game-search",
    image: "/image/FreeGameSearch.png",
    tools: ["HTML", "CSS", "JavaScript", "React"],
    comment_en: <p>A games search site.<br/>You can sort them by plathome and genre.<br/>Also it allows light/dark mode selects.</p>,
    comment_jp: <p>プラットフォームやジャンルでのソート可能な無料ゲーム検索サイト<br/>ライト・ダークのモード変換機能付き</p>
  },
  {
    label: "Cocktail Recipes",
    url: "https://cocktail-search-app-delta.vercel.app/",
    github: "https://github.com/MayuHayakawa/Cocktail-Search-App",
    image: "/image/CocktailRecipes.png",
    tools: ["HTML", "CSS", "TypeScript", "React"],
    comment_en: <p>This site allows you find cocktail recipes by name, ingredients.<br/>You can also keep your favorite recipes.</p>,
    comment_jp: <p>名前や材料でカクテルのレシピを検索できるサイト<br/>お気に入り機能付き</p>
  },
  {
    label: "Salon Booking System",
    url: "https://salon-booking-system-frontend.vercel.app/",
    github: "https://github.com/MayuHayakawa/salon-booking-system",
    image: "/image/SalonBooking.png",
    tools: ["JavaScript", "React", "Node.js", "MongoDB"],
    comment_en: <p>A salon booking site has login function.<br/>You can sign-in without create your account.<br/>Customer &#40;address:test@test.com/password:test&#41;<br/>Admin &#40;address:admin@admin.com/password:admin&#41;</p>,
    comment_jp: <p>ログイン機能付きのサロン予約サイト<br/>以下ログイン情報にてデモページを確認いただけます😄<br/>ユーザー&#40;address:test@test.com/password:test&#41;<br/>管理者&#40;address:admin@admin.com/password:admin&#41;</p>
  },
  {
    label: "Work Cafe Hub",
    url: "https://work-cafe-hub.vercel.app/",
    github: "https://github.com/MayuHayakawa/work-cafe-hub",
    image: "/image/WorkCafeHub.png",
    tools: ["TypeScript", "Next.js", "MongoDB"],
    comment_en: <p>This site shares cafe information to do the work.<br/>Users can share cafe&rsquo;s information and like other&rsquo;s post and follow&rsquo;s others.<br/>I&rsquo;m going to update this site:&#41;</p>,
    comment_jp: <p>作業用カフェ情報シェアサイト<br/>投稿やいいね機能、フォローも可能<br/>実用化に向けて今後もアップデート予定です！</p>
  }
]

export const myToolkits = [
  {
    label: "HTML5",
    icon: <BiLogoHtml5 />
  },
  {
    label: "CSS3",
    icon: <BiLogoCss3 />
  },
  {
    label: "Sass",
    icon: <BiLogoSass />
  },
  {
    label: "JavaScript",
    icon: <BiLogoJavascript />
  },
  {
    label: "jQuery",
    icon: <BiLogoJquery />
  },
  {
    label: "TypeScript",
    icon: <BiLogoTypescript />
  },
  {
    label: "React",
    icon: <BiLogoReact />
  },
  {
    label: "Next.js",
    icon: <TbBrandNextjs />
  },
  {
    label: "Node.js",
    icon: <BiLogoNodejs />
  },
  {
    label: "mongoDB",
    icon: <BiLogoMongodb />
  },
  // {
  //   label: "Figma",
  //   icon: <BiLogoFigma />
  // },
]

export const contacts = [
  {
    label: "github",
    url: "https://github.com/MayuHayakawa",
    icon: <BiLogoGithub />
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/mayu-hayakawa-45481a247/",
    icon: <BiLogoLinkedinSquare />
  }
]