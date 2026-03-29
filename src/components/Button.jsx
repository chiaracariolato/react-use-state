export default function Button({ lang, isActive, onClick }) {
    return (
        <button onClick={onClick} className={isActive ? 'clicked-button' : 'standard-button'}>
            {lang.title}
        </button>
    );
}