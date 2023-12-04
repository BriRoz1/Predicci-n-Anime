import { Component } from '@angular/core';
import { AnimePredictionServiceService } from './anime-prediction-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  episodes: number = 0;
  members: number = 0;
  score: number = 0;
  ranked: number= 0;
  predictedPopularity: number | undefined;
  popularityLabel: string | undefined;

  constructor(private predictionService: AnimePredictionServiceService) {}

  predict(): void {
    this.predictionService.predictPopularity(this.episodes, this.members, this.score, this.ranked)
      .subscribe(
        (response: { predicted_popularity: number | undefined; }) => {
          this.predictedPopularity = response.predicted_popularity;
          this.setPopularityLabel(this.predictedPopularity);
        },
        (error: any) => {
          console.error('Error al predecir la popularidad:', error);
        }
      );
  }

  setPopularityLabel(popularity: number | undefined): void {
    if (popularity !== undefined) {
      if (popularity >= 1 && popularity <= 5000) {
        this.popularityLabel = 'Alta';
      } else if (popularity > 5000 && popularity <= 10000) {
        this.popularityLabel = 'Media';
      } else if (popularity > 10000 && popularity <= 16338) {
        this.popularityLabel = 'Baja';
      } else {
        this.popularityLabel = 'Fuera de rango';
      }
    } else {
      this.popularityLabel = undefined;
    }
  }
}
