---
title: 구구단 게임 제작 방법 및 Java Timer, TimerTask 클래스
date: 2024-05-07 18:00:00 +09:00
categories: [2. Toy Project, GoogoodanGame]
tags: [Java, GoogoodanGame, Googoodan, Multiplication, Timer, TimerTask, schedule]
---

<!-- 2024-05-07 글 작성 시작; 2024-05-07 페이지 호출 완료 -->
<h2>Java 기반의 순발력을 요구하는 구구단 게임</h2>
> - Tool :  
<img alt="Java" src="https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=white" />
<img alt="Eclipse" src="https://img.shields.io/badge/-Eclipse-2C2255?style=flat-square&logo=eclipse&logoColor=white" />

<br>

### 🔔 순발력을 요구하는 구구단 게임 내용 요약
### 📌 게임 핵심 기능
> - 랜덤의 구구단 곱셈식을 생성 및 출력하였습니다.
> - 매 곱셈식마다 게임 타이머 작동 시간을 초기화하였습니다.
> - 정답 입력 및 점수 채점 내용에 따른 게임 결과를 출력하였습니다.
> - 입력 시간 초과 시(답 미입력) 게임을 강제로 종료시켰습니다.

### 📌 게임 핵심 변수
> - gameCoinMax 변수에서 게임 실행 횟수를 결정하였습니다.
> - countTimeDefault 변수에서 게임 타이머 시간(초 단위)을 설정하였습니다.
> - 각 변수는 클래스 내에서 일일이 값을 할당시키지 않기 위해 정의한 것입니다.

<br>

### 🔔 게임 개발 기획
### 📌 게임 제작 기획
> - 랜덤의 구구단 곱셈식을 자동으로 출력하는 기능을 부여하려고 합니다.
> - 주어진 시간 내에 출력된 곱셈식의 정답을 맞추면 점수를 획득하게 하려고 합니다.
> - 만일 주어진 시간 내에 정답 또는 오답을 입력하지 못하면 게임을 종료시키려고 합니다.

### 📌 기획 이유
> - 게임 참여자의 암산 실력 및 순발력을 증진시키려고 합니다.
> - Java의 random 메서드를 복습하려고 합니다.
> - Java의 Scanner 클래스 및 입력 메서드를 복습하려고 합니다.
> - Java의 for 및 while 반복문을 복습하려고 합니다.
> - Java의 boolean 타입을 학습하려고 합니다.
> - Java에서 제공하는 시간 관련 알고리즘을 학습하려고 합니다.

### 📌 추가 희망 기능
> - 게임 데이터베이스에 점수 획득자명 및 점수를 저장하고 싶습니다.
> - 게임 데이터베이스에 저장된 내용을 토대로 점수 랭킹을 출력하고 싶습니다.
> - 랭킹에 고득점인 순서(내림차순)로 랭킹 및 점수 획득자 정보를 출력하고 싶습니다.
> - 이를 위해서는 데이터베이스 개념이 확보되어야 됩니다.

<br>

### 🔔 게임 개발 과정
### 📌 게임 진행 순서 설정
> - while 반복문을 이용하여 구구단 게임이 gameCoinMax 횟수만큼 반복되도록 설정하였습니다.
> - 구구단 게임이 출력됨과 동시에 타이머가 작동되도록 설정하였습니다.
> - 곱셈식의 답을 입력하면 정답 여부와 상관없이 구구단 게임이 재시작되도록 설정하였습니다.
> - while 반복문이 종료되면 참여자 이름을 입력하게 하였고 점수를 출력시켰습니다.

### 📌 일반 변수 정의
> - 구구단 게임에 필요한 변수를 정의하였습니다.
> - 구구단 곱셈식 설계에 필요한 배열, 구구단의 전항 및 후항 변수를 생성하였습니다.
> - 구구단 곱셈식을 반복시키기 위한 while 변수에 필요한 변수를 생성하였습니다.
> - 게임 정답 입력 초과 시 반복문 종료를 위한 gameOver 변수를 생성하였습니다.
> - 게임 정답 입력, 채점 및 결과 출력을 위한 변수를 생성하였습니다.

### 📌 static 변수 정의
> - 본 게임의 타이머 설정을 위해 main 메서드 내에 countTime 변수를 정의하였습니다.
> - 그런데 TimerTask 클래스 내부 로직에 countTime 변수를 정의하면 에러가 발생됐습니다.
> - 에러 해결 방법은 main 메서드 실행 전에 static을 이용하여 변수를 정의하는 것이었습니다.
> - static을 이용하여 변수를 정의하면 모든 인스턴스가 동일한 시간을 적용받게 됩니다.

### 📌 구구단 곱셈식 정의
> - 구구단 곱셈식은 랜덤으로 자동 출력되도록 설정하였습니다.
> - for 반복문을 이중으로 구성하였고 전항(antecedent) 및 후항(consequent) 값을 할당시켰습니다.

