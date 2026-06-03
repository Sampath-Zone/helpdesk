package com.helpdesk.escalation.entity;

import com.helpdesk.common.entity.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "escalation_matrix")
public class EscalationMatrix extends BaseEntity {

    private String ticketStatus;

    private Integer escalationHours;

    private String escalationToRole;

	public String getTicketStatus() {
		return ticketStatus;
	}

	public void setTicketStatus(String ticketStatus) {
		this.ticketStatus = ticketStatus;
	}

	public Integer getEscalationHours() {
		return escalationHours;
	}

	public void setEscalationHours(Integer escalationHours) {
		this.escalationHours = escalationHours;
	}

	public String getEscalationToRole() {
		return escalationToRole;
	}

	public void setEscalationToRole(String escalationToRole) {
		this.escalationToRole = escalationToRole;
	}
    
    
}