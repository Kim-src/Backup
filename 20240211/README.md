** 나만의 깃허브(GitHub) 블로그 10분만에 만들기(Jekyll 기본 페이지)

# ✅ 싱크홀(공동) 자동 분석 AI 모델 VisualCavity 개발 시작

<br>

### 🔔 1. Introduction
### 📌 모델 소개
> - 모델명 : VisualCavity
> - 모델분류 : 이미지 학습 CNN AI 모델
> - 상세내용 : 싱크홀(공동) 자동 분석 프로그램 제작을 위한 이미지 학습 AI 모델
> - 개발목적 : 3D-GPR 데이터 분석 난이도 하향
> - 주요자료 : GPR 공동 탐사 데이터 및 30만장의 이미지

<br>

### 🔔 2. Methodology : TensorFlow 활용
> - Google Colab에서 

<br>

### 🔔 3. Results : 브라우저에 웹 페이지 호출
### 📌 새로운 Jekyll Project 생성
> - 이제 첫 깃허브 블로그 웹 페이지를 생성할 모든 준비가 완료되었습니다.
> - Git Bash에서 로컬 저장소로 접근 후 Jekyll 프로젝트를 생성하겠습니다.
> - 참고로 user-name/github.io 폴더 내에 파일이 이미 있으면 설치가 진행되지 않습니다.
> - 작성자의 Git Bash 입력 내용은 아래와 같습니다.
>   ```bash
>   $ cd /c/Users/ceoba/Dropbox/'2. PJT'/Kim-src.github.io
>   $ jekyll new ./
>   ```
> - 위 내용을 입력하면 Git Bash에 Jekyll 설치 관련 사항이 출력됩니다.
> - 그리고 로컬 저장소명 우측에 '(main)'이라는 문구가 도시됩니다.
> - 또한 로컬 저장소의 main 폴더는 아래와 같은 상태로 변경됩니다.
<p align="center"><img src="https://github.com/Kim-src/Images/assets/150884526/e733d653-1afe-4345-80e4-13511d8d6b2d" width="500px"></p>

### 📌 새로운 Bundle Tool 생성
> - 다음으로 Bundle Tool에 대한 설치가 필요합니다.
> - 참고로 상기 ```$ gem install bundler```는 이 Bundle 설치를 위한 초석입니다.
> - 작성자의 Git Bash 입력 내용은 아래와 같습니다.
>   ```bash
>   $ bundle install
>   $ bundle update
>   $ bundle install
>   ```
> - 위 내용을 입력하면 Git Bash에 Bundle tool 설치 관련 사항이 출력됩니다.
> - 그리고 로컬 저장소의 main 폴더는 아래와 같은 상태로 다시 변경됩니다.
<p align="center"><img src="https://github.com/Kim-src/Images/assets/150884526/670d434d-ee37-473b-9978-df490b2784dd" width="500px"></p>

### 📌 Jekyll의 기본 웹 페이지 호출
> - 드디어 기본 웹 페이지 호출 단계이며 로컬 서버 주소(URL)를 생성하겠습니다.
> - 작성자의 Git Bash 입력 내용은 아래와 같습니다.
>   ```bash
>   $ bundle exec jekyll serve
>   ```
> - 위 내용을 입력하면 Git Bash에 다양한 정보들과 함께 서버 주소가 출력됩니다.
> - 서버 주소는 아래와 같은 형식으로 출력되었을 것입니다.
>   ``` bash
>   Server address: http://127.0.0.1:4000/
>   ```
> - 50행 이상의 출력 내용 중에서 위 주소를 찾은 뒤 웹 브라우저에 주소를 입력하면 됩니다.
> - 만일 발견하지 못하셨더라도 일반적인 주소는 위 주소와 동일하니 Ctrl + C/V 하시면 됩니다.
> - 참고로 웹 브라우저란 Chrome, Microsoft Edge 등을 의미합니다.

### 📌 성공적으로 호출된 웹 페이지
> - 아래 이미지는 성공적으로 호출된 Jekyll의 기본 웹 페이지입니다.
<p align="center"><img src="https://github.com/Kim-src/Images/assets/150884526/33d309a9-8c3c-4b76-9728-a33b6b939968" width="500px"></p>

<br>

### 🔔 4. Conclusions : 추후 단계
### 📌 정식 깃허브 블로그 개설 및 테마 적용
> - Jekyll의 기본 웹 페이지 호출하기까지 고생 많으셨습니다.
> - 다음 글에서는 기본 Jekyll 블로그에 Chirpy 테마를 적용시켜보겠습니다.
> - 또한 로컬 서버 주소만이 아니라 도메인 주소로 블로그에 접속해보겠습니다.
> - 아래는 다음 글의 링크입니다.
> - [나만의 깃허브 블로그 꾸미기]()

<br>

### 🎁 5. References
> - [프로의 개발일지 블로그 1](https://devpro.kr/posts/Github-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-(1)/)
> - [프로의 개발일지 블로그 2](https://devpro.kr/posts/Github-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-(2)/)

<br>

***

<br>
<br>
<br>

