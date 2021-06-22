package com.backend.backend.domain.models;


import com.backend.backend.domain.enums.RetrievalStatus;
import com.backend.backend.domain.enums.UnitOfStateOfCharge;

public class StateOfCharge {
    UnitOfStateOfCharge unitOfStateOfCharge;
    int value;
    RetrievalStatus retrievalStatus;
    int timeStamp;

    public UnitOfStateOfCharge getUnitOfStateOfCharge() {
        return unitOfStateOfCharge;
    }

    public void setUnitOfStateOfCharge(UnitOfStateOfCharge unitOfStateOfCharge) {
        this.unitOfStateOfCharge = unitOfStateOfCharge;
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
