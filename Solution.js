

var size_s1, size_s2;
var a = "a".codePointAt(0);
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }
    size_s1 = s1.length;
    size_s2 = s2.length;

    return checkSubstringsForMatchWithPermutations(s1, s2);
};


function checkSubstringsForMatchWithPermutations(s1, s2) {

    const frequency_s1 = [];
    initializeFrequency(s1, frequency_s1);

    const frequency_s2 = [];
    initializeFrequency(s2, frequency_s2);

    for (let i = size_s1; i < size_s2; i++) {

        if (substringMatchWithPermutation(frequency_s1, frequency_s2)) {
            return true;
        }
        frequency_s2[s2.codePointAt(i - size_s1) - a]--;
        frequency_s2[s2.codePointAt(i) - a]++;
    }
    return substringMatchWithPermutation(frequency_s1, frequency_s2);
}

function initializeFrequency(s, frequency) {

    for (let i = 0; i < 26; i++) {
        frequency[i] = 0;
    }

    for (let i = 0; i < size_s1; i++) {
        frequency[s.codePointAt(i) - a]++;
    }
}

function substringMatchWithPermutation(frequency_s1, frequency_s2) {

    for (let i = 0; i < 26; i++) {
        if (frequency_s1[i] !== frequency_s2[i]) {
            return false;
        }
    }
    return true;
}
