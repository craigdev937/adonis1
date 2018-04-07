'use strict'

class SaveTodo {
    get rules () {
        return {
        // validation rules
        text: 'required|min:8'
        }
    }
    get message () {
        return {
            'text.required': 'Please enter some text.',
            'text.min': 'Your todo is not long enough.'
        }
    }
    async fails (errorMessages) {
        this.ctx.session.withErrors(errorMessages).flashAll();
        return this.ctx.response.redirect('back');
    }
}

module.exports = SaveTodo

