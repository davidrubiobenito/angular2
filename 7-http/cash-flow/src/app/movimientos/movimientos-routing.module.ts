import { RouterModule, Routes } from '@angular/router';

/** Importación de los componentes enrutables */
import { EditorComponent } from './editor/editor.component';
import { ListaComponent } from './lista/lista.component';
import { MovimientosComponent } from './movimientos.component';
import { NgModule } from '@angular/core';
import { NuevoComponent } from './nuevo/nuevo.component';

/** Rutas que se manejan en este módulo
 * /movimientos
 * /movimientos/nuevo
 * /movimientos/lista
 * /movimientos/42
 */
const routes: Routes = [
  {
    path: 'movimientos',
    component: MovimientosComponent, // tiene sus cosas y ... un router-oulet para sus hijos
    children: [ // rutas hijas, se verán dentro del router-oulet componente contenedor
      {
        path: 'nuevo', // la ruta real es movimientos/nuevo
        component: NuevoComponent
      },
      {
        path: 'lista', // se ven dentro del componente MovimientosComponent
        component: ListaComponent
      }
    ]
  },
  {
    path: 'movimientos/:id', // parámetro variable id
    component: EditorComponent // se verá dentro del router-oulet principal
  }
];
/**
 * Componentes usados por estas rutas
 * El módulo funcional asociado debe declararlos
 * Para no hacerlo dos veces, se exportan ya sus importaciones locales
 */
export const routableComponents = [
  EditorComponent,
  NuevoComponent,
  ListaComponent,
  MovimientosComponent
]

@NgModule({
  imports: [RouterModule.forChild(routes)], // configuración para un módulo hijo
  exports: [RouterModule], // se importará en su módulo funcional asociado
  providers: []
})
export class MovimientosRoutingModule { }
