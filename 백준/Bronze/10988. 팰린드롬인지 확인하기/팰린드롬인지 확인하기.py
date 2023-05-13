def is_palindrome(string):
    return int(string == string[::-1])

if __name__ == "__main__":
    string = input()
    print(is_palindrome(string))