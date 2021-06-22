package com.backend.backend.port.out;

import com.backend.backend.domain.models.Vehicle;

import java.util.List;
import java.util.Optional;

public interface VehicleRepositoryPort {


    List<Vehicle> getVehicles();

    Optional<Vehicle> getVehicle(String vehicleId);



}
