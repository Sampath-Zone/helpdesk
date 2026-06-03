package com.helpdesk.dashboard.service;

import org.springframework.stereotype.Service;

import com.helpdesk.common.enums.TicketStatus;
import com.helpdesk.dashboard.dto.DashboardResponse;
import com.helpdesk.ticket.repository.TicketRepository;

@Service
public class DashboardService {

    private final TicketRepository ticketRepository;

    public DashboardService(
            TicketRepository ticketRepository) {

        this.ticketRepository = ticketRepository;
    }

    public DashboardResponse getDashboard() {

        long totalTickets =
                ticketRepository.count();

        long openTickets =
                ticketRepository.countByStatus(
                        TicketStatus.NEW);

        long closedTickets =
                ticketRepository.countByStatus(
                        TicketStatus.CLOSED);

        long resolvedTickets =
                ticketRepository.countByStatus(
                        TicketStatus.RESOLVED);

        return new DashboardResponse(
                totalTickets,
                openTickets,
                closedTickets,
                resolvedTickets
        );
    }
}