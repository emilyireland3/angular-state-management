import { Routes } from '@angular/router';
import { Home } from './internal/home';
import { HomePage } from './internal/pages/homes';

export const lab1FeatureRoutes: Routes = [
  {
    path: '',
    providers: [],
    component: Home,
    children: [
      {
        path: '',
        component: HomePage,
      },
    ],
  },
];
