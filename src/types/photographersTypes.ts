export interface BasePhotographer {
    id: number,
    uid: string,
    password: string,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    avatar: string,
    gender: string,
    phone_number: string,
    social_insurance_number: string,
    date_of_birth: string,
    event_type: {
        type: string[]
    },
    address: {
        city: string,
        street_name: string,
        street_address: string,
        zip_code: string,
        state: string,
        country: string,
        coordinates: {
            lat: number,
            lng: number
        }
    },
    credit_card: {
        cc_number: string
    },
    subscription: {
        plan: string,
        status: string,
        payment_method: string,
        term: string
    }
}

export interface ShortPhotographer {
    id: number,
    firstName: string,
    lastName: string,
    avatar: string,
    state: string,
    city: string
}

export interface PhotographerDetails extends ShortPhotographer{
    phoneNumber: string,
    email: string,
    eventType: string
}