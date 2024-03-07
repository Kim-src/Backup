---
title: 도커(Docker)의 모든 것
date: 2024-04-27 18:00:00 +09:00
categories: [Fundamental, IDE-Framework-Library]
tags: [Fundamental, Docker]
---

<!-- 2024-03-06 글 작성 시작; 2099-01-01 페이지 호출 완료 -->
## ✅ 블로그 제목

<br>

### 🔔 Introduction
### 📌 Docker 소개
> - Docker는
> - Docker를 사용하는 이유는

<br>

### 🔔 Docker 링크 모음
### 📌 Docker 다운로드 페이지
> - 도커 홈페이지에 접속해서 사용자 OS에 맞는 데스크톱 애플리케이션을 설치하시면 됩니다.
> - 설치가 완료되면 Git Bash 등에 ```docker -v```를 입력하여 설치 상태를 확인해야 됩니다.
> - <a href="https://www.docker.com/products/docker-desktop/">도커 설치 페이지(링크)</a>

### 📌 Docker 컴포즈 페이지
> - 도커 컴포즈는 YAML 파일을 이용하여 다중 컨테이너를 구성하는 것입니다.
> - <a href="https://docs.docker.com/compose/">도커 컴포즈 페이지(링크)</a>

### 📌 Docker 허브 페이지
> - 도커 허브는 도커에서 제공하는 이미지 저장소입니다.
> - <a href="https://hub.docker.com/">도커 허브 페이지(링크)</a>

<br>

### 🔔 Docker 이미지 다운로드 과정
### 📌 Docker 초기 화면 구성
> - 도커를 다운로드 받으신 후 실행시키신 초기 Containers 화면 구성은 아래와 같습니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/ec564a23-aca0-4b6c-bbe3-3f3a6f3d0f95" class="img" alt="figure">
    <figcaption>초기 Docker Containers</figcaption>
</figure>

### 📌 MySQL 이미지 다운로드
> - 도커 허브를 통해 알게 된 MySQL 이미지 다운로드 관련 명령문을 입력하면 됩니다.
> - 필자는 아래와 같은 코드 입력하고 MySQL 이미지를 다운로드 받았습니다.

``` bash
docker pull mysql:latest
```

> - 이미지 다운로드에 성공하면 아래와 같은 메시지가 출력됩니다.

``` bash
$ docker pull mysql:latest

latest: Pulling from library/mysql
Digest: sha256:ff5ab9cdce0b4c59704b4e2a09deed5ab8467be795e0ea20228b8528f53fcf82
Status: Image is up to date for mysql:latest
docker.io/library/mysql:latest

What's Next?
  View a summary of image vulnerabilities and recommendations → docker scout quickview mysql:latest
```

> - 이미지 다운로드가 완료된 도커 Images 화면 구성 이미지 내용이 아래와 같이 변경됩니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/b0c63e64-eea8-4aaf-8c1c-9434acc61ee5" class="img" alt="figure">
    <figcaption>변경된 Docker Images</figcaption>
</figure>

### 📌 MySQL Docker 컨테이너 생성 및 실행(에러 발생)
> - 이제 MySQL 관련 도커 컨테이너를 생성 및 실행하기 위해 아래 명령문을 입력하였습니다.

``` bash
docker run --name mysql-hello-container -e MYSQL_ROOT_PASSWORD=0000 -d -p 3306:3306 mysql:latest
```

> - 그런데 아래와 같은 메시지가 출력되었습니다.

``` bash
$ docker run --name mysql-hello-container -e MYSQL_ROOT_PASSWORD=0000 -d -p 3306:3306 mysql:latest

4f54bbf9519fce194faf7864fa8e02e519ab6cb3596c197e402e3003185c7f33
docker: Error response from daemon: Ports are not available: exposing port TCP 0.0.0.0:3306 -> 0.0.0.0:0: listen tcp 0.0.0.0:3306: bind: Only one usage of each socket address (protocol/network address/port) is normally permitted.
```

> - 해당 메시지의 내용은  TCP 포트 3306은 이미 다른 서비스가 사용중이라는 것을 의미합니다.
> - 그래서 포트 바인딩에 실패했다는 내용이 작성되어 있습니다.
> - 이를 해결하기 위해서는 현재 실행중인 도커 컨테이너 목록을 출력해 볼 필요가 있습니다.
> - 도커 컨테이너 목록 출력을 위한 아래 명령문을 입력하였습니다.

``` bash
docker ps -a
```

