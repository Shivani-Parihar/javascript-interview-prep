// String given - abcabcbb

function lengthofLongestSubStr(str) {
    let maxLength = 0;
    let longestSubStr = '';

    for (let char of str) {
        if (longestSubStr.includes(char)) {
            index = longestSubStr.indexOf(char);

            longestSubStr = longestSubStr.substring(index + 1);
        }

        longestSubStr += char;

        if (longestSubStr.length > maxLength) {
            maxLength = longestSubStr.length;
        }
    }

    return maxLength;
}
