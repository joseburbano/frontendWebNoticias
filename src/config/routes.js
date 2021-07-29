// Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

//Admin Pages
import AdminHome from "../pages/Admin";
import AdminSingIn from "../pages/Admin/SignIn";
import AdminUsers from "../pages/Admin/Users";
import AdminMenuWeb from "../pages/Admin/MenuWeb";
import AdminSubMenuWeb from "../pages/Admin/SubMenuWeb";
import AdminNoticias from "../pages/Admin/Noticias";

//pages de usuario
 import Home from "../pages/usuarios/Home.js";
 import Contact from "../pages/usuarios/Contact";
 import Huila from "../pages/usuarios/Huila";
 import Caqueta from "../pages/usuarios/Caqueta";
 import Tolima from "../pages/usuarios/Tolima";
 import Putumayo from "../pages/usuarios/Putumayo";
 import Equino from "../pages/usuarios/Equino";
 import Internacional from "../pages/usuarios/Internacional";
 import Agricultura from "../pages/usuarios/Agricultura";
 import Tendencias from "../pages/usuarios/Tendencias";
 import Politicas from "../pages/usuarios/Polit";
 import Nacional from "../pages/usuarios/Nacional.js";

//other pages
import Error404 from "../pages/Error404";

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        exact: true,
      },
      {
        path: "/admin/login",
        component: AdminSingIn,
        exact: true,
      },
      {
        path: "/admin/menu",
        component: AdminMenuWeb,
        exact: true,
      },
      {
        path: "/admin/submenu",
        component: AdminSubMenuWeb,
        exact: true,
      },
      {
        path: "/admin/users",
        component: AdminUsers,
        exact: true,
      },
      {
        path: "/admin/noticias",
        component: AdminNoticias,
        exact: true,
      },
      {
        path: "/admin/noticias",
        component: AdminUsers,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
       {
         path: "/",
         component: Home,
         exact: true,
       },
       {
         path: "/contac",
         component: Contact,
         exact: true,
       },
       {
         path: "/huila",
         component: Huila,
         exact: true,
       },
       {
         path: "/caqueta",
         component: Caqueta,
         exact: true,
       },
       {
         path: "/tolima",
         component: Tolima,
         exact: true,
       },
       {
         path: "/putumayo",
         component: Putumayo,
         exact: true,
       },
       {
         path: "/agricultura",
         component: Agricultura,
         exact: true,
       },
       {
         path: "/equino",
         component: Equino,
         exact: true,
       },
       {
         path: "/tendencia",
         component: Tendencias,
         exact: true,
       },
       {
         path: "/internacional",
         component: Internacional,
         exact: true,
       },
       {
         path: "/Politi",
         component: Politicas,
         exact: true,
       },
       {
        path: "/nacional",
        component: Nacional,
        exact: true,
      },
       {
         component: Error404,
       },
    ],
  },
];

export default routes;