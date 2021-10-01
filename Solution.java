
public class Solution {

    int size_s1;
    int size_s2;

    public boolean checkInclusion(String s1, String s2) {
        if (s1.length() > s2.length()) {
            return false;
        }
        size_s1 = s1.length();
        size_s2 = s2.length();

        return checkSubstringsForMatchWithPermutations(s1, s2);
    }

    public boolean checkSubstringsForMatchWithPermutations(String s1, String s2) {
        int[] frequency_s1 = new int[26];
        initializeFrequency(s1, frequency_s1);

        int[] frequency_s2 = new int[26];
        initializeFrequency(s2, frequency_s2);

        for (int i = size_s1; i < size_s2; i++) {

            if (substringMatchWithPermutation(frequency_s1, frequency_s2)) {
                return true;
            }
            frequency_s2[s2.charAt(i - size_s1) - 'a']--;
            frequency_s2[s2.charAt(i) - 'a']++;

        }
        return substringMatchWithPermutation(frequency_s1, frequency_s2);
    }

    public void initializeFrequency(String s, int[] frequency) {
        for (int i = 0; i < size_s1; i++) {
            frequency[s.charAt(i) - 'a']++;
        }
    }

    public boolean substringMatchWithPermutation(int[] frequency_s1, int[] frequency_s2) {

        for (int i = 0; i < 26; i++) {
            if (frequency_s1[i] != frequency_s2[i]) {
                return false;
            }
        }
        return true;
    }
}
