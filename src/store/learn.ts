import {makeAutoObservable} from "mobx";

type Skills = {
    id: number,
    name: string,
    status: boolean
}

class Learn {

    skills: Skills[] = [
        {id: 1, name: "Learn CSS", status: false},
        {id: 2, name: "Learn JS", status: false}
    ]

    constructor() {
        makeAutoObservable(this);
    }

    change(id: number) {
        console.log(id);
        this.skills = this.skills.map((skill) => {
            if (skill.id === id) {
                return {...skill, status: !skill.status}
            }
            return skill;
        })
    }
}

export default new Learn();