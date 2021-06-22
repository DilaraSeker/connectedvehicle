package com.backend.backend.domain.models;

public class Location {

    LocationCoordinate latitude;
    LocationCoordinate longitude;
    LocationCoordinate heading;

    public LocationCoordinate getLatitude() {
        return latitude;
    }

    public void setLatitude(LocationCoordinate latitude) {
        this.latitude = latitude;
    }

    public LocationCoordinate getLongitude() {
        return longitude;
    }

    public void setLongitude(LocationCoordinate longitude) {
        this.longitude = longitude;
    }

    public LocationCoordinate getHeading() {
        return heading;
    }

    public void setHeading(LocationCoordinate heading) {
        this.heading = heading;
    }
}
