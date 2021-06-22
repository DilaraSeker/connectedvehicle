package com.backend.backend.domain.models;

public class Vehicle {
    private String id;
    private String licensePlate;
    private String finOrVin;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public String getFinOrVin() {
        return finOrVin;
    }

    public void setFinOrVin(String finOrVin) {
        this.finOrVin = finOrVin;
    }
}
