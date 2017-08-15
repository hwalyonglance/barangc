import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgUserComponent } from './Components/ng-user/ng-user.component';

const routes: Routes = [
	{ path: 'ngregister', children: [
		{ path: 'nguser', component: NgUserComponent }
	] }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class NgRegisterRoutingModule { }
