package com.backend.backend.domain;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ErrorResponse {
    private String reason;
    private String code;




}
