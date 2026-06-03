package com.helpdesk.ticket.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.helpdesk.ticket.dto.AssignTicketRequest;
import com.helpdesk.ticket.dto.CreateTicketRequest;
import com.helpdesk.ticket.dto.TicketResponse;
import com.helpdesk.ticket.dto.UpdateTicketStatusRequest;
import com.helpdesk.ticket.entity.Ticket;
import com.helpdesk.ticket.service.TicketService;

@RestController
@RequestMapping("/api/tickets")
@CrossOrigin("*")
public class TicketController {

    private final TicketService ticketService;

    public TicketController(
            TicketService ticketService) {

        this.ticketService = ticketService;
    }

    @PostMapping
    public TicketResponse createTicket(
            @RequestBody CreateTicketRequest request,
            Principal principal) {

        return ticketService.createTicket(
                request,
                principal.getName());
    }

    @GetMapping
    public List<TicketResponse> getAllTickets() {

        return ticketService.getAllTickets();
    }

    @GetMapping("/my")
    public List<TicketResponse> getMyTickets(
            Principal principal) {

        return ticketService.getMyTickets(
                principal.getName());
    }

    @PutMapping("/{id}/status")
    public TicketResponse updateStatus(
            @PathVariable Long id,
            @RequestBody UpdateTicketStatusRequest request) {

        return ticketService.updateStatus(
                id,
                request);
    }
    
    @PutMapping("/{id}/assign")
    public TicketResponse assignTicket(
            @PathVariable Long id,
            @RequestBody AssignTicketRequest request) {

        return ticketService.assignTicket(
                id,
                request.getUserId());
    }
}