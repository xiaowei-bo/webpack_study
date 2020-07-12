class Mouse {
    private fullName : String;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: String;
    lastName: String
}

function seeYou(person: Person) {
    return `Hello,${person.firstName}${person.lastName}`;
}

let user = new Mouse("Jerry", "&", "Tom");

export {
    Mouse,
    Person,
    seeYou,
    user
}
