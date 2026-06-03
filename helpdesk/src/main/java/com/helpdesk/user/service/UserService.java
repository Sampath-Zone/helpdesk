package com.helpdesk.user.service;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.helpdesk.common.enums.Role;
import com.helpdesk.user.dto.CreateUserRequest;
import com.helpdesk.user.dto.UserResponse;
import com.helpdesk.user.entity.User;
import com.helpdesk.user.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    private UserResponse mapToResponse(
            User user) {

        UserResponse response =
                new UserResponse();

        response.setId(user.getId());
        response.setName(user.getName());
        response.setEmail(user.getEmail());
        response.setRole(user.getRole());

        return response;
    }
    
    public UserResponse createUser(
            CreateUserRequest request) {

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());

        user.setPassword(
                passwordEncoder.encode(
                        request.getPassword()));

        user.setRole(request.getRole());

        User savedUser =
                userRepository.save(user);

        return mapToResponse(savedUser);
    }

    public List<UserResponse> getAllUsers() {

        return userRepository
                .findByRole(Role.SUPPORT_AGENT)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }
}