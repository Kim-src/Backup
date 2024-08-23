package com.code.bootapp.dto.notice;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.scheduling.support.SimpleTriggerContext;

public class Notice {

    // 게시글 저장 클래스
    @Getter
    @Setter
    // Builder 클래스를 통해 객체를 선언하지 않고 만들 수 있는 방법
    @Builder
    public static class NoticeDTO {
        private int noId;
        private String title;
        private String contents;
        private String writer;
        private int readCnt;
        private String createDate;
        private String updateDate;
        // 재활용하기 위해 DTO로 생성
        private NoticeFileDTO file;
    }

    @Getter
    @Setter
    @Builder
    public static class NoticeFileDTO {
        private int fileId;
        private int noId;
        private String fileName;
        private String fileStoredName;
        private String filePath;
    }

}
