export interface Flashcard {
  question: string;
  answer: string;
}

export interface FlashcardSet {
  id: number;
  title: string;
  cards: Flashcard[];
}