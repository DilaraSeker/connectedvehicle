package com.backend.backend.domain.models;

public class DistanceDrivenResponse {
    DistanceDriven odometer ;
    DistanceDriven distanceSinceReset;
    DistanceDriven distanceSinceStart;

    public DistanceDriven getOdometer() {
        return odometer;
    }

    public void setOdometer(DistanceDriven odometer) {
        this.odometer = odometer;
    }

    public DistanceDriven getDistanceSinceReset() {
        return distanceSinceReset;
    }

    public void setDistanceSinceReset(DistanceDriven distanceSinceReset) {
        this.distanceSinceReset = distanceSinceReset;
    }

    public DistanceDriven getDistanceSinceStart() {
        return distanceSinceStart;
    }

    public void setDistanceSinceStart(DistanceDriven distanceSinceStart) {
        this.distanceSinceStart = distanceSinceStart;
    }
}
