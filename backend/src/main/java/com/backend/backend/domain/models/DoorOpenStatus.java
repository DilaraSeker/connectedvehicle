package com.backend.backend.domain.models;


import com.backend.backend.domain.enums.RetrievalStatus;
import com.backend.backend.domain.enums.ValueOfOpen;

public class DoorOpenStatus {
    ValueOfOpen valueOfOpen;
    RetrievalStatus retrievalStatus;
    int timeStamp;

    public ValueOfOpen getValueOfOpen() {
        return valueOfOpen;
    }

    public void setValueOfOpen(ValueOfOpen valueOfOpen) {
        this.valueOfOpen = valueOfOpen;
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
