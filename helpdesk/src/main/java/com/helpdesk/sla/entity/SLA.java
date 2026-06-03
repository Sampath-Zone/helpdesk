package com.helpdesk.sla.entity;

import com.helpdesk.category.entity.Category;
import com.helpdesk.common.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "sla")
public class SLA extends BaseEntity {

    @OneToOne
    @JoinColumn(name = "category_id")
    private Category category;

    private Integer responseTimeHours;

    private Integer resolutionTimeHours;

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
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