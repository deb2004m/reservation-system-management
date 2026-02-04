package com.spcltask.reservation_system_backend.controller;

import com.spcltask.reservation_system_backend.dto.ReservationRequest;
import com.spcltask.reservation_system_backend.model.ReservationForm;
import com.spcltask.reservation_system_backend.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    @Autowired
    private ReservationRepository reservationRepository;

    @PostMapping
    public String createReservation(@RequestBody ReservationRequest request) {

        if (request.getCheckOut().isBefore(request.getCheckIn())) {
            return "Check-out date must be after check-in date";
        }

        ReservationForm reservation = new ReservationForm();
        reservation.setCheckIn(request.getCheckIn());
        reservation.setCheckOut(request.getCheckOut());
        reservation.setRoomType(request.getRoomType());
        reservation.setAdults(request.getAdults());
        reservation.setChildren(request.getChildren());
        reservation.setSpecialRequests(request.getSpecialRequests());

        reservationRepository.save(reservation);

        return "Reservation successful";
    }

    @GetMapping
    public List<ReservationForm> getAllReservations() {
        return reservationRepository.findAll();
    }
}
