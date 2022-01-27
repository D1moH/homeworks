'use strict'

const checkForSpam = function(messages) {
    messages = messages.toLowerCase().replace(/[^a-zа-яё\s]/gi, '');
    messages = messages.split(' ')

    for ( const message of messages ) {
        let word = message;
        if ( word === 'spam' || word === 'sale' ) {
            return true;
        }
    }
    return false;
}
console.log(checkForSpam('[SPAM] How to earn fast money?'));
console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));