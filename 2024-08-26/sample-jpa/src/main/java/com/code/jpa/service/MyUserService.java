package com.code.jpa.service;

import com.code.jpa.entity.MyUserEntity;
import com.code.jpa.repository.MyUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MyUserService {

    private final MyUserRepository myUserRepository;

    public List<MyUserEntity> getUserList() throws Exception {
        return myUserRepository.findAll();
    }

}
