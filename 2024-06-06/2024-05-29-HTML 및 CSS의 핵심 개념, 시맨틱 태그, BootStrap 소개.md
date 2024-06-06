---
title: HTML 및 CSS의 핵심 개념, 시맨틱 태그, BootStrap 소개
date: 2024-05-29 18:00:00 +09:00
categories: [1. Fundamental, Frontend]
tags: [Fundamental, HTML, CSS, JavaScript, Frontend, Tag, Head, Body, Semantic Tag, Live Server, IDE, Browser, Plugin]
---

<!-- 2024-05-27 글 작성 시작; 2024-05-29 페이지 호출 완료 -->
<h2>강의 내용 복습 : 코리아IT 신촌점 강의 (2024-05-20,21 강의)</h2>
> - Tool :  
<img alt="VS Code" src="https://img.shields.io/badge/-VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white" />
<img alt="HTML5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
<img alt="CSS3" src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />

<br>

### 🔔 HTML
### 📌 HTML 소개
> - HTML은 HyperText Markup Language의 약자입니다.
> - 웹 페이지의 구조를 정의하는 데 사용되는 주요 언어입니다.
> - HTML은 태그(tag)와 요소(element)로 구분됩니다.
> - 태그는 ```<head></head>, <body></body>, <footer></footer>``` 등을 지칭합니다.
> - 요소는 태그를 포함하는 개념이며 시작 태그, 태그 내부 콘텐츠, 종료 태그로 구성됩니다.
> - 참고로 HTML의 기본적인 문서 구조는 head 및 body 태그로 구분됩니다.

### 📌 HTML 요소
> - 각각의 HTML의 요소(element) 중에는 특정 속성을 부여할 수 있는 키워드가 있습니다.
> - id : 개별 요소를 식별하기 위한 식별자 역할을 하며 페이지 내에서 중복될 수 없습니다.
> - class : 중복하여 사용할 수 있으며 클래스에 따른 스타일 등을 정의할 수 있습니다.
> - name : 입력 필드를 그룹화하거나 식별할 때 이용됩니다.
> - type : input 요소의 유형을 지정하는 것이며 text, password 등으로 정의됩니다.
> - style : 요소에 직접적으로 스타일을 적용시키기 위해 사용됩니다.
> - value : 입력 요소에 현재 값을 설정하기 위해 사용됩니다.
> - placeholder : 사용자가 입력하기 전에 표시되는 안내 문구 입력을 위해 사용됩니다.
> - readonly : 입력 필드를 읽기 전용으로 설정하기 위해 사용됩니다.

### 📌 HTML 속성
> - HTML에서 요소(elements), 태그(tags), 속성(attributes)은 중요한 개념입니다.
> - 속성은 요소의 기능 또는 특성을 정의합니다.
> - 속성에는 id, class, name이 포함됩니다.
> - id는 요소를 유일하게 식별하는 식별자 역할을 합니다.
> - class에는 보통 요소에 적용할 스타일을 지정합니다.
> - name의 경우 서버로 전송되는 데이터를 식별하는 데 사용된다고 합니다.

### 📌 HTML 태그의 종류
> - HTML 태그는 아래와 같이 구분할 수 있습니다.
> - 아래 태그를 활용하면 HTML 문서를 효율적으로 작성하고 꾸밀 수 있습니다.
>    - 싱글 태그 : 종료 태그가 필요 없이 홀로 사용되는 태그(br, img, input 등)
>    - 쌍 태그 : 시작 태그와 종료 태그가 서로 연결되는 태그(head, body, li 등)
>    - 블록 레벨 태그 : 주변 내용과 상/하로 간격을 갖는 태그(div, p 등)
>    - 인라인 태그 : 내용만큼만 공간을 차지하는 태그(span 등)

### 📌 head 태그
> - head 태그에는 웹 페이지의 메타 데이터가 포함됩니다.
> - 메타 데이터에는 문서의 인코딩 방식, 반응형 웹 제작을 위한 viewport 속성 등이 포함됩니다.
> - head 태그에 담긴 내용은 주로 웹 브라우저와 검색 엔진에 사용됩니다.
> - 페이지의 내용이나 레이아웃은 body 태그에 포함됩니다.

### 📌 body 태그
> - body 태그에는 웹 브라우저에 표시되는 모든 콘텐츠가 포함됩니다.
> - 콘텐츠에는 텍스트, 이미지, 비디오, 스크립트 등이 포함됩니다.
> - 참고로 footer 태그에는 저작권 정보, 사이트맵 등이 포함됩니다.

