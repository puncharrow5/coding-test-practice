class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        score_with_index = []
        score_length = len(score)
        result = [None] * score_length 

        for i in range(score_length):
            score_with_index.append([score[i], i])

        score_with_index.sort(key=lambda x: x[0], reverse=True)

        for i in range(score_length):
            index = score_with_index[i][1]
            rank = i + 1

            if rank == 1:
                result[index] = "Gold Medal"
            elif rank == 2:
                result[index] = "Silver Medal"
            elif rank == 3:
                result[index] = "Bronze Medal"
            else:
                result[index] = str(rank)
        
        return result

