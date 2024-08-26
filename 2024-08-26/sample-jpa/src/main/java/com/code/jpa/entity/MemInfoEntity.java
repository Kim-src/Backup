package com.code.jpa.entity;

import jakarta.persistence.*;
import lombok.*;

// 생성된 엔터티는 영속성이 생성됨
@Entity
@Table(name = "mem_info")
@Getter
// Entity에 부여되는 어노테이션 및 해당 이유
@Builder
// access 레벨을 protected로 변경
@NoArgsConstructor(access = AccessLevel.PROTECTED)
// 모든 멤버변수를 가지는 생성자 생성
@AllArgsConstructor
public class MemInfoEntity {

    // id 부여
    @Id
    private String userId;
    private String userName;
    // private int lockerId;

    // 1 대 1 매칭
    @OneToOne
    @JoinColumn(name="locker_id")
    private LockerInfoEntity locker;

}
