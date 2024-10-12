/*DROP TABLE 테이블 삭제*/
/*DROP SEQUENCE/ CREATE SEQUENCE AUTO INCREMENT처럼 자동으로 증가하는 컬럼 ,관리를 위해 SEQUENCE 사용*/
/*FOREIGN KEY 외래키 참조*/

DROP TABLE if exists MEMBER;

CREATE TABLE MEMBER (
    `MEM_NO` 		   INT(12) 			NOT NULL 	AUTO_INCREMENT					COMMENT '회원 번호',
    `MEM_ID`          VARCHAR(50) 		NOT NULL 						COMMENT '회원 아이디',
    `MEM_PWD`    	   VARCHAR(50)  	NOT NULL 						COMMENT '회원 비밀번호',
    `MEM_NAME`   	  VARCHAR(50) 		NOT NULL  						COMMENT '회원 이름',
    `MEM_NICK`        VARCHAR(50)		NOT NULL						COMMENT '회원 활동명',
    `MEM_PHONE`        VARCHAR(50) 		NULL 							COMMENT '회원 전화번호',
    `MEM_EMAIL`       VARCHAR(50) 		NULL							COMMENT '회원 이메일',
    PRIMARY KEY (`MEM_NO`)
);



DROP TABLE if exists RESTAURANT;

CREATE TABLE RESTAURANT (
    `RS_NO` 		   INT(12) 			NOT NULL 						COMMENT '매장 번호',
    `RS_NAME`          VARCHAR(50) 		NOT NULL 						COMMENT '매장 이름',
    `RS_PLACE_ROAD`    VARCHAR(100) 	NOT NULL 						COMMENT '도로명 주소',
    `RS_PLACE_LOCAL`   VARCHAR(100) 	NOT NULL 						COMMENT '지번 주소',
    `RS_LAT`           DECIMAL(10,7) 	NOT NULL						COMMENT '매장 위도',
    `RS_LONG`          DECIMAL(10,7) 	NOT NULL 						COMMENT '매장 경도',
    `RS_PHONE`         VARCHAR(50) 		NULL DEFAULT NULL  						COMMENT '매장 전화번호',
    `RS_OPEN_TIME`     VARCHAR(50)  	NULL DEFAULT NULL 				COMMENT '매장 개장시간',
    `RS_CLOSE_TIME`    VARCHAR(50)  	NULL DEFAULT NULL 				COMMENT '매장 폐장시간',
    `RS_CLOSE_DAY`     VARCHAR(50)	 	NULL DEFAULT NULL 				COMMENT '매장 휴무일',
    `RS_FOOD_CATEGORY` CHAR(1) 			NOT NULL 						COMMENT '음식 유형 : 한식 K, 중식 C, 일식 J, 양식 W',
    `RS_LIKES`         INT(12) 			NULL DEFAULT NULL 				COMMENT '매장 좋아요 수',
    `RS_YOUTUBE`       VARCHAR(100) 	NULL DEFAULT NULL 				COMMENT '소개 유튜브 채널',
    `RS_YOUTUBE_IMG`   VARCHAR(500) 	NULL DEFAULT NULL 				COMMENT '유튜브 썸네일 주소 이미지',
    PRIMARY KEY (`RS_NO`)
);

DROP TABLE if exists RS_MENU;

CREATE TABLE RS_MENU (
	`RS_MENU_NO` 	   INT(12) 			NOT NULL 	AUTO_INCREMENT				PRIMARY KEY  COMMENT '메뉴 번호',
	`RS_NO` 		   INT(12) 			NOT NULL 								 COMMENT '매장 번호/외래키',
    `RS_FOOD_MENU`     VARCHAR(50) 		NULL DEFAULT NULL 						 COMMENT '음식 메뉴명',
    `RS_FOOD_PRICE`    INT(12) 			NULL DEFAULT NULL 						 COMMENT '음식 메뉴 가격'
   ) ;
  
ALTER TABLE RS_MENU
ADD FOREIGN KEY (`RS_NO`) REFERENCES RESTAURANT(`RS_NO`);


 DROP TABLE if exists RS_IMG; 

 CREATE TABLE RS_IMG(
 		`RS_IMG_NO`        INT(40) 			NOT NULL AUTO_INCREMENT					PRIMARY KEY  COMMENT '이미지 번호',
 		`RS_NO` 		   INT(12) 			NOT NULL 								 COMMENT '매장 번호/외래키',
        `RS_IMG_PATH`      VARCHAR(300) 	NULL DEFAULT NULL 						COMMENT '매장 이미지 저장 경로'
);

alter table RS_IMG modify `RS_IMG_PATH` VARCHAR(1000);

  ALTER TABLE RS_IMG
	ADD FOREIGN KEY (`RS_NO`) REFERENCES RESTAURANT(`RS_NO`);



DROP TABLE if exists REVIEW;

CREATE TABLE REVIEW (
    `REV_NO` 		   INT(12) 			NOT NULL AUTO_INCREMENT		PRIMARY KEY	COMMENT '리뷰 글 번호',
    `MEM_NO` 		   INT(12) 			NOT NULL 						COMMENT '회원 번호/외래키',
    `RS_NO` 		   INT(12) 			NOT NULL 						COMMENT '매장 번호/외래키',
    `RS_REV_RATING`    INT(12) 			NULL DEFAULT NULL 				COMMENT '매장 평점',
    `REV_CONTENTS`     VARCHAR(3000)  	NOT NULL 						COMMENT '리뷰 내용',
    `REV_CREATE_DATE`  DATETIME 		DEFAULT NOW() 					COMMENT '리뷰 글 작성일',
    `REV_UPDATE_DATE`  DATETIME			NULL							COMMENT '리뷰 글 수정일'
);

ALTER TABLE REVIEW
ADD FOREIGN KEY (`MEM_NO`) REFERENCES MEMBER(`MEM_NO`),
ADD FOREIGN KEY (`RS_NO`) REFERENCES RESTAURANT(`RS_NO`);



DROP TABLE if exists BOOK;

CREATE TABLE BOOK (
    `B_NO` 		  	 INT(12) 			NOT NULL	AUTO_INCREMENT		PRIMARY KEY	COMMENT '예약 번호',
    `MEM_NO` 		  INT(12) 			NOT NULL 						COMMENT '회원 번호/외래키',
    `RS_NO` 		   INT(12) 			NOT NULL 						COMMENT '매장 번호/외래키',
    `B_PEOPLE`        VARCHAR(50) 		NOT NULL 					COMMENT '예약 인원 수',
    `B_DATE`    	 VARCHAR(50)  		NOT NULL 						COMMENT '예약일',
    `B_TIME`   	  	VARCHAR(50) 		NOT NULL 							COMMENT '예약 시간',
    `B_STATE`        VARCHAR(50)		NOT NULL						COMMENT '예약 상태',
    `B_SEAT`        VARCHAR(50) 		NULL DEFAULT '10'						COMMENT '잔여 좌석 수'
);


ALTER TABLE BOOK
ADD FOREIGN KEY (`MEM_NO`) REFERENCES MEMBER(`MEM_NO`),
ADD FOREIGN KEY (`RS_NO`) REFERENCES RESTAURANT(`RS_NO`);

COMMIT;


/*COMMIT;


SELECT * FROM RESTAURANT ;


select * from RESTAURANT where rs_food_category like '%k';

select * from RESTAURANT where SUBSTR(rs_place_road, 1, 2) = '서울';*/

ㄴㄴ
