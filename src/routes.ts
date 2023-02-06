import {Routes} from '@angular/router';
import {TryOneComponent} from './app/try-one/try-one.component';
import {TryTwoComponent} from './app/try-two/try-two.component';
import {TryThreeComponent} from './app/try-three/try-three.component';
import {DynamicInputComponent} from './app/dynamic-input/dynamic-input.component'

export const routes: Routes = [
    {path: '', redirectTo: 'try-one', pathMatch: 'full' },
    {path: 'try-one', component: TryOneComponent},
    {path: 'try-two', component: TryTwoComponent},
    {path: 'try-three', component: TryThreeComponent},
    {path: 'dynamic-input', component: DynamicInputComponent}

];
