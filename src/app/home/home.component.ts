import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { FlashcardSet } from '../models/flashcard-set.model';
import { FlashcardService } from '../services/flashcard.service';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cardSets: FlashcardSet[] = [];

  constructor(
    private router: RouterExtensions,
    private flashcardService: FlashcardService
  ) {}

  ngOnInit() {
    this.cardSets = this.flashcardService.getFlashcardSets();
  }

  onCreateNewSet() {
    this.router.navigate(['/create-set']);
  }

  onSelectSet(setId: number) {
    this.router.navigate(['/flashcards', setId]);
  }
}