package com.helpdesk.user.repository;

import java.awt.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.helpdesk.common.enums.Role;
import com.helpdesk.user.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);
    
    java.util.List<User> findByRole(Role role);
}