package com.code.jpa.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.time.LocalDateTime;

// Entity는 Setter를 사용하지 않음
// JPA는 데이터를 받아올 때 기본 생성자를 이용함
// 대신 빌더 패턴을 사용함
// 그런데 @Builder는 멤버 변수 모두를 파라미터로 가지는 생성자를 만드는 데 기본 생성자가 있음 작동을 안함
// 또 그런데 @Entity가 기본 생성자를 생성함

// 생성된 엔터티는 영속성이 생성됨
@Entity
@Table(name = "my_user")
@Getter
// Entity에 부여되는 어노테이션 및 해당 이유
@Builder
// access 레벨을 protected로 변경
@NoArgsConstructor(access = AccessLevel.PROTECTED)
// 모든 멤버변수를 가지는 생성자 생성
@AllArgsConstructor
public class MyUserEntity {

    // 식별값
    @Id
    // Camel 형식으로만 작성하면 아래 Column 어노테이션 코드는 생략 가능
    // @Column(name = "user_id")
    private String userId;
    private String userName;
    private int userAge;
    private LocalDateTime create_date;
    private LocalDateTime update_date;

}
