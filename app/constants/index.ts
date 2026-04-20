import type { AxisModel } from "@syncfusion/ej2-react-charts";
import {formatDate} from "~/lib/utils";

export const userXAxis: AxisModel = {
    valueType: "Category",
    title: "Day",
    majorGridLines: { width: 0 },
    labelStyle: { fontWeight: "500" },
};

export const userYAxis: AxisModel = {
    title: "Users Count",
    minimum: 0,
    majorGridLines: { width: 1 },
    labelStyle: { fontWeight: "500" },
};

// Consulting
export const consultXAxis: AxisModel = {
    valueType: "Category",
    title: "Consulting Styles",
    majorGridLines: { width: 0 },
    labelStyle: { fontWeight: "500" },
};

export const consultYAxis: AxisModel = {
    title: "Consulting Count",
    minimum: 0,
    majorGridLines: { width: 1 },
    labelStyle: { fontWeight: "500" },
};

export const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        imageUrl: "/assets/images/people-1.jpg",
        dateJoined: new Date("2025-01-01"),
        itineraryCreated: 10,
        status: "admin",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        imageUrl: "/assets/images/people-2.jpg",
        dateJoined: new Date("2025-08-05"),
        itineraryCreated: 4,
        status: "user",
    },
    {
        id: 3,
        name: "John Smith",
        email: "john.smith@example.com",
        imageUrl: "/assets/images/people-3.jpg",
        dateJoined: new Date("2025-01-01"),
        itineraryCreated: 8,
        status: "user",
    },
    {
        id: 3,
        name: "John Smith",
        email: "john.smith@example.com",
        imageUrl: "/assets/images/people-1.jpg",
        dateJoined: new Date("2025-01-01"),
        itineraryCreated: 8,
        status: "user",
    },
    {
        id: 3,
        name: "John Smith",
        email: "john.smith@example.com",
        imageUrl: "/assets/images/people-2.jpg",
        dateJoined: new Date("2025-01-01"),
        itineraryCreated: 8,
        status: "user",
    },
    {
        id: 3,
        name: "John Smith",
        email: "john.smith@example.com",
        imageUrl: "/assets/images/people-1.jpg",
        dateJoined: new Date("2025-01-01"),
        itineraryCreated: 8,
        status: "user",
    },
];