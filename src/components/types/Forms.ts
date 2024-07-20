export interface contact{
    firstName: string
    lastName: string
    mobileNumber: number
    email: string
    description: string

}
export interface serviceRequestQuote{
    name: string;
    email: string;
    mobileNumber: string;
    countryCode: string;
    currency: string;
    budget: string;
    service: string;
    website: string;
}
export interface BookMeetingFormElements {
    name: string;
    email: string;
    mobileNumber: string;
    countryCode: string;
    currency: string;
    budget: string;
    service: string;
    timeSlot: string;
    website: string;
    date: Date;
}
