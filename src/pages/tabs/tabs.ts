import { Component } from '@angular/core';

import { perfilPage } from '../perfil/perfil';
import { cartoesPage } from '../cartoes/cartoes';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = cartoesPage;
  tab3Root = perfilPage;


  constructor() {

  }
}