### 📌 table 생성
> - HTML에서는 표를 생성하는 태그가 별도로 존재합니다.
> - 테이블 생성을 위한 기본 태그는 ```<table>, <thead>, <tbody>, <tr>, <th>, <td>```입니다.
> - table 태그 : HTML에서 표 생성을 위한 기본 프레임워크 태그입니다.
> - thead 태그 : table head의 축약어로 컬럼명 입력을 위한 태그입니다.
> - tbody 태그 : table body의 축약어로 실제 데이터 입력을 위한 태그입니다.
> - tr 태그 : table row의 축약어로 표의 행을 구분하기 위한 태그입니다.
> - th 태그 : table header의 축약어로 각 컬럼의 이름 입력을 위한 태그입니다.
> - td 태그 : table data의 축약어로 각 행의 데이터 입력을 위한 태그입니다.
> - 태그 작성 순서는 보통 table, thead, tr, th, tbody, tr, td 순입니다.

### 📌 Semantic tag
> - 시맨틱(semantic) 태그는 HTML5에서 도입된 태그 집단입니다.
> - Semantic 단어 뜻은 의미가 있다는 것입니다.
> - 그러므로 시맨틱 태그란 의미가 부여된 태그 집단을 뜻합니다.
> - 시맨틱 태그의 목적은 HTML 코드를 보다 명확하게 구분하는 것입니다.
> - 시맨틱 태그를 사용하면 검색 엔진 최적화(SEO)에 보다 유리합니다.
> - 글 최하단에는 Semantic tag를 이용하여 문단을 구분한 예시가 있습니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/c6066466-34e4-4136-a059-5ffe31c7bf44" alt="figure">
    <figcaption>시맨틱 태그와 div 태그 비교 (출처 : SEMRUSH)</figcaption>
</figure>

<br>

### 🔔 CSS
### 📌 CSS 소개
> - CSS는 웹 페이지의 스타일을 정의하는 언어입니다.
> - 기본적인 HTML 스타일에서 레이아웃, 색상, 간격 등을 변경할 수 있는 언어입니다.
> - CSS의 주된 목적은 웹 페이지의 스타일에 대한 정의를 HTML과 분리하는 것입니다.
> - 이로 얻게되는 이점은 웹 사이트의 유지 및 보수가 용이해지는 것입니다.
> - 또한 다양한 화면 해상도 및 크기에 자동으로 적용되는 반응형 스타일을 부여할 수 있습니다.

### 📌 CSS 주요 개념
> - 선택자(selectors) : 특정 HTML 요소를 선택하여 스타일을 적용시킬 수 있습니다.
> - 속성(properties) : 선택된 요소에 적용시킬 스타일의 종류를 지정합니다.
> - 값(values) : 각 속성에 부여할 스타일의 구체적인 값을 지정합니다.

### 📌 CSS 코드 관리 방법
> - CSS 코드를 관리하는 방법에는 아래와 같은 세 가지 방법이 대표적입니다.
> 1. 외부 파일 : 별도의 CSS 파일을 생성 및 그룹화하여 HTML 문서에 링크합니다.
> 2. 내부 태그 : head 태그의 ```<style>``` 내부에 CSS 코드를 작성하여 활용합니다.
> 3. 인라인 태그 : body 태그 내 요소에 직접적으로 스타일을 부여합니다.

### 📌 Bootstrap
> - 트위터 개발자로 인해 처음 개발되어 사용되는 프론트엔드 프레임워크 중 하나입니다.
> - <a href="https://getbootstrap.com/docs/4.6/getting-started/introduction/">부트스트랩 홈페이지</a>에서는 웹 개발에 필요한 다양한 코드가 무료로 제공됩니다.
> - 코드에 대한 설명, 이미지, 실제 코드가 제공되어 있어 웹 개발이 보다 편리해졌습니다.
> - 특히 Components 항목의 Forms, Input group에서 제공된 코드는 응용하기도 편리합니다.
> - 글 최하단에는 Bootstrap을 이용하여 버튼을 생성한 코드를 작성하였습니다.

