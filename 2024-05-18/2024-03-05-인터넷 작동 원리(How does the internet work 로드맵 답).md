---
title: 인터넷 작동 원리(How does the internet work 로드맵 답)
date: 2024-03-05 18:00:00 +09:00
categories: [1. Fundamental, Computer Science]
tags: [Fundamental, Computer Science, Internet, How does the internet work]
---

<!-- 2024-02-28 글 작성 시작; 2024-02-28 페이지 호출 완료 -->
<h2>How does the internet work?</h2>

<br>

### 🔔 인터넷이란
### 📌 인터넷 접속의 깊은 이해
> - 인터넷 접속을 위해서는 LAN 포트에 이더넷 케이블을 연결하고 컴퓨터의 전원을 키면 됩니다.
> - 그리고 연결된 이더넷 케이블의 반대 부분은 벽면의 LAN 포트 또는 공유기로 연결됩니다.
> - 그렇다면 벽면 또는 공유기에 있는 LAN 포트의 보이지 않는 종착 지점은 어디일까요?
> - 인터넷이 어떻게 작동되는지 이해하기 위해서는 이에 대한 이해가 있어야 됩니다.
> - 이번 글에서는 인터넷의 의미와 작동 원리에 대해 알아보겠습니다.

### 📌 인터넷과 네트워크
> - 인터넷이 어떻게 작동되는지 이해하려면 먼저 인터넷이 무엇인지를 정의해야 됩니다.
> - Internet이란 Inter + Network의 합성어이며 네트워크가 연결된 상태를 의미합니다.
> - 그리고 Network란 Net + Work의 합성어이며 작업 공간이 얽혀져있는 것을 뜻합니다.
> - 그러므로 연결된 작업 공간을 네트워크라고 표현할 수 있겠습니다.
> - 또한 연결된 작업 공간에 접근하는 행위를 인터넷 접속이라고 표현할 수 있겠습니다.

### 📌 네트워크 분류
> - 이 네트워크 개념은 몇 가지 분류에 따라 아래와 같이 구분됩니다.
>   1. 규모에 따른 네트워크 분류 → PAN, LAN, MAN, WAN 등
>   2. 무선(wireless) 상태의 네트워크 분류 → VPN, SAN 등
>   3. 데이터 전송 방식에 따른 네트워크 분류 → 패킷 교환 방식, 셀 릴레이 방식 등
>   4. 노드(node) 연결 형태에 따른 네트워크 분류 → 버스형, 스타형, 링형 등
> - 여러 네트워크 개념 중 이번 글에서는 규모에 따른 유선 네트워크 분류만을 다뤄보겠습니다.

### 📌 유선 네트워크
> - 사용자가 오프라인 상태의 컴퓨터 한 대를 이용하여 작업중이라고 가정해보겠습니다.
> - 해당 상황에서는 하나의 컴퓨터를 이용한 작업(계산, 기록 등)이 충분히 가능합니다.
> - 하지만 작업한 내용을 다른 컴퓨터와 주고 받을 수는 없습니다.
> - 왜냐하면 작업한 내용이 담겨있는 디스크가 연결된 상태가 아니기 때문입니다.
> - 컴퓨터끼리 데이터를 주고 받는 가장 쉬운 방법은 이더넷 케이블을 연결하는 것입니다.
> - 컴퓨터마다의 케이블이 서로 연결된 작업 공간을 네트워크라고 표현할 수 있겠습니다.
> - 그리고 작은 규모의 인터넷이 작동하는 상태라고 표현할 수 있겠습니다.

<br>

### 🔔 Case 1. 컴퓨터(PC)만의 네트워크
> - 언급했듯이 네트워크를 구축하는 방법은 컴퓨터끼리 연결하는 것입니다.
> - 컴퓨터마다 각기 케이블로 연결한 상태는 인터넷 환경의 초창기 형태로 볼 수 있겠습니다.
> - 그런데 직접적으로 연결된 네트워크는 같은 공간 안에만 있어야 된다는 단점이 있습니다.
> - 또한 직접적인 네트워크 구축을 위한 수많은 데이터 케이블이 필요합니다.
> - 컴퓨터들마다의 케이블이 서로 연결된 네트워크에 대한 모식도는 아래와 같습니다.

<figure>
    <img src = "https://github.com/Kim-src/Images/assets/150884526/c9c66c4a-074c-4d99-91ea-962b6e4d4d7d" class="img" width="400px" alt="figure">
    <figcaption>소규모 네트워크 모식도 (출처 : Mozilla)</figcaption>
</figure>

<br>

### 🔔 Case 2. 공유기(Router)가 이용된 네트워크
> - 네트워크의 공간적인 제약을 보완하기 위해 개발된 것은 공유기(router)입니다.
> - 공유기는 여러 노드(node)의 연결을 돕는 중계 장치 역할을 합니다.
> - 따라서 공유기에 유/무선으로 연결된 전자기기들끼리의 데이터 교환이 가능해집니다.
> - 참고로 노드란 IP 주소를 보유한 컴퓨터, 스마트폰 등의 정보 처리 장치를 의미합니다.
> - 공유기를 이용한 네트워크 연결망은 회사 또는 학교 정도의 규모까지 확장시킬 수 있습니다.
> - 공유기가 이용된 네트워크 개념도는 아래와 같습니다.

