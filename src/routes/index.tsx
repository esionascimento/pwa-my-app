import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const LayoutDefault = lazy(() => import("../layouts/LayoutDefault"));
const DashboardPages = lazy(() => import("../pages/dashboard/app"));
const NotFound = lazy(() => import("../pages/not-found"));

const createPage = (Element: React.FC, Layout: React.FC<any>) => {
  if (!Layout) return <Element />;

  return (
    <Layout>
      <Element />
    </Layout>
  );
};

const routes = [
  {
    path: "/",
    element: DashboardPages,
    layout: LayoutDefault,
  },
  {
    path: "*",
    element: NotFound,
  },
];

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route: any, index) => {
            const Component = () =>
              createPage(route.element, route?.layout as React.FC<any>);
            return (
              <Route key={index} path={route.path} element={<Component />} />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
