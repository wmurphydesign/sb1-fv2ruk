import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlashcardSet } from '../models/flashcard-set.model';
import { FlashcardService } from '../services/flashcard.service';

@Component({
  selector: 'ns-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent implements OnInit {
  flashcardSet: FlashcardSet;
  currentCardIndex: number = 0;
  showAnswer: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private flashcardService: FlashcardService
  ) {}

  ngOnInit() {
    const setId = +this.route.snapshot.params.id;
    this.flashcardSet = this.flashcardService.getFlashcardSet(setId);
  }

  onFlipCard() {
    this.showAnswer = !this.showAnswer;
  }

  onNextCard() {
    this.currentCardIndex = (this.currentCardIndex + 1) % this.flashcardSet.cards.length;
    this.showAnswer = false;
  }

  onPreviousCard() {
    this.currentCardIndex = (this.currentCardIndex - 1 + this.flashcardSet.cards.length) % this.flashcardSet.cards.length;
    this.showAnswer = false;
  }
}