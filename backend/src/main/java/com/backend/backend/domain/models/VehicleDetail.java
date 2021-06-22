package com.backend.backend.domain.models;

public class VehicleDetail {

    String id;
    String licensePlate	;
    String salesDesignation;
    String finOrVin;
    String modelYear;
    String colorName;
    String fuelType;
    String powerHp;
    String powerKw;
    String numberOfDoors;
    String numberOfSeats;

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

    public String getSalesDesignation() {
        return salesDesignation;
    }

    public void setSalesDesignation(String salesDesignation) {
        this.salesDesignation = salesDesignation;
    }

    public String getFinOrVin() {
        return finOrVin;
    }

    public void setFinOrVin(String finOrVin) {
        this.finOrVin = finOrVin;
    }

    public String getModelYear() {
        return modelYear;
    }

    public void setModelYear(String modelYear) {
        this.modelYear = modelYear;
    }

    public String getColorName() {
        return colorName;
    }

    public void setColorName(String colorName) {
        this.colorName = colorName;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public String getPowerHp() {
        return powerHp;
    }

    public void setPowerHp(String powerHp) {
        this.powerHp = powerHp;
    }

    public String getPowerKw() {
        return powerKw;
    }

    public void setPowerKw(String powerKw) {
        this.powerKw = powerKw;
    }

    public String getNumberOfDoors() {
        return numberOfDoors;
    }

    public void setNumberOfDoors(String numberOfDoors) {
        this.numberOfDoors = numberOfDoors;
    }

    public String getNumberOfSeats() {
        return numberOfSeats;
    }

    public void setNumberOfSeats(String numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
    }
}
