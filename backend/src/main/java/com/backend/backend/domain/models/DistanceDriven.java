package com.backend.backend.domain.models;


import com.backend.backend.domain.enums.RetrievalStatus;
import com.backend.backend.domain.enums.UnitOfDistanceDriven;


public class DistanceDriven {

    UnitOfDistanceDriven unitOfDistanceDriven;
    int value;
    RetrievalStatus retrievalStatus;
    int timeStamp;

    public UnitOfDistanceDriven getUnitOfDistanceDriven() {
        return unitOfDistanceDriven;
    }

    public void setUnitOfDistanceDriven(UnitOfDistanceDriven unitOfDistanceDriven) {
        this.unitOfDistanceDriven = unitOfDistanceDriven;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public RetrievalStatus getRetrievalStatus() {
        return retrievalStatus;
    }

    public void setRetrievalStatus(RetrievalStatus retrievalStatus) {
        this.retrievalStatus = retrievalStatus;
    }

    public int getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(int timeStamp) {
        this.timeStamp = timeStamp;
    }
}
