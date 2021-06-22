package com.backend.backend.domain.models;


import com.backend.backend.domain.enums.RetrievalStatus;
import com.backend.backend.domain.enums.UnitOfFuelLevel;


public class FuelLevel {

    UnitOfFuelLevel unitOfFuelLevel;
    String value;
    RetrievalStatus retrievalStatus;
    String timeStamp;

    public UnitOfFuelLevel getUnitOfFuelLevel() {
        return unitOfFuelLevel;
    }

    public void setUnitOfFuelLevel(UnitOfFuelLevel unitOfFuelLevel) {
        this.unitOfFuelLevel = unitOfFuelLevel;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public RetrievalStatus getRetrievalStatus() {
        return retrievalStatus;
    }

    public void setRetrievalStatus(RetrievalStatus retrievalStatus) {
        this.retrievalStatus = retrievalStatus;
    }

    public String getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(String timeStamp) {
        this.timeStamp = timeStamp;
    }
}
