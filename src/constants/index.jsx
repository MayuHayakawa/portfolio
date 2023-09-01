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
    github: "/mayu-portfolio/src/assets/CoffeeRecipes.png",
    image: "../src/assets/CoffeeRecipes.png",
    tools: ["HTML", "CSS", "JavaScript"],
    comment_en: <p>This site allows you getting coffee recipes.You choose hot or iced.</p>,
    comment_jp: <p>コーヒーのレシピがホットかアイスを選択して確認できるサイト</p>
  },
  {
    label: "e-commerce Site",
    url: "https://e-commerce-site-cyan.vercel.app/",
    github: "https://github.com/MayuHayakawa/e-commerce-site",
    image: "../src/assets/image/Artificial-Nails-Online-Store.png",
    tools: ["HTML", "SCSS", "JavaScript"],
    comment_en: <p>An E-commerce site. You can pick products and items go into shopping cart.</p>,
    comment_jp: <p>ショッピングカート機能付きE-コマースサイト</p>
  },
  {
    label: "Free Game Search",
    url: "https://free-game-search.vercel.app/",
    github: "https://github.com/MayuHayakawa/free-game-search",
    image: "../src/assets/image/FreeGameSearch.png",
    tools: ["HTML", "CSS", "JavaScript", "React"],
    comment_en: <p>A games search site. You can sort them by plathome and genre.<br/>Also it allows light/dark mode selects.</p>,
    comment_jp: <p>プラットフォームやジャンルでのソート可能な無料ゲーム検索サイト<br/>ライト・ダークのモード変換機能付き</p>
  },
  {
    label: "Cocktail Recipes",
    url: "https://cocktail-search-app-delta.vercel.app/",
    github: "https://github.com/MayuHayakawa/Cocktail-Search-App",
    image: "../src/assets/image/CocktailRecipes.png",
    tools: ["HTML", "CSS", "TypeScript", "React"],
    comment_en: <p>This site allows you find cocktail recipes by name, ingredients.<br/>You can also keep your favorite recipes.</p>,
    comment_jp: <p>名前や材料でカクテルのレシピを検索できるサイト<br/>お気に入り機能付き</p>
  },
  {
    label: "Salon Booking System",
    url: "https://salon-booking-system-frontend.vercel.app/",
    github: "https://github.com/MayuHayakawa/salon-booking-system",
    image: "../src/assets/image/SalonBooking.png",
    tools: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    comment_en: <p>A salon booking site has login function.<br/>You can pick a menu, stylist and date and check your status.<br/>To learn my site you can sign-in without create your account.<br/>As a customer &#40;address: test@test.com / password: test&#41;<br/>As an admin &#40;address: admin@admin.com / password: admin&#41;</p>,
    comment_jp: <p>ログイン機能付きのサロン予約サイト<br/>予約機能、ユーザーの予約状況や登録情報の確認や変更も可能<br/>新規でユーザー登録しなくても以下ログイン情報にてデモページを確認いただけます😄<br/>ユーザー画面 &#40;address: test@test.com / password: test&#41;<br/>管理者画面 &#40;address: admin@admin.com / password: admin&#41;</p>
  },
  {
    label: "Work Cafe Hub",
    url: "https://work-cafe-hub.vercel.app/",
    github: "https://github.com/MayuHayakawa/work-cafe-hub",
    image: "../src/assets/image/WorkCafeHub.png",
    tools: ["HTML", "CSS", "TypeScript", "Next.js", "MongoDB"],
    comment_en: <p>This site shares cafe information to do the work. It has login function and varification.<br/>Users can share cafe&rsquo;s information and like other&rsquo;s post and follow&rsquo;s others.<br/>I&rsquo;m going to update this site, then I hope information posted on this site must be useful for developers!</p>,
    comment_jp: <p>作業するためのカフェ情報をシェアするためのサイトで、ログインの際に認証機能付き<br/>ユーザーはカフェの情報の投稿はもちろん、いいね機能や他ユーザーをフォローすることもできます<br/>もっと使いやすくして実用化に向けて今後もアップデート予定です！</p>
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