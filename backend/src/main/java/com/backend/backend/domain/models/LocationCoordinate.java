package com.backend.backend.domain.models;


import com.backend.backend.domain.enums.RetrievalStatus;

public class LocationCoordinate {

    double value;
    RetrievalStatus retrievalStatus;
    int timeStamp;

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
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
