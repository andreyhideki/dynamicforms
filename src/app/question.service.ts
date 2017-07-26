import { CheckboxQuestion } from './question-checkbox';
import { RadioQuestion } from './question-radio';
import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        type: 'text',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new RadioQuestion({
        key: 'testeradio',
        label: 'Teste Radio',
        type: 'radio',
        options: [
          {key: '1', value: '1'},
          {key: '2', value: '2'},
          {key: '3', value: '3'},
          {key: '4', value: '4'}
        ],
        order: 4
      }),

      new RadioQuestion({
        key: 'testeradio2',
        label: 'Teste Radio2',
        type: 'radio',
        options: [
          {key: '5', value: '5'},
          {key: '6', value: '6'},
          {key: '7', value: '7'},
          {key: '8', value: '8'}
        ],
        order: 5
      }),

      new DropdownQuestion({
        key: 'brave2',
        label: 'Bravery Rating2',
        options: [
          {key: 'solid2',  value: 'Solid2'},
          {key: 'great2',  value: 'Great2'},
          {key: 'good2',   value: 'Good2'},
          {key: 'unproven2', value: 'Unproven2'}
        ],
        order: 6
      }),

      new CheckboxQuestion({
        key: 'checkbox',
        label: 'Permite selecionar',
        type: 'checkbox',
        required: true,
        order: 8
      }),

      new TextboxQuestion({
        key: 'teste',
        label: 'teste',
        value: 'teste',
        required: true,
        order: 7
      }),


      // new TextboxQuestion({
      //   key: 'nome',
      //   label: 'Nome',
      //   // value: 'Bombasto',
      //   type: 'text',
      //   required: true,
      //   order: 1
      // }),

      // new TextboxQuestion({
      //   key: 'dataDeNascimento',
      //   label: 'Data de Nascimento',
      //   type: 'text',
      //   order: 2
      // }),

      // new TextboxQuestion({
      //   key: 'rh',
      //   label: 'RH',
      //   type: 'text',
      //   required: true,
      //   order: 3
      // }),

      // new TextboxQuestion({
      //   key: 'cpf',
      //   label: 'CPF',
      //   type: 'text',
      //   required: true,
      //   order: 4
      // }),

      // new TextboxQuestion({
      //   key: 'cnh',
      //   label: 'CNH',
      //   type: 'text',
      //   required: true,
      //   order: 5
      // }),

      // new TextboxQuestion({
      //   key: 'telefone',
      //   label: 'Telefone',
      //   type: 'text',
      //   required: true,
      //   order: 6
      // }),

      // new RadioQuestion({
      //   key: 'temFilhos',
      //   label: 'Tem Filhos?',
      //   type: 'radio',
      //   options: [
      //     {key: 'Sim',  value: 'T'},
      //     {key: 'Não',  value: 'F'},
      //   ],
      //   order: 7
      // }),

    ];
    // console.log(questions);
    // console.log('eee');

    // http://embed.plnkr.co/6XKA5Bk8Oor8dP8pL1xr/


    return questions.sort((a, b) => a.order - b.order);
  }
}
