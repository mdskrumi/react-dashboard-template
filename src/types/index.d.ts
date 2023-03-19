export interface ButtonInterface {
    title: string;
    handleClick?: Function;
    type?: 'button' | 'submit' | 'reset' | undefined;
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    disabled?: boolean;
    className?: string;
}

export interface LoginUserInterface {
    email: string;
    password: string;
}
export interface RegisterUserInterface {
    firstName: string;
    lastName: string;
    email: string;
}
export interface ForgetPasswordInterface {
    email: string;
}

export interface UserInterface {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}
export interface SearchBarInterface {
    placeholder: string;
    callBackFunction: Function;
    delay: number;
    className?: string;
}

export interface filterListItem {
    id: string;
    title: string;
}

export interface FilterInterface {
    filterList: filterListItem[];
    callBackFunction: Function;
}

export interface BioMarkerInterface {
    biomarker: any;
    value: string;
}

export interface BiomarkerInterface {
    name: string;
    uOfM: string;
}

export interface LegendSubInterface {
    id: number;
    name: string;
    legendType?: string;
}

export interface LegendInterface {
    id: string;
    title: string;
    subList?: LegendSubInterface[];
}

export interface EdgeInterface {
    id: number;
    name: string;
}

export interface RelationshipComponentInterface {
    callBackFunction: Function;
}

export interface CommonInterface {
    id: number;
    name: string;
}

export interface PathwayInterface extends CommonInterface {
    subject: string;
}

export interface BiologicalStateInterface {
    id?: number;
    cellType?: CommonInterface;
    tissue?: CommonInterface;
    species?: CommonInterface;
    subCellularLocation?: CommonInterface;
}

export interface ComponentInterface {
    id: number;
    type: string | undefined;
    name: string;
    synonyms?: string[];
    shortName?: string;
    elementType?: string;
    elementId?: number;
    collectionType?: string;
    biologicalState?: BiologicalStateInterface;
}

export interface RelationShipInterface {
    _id: string;
    tag: CommonInterface;
    edges: CommonInterface[];
    pathway: PathwayInterface;
    parent: ComponentInterface[];
    parentEffect: string;
    child: ComponentInterface[];
    childEffect: string;
    isNested: boolean;
    reactionId: string;
    reactionPattern: string;
}

export interface ISetPassword {
    password: string;
    confirmPassword: string;
}
export interface BreadcrumbMenuInterface {
    title: string;
    link: string;
}
export interface BreadcrumbInterface {
    list: BreadcrumbMenuInterface[];
}

export interface IHelpDeskTicket {
    _id?: string;
    id?: string;
    title: string;
    query: string;
    status?: 'PENDING' | 'RESOLVED';
    type: 'REPORT' | 'SUBSCRIPTION' | 'OTHER';
    response?: string;
    raisedBy?: {
        id: string;
        role: string;
        email: string;
    };
    parentIssueId?: string;
    createdAt?: string;
}

export interface IRelationshipPatternComponent {
    type: string;
    components: CommonInterface[];
}

export interface IPatternComponent {
    components: IRelationshipPatternComponent[];
    callBackFunction: Function;
}

export interface IReactionComponent {
    id: number;
    type: string | undefined;
    name: string;
    edge: CommonInterface;
    synonyms?: string[];
    shortName?: string;
    elementType?: string;
    elementId?: number;
    collectionType?: string;
    biologicalState?: BiologicalStateInterface;
    children: IReactionComponent[];
    isSubPathway?: boolean;
    subPathway?: any;
}
export interface IReactionBoxComponent {
    item: IReactionComponent;
}
