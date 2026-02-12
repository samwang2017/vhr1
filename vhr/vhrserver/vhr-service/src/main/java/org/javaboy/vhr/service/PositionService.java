package org.javaboy.vhr.service;

import org.javaboy.vhr.mapper.PositionMapper;
import org.javaboy.vhr.model.Hr;
import org.javaboy.vhr.model.Position;
import org.javaboy.vhr.model.RespBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * @作者 江南一点雨
 * @公众号 江南一点雨
 * @微信号 a_java_boy
 * @GitHub https://github.com/lenve
 * @博客 http://wangsong.blog.csdn.net
 * @网站 http://www.javaboy.org
 * @时间 2019-10-01 15:54
 */
@Service
public class PositionService {
    @Autowired
    PositionMapper positionMapper;

    public List<Position> getAllPositions() {
        return positionMapper.getAllPositions();
    }

    public Integer addPosition(Position position) {
        position.setEnabled(true);
        position.setCreateDate(new Date());
        return positionMapper.insertSelective(position);
    }

    public Integer updatePositions(Position position) {
        Hr currentHr = (Hr) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        boolean isAdmin = currentHr.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_admin"));
        if (position.getDesc4() != null && !isAdmin) {
            throw new RuntimeException("非管理员不能修改职位描述!");
        }
        return positionMapper.updateByPrimaryKeySelective(position);
    }

    public Integer deletePositionById(Integer id) {
        Position pos = positionMapper.selectByPrimaryKey(id);
        System.out.println("pos" + pos + pos.getName() + pos.getName().contains("经理"));
        if (pos != null && pos.getName().contains("经理")) {
            throw new RuntimeException("经理级别不能删除!");
        }
        return positionMapper.deleteByPrimaryKey(id);
    }

    public Integer deletePositionsByIds(Integer[] ids) {
        return positionMapper.deletePositionsByIds(ids);
    }
}
