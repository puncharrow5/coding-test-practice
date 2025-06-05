def solution(phone_book):
    phone_book.sort()
    
    for i in range(len(phone_book) - 1):
        current_number = phone_book[i]
        next_number = phone_book[i+1]
        
        if next_number.startswith(current_number):
            return False
    
    return True 