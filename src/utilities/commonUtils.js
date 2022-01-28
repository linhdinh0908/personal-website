import Profile from "../components/Home/Profile";
import AboutMe from "../components/AboutMe/AboutMe"
import Projects from "../components/Projects/Projects";
import ContactMe from "../components/Contact/ContactMe";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Profile,
  },
  {
    screen_name: "AboutMe",
    component: AboutMe,
  },
  {
    screen_name: "Projects",
    component: Projects,
  },
  
  {
    screen_name: "ContactMe",
    component: ContactMe,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};
