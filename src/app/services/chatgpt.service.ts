import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flashcard } from '../models/flashcard-set.model';

@Injectable({
  providedIn: 'root'
})
export class ChatGPTService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions'; // Replace with the actual ChatGPT API endpoint
  private apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

  constructor(private http: HttpClient) {}

  generateFlashcards(topic: string, level: string, count: number): Observable<Flashcard[]> {
    const prompt = `Generate ${count} flashcards about ${topic} for ${level} level. Format as JSON array with "question" and "answer" fields.`;
    
    return this.http.post<any>(this.apiUrl, {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000,
      temperature: 0.7
    }, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
  }
}