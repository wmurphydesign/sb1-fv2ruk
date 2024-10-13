import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { FlashcardService } from '../services/flashcard.service';
import { AdService } from '../services/ad.service';

@Component({
  selector: 'ns-create-set',
  templateUrl: './create-set.component.html',
  styleUrls: ['./create-set.component.css']
})
export class CreateSetComponent {
  topic: string = '';
  level: string = 'Beginner';
  cardCount: number = 10;
  isGenerating: boolean = false;
  showAdWall: boolean = false;

  constructor(
    private router: RouterExtensions,
    private flashcardService: FlashcardService,
    private adService: AdService
  ) {}

  onCreateFlashcards() {
    this.showAdWall = true;
    this.adService.showAd().subscribe(() => {
      this.showAdWall = false;
      this.generateFlashcards();
    });
  }

  private generateFlashcards() {
    this.isGenerating = true;
    this.flashcardService.createFlashcardSet(this.topic, this.level, this.cardCount).subscribe(
      newSet => {
        this.isGenerating = false;
        this.router.navigate(['/flashcards', newSet.id]);
      },
      error => {
        console.error('Error generating flashcards:', error);
        this.isGenerating = false;
        // Handle error (e.g., show an alert to the user)
      }
    );
  }
}