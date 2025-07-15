class Solution:
    def decodeString(self, s: str) -> str:
        self.index = 0

        def decodeRecursive():
            current_string = []
            current_number = 0 

            while self.index < len(s):
                char = s[self.index]

                if '0' <= char <= '9':
                    current_number = current_number * 10 + int(char)

                elif char == '[':
                    self.index += 1
                    
                    nested_decoded_string = decodeRecursive() 

                    current_string.append(nested_decoded_string * current_number)
                    current_number = 0

                elif char == ']':
                    return "".join(current_string)

                else:
                    current_string.append(char)
                
                self.index += 1 
            
            return "".join(current_string)

        return decodeRecursive()