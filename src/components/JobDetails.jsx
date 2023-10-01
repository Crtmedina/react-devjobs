import { useParams } from "react-router-dom"
import jobs from "../data/data";

export function JobDetails() {

    const { position } = useParams();
    const job = jobs.find((item) => item.position === position);

    return (
        <section>
            <div className="container">
                <div className="details__top">
                    <div>
                        <h1>{job.company}</h1>
                        <h6>
                            {job.postedAt} - {job.contract}
                        </h6>
                    </div>
                </div>
                <div className="requeriments">
                    <h1>Requeriments</h1>
                    <ul className="requeriments__item">
                        {job.requirements.reqItem.map((item, index)=>(
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>                
            </div>
        </section>
    )
}