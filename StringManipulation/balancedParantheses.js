// Input: "((()))"
// Output: True

// Input: "[()]{}"
// Output: True

// Input: "({[)]"
// Output: False

function  isStringValid(str) {
    const bracketMap = new  Map();

    bracketMap.set(')', '(');
    bracketMap.set('}', '{');
    bracketMap.set(']', '[');

    bracketStack = [];

    if (str.length === 0) {
        return true;
    }

    for (let ch of str) {
        if (bracketMap.has(ch)) {
            let top = bracketStack.length ? bracketStack.pop() : '#';

            if  (bracketMap.get(ch) !== top) {
                return false;
            }
        } else  {
            bracketStack.push(ch);
        }
    }

    return bracketStack.length ===  0;
}