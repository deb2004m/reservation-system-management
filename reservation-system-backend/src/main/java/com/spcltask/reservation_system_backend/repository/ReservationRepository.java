package com.spcltask.reservation_system_backend.repository;

import com.spcltask.reservation_system_backend.model.ReservationForm;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends MongoRepository<ReservationForm, String> {
}
