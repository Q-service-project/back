package com.example.demo.repository;

import com.example.demo.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    @Query("SELECT u FROM UserEntity u WHERE u.oAuthId = :oAuthId")
    Optional<UserEntity> findByOAuthId(@Param("oAuthId") String oAuthId);

    @Query("update UserEntity as u set u.uuid = :uuid where u.id = :userId")
    String updateUUID(@Param("userId") String userId, @Param("uuid") String uuid);

    @Modifying
    @Query("delete from UserEntity u where u.id not in (select h.user.id from UserHistoryEntity h group by h.user.id) and u.role = 'ANONYMOUS'")
    void deleteOldAnonymousUser();
}

