import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathComponent } from './math.component';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { ScoresComponent } from './components/scores/scores.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { ScoreListComponent } from './components/score-list/score-list.component';
import { GameOverGuard } from './guards/game-over.guard';
import { SavedScoresComponent } from './components/saved-scores/saved-scores.component';
import { EffectsModule } from '@ngrx/effects';
import { SavedScoresEffects } from './effects/saved-scores.effects';
import { NewQuestionsComponent } from './components/new-questions/new-questions.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'math',
    component: MathComponent,
    children: [
      {
        path: '', redirectTo: 'game', pathMatch: 'full'
      },
      {
        path: 'game',
        component: GameComponent
      },
      {
        path: 'scores',
        component: ScoresComponent,
        canActivate: [GameOverGuard]
      },
      {
        path: 'saved-scores',
        component: SavedScoresComponent
      },
      {
        path: 'new-question',
        component: NewQuestionsComponent
      }
   ]
  }
];

@NgModule({
  declarations: [MathComponent, GameComponent, ScoresComponent, ScoreListComponent, SavedScoresComponent, NewQuestionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([SavedScoresEffects]),
    ReactiveFormsModule
  ]
})
export class MathModule { }
