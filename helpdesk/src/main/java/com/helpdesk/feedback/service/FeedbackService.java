package com.helpdesk.feedback.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.helpdesk.feedback.dto.FeedbackRequest;
import com.helpdesk.feedback.dto.FeedbackResponse;
import com.helpdesk.feedback.entity.Feedback;
import com.helpdesk.feedback.repository.FeedbackRepository;
import com.helpdesk.ticket.entity.Ticket;
import com.helpdesk.ticket.repository.TicketRepository;

@Service
public class FeedbackService {

    private final FeedbackRepository feedbackRepository;
    private final TicketRepository ticketRepository;

    public FeedbackService(
            FeedbackRepository feedbackRepository,
            TicketRepository ticketRepository) {

        this.feedbackRepository = feedbackRepository;
        this.ticketRepository = ticketRepository;
    }
    
    private FeedbackResponse mapToResponse(
            Feedback feedback) {

        FeedbackResponse response =
                new FeedbackResponse();

        response.setId(feedback.getId());
        response.setRating(feedback.getRating());
        response.setComment(feedback.getComment());

        return response;
    }

    public FeedbackResponse createFeedback(
            FeedbackRequest request) {

        Ticket ticket = ticketRepository.findById(
                        request.getTicketId())
                .orElseThrow(() ->
                        new RuntimeException("Ticket not found"));

        Feedback feedback = new Feedback();

        feedback.setRating(request.getRating());
        feedback.setComment(request.getComment());
        feedback.setTicket(ticket);

        Feedback savedFeedback =
                feedbackRepository.save(feedback);

        return mapToResponse(savedFeedback);
    }

    public List<FeedbackResponse> getAllFeedback() {

        return feedbackRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }
}