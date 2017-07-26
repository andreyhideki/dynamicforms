import { Component }       from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <dynamic-form [questions]="questions"></dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class AppComponent {
  questions: any[];

  constructor(service: QuestionService) {
    console.log('aaaa1');
    this.questions = service.getQuestions();
    console.log(this.questions);
    console.log('aaaa2');
  }
}