> - 출력문의 내용에서 STATUS="Created" 우측의 PORTS 값이 공란인 것을 확인할 수 있습니다.
> - 따라서 해당 컨테이너의 포트 바인딩이 설정되지 않았거나 실패했음을 알 수 있습니다.

``` bash
$ docker ps -a

CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS    PORTS     NAMES
4f54bbf9519f   mysql:latest   "docker-entrypoint.s…"   12 minutes ago   Created             mysql-hello-container
```

### 📌 MySQL Docker 컨테이너 생성 및 실행(에러 해결)
> - 에러를 직면하지 않고 회피하는 방법은 포트 번호를 변경하는 것입니다.
> - 이를 위한 명령문은 아래와 같습니다.

``` bash
docker run --name mysql-hello-container -e MYSQL_ROOT_PASSWORD=0000 -d -p 3307:3306 mysql:latest
```

> - 에러 상황 회피의 예시로는 컨테이너를 삭제한 후 재생성하는 방법도 있습니다.
> - 이를 위한 명령문은 아래와 같습니다.

``` bash
docker rm mysql-hello-container
```

> - 하지만 위와 같이 에러 회피를 위한 명령문만 입력하면 개발자로서의 성장은 없다고 사료됩니다.
> - 그래서 에러를 정통적으로 해결하기 위한 방법을 말씀드리겠습니다.
> - 사용자의 운영체제에서 3306 포트를 사용하고 있는 프로세스의 ID를 추적하겠습니다.
> - Windows의 PowerShell에서 아래 명령문을 입력하겠습니다.
> - 참고로 아래 명령문을 복사하고 PowerShell에서 마우스 우클릭 한 번만 하시면 붙여넣기 됩니다.

``` powershell
netstat -ano | findstr :3306
```

> - 명령문으로 출력된 내용은 아래와 같습니다.
> - TCP 0.0.0.0:3306은 모든 IPv4 주소에서 3306 포트를 사용하고 있다는 것을 의미합니다.
> - LISTENING은 3306 포트에서 네트워크 요청을 대기중이라는 의미입니다.
> - 7196은 7196이라는 PID (Process ID)의 프로세스가 3306 포트를 사용중이라는 의미입니다.

``` powershell
TCP    0.0.0.0:3306           0.0.0.0:0              LISTENING       7196
TCP    0.0.0.0:33060          0.0.0.0:0              LISTENING       7196
TCP    [::]:3306              [::]:0                 LISTENING       7196
TCP    [::]:33060             [::]:0                 LISTENING       7196
```

> - 이제 3306 포트를 사용중인 7196 프로세스를 종료해보겠습니다.
> - '작업 관리자'의 '자세히' 항목에서 실행중인 PID를 검색할 수 있습니다.
> - 키패드에서 Ctrl + Shift + Del를 동시에 누르시면 '작업 관리자'를 찾으실 수 있습니다.
> - '작업 관리자'의 '자세히' 항목에서 'PID' 탭을 클릭하시면 오름차순으로 정렬됩니다.
> - 7196 프로세스의 주인공은 mysqld.exe였습니다.
> - 참고로 필자의 개발 운영체제는 Windows 11입니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/b2eb211b-e25b-4b6a-96cc-35b10bfb7da2" class="img" alt="figure">
    <figcaption>작업 관리자의 PID 탭</figcaption>
</figure>

> - 7196 프로세스를 마우스 우측 버튼을 클릭하여 '작업 끝내기'하였습니다.
> - PowerShell에 입력했던 아래 명령문을 다시 입력하니 아무것도 출력되지 않았습니다.

``` powershell
netstat -ano | findstr :3306
```

> - 다시 도커로 돌아와서, Git Bash에 아래 명령문을 입력하겠습니다.

``` bash
docker run --name mysql-hello-container -e MYSQL_ROOT_PASSWORD=0000 -d -p 3306:3306 mysql:latest
```

> - 도커에 mysql-hello-container가 이미 생성되었다는 아래 명령문이 출력되었습니다.

``` bash
$ docker run --name mysql-hello-container -e MYSQL_ROOT_PASSWORD=0000 -d -p 3306:3306 mysql:latest

docker: Error response from daemon: Conflict. The container name "/mysql-hello-container" is already in use by container "4f54bbf9519fce194faf7864fa8e02e519ab6cb3596c197e402e3003185c7f33". You have to remove (or rename) that container to be able to reuse that name.
See 'docker run --help'.
```

> - 도커에서 이미 생성된 mysql-hello-container를 제거하겠습니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/268395a4-e48a-4f5c-b317-1d07249ba98a" class="img" alt="figure">
    <figcaption>Delete Container</figcaption>
</figure>

