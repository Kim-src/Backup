package com.code.jpa;

import com.code.jpa.entity.MemInfoEntity;
import com.code.jpa.entity.MyUserEntity;
import com.code.jpa.repository.MemInfoRepository;
import com.code.jpa.repository.MyUserRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class SampleJpaApplicationTests {

    @Autowired
    MyUserRepository repository;

    @Autowired
    MemInfoRepository mem;
    @Autowired
    private MemInfoRepository memInfoRepository;

    @Test
    void contextLoads() {

        MyUserEntity user =
                MyUserEntity
                        .builder()
                        // id 값이 상이하면 자동으로 save 실행
                        // id 값이 동일하면 자동으로 update 실행
                        .userId("admintest")
                        .userName("관리자22")
                        .userAge(40)
                        .build();

        // 데이터베이스에 상관없이 업데이트
        repository.save(user);

    }

    @Test
    public void getOneData() {
        // Optional = 데이터가 null인지 아닌지 확인
        // .get() 또는 orElse(null)
        // MyUserEntity user = repository.findById("admin").orElse(null);
        MyUserEntity user = repository.findById("admin").orElseThrow(() -> new NullPointerException("data does not exist"));

        System.out.println(user.getUserId() + " : " + user.getUserName());
    }

    @Test
    public void getOneData2() throws Exception {
        List<MyUserEntity> list = repository.findByUserAgeAndUserNameOrderByUserIdDesc(40, "관리자");
        for(MyUserEntity entity : list) {
            System.out.println(entity.getUserId() + " : " + entity.getUserName());
        }
    }

    @Test
    public void memInfoList() {

        List<MemInfoEntity> list =
                memInfoRepository.findAll();

        for(MemInfoEntity mem : list) {
            System.out.print("아이디 : " + mem.getUserId() + ", ");
            System.out.print("이름 : " + mem.getUserName() + ", ");
            System.out.print("락커번호 : " + mem.getLocker().getLockerNum() + "\n");
        }
    }

}
