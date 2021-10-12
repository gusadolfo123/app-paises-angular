import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, SearchBarComponent, SidebarComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [HeaderComponent, SearchBarComponent, SidebarComponent],
})
export class SharedModule {}
