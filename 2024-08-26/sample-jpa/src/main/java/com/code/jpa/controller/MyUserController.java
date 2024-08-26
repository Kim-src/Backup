package com.code.jpa.controller;

import com.code.jpa.entity.MyUserEntity;
import com.code.jpa.service.MyUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// JSON 형태로 자동 변환?
// 단순 Controller 어노테이션은 뷰 이름을 문자열 반환이나 ModelAndView 객체 반환
// 리스트를 반환하기 위해서는 RestController를 사용해야되나?
@RestController
@RequiredArgsConstructor
public class MyUserController {

    private final MyUserService service;

    @GetMapping("/myuser")
    // @ResponseBody
    public List<MyUserEntity> getMyuserList() throws Exception {
        return service.getUserList();
    }

}
