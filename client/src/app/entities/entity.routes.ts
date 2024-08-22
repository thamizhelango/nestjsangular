import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'region',
    data: { pageTitle: 'nestjsApp.region.home.title' },
    loadChildren: () => import('./region/region.routes'),
  },
  {
    path: 'country',
    data: { pageTitle: 'nestjsApp.country.home.title' },
    loadChildren: () => import('./country/country.routes'),
  },
  {
    path: 'location',
    data: { pageTitle: 'nestjsApp.location.home.title' },
    loadChildren: () => import('./location/location.routes'),
  },
  {
    path: 'department',
    data: { pageTitle: 'nestjsApp.department.home.title' },
    loadChildren: () => import('./department/department.routes'),
  },
  {
    path: 'task',
    data: { pageTitle: 'nestjsApp.task.home.title' },
    loadChildren: () => import('./task/task.routes'),
  },
  {
    path: 'employee',
    data: { pageTitle: 'nestjsApp.employee.home.title' },
    loadChildren: () => import('./employee/employee.routes'),
  },
  {
    path: 'job',
    data: { pageTitle: 'nestjsApp.job.home.title' },
    loadChildren: () => import('./job/job.routes'),
  },
  {
    path: 'job-history',
    data: { pageTitle: 'nestjsApp.jobHistory.home.title' },
    loadChildren: () => import('./job-history/job-history.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
