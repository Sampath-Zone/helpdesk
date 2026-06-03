package com.helpdesk.feedback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.helpdesk.feedback.entity.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

}