<figure>
    <img src = "https://github.com/Kim-src/Images/assets/150884526/99a0a980-5e71-43b0-88b3-eaf7b6041d44" class="img" width="400px" alt="figure">
    <figcaption>공유기가 이용된 네트워크 모식도 (출처 : Mozilla)</figcaption>
</figure>

### 📌 목적이 다른 공유기 종류
> - 최근 와이파이 공유기가 상용화되면서 공유기라는 단어는 우리에게 친숙합니다.
> - 하지만 이번 글에서 말씀드리는 공유기는 가정용 공유기(home router)가 아닙니다.
> - 아래는 대규모 및 소규모 공유기의 외관입니다. (출처 : Wikipedia)

<div class="image-container">
    <figure>
        <img src="https://github.com/Kim-src/Images/assets/150884526/65adce62-6e56-4707-8ddd-497fc232ba53" class="img" width="300px" alt="figure">
        <figcaption>대규모 공유기 외관</figcaption>
    </figure>
    <figure>
        <img src="https://github.com/Kim-src/Images/assets/150884526/de927887-8153-490f-b322-e147ac4e478e" class="img" width="300px" alt="figure">
        <figcaption>소형 공유기 외관</figcaption>
    </figure>
</div>

<br/>

### 🔔 Case 3. 모뎀(Modem)이 이용된 네트워크
> - 네트워크는 규모에 따라 크게 네 가지로 구분됩니다.
>   1. PAN: 가장 작은 규모의 네트워크 (Personal Area Network)
>   2. LAN: 집, 학교, 회사 정도 규모의 네트워크 (Local Area Network)
>   3. MAN: 도시, 대학교 캠퍼스 정도 규모의 네트워크 (Metropolitan Area Network)
>   4. WAN: 대륙과 대륙, 국가와 국가 규모의 네트워크 (Wide Area Network)

### 📌 근래의 네트워크 규모
> - 근래의 인터넷은 WAN 네트워크를 의미한다고 표현할 수 있겠습니다.
> - 데이터의 교환이 대륙이나 국가와 같은 물리적인 공간을 관통하기 때문입니다.
> - 그렇다면 LAN 정도였던 네트워크 규모를 어떻게 확장시킬 수 있었을까요?

### 📌 통신 인프라의 활용
> - 전 세계에 설치된 전화 통신 인프라는 네트워크 규모 확장에 크게 기여하였습니다.
> - 인터넷의 시대 이전에 통신 인프라는 이미 광범위하게 구축된 상태였습니다.
> - 그런데 전화 통신망은 아날로그(analog) 신호를 이용하고 있었습니다.
> - 아날로그는 진동, 전압, 전류 등의 물리적인 신호입니다.
> - 이와 달리 네트워크로 전송되는 데이터 정보는 디지털(digital) 형태로 구성됩니다.

### 📌 모뎀의 역할
> - 따라서 아날로그 신호를 디지털 신호로 교환해주는 장치가 필요한 상황이었습니다.
> - 그래서 개발된 장치가 바로 모뎀이었습니다.
> - 모뎀의 역할은 디지털 및 아날로그 신호를 서로 변환해주는 것입니다.
> - 모뎀이 이용된 네트워크 개념도는 아래와 같습니다.

<figure>
    <img src = "https://github.com/Kim-src/Images/assets/150884526/242bfe56-37ed-4846-bbf4-eac92e458e1f" class="img" alt="figure">
    <figcaption>모뎀이 이용된 네트워크 모식도 (출처 : Mozilla)</figcaption>
</figure>

<br>

### 🔔 ISP의 네트워크 관리
> - 상기 내용과 같이 근래의 네트워크 구성은 꽤 복잡합니다.
> - 그리고 많은 양의 데이터 및 통신망은 관리하기 어렵습니다.
> - 게다가 네트워크로 전송되는 데이터는 중요한 내용을 담고 있을 수 있습니다.
> - 그래서 각 국가 규모의 네트워크를 관리하는 업체가 존재하게 됐습니다.
> - 이러한 네트워크 관리 업체를 ISP (Internet Service Provider)라고 합니다.

### 📌 ISP의 역할
> - ISP의 역할은 송신 목적의 데이터를 수신 가능한 목적지까지 연결시켜주는 것입니다.
> - 즉, ISP의 의미대로 인터넷 환경을 정상적으롤 유지하는 역할을 합니다.
> - 우리나라의 ISP는 KT, SK브로드밴드, LG유플러스 등이 있습니다.
> - 방대한 인터넷 환경에 대한 개념도는 아래와 같습니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/8fe2c5b9-e9d2-43a1-8632-0713d02de4fb" class="img" alt="figure">
    <figcaption>인터넷 환경 모식도 (출처 : Wikipedia)</figcaption>
</figure>

<br>

### 🎁 References
> - <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work">Mozilla.org</a>
> - <a href="https://www.youtube.com/watch?v=x3c1ih2NJEg&t=3s">Lesics 유튜브 채널</a>
> - <a href="https://www.youtube.com/watch?v=Sfzo4xm5eX8">BLASTERTECHNOLOGY 유튜브 채널</a>
> - <a href="https://www.youtube.com/watch?v=oFKYzp6gGfc&t=318">쉬운코드 유튜브 채널</a>
> - <a href="https://www.cctvnews.co.kr/news/articleView.html?idxno=210852">CCTV 뉴스 최형주 기자님 글</a>

<br>
<br>
<br>
