package com.helpdesk.dashboard.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DashboardResponse {

    private Long totalTickets;
    private Long openTickets;
    private Long closedTickets;
    private Long slaBreachedTickets;
	public Long getTotalTickets() {
		return totalTickets;
	}
	public void setTotalTickets(Long totalTickets) {
		this.totalTickets = totalTickets;
	}
	public Long getOpenTickets() {
		return openTickets;
	}
	public void setOpenTickets(Long openTickets) {
		this.openTickets = openTickets;
	}
	public Long getClosedTickets() {
		return closedTickets;
	}
	public void setClosedTickets(Long closedTickets) {
		this.closedTickets = closedTickets;
	}
	public Long getSlaBreachedTickets() {
		return slaBreachedTickets;
	}
	public void setSlaBreachedTickets(Long slaBreachedTickets) {
		this.slaBreachedTickets = slaBreachedTickets;
	}
	public DashboardResponse(Long totalTickets, Long openTickets, Long closedTickets, Long slaBreachedTickets) {
		super();
		this.totalTickets = totalTickets;
		this.openTickets = openTickets;
		this.closedTickets = closedTickets;
		this.slaBreachedTickets = slaBreachedTickets;
	}
    
    
}