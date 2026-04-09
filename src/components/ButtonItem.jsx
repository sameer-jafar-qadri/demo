

function ButtonItem({ number, onClick }) {
    return (
        <button 
        className="bg-green-500"
        onClick={onClick}
        >
        Para {number}</button>
    );
}

export default ButtonItem;