export default function Button({ lang, isActive, onClick }) {
    return (
        <button onClick={onClick} className={isActive ? 'clickedButton' : 'standardButton'}>
            {lang.title}
        </button>
    );
}