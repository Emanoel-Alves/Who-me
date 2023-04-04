import Image from "next/image";
import bgImage from '../../assets/instituto-atlantico.jpeg'
import { Card } from "./Card";

export function ExperienceCard(){
    return (
        <>
            <div className="container w-[50px] items-center flex justify-center">
                <Card />
            </div>
        </>
    )
}