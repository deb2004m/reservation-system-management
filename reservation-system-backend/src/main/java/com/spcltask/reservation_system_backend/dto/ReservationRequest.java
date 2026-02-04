package com.spcltask.reservation_system_backend.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ReservationRequest {
    private LocalDate checkIn;
    private LocalDate checkOut;
    private String roomType;
    private int adults;
    private int children;
    private String specialRequests;
}
