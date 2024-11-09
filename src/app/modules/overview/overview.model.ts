export interface Employee {
    id: number;
    email: string;
    phone: string;
    name: string;
    username: string;
    website: string;
    address: AddressData;
    company: CompanyData;
}

export interface AddressData {
    city: string;
    street: string;
    zipcode: string;
}

export interface CompanyData {
    bs: string;
    catchPhrase: string;
    name: string;
}
