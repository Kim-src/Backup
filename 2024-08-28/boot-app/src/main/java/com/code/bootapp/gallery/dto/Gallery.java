package com.code.bootapp.gallery.dto;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public class Gallery {

    @Getter
    // 생성자를 이용해 데이터를 받기 때문에 실제로 필요 없음?
    @Setter
    // Builder = 객체를 new라고 선언하지 않고 조금 더 쉽게 사용할 수 있게 하는 역할
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    // 내부 클래스는 static으로 선언해야 좋음(객체 선언을 여러 번 해야되기 때문임)
    public static class Response {

        // MyBatis가 자동으로 언더바를 Camel 형식으로 변형함
        private int seq;
        private String title;
        private String writer;
        private String fileName;
        private String fileStoredName;
        private String filePath;
        private String thumbFileName;
        private String thumbFilePath;
        private String createDate;
        private String updateDate;

    }

    @Getter
    @Setter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class GalleryData {
        List<Response> galleryList;
        int nowPage;
        int totalSize;
        String pageHTML;
    }

    @Getter
    @Setter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Create {

        private int seq;
        private String title;
        private String writer;
        private MultipartFile file;

    }

    @Getter
    @Setter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Request {

        private int seq;
        private String title;
        private String writer;
        private String fileName;
        private String fileStoredName;
        private String filePath;
        private String thumbFileName;
        private String thumbFilePath;

    }

}
