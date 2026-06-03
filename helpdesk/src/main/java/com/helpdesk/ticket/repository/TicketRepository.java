package com.helpdesk.ticket.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.helpdesk.ticket.entity.Ticket;
import com.helpdesk.user.entity.User;
import com.helpdesk.common.enums.TicketStatus;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

    List<Ticket> findByCreatedBy(User user);

    List<Ticket> findByAssignedTo(User user);
    
    long countByStatus(
            TicketStatus status);
    
    List<Ticket> findAllByOrderByCreatedAtDesc();
}