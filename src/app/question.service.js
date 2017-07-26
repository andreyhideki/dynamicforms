"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var question_checkbox_1 = require("./question-checkbox");
var question_radio_1 = require("./question-radio");
var core_1 = require("@angular/core");
var question_dropdown_1 = require("./question-dropdown");
var question_textbox_1 = require("./question-textbox");
var QuestionService = (function () {
    function QuestionService() {
    }
    // Todo: get from a remote source of question metadata
    // Todo: make asynchronous
    QuestionService.prototype.getQuestions = function () {
        var questions = [
            new question_dropdown_1.DropdownQuestion({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3
            }),
            new question_textbox_1.TextboxQuestion({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                type: 'text',
                required: true,
                order: 1
            }),
            new question_textbox_1.TextboxQuestion({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            }),
            new question_radio_1.RadioQuestion({
                key: 'testeradio',
                label: 'Teste Radio',
                type: 'radio',
                options: [
                    { key: '1', value: '1' },
                    { key: '2', value: '2' },
                    { key: '3', value: '3' },
                    { key: '4', value: '4' }
                ],
                order: 4
            }),
            new question_radio_1.RadioQuestion({
                key: 'testeradio2',
                label: 'Teste Radio2',
                type: 'radio',
                options: [
                    { key: '5', value: '5' },
                    { key: '6', value: '6' },
                    { key: '7', value: '7' },
                    { key: '8', value: '8' }
                ],
                order: 5
            }),
            new question_dropdown_1.DropdownQuestion({
                key: 'brave2',
                label: 'Bravery Rating2',
                options: [
                    { key: 'solid2', value: 'Solid2' },
                    { key: 'great2', value: 'Great2' },
                    { key: 'good2', value: 'Good2' },
                    { key: 'unproven2', value: 'Unproven2' }
                ],
                order: 6
            }),
            new question_checkbox_1.CheckboxQuestion({
                key: 'checkbox',
                label: 'Permite selecionar',
                type: 'checkbox',
                required: true,
                order: 8
            }),
            new question_textbox_1.TextboxQuestion({
                key: 'teste',
                label: 'teste',
                value: 'teste',
                required: true,
                order: 7
            }),
        ];
        // console.log(questions);
        // console.log('eee');
        // http://embed.plnkr.co/6XKA5Bk8Oor8dP8pL1xr/
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    return QuestionService;
}());
QuestionService = __decorate([
    core_1.Injectable()
], QuestionService);
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map