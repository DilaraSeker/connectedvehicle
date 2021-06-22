package com.backend.backend.domain.models;


import com.backend.backend.domain.enums.RetrievalStatus;

public class TirePressureStatus {

    String unit;
    String value;
    RetrievalStatus retrievalStatus;
    String timeStamp;

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
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
