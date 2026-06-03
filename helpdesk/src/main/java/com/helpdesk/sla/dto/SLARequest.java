package com.helpdesk.sla.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SLARequest {

    private Long categoryId;
    private Integer responseTimeHours;
    private Integer resolutionTimeHours;
	public Long getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}
	public Integer getResponseTimeHours() {
		return responseTimeHours;
	}
	public void setResponseTimeHours(Integer responseTimeHours) {
		this.responseTimeHours = responseTimeHours;
	}
	public Integer getResolutionTimeHours() {
		return resolutionTimeHours;
	}
	public void setResolutionTimeHours(Integer resolutionTimeHours) {
		this.resolutionTimeHours = resolutionTimeHours;
	}
    
    
}