### 📌 rem, em
> - rem은 Root Element, em은 Element의 약자입니다.
> - rem 및 em은 CSS의 글자 크기(font-size) 속성의 값을 부여할 때 사용되는 단위입니다.
> - rem은 루트 요소, em은 부모 요소의 글자 크기에 비례하게 설정할 수 있습니다.
> - 예를들어 ```1.2rem```은 루트 요소의 글자 크기(예시) 16px의 1.2배인 19.2px이 됩니다.
> - 참고로 rem의 경우 브라우저에서 제공하는 글자 크기와 관련 있습니다.

<br>

### 🔔 IDE 및 웹 브라우저 이용 방법
### 📌 HTML 코드 작성 방법
> - VS Code는 프론트엔드 개발을 위해 사용할 수 있는 IDE입니다.
> - VS Code에는 프론트엔드와 관련된 HTML, CSS, JavaScript 등의 코드를 작성 가능합니다.
> - VS Code를 실행 후 새 파일을 만들고 제목에 .html을 작성하면 HTML 파일이 됩니다.
> - 파일 생성 후 입력창에 'html' 네 글자를 입력하면 'html:5'를 선택할 수 있는 창이 표시됩니다.
> - 'html:5' 스니펫을 사용하면 HTML5의 기본적인 html 구조가 자동으로 생성됩니다.
> - 참고로 스니펫(Snippet)이란 반복적으로 사용되는 코드 또는 템플릿 등을 의미합니다.

### 📌 HTML 문서 열람 방법
> - VS Code의 장점 중 하나는 플러그인 확장 기능을 사용할 수 있다는 것입니다.
> - 플러그인 중 Live Server는 웹 브라우저에 웹 페이지를 호출시킬 수 있는 기능이 특징입니다.
> - 웹 페이지란 웹 브라우저가 HTML 파일 내용을 토대로 생성한 화면으로 이해하시면 됩니다.
> - live Server 사용 방법은 HTML 코드 입력창에 커서를 두고 Alt + L + O를 누르면 됩니다.
> - <a href="https://kim-src.github.io/posts/VS-Code-extension(%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8-%ED%99%95%EC%9E%A5-%EA%B8%B0%EB%8A%A5)-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95-%EC%B6%94%EC%B2%9C/">기본적인 VS Code의 플러그인 확장 관련 내용</a>은 링크된 글에 잘 작성되어 있습니다.
> - 참고로 Live Server를 이용하지 않고 웹 페이지를 호출하는 것은 다소 복잡합니다.

<br>

### 🔔 HTML/CSS 코드 실습
### 📌 웹 페이지에 텍스트 표시
> - body 태그 안에 텍스트 콘텐츠를 입력하였습니다.
> - 콘텐츠 작성 후 Alt + Shift + 방향키를 이용하여 텍스트를 쉽게 복사하였습니다.
> - 텍스트와 함께 리스트를 생성하였습니다.
> - 대략적인 리스트(목록)의 종류는 아래와 같습니다.
>    - ul (Unordered List) : 동그라미로 표시되는 순서 없는 목록
>    - ol (Ordered List) : 숫자로 표시되는 순서 있는 목록
>    - li (List Item) : 목록에 따른 각 문단
>    - dl (Description List) : 설명을 작성하기 위한 목록
>    - dt (Definition Term) : 정의할 용어 또는 이름
>    - dd (Definition Description) : 용어(dt)에 대한 설명

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    텍스트입니다.
    텍스트입니다.
    텍스트입니다.

    <div>
        텍스트입니다.
        텍스트입니다.
        텍스트입니다.
    </div>

    <p>
        텍스트입니다.
        텍스트입니다.
        텍스트입니다.
    </p>

    <ul>
        <li>텍스트입니다.</li>
        <li>텍스트입니다.</li>
        <li>텍스트입니다.</li>
    </ul>

    <ol>
        <li>텍스트입니다.</li>
        <li>텍스트입니다.</li>
        <li>텍스트입니다.</li>
    </ol>

    <!-- 줄바꿈 태그 br (break) -->
    <br>

    <dl>
        <dt>Text</dt>
        <dd>텍스트입니다.</dd>
        <dd>텍스트입니다.</dd>
        <dd>텍스트입니다.</dd>
    </dl>