### 📌 게임 타이머 정의
> - Timer 및 TimerTask 클래스를 이용하여 게임의 타이머를 생성하였습니다.
> - Timer 클래스의 schedule 메서드를 이용하여 1초마다 시간이 감소되도록 설정하였습니다.
> - 시간 감소와 동시에 숫자가 감소되며 마치 시간을 재는 것과 같이 표현을 하였습니다.
> - 시간이 감소되어 countTime이 0이 되었을 때에는 게임을 강제로 종료시키도록 설정하였습니다.

### 📌 구구단 정답 입력
> - 구구단 문제의 답을 입력하면 답을 채점하도록 설정하였습니다.
> - 정답일 경우 바로 다음 문제가 출제되고 타이머는 초기화되도록 설정하였습니다.
> - 오답일 경우 정답이 무엇인지 안내되고 타이머가 초기화되도록 설정하였습니다.
> - 아무런 입력도 없을 경우 입력 시간이 초과되어 게임이 종료되는 것으로 표현하였습니다.

### 📌 게임 점수 출력
> - 구구단 게임이 종료되면 게임 참여자의 이름을 입력할 수 있도록 설정하였습니다.
> - 참여자명을 입력하면 참여자의 점수 및 게임의 만점을 출력하도록 설정하였습니다.
> - 추후 MariaDB를 이용하여 데이터베이스에 점수 및 랭킹을 저장시킬 예정입니다.

<br>

### 🔔 학습 내용(소감)
### 📌 복습 내용
> - 구구단 곱셈식 구현을 위해 for 및 while 반복문, random 및 입력 메서드 등을 이용하였습니다.
> - 로직 순서대로 출력하는 코드를 작성하는 데 소요된 시간은 대략 30분 정도였습니다.

### 📌 학습 내용 : boolean
> - boolean 데이터 타입 변수에는 할당시킬 수 있는 값이 true 또는 false 뿐이었습니다.
> - 이는 다른 데이터 타입과는 달리 다양한 값을 할당시키는 기능 자체가 없었습니다.
> - 이를 int로 표현하자면 변수에 할당시킬 수 있는 값이 1 또는 0인 것이었습니다.

### 📌 학습 경험 : 타이머 사용의 어려움
> - Java의 시간 관련 알고리즘을 이해하는 데 2시간 이상이 소요되었습니다.
> - 문제는 Java의 Timer 및 TimerTask 클래스는 실행 도중 취소시킬 수 없다는 것이었습니다.
> - 즉, 타이머를 중간에 중지시키고 재시작하는 기능이 없는 것이었습니다.
> - 그래서 구구단 정답 입력 및 채점 후 타이머의 시간을 리셋시키는 것이 고단하였습니다.

### 📌 학습 내용 : 타이머 활용 방법
> - 대략 5시간의 시간을 투자하며 생각해낸 것은 타이머를 종료시키지 않는 것이었습니다.
> - 정확히는 꼭 타이머 메서드를 종료시킬 필요가 없었습니다.
> - 감소되는 시간에 시간을 추가하면 마치 타이머가 초기화되는 것처럼 표현되었습니다.
> - 아이디어는 게임기 기계에 코인을 넣어 플레이 기회를 획득하는 것으로 시작되었습니다.
> - 감소되는 시간 변수에 답을 입력하면 countTimeDefault 값을 참조하도록 설정하였습니다.
> - 따라서 매 반복문마다 주어지는 타이머 시간이 초기값으로 시작되게 설정되었습니다.

<br>

### 🔔 프로그램 구현
### 📌 전체 Java 코드
> - 아래는 순발력을 요구하는 구구단 게임의 전체 Java 코드입니다.

