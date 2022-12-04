import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AllMoviesPage} from "./all-movies-page/all-movies-page.component";
import {FavoriteMoviesPage} from "./favorite-movies-page/favorite-movies-page.component";
// import {AboutComponent} from "./about/about.component";
// import {PostsComponent} from "./posts/posts.component";
// import {PostComponent} from "./post/post.component";

const routes: Routes = [
  {path: '', component: AllMoviesPage},
  {path: 'favorite', component: FavoriteMoviesPage},
  {path: '**', redirectTo: ''}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
