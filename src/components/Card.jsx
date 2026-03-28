export default function Card({ language }) {

    // if (!language) {
    //     return <p>Seleziona un linguaggio</p>;
    // }

    return (
        <div className="card">
            <h3>{language.title}</h3>
            <p>{language.description}</p>
        </div>
    )
}