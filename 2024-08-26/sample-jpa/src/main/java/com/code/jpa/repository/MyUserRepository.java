package com.code.jpa.repository;

// JpaRepository 인터페이스
import com.code.jpa.entity.MyUserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

// Repository의 경우 어노테이션이 없어도 Bean에 등록됨
@Repository
// JpaRepository<관리할 Entity, 해당 Entity의 타입(String)>
public interface MyUserRepository extends JpaRepository<MyUserEntity, String> {

    // 인터페이스이기에 접근제한자 생략 가능
    List<MyUserEntity> findByUserAge(int userAge) throws Exception;
    List<MyUserEntity> findByUserAgeAndUserNameOrderByUserIdDesc(int userAge, String userName) throws Exception;

}
