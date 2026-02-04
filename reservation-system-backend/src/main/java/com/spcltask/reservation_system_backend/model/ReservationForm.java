package com.spcltask.reservation_system_backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.Collection;

@Data
@Document(collection = "reservation")
public class ReservationForm {

    @Id
    String id;
    LocalDate checkIn;
    LocalDate checkOut;
    private String roomType;
    private int adults;
    private int children;
    private String specialRequests;

}