</body>
</html>
```

### 📌 웹 페이지에 색상 표시
> - 텍스트만 있던 페이지에 글자 및 배경 색상을 지정하였습니다.
> - 각각의 HTML 태그의 요소에는 id, class, name 속성을 지정하였습니다.
> - 각 속성을 CSS의 선택자로 지정하였고 각 선택자에는 비슷한 속성과 값을 부여하였습니다.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 태그 자체에 스타일을 적용하였습니다. */
        div {
            /* font-size 속성에 30px 값을 부여하였습니다. */
            font-size: 30px;
        }

        /* id 요소에 스타일을 적용하였습니다. */
        #text1 {
            /* color 속성에 red 값을 부여하였습니다. */
            color: red;
            background-color: skyblue;
        }

        /* class 요소에 스타일을 적용하였습니다. */
        .pTag {
            color: yellow;
            background-color: black;
        }

        /* name 요소에 스타일을 적용하였습니다. */
        ul[name='ulTag'] {
            color: greenyellow;
            background-color: purple;
        }

        /* class 요소 2개에 스타일을 적용하였습니다. */
        .olTag, .dlTag {
            color: skyblue;
            background-color: navy;
        }
    </style>
</head>
<body>
    텍스트입니다.
    텍스트입니다.
    텍스트입니다.

    <div id="text1" class="divTag" name="divTag">
        텍스트입니다.
        텍스트입니다.
        텍스트입니다.
    </div>

    <p id="text2" class="pTag" name="pTag">
        텍스트입니다.
        텍스트입니다.
        텍스트입니다.
    </p>

    <ul id="text3" class="ulTag" name="ulTag">
        <li>텍스트입니다.</li>
        <li>텍스트입니다.</li>
        <li>텍스트입니다.</li>
    </ul>

    <ol id="text4" class="olTag" name="olTag">
        <li>텍스트입니다.</li>
        <li>텍스트입니다.</li>
        <li>텍스트입니다.</li>
    </ol>

    <!-- 줄바꿈 태그 br (break) -->
    <br>

    <dl id="text5" class="dlTag" name="dlTag">
        <dt>Text</dt>
        <dd>텍스트입니다.</dd>
        <dd>텍스트입니다.</dd>
        <dd>텍스트입니다.</dd>
    </dl>
</body>
</html>
```

### 📌 시맨틱 태그 실습
> - 시맨틱 태그를 이용하여 HTML 문서를 작성하였습니다.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        오늘의 강의
    </header>

    <br>

    <article>
        <section>HTML 코드</section>
        <section>CSS 코드</section>
        <section>JavaScript 코드</section>
    </article>

    <br>
    
    <footer>
        코리아IT 신촌점
    </footer>
</body>
</html>
```

### 📌 웹 페이지에 테이블 구현
> - HTML로 구현된 표에 담긴 데이터는 총 25개입니다.
> - CSS을 이용하여 표 및 텍스트 콘텐츠의 스타일을 정의하였습니다.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table, tr, th, td {
            margin-top: 50px;
            margin-left: auto;
            margin-right: auto;

            width: 700px;
            height: 50px;
            border: 1px solid black;
            border-collapse: collapse;

            text-align: center;
        }
    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>구분</th>
                <th>컬럼1</th>
                <th>컬럼2</th>
                <th>컬럼3</th>
                <th>컬럼4</th>
                <th>컬럼5</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>데이터1-1</td>
                <td>데이터1-2</td>
                <td>데이터1-3</td>
                <td>데이터1-4</td>
                <td>데이터1-5</td>
            </tr>
            <tr>
                <td>2</td>
                <td>데이터2-1</td>
                <td>데이터2-2</td>
                <td>데이터2-3</td>
                <td>데이터2-4</td>
                <td>데이터2-5</td>
            </tr>
            <tr>
                <td>3</td>
                <td>데이터3-1</td>
                <td>데이터3-2</td>
                <td>데이터3-3</td>
                <td>데이터3-4</td>
                <td>데이터3-5</td>
            </tr>
            <tr>
                <td>4</td>
                <td>데이터4-1</td>
                <td>데이터4-2</td>
                <td>데이터4-3</td>
                <td>데이터4-4</td>
                <td>데이터4-5</td>
            </tr>
            <tr>
                <td>5</td>
                <td>데이터5-1</td>
                <td>데이터5-2</td>
                <td>데이터5-3</td>
                <td>데이터5-4</td>
                <td>데이터5-5</td>
            </tr>
        </tbody>
    </table>
</body>
</html>
```

