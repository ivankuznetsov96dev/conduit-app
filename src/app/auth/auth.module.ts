import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, AuthRoutingModule],
  providers: [],
})
export class AuthModule {}
