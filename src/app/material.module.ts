import {NgModule} from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FlexLayoutModule } from '@angular/flex-layout';

const MODULES=[
    MatButtonModule, MatCardModule, MatFormFieldModule, 
    MatIconModule, MatInputModule, MatListModule,
    MatRadioModule, MatToolbarModule, MatToolbarModule,
    MatDatepickerModule, MatMomentDateModule, FlexLayoutModule
]

@NgModule({
    imports: MODULES,
    exports: MODULES
})

export class MaterialModule {}