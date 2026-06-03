package com.helpdesk.feedback.entity;

import com.helpdesk.common.entity.BaseEntity;
import com.helpdesk.ticket.entity.Ticket;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "feedback")
public class Feedback extends BaseEntity {

    private Integer rating;

    private String comment;

    @OneToOne
    @JoinColumn(name = "ticket_id")
    private Ticket ticket;

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Ticket getTicket() {
		return ticket;
	}

	public void setTicket(Ticket ticket) {
		this.ticket = ticket;
	}
    
    
}