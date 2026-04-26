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

export const message = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        imageUrl: "/assets/images/people-1.jpg",
        createdAt: new Date("2025-01-01"),
        itineraryCreated: 10,
        status: "read",
        subject: "New Consultation Request dsc sdcsdcsdcsdcc cdcsdcdcdcsdc",
        phoneNumber: "+1234567890",
        messages: "rfregege gegrge gergegegv regrge gergr gegeg..."
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        imageUrl: "/assets/images/people-2.jpg",
        createdAt: new Date("2025-08-05"),
        itineraryCreated: 4,
        status: "new",
        subject: "New Consultation Request",
        phoneNumber: "+1234567890",


    },
    {
        id: 3,
        name: "John Smith",
        email: "john.smith@example.com",
        imageUrl: "/assets/images/people-3.jpg",
        createdAt: new Date("2025-01-01"),
        itineraryCreated: 8,
        status: "read",
        subject: "New Consultation Request",
        phoneNumber: "+1234567890",


    },
    {
        id: 3,
        name: "John Smith",
        email: "john.smith@example.com",
        imageUrl: "/assets/images/people-1.jpg",
        createdAt: new Date("2025-01-01"),
        itineraryCreated: 8,
        status: "closed",
        subject: "New Consultation Request",
        phoneNumber: "+1234567890",


    },
    {
        id: 3,
        name: "John Smith",
        email: "john.smith@example.com",
        imageUrl: "/assets/images/people-2.jpg",
        createdAt: new Date("2025-01-01"),
        itineraryCreated: 8,
        status: "read",
        subject: "New Consultation Request",
        phoneNumber: "+1234567890",


    },
    {
        id: 3,
        name: "John Smith",
        email: "john.smith@example.com",
        imageUrl: "/assets/images/people-1.jpg",
        createdAt: new Date("2025-01-01"),
        itineraryCreated: 8,
        status: "new",
        subject: "New Consultation Request",
        phoneNumber: "+1234567890",


    },
];