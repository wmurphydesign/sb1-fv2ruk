import { Injectable } from '@angular/core';
import { FlashcardSet, Flashcard } from '../models/flashcard-set.model';
import { ChatGPTService } from './chatgpt.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private flashcardSets: FlashcardSet[] = [];
  private nextId = 1;

  constructor(private chatGPTService: ChatGPTService) {}

  getFlashcardSets(): FlashcardSet[] {
    return this.flashcardSets;
  }

  getFlashcardSet(id: number): FlashcardSet {
    return this.flashcardSets.find(set => set.id === id);
  }

  createFlashcardSet(topic: string, level: string, cardCount: number): Observable<FlashcardSet> {
    return this.chatGPTService.generateFlashcards(topic, level, cardCount).pipe(
      map(cards => {
        const newSet: FlashcardSet = {
          id: this.nextId++,
          title: `${topic} (${level})`,
          cards: cards
        };
        this.flashcardSets.push(newSet);
        return newSet;
      })
    );
  }
}