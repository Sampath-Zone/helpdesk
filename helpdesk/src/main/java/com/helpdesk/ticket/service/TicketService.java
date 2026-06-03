package com.helpdesk.ticket.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.helpdesk.category.entity.Category;
import com.helpdesk.category.repository.CategoryRepository;
import com.helpdesk.common.enums.Role;
import com.helpdesk.common.enums.TicketStatus;
import com.helpdesk.ticket.dto.CreateTicketRequest;
import com.helpdesk.ticket.dto.TicketResponse;
import com.helpdesk.ticket.dto.UpdateTicketStatusRequest;
import com.helpdesk.ticket.entity.Ticket;
import com.helpdesk.ticket.repository.TicketRepository;
import com.helpdesk.user.entity.User;
import com.helpdesk.user.repository.UserRepository;

@Service
public class TicketService {

    private final TicketRepository ticketRepository;
    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;

    public TicketService(
            TicketRepository ticketRepository,
            CategoryRepository categoryRepository,
            UserRepository userRepository) {

        this.ticketRepository = ticketRepository;
        this.categoryRepository = categoryRepository;
        this.userRepository = userRepository;
    }
    
    private TicketResponse mapToResponse(Ticket ticket) {

        TicketResponse response = new TicketResponse();

        response.setId(ticket.getId());
        response.setTitle(ticket.getTitle());
        response.setDescription(ticket.getDescription());
        response.setPriority(ticket.getPriority());
        response.setStatus(ticket.getStatus());
        if (ticket.getAssignedTo() != null) {

            response.setAssignedTo(
                    ticket.getAssignedTo()
                          .getEmail());
        }

        return response;
    }

    public TicketResponse createTicket(
            CreateTicketRequest request,
            String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        Category category =
                categoryRepository.findById(
                                request.getCategoryId())
                        .orElseThrow(() ->
                                new RuntimeException("Category not found"));

        Ticket ticket = new Ticket();

        ticket.setTitle(request.getTitle());
        ticket.setDescription(request.getDescription());
        ticket.setPriority(request.getPriority());
        ticket.setStatus(TicketStatus.NEW);
        ticket.setCreatedBy(user);
        ticket.setCategory(category);

        Ticket savedTicket = ticketRepository.save(ticket);

        return mapToResponse(savedTicket);
    }

    public List<TicketResponse> getAllTickets() {
    	return ticketRepository.findAllByOrderByCreatedAtDesc()
    	        .stream()
    	        .map(this::mapToResponse)
    	        .toList();
    }

    public List<TicketResponse> getMyTickets(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        if (user.getRole() == Role.SUPPORT_AGENT) {

            return ticketRepository
                    .findByAssignedTo(user)
                    .stream()
                    .map(this::mapToResponse)
                    .toList();
        }

        return ticketRepository
                .findByCreatedBy(user)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    public TicketResponse updateStatus(
            Long ticketId,
            UpdateTicketStatusRequest request) {

        Ticket ticket = ticketRepository.findById(ticketId)
                .orElseThrow(() ->
                        new RuntimeException("Ticket not found"));

        ticket.setStatus(request.getStatus());

        ticket.setStatus(request.getStatus());

        Ticket updatedTicket =
                ticketRepository.save(ticket);

        return mapToResponse(updatedTicket);
    }
    
    public TicketResponse assignTicket(
            Long ticketId,
            Long userId) {

        Ticket ticket =
                ticketRepository.findById(ticketId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Ticket not found"));

        User user =
                userRepository.findById(userId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "User not found"));

        ticket.setAssignedTo(user);

        Ticket updatedTicket =
                ticketRepository.save(ticket);

        return mapToResponse(updatedTicket);
    }
}