``` java
import java.util.Date;
import java.util.Scanner;
import java.util.Timer;
import java.util.TimerTask;

public class GoogoodanGameReadme {
	
	/* 프로젝트 설명 */
	
	// 본 프로젝트는 구구단 게임이며 핵심 기능은 아래와 같습니다.
	// 1. 랜덤의 구구단 곱셈식 생성 및 출력
	// 2. 매 곱셈식마다 게임 타이머 작동
	// 3. 정답 입력 및 점수 채점 결과에 따른 게임 결과 출력
	// 4. 타이머 시간 초과 시에 따른 게임 결과 출력
	
	// 핵심 변수는 아래와 같습니다.
	// 1. gameCoinMax : 게임 실행 횟수 결정
	// 2. countTimeDefault : 게임 타이머 시간 설정(초)
	// 각 변수는 클래스 내에서 일일이 값을 할당시키지 않기 위해 정의한 것입니다.
	
	
	/* static 변수 정의 */
	// countTime 변수의 초기값을 설정하기 위해 countTimeDefault 변수를 정의하였습니다.
	static int countTimeDefault = 3;
	// countTime 변수에 countTimeDefault 변수에서 참조하는 값을 할당시켰습니다.
	static int countTime = countTimeDefault;
	
	public static void main(String[] args) {
	
		
		/* 일반 변수 정의 */
		// 구구단 곱셈식 설계를 위한 배열을 생성하였습니다.
		int[] array = new int[9];
		// 구구단의 전항 변수를 생성하였습니다.
		int antecedent = 0;
		// 구구단의 후항 변수를 생성하였습니다.
		int consequent = 0;
		// 구구단 곱셈식 반복문을 위한 변수를 생성하였습니다.
		int gameCoin = 0;
		// 구구단 게임 실행 횟수를 결정하는 값을 할당받는 변수를 생성하였습니다.
		int gameCoinMax = 10;
		// 구구단 게임 정답 입력 시간 초과 시 반복문 종료를 위한 변수를 생성하였습니다.
		boolean gameOver = false;
		// 구구단 곱셈식 정답 입력을 위해 Scanner 클래스를 사용하였습니다.
		Scanner scan = new Scanner(System.in);
		// answer 변수에 입력된 정답을 할당시켰습니다.
		int answer = 0;
		// 구구단 채점을 위한 변수를 생성하였습니다.
		int score = 0;
		// 구구단 게임 참여자의 이름 입력을 위한 변수를 생성하였습니다.
		String user;
		
		
		/* 구구단 게임 시작 */
		// 최대 gameCoinMax개 문제를 풀이하도록 설정하였습니다.
		while(gameCoin < gameCoinMax && gameOver == false) {
		
			/* 구구단 곱셈식 정의 */
			for(int i = 0; i < array.length; i++) {
				array[i] = (int)(Math.random() * 9) + 1;
				antecedent = array[i];
				for(int j = 0; j < array.length; j++) {
					array[j] = (int)(Math.random() * 9) + 1;
					consequent = array[j];
				}
			}
	
			
			/* 구구단 타이머 정의 */
			// while 반복문 내부에서 Timer 및 TimerTask 클래스를 이용하여 변수를 정의하였습니다.
			// 이들을 while 반복문 외부에서 정의하면 schedule 메서드 실행 시 에러가 발생됩니다. 
			Timer timer = new Timer();
			TimerTask task = new TimerTask() {
				public void run() {
					// countTime이 0에 도달하면 타이머가 종료되게 설정하였습니다.
					if(countTime > 0) {
						System.out.println(countTime + "초");
						countTime--;
						if(countTime == 0) {
							System.out.println("---------시간 초과---------");
							System.out.println("숫자를 입력하시면 게임이 종료됩니다.");
							System.out.println("문자를 입력하시면 에러가 발생됩니다.");							
						}
					}
					// countTime에 할당된 값이 0일 경우의 로직은 아래 정답 확인 조건문에 작성하였습니다.
				}
			};
						
			
			/* 구구단 문제 출력 */
			System.out.println(countTimeDefault + "초 안에 정답을 입력하시오.");
			System.out.println(antecedent + " X " + consequent + " = ");
			
			
			/* 구구단 타이머 시작 */
			// Date 클래스를 이용하여 타이머 시작 시간을 설정하였습니다.
			// 이는 타이머 시작 시간을 정확히 설정하는 방법 중 하나입니다.
			// startTime을 설정하지 않으면 schedule 메서드의 파라미터 조건이 바뀌게 됩니다.
			// 참조 사이트 : https://codegym.cc/groups/posts/java-timer-class
			Date startTime = new Date();
			timer.schedule(task, startTime, 1000); // 1000ms = 1s			
			
			
			/* 구구단 정답 입력 */
			if(countTime > 0) {
				answer = scan.nextInt();
			}
						
						
			/* 구구단 정답 확인 */
			if(countTime > 0) {
				if(answer == antecedent*consequent) {
					System.out.println("정답!");
					// countTime에 할당된 초기값을 참조하게 하였습니다.
					countTime = countTimeDefault;
					
					score++;
				}
				else if(answer != antecedent*consequent){
					System.out.println("땡!");
					System.out.println("정답 = " + antecedent*consequent);
					// countTime에 할당된 초기값을 참조하게 하였습니다.
					countTime = countTimeDefault;
				}
			}
			else if(countTime == 0) {
				timer.cancel();
				gameOver = true;
			}
			
			/* while 반복문 1회 종료 시 로직 */
			// 구구단 문항 구분을 위해 공백을 출력하였습니다.
			System.out.println();
			// 타이머가 누적되지 않도록 초기화하였습니다.
			timer.cancel();
			// while 반복문이 반복되도록, 그리고 언젠가 종료되도록 설정하였습니다.
			gameCoin++;
		
		}
		
		// while 반복문이 종료됨과 동시에 타이머를 종료시켰습니다.
		// 참고로 Timer 클래스는 while 반복문 내부에서 이용되었으므로 반복문 외부로 가져올 수 없습니다. 
		countTime = 0;
		// while 반복문이 종료됨과 동시에 버퍼 메모리 공간을 비웠습니다.
		scan.nextLine();
		
		
		/* 구구단 게임 종료 */
		System.out.println("-----게임 종료-----");
		System.out.print("참여자 이름 입력해주세요. = ");
		user = scan.nextLine();
		
		System.out.println();
		
		System.out.println("-----게임 점수-----");
		System.out.println(user + "님 점수 = " + score + "점, " + "만점 = " + gameCoinMax + "점");
		
		// Scanner 클래스를 종료시켰습니다.
		scan.close();
		
	}

}
```

<br>
<br>
<br>
