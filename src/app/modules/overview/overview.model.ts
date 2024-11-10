
export interface FilterDropDownData {
    label: string;
    placeholder: string;
    options: DropDownOptionData[];
}

export interface DropDownOptionData {
    label: string;
    value: string;
}

export interface FilterActionData {
    isClickedClear: boolean;
    department: string | null;
    designation: string | null;
    experience: string |null;
    join_year: string |null;
    team: string | null;
}