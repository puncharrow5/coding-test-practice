class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagram_groups = defaultdict(list)

        for str in strs:
            key = "".join(sorted(str))

            anagram_groups[key].append(str)

        return list(anagram_groups.values())