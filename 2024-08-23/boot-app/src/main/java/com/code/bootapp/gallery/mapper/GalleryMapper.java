package com.code.bootapp.gallery.mapper;

import com.code.bootapp.gallery.dto.Gallery;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

// GalleryMapper.xml 파일에 작성된 SQL 쿼리문과 연결됨
@Mapper
public interface GalleryMapper {

    int insertGallery(Gallery.Request request) throws Exception;
    int getGalleryTotal(Map<String, Object> param) throws Exception;
    List<Gallery.Response> getGalleryList(Map<String, Object> param) throws Exception;

    // @Param = 하나만 전송해도 객체로 전달되는 기능임?
    Gallery.Response getGallery(@Param("seq") int seq) throws Exception;
    int updateGallery(Gallery.Request request) throws Exception;
    int deleteGallery(@Param("seq") int seq) throws Exception;

}
