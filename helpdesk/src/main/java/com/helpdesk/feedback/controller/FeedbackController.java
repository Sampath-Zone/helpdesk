package com.helpdesk.feedback.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.helpdesk.feedback.dto.FeedbackRequest;
import com.helpdesk.feedback.dto.FeedbackResponse;
import com.helpdesk.feedback.entity.Feedback;
import com.helpdesk.feedback.service.FeedbackService;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    private final FeedbackService feedbackService;

    public FeedbackController(
            FeedbackService feedbackService) {

        this.feedbackService = feedbackService;
    }

    @PostMapping
    public FeedbackResponse createFeedback(
            @RequestBody FeedbackRequest request) {

        return feedbackService.createFeedback(request);
    }

    @GetMapping
    public List<FeedbackResponse> getAllFeedback() {

        return feedbackService.getAllFeedback();
    }
}