### 📌 웹 페이지에 버튼 생성(HTML, CSS 코드 이용)
> - HTML 및 CSS 코드를 이용하여 버튼 7개를 생성하였으며 별도의 기능은 없습니다.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .red {
            color: red;
            font-size: 2rem;
            background-color: black;
            width: 200px;
            height: 70px;
            margin-top: 100px;
            margin-left: 10px;
        }
        .orange {
            color: orange;
            font-size: 2rem;
            background-color: black;
            width: 200px;
            height: 70px;
            margin-top: 100px;
            margin-left: 10px;
        }
        .yellow {
            color: yellow;
            font-size: 2rem;
            background-color: black;
            width: 200px;
            height: 70px;
            margin-top: 100px;
            margin-left: 10px;
        }
        .green {
            color: green;
            font-size: 2rem;
            background-color: black;
            width: 200px;
            height: 70px;
            margin-top: 100px;
            margin-left: 10px;
        }
        .blue {
            color: blue;
            font-size: 2rem;
            background-color: black;
            width: 200px;
            height: 70px;
            margin-top: 100px;
            margin-left: 10px;
        }
        .navy {
            color: navy;
            font-size: 2rem;
            background-color: black;
            width: 200px;
            height: 70px;
            margin-top: 100px;
            margin-left: 10px;
        }
        .purple {
            color: purple;
            font-size: 2rem;
            background-color: black;
            width: 200px;
            height: 70px;
            margin-top: 100px;
            margin-left: 10px;
        }
    </style>
</head>
<body>
    <button type="button" class="red">버튼1</button>
    <button type="button" class="orange">버튼2</button>
    <button type="button" class="yellow">버튼3</button>
    <button type="button" class="green">버튼4</button>
    <button type="button" class="blue">버튼5</button>
    <button type="button" class="navy">버튼6</button>
    <button type="button" class="purple">버튼7</button>
</body>
</html>
```

### 📌 웹 페이지에 버튼 생성(Bootstrap 이용)
> - <a href="https://getbootstrap.com/docs/4.6/components/buttons/">Bootstrap 사이트의 Buttons 항목에 있는 코드</a>를 복사/붙여넣기 하였습니다.
> - 상기 코드와는 다르게, 텍스트 및 스타일을 어렵지 않게 작성할 수 있었습니다.
> - 웹 페이지 개발 실습 또는 초기 개발 시 유용하게 사용될 것 같습니다.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
</head>
<body>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button>
</body>
<script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>
</html>
```

### 📌 웹 페이지에 폼 필드(form field) 구현
> - 자기소개와 관련된 다양한 데이터를 입력받기 위해 폼 필드를 구현하였습니다.
> - 다양한 목적의 각 폼 필드는 label 태그로 구분하였습니다.
> - 데이터 입력을 받기 위해 input 태그에 text, number, checkbox를 속성값으로 설정하였습니다.
> - 성별을 선택할 수 있도록 select, option 태그를 사용하였습니다.
> - 데이터 입력 및 선택을 완료한 후 저장 또는 초기화할 수 있도록 유관 버튼을 생성하였습니다.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .resultButton {
            margin: 10px;
        }
    </style>
</head>
<body>
    <div class="introduce">
        <!-- 이름 입력을 위한 input 태그 -->
        <label for="nameType">
            이름 : 
            <input type="text" id="nameType" name="nameType" value="" placeholder="이름을 입력하세요.">
        </label>

        <br>
        
        <!-- 나이 입력을 위한 input 태그 -->
        <label for="ageType">
            나이 : 
            <input type="number" id="ageType" name="ageType" value="" placeholder="나이를 입력하세요.">
        </label>

        <br>
        
        <!-- 취미 선택을 위한 input 태그 -->
        <label for="movie">
            <input type="checkbox" id="movie" name="hobby" value="movie">
            영화감상
        </label>
        
        <!-- 취미 선택을 위한 input 태그 -->
        <label for="walk">
            <input type="checkbox" id="walk" name="hobby" value="walk">
            산책
        </label>
        
        <!-- 취미 선택을 위한 input 태그 -->
        <label for="book">
            <input type="checkbox" id="book" name="hobby" value="book">
            독서
        </label>

        <br>

        <!-- 성별 선택을 위한 select, option 태그 -->
        <label for="gender">
            성별 : 
            <select id="gender" name="gender">
                <option value="man">남자</option>
                <option value="woman">여자</option>
            </select>
        </label>

        <div class="resultButton">
            <!-- form 데이터 전송용 저장 버튼 -->
            <button type="submit">저장</button>
            <!-- form 데이터 전체 삭제용 취소 버튼 -->
            <input type="reset" value="취소">
        </div>
    </div>
</body>
</html>
```

<br>
<br>
<br>