> - 다시, Git Bash에 아래 명령문을 입력하겠습니다.

``` bash
docker run --name mysql-hello-container -e MYSQL_ROOT_PASSWORD=0000 -d -p 3306:3306 mysql:latest
```

> - 드디어, 성공적으로 MySQL 도커 컨테이너를 생성하였다는 내용이 출력되었습니다.

``` bash
$ docker run --name mysql-hello-container -e MYSQL_ROOT_PASSWORD=0000 -d -p 3306:3306 mysql:latest

1cf6103fa964839f0b8a15c2a817ab13e524fa012cf7c5e5ee436147b1b09dd7
```

> - 정상적인 도커 컨테이너 아이콘의 색상은 주황색이 아니라 아래와 같은 녹색입니다.
> - 그리고 정상적인 도커 컨테이너는 CPU 용량을 차지합니다.
> - 상기 정상적이지 않은 도커 컨테이너 이미지를 확인하시면 CPU란이 N/A로 표기되어 있습니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/3c2d4711-5c61-48c9-8061-421d978f1abd" class="img" alt="figure">
    <figcaption>Complete Created Container</figcaption>
</figure>

> - 마지막으로, 도커 컨테이너 목록을 출력하겠습니다.

``` bash
docker ps -a
```

> - 성공적인 도커 컨테이너 생성 및 실행 결과는 아래와 같습니다.

``` bash
$ docker ps -a

CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                               NAMES
1cf6103fa964   mysql:latest   "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   0.0.0.0:3306->3306/tcp, 33060/tcp   mysql-hello-container
```

### 📌 MySQL Docker 컨테이너 접속
> - 이제 도커 컨테이너에 접속해보겠습니다.

``` bash
docker exec -it mysql-hello-container bash
```

> - 그런데 접속해 실패하였고 아래와 같은 내용이 출력되었습니다.

``` bash
$ docker exec -it mysql-hello-container bash

the input device is not a TTY.  If you are using mintty, try prefixing the command with 'winpty'
```

> - 이 내용은 Git Bash가 TTY (텔레타이프)를 지원하지 않는다는 내용입니다.
> - 해결 방법은 간단하며 아래와 같이 명령문 앞에 ```winpty```를 추가 입력하면 됩니다.

``` bash
winpty docker exec -it mysql-hello-container bash
```

> - 도커 컨테이너에 잘 접속되면 아래와 같은 내용이 출력됩니다.

``` bash
$ winpty docker exec -it mysql-hello-container bash

bash-4.4#
```

### 📌 MySQL 연동
> - 다음으로 MySQL에 접속하여 연동해보겠습니다.
> - 접속 방법은 출력된 ```bash-4.4#``` 우측에 명령문을 입력하시면 됩니다.

``` bash
bash-4.4# mysql -u root -p
```

> - 명령문 중 '-p'는 패스워드를 입력한다는 내용입니다.
> - 출력된 ```Enter password:```에 방금 생성한 컨테이너의 비밀번호를 입력해주시면 됩니다.
> - 이때 비밀번호를 타이핑해도 아무런 글자가 보이지 않지만 실제로는 잘 입력됩니다.
> - 비밀번호를 잘 입력하면 아래 이미지 내용과 같은 출력문을 확인하실 수 있습니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/f5593121-4fa9-4a4e-925d-5eb8f00d6c78" class="img" alt="figure">
    <figcaption>Connected MySQL Container</figcaption>
</figure>

### 📌 3306 포트 사용 현황
> - 마지막으로, 에러 해결을 위해 필요했던 PowerShell에 동일 명령문을 재차 입력해보겠습니다.
> - 말씀드렸듯이 PowerShell 사용 목적은 3306 포트 현황을 조회하는 것입니다.

``` powershell
netstat -ano | findstr :3306
```

> - 명령문 입력 결과, 아래와 같은 내용이 출력되었습니다.
TCP    0.0.0.0:3306           0.0.0.0:0              LISTENING       11028
TCP    [::]:3306              [::]:0                 LISTENING       11028
TCP    [::1]:3306             [::]:0                 LISTENING       30576

> - 작업 관리자에서 PID를 조회한 결과, 도커 백엔드에 잘 연결된 것을 확인할 수 있었습니다.
> - 아래 이미지는 3306 포트 현황에 대한 것입니다.

<figure>
    <img src="https://github.com/Kim-src/Images/assets/150884526/8b5e2ca3-28b6-4b82-81e8-9edfb32b4b8a" class="img" alt="figure">
    <figcaption>Port 3306 Status</figcaption>
</figure>



<br>
<br>
<br>
