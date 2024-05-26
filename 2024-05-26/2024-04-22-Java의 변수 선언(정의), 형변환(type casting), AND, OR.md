---
title: Java의 변수 선언(정의), 형변환(type casting), AND, OR
date: 2024-04-22 18:00:00 +09:00
categories: [1. Fundamental, Java]
tags: [Java, Fundamental, Variable, Definition, Type Casting, Explicit Casting, Implicit Casting, Type Coercion, AND, OR]
---

<!-- 2024-04-22 글 작성 시작; 2024-04-23 페이지 호출 완료 -->
<h2>강의 내용 복습 : 코리아IT 신촌점 Java 강의 (2024-04-15,16 강의)</h2>
> - Tool :  
<img alt="Java" src="https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=white" />
<img alt="Eclipse" src="https://img.shields.io/badge/-Eclipse-2C2255?style=flat-square&logo=eclipse&logoColor=white" />

<br>

### 🔔 강의 내용
### 📌 동시 입력
> - Eclipse, VS Code 등 다수의 IDE에서는 여러 행에 동일한 내용을 동시에 입력할 수 있습니다.
> - Alt를 누른 채 타이핑을 희망하는 행을 클릭하면 됩니다.
> - Eclipse 및 VS Code에서 이 방법을 수행하면 여러 행에 커서가 위치됩니다.

### 📌 변수 선언
> - Java에서는 변수를 선언할 때 변수의 유형을 먼저 명명해야 됩니다.
> - 변수의 유형은 변수가 표현할 문자, 숫자, 논리를 지정하여 컴퓨터에게 전달하는 역할을 합니다.
> - 각 변수의 유형은 크게 기본 및 찹조로 구분되고 용량 등에 따라 다시 구분됩니다.

### 📌 기본 데이터 유형(8가지)
> - byte : 1 byte (8 bit)의 정수 데이터 저장
> - short : 2 byte의 정수 데이터 저장
> - int : 4 byte의 정수 데이터 저장
> - long : 8 byte의 정수 데이터 저장
> - float : 4 byte의 실수 데이터 저장
> - double : 8 byte의 실수 데이터 저장
> - char : 2 byte의 문자 데이터 저장
> - boolean : 1 byte의 논리형 데이터 저장

### 📌 참조 데이터 유형(4가지)
> - String : 문자열(여러 개의 문자)을 저장하는 객체 참조
> - Class : 개발자가 정의한 클래스의 객체 참조
> - Interface : 인터페이스 타입의 객체 참조
> - Array : 동일 유형의 여러 변수를 하나의 변수로 참조

<br>

### 🔔 응용 학습
### 📌 변수 선언(정의)
> - 일부 데이터 유형을 이용하여 새로운 변수를 아래와 같이 선언하였습니다.

``` java
public static void main(String[] args) {
    
    // 숫자형 변수를 선언하였습니다.
    // byte 타입으로 정의할 수 있는 변수의 최댓값은 127입니다.
    byte byteNum = 127;
    short shortNum = 777;
    int intNum = 777;
    long longNum = 777;

    // 실수형 변수를 선언하였습니다.
    // Java의 기본적인 실수는 double이기 때문에 float일 경우 실수 끝에 'f' 글자를 입력해야 인식됩니다.
    float floatNum = 7.7f;
    // double은 Java의 기본적인 실수 유형이기 때문에 실수 끝에 'd' 글자를 입력하지 않아도 인식됩니다.
    double doubleNum = 7.777d;
    
    // 문자형 변수를 선언하였습니다.
    char charLetter = 'c';
    String stringLetter = "string";
    
    // 논리형 변수를 선언하였습니다.
    boolean bool = true;
    
    // 각 변수에 저장된 데이터를 출력하였습니다.
    System.out.println("Byte Type = " + byteNum);
    System.out.println("Short Type = " + shortNum);
    System.out.println("Int Type = " + intNum);
    System.out.println("Long Type = " + longNum);
    System.out.println("Float Type = " + floatNum);
    System.out.println("Double Type = " + doubleNum);
    System.out.println("Char Type = " + charLetter);
    System.out.println("String Type = " + stringLetter);
    System.out.println("Boolean Type = " + bool);
}
```

### 📌 유형 변환(type casting)
> - Java에서는 유형 및 변수를 정의한 후에도 변수의 유형을 변환시킬 수 있습니다.
> - 유형 변환은 자동 형변환 및 강제 형변환으로 구분됩니다.

### 📌 자동 형변환(Implicit Casting)
> - 자동 형변환은 말 그대로 프로그램이 자동으로 수행하는 형 변환을 의미합니다.
> - 작은 크기(byte)의 데이터 유형에서 큰 크기(byte)의 데이터 유형으로 변환될 때 수행됩니다.

### 📌 강제 형변환(Explicit Casting)
> - 강제 형변환은 개발자가 프로그램에게 형 변환을 명시하는 것을 의미합니다.
> - 자동 형변환과 반대로 큰 크기에서 작은 크기의 데이터 유형으로 변환될 때 수행됩니다.
> - 자동 형변환 및 강제 형변환 예시는 아래와 같습니다.

``` java
public static void main(String[] args) {
    
    // 자동 형변환 예시(숫자형 → 숫자형)
    int intNum1 = 10; // 4 byte
    long longNum1 = intNum1; // 8 byte
    System.out.println("Implicit Casting = " + longNum1);
    
    // 강제 형변환 예시(숫자형 → 숫자형)
    long longNum2 = 10; // 8 byte
    int intNum2 = (int)longNum2; // 4 byte
    System.out.println("Explicit Casting = " + intNum2);
    
    // 자동 형변환 예시(문자형 → 문자형)
    // 아스키 코드에 따라 A라는 문자가 10진수로 치환되고 65가 출력됩니다.
    char letter1 = 'A'; // 2 byte
    int intNum3 = letter1; // 4 byte
    System.out.println("Implicit Casting = " + intNum3);
    
    // 강제 형변환 예시(숫자형 → 문자형)
    int intNum4 = 65; // 4 byte
    char letter2 = (char)intNum4; // 2 byte
    System.out.println("Explicit Casting = " + letter2);
}
```

<br>
<br>
<br>
