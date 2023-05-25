n, k = map(int, input().split())

# list(map())을 이용해 공백을 기준으로 입력받는 숫자들을 바로 리스트로 만들어줌
# sorted()를 이용해 리스트를 오름차순으로 정렬하고 x에 할당
x = sorted(list(map(int, input().split())))


# 오름 차순이므로 커트라인은 제일 뒤에서부터 계산
# -k 번째 사람까지 합격
print(x